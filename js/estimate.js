/*
  카원 공용 견적 계산기
  --------------------
  보통 이 파일은 건드리지 않아도 됩니다.
  새 차종 추가는 cars.js에서 하세요.
*/


/* Supabase 연결 정보: 아래 두 값만 바꾸세요 */
const SUPABASE_URL = "https://ugnfrdbqqvfwnxcmlhnp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_HYUeFJMb-bRHLNJAEbiMHw_5K4IJzq5";

const supabaseClient =
  window.supabase &&
  !SUPABASE_URL.startsWith("여기에_") &&
  !SUPABASE_PUBLISHABLE_KEY.startsWith("여기에_")
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
    : null;

const $ = id => document.getElementById(id);

const params = new URLSearchParams(window.location.search);
const carId = params.get("car") || "sorento";
const requestedSeat = params.get("seat");
const CAR = window.CAR_DATA ? window.CAR_DATA[carId] : null;

if (!CAR) {
  $("estimatePage").style.display = "none";
  $("errorBox").style.display = "block";
  throw new Error(`CAR_DATA에 "${carId}" 차량이 없습니다.`);
}

const firstEngine = CAR.engines[0]?.id || null;

const state = {
  engine: firstEngine,
  drive: null,
  seat: null,
  trim: null,
  color: null,
  options: new Set(),
  extra: {}
};

resetDependentSelections(requestedSeat);

function won(number) {
  return Number(number || 0).toLocaleString("ko-KR") + "원";
}

function plusWon(number) {
  return number ? "+" + won(number) : "0원";
}

function getItem(list, id) {
  return (list || []).find(item => item.id === id);
}

function getCurrentDrives() {
  return (
    CAR.drivesByEngineAndSeat?.[state.engine]?.[state.seat] ||
    CAR.drivesBySeat?.[state.seat] ||
    CAR.drivesByEngine?.[state.engine] ||
    CAR.drives ||
    []
  );
}

function getCurrentSeats() {
  return (
    CAR.seatsByEngine?.[state.engine] ||
    CAR.seats ||
    []
  );
}

function getCurrentTrims() {
  return (
    CAR.trimsByEngineAndSeat?.[state.engine]?.[state.seat] ||
    CAR.trimsBySeat?.[state.seat] ||
    CAR.trimsByEngine?.[state.engine] ||
    CAR.trims ||
    []
  );
}

function getExtraGroups() {
  return CAR.extraChoiceGroups || [];
}

function matchesExtraCondition(item) {
  if (
    item.allowedEngines &&
    !item.allowedEngines.includes(state.engine)
  ) {
    return false;
  }

  if (item.allowedExtra) {
    for (const [groupId, allowed] of Object.entries(item.allowedExtra)) {
      const values = Array.isArray(allowed) ? allowed : [allowed];
      if (!values.includes(state.extra[groupId])) {
        return false;
      }
    }
  }

  if (item.excludedWhen) {
    const excluded = item.excludedWhen.some(rule => {
      if (rule.engine && rule.engine !== state.engine) {
        return false;
      }

      if (rule.extra) {
        return Object.entries(rule.extra).every(
          ([groupId, value]) => state.extra[groupId] === value
        );
      }

      return true;
    });

    if (excluded) return false;
  }

  return true;
}

function getExtraGroupItems(group) {
  return (group.items || []).filter(matchesExtraCondition);
}

function normalizeExtraSelections() {
  // 앞 그룹 변경이 뒷 그룹 조건에 영향을 줄 수 있어 두 번 정규화합니다.
  for (let pass = 0; pass < 2; pass++) {
    getExtraGroups().forEach(group => {
      const available = getExtraGroupItems(group);

      if (
        !available.some(
          item => item.id === state.extra[group.id]
        )
      ) {
        state.extra[group.id] =
          available[0]?.id || null;
      }
    });
  }
}

function getSelectedExtraItems() {
  return getExtraGroups()
    .map(group => {
      const item = getItem(
        getExtraGroupItems(group),
        state.extra[group.id]
      );

      return item
        ? { group, item }
        : null;
    })
    .filter(Boolean);
}

