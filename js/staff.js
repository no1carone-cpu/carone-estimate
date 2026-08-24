/*
  카원 직원용 문의관리

  아래 두 값에 현재 estimate.js에서 사용 중인
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

let inquiries = [];
let activeInquiry = null;
let activeFilter = "all";

function won(value) {
  return Number(value || 0).toLocaleString("ko-KR") + "원";
}

function safe(value, fallback = "-") {
  return value === null || value === undefined || value === ""
    ? fallback
    : String(value);
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

function showLogin() {
  $("loginWrap").style.display = "";
  $("admin").style.display = "none";
  $("accountBox").style.display = "none";
}

function showAdmin(user) {
  $("loginWrap").style.display = "none";
  $("admin").style.display = "block";
  $("accountBox").style.display = "flex";
  $("accountEmail").textContent = user?.email || "직원";
}

async function login(event) {
  event.preventDefault();

  const email = $("loginEmail").value.trim();
  const password = $("loginPassword").value;
  const message = $("loginMessage");
  const button = $("loginBtn");

  message.textContent = "";

  if (!supabaseClient) {
    message.textContent =
      "Supabase 연결 정보가 설정되지 않았습니다.";
    return;
  }

  if (!email || !password) {
    message.textContent =
      "이메일과 비밀번호를 입력해주세요.";
    return;
  }

  button.disabled = true;
  button.textContent = "로그인 중...";

  const { data, error } =
    await supabaseClient.auth.signInWithPassword({
      email,
      password
    });

  button.disabled = false;
  button.textContent = "로그인";

  if (error) {
    console.error(error);
    message.textContent =
      "로그인 실패: " + error.message;
    return;
  }

  showAdmin(data.user);
  await loadInquiries();
}

async function logout() {
  if (!supabaseClient) return;

  await supabaseClient.auth.signOut();

  activeInquiry = null;
  inquiries = [];

  $("detailContent").style.display = "none";
  $("detailPlaceholder").style.display = "";

  showLogin();
}

async function loadInquiries() {
  if (!supabaseClient) return;

  $("loadingBar").style.display = "block";

  const { data, error } =
    await supabaseClient
      .from("estimate_inquiries")
      .select(`
        id,
        created_at,
        phone,
        region,
        car_id,
        car_name,
        engine,
        drive,
        seat,
        trim,
        color,
        options,
        vehicle_price,
        acquisition_tax,
        total_price,
        status,
        inquiry_code
      `)
      .order("created_at", { ascending: false });

  $("loadingBar").style.display = "none";

  if (error) {
    console.error(error);

    $("inquiryList").innerHTML = `
      <div class="empty">
        문의 목록을 불러오지 못했습니다.<br>
        ${safe(error.message, "")}
      </div>
    `;

    return;
  }

  inquiries = data || [];

  updateStats();
  renderInquiryList();

  if (
    activeInquiry &&
    inquiries.some(item => item.id === activeInquiry.id)
  ) {
    const refreshed =
      inquiries.find(item => item.id === activeInquiry.id);

    await openInquiry(refreshed);
  }
}

function updateStats() {
  $("statAll").textContent = inquiries.length;

  $("statNew").textContent =
    inquiries.filter(item => item.status === "신규").length;

  $("statProgress").textContent =
    inquiries.filter(item => item.status === "상담중").length;

  $("statDone").textContent =
    inquiries.filter(item =>
      ["답변완료", "계약완료"].includes(item.status)
    ).length;
}

function getFilteredInquiries() {
  const q =
    $("searchInput").value.trim().toLowerCase();

  return inquiries.filter(item => {
    const matchesStatus =
      activeFilter === "all" ||
      item.status === activeFilter;

    if (!matchesStatus) return false;

    if (!q) return true;

    const haystack = [
      item.inquiry_code,
      item.car_name,
      item.trim,
      item.phone,
      item.region
    ]
      .map(value => safe(value, "").toLowerCase())
      .join(" ");

    return haystack.includes(q);
  });
}

function renderInquiryList() {
  const list = $("inquiryList");
  const data = getFilteredInquiries();

  list.innerHTML = "";

  if (!data.length) {
    list.innerHTML = `
      <div class="empty">
        조건에 맞는 문의가 없습니다.
      </div>
    `;
    return;
  }

  data.forEach(item => {
    const button = document.createElement("button");
    button.type = "button";
    button.className =
      "inquiry-item" +
      (activeInquiry?.id === item.id ? " active" : "");

    button.innerHTML = `
      <div class="item-top">
        <div>
          <div class="item-code">
            ${safe(item.inquiry_code)}
          </div>

          <div class="item-car">
            ${safe(item.car_name)}
            · ${safe(item.trim)}
          </div>
        </div>

        <span class="status-badge ${safe(item.status, "신규")}">
          ${safe(item.status, "신규")}
        </span>
      </div>

      <div class="item-meta">
        ${safe(item.region)}
        · ${safe(item.phone)}
        <br>
        ${formatDate(item.created_at)}
      </div>
    `;

    button.addEventListener(
      "click",
      () => openInquiry(item)
    );

    list.appendChild(button);
  });
}

async function openInquiry(item) {
  activeInquiry = item;

  renderInquiryList();

  $("detailPlaceholder").style.display = "none";
  $("detailContent").style.display = "block";

  $("detailCode").textContent =
    safe(item.inquiry_code);

  $("detailCar").textContent =
    `${safe(item.car_name)} · ${safe(item.trim)}`;

  $("detailPhone").textContent =
    safe(item.phone);

  $("detailRegion").textContent =
    safe(item.region);

  $("detailDate").textContent =
    formatDate(item.created_at);

  $("detailEngine").textContent =
    safe(item.engine);

  $("detailDrive").textContent =
    safe(item.drive);

  $("detailSeat").textContent =
    safe(item.seat);

  $("detailTrim").textContent =
    safe(item.trim);

  $("detailColor").textContent =
    safe(item.color);

  $("detailOptions").textContent =
    safe(item.options, "없음");

  $("detailVehiclePrice").textContent =
    won(item.vehicle_price);

  $("detailTax").textContent =
    won(item.acquisition_tax);

  $("detailTotal").textContent =
    won(item.total_price);

  $("statusSelect").value =
    item.status || "신규";

  $("statusMessage").textContent = "";
  $("replyMessage").textContent = "";

  await loadComments(item.id);
}

async function loadComments(inquiryId) {
  const list = $("commentList");

  list.innerHTML = `
    <div class="empty">답변을 불러오는 중...</div>
  `;

  const { data, error } =
    await supabaseClient
      .from("inquiry_comments")
      .select(`
        id,
        author,
        comment,
        created_at
      `)
      .eq("inquiry_id", inquiryId)
      .order("created_at", { ascending: true });

  if (error) {
    console.error(error);

    list.innerHTML = `
      <div class="empty">
        답변을 불러오지 못했습니다.
      </div>
    `;

    return;
  }

  renderComments(data || []);
}

function renderComments(comments) {
  const list = $("commentList");
  list.innerHTML = "";

  if (!comments.length) {
    list.innerHTML = `
      <div class="empty">
        아직 등록된 답변이 없습니다.
      </div>
    `;
    return;
  }

  comments.forEach(comment => {
    const article = document.createElement("article");
    article.className = "comment";

    const head = document.createElement("div");
    head.className = "comment-head";

    const author = document.createElement("div");
    author.className = "comment-author";
    author.textContent =
      safe(comment.author, "카원 상담팀");

    const date = document.createElement("div");
    date.className = "comment-date";
    date.textContent =
      formatDate(comment.created_at);

    const body = document.createElement("div");
    body.className = "comment-body";
    body.textContent =
      safe(comment.comment, "");

    head.append(author, date);
    article.append(head, body);
    list.appendChild(article);
  });
}

async function saveStatus() {
  if (!activeInquiry) return;

  const status =
    $("statusSelect").value;

  const message =
    $("statusMessage");

  const button =
    $("saveStatusBtn");

  message.textContent = "";
  button.disabled = true;
  button.textContent = "저장 중";

  const { error } =
    await supabaseClient
      .from("estimate_inquiries")
      .update({ status })
      .eq("id", activeInquiry.id);

  button.disabled = false;
  button.textContent = "상태 저장";

  if (error) {
    console.error(error);
    message.textContent =
      "저장 실패: " + error.message;
    return;
  }

  activeInquiry.status = status;

  const index =
    inquiries.findIndex(
      item => item.id === activeInquiry.id
    );

  if (index >= 0) {
    inquiries[index].status = status;
  }

  message.style.color = "#087c79";
  message.textContent = "저장되었습니다.";

  updateStats();
  renderInquiryList();
}

async function submitReply() {
  if (!activeInquiry) return;

  const author =
    $("replyAuthor").value.trim() ||
    "카원 상담팀";

  const comment =
    $("replyText").value.trim();

  const message =
    $("replyMessage");

  const button =
    $("submitReplyBtn");

  message.textContent = "";
  message.style.color = "";

  if (!comment) {
    message.textContent =
      "답변 내용을 입력해주세요.";
    $("replyText").focus();
    return;
  }

  button.disabled = true;
  button.textContent = "등록 중";

  const { error } =
    await supabaseClient
      .from("inquiry_comments")
      .insert([{
        inquiry_id: activeInquiry.id,
        author,
        comment
      }]);

  if (error) {
    console.error(error);

    button.disabled = false;
    button.textContent = "답변 등록";

    message.textContent =
      "등록 실패: " + error.message;

    return;
  }

  // 답변을 등록하면 신규/상담중 상태는 자동으로 답변완료로 변경
  if (
    activeInquiry.status === "신규" ||
    activeInquiry.status === "상담중"
  ) {
    const { error: statusError } =
      await supabaseClient
        .from("estimate_inquiries")
        .update({ status: "답변완료" })
        .eq("id", activeInquiry.id);

    if (!statusError) {
      activeInquiry.status = "답변완료";

      const index =
        inquiries.findIndex(
          item => item.id === activeInquiry.id
        );

      if (index >= 0) {
        inquiries[index].status = "답변완료";
      }

      $("statusSelect").value = "답변완료";
    }
  }

  $("replyText").value = "";

  button.disabled = false;
  button.textContent = "답변 등록";

  message.style.color = "#087c79";
  message.textContent =
    "고객 답변이 등록되었습니다.";

  updateStats();
  renderInquiryList();

  await loadComments(activeInquiry.id);
}

function bindUI() {
  $("loginForm").addEventListener(
    "submit",
    login
  );

  $("logoutBtn").addEventListener(
    "click",
    logout
  );

  $("refreshBtn").addEventListener(
    "click",
    loadInquiries
  );

  $("saveStatusBtn").addEventListener(
    "click",
    saveStatus
  );

  $("submitReplyBtn").addEventListener(
    "click",
    submitReply
  );

  $("searchInput").addEventListener(
    "input",
    renderInquiryList
  );

  document
    .querySelectorAll(".filter-btn")
    .forEach(button => {
      button.addEventListener("click", () => {
        document
          .querySelectorAll(".filter-btn")
          .forEach(item =>
            item.classList.remove("active")
          );

        button.classList.add("active");

        activeFilter =
          button.dataset.status;

        renderInquiryList();
      });
    });
}

async function init() {
  bindUI();

  if (!supabaseClient) {
    $("loginMessage").textContent =
      "Supabase 연결 정보가 설정되지 않았습니다.";
    showLogin();
    return;
  }

  const {
    data: { session }
  } =
    await supabaseClient.auth.getSession();

  if (session?.user) {
    showAdmin(session.user);
    await loadInquiries();
  } else {
    showLogin();
  }

  supabaseClient.auth.onAuthStateChange(
    async (event, session) => {
      if (event === "SIGNED_OUT") {
        showLogin();
      }

      if (
        event === "SIGNED_IN" &&
        session?.user
      ) {
        showAdmin(session.user);
      }
    }
  );
}

init();
