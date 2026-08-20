/*
  카원 공용 견적 계산기
  --------------------
  보통 이 파일은 건드리지 않아도 됩니다.
  새 차종 추가는 cars.js에서 하세요.
*/

const $ = id => document.getElementById(id);

const params = new URLSearchParams(window.location.search);
const carId = params.get("car") || "sorento";
const CAR = window.CAR_DATA ? window.CAR_DATA[carId] : null;

if (!CAR) {
  $("estimatePage").style.display = "none";
  $("errorBox").style.display = "block";
  throw new Error(`CAR_DATA에 "${carId}" 차량이 없습니다.`);
}

const state = {
  engine: CAR.engines[0]?.id || null,
  drive: CAR.drives[0]?.id || null,
  seat: CAR.seats[0]?.id || null,
  trim: CAR.trims[0]?.id || null,
  color: CAR.colors[0]?.id || null,
  options: new Set()
};

function won(number) {
  return Number(number || 0).toLocaleString("ko-KR") + "원";
}

function plusWon(number) {
  return number ? "+" + won(number) : "0원";
}

function getItem(list, id) {
  return (list || []).find(item => item.id === id);
}

function toast(message) {
  const el = $("toast");
  el.textContent = message;
  el.classList.add("show");

  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    el.classList.remove("show");
  }, 2400);
}

function loadVehicleInfo() {
  document.title = `카원 | ${CAR.displayName} 공식견적`;

  $("pageTitle").textContent = `${CAR.displayName} 견적`;
  $("summaryTitle").textContent = `내 ${CAR.displayName.replace(/^\d{4}\s*/, "")} 견적`;

  $("vehicleBrand").textContent = CAR.brand;
  $("vehicleTitle").textContent = CAR.name;
  $("vehicleYear").textContent = CAR.year || "";
  $("vehicleType").textContent = CAR.type || "";

  $("engineHelp").textContent = CAR.engineHelp || "";
  $("trimHelp").textContent = CAR.trimHelp || "";

  $("vehiclePlaceholderTitle").textContent = `${CAR.displayName} 차량 이미지 영역`;

  const image = $("vehicleImage");
  image.alt = CAR.displayName;
  image.src = CAR.image || "";
}

function renderSimpleChoices(containerId, items, stateKey) {
  const container = $(containerId);
  container.innerHTML = "";

  (items || []).forEach(item => {
    const button = document.createElement("button");
    button.type = "button";
    button.className =
      "choice" + (state[stateKey] === item.id ? " active" : "");

    button.innerHTML = `
      <span class="choice-name">${item.name}</span>
      <span class="choice-sub">${item.sub || ""}</span>
      ${item.price ? `<span class="choice-price">+${won(item.price)}</span>` : ""}
    `;

    button.addEventListener("click", () => {
      state[stateKey] = item.id;
      renderAll();
    });

    container.appendChild(button);
  });
}

function renderTrims() {
  const container = $("trimList");
  container.innerHTML = "";

  (CAR.trims || []).forEach(item => {
    const button = document.createElement("button");
    button.type = "button";
    button.className =
      "choice trim-item" + (state.trim === item.id ? " active" : "");

    button.innerHTML = `
      <div>
        <span class="choice-name">${item.name}</span>
        <span class="choice-sub">${item.sub || ""}</span>
      </div>
      <span class="trim-price">${won(item.price)}</span>
    `;

    button.addEventListener("click", () => {
      if (state.trim !== item.id) {
        state.trim = item.id;
        state.options.clear();
        toast("트림이 변경되어 선택품목을 초기화했습니다.");
      }

      renderAll();
    });

    container.appendChild(button);
  });
}

function renderColors() {
  const container = $("colorList");
  container.innerHTML = "";

  (CAR.colors || []).forEach(item => {
    const button = document.createElement("button");
    button.type = "button";
    button.className =
      "choice color-choice" + (state.color === item.id ? " active" : "");

    button.innerHTML = `
      <div class="swatch" style="background:${item.color || "#ddd"}"></div>
      <span class="choice-name">${item.name}</span>
      <span class="choice-sub">
        ${item.price ? "+" + won(item.price) : "추가금 없음"}
      </span>
    `;

    button.addEventListener("click", () => {
      state.color = item.id;
      renderAll();
    });

    container.appendChild(button);
  });
}