function getRawCurrentOptions() {
  return (
    CAR.optionsByEngineAndSeat?.[state.engine]?.[state.seat]?.[state.trim] ||
    CAR.optionsBySeat?.[state.seat]?.[state.trim] ||
    CAR.optionsByEngine?.[state.engine]?.[state.trim] ||
    CAR.options?.[state.trim] ||
    []
  ).filter(matchesExtraCondition);
}

function getCurrentOptions() {
  const raw = getRawCurrentOptions();

  const includedIds = new Set();

  raw.forEach(item => {
    if (
      state.options.has(item.id) &&
      Array.isArray(item.includes)
    ) {
      item.includes.forEach(id =>
        includedIds.add(id)
      );
    }
  });

  return raw.filter(
    item => !includedIds.has(item.id)
  );
}

function normalizeSelectedOptions() {
  const raw = getRawCurrentOptions();
  const rawIds = new Set(raw.map(item => item.id));

  [...state.options].forEach(id => {
    if (!rawIds.has(id)) {
      state.options.delete(id);
    }
  });

  raw.forEach(item => {
    if (
      state.options.has(item.id) &&
      Array.isArray(item.includes)
    ) {
      item.includes.forEach(id =>
        state.options.delete(id)
      );
    }
  });
}

function getAvailableColors() {
  return (CAR.colors || []).filter(color => {
    if (color.allowedSeats && !color.allowedSeats.includes(state.seat)) {
      return false;
    }
    if (color.allowedTrims && !color.allowedTrims.includes(state.trim)) {
      return false;
    }
    return true;
  });
}

function resetDependentSelections(preferredSeat = null) {
  const seats = getCurrentSeats();

  if (
    preferredSeat &&
    seats.some(item => item.id === preferredSeat)
  ) {
    state.seat = preferredSeat;
  } else if (
    !state.seat ||
    !seats.some(item => item.id === state.seat)
  ) {
    state.seat = seats[0]?.id || null;
  }

  const drives = getCurrentDrives();
  state.drive = drives[0]?.id || null;

  const trims = getCurrentTrims();
  state.trim = trims[0]?.id || null;

  state.options.clear();

  const colors = getAvailableColors();
  state.color = colors[0]?.id || null;

  normalizeExtraSelections();
  normalizeSelectedOptions();
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


function normalizeEstimateNavigation() {
  const back = $("backToCars");
  if (back) {
    back.href = new URL("cars.html", window.location.href).href;
  }
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
  const placeholder = $("vehiclePlaceholder");

  image.alt = CAR.displayName;

  /*
    핵심 수정:
    estimate.html의 초기 src=""에서 발생할 수 있는 onerror와
    display:none 잔류 문제를 막기 위해 이벤트를 JS에서 먼저 연결하고
    마지막에 실제 차량 이미지 src를 할당합니다.
  */
  image.onload = function () {
    this.style.display = "block";

    if (placeholder) {
      placeholder.style.display = "none";
    }
  };

  image.onerror = function () {
    this.style.display = "none";

    if (placeholder) {
      placeholder.style.display = "block";
    }
  };

  image.style.display = "block";

  if (placeholder) {
    placeholder.style.display = "block";
  }

  const imagePath = String(CAR.image || "").replace(/^\.\//, "");

  if (imagePath) {
    image.src = imagePath;
  } else {
    image.removeAttribute("src");
    image.style.display = "none";
  }

  const hiddenSections = new Set(CAR.hiddenSections || []);

  [
    ["seat", "seatList"],
    ["trim", "trimList"]
  ].forEach(([key, id]) => {
    const card = $(id)?.closest(".card");
    if (card) {
      card.style.display =
        hiddenSections.has(key)
          ? "none"
          : "";
    }
  });
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
      const changed = state[stateKey] !== item.id;
      state[stateKey] = item.id;

      if (changed && stateKey === "engine") {
        resetDependentSelections(state.seat);
        toast("파워트레인이 변경되어 트림과 옵션을 새 기준으로 변경했습니다.");
      }

      if (changed && stateKey === "seat") {
        const drives = getCurrentDrives();
        if (!drives.some(drive => drive.id === state.drive)) {
          state.drive = drives[0]?.id || null;
        }

        const trims = getCurrentTrims();
        state.trim = trims[0]?.id || null;
        state.options.clear();

        const colors = getAvailableColors();
        if (!colors.some(color => color.id === state.color)) {
          state.color = colors[0]?.id || null;
        }

        normalizeExtraSelections();
        normalizeSelectedOptions();

        toast("인승이 변경되어 트림과 옵션을 새 기준으로 변경했습니다.");
      }

      renderAll();
    });

    container.appendChild(button);
  });
}


