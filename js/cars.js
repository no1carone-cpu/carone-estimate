/*
  카원 차량 데이터 파일
  ----------------------
  새 차종은 이 파일에 추가합니다.

  중요:
  - price는 숫자만 입력합니다.
  - 스포티지는 파워트레인별 트림가격이 달라 trimsByEngine 구조를 사용합니다.
*/

window.CAR_DATA = {

  /* =========================================================
     2026 쏘렌토
     ========================================================= */
  sorento: {
    brand: "KIA",
    name: "The 2026 Sorento",
    displayName: "2026 쏘렌토",
    year: "2026년형",
    type: "중형 SUV",
    image: "sorento.png",

    engineHelp: "2.5 가솔린 터보를 기준으로 디젤 선택 시 공식 추가금이 반영됩니다.",
    trimHelp: "표시 금액은 2.5 가솔린 터보 기준 트림 기본가격입니다.",

    tax: {
      rate: 0.07,
      vatIncluded: true
    },

    engines: [
      {
        id: "gas",
        name: "2.5 가솔린 터보",
        price: 0,
        sub: "스마트스트림 G2.5 T-GDI"
      },
      {
        id: "diesel",
        name: "2.2 디젤",
        price: 1730000,
        sub: "가솔린 기준 +1,730,000원"
      }
    ],

    drives: [
      {
        id: "2wd",
        name: "2WD",
        price: 0,
        sub: "전륜구동"
      },
      {
        id: "4wd",
        name: "전자식 4WD",
        price: 2320000,
        sub: "+2,320,000원"
      }
    ],

    seats: [
      { id: "5", name: "5인승", price: 0, sub: "기본" },
      { id: "6", name: "6인승", price: 840000, sub: "+840,000원" },
      { id: "7", name: "7인승", price: 690000, sub: "+690,000원" }
    ],

    trims: [
      { id: "prestige", name: "프레스티지", price: 36310000, sub: "2026 쏘렌토 시작 트림" },
      { id: "noblesse", name: "노블레스", price: 39460000, sub: "12.3인치 클러스터 · 서라운드 뷰 등" },
      { id: "signature", name: "시그니처", price: 42270000, sub: "20인치 휠 · 프로젝션 LED · 앰비언트 라이트" },
      { id: "xline", name: "X-Line", price: 43210000, sub: "X-Line 전용 외장 · 전용 가죽시트" }
    ],

    colors: [
      { id: "white", name: "스노우 화이트 펄", price: 80000, color: "#f8f8f3" },
      { id: "gray", name: "인터스텔라 그레이", price: 0, color: "#767b7f" },
      { id: "black", name: "오로라 블랙 펄", price: 0, color: "#151515" },
      { id: "green", name: "시티스케이프 그린", price: 0, color: "#475c55" }
    ],

    options: {
      prestige: [
        { id: "style", name: "스타일", price: 1240000 },
        { id: "cluster", name: "12.3인치 클러스터", price: 590000 },
        { id: "drivewise", name: "드라이브 와이즈", price: 1290000, requires: "cluster", note: "12.3인치 클러스터 적용 시" },
        { id: "hud", name: "HUD + 빌트인 캠 2", price: 1190000, requires: "cluster", note: "12.3인치 클러스터 적용 시" },
        { id: "sunroof", name: "파노라마 선루프", price: 1090000 }
      ],

      noblesse: [
        { id: "style", name: "스타일", price: 1140000 },
        { id: "drivewise", name: "드라이브 와이즈", price: 1290000 },
        { id: "hud", name: "HUD + 빌트인 캠 2", price: 1190000 },
        { id: "smart", name: "스마트 커넥트", price: 800000 },
        { id: "krell", name: "KRELL 프리미엄 사운드", price: 640000 },
        { id: "sunroof", name: "파노라마 선루프", price: 1090000 }
      ],

      signature: [
        { id: "comfort", name: "컴포트", price: 1090000 },
        { id: "drivewise", name: "드라이브 와이즈", price: 1290000 },
        { id: "hud", name: "HUD + 빌트인 캠 2", price: 1190000 },
        { id: "smart", name: "스마트 커넥트", price: 700000 },
        { id: "krell", name: "KRELL 프리미엄 사운드", price: 640000 },
        { id: "sunroof", name: "파노라마 선루프", price: 1090000 }
      ],

      xline: [
        { id: "comfort", name: "컴포트", price: 600000 },
        { id: "drivewise", name: "드라이브 와이즈", price: 1290000 },
        { id: "hud", name: "HUD + 빌트인 캠 2", price: 1190000 },
        { id: "smart", name: "스마트 커넥트", price: 700000 },
        { id: "krell", name: "KRELL 프리미엄 사운드", price: 640000 },
        { id: "sunroof", name: "파노라마 선루프", price: 1090000 }
      ]
    }
  },


  /* =========================================================
     2026 스포티지
     기아 공식 가격: 2026-08-01 기준
     ========================================================= */
  sportage: {
    brand: "KIA",
    name: "The 2026 Sportage",
    displayName: "2026 스포티지",
    year: "2026년형",
    type: "준중형 SUV",
    image: "sportage.png",

    engineHelp: "가솔린 · LPG · 터보 하이브리드를 선택할 수 있습니다. 엔진을 바꾸면 해당 파워트레인의 공식 트림가격으로 자동 변경됩니다.",
    trimHelp: "하이브리드는 기아 공식 페이지의 세제혜택 후 판매가격을 기준으로 표시합니다.",

    tax: {
      rate: 0.07,
      vatIncluded: true
    },

    engines: [
      {
        id: "gas16",
        name: "1.6 가솔린 터보",
        price: 0,
        sub: "스마트스트림 G1.6 T-GDI · 8AT"
      },
      {
        id: "lpg20",
        name: "2.0 LPG",
        price: 0,
        sub: "스마트스트림 L2.0 · 6단 자동변속기"
      },
      {
        id: "hybrid",
        name: "터보 하이브리드",
        price: 0,
        sub: "스마트스트림 터보 하이브리드 · 6AT"
      }
    ],

    drivesByEngine: {
      gas16: [
        { id: "2wd", name: "2WD", price: 0, sub: "전륜구동" },
        { id: "4wd", name: "전자식 4WD", price: 2230000, sub: "+2,230,000원" }
      ],
      lpg20: [
        { id: "2wd", name: "2WD", price: 0, sub: "LPG 모델" }
      ],
      hybrid: [
        { id: "2wd", name: "2WD", price: 0, sub: "전륜구동" },
        { id: "4wd", name: "전자식 4WD", price: 2230000, sub: "+2,230,000원" }
      ]
    },

    seats: [
      { id: "5", name: "5인승", price: 0, sub: "기본" }
    ],

    trimsByEngine: {
      gas16: [
        { id: "prestige", name: "프레스티지", price: 29030000, sub: "1.6 가솔린 터보" },
        { id: "noblesse", name: "노블레스", price: 32420000, sub: "1.6 가솔린 터보" },
        { id: "signature", name: "시그니처", price: 35070000, sub: "1.6 가솔린 터보" },
        { id: "xline", name: "시그니처 X-Line", price: 35720000, sub: "X-Line 전용 외장" }
      ],

      lpg20: [
        { id: "prestige", name: "프레스티지", price: 29680000, sub: "2.0 LPG" },
        { id: "noblesse", name: "노블레스", price: 33070000, sub: "2.0 LPG" },
        { id: "signature", name: "시그니처", price: 35720000, sub: "2.0 LPG" },
        { id: "xline", name: "시그니처 X-Line", price: 36370000, sub: "X-Line 전용 외장" }
      ],

      hybrid: [
        { id: "prestige", name: "프레스티지", price: 33950000, sub: "세제혜택 후" },
        { id: "noblesse", name: "노블레스", price: 37230000, sub: "세제혜택 후" },
        { id: "signature", name: "시그니처", price: 39880000, sub: "세제혜택 후" },
        { id: "xline", name: "시그니처 X-Line", price: 40530000, sub: "세제혜택 후 · X-Line" }
      ]
    },

    colors: [
      {
        id: "basic",
        name: "기본 외장색",
        price: 0,
        color: "#64676d"
      },
      {
        id: "white",
        name: "스노우 화이트 펄",
        price: 80000,
        color: "#f8f8f3"
      },
      {
        id: "matte",
        name: "쉐도우 매트 그레이",
        price: 300000,
        color: "#747474",
        allowedTrims: ["xline"]
      }
    ],

    optionsByEngine: {

      gas16: {
        prestige: [
          { id: "style", name: "스타일", price: 690000 },
          { id: "nav", name: "12.3인치 내비게이션", price: 890000 },
          { id: "builtincam", name: "빌트인 캠 2", price: 450000, requires: "nav", note: "12.3인치 내비게이션 적용 시" },
          { id: "sunroof", name: "파노라마 선루프", price: 1190000 }
        ],

        noblesse: [
          { id: "style", name: "스타일", price: 890000 },
          { id: "comfort", name: "컴포트", price: 490000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 1240000 },
          { id: "builtincam", name: "빌트인 캠 2", price: 450000 },
          { id: "monitoring", name: "모니터링", price: 1140000 },
          { id: "krell", name: "KRELL 프리미엄 사운드", price: 590000 },
          { id: "smart", name: "스마트 커넥트", price: 1190000 },
          { id: "sunroof", name: "파노라마 선루프", price: 1090000 }
        ],

        signature: [
          { id: "wheel19", name: "19인치 전면가공 휠", price: 250000 },
          { id: "premium", name: "프리미엄", price: 590000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 1240000 },
          { id: "builtincam", name: "빌트인 캠 2", price: 450000 },
          { id: "monitoring", name: "모니터링", price: 1140000 },
          { id: "krell", name: "KRELL 프리미엄 사운드", price: 590000 },
          { id: "sunroof", name: "파노라마 선루프", price: 1090000 }
        ],

        xline: [
          { id: "premium", name: "프리미엄", price: 590000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 1240000 },
          { id: "builtincam", name: "빌트인 캠 2", price: 450000 },
          { id: "monitoring", name: "모니터링", price: 1140000 },
          { id: "krell", name: "KRELL 프리미엄 사운드", price: 590000 },
          { id: "sunroof", name: "파노라마 선루프", price: 1090000 }
        ]
      },

      lpg20: {
        prestige: [
          { id: "style", name: "스타일", price: 690000 },
          { id: "nav", name: "12.3인치 내비게이션", price: 890000 },
          { id: "builtincam", name: "빌트인 캠 2", price: 450000, requires: "nav", note: "12.3인치 내비게이션 적용 시" },
          { id: "sunroof", name: "파노라마 선루프", price: 1190000 }
        ],

        noblesse: [
          { id: "style", name: "스타일", price: 890000 },
          { id: "comfort", name: "컴포트", price: 490000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 1240000 },
          { id: "builtincam", name: "빌트인 캠 2", price: 450000 },
          { id: "monitoring", name: "모니터링", price: 1140000 },
          { id: "krell", name: "KRELL 프리미엄 사운드", price: 590000 },
          { id: "smart", name: "스마트 커넥트", price: 1190000 },
          { id: "sunroof", name: "파노라마 선루프", price: 1090000 }
        ],

        signature: [
          { id: "wheel19", name: "19인치 전면가공 휠", price: 250000 },
          { id: "premium", name: "프리미엄", price: 590000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 1240000 },
          { id: "builtincam", name: "빌트인 캠 2", price: 450000 },
          { id: "monitoring", name: "모니터링", price: 1140000 },
          { id: "krell", name: "KRELL 프리미엄 사운드", price: 590000 },
          { id: "sunroof", name: "파노라마 선루프", price: 1090000 }
        ],

        xline: [
          { id: "premium", name: "프리미엄", price: 590000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 1240000 },
          { id: "builtincam", name: "빌트인 캠 2", price: 450000 },
          { id: "monitoring", name: "모니터링", price: 1140000 },
          { id: "krell", name: "KRELL 프리미엄 사운드", price: 590000 },
          { id: "sunroof", name: "파노라마 선루프", price: 1090000 }
        ]
      },

      hybrid: {
        prestige: [
          { id: "style", name: "스타일", price: 690000 },
          { id: "nav", name: "12.3인치 내비게이션", price: 890000 },
          { id: "builtincam", name: "빌트인 캠 2", price: 450000, requires: "nav", note: "12.3인치 내비게이션 적용 시" },
          { id: "sunroof", name: "파노라마 선루프", price: 1190000 }
        ],

        noblesse: [
          { id: "style", name: "스타일", price: 890000 },
          { id: "comfort", name: "컴포트", price: 490000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 1240000 },
          { id: "builtincam", name: "빌트인 캠 2", price: 450000 },
          { id: "monitoring", name: "모니터링", price: 1140000 },
          { id: "krell", name: "KRELL 프리미엄 사운드", price: 590000 },
          { id: "smart", name: "스마트 커넥트", price: 1190000 },
          { id: "sunroof", name: "파노라마 선루프", price: 1090000 }
        ],

        signature: [
          { id: "wheel19", name: "19인치 전면가공 휠", price: 250000 },
          { id: "premium", name: "프리미엄", price: 590000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 1240000 },
          { id: "builtincam", name: "빌트인 캠 2", price: 450000 },
          { id: "monitoring", name: "모니터링", price: 1140000 },
          { id: "krell", name: "KRELL 프리미엄 사운드", price: 590000 },
          { id: "sunroof", name: "파노라마 선루프", price: 1090000 }
        ],

        xline: [
          { id: "premium", name: "프리미엄", price: 590000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 1240000 },
          { id: "builtincam", name: "빌트인 캠 2", price: 450000 },
          { id: "monitoring", name: "모니터링", price: 1140000 },
          { id: "krell", name: "KRELL 프리미엄 사운드", price: 590000 },
          { id: "sunroof", name: "파노라마 선루프", price: 1090000 }
        ]
      }
    }
  }
  ,

  /* =========================================================
     2026 카니발
     기아 공식 가격: 2026-08-01 기준
     ========================================================= */
  carnival: {
    brand: "KIA",
    name: "The 2026 Carnival",
    displayName: "2026 카니발",
    year: "2026년형",
    type: "대형 RV",
    image: "carnival.png",

    engineHelp:
      "3.5 가솔린과 터보 하이브리드를 선택할 수 있습니다. 인승에 따라 하이브리드 가격 차이가 자동 반영됩니다.",

    trimHelp:
      "7인승과 9인승은 선택 가능한 트림과 공식 판매가격이 다릅니다.",

    tax: {
      rate: 0.07,
      vatIncluded: true
    },

    engines: [
      {
        id: "gas35",
        name: "3.5 가솔린",
        price: 0,
        sub: "스마트스트림 G3.5 GDI"
      },
      {
        id: "hybrid",
        name: "터보 하이브리드",
        price: 0,
        sub: "1.6 터보 하이브리드"
      }
    ],

    drives: [
      {
        id: "2wd",
        name: "2WD",
        price: 0,
        sub: "전륜구동"
      }
    ],

    seats: [
      {
        id: "9",
        name: "9인승",
        price: 0,
        sub: "9인승 모델"
      },
      {
        id: "7",
        name: "7인승",
        price: 0,
        sub: "7인승 모델"
      }
    ],

    /*
      가솔린 공식 기본가격에
      9인승 하이브리드 +4,550,000원,
      7인승 하이브리드 +4,500,000원을 반영한 최종 트림가격.
    */
    trimsByEngineAndSeat: {
      gas35: {
        "9": [
          { id: "prestige", name: "프레스티지", price: 36360000, sub: "3.5 가솔린 · 9인승" },
          { id: "noblesse", name: "노블레스", price: 40710000, sub: "3.5 가솔린 · 9인승" },
          { id: "signature", name: "시그니처", price: 44260000, sub: "3.5 가솔린 · 9인승" },
          { id: "xline", name: "X-Line", price: 45020000, sub: "3.5 가솔린 · 9인승" }
        ],

        "7": [
          { id: "noblesse_outdoor", name: "노블레스 아웃도어", price: 42270000, sub: "3.5 가솔린 · 7인승" },
          { id: "noblesse", name: "노블레스", price: 43260000, sub: "3.5 가솔린 · 7인승" },
          { id: "signature", name: "시그니처", price: 47020000, sub: "3.5 가솔린 · 7인승" },
          { id: "xline", name: "X-Line", price: 47550000, sub: "3.5 가솔린 · 7인승" }
        ]
      },

      hybrid: {
        "9": [
          { id: "prestige", name: "프레스티지", price: 40910000, sub: "터보 하이브리드 · 9인승" },
          { id: "noblesse", name: "노블레스", price: 45260000, sub: "터보 하이브리드 · 9인승" },
          { id: "signature", name: "시그니처", price: 48810000, sub: "터보 하이브리드 · 9인승" },
          { id: "xline", name: "X-Line", price: 49570000, sub: "터보 하이브리드 · 9인승" }
        ],

        "7": [
          { id: "noblesse_outdoor", name: "노블레스 아웃도어", price: 46770000, sub: "터보 하이브리드 · 7인승" },
          { id: "noblesse", name: "노블레스", price: 47760000, sub: "터보 하이브리드 · 7인승" },
          { id: "signature", name: "시그니처", price: 51520000, sub: "터보 하이브리드 · 7인승" },
          { id: "xline", name: "X-Line", price: 52050000, sub: "터보 하이브리드 · 7인승" }
        ]
      }
    },

    colors: [
      {
        id: "basic",
        name: "기본 외장색",
        price: 0,
        color: "#555960"
      },
      {
        id: "white",
        name: "스노우 화이트 펄",
        price: 80000,
        color: "#f8f8f3"
      },
      {
        id: "black",
        name: "오로라 블랙 펄",
        price: 0,
        color: "#151515"
      },
      {
        id: "silver",
        name: "세라믹 실버",
        price: 0,
        color: "#a5a7a8"
      }
    ],

    /*
      카니발 선택품목은 인승 + 트림별로 관리.
      파워트레인 가격은 위 트림가격에 이미 포함되어 있으므로 옵션 목록에는 넣지 않음.
    */
    optionsBySeat: {

      "9": {
        prestige: [
          { id: "convenience", name: "컨비니언스", price: 1100000 },
          { id: "style", name: "스타일", price: 1000000 },
          { id: "cluster", name: "12.3인치 클러스터", price: 600000 },
          {
            id: "drivewise",
            name: "드라이브 와이즈",
            price: 1200000,
            requires: "cluster",
            note: "12.3인치 클러스터 적용 시"
          },
          {
            id: "monitoring",
            name: "모니터링 팩",
            price: 900000,
            requires: "cluster",
            note: "12.3인치 클러스터 적용 시"
          }
        ],

        noblesse: [
          { id: "style", name: "스타일", price: 1000000 },
          { id: "comfort", name: "컴포트", price: 1400000 },
          { id: "smart", name: "스마트 커넥트", price: 750000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 750000 },
          { id: "monitoring", name: "모니터링 팩", price: 1200000 },
          { id: "hud", name: "HUD + 빌트인 캠 2", price: 1200000 },
          { id: "sunroof", name: "듀얼 선루프", price: 800000 }
        ],

        signature: [
          { id: "style", name: "스타일", price: 700000 },
          { id: "comfort", name: "컴포트", price: 1400000 },
          { id: "smart", name: "스마트 커넥트", price: 750000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 750000 },
          { id: "monitoring", name: "모니터링 팩", price: 1200000 },
          { id: "hud", name: "HUD + 빌트인 캠 2", price: 1200000 },
          { id: "bose", name: "BOSE 프리미엄 사운드", price: 900000 },
          { id: "sunroof", name: "듀얼 선루프", price: 800000 }
        ],

        xline: [
          { id: "comfort", name: "컴포트", price: 1400000 },
          { id: "smart", name: "스마트 커넥트", price: 750000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 750000 },
          { id: "monitoring", name: "모니터링 팩", price: 1200000 },
          { id: "hud", name: "HUD + 빌트인 캠 2", price: 1200000 },
          { id: "bose", name: "BOSE 프리미엄 사운드", price: 900000 },
          { id: "sunroof", name: "듀얼 선루프", price: 800000 },
          { id: "xline_step", name: "X-Line 전용 사이드 스텝 / LED 테일게이트 램프", price: 570000 }
        ]
      },

      "7": {
        noblesse: [
          { id: "style", name: "스타일", price: 790000 },
          { id: "comfort", name: "컴포트", price: 1190000 },
          { id: "smart", name: "스마트 커넥트", price: 790000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 790000 },
          { id: "monitoring", name: "모니터링 팩", price: 1270000 },
          { id: "hud", name: "HUD + 빌트인 캠 2", price: 1270000 },
          { id: "sunroof", name: "듀얼 선루프", price: 840000 }
        ],

        noblesse_outdoor: [
          { id: "style", name: "스타일", price: 790000 },
          { id: "comfort", name: "컴포트", price: 1190000 },
          { id: "smart", name: "스마트 커넥트", price: 790000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 790000 },
          { id: "monitoring", name: "모니터링 팩", price: 1270000 },
          { id: "hud", name: "HUD + 빌트인 캠 2", price: 1270000 },
          { id: "sunroof", name: "듀얼 선루프", price: 840000 }
        ],

        signature: [
          { id: "style", name: "스타일", price: 790000 },
          { id: "smart", name: "스마트 커넥트", price: 790000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 790000 },
          { id: "monitoring", name: "모니터링 팩", price: 1270000 },
          { id: "hud", name: "HUD + 빌트인 캠 2", price: 1270000 },
          { id: "sunroof", name: "듀얼 선루프", price: 840000 }
        ],

        xline: [
          { id: "style", name: "스타일", price: 470000 },
          { id: "comfort", name: "컴포트", price: 1190000 },
          { id: "smart", name: "스마트 커넥트", price: 790000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 790000 },
          { id: "monitoring", name: "모니터링 팩", price: 1270000 },
          { id: "hud", name: "HUD + 빌트인 캠 2", price: 1270000 },
          { id: "bose", name: "BOSE 프리미엄 사운드", price: 950000 },
          { id: "sunroof", name: "듀얼 선루프", price: 840000 },
          { id: "xline_step", name: "X-Line 전용 사이드 스텝 / LED 테일게이트 램프", price: 560000 }
        ]
      }
    }
  }

};
