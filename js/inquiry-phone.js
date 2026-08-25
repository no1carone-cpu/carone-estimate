/*
  카원 견적문의 통합 페이지
  - 전화번호 + 비밀번호로 내 문의 조회
  - 전체 고객 문의의 공개 현황 표시

  현재 estimate.js에서 사용 중인 Supabase 연결값을 그대로 입력하세요.
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

function safe(value, fallback = "-") {
  return value === null ||
         value === undefined ||
         value === ""
    ? fallback
    : String(value);
}

function won(value) {
  return Number(value || 0)
    .toLocaleString("ko-KR") + "원";
}

function formatDate(value, withTime = false) {
  if (!value) return "-";

  const d = new Date(value);

  if (Number.isNaN(d.getTime())) {
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
  ).format(d);
}

function makeText(tag, className, text) {
  const el = document.createElement(tag);

  if (className) {
    el.className = className;
  }

  el.textContent = text;

  return el;
}

/* ============================
   전화번호 자동 포맷
============================ */

$("phone").addEventListener("input", event => {
  let n =
    event.target.value
      .replace(/\D/g, "")
      .slice(0, 11);

  if (n.length > 7) {
    event.target.value =
      n.replace(
        /(\d{3})(\d{4})(\d+)/,
        "$1-$2-$3"
      );
  } else if (n.length > 3) {
    event.target.value =
      n.replace(
        /(\d{3})(\d+)/,
        "$1-$2"
      );
  } else {
    event.target.value = n;
  }
});


/* ============================
   내 문의 조회
============================ */

$("lookupForm").addEventListener(
  "submit",
  async event => {
    event.preventDefault();

    const phone =
      $("phone").value.trim();

    const pin =
      $("pin").value.trim();

    const errorBox =
      $("lookupError");

    const button =
      $("lookupBtn");

    errorBox.textContent = "";

    if (!supabaseClient) {
      errorBox.textContent =
        "Supabase 연결 정보가 설정되지 않았습니다.";
      return;
    }

    if (
      phone.replace(/\D/g, "").length < 10
    ) {
      errorBox.textContent =
        "전화번호를 정확히 입력해주세요.";
      return;
    }

    if (!/^\d{4,6}$/.test(pin)) {
      errorBox.textContent =
        "조회 비밀번호를 정확히 입력해주세요.";
      return;
    }

    button.disabled = true;
    button.textContent = "조회 중...";

    const { data, error } =
      await supabaseClient.rpc(
        "get_customer_inquiries_by_phone",
        {
          p_phone: phone,
          p_access_pin: pin
        }
      );

    button.disabled = false;
    button.textContent = "내 문의 확인";

    if (error) {
      console.error(error);

      errorBox.textContent =
        "조회 오류: " + error.message;

      return;
    }

    if (
      !Array.isArray(data) ||
      !data.length
    ) {
      $("myResults")
        .classList.remove("show");

      errorBox.textContent =
        "일치하는 견적문의가 없습니다. 전화번호와 조회 비밀번호를 확인해주세요.";

      return;
    }

    renderMyInquiries(data);

    $("myResults")
      .scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
  }
);


