/*
  카원 고객 전용 견적문의 조회 페이지

  중요:
  아래 두 값에 현재 estimate.js에서 사용 중인
  Supabase Project URL / Publishable Key를 그대로 넣으세요.
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

function won(value) {
  const number = Number(value || 0);
  return number.toLocaleString("ko-KR") + "원";
}

function safe(value, fallback = "-") {
  if (value === null || value === undefined || value === "") {
    return fallback;
  }
  return String(value);
}

function formatDate(value) {
  if (!value) return "-";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "-";
  }

  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function renderComments(comments) {
  const list = $("commentsList");
  list.innerHTML = "";

  if (!Array.isArray(comments) || !comments.length) {
    list.innerHTML = `
      <div class="empty-comments">
        아직 등록된 답변이 없습니다.<br>
        카원 담당자가 확인 후 답변을 남기면 이곳에서 확인할 수 있습니다.
      </div>
    `;
    return;
  }

  comments.forEach(comment => {
    const item = document.createElement("article");
    item.className = "comment";

    const head = document.createElement("div");
    head.className = "comment-head";

    const author = document.createElement("div");
    author.className = "comment-author";
    author.textContent = safe(comment.author, "카원 상담팀");

    const date = document.createElement("div");
    date.className = "comment-date";
    date.textContent = formatDate(comment.created_at);

    const body = document.createElement("div");
    body.className = "comment-body";
    body.textContent = safe(comment.comment, "");

    head.append(author, date);
    item.append(head, body);
    list.appendChild(item);
  });
}

function renderInquiry(payload) {
  const inquiry = payload?.inquiry;

  if (!inquiry) {
    return false;
  }

  $("resultCode").textContent =
    safe(inquiry.inquiry_code);

  $("resultCar").textContent =
    safe(inquiry.car_name, "차량 견적");

  $("resultStatus").textContent =
    safe(inquiry.status, "신규");

  $("resultRegion").textContent =
    safe(inquiry.region);

  $("resultDate").textContent =
    formatDate(inquiry.created_at);

  $("resultEngine").textContent =
    safe(inquiry.engine);

  $("resultDrive").textContent =
    safe(inquiry.drive);

  $("resultSeat").textContent =
    safe(inquiry.seat);

  $("resultTrim").textContent =
    safe(inquiry.trim);

  $("resultColor").textContent =
    safe(inquiry.color);

  $("resultOptions").textContent =
    safe(inquiry.options, "없음");

  $("resultVehiclePrice").textContent =
    won(inquiry.vehicle_price);

  $("resultTax").textContent =
    won(inquiry.acquisition_tax);

  $("resultTotal").textContent =
    won(inquiry.total_price);

  renderComments(payload.comments);

  $("lookupCard").style.display = "none";
  $("resultWrap").classList.add("show");

  return true;
}

async function lookupInquiry(event) {
  event.preventDefault();

  const code =
    $("inquiryCode").value.trim().toUpperCase();

  const pin =
    $("accessPin").value.trim();

  const errorBox =
    $("lookupError");

  const button =
    $("lookupBtn");

  errorBox.textContent = "";

  if (!code) {
    errorBox.textContent = "문의번호를 입력해주세요.";
    $("inquiryCode").focus();
    return;
  }

  if (!/^\d{4,6}$/.test(pin)) {
    errorBox.textContent =
      "조회 비밀번호는 숫자 4~6자리입니다.";
    $("accessPin").focus();
    return;
  }

  if (!supabaseClient) {
    errorBox.textContent =
      "Supabase 연결 정보가 설정되지 않았습니다.";
    return;
  }

  button.disabled = true;
  button.textContent = "조회 중...";

  try {
    const { data, error } =
      await supabaseClient.rpc(
        "get_estimate_inquiry_for_customer",
        {
          p_inquiry_code: code,
          p_access_pin: pin
        }
      );

    if (error) {
      console.error(
        "get_estimate_inquiry_for_customer error:",
        error
      );

      errorBox.textContent =
        "조회 오류: " + error.message;

      return;
    }

    if (!data || !data.inquiry) {
      errorBox.textContent =
        "문의번호 또는 조회 비밀번호가 올바르지 않습니다.";
      return;
    }

    renderInquiry(data);

  } catch (err) {
    console.error(err);

    errorBox.textContent =
      "네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";

  } finally {
    button.disabled = false;
    button.textContent = "내 문의 확인하기";
  }
}

function resetLookup() {
  $("resultWrap").classList.remove("show");
  $("lookupCard").style.display = "";
  $("lookupForm").reset();
  $("lookupError").textContent = "";
  $("commentsList").innerHTML = "";
  $("inquiryCode").focus();
}

$("lookupForm").addEventListener(
  "submit",
  lookupInquiry
);

$("retryBtn").addEventListener(
  "click",
  resetLookup
);