function renderOptions() {
  const container = $("optionList");
  const list = CAR.options?.[state.trim] || [];
  container.innerHTML = "";

  if (!list.length) {
    container.innerHTML =
      `<div class="empty-options">선택 가능한 옵션이 없습니다.</div>`;
    return;
  }

  list.forEach(item => {
    const selected = state.options.has(item.id);

    const button = document.createElement("button");
    button.type = "button";
    button.className =
      "choice option-item" + (selected ? " active" : "");

    button.innerHTML = `
      <div>
        <span class="choice-name">${item.name}</span>
        ${item.note ? `<span class="dependency">${item.note}</span>` : ""}
      </div>
      <span class="option-price">+${won(item.price)}</span>
    `;

    button.addEventListener("click", () => {
      if (state.options.has(item.id)) {
        state.options.delete(item.id);

        // 이 옵션을 필수조건으로 요구하는 다른 옵션도 함께 해제합니다.
        list
          .filter(option =>
            option.requires === item.id &&
            state.options.has(option.id)
          )
          .forEach(option => {
            state.options.delete(option.id);
          });

      } else {
        // 필수 옵션이 있는 경우 자동 선택합니다.
        if (item.requires && !state.options.has(item.requires)) {
          state.options.add(item.requires);

          const required =
            list.find(option => option.id === item.requires);

          toast(
            `${required?.name || "필수 옵션"}을 함께 선택했습니다.`
          );
        }

        state.options.add(item.id);
      }

      renderAll();
    });

    container.appendChild(button);
  });
}

function calculateTax(total) {
  const rate = CAR.tax?.rate ?? 0.07;
  const vatIncluded = CAR.tax?.vatIncluded !== false;

  // 차량 표시가격에 VAT가 포함된 일반적인 승용차 가격표를 가정합니다.
  const taxBase = vatIncluded
    ? Math.floor(total / 1.1)
    : total;

  const acquisitionTax =
    Math.floor(taxBase * rate);

  return {
    rate,
    taxBase,
    acquisitionTax,
    grandTotal: total + acquisitionTax
  };
}

function updateSummary() {
  const engine = getItem(CAR.engines, state.engine);
  const drive = getItem(CAR.drives, state.drive);
  const seat = getItem(CAR.seats, state.seat);
  const trim = getItem(CAR.trims, state.trim);
  const color = getItem(CAR.colors, state.color);

  const currentOptions =
    CAR.options?.[state.trim] || [];

  const selectedOptions =
    currentOptions.filter(option =>
      state.options.has(option.id)
    );

  const configPrice =
    (engine?.price || 0) +
    (drive?.price || 0) +
    (seat?.price || 0);

  const optionPrice =
    selectedOptions.reduce(
      (sum, item) => sum + (item.price || 0),
      0
    );

  const total =
    (trim?.price || 0) +
    configPrice +
    (color?.price || 0) +
    optionPrice;

  const tax = calculateTax(total);

  $("sumEngine").textContent = engine?.name || "-";
  $("sumDrive").textContent = drive?.name || "-";
  $("sumSeat").textContent = seat?.name || "-";
  $("sumTrim").textContent = trim?.name || "-";
  $("sumColor").textContent = color?.name || "-";
  $("sumOptions").textContent =
    selectedOptions.length
      ? selectedOptions.map(item => item.name).join(", ")
      : "없음";

  $("basePrice").textContent =
    won(trim?.price || 0);

  $("configPrice").textContent =
    plusWon(configPrice);

  $("colorPrice").textContent =
    plusWon(color?.price || 0);

  $("optionPrice").textContent =
    plusWon(optionPrice);

  $("totalPrice").textContent =
    won(total);

  $("taxBasePrice").textContent =
    won(tax.taxBase);

  $("taxRate").textContent =
    `${(tax.rate * 100).toFixed(0)}%`;

  $("acquisitionTax").textContent =
    won(tax.acquisitionTax);

  $("grandTotal").textContent =
    won(tax.grandTotal);

  $("vehicleDescription").innerHTML =
    `${engine?.name || ""} · ${seat?.name || ""} · ${drive?.name || ""}` +
    (engine?.sub ? `<br>${engine.sub}` : "");
}

function renderAll() {
  renderSimpleChoices(
    "engineList",
    CAR.engines,
    "engine"
  );

  renderSimpleChoices(
    "driveList",
    CAR.drives,
    "drive"
  );

  renderSimpleChoices(
    "seatList",
    CAR.seats,
    "seat"
  );

  renderTrims();
  renderColors();
  renderOptions();
  updateSummary();
}

window.addEventListener("load", () => {
  loadVehicleInfo();
  renderAll();
});