function createExtraSection(group) {
  const section = document.createElement("section");
  section.className = "card";
  section.dataset.caroneExtraSection = group.id;

  const head = document.createElement("div");
  head.className = "section-head";
  head.innerHTML = `
    <div class="step">${group.step || "•"}</div>
    <div>
      <h2>${group.title}</h2>
      <p class="section-sub">${group.help || ""}</p>
    </div>
  `;

  const grid = document.createElement("div");
  grid.className = "grid-select";

  getExtraGroupItems(group).forEach(item => {
    const button = document.createElement("button");
    button.type = "button";
    button.className =
      "choice" +
      (state.extra[group.id] === item.id
        ? " active"
        : "");

    button.innerHTML = `
      <span class="choice-name">${item.name}</span>
      <span class="choice-sub">${item.sub || ""}</span>
      ${item.price
        ? `<span class="choice-price">+${won(item.price)}</span>`
        : ""}
    `;

    button.addEventListener("click", () => {
      const changed =
        state.extra[group.id] !== item.id;

      state.extra[group.id] = item.id;

      if (changed) {
        normalizeExtraSelections();
        normalizeSelectedOptions();
      }

      renderAll();
    });

    grid.appendChild(button);
  });

  section.append(head, grid);

  return section;
}

function renderExtraGroups() {
  document
    .querySelectorAll("[data-carone-extra-section]")
    .forEach(node => node.remove());

  const colorCard =
    $("colorList")?.closest(".card");

  const optionCard =
    $("optionList")?.closest(".card");

  if (!colorCard || !optionCard) return;

  getExtraGroups().forEach(group => {
    const section =
      createExtraSection(group);

    if (group.position === "beforeColor") {
      colorCard.parentNode.insertBefore(
        section,
        colorCard
      );
    } else {
      optionCard.parentNode.insertBefore(
        section,
        optionCard
      );
    }
  });
}

function renderTrims() {
  const container = $("trimList");
  container.innerHTML = "";

  getCurrentTrims().forEach(item => {
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

        const availableColors = getAvailableColors();
        if (!availableColors.some(color => color.id === state.color)) {
          state.color = availableColors[0]?.id || null;
        }

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

  getAvailableColors().forEach(item => {
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
  const list = getCurrentOptions();
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
            getRawCurrentOptions().find(
              option => option.id === item.requires
            );

          toast(
            `${required?.name || "필수 옵션"}을 함께 선택했습니다.`
          );
        }

        // 함께 선택할 수 없는 옵션은 자동으로 해제합니다.
        if (Array.isArray(item.excludes)) {
          item.excludes.forEach(id => {
            if (state.options.has(id)) {
              state.options.delete(id);
            }
          });
        }

        // 패키지에 포함된 개별 옵션은 중복 계산하지 않습니다.
        if (Array.isArray(item.includes)) {
          item.includes.forEach(id =>
            state.options.delete(id)
          );
        }

        state.options.add(item.id);
      }

      normalizeSelectedOptions();
      renderAll();
    });

    container.appendChild(button);
  });
}