function renderMyInquiries(items) {
  const list =
    $("myList");

  list.innerHTML = "";

  $("myCount").textContent =
    `총 ${items.length}건`;

  $("myResults")
    .classList.add("show");

  items.forEach(item => {

    const card =
      document.createElement("article");

    card.className =
      "my-card";

    const button =
      document.createElement("button");

    button.type = "button";
    button.className =
      "my-card-button";

    const top =
      document.createElement("div");

    top.className =
      "my-card-top";

    const left =
      document.createElement("div");

    left.append(
      makeText(
        "div",
        "my-code",
        safe(item.inquiry_code)
      ),
      makeText(
        "div",
        "my-car",
        `${safe(item.car_name)} · ${safe(item.trim)}`
      ),
      makeText(
        "div",
        "my-meta",
        `${formatDate(item.created_at, true)} · ${safe(item.region)}`
      )
    );

    const status =
      makeText(
        "span",
        `status ${safe(item.status, "신규")}`,
        safe(item.status, "신규")
      );

    top.append(left, status);
    button.appendChild(top);

    const detail =
      document.createElement("div");

    detail.className =
      "my-detail";

    const grid =
      document.createElement("div");

    grid.className =
      "spec-grid";

    const specs = [
      ["엔진", item.engine],
      ["구동", item.drive],
      ["인승", item.seat],
      ["트림", item.trim],
      ["외장색", item.color],
      ["선택품목", item.options || "없음"]
    ];

    specs.forEach(([label, value]) => {
      const row =
        document.createElement("div");

      row.className =
        "spec-row";

      row.append(
        makeText(
          "span",
          "",
          label
        ),
        makeText(
          "strong",
          "",
          safe(value)
        )
      );

      grid.appendChild(row);
    });

    const price =
      document.createElement("div");

    price.className =
      "price-box";

    price.innerHTML = `
      <div class="price-row">
        <span>공식 차량가격</span>
        <strong>${won(item.vehicle_price)}</strong>
      </div>

      <div class="price-row">
        <span>예상 취득세</span>
        <strong>${won(item.acquisition_tax)}</strong>
      </div>

      <div class="price-total">
        <span>차량가격 + 예상 취득세</span>
        <strong>${won(item.total_price)}</strong>
      </div>
    `;

    const comments =
      document.createElement("section");

    comments.className =
      "comments";

    comments.appendChild(
      makeText(
        "h3",
        "",
        "카원 답변"
      )
    );

    if (
      Array.isArray(item.comments) &&
      item.comments.length
    ) {
      item.comments.forEach(comment => {

        const commentBox =
          document.createElement("article");

        commentBox.className =
          "comment";

        const head =
          document.createElement("div");

        head.className =
          "comment-head";

        head.append(
          makeText(
            "span",
            "comment-author",
            safe(
              comment.author,
              "카원 상담팀"
            )
          ),
          makeText(
            "span",
            "comment-date",
            formatDate(
              comment.created_at,
              true
            )
          )
        );

        const body =
          makeText(
            "div",
            "comment-body",
            safe(comment.comment, "")
          );

        commentBox.append(
          head,
          body
        );

        comments.appendChild(
          commentBox
        );
      });

    } else {

      comments.appendChild(
        makeText(
          "div",
          "empty-comment",
          "아직 등록된 답변이 없습니다."
        )
      );
    }

    detail.append(
      grid,
      price,
      comments
    );

    button.addEventListener(
      "click",
      () => {
        detail.classList
          .toggle("open");
      }
    );

    card.append(
      button,
      detail
    );

    list.appendChild(card);
  });
}


/* ============================
   공개 게시판
============================ */

async function loadPublicBoard() {

  const list =
    $("boardList");

  if (!supabaseClient) {
    list.innerHTML = `
      <div class="public-empty">
        Supabase 연결 정보가 설정되지 않았습니다.
      </div>
    `;
    return;
  }

  list.innerHTML = `
    <div class="public-empty">
      견적문의 현황을 불러오는 중입니다.
    </div>
  `;

  const offset =
    (currentPage - 1)
    * PAGE_SIZE;

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
      <div class="public-empty">
        문의 현황을 불러오지 못했습니다.<br>
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

  renderPublicBoard(items);
  updatePager();
}


function renderPublicBoard(items) {

  const list =
    $("boardList");

  list.innerHTML = "";

  if (!items.length) {
    list.innerHTML = `
      <div class="public-empty">
        아직 등록된 견적문의가 없습니다.
      </div>
    `;
    return;
  }

  const startNo =
    totalItems -
    ((currentPage - 1) * PAGE_SIZE);

  items.forEach((item, index) => {

    const row =
      document.createElement("div");

    row.className =
      "board-row";

    row.append(
      makeText(
        "div",
        "row-no",
        `#${Math.max(startNo - index, 1)}`
      ),
      makeText(
        "div",
        "row-car",
        safe(
          item.car_name,
          "차량 견적"
        )
      ),
      makeText(
        "div",
        "row-region",
        safe(item.region)
      )
    );

    const statusWrap =
      document.createElement("div");

    statusWrap.appendChild(
      makeText(
        "span",
        `status ${safe(item.status, "신규")}`,
        safe(item.status, "신규")
      )
    );

    row.appendChild(statusWrap);

    row.appendChild(
      makeText(
        "div",
        "row-date",
        formatDate(
          item.created_at,
          false
        )
      )
    );

    /*
      공개 현황 행은 클릭 불가.
      다른 고객의 상세조회 진입 자체를 제공하지 않습니다.
    */

    list.appendChild(row);
  });
}


function updatePager() {

  const totalPages =
    Math.max(
      1,
      Math.ceil(
        totalItems / PAGE_SIZE
      )
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


$("prevBtn").addEventListener(
  "click",
  () => {
    if (currentPage > 1) {
      currentPage -= 1;
      loadPublicBoard();
    }
  }
);


$("nextBtn").addEventListener(
  "click",
  () => {

    const totalPages =
      Math.max(
        1,
        Math.ceil(
          totalItems / PAGE_SIZE
        )
      );

    if (
      currentPage < totalPages
    ) {
      currentPage += 1;
      loadPublicBoard();
    }
  }
);


loadPublicBoard();
