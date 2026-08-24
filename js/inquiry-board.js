/*
  카원 견적문의 공개 게시판

  아래 두 값에 estimate.js / inquiry.js에서 사용 중인
  Supabase Project URL / Publishable Key를 그대로 입력하세요.
*/

const SUPABASE_URL = "https://ugnfrdbqqvfwnxcmlhnp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_HYUeFJMb-bRHLNJAEbiMHw_5K4IJzq5";

const supabaseClient =
  window.supabase &&
  !SUPABASE_URL.startsWith("여기에_") &&
  !SUPABASE_PUBLISHABLE_KEY.startsWith("여기에_")
    ? window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
      )
    : null;

const $ = id => document.getElementById(id);

const PAGE_SIZE = 20;

let currentPage = 1;
let totalItems = 0;
let selectedBoardId = null;

function safe(value, fallback = "-") {
  return value === null || value === undefined || value === ""
    ? fallback
    : String(value);
}

function won(value) {
  return Number(value || 0).toLocaleString("ko-KR") + "원";
}

function formatDate(value, withTime = false) {
  if (!value) return "-";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "-";
  }

  const options = withTime
    ? {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      }
    : {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      };

  return new Intl.DateTimeFormat(
    "ko-KR",
    options
  ).format(date);
}

async function loadBoard() {
  const list = $("boardList");

  if (!supabaseClient) {
    list.innerHTML = `
      <div class="empty">
        Supabase 연결 정보가 설정되지 않았습니다.
      </div>
    `;
    return;
  }

  list.innerHTML = `
    <div class="empty">
      문의 목록을 불러오는 중입니다.
    </div>
  `;

  const offset =
    (currentPage - 1) * PAGE_SIZE;

  const { data, error } =
    await supabaseClient.rpc(
      "get_public_estimate_board",
      {
        p_limit: PAGE_SIZE,
        p_offset: offset
      }
    );

  if (error) {
    console.error(error);

    list.innerHTML = `
      <div class="empty">
        문의 목록을 불러오지 못했습니다.<br>
        ${safe(error.message, "")}
      </div>
    `;

    return;
  }

  const items =
    Array.isArray(data?.items)
      ? data.items
      : [];

  totalItems =
    Number(data?.total || 0);

  renderBoard(items);
  updatePager();
}

function renderBoard(items) {
  const list = $("boardList");
  list.innerHTML = "";

  if (!items.length) {
    list.innerHTML = `
      <div class="empty">
        등록된 견적문의가 없습니다.
      </div>
    `;
    return;
  }

  const startNo =
    totalItems -
    ((currentPage - 1) * PAGE_SIZE);

  items.forEach((item, index) => {
    const button =
      document.createElement("button");

    button.type = "button";
    button.className = "board-row";

    const number =
      Math.max(startNo - index, 1);

    button.innerHTML = `
      <div class="row-no">#${number}</div>
      <div class="row-car">${safe(item.car_name, "차량 견적")}</div>
      <div class="row-region">${safe(item.region)}</div>
      <div>
        <span class="status ${safe(item.status, "신규")}">
          ${safe(item.status, "신규")}
        </span>
      </div>
      <div class="row-date">${formatDate(item.created_at)}</div>
    `;

    button.addEventListener(
      "click",
      () => openPasswordGate(
        item.board_id,
        item.car_name
      )
    );

    list.appendChild(button);
  });
}

function updatePager() {
  const totalPages =
    Math.max(
      1,
      Math.ceil(totalItems / PAGE_SIZE)
    );

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  $("pageInfo").textContent =
    `${currentPage} / ${totalPages}`;

  $("prevBtn").disabled =
    currentPage <= 1;

  $("nextBtn").disabled =
    currentPage >= totalPages;
}

function openModal() {
  $("detailModal").classList.add("open");
  $("detailModal").setAttribute(
    "aria-hidden",
    "false"
  );
}

function closeModal() {
  $("detailModal").classList.remove("open");
  $("detailModal").setAttribute(
    "aria-hidden",
    "true"
  );

  selectedBoardId = null;
  $("pinForm").reset();
  $("pinError").textContent = "";
  $("detail").classList.remove("show");
  $("pinGate").style.display = "";
}

function openPasswordGate(boardId, carName) {
  selectedBoardId =
    Number(boardId);

  $("gateTitle").textContent =
    `${safe(carName, "견적문의")} · 비공개 글`;

  $("pinError").textContent = "";
  $("pinForm").reset();
  $("pinGate").style.display = "";
  $("detail").classList.remove("show");

  openModal();

  setTimeout(() => {
    $("boardPin").focus();
  }, 100);
}

async function unlockBoardItem(event) {
  event.preventDefault();

  const pin =
    $("boardPin").value.trim();

  const errorBox =
    $("pinError");

  const button =
    $("pinBtn");

  errorBox.textContent = "";

  if (!selectedBoardId) {
    errorBox.textContent =
      "문의 정보를 찾을 수 없습니다.";
    return;
  }

  if (!/^\d{4,6}$/.test(pin)) {
    errorBox.textContent =
      "조회 비밀번호는 숫자 4~6자리입니다.";
    return;
  }

  button.disabled = true;
  button.textContent = "확인 중...";

  const { data, error } =
    await supabaseClient.rpc(
      "get_estimate_inquiry_by_id_for_customer",
      {
        p_inquiry_id: selectedBoardId,
        p_access_pin: pin
      }
    );

  button.disabled = false;
  button.textContent = "문의 확인";

  if (error) {
    console.error(error);

    errorBox.textContent =
      "조회 오류: " + error.message;

    return;
  }

  if (!data?.inquiry) {
    errorBox.textContent =
      "조회 비밀번호가 올바르지 않습니다.";
    return;
  }

  showDetail(data);
}