function calculateTax(total) {
  const vatIncluded = CAR.tax?.vatIncluded !== false;

  // 차량 표시가격에 VAT가 포함된 경우 부가가치세를 제외한 금액을 과세표준으로 사용합니다.
  const taxBase = vatIncluded
    ? Math.floor(total / 1.1)
    : total;

  /*
    Ray 전용 분기
    cars.js의 CAR.taxByEngine[state.engine].category 값을 읽습니다.

    - light_passenger:
      경형 비영업용 승용자동차 표준세율 4%
      경형자동차 취득세 특례 최대 750,000원

    - light_van:
      경형 승합/화물자동차 표준세율 4%
      현행 경형 승합/화물 취득세 감면 대상이면 전액 면제

    - light_ev_passenger:
      경형 승용차와 전기차 감면이 동시에 해당하므로
      중복 감면 배제 원칙에 따라 더 큰 전기차 감면(최대 1,400,000원) 하나만 적용

    - light_ev_van:
      경형 승합/화물 전액 면제가 전기차 1,400,000원 감면보다 유리하므로 전액 면제
  */
  const engineTax = CAR.taxByEngine?.[state.engine] || null;
  const category = engineTax?.category || "";

  if (
    category === "light_passenger" ||
    category === "light_van" ||
    category === "light_ev_passenger" ||
    category === "light_ev_van"
  ) {
    const rate = 0.04;
    const rawAcquisitionTax = Math.floor(taxBase * rate);

    let taxReduction = 0;

    if (category === "light_passenger") {
      taxReduction = Math.min(rawAcquisitionTax, 750000);
    }

    if (category === "light_van") {
      taxReduction = rawAcquisitionTax;
    }

    if (category === "light_ev_passenger") {
      taxReduction = Math.min(rawAcquisitionTax, 1400000);
    }

    if (category === "light_ev_van") {
      taxReduction = rawAcquisitionTax;
    }

    const acquisitionTax =
      Math.max(0, rawAcquisitionTax - taxReduction);

    return {
      rate,
      taxBase,
      rawAcquisitionTax,
      taxReduction,
      acquisitionTax,
      grandTotal: total + acquisitionTax
    };
  }

  // 일반 차량은 기존 CAR.tax 로직을 그대로 사용합니다.
  const rate = CAR.tax?.rate ?? 0.07;
  const rawAcquisitionTax =
    Math.floor(taxBase * rate);

  const isEV =
    Array.isArray(CAR.evEngineIds) &&
    CAR.evEngineIds.includes(state.engine);

  const isEcoTaxVehicle =
    Array.isArray(CAR.ecoTaxEngineIds) &&
    CAR.ecoTaxEngineIds.includes(state.engine);

  let taxReduction = 0;

  if (isEV) {
    taxReduction = Math.min(
      rawAcquisitionTax,
      CAR.evAcquisitionTaxReduction || 0
    );
  } else if (isEcoTaxVehicle) {
    taxReduction = Math.min(
      rawAcquisitionTax,
      CAR.ecoAcquisitionTaxReduction || 0
    );
  }

  const acquisitionTax =
    Math.max(0, rawAcquisitionTax - taxReduction);

  return {
    rate,
    taxBase,
    rawAcquisitionTax,
    taxReduction,
    acquisitionTax,
    grandTotal: total + acquisitionTax
  };
}

let currentEstimate = null;