async function quickLookup(event) {
  event.preventDefault();

  const code =
    $("quickCode").value
      .trim()
      .toUpperCase();

  const pin =
    $("quickPin").value.trim();

  const errorBox =
    $("quickError");

  const button =
    $("quickBtn");

  errorBox.textContent = "";

  if (!code) {
    errorBox.textContent =
      "문의번호를 입력해주세요.";
    return;
  }

  if (!/^\d{4,6}$/.test(pin)) {
    errorBox.textContent =
      "조회 비밀번호는 숫자 4~6자리입니다.";
    return;
  }

  if (!supabaseClient) {
    errorBox.textContent =
      "Supabase 연결 정보가 설정되지 않았습니다.";
    return;
  }

  button.disabled = true;
  button.textContent = "조회 중...";

  const { data, error } =
    await supabaseClient.rpc(
      "get_estimate_inquiry_for_customer",
      {
        p_inquiry_code: code,
        p_access_pin: pin
      }
    );

  button.disabled = false;
  button.textContent = "바로 조회";

  if (error) {
    console.error(error);

    errorBox.textContent =
      "조회 오류: " + error.message;

    return;
  }

  if (!data?.inquiry) {
    errorBox.textContent =
      "문의번호 또는 조회 비밀번호가 올바르지 않습니다.";
    return;
  }

  selectedBoardId =
    data.inquiry.id;

  $("pinGate").style.display = "none";
  openModal();
  showDetail(data);
}

function showDetail(payload) {
  const inquiry =
    payload?.inquiry;

  if (!inquiry) return;

  $("pinGate").style.display = "none";
  $("detail").classList.add("show");

  $("detailCode").textContent =
    safe(inquiry.inquiry_code);

  $("detailCar").textContent =
    safe(inquiry.car_name, "차량 견적");

  $("detailStatus").textContent =
    safe(inquiry.status, "신규");

  $("detailRegion").textContent =
    safe(inquiry.region);

  $("detailDate").textContent =
    formatDate(inquiry.created_at, true);

  $("detailEngine").textContent =
    safe(inquiry.engine);

  $("detailDrive").textContent =
    safe(inquiry.drive);

  $("detailSeat").textContent =
    safe(inquiry.seat);

  $("detailTrim").textContent =
    safe(inquiry.trim);

  $("detailColor").textContent =
    safe(inquiry.color);

  $("detailOptions").textContent =
    safe(inquiry.options, "없음");

  $("detailVehiclePrice").textContent =
    won(inquiry.vehicle_price);

  $("detailTax").textContent =
    won(inquiry.acquisition_tax);

  $("detailTotal").textContent =
    won(inquiry.total_price);

  renderComments(payload.comments || []);
}

function renderComments(comments) {
  const list =
    $("commentList");

  list.innerHTML = "";

  if (!Array.isArray(comments) || !comments.length) {
    list.innerHTML = `
      <div class="empty">
        아직 등록된 답변이 없습니다.<br>
        카원 담당자가 답변을 남기면 이곳에서 확인할 수 있습니다.
      </div>
    `;

    return;
  }

  comments.forEach(comment => {
    const article =
      document.createElement("article");

    article.className =
      "comment";

    const head =
      document.createElement("div");

    head.className =
      "comment-head";

    const author =
      document.createElement("div");

    author.className =
      "comment-author";

    author.textContent =
      safe(
        comment.author,
        "카원 상담팀"
      );

    const date =
      document.createElement("div");

    date.className =
      "comment-date";

    date.textContent =
      formatDate(
        comment.created_at,
        true
      );

    const body =
      document.createElement("div");

    body.className =
      "comment-body";

    body.textContent =
      safe(comment.comment, "");

    head.append(
      author,
      date
    );

    article.append(
      head,
      body
    );

    list.appendChild(article);
  });
}

$("quickForm").addEventListener(
  "submit",
  quickLookup
);

$("pinForm").addEventListener(
  "submit",
  unlockBoardItem
);

$("closeModal").addEventListener(
  "click",
  closeModal
);

$("modalBackdrop").addEventListener(
  "click",
  closeModal
);

$("prevBtn").addEventListener(
  "click",
  () => {
    if (currentPage > 1) {
      currentPage -= 1;
      loadBoard();
    }
  }
);

$("nextBtn").addEventListener(
  "click",
  () => {
    const totalPages =
      Math.max(
        1,
        Math.ceil(totalItems / PAGE_SIZE)
      );

    if (currentPage < totalPages) {
      currentPage += 1;
      loadBoard();
    }
  }
);

document.addEventListener(
  "keydown",
  event => {
    if (event.key === "Escape") {
      closeModal();
    }
  }
);

loadBoard();