function updateSummary() {
  const engine = getItem(CAR.engines, state.engine);
  const drive = getItem(getCurrentDrives(), state.drive);
  const seat = getItem(getCurrentSeats(), state.seat);
  const trim = getItem(getCurrentTrims(), state.trim);
  const color = getItem(getAvailableColors(), state.color);

  const currentOptions = getCurrentOptions();

  const selectedOptions =
    currentOptions.filter(option =>
      state.options.has(option.id)
    );

  const selectedExtras =
    getSelectedExtraItems();

  const extraPrice =
    selectedExtras.reduce(
      (sum, entry) =>
        sum + (entry.item.price || 0),
      0
    );

  const configPrice =
    (engine?.price || 0) +
    (drive?.price || 0) +
    (seat?.price || 0);

  const optionOnlyPrice =
    selectedOptions.reduce(
      (sum, item) => sum + (item.price || 0),
      0
    );

  const optionPrice =
    optionOnlyPrice + extraPrice;

  const selectedColorPrice =
    color?.priceBySeat?.[state.seat] ??
    color?.price ??
    0;

  const total =
    (trim?.price || 0) +
    configPrice +
    selectedColorPrice +
    optionPrice;

  const tax = calculateTax(total);

  currentEstimate = {
    carId,
    carName: CAR.displayName,
    engine: engine?.name || "",
    drive: drive?.name || "",
    seat: seat?.name || "",
    trim: trim?.name || "",
    color: color?.name || "",
    options: [
      ...selectedExtras.map(
        entry =>
          `${entry.group.summaryLabel || entry.group.title}: ${entry.item.name}`
      ),
      ...selectedOptions.map(item => item.name)
    ],
    vehiclePrice: total,
    acquisitionTax: tax.acquisitionTax,
    totalPrice: tax.grandTotal
  };

  $("sumEngine").textContent = engine?.name || "-";
  $("sumDrive").textContent = drive?.name || "-";
  $("sumSeat").textContent = seat?.name || "-";
  $("sumTrim").textContent = trim?.name || "-";
  $("sumColor").textContent = color?.name || "-";
  const summaryOptions = [
    ...selectedExtras.map(
      entry =>
        `${entry.group.summaryLabel || entry.group.title}: ${entry.item.name}`
    ),
    ...selectedOptions.map(item => item.name)
  ];

  $("sumOptions").textContent =
    summaryOptions.length
      ? summaryOptions.join(", ")
      : "없음";

  $("basePrice").textContent =
    won(trim?.price || 0);

  $("configPrice").textContent =
    plusWon(configPrice);

  $("colorPrice").textContent =
    plusWon(selectedColorPrice);

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


function openInquiryModal() {
  if (!currentEstimate) return;

  restoreInquiryFormUI();
  $("inquiryEstimatePreview").innerHTML = `
    <strong>${currentEstimate.carName} · ${currentEstimate.trim}</strong>
    ${currentEstimate.engine} · ${currentEstimate.drive} · ${currentEstimate.seat}<br>
    ${currentEstimate.color}<br>
    옵션: ${currentEstimate.options.length ? currentEstimate.options.join(", ") : "없음"}<br>
    차량가격: ${won(currentEstimate.vehiclePrice)}<br>
    예상 취득세: ${won(currentEstimate.acquisitionTax)}
  `;
  $("formError").textContent = "";
  $("formSuccess").style.display = "none";
  $("issuedInquiryCode").textContent = "-";
  $("submitInquiryBtn").style.display = "";
  $("submitInquiryBtn").disabled = false;
  $("submitInquiryBtn").textContent = "견적 문의 접수";
  $("inquiryModal").classList.add("open");
  $("inquiryModal").setAttribute("aria-hidden", "false");
}

function closeInquiryModal() {
  $("inquiryModal").classList.remove("open");
  $("inquiryModal").setAttribute("aria-hidden", "true");
}

function normalizePhone(value) {
  return value.replace(/[^0-9]/g, "");
}

async function submitEstimateInquiry(event) {
  event.preventDefault();

  const phone = $("inquiryPhone").value.trim();
  const region = $("inquiryRegion").value.trim();
  const pin = $("inquiryPin").value.trim();
  const pinConfirm = $("inquiryPinConfirm").value.trim();
  const privacyAgreed = $("privacyAgreed").checked;

  const errorBox = $("formError");
  const submitButton = $("submitInquiryBtn");

  errorBox.textContent = "";

  if (normalizePhone(phone).length < 10) {
    errorBox.textContent = "전화번호를 정확히 입력해주세요.";
    $("inquiryPhone").focus();
    return;
  }

  if (!region) {
    errorBox.textContent = "지역을 입력해주세요.";
    $("inquiryRegion").focus();
    return;
  }

  if (!/^\d{4,6}$/.test(pin)) {
    errorBox.textContent = "조회 비밀번호는 숫자 4~6자리로 입력해주세요.";
    $("inquiryPin").focus();
    return;
  }

  if (pin !== pinConfirm) {
    errorBox.textContent = "조회 비밀번호가 서로 일치하지 않습니다.";
    $("inquiryPinConfirm").focus();
    return;
  }

  if (!privacyAgreed) {
    errorBox.textContent = "개인정보 수집 및 이용에 동의해주세요.";
    return;
  }

  if (!supabaseClient) {
    errorBox.textContent = "Supabase 연결 정보가 아직 설정되지 않았습니다.";
    return;
  }

  if (!currentEstimate) {
    errorBox.textContent = "견적 정보를 불러오지 못했습니다.";
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "접수 중...";

  const rpcPayload = {
    p_phone: phone,
    p_region: region,
    p_car_id: currentEstimate.carId,
    p_car_name: currentEstimate.carName,
    p_engine: currentEstimate.engine,
    p_drive: currentEstimate.drive,
    p_seat: currentEstimate.seat,
    p_trim: currentEstimate.trim,
    p_color: currentEstimate.color,
    p_options: currentEstimate.options.join(", "),
    p_vehicle_price: currentEstimate.vehiclePrice,
    p_acquisition_tax: currentEstimate.acquisitionTax,
    p_total_price: currentEstimate.totalPrice,
    p_access_pin: pin
  };

  try {
    const { data, error } = await supabaseClient
      .rpc("create_estimate_inquiry", rpcPayload);

    if (error) {
      console.error("create_estimate_inquiry RPC error:", error);
      errorBox.textContent = "저장 오류: " + error.message;
      submitButton.disabled = false;
      submitButton.textContent = "견적 문의 접수";
      return;
    }

    const result = Array.isArray(data) ? data[0] : data;
    const inquiryCode =
      result?.inquiry_code ||
      result?.inquiryCode ||
      "발급 완료";

    $("issuedInquiryCode").textContent = inquiryCode;

    $("estimateInquiryForm")
      .querySelectorAll(
        ".form-label, .form-input, .pin-helper, .privacy-box, .privacy-check, .form-error"
      )
      .forEach(element => {
        element.style.display = "none";
      });

    submitButton.style.display = "none";
    $("formSuccess").style.display = "block";

  } catch (err) {
    console.error("Inquiry submit network error:", err);
    errorBox.textContent =
      "네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
    submitButton.disabled = false;
    submitButton.textContent = "견적 문의 접수";
  }
}

function restoreInquiryFormUI() {
  const form = $("estimateInquiryForm");

  form
    .querySelectorAll(
      ".form-label, .form-input, .pin-helper, .privacy-box, .privacy-check, .form-error"
    )
    .forEach(element => {
      element.style.display = "";
    });

  form.reset();
  $("formSuccess").style.display = "none";
  $("submitInquiryBtn").style.display = "";
  $("submitInquiryBtn").disabled = false;
  $("submitInquiryBtn").textContent = "견적 문의 접수";
  $("formError").textContent = "";
  $("issuedInquiryCode").textContent = "-";
}

function setupInquiryUI() {
  $("openInquiryBtn")?.addEventListener("click", openInquiryModal);
  $("inquiryClose")?.addEventListener("click", closeInquiryModal);
  $("inquiryBackdrop")?.addEventListener("click", closeInquiryModal);
  $("estimateInquiryForm")?.addEventListener("submit", submitEstimateInquiry);
}

function renderAll() {
  renderSimpleChoices(
    "engineList",
    CAR.engines,
    "engine"
  );

  renderSimpleChoices(
    "driveList",
    getCurrentDrives(),
    "drive"
  );

  renderSimpleChoices(
    "seatList",
    getCurrentSeats(),
    "seat"
  );

  $("trimHelp").textContent =
    CAR.trimHelpByEngineAndSeat?.[state.engine]?.[state.seat] ||
    CAR.trimHelpBySeat?.[state.seat] ||
    CAR.trimHelpByEngine?.[state.engine] ||
    CAR.trimHelp ||
    "";

  normalizeExtraSelections();
  normalizeSelectedOptions();

  renderTrims();
  renderColors();
  renderExtraGroups();
  renderOptions();
  updateSummary();
}

window.addEventListener("load", () => {
  normalizeEstimateNavigation();
  loadVehicleInfo();
  renderAll();
  setupInquiryUI();
});

normalizeEstimateNavigation();
