/*
  [공식사이트 재검증 메모 · 2026-08-26]
  - 쏘렌토: 기존 누락된 터보 하이브리드 2WD/전자식4WD 및 공식 가격 추가
  - GV60: 현행 Standard 2WD / Standard AWD / Performance AWD 체계로 재작성
  - 그 외 데이터는 이번 검증에서 확인된 명백한 불일치가 없어 기존값 유지
  - 제조사 가격표/BTO는 수시 갱신될 수 있으므로 계약 직전 공식 견적 재확인 권장
*/

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
     기아 공식 가격표 2026-08 기준 재검증
     - 2.5 가솔린 터보 / 2.2 디젤
     - 터보 하이브리드 2WD / 전자식 4WD
     ========================================================= */
  sorento: {
    brand: "KIA",
    name: "The 2026 Sorento",
    displayName: "2026 쏘렌토",
    year: "2026년형 · 공식 가격표 2026-08 재검증",
    type: "중형 SUV",
    image: "sorento.png",

    engineHelp:
      "2.5 가솔린 터보, 2.2 디젤, 터보 하이브리드 2WD/전자식4WD를 선택할 수 있습니다. 하이브리드는 공식 세제혜택 여부가 구동방식에 따라 달라 최종 판매가격 자체를 엔진 항목별로 분리했습니다.",

    trimHelp:
      "파워트레인에 따라 공식 트림가격과 선택품목이 자동으로 변경됩니다.",

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
      },
      {
        id: "hybrid2wd",
        name: "터보 하이브리드 (2WD)",
        price: 0,
        sub: "세제혜택 후 공식 판매가격"
      },
      {
        id: "hybrid4wd",
        name: "터보 하이브리드 (전자식 4WD)",
        price: 0,
        sub: "공식 4WD 판매가격 · 구동 추가금이 트림가격에 포함"
      }
    ],

    drivesByEngine: {
      gas: [
        { id: "2wd", name: "2WD", price: 0, sub: "전륜구동" },
        { id: "4wd", name: "전자식 4WD", price: 2320000, sub: "+2,320,000원" }
      ],
      diesel: [
        { id: "2wd", name: "2WD", price: 0, sub: "전륜구동" },
        { id: "4wd", name: "전자식 4WD", price: 2320000, sub: "+2,320,000원" }
      ],
      hybrid2wd: [
        { id: "2wd", name: "2WD", price: 0, sub: "전륜구동" }
      ],
      hybrid4wd: [
        { id: "4wd", name: "전자식 4WD", price: 0, sub: "트림가격에 4WD 구성 반영" }
      ]
    },

    seats: [
      { id: "5", name: "5인승", price: 0, sub: "기본" },
      { id: "6", name: "6인승", price: 840000, sub: "+840,000원" },
      { id: "7", name: "7인승", price: 690000, sub: "+690,000원" }
    ],

    trimsByEngine: {
      gas: [
        { id: "prestige", name: "프레스티지", price: 36310000 },
        { id: "noblesse", name: "노블레스", price: 39460000 },
        { id: "signature", name: "시그니처", price: 42270000 },
        { id: "xline", name: "X-Line", price: 43210000 }
      ],

      diesel: [
        { id: "prestige", name: "프레스티지", price: 36310000 },
        { id: "noblesse", name: "노블레스", price: 39460000 },
        { id: "signature", name: "시그니처", price: 42270000 },
        { id: "xline", name: "X-Line", price: 43210000 }
      ],

      hybrid2wd: [
        { id: "prestige", name: "프레스티지", price: 39530000, sub: "세제혜택 후" },
        { id: "noblesse", name: "노블레스", price: 42790000, sub: "세제혜택 후" },
        { id: "signature", name: "시그니처", price: 45310000, sub: "세제혜택 후" },
        { id: "xline", name: "X-Line", price: 46250000, sub: "세제혜택 후" }
      ],

      hybrid4wd: [
        { id: "prestige", name: "프레스티지", price: 42850000, sub: "전자식4WD 공식가격" },
        { id: "noblesse", name: "노블레스", price: 46100000, sub: "전자식4WD 공식가격" },
        { id: "signature", name: "시그니처", price: 48630000, sub: "전자식4WD 공식가격" },
        { id: "xline", name: "X-Line", price: 49570000, sub: "전자식4WD 공식가격" }
      ]
    },

    colors: [
      { id: "white", name: "스노우 화이트 펄", price: 80000, color: "#f8f8f3" },
      { id: "gray", name: "인터스텔라 그레이", price: 0, color: "#767b7f" },
      { id: "black", name: "오로라 블랙 펄", price: 0, color: "#151515" },
      { id: "green", name: "시티스케이프 그린", price: 0, color: "#475c55" }
    ],

    optionsByEngine: {
      gas: {
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
      },

      diesel: {
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
      },

      hybrid2wd: {
        prestige: [
          { id: "style", name: "스타일", price: 1140000 },
          { id: "cluster", name: "12.3인치 클러스터", price: 590000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 1290000, requires: "cluster", note: "12.3인치 클러스터 선택 시" },
          { id: "hud", name: "HUD + 빌트인 캠 2", price: 1190000, requires: "cluster", note: "12.3인치 클러스터 선택 시" },
          { id: "sunroof", name: "파노라마 선루프", price: 1090000 }
        ],
        noblesse: [
          { id: "style", name: "스타일", price: 1040000 },
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
          { id: "sunroof", name: "파노라마 선루프", price: 1090000 },
          { id: "wheel19", name: "19인치 휠", price: 300000 }
        ],
        xline: [
          { id: "comfort", name: "컴포트", price: 600000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 1290000 },
          { id: "hud", name: "HUD + 빌트인 캠 2", price: 1190000 },
          { id: "smart", name: "스마트 커넥트", price: 700000 },
          { id: "krell", name: "KRELL 프리미엄 사운드", price: 640000 },
          { id: "sunroof", name: "파노라마 선루프", price: 1090000 },
          { id: "wheel19", name: "19인치 휠", price: 300000 }
        ]
      },

      hybrid4wd: {
        prestige: [
          { id: "style", name: "스타일", price: 1140000 },
          { id: "cluster", name: "12.3인치 클러스터", price: 590000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 1290000, requires: "cluster", note: "12.3인치 클러스터 선택 시" },
          { id: "hud", name: "HUD + 빌트인 캠 2", price: 1190000, requires: "cluster", note: "12.3인치 클러스터 선택 시" },
          { id: "sunroof", name: "파노라마 선루프", price: 1090000 }
        ],
        noblesse: [
          { id: "style", name: "스타일", price: 1040000 },
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
          { id: "sunroof", name: "파노라마 선루프", price: 1090000 },
          { id: "wheel19", name: "19인치 휠", price: 300000 }
        ],
        xline: [
          { id: "comfort", name: "컴포트", price: 600000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 1290000 },
          { id: "hud", name: "HUD + 빌트인 캠 2", price: 1190000 },
          { id: "smart", name: "스마트 커넥트", price: 700000 },
          { id: "krell", name: "KRELL 프리미엄 사운드", price: 640000 },
          { id: "sunroof", name: "파노라마 선루프", price: 1090000 },
          { id: "wheel19", name: "19인치 휠", price: 300000 }
        ]
      }
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
      { id:"snow_white", name:"스노우 화이트 펄", price:80000, color:"#F5F5F0" },
      { id:"heritage_blue", name:"헤리티지 블루", price:0, color:"#4B6676" },
      { id:"wolf_gray", name:"울프 그레이", price:0, color:"#898D8F" },
      { id:"gravity_gray", name:"그래비티 그레이", price:0, color:"#5D6163" },
      { id:"vesta_blue", name:"베스타 블루", price:0, color:"#395C6B" },
      { id:"fusion_black", name:"퓨전 블랙", price:0, color:"#151718" },
      { id:"jungle_wood_green", name:"정글 우드 그린", price:0, color:"#46564C" },
      { id:"shadow_matte_gray", name:"쉐도우 매트 그레이", price:300000, color:"#747776", allowedTrims:["xline"] }
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
      { id:"panthera_metal", name:"판테라 메탈", price:0, color:"#4C5052" },
      { id:"ceramic_silver", name:"세라믹 실버", price:0, color:"#A6A8A7", allowedTrims:["xline"] },
      { id:"ivory_silver", name:"아이보리 실버", price:0, color:"#C9C7BF" },
      { id:"snow_white", name:"스노우 화이트 펄", price:80000, color:"#F5F5F0" },
      { id:"aurora_black", name:"오로라 블랙 펄", price:0, color:"#151617" }
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

  ,












  /* =========================================================
     The 2026 Kia EV9 GT
     Kia 공식 가격 페이지 2026-08-01 기준
     ========================================================= */
  ev9gt: {
    brand: "KIA",
    name: "The 2026 Kia EV9 GT",
    displayName: "EV9 GT",
    year: "2026년 8월 1일 공식 가격 기준",
    type: "고성능 대형 전기 SUV · GT 4WD",
    image: "ev9gt.png",

    engineHelp:
      "기아 공식 EV9 GT 가격표 기준 99.8kWh 배터리와 374kW 듀얼 모터 4WD(전륜 139kW / 후륜 235kW) 구성입니다.",

    trimHelp:
      "EV9 GT는 GT 4WD 단일 트림, 6인승으로 운영됩니다. 세제혜택 후 공식 판매가격을 사용합니다.",

    tax: { rate: 0.07, vatIncluded: true },

    engines: [
      {
        id: "gt",
        name: "GT",
        price: 0,
        sub: "99.8kWh · 374kW 듀얼 모터"
      }
    ],

    drivesByEngine: {
      gt: [
        {
          id: "4wd",
          name: "4WD",
          price: 0,
          sub: "전륜 139kW + 후륜 235kW · 기본"
        }
      ]
    },

    seats: [
      {
        id: "6",
        name: "6인승",
        price: 0,
        sub: "2열 독립 프리미엄 릴렉션 시트 · 기본"
      }
    ],

    trimsByEngine: {
      gt: [
        {
          id: "gt",
          name: "GT",
          price: 84740000,
          sub: "세제혜택 후"
        }
      ]
    },

    colors: [
      { id:"panthera_matte", name:"판테라 매트 메탈", price:490000, color:"#454849", excludesOptions:["style_plus"] },
      { id:"snow_white", name:"스노우 화이트 펄", price:100000, color:"#F4F4EF" },
      { id:"pebble_gray", name:"페블 그레이", price:0, color:"#999A96" },
      { id:"panthera_metal", name:"판테라 메탈", price:0, color:"#4C5052" },
      { id:"aurora_black", name:"오로라 블랙 펄", price:0, color:"#151617" }
    ],

    optionsByEngine: {
      gt: {
        gt: [
          {
            id:"style_plus",
            name:"스타일 플러스",
            price:1980000,
            excludesColors:["panthera_matte"],
            note:"무광 외장 칼라 동시 선택 불가"
          },
          {
            id:"dual_sunroof",
            name:"듀얼 선루프",
            price:1190000
          }
        ]
      }
    },

    evEngineIds:["gt"],
    evAcquisitionTaxReduction:1400000
  },

  /* =========================================================
     The 2026 EV9
     Kia 공식 가격 페이지 2026-08-01 기준
     EV9 GT는 기아 공식 별도 모델이므로 이 데이터에서 제외
     ========================================================= */
  ev9: {
    brand: "KIA",
    name: "The 2026 EV9",
    displayName: "EV9",
    year: "2026년 8월 1일 공식 가격 기준",
    type: "대형 전기 SUV · Standard · Long Range",
    image: "ev9.png",

    engineHelp:
      "기아 공식 판매구조에 맞춰 2WD 스탠다드(76.1kWh), 2WD 롱레인지(99.8kWh), 4WD 롱레인지(99.8kWh)를 분리했습니다. EV9 GT는 별도 공식 모델이라 포함하지 않습니다.",

    trimHelp:
      "세제혜택 후 공식 판매가격을 사용합니다. GT-Line은 4WD 롱레인지에서만 운영됩니다.",

    tax: { rate: 0.07, vatIncluded: true },

    engines: [
      { id:"standard_2wd", name:"2WD 스탠다드", price:0, sub:"76.1kWh · 싱글 모터 2WD" },
      { id:"longrange_2wd", name:"2WD 롱레인지", price:0, sub:"99.8kWh · 싱글 모터 2WD" },
      { id:"longrange_4wd", name:"4WD 롱레인지", price:0, sub:"99.8kWh · 듀얼 모터 4WD" }
    ],

    drivesByEngine: {
      standard_2wd:[{id:"2wd",name:"2WD",price:0}],
      longrange_2wd:[{id:"2wd",name:"2WD",price:0}],
      longrange_4wd:[{id:"4wd",name:"4WD",price:0}]
    },

    seats:[
      {id:"7",name:"7인승",price:0,sub:"기본 · 6인승 변경은 선택품목에서 적용"}
    ],

    trimsByEngine: {
      standard_2wd:[
        {id:"light",name:"라이트",price:61970000,sub:"세제혜택 후"},
        {id:"air",name:"에어",price:64120000,sub:"세제혜택 후"},
        {id:"earth",name:"어스",price:68910000,sub:"세제혜택 후"}
      ],
      longrange_2wd:[
        {id:"light",name:"라이트",price:66420000,sub:"세제혜택 후"},
        {id:"air",name:"에어",price:68570000,sub:"세제혜택 후"},
        {id:"earth",name:"어스",price:73360000,sub:"세제혜택 후"}
      ],
      longrange_4wd:[
        {id:"light",name:"라이트",price:69900000,sub:"세제혜택 후"},
        {id:"air",name:"에어",price:72050000,sub:"세제혜택 후"},
        {id:"earth",name:"어스",price:76890000,sub:"세제혜택 후"},
        {id:"gtline",name:"GT-Line",price:79170000,sub:"세제혜택 후"}
      ]
    },

    colors: [
      { id:"snow_white", name:"스노우 화이트 펄", price:100000, color:"#F4F4EF" },
      { id:"pebble_gray", name:"페블 그레이", price:0, color:"#999A96" },
      { id:"panthera_metal", name:"판테라 메탈", price:0, color:"#4C5052" },
      { id:"aurora_black", name:"오로라 블랙 펄", price:0, color:"#151617" },
      { id:"iceberg_green", name:"아이스버그 그린", price:0, color:"#9DACA4" },
      { id:"ocean_blue", name:"오션 블루", price:0, color:"#34596F" },
      { id:"flare_red", name:"플레어 레드", price:0, color:"#922F33" },
      { id:"ivory_matte", name:"아이보리 매트 실버", price:490000, color:"#C6C2B8", excludesOptions:["style"] },
      { id:"ocean_matte_blue", name:"오션 매트 블루", price:490000, color:"#466478", excludesOptions:["style"] }
    ],

    optionsByEngine: {
      standard_2wd:{
        light:[
          {id:"seat6",name:"6인승",price:490000},
          {id:"convenience",name:"컨비니언스",price:1090000},
          {id:"hud",name:"헤드업 디스플레이",price:590000},
          {id:"builtincam2",name:"빌트인 캠 2",price:590000},
          {id:"monitoring_plus",name:"모니터링 플러스",price:1980000}
        ],
        air:[
          {id:"seat6",name:"6인승",price:490000},
          {id:"style",name:"스타일",price:1480000,excludesColors:["ivory_matte","ocean_matte_blue"],note:"무광 외장 칼라 동시 선택 불가"},
          {id:"builtincam2",name:"빌트인 캠 2",price:590000},
          {id:"dual_sunroof",name:"듀얼 선루프",price:1190000}
        ],
        earth:[
          {id:"seat6",name:"6인승",price:490000},
          {id:"style",name:"스타일",price:1480000,excludesColors:["ivory_matte","ocean_matte_blue"],note:"무광 외장 칼라 동시 선택 불가"},
          {id:"builtincam2",name:"빌트인 캠 2",price:590000},
          {id:"dual_sunroof",name:"듀얼 선루프",price:1190000}
        ]
      },

      longrange_2wd:{
        light:[
          {id:"seat6",name:"6인승",price:490000},
          {id:"convenience",name:"컨비니언스",price:1090000},
          {id:"hud",name:"헤드업 디스플레이",price:590000},
          {id:"builtincam2",name:"빌트인 캠 2",price:590000},
          {id:"monitoring_plus",name:"모니터링 플러스",price:1980000}
        ],
        air:[
          {id:"seat6",name:"6인승",price:490000},
          {id:"style",name:"스타일",price:1480000,excludesColors:["ivory_matte","ocean_matte_blue"],note:"무광 외장 칼라 동시 선택 불가"},
          {id:"builtincam2",name:"빌트인 캠 2",price:590000},
          {id:"dual_sunroof",name:"듀얼 선루프",price:1190000},
          {id:"wheel20",name:"20인치 휠",price:590000}
        ],
        earth:[
          {id:"seat6",name:"6인승",price:490000},
          {id:"style",name:"스타일",price:1480000,excludesColors:["ivory_matte","ocean_matte_blue"],note:"무광 외장 칼라 동시 선택 불가"},
          {id:"builtincam2",name:"빌트인 캠 2",price:590000},
          {id:"dual_sunroof",name:"듀얼 선루프",price:1190000},
          {id:"wheel20",name:"20인치 휠",price:590000}
        ]
      },

      longrange_4wd:{
        light:[
          {id:"seat6_swivel",name:"6인승(스위블)",price:1140000,excludes:["seat6_relax"]},
          {id:"seat6_relax",name:"6인승(릴렉션)",price:1980000,excludes:["seat6_swivel"]},
          {id:"style",name:"스타일",price:1480000,excludesColors:["ivory_matte","ocean_matte_blue"],note:"무광 외장 칼라 동시 선택 불가"},
          {id:"wheel21",name:"21인치 휠",price:1190000},
          {id:"builtincam2",name:"빌트인 캠 2",price:590000},
          {id:"dual_sunroof",name:"듀얼 선루프",price:1190000}
        ],
        air:[
          {id:"seat6_swivel",name:"6인승(스위블)",price:1140000,excludes:["seat6_relax"]},
          {id:"seat6_relax",name:"6인승(릴렉션)",price:1980000,excludes:["seat6_swivel"]},
          {id:"style",name:"스타일",price:1480000,excludesColors:["ivory_matte","ocean_matte_blue"],note:"무광 외장 칼라 동시 선택 불가"},
          {id:"wheel21",name:"21인치 휠",price:1190000},
          {id:"builtincam2",name:"빌트인 캠 2",price:590000},
          {id:"dual_sunroof",name:"듀얼 선루프",price:1190000}
        ],
        earth:[
          {id:"seat6_swivel",name:"6인승(스위블)",price:1140000,excludes:["seat6_relax"]},
          {id:"seat6_relax",name:"6인승(릴렉션)",price:1980000,excludes:["seat6_swivel"]},
          {id:"style",name:"스타일",price:690000,excludesColors:["ivory_matte","ocean_matte_blue"],note:"무광 외장 칼라 동시 선택 불가"},
          {id:"builtincam2",name:"빌트인 캠 2",price:590000},
          {id:"dual_sunroof",name:"듀얼 선루프",price:1190000},
          {id:"hightech",name:"하이테크",price:1980000}
        ],
        gtline:[
          {id:"seat6_swivel",name:"6인승(스위블)",price:1140000,excludes:["seat6_relax"]},
          {id:"seat6_relax",name:"6인승(릴렉션)",price:1980000,excludes:["seat6_swivel"]},
          {id:"builtincam2",name:"빌트인 캠 2",price:590000},
          {id:"dual_sunroof",name:"듀얼 선루프",price:1190000},
          {id:"hightech",name:"하이테크",price:1980000}
        ]
      }
    },

    evEngineIds:["standard_2wd","longrange_2wd","longrange_4wd"],
    evAcquisitionTaxReduction:1400000
  },

  /* =========================================================
     The 2027 EV6
     Kia 공식 가격 페이지 2026-08-03 기준
     ========================================================= */
  ev6: {
    brand: "KIA",
    name: "The 2027 EV6",
    displayName: "EV6",
    year: "2026년 8월 3일 공식 가격 기준",
    type: "전기 크로스오버 · Standard · Long Range",
    image: "ev6.png",

    engineHelp:
      "기아 공식 가격표 기준 스탠다드(63.0kWh)와 롱레인지(84.0kWh)를 선택합니다. 공식 선택품목의 듀얼 모터 4WD는 옵션에서 추가합니다.",

    trimHelp:
      "라이트 · 에어 · 어스 · GT-Line의 세제혜택 후 공식 판매가격을 사용합니다. GT-Line은 롱레인지에서만 운영됩니다.",

    tax: { rate: 0.07, vatIncluded: true },

    engines: [
      { id:"standard", name:"스탠다드", price:0, sub:"63.0kWh · 2WD 기본" },
      { id:"longrange", name:"롱레인지", price:0, sub:"84.0kWh · 2WD 기본" }
    ],

    drivesByEngine: {
      standard:[{ id:"2wd", name:"2WD", price:0, sub:"4WD는 선택품목에서 적용" }],
      longrange:[{ id:"2wd", name:"2WD", price:0, sub:"4WD는 선택품목에서 적용" }]
    },

    seats:[{ id:"5", name:"5인승", price:0, sub:"기본" }],

    trimsByEngine: {
      standard:[
        { id:"light", name:"라이트", price:43600000, sub:"세제혜택 후" },
        { id:"air", name:"에어", price:48600000, sub:"세제혜택 후" },
        { id:"earth", name:"어스", price:52600000, sub:"세제혜택 후" }
      ],
      longrange:[
        { id:"light", name:"라이트", price:47600000, sub:"세제혜택 후" },
        { id:"air", name:"에어", price:52600000, sub:"세제혜택 후" },
        { id:"earth", name:"어스", price:56600000, sub:"세제혜택 후" },
        { id:"gtline", name:"GT-Line", price:57200000, sub:"세제혜택 후" }
      ]
    },

    colors: [
      { id:"snow_white", name:"스노우 화이트 펄", price:80000, color:"#F5F5F0" },
      { id:"aurora_black", name:"오로라 블랙 펄", price:0, color:"#151617" },
      { id:"runway_red", name:"런웨이 레드", price:0, color:"#8B3032" },
      { id:"interstellar_gray", name:"인터스텔라 그레이", price:0, color:"#555A5C", allowedTrims:["light","air","earth"] },
      { id:"glacier", name:"글래시어", price:0, color:"#C8D1D1", allowedTrims:["light","air","earth"] },
      { id:"ivory_matte", name:"아이보리 매트 실버", price:300000, color:"#C6C2B8", allowedTrims:["light","air","earth"] },
      { id:"moonscape_matte", name:"문스케이프 매트 그레이", price:300000, color:"#767A7A", allowedTrims:["light","air","earth"] },
      { id:"yacht_blue", name:"요트 블루", price:0, color:"#2E536F", allowedTrims:["light","air","earth"] },
      { id:"wolf_gray", name:"울프 그레이", price:0, color:"#898D8F", allowedTrims:["gtline"] },
      { id:"yacht_matte_blue", name:"요트 매트 블루", price:300000, color:"#49667A", allowedTrims:["gtline"] }
    ],

    optionsByEngine: {
      standard:{
        light:[
          { id:"power_tailgate", name:"스마트 파워테일게이트", price:400000 },
          { id:"drivewise", name:"드라이브 와이즈", price:1100000 },
          { id:"convenience1", name:"컨비니언스 I", price:500000 },
          { id:"convenience2", name:"컨비니언스 II", price:900000 },
          { id:"awd", name:"듀얼 모터 4WD", price:2470000 },
          { id:"wheel20", name:"20인치 휠&타이어", price:400000 }
        ],
        air:[
          { id:"drivewise", name:"드라이브 와이즈", price:650000 },
          { id:"comfort", name:"컴포트", price:1040000 },
          { id:"hightech", name:"하이테크", price:690000 },
          { id:"premium", name:"프리미엄", price:1040000 },
          { id:"monitoring", name:"모니터링", price:790000, requires:"premium", note:"프리미엄 적용 시 선택 가능" },
          { id:"builtincam", name:"빌트인 캠 2", price:450000 },
          { id:"awd", name:"듀얼 모터 4WD", price:2470000 },
          { id:"smartconnect", name:"스마트 커넥트", price:650000 },
          { id:"wheel20", name:"20인치 휠&타이어", price:400000 }
        ],
        earth:[
          { id:"drivewise", name:"드라이브 와이즈", price:650000 },
          { id:"meridian", name:"메리디안 프리미엄 사운드", price:990000 },
          { id:"sunroof", name:"와이드 선루프", price:640000 },
          { id:"builtincam", name:"빌트인 캠 2", price:450000 },
          { id:"awd", name:"듀얼 모터 4WD", price:2470000 },
          { id:"smartconnect", name:"스마트 커넥트", price:700000 },
          { id:"wheel20", name:"20인치 휠&타이어", price:400000 }
        ]
      },

      longrange:{
        light:[
          { id:"power_tailgate", name:"스마트 파워테일게이트", price:400000 },
          { id:"drivewise", name:"드라이브 와이즈", price:1100000 },
          { id:"convenience1", name:"컨비니언스 I", price:500000 },
          { id:"convenience2", name:"컨비니언스 II", price:900000 },
          { id:"awd", name:"듀얼 모터 4WD", price:2470000 },
          { id:"wheel20", name:"20인치 휠&타이어", price:400000 }
        ],
        air:[
          { id:"drivewise", name:"드라이브 와이즈", price:650000 },
          { id:"comfort", name:"컴포트", price:1040000 },
          { id:"hightech", name:"하이테크", price:690000 },
          { id:"premium", name:"프리미엄", price:1040000 },
          { id:"monitoring", name:"모니터링", price:790000, requires:"premium", note:"프리미엄 적용 시 선택 가능" },
          { id:"builtincam", name:"빌트인 캠 2", price:450000 },
          { id:"awd", name:"듀얼 모터 4WD", price:2470000 },
          { id:"smartconnect", name:"스마트 커넥트", price:650000 },
          { id:"wheel20", name:"20인치 휠&타이어", price:400000 }
        ],
        earth:[
          { id:"drivewise", name:"드라이브 와이즈", price:650000 },
          { id:"meridian", name:"메리디안 프리미엄 사운드", price:990000 },
          { id:"sunroof", name:"와이드 선루프", price:640000 },
          { id:"builtincam", name:"빌트인 캠 2", price:450000 },
          { id:"awd", name:"듀얼 모터 4WD", price:2470000 },
          { id:"smartconnect", name:"스마트 커넥트", price:700000 },
          { id:"wheel20", name:"20인치 휠&타이어", price:400000 }
        ],
        gtline:[
          { id:"drivewise", name:"드라이브 와이즈", price:650000 },
          { id:"meridian", name:"메리디안 프리미엄 사운드", price:990000 },
          { id:"sunroof", name:"와이드 선루프", price:640000 },
          { id:"builtincam", name:"빌트인 캠 2", price:450000 },
          { id:"awd", name:"듀얼 모터 4WD", price:2470000 },
          { id:"smartconnect", name:"스마트 커넥트", price:700000 },
          { id:"wheel20", name:"20인치 휠&타이어", price:400000 }
        ]
      }
    },

    evEngineIds:["standard","longrange"],
    evAcquisitionTaxReduction:1400000
  },

  /* =========================================================
     The Kia EV3 GT
     Kia 공식 가격 페이지 2026-08-01 기준
     ========================================================= */
  ev3gt: {
    brand: "KIA",
    name: "The Kia EV3 GT",
    displayName: "EV3 GT",
    year: "2026년 8월 1일 공식 가격 기준",
    type: "고성능 전기 SUV · GT 4WD Long Range",
    image: "ev3gt.png",

    engineHelp:
      "기아 공식 EV3 GT 가격표 기준 81.4kWh 롱레인지 배터리와 전륜 145kW + 후륜 70kW 듀얼 모터 4WD, 시스템 최고출력 215kW 구성입니다.",

    trimHelp:
      "EV3 GT는 GT 단일 트림으로 운영되며 세제혜택 후 공식 판매가격 53,750,000원을 적용합니다.",

    tax: {
      rate: 0.07,
      vatIncluded: true
    },

    engines: [
      {
        id: "gt_longrange",
        name: "GT 롱레인지",
        price: 0,
        sub: "81.4kWh · 215kW 듀얼 모터"
      }
    ],

    drivesByEngine: {
      gt_longrange: [
        {
          id: "4wd",
          name: "4WD",
          price: 0,
          sub: "전륜 145kW + 후륜 70kW 듀얼 모터 · 기본"
        }
      ]
    },

    seats: [
      { id: "5", name: "5인승", price: 0, sub: "기본" }
    ],

    trimsByEngine: {
      gt_longrange: [
        {
          id: "gt",
          name: "GT",
          price: 53750000,
          sub: "세제혜택 후"
        }
      ]
    },

    colors: [
      { id:"ivory_matte", name:"아이보리 매트 실버", price:300000, color:"#C6C2B8" },
      { id:"snow_white", name:"스노우 화이트 펄", price:80000, color:"#F5F5F0" },
      { id:"ivory_silver", name:"아이보리 실버", price:0, color:"#C9C7BF" },
      { id:"adventurine_green", name:"어벤처린 그린", price:0, color:"#66736A" },
      { id:"frost_blue", name:"프로스트 블루", price:0, color:"#8FA6B5" },
      { id:"shale_gray", name:"세일 그레이", price:0, color:"#62696D" },
      { id:"aurora_black", name:"오로라 블랙 펄", price:0, color:"#151617" }
    ],

    optionsByEngine: {
      gt_longrange: {
        gt: [
          { id: "monitoring", name: "모니터링", price: 1040000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 1090000 },
          { id: "sunroof", name: "와이드 선루프", price: 640000 },
          { id: "builtincam", name: "빌트인 캠 2 플러스", price: 450000 },
          { id: "hud", name: "헤드업 디스플레이", price: 590000 }
        ]
      }
    },

    evEngineIds: ["gt_longrange"],
    evAcquisitionTaxReduction: 1400000
  },

  /* =========================================================
     The 2026 EV3
     Kia 공식 가격 페이지 2026-08-01 기준
     - 스탠다드 2WD (58.3kWh)
     - 롱레인지 2WD (81.4kWh)
     - 롱레인지 듀얼 모터 4WD 선택 지원
     - EV3 GT는 별도 공식 모델이므로 본 데이터에서 제외
     ========================================================= */
  ev3: {
    brand: "KIA",
    name: "The 2026 EV3",
    displayName: "EV3",
    year: "2026년 8월 1일 공식 가격 기준",
    type: "전기 SUV · Standard · Long Range",
    image: "ev3.png",

    engineHelp:
      "기아 공식 EV3 가격표 기준 스탠다드(58.3kWh)와 롱레인지(81.4kWh)를 선택합니다. 롱레인지에서는 공식 선택품목으로 듀얼 모터 4WD를 선택할 수 있습니다.",

    trimHelp:
      "에어 · 어스 · GT-Line의 세제혜택 후 공식 판매가격을 사용합니다. EV3 GT는 기아에서 별도 모델로 판매하므로 이 견적에는 포함하지 않습니다.",

    tax: {
      rate: 0.07,
      vatIncluded: true
    },

    engines: [
      {
        id: "standard",
        name: "스탠다드",
        price: 0,
        sub: "58.3kWh · 150kW · 2WD"
      },
      {
        id: "longrange",
        name: "롱레인지",
        price: 0,
        sub: "81.4kWh · 150kW · 2WD / 듀얼 모터 4WD 선택 가능"
      }
    ],

    drivesByEngine: {
      standard: [
        { id: "2wd", name: "2WD", price: 0, sub: "스탠다드 공식 구성" }
      ],
      longrange: [
        { id: "2wd", name: "2WD", price: 0, sub: "기본 구동 · 4WD는 선택품목에서 적용" }
      ]
    },

    seats: [
      { id: "5", name: "5인승", price: 0, sub: "기본" }
    ],

    trimsByEngine: {
      standard: [
        { id: "air", name: "에어", price: 39950000, sub: "세제혜택 후" },
        { id: "earth", name: "어스", price: 43900000, sub: "세제혜택 후" },
        { id: "gtline", name: "GT-Line", price: 44750000, sub: "세제혜택 후" }
      ],
      longrange: [
        { id: "air", name: "에어", price: 44150000, sub: "세제혜택 후" },
        { id: "earth", name: "어스", price: 48100000, sub: "세제혜택 후" },
        { id: "gtline", name: "GT-Line", price: 48950000, sub: "세제혜택 후" }
      ]
    },

    colors: [
      { id: "adventurine_green", name: "어벤쳐린 그린", price: 0, color: "#66736A" },
      { id: "snow_white", name: "스노우 화이트 펄", price: 80000, color: "#F5F5F0" },
      { id: "ivory_matte", name: "아이보리 매트 실버", price: 300000, color: "#C9C5BA" }
    ],

    optionsByEngine: {
      standard: {
        air: [
          { id: "style", name: "스타일", price: 940000 },
          { id: "comfort1", name: "컴포트 I", price: 490000 },
          { id: "comfort2", name: "컴포트 II", price: 890000, requires: "comfort1", note: "컴포트 I 적용 시 선택 가능" },
          { id: "convenience", name: "컨비니언스", price: 1290000 },
          { id: "wheel19", name: "19인치 휠 & 타이어", price: 490000 },
          { id: "monitoring", name: "모니터링", price: 1040000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 1090000 },
          { id: "sunroof", name: "와이드 선루프", price: 640000, requires: "style", note: "스타일 적용 시 선택 가능" },
          { id: "builtincam", name: "빌트인 캠 2 플러스", price: 450000 },
          { id: "hud", name: "헤드업 디스플레이", price: 590000 }
        ],
        earth: [
          { id: "wheel19", name: "19인치 휠 & 타이어", price: 490000 },
          { id: "monitoring", name: "모니터링", price: 1040000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 1090000 },
          { id: "sunroof", name: "와이드 선루프", price: 640000 },
          { id: "harman", name: "하만카돈 프리미엄 사운드", price: 590000 },
          { id: "builtincam", name: "빌트인 캠 2 플러스", price: 450000 },
          { id: "hud", name: "헤드업 디스플레이", price: 590000 }
        ],
        gtline: [
          { id: "monitoring", name: "모니터링", price: 1040000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 1090000 },
          { id: "sunroof", name: "와이드 선루프", price: 640000 },
          { id: "harman", name: "하만카돈 프리미엄 사운드", price: 590000 },
          { id: "builtincam", name: "빌트인 캠 2 플러스", price: 450000 },
          { id: "hud", name: "헤드업 디스플레이", price: 590000 }
        ]
      },

      longrange: {
        air: [
          { id: "style", name: "스타일", price: 940000 },
          { id: "comfort1", name: "컴포트 I", price: 490000 },
          { id: "comfort2", name: "컴포트 II", price: 890000, requires: "comfort1", note: "컴포트 I 적용 시 선택 가능" },
          { id: "convenience", name: "컨비니언스", price: 1290000 },
          { id: "wheel19", name: "19인치 휠 & 타이어", price: 490000 },
          {
            id: "awd",
            name: "듀얼 모터 4WD",
            price: 2270000,
            requires: "wheel19",
            note: "19인치 휠 & 타이어 적용 시 선택 가능"
          },
          { id: "monitoring", name: "모니터링", price: 1040000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 1090000 },
          { id: "sunroof", name: "와이드 선루프", price: 640000, requires: "style", note: "스타일 적용 시 선택 가능" },
          { id: "builtincam", name: "빌트인 캠 2 플러스", price: 450000 },
          { id: "hud", name: "헤드업 디스플레이", price: 590000 }
        ],
        earth: [
          { id: "wheel19", name: "19인치 휠 & 타이어", price: 490000 },
          {
            id: "awd",
            name: "듀얼 모터 4WD",
            price: 2270000,
            requires: "wheel19",
            note: "19인치 휠 & 타이어 적용 시 선택 가능"
          },
          { id: "monitoring", name: "모니터링", price: 1040000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 1090000 },
          { id: "sunroof", name: "와이드 선루프", price: 640000 },
          { id: "harman", name: "하만카돈 프리미엄 사운드", price: 590000 },
          { id: "builtincam", name: "빌트인 캠 2 플러스", price: 450000 },
          { id: "hud", name: "헤드업 디스플레이", price: 590000 }
        ],
        gtline: [
          {
            id: "awd",
            name: "듀얼 모터 4WD",
            price: 2270000,
            note: "GT-Line은 19인치 휠이 기본 적용되어 별도 휠 선택 없이 선택 가능"
          },
          { id: "monitoring", name: "모니터링", price: 1040000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 1090000 },
          { id: "sunroof", name: "와이드 선루프", price: 640000 },
          { id: "harman", name: "하만카돈 프리미엄 사운드", price: 590000 },
          { id: "builtincam", name: "빌트인 캠 2 플러스", price: 450000 },
          { id: "hud", name: "헤드업 디스플레이", price: 590000 }
        ]
      }
    },

    evEngineIds: ["standard", "longrange"],
    evAcquisitionTaxReduction: 1400000
  },

  /* =========================================================
     The 2027 Ray / Ray EV
     Kia 공식 가격 페이지 2026-08-01 기준
     가솔린 승용/1인승 밴/2인승 밴 + EV 승용/1인승 밴/2인승 밴 통합
     ========================================================= */
  ray: {
    brand: "KIA",
    name: "The 2027 Ray / Ray EV",
    displayName: "레이 / 레이 EV",
    year: "2026년 8월 1일 공식 가격 기준",
    type: "경형 RV · 1.0 가솔린 · EV",
    image: "ray.png",

    engineHelp:
      "기아 공식 판매구조에 맞춰 가솔린 승용/1인승 밴/2인승 밴과 EV 4인승 승용/1인승 밴/2인승 밴을 한 차량에서 선택합니다.",

    trimHelp:
      "선택한 용도에 따라 기아 공식 트림만 표시됩니다.",

    /*
      레이는 경차/EV/밴에 따라 취득세 감면·차종 분류가 달라질 수 있어
      단일 tax.rate로 정확하게 처리할 수 없습니다.
      아래 taxByEngine은 후속 estimate.js의 엔진별 세금 계산용 메타데이터입니다.
      차량 판매가격/옵션 가격 데이터와 세금 계산을 분리해 잘못된 세액을 방지합니다.
    */
    /*
      레이의 표준 취득세율은 경형자동차 4%입니다.
      개별 감면은 estimate.js가 taxByEngine의 reductionType을 읽어 적용합니다.
      CAR.tax.rate도 4%로 두어, 분기 인식에 실패하더라도 화면에 0%가 표시되지 않게 합니다.
    */
    tax: { rate: 0.04, vatIncluded: true, manualByEngine: true },
    taxByEngine: {
      gas_passenger: {
        category: "light_passenger",
        rate: 0.04,
        reductionType: "light_passenger_750k",
        note: "경형 비영업용 승용: 4% 산출 후 최대 750,000원 감면"
      },
      gas_van1: {
        category: "light_van",
        rate: 0.04,
        reductionType: "light_van_full",
        note: "경형 승합/화물: 4% 산출 후 현행 특례에 따라 전액 면제"
      },
      gas_van2: {
        category: "light_van",
        rate: 0.04,
        reductionType: "light_van_full",
        note: "경형 승합/화물: 4% 산출 후 현행 특례에 따라 전액 면제"
      },
      ev_passenger: {
        category: "light_ev_passenger",
        rate: 0.04,
        reductionType: "ev_1400k",
        note: "경형 승용 EV: 4% 산출 후 전기차 감면 최대 1,400,000원 적용"
      },
      ev_van1: {
        category: "light_ev_van",
        rate: 0.04,
        reductionType: "light_van_full",
        note: "경형 EV 밴: 경형 승합/화물 특례 적용"
      },
      ev_van2: {
        category: "light_ev_van",
        rate: 0.04,
        reductionType: "light_van_full",
        note: "경형 EV 밴: 경형 승합/화물 특례 적용"
      }
    },

    engines: [
      { id:"gas_passenger", name:"1.0 가솔린 · 승용", price:0, sub:"4인승 승용" },
      { id:"gas_van1", name:"1.0 가솔린 · 1인승 밴", price:0, sub:"1인승 밴" },
      { id:"gas_van2", name:"1.0 가솔린 · 2인승 밴", price:0, sub:"2인승 밴" },
      { id:"ev_passenger", name:"EV · 4인승 승용", price:0, sub:"35.2kWh LFP 배터리" },
      { id:"ev_van1", name:"EV · 1인승 밴", price:0, sub:"35.2kWh LFP 배터리" },
      { id:"ev_van2", name:"EV · 2인승 밴", price:0, sub:"35.2kWh LFP 배터리" }
    ],

    drivesByEngine: {
      gas_passenger:[{id:"2wd",name:"2WD",price:0}],
      gas_van1:[{id:"2wd",name:"2WD",price:0}],
      gas_van2:[{id:"2wd",name:"2WD",price:0}],
      ev_passenger:[{id:"2wd",name:"2WD",price:0}],
      ev_van1:[{id:"2wd",name:"2WD",price:0}],
      ev_van2:[{id:"2wd",name:"2WD",price:0}]
    },

    seats:[{id:"auto",name:"선택 모델 기준",price:0,sub:"승용/밴 선택에 따라 자동"}],

    trimsByEngine: {
      gas_passenger:[
        {id:"trendy",name:"트렌디",price:15550000},
        {id:"prestige",name:"프레스티지",price:18150000},
        {id:"signature",name:"시그니처",price:19550000},
        {id:"xline",name:"X-Line",price:20600000,sub:"X-Line 전용 외장 디자인"}
      ],
      gas_van1:[
        {id:"trendy",name:"트렌디",price:14800000},
        {id:"prestige",name:"프레스티지",price:15400000}
      ],
      gas_van2:[
        {id:"trendy",name:"트렌디",price:14900000},
        {id:"prestige",name:"프레스티지",price:15550000},
        {id:"prestige_special",name:"프레스티지 스페셜",price:16100000}
      ],
      ev_passenger:[
        {id:"light",name:"라이트",price:28520000},
        {id:"air",name:"에어",price:30620000}
      ],
      ev_van1:[
        {id:"light",name:"라이트",price:28070000},
        {id:"air",name:"에어",price:28620000}
      ],
      ev_van2:[
        {id:"light",name:"라이트",price:28170000},
        {id:"air",name:"에어",price:28770000}
      ]
    },

    colors:[
      { id:"clear_white", name:"클리어 화이트", price:0, color:"#F1F1EA" },
      { id:"astro_gray", name:"아스트로 그레이", price:0, color:"#555A5D" },
      { id:"aurora_black_pearl", name:"오로라 블랙 펄", price:0, color:"#17191B" },
      { id:"adventurous_green", name:"어드벤쳐러스 그린", price:0, color:"#657064" },
      { id:"milky_beige", name:"밀키 베이지", price:0, color:"#D8CBB8" },
      { id:"smoke_blue", name:"스모크 블루", price:0, color:"#71828A" }
    ],

    optionsByEngine: {
      gas_passenger:{
        trendy:[
          {id:"style",name:"스타일",price:500000},
          {id:"wheel15",name:"15인치 전면가공 휠",price:500000},
          {id:"comfort1",name:"컴포트 Ⅰ",price:600000},
          {id:"drivewise",name:"드라이브 와이즈",price:300000},
          {id:"display8",name:"8인치 디스플레이 오디오",price:500000,excludes:["nav8"],note:"8인치 내비게이션과 중복 선택 불가"},
          {id:"nav8",name:"8인치 내비게이션",price:1450000,excludes:["display8"],note:"8인치 디스플레이 오디오와 중복 선택 불가"}
        ],
        prestige:[
          {id:"style",name:"스타일",price:500000},
          {id:"wheel15",name:"15인치 전면가공 휠",price:400000},
          {id:"comfort2",name:"컴포트 Ⅱ",price:300000},
          {id:"drivewise",name:"드라이브 와이즈",price:300000},
          {id:"nav8",name:"8인치 내비게이션",price:500000}
        ],
        signature:[
          {id:"nav8",name:"8인치 내비게이션",price:500000}
        ],
        xline:[
          {id:"nav8",name:"8인치 내비게이션",price:500000}
        ]
      },

      gas_van1:{
        trendy:[
          {id:"smartkey",name:"버튼시동 스마트키",price:300000},
          {id:"wheel15",name:"15인치 전면가공 휠",price:500000,requires:"smartkey",note:"버튼시동 스마트키 적용 시 선택 가능"},
          {id:"drivewise",name:"드라이브 와이즈",price:300000,requires:"smartkey",note:"버튼시동 스마트키 적용 시 선택 가능"},
          {id:"nav8",name:"8인치 내비게이션",price:1600000,requires:"smartkey",note:"버튼시동 스마트키 적용 시 선택 가능"}
        ],
        prestige:[
          {id:"smartkey",name:"버튼시동 스마트키",price:300000},
          {id:"wheel15",name:"15인치 전면가공 휠",price:500000,requires:"smartkey"},
          {id:"drivewise",name:"드라이브 와이즈",price:300000,requires:"smartkey"},
          {id:"nav8",name:"8인치 내비게이션",price:1600000,requires:"smartkey"}
        ]
      },

      gas_van2:{
        trendy:[
          {id:"smartkey",name:"버튼시동 스마트키",price:300000},
          {id:"wheel15",name:"15인치 전면가공 휠",price:500000,requires:"smartkey"},
          {id:"drivewise",name:"드라이브 와이즈",price:300000,requires:"smartkey"},
          {id:"nav8",name:"8인치 내비게이션",price:1600000,requires:"smartkey"}
        ],
        prestige:[
          {id:"smartkey",name:"버튼시동 스마트키",price:300000},
          {id:"wheel15",name:"15인치 전면가공 휠",price:500000,requires:"smartkey"},
          {id:"drivewise",name:"드라이브 와이즈",price:300000,requires:"smartkey"},
          {id:"nav8",name:"8인치 내비게이션",price:1500000,requires:"smartkey"},
          {id:"comfort",name:"컴포트",price:400000}
        ],
        prestige_special:[
          {id:"smartkey",name:"버튼시동 스마트키",price:300000},
          {id:"style",name:"스타일",price:500000,requires:"smartkey"},
          {id:"wheel15",name:"15인치 전면가공 휠",price:500000,requires:"smartkey"},
          {id:"drivewise",name:"드라이브 와이즈",price:300000,requires:"smartkey"},
          {id:"nav8",name:"8인치 내비게이션",price:950000,requires:"smartkey"},
          {id:"comfort",name:"컴포트",price:400000}
        ]
      },

      ev_passenger:{
        light:[
          {id:"style",name:"스타일",price:600000},
          {id:"comfort1",name:"컴포트Ⅰ",price:600000},
          {id:"comfort2",name:"컴포트Ⅱ",price:450000,requires:"comfort1",note:"컴포트Ⅰ 적용 시 선택 가능"},
          {id:"drivewise",name:"드라이브 와이즈",price:300000}
        ],
        air:[]
      },

      ev_van1:{
        light:[
          {id:"style",name:"스타일",price:600000},
          {id:"drivewise",name:"드라이브 와이즈",price:300000}
        ],
        air:[
          {id:"comfort1",name:"컴포트 Ⅰ",price:350000},
          {id:"drivewise",name:"드라이브 와이즈",price:300000}
        ]
      },

      ev_van2:{
        light:[
          {id:"style",name:"스타일",price:600000},
          {id:"comfort2",name:"컴포트Ⅱ",price:250000},
          {id:"drivewise",name:"드라이브 와이즈",price:300000}
        ],
        air:[
          {id:"comfort1",name:"컴포트Ⅰ",price:400000},
          {id:"drivewise",name:"드라이브 와이즈",price:300000}
        ]
      }
    }
  },

  /* =========================================================
     The new Niro
     Kia 공식 가격 페이지 2026-08-01 기준
     - 1.6 하이브리드
     ========================================================= */
  niro: {
    brand: "KIA",
    name: "The new Niro",
    displayName: "니로 HEV",
    year: "2026년 8월 1일 공식 가격 기준",
    type: "하이브리드 SUV · 1.6 HEV",
    image: "niro.png",

    engineHelp:
      "기아 공식 가격표 기준 스마트스트림 G1.6 하이브리드 엔진, 6단 DCT, 32kW 구동 모터 구성입니다. 현재 국내 공식 니로 판매 페이지의 HEV만 반영합니다.",

    trimHelp:
      "트렌디 · 프레스티지 · 시그니처의 세제혜택 후 공식 판매가격과 선택품목을 반영합니다.",

    tax: { rate: 0.07, vatIncluded: true },

    engines: [
      {
        id: "hybrid16",
        name: "1.6 하이브리드",
        price: 0,
        sub: "스마트스트림 G1.6 하이브리드 · 6단 DCT · 32kW 구동 모터"
      }
    ],

    drivesByEngine: {
      hybrid16: [
        { id: "2wd", name: "2WD", price: 0, sub: "전륜구동" }
      ]
    },

    seats: [
      { id: "5", name: "5인승", price: 0, sub: "기본" }
    ],

    trimsByEngine: {
      hybrid16: [
        { id: "trendy", name: "트렌디", price: 29270000, sub: "세제혜택 후" },
        { id: "prestige", name: "프레스티지", price: 32420000, sub: "세제혜택 후" },
        { id: "signature", name: "시그니처", price: 35150000, sub: "세제혜택 후" }
      ]
    },

    colors: [
      { id:"snow_white", name:"스노우 화이트 펄", price:80000, color:"#F5F5F0" },
      { id:"ivory_silver", name:"아이보리 실버", price:0, color:"#C9C7BF" },
      { id:"steel_gray", name:"스틸 그레이", price:0, color:"#707577" },
      { id:"cityscape_green", name:"시티스케이프 그린", price:0, color:"#53655D" },
      { id:"mineral_blue", name:"미네랄 블루", price:0, color:"#42647C" },
      { id:"interstellar_gray", name:"인터스텔라 그레이", price:0, color:"#555A5C" },
      { id:"aurora_black", name:"오로라 블랙 펄", price:0, color:"#151617" }
    ],

    optionsByEngine: {
      hybrid16: {
        trendy: [
          { id: "convenience", name: "컨비니언스", price: 650000 },
          { id: "wheel18", name: "18인치 휠", price: 490000 },
          { id: "drivewise1", name: "드라이브 와이즈 Ⅰ", price: 420000 },
          { id: "cluster", name: "12.3인치 클러스터 팩", price: 1150000 },
          {
            id: "builtincam",
            name: "빌트인 캠 2 플러스",
            price: 450000,
            requires: "cluster",
            note: "12.3인치 클러스터 팩 적용 시 선택 가능"
          }
        ],

        prestige: [
          { id: "style", name: "스타일", price: 970000 },
          { id: "wheel18", name: "18인치 휠", price: 490000 },
          { id: "premium", name: "프리미엄", price: 1240000 },
          { id: "drivewise1", name: "드라이브 와이즈 Ⅰ", price: 420000 },
          { id: "cluster", name: "12.3인치 클러스터 팩", price: 400000 },
          {
            id: "drivewise2",
            name: "드라이브 와이즈 Ⅱ",
            price: 990000,
            requires: "cluster",
            note: "12.3인치 클러스터 팩 적용 시 선택 가능"
          },
          {
            id: "hud",
            name: "HUD",
            price: 590000,
            requires: "cluster",
            note: "12.3인치 클러스터 팩 적용 시 선택 가능"
          },
          {
            id: "builtincam",
            name: "빌트인 캠 2 플러스",
            price: 450000,
            requires: "cluster",
            note: "12.3인치 클러스터 팩 적용 시 선택 가능"
          },
          { id: "comfort", name: "컴포트", price: 750000 },
          { id: "smartconnect", name: "스마트 커넥트", price: 850000 },
          { id: "sunroof", name: "선루프 + LED 실내등", price: 450000 }
        ],

        signature: [
          { id: "style", name: "스타일", price: 970000 },
          { id: "wheel18", name: "18인치 휠", price: 490000 },
          { id: "premium", name: "프리미엄", price: 1240000 },
          { id: "drivewise1", name: "드라이브 와이즈 Ⅰ", price: 420000 },
          { id: "drivewise2", name: "드라이브 와이즈 Ⅱ", price: 990000 },
          { id: "hud", name: "HUD", price: 590000 },
          { id: "builtincam", name: "빌트인 캠 2 플러스", price: 450000 },
          { id: "comfort", name: "컴포트", price: 550000 },
          { id: "smartconnect", name: "스마트 커넥트", price: 850000 },
          { id: "harman", name: "하만카돈 프리미엄 사운드", price: 590000 },
          { id: "sunroof", name: "선루프 + LED 실내등", price: 450000 }
        ]
      }
    }
  },

  /* =========================================================
     The 2027 K5
     Kia 공식 자가용 가격 페이지 2026-08-01 기준
     카원 구성: 2.0 가솔린 + 2.0 하이브리드
     ========================================================= */
  k5: {
    brand: "KIA",
    name: "The 2027 K5",
    displayName: "K5 / K5 Hybrid",
    year: "2026년 8월 1일 공식 가격 기준",
    type: "중형 세단 · 2.0 가솔린 · 2.0 하이브리드",
    image: "k5.png",

    engineHelp:
      "기아 공식 자가용 가격표 기준 2.0 가솔린과 2.0 하이브리드를 하나의 견적에서 선택합니다. 하이브리드는 세제혜택 후 판매가격을 적용합니다.",

    trimHelp:
      "2.0 가솔린은 스마트 셀렉션부터 시그니처까지, 하이브리드는 프레스티지부터 시그니처까지 공식 판매가격과 선택품목을 반영합니다.",

    tax: { rate: 0.07, vatIncluded: true },

    engines: [
      { id:"gas20", name:"2.0 가솔린", price:0, sub:"스마트스트림 G2.0 · 6단 자동변속기" },
      { id:"hybrid20", name:"2.0 하이브리드", price:0, sub:"스마트스트림 G2.0 하이브리드 · 6AT · 38.6kW 구동모터" }
    ],

    drivesByEngine: {
      gas20: [{ id:"2wd", name:"2WD", price:0, sub:"전륜구동" }],
      hybrid20: [{ id:"2wd", name:"2WD", price:0, sub:"전륜구동" }]
    },

    seats: [{ id:"5", name:"5인승", price:0, sub:"기본" }],

    trimsByEngine: {
      gas20: [
        { id:"smart", name:"스마트 셀렉션", price:27630000 },
        { id:"prestige", name:"프레스티지", price:28920000 },
        { id:"best", name:"베스트 셀렉션", price:30140000 },
        { id:"noblesse", name:"노블레스", price:32440000 },
        { id:"signature", name:"시그니처", price:35580000 }
      ],
      hybrid20: [
        { id:"prestige", name:"프레스티지", price:33340000, sub:"세제혜택 후" },
        { id:"best", name:"베스트 셀렉션", price:34430000, sub:"세제혜택 후" },
        { id:"noblesse", name:"노블레스", price:36700000, sub:"세제혜택 후" },
        { id:"signature", name:"시그니처", price:39640000, sub:"세제혜택 후" }
      ]
    },

    colors: [
      { id:"snow_white", name:"스노우 화이트 펄", price:80000, color:"#F5F5F0" },
      { id:"interstellar_gray", name:"인터스텔라 그레이", price:0, color:"#555A5C" },
      { id:"aurora_black", name:"오로라 블랙 펄", price:0, color:"#151617" },
      { id:"wolf_gray", name:"울프 그레이", price:0, color:"#8A8D8F" },
      { id:"gravity_blue", name:"그래비티 블루", price:0, color:"#31475B" },
      { id:"yacht_blue", name:"요트 블루", price:0, color:"#2E536F" },
      { id:"glacier", name:"글래시어", price:0, color:"#C8D1D1" }
    ],

    optionsByEngine: {
      gas20: {
        smart: [
          { id:"comfort", name:"컴포트", price:400000 },
          { id:"hudcam", name:"HUD + 빌트인 캠 2", price:1090000 },
          { id:"krell", name:"KRELL 프리미엄 사운드", price:590000 },
          { id:"blackfit", name:"블랙 핏", price:490000 },
          { id:"sunroof", name:"파노라마 선루프", price:1090000 }
        ],
        prestige: [
          { id:"cluster", name:"12.3인치 클러스터 팩", price:1300000 },
          { id:"drivewise", name:"드라이브 와이즈", price:1140000 },
          { id:"sunroof", name:"파노라마 선루프", price:1090000 }
        ],
        best: [
          { id:"style", name:"스타일", price:890000 },
          { id:"comfort", name:"컴포트", price:990000 },
          { id:"drivewise", name:"드라이브 와이즈", price:450000 },
          { id:"cluster", name:"12.3인치 클러스터 팩", price:1040000 },
          { id:"hudcam", name:"HUD + 빌트인 캠 2", price:1090000 },
          { id:"sunroof", name:"파노라마 선루프", price:1090000 }
        ],
        noblesse: [
          { id:"style", name:"스타일", price:400000 },
          { id:"builtincam", name:"빌트인 캠 2", price:450000 },
          { id:"monitoring", name:"모니터링", price:1150000 },
          { id:"sunroof", name:"파노라마 선루프", price:1090000 }
        ],
        signature: [
          { id:"style", name:"스타일", price:890000 },
          { id:"comfort", name:"컴포트", price:890000 },
          { id:"drivewise", name:"드라이브 와이즈", price:450000 },
          { id:"hudcam", name:"HUD + 빌트인 캠 2", price:1090000 },
          { id:"krell", name:"KRELL 프리미엄 사운드", price:590000 },
          { id:"sunroof", name:"파노라마 선루프", price:1090000 }
        ]
      },

      hybrid20: {
        prestige: [
          { id:"style", name:"스타일", price:1090000 },
          { id:"comfort", name:"컴포트", price:990000 },
          { id:"drivewise", name:"드라이브 와이즈", price:450000 },
          { id:"cluster", name:"12.3인치 클러스터 팩", price:690000 },
          { id:"hudcam", name:"HUD + 빌트인 캠 2", price:1090000 },
          { id:"sunroof", name:"파노라마 선루프", price:1090000 }
        ],
        best: [
          { id:"style", name:"스타일", price:1090000 },
          { id:"comfort", name:"컴포트", price:990000 },
          { id:"drivewise", name:"드라이브 와이즈", price:450000 },
          { id:"cluster", name:"12.3인치 클러스터 팩", price:690000 },
          { id:"hudcam", name:"HUD + 빌트인 캠 2", price:1090000 },
          { id:"sunroof", name:"파노라마 선루프", price:1090000 }
        ],
        noblesse: [
          { id:"style", name:"스타일", price:700000 },
          { id:"builtincam", name:"빌트인 캠 2", price:450000 },
          { id:"monitoring", name:"모니터링", price:1150000 },
          { id:"sunroof", name:"파노라마 선루프", price:1090000 }
        ],
        signature: [
          { id:"style", name:"스타일", price:890000 },
          { id:"comfort", name:"컴포트", price:890000 },
          { id:"drivewise", name:"드라이브 와이즈", price:450000 },
          { id:"hudcam", name:"HUD + 빌트인 캠 2", price:1090000 },
          { id:"krell", name:"KRELL 프리미엄 사운드", price:590000 },
          { id:"sunroof", name:"파노라마 선루프", price:1090000 }
        ]
      }
    }
  },

  /* =========================================================
     The 2027 K8
     Kia 공식 자가용 가격 페이지 2026-08-01 기준
     카원 운영 범위: 2.5 가솔린 + 1.6 터보 하이브리드
     ========================================================= */
  k8: {
    brand: "KIA",
    name: "The 2027 K8",
    displayName: "K8 / K8 Hybrid",
    year: "2026년 8월 1일 공식 가격 기준",
    type: "준대형 세단 · 2.5 가솔린 · 1.6 터보 하이브리드",
    image: "k8.png",

    engineHelp:
      "기아 공식 자가용 가격표 기준 2.5 가솔린과 1.6 터보 하이브리드를 제공합니다. 하이브리드는 세제혜택 후 판매가격을 기준으로 계산합니다.",

    trimHelp:
      "노블레스 라이트 · 베스트 셀렉션 · 노블레스 · 시그니처 · 시그니처 블랙의 공식 판매가격을 반영합니다.",

    tax: { rate: 0.07, vatIncluded: true },

    engines: [
      { id:"gas25", name:"2.5 가솔린", price:0, sub:"스마트스트림 G2.5 GDI · 8단 자동변속기" },
      { id:"hybrid16", name:"1.6 터보 하이브리드", price:0, sub:"스마트스트림 터보 하이브리드 · 6AT · 47.7kW 구동 모터" }
    ],

    drivesByEngine: {
      gas25: [{ id:"2wd", name:"2WD", price:0, sub:"전륜구동" }],
      hybrid16: [{ id:"2wd", name:"2WD", price:0, sub:"전륜구동" }]
    },

    seats: [{ id:"5", name:"5인승", price:0, sub:"기본" }],

    trimsByEngine: {
      gas25: [
        { id:"noblesse_light", name:"노블레스 라이트", price:37310000 },
        { id:"best", name:"베스트 셀렉션", price:38850000 },
        { id:"noblesse", name:"노블레스", price:41430000 },
        { id:"signature", name:"시그니처", price:45020000 },
        { id:"signature_black", name:"시그니처 블랙", price:46600000, sub:"전용 외장/내장 사양" }
      ],
      hybrid16: [
        { id:"noblesse_light", name:"노블레스 라이트", price:42670000, sub:"세제혜택 후" },
        { id:"best", name:"베스트 셀렉션", price:44200000, sub:"세제혜택 후" },
        { id:"noblesse", name:"노블레스", price:46780000, sub:"세제혜택 후" },
        { id:"signature", name:"시그니처", price:50380000, sub:"세제혜택 후" },
        { id:"signature_black", name:"시그니처 블랙", price:51750000, sub:"세제혜택 후 · 전용 외장/내장 사양" }
      ]
    },

    colors: [
      { id:"snow_white", name:"스노우 화이트 펄", price:80000, color:"#F5F5F0" },
      { id:"ivory_silver", name:"아이보리 실버", price:0, color:"#C9C7BF" },
      { id:"moonscape_matte", name:"문스케이프 매트 그레이", price:400000, color:"#767A7A" },
      { id:"sunset_beige", name:"선셋 베이지", price:0, color:"#B7A58C" },
      { id:"interstellar_gray", name:"인터스텔라 그레이", price:0, color:"#555A5C" },
      { id:"aurora_black", name:"오로라 블랙 펄", price:0, color:"#151617" }
    ],

    optionsByEngine: {
      gas25: {
        noblesse_light: [
          { id:"sunroof", name:"파노라마 선루프", price:1090000 },
          { id:"style", name:"스타일", price:1190000 },
          { id:"drivewise", name:"드라이브 와이즈", price:1090000 }
        ],
        best: [
          { id:"sunroof", name:"파노라마 선루프", price:1090000 },
          { id:"hud", name:"헤드업 디스플레이", price:840000 },
          { id:"style", name:"스타일", price:1780000 },
          { id:"drivewise", name:"드라이브 와이즈", price:640000 },
          { id:"smartconnect", name:"스마트 커넥트", price:540000 }
        ],
        noblesse: [
          { id:"sunroof", name:"파노라마 선루프", price:1090000 },
          { id:"hud", name:"헤드업 디스플레이", price:840000 },
          { id:"meridian", name:"메리디안 프리미엄 사운드", price:1090000 },
          { id:"style", name:"스타일", price:1980000 },
          { id:"premium", name:"프리미엄", price:1090000 },
          { id:"smartconnect", name:"스마트 커넥트", price:540000 }
        ],
        signature: [
          { id:"sunroof", name:"파노라마 선루프", price:1090000 },
          { id:"preview1", name:"프리뷰 전자제어 서스펜션 I", price:1090000 },
          { id:"preview2", name:"프리뷰 전자제어 서스펜션 II", price:1290000 },
          { id:"meridian", name:"메리디안 프리미엄 사운드", price:1090000 },
          { id:"premium", name:"프리미엄", price:1090000 }
        ],
        signature_black: [
          { id:"sunroof", name:"파노라마 선루프", price:1090000 },
          { id:"meridian", name:"메리디안 프리미엄 사운드", price:1090000 },
          { id:"premium", name:"프리미엄", price:690000 }
        ]
      },

      hybrid16: {
        noblesse_light: [
          { id:"sunroof", name:"파노라마 선루프", price:1090000 },
          { id:"style", name:"스타일", price:1190000 },
          { id:"drivewise", name:"드라이브 와이즈", price:1090000 }
        ],
        best: [
          { id:"sunroof", name:"파노라마 선루프", price:1090000 },
          { id:"hud", name:"헤드업 디스플레이", price:840000 },
          { id:"style", name:"스타일", price:1780000 },
          { id:"drivewise", name:"드라이브 와이즈", price:640000 },
          { id:"smartconnect", name:"스마트 커넥트", price:540000 }
        ],
        noblesse: [
          { id:"sunroof", name:"파노라마 선루프", price:1090000 },
          { id:"hud", name:"헤드업 디스플레이", price:840000 },
          { id:"meridian", name:"메리디안 프리미엄 사운드", price:1090000 },
          { id:"style", name:"스타일", price:1980000 },
          { id:"premium", name:"프리미엄", price:690000 },
          { id:"smartconnect", name:"스마트 커넥트", price:540000 }
        ],
        signature: [
          { id:"sunroof", name:"파노라마 선루프", price:1090000 },
          { id:"preview1", name:"프리뷰 전자제어 서스펜션 I", price:1090000 },
          { id:"meridian", name:"메리디안 프리미엄 사운드", price:1090000 },
          { id:"premium", name:"프리미엄", price:690000 }
        ],
        signature_black: [
          { id:"sunroof", name:"파노라마 선루프", price:1090000 },
          { id:"meridian", name:"메리디안 프리미엄 사운드", price:1090000 },
          { id:"premium", name:"프리미엄", price:1090000 }
        ]
      }
    }
  },

  /* =========================================================
     The 2026 K9
     Kia 공식 가격 페이지 2026-08-01 기준
     - 3.8 가솔린
     - 3.3 가솔린 터보
     ========================================================= */
  k9: {
    brand: "KIA",
    name: "The 2026 K9",
    displayName: "K9",
    year: "2026년 8월 1일 공식 가격 기준",
    type: "대형 세단 · 3.8 가솔린 · 3.3 가솔린 터보",
    image: "k9.png",

    engineHelp:
      "기아 공식 가격표 기준 3.8 가솔린과 3.3 가솔린 터보를 선택할 수 있습니다.",

    trimHelp:
      "플래티넘 · 베스트 셀렉션Ⅰ · 마스터즈 · 베스트 셀렉션Ⅱ 공식 판매가격을 반영합니다. 베스트 셀렉션Ⅰ/마스터즈/베스트 셀렉션Ⅱ는 공식 기본품목에 AWD가 포함되어 있습니다.",

    tax: {
      rate: 0.07,
      vatIncluded: true
    },

    engines: [
      {
        id: "gas38",
        name: "3.8 가솔린",
        price: 0,
        sub: "V6 람다Ⅱ 개선 3.8 GDI · 8단 자동변속기"
      },
      {
        id: "gas33t",
        name: "3.3 가솔린 터보",
        price: 0,
        sub: "V6 람다Ⅱ 개선 3.3 T-GDI · 프리뷰 전자제어 서스펜션"
      }
    ],

    /*
      K9은 트림에 따라 AWD 포함 여부가 달라집니다.
      공용 견적기의 구동 선택은 엔진 단위라 트림별 강제가 불가능하므로
      구동 단계는 '트림 기본 구성'으로 두고,
      플래티넘에서만 AWD를 공식 선택품목(+2,470,000원)으로 제공합니다.
      베스트 셀렉션Ⅰ/마스터즈/베스트 셀렉션Ⅱ 가격에는 AWD가 이미 포함됩니다.
    */
    drivesByEngine: {
      gas38: [
        { id: "trim_default", name: "트림 기본 구성", price: 0, sub: "플래티넘 2WD 기본 · 상위 트림 AWD 포함" }
      ],
      gas33t: [
        { id: "trim_default", name: "트림 기본 구성", price: 0, sub: "플래티넘 2WD 기본 · 상위 트림 AWD 포함" }
      ]
    },

    seats: [
      { id: "5", name: "5인승", price: 0, sub: "기본" }
    ],

    trimsByEngine: {
      gas38: [
        { id: "platinum", name: "플래티넘", price: 60340000 },
        { id: "best1", name: "베스트 셀렉션Ⅰ", price: 68990000, sub: "AWD 포함" },
        { id: "masters", name: "마스터즈", price: 75200000, sub: "AWD 포함" },
        { id: "best2", name: "베스트 셀렉션Ⅱ", price: 82290000, sub: "AWD 포함" }
      ],
      gas33t: [
        { id: "platinum", name: "플래티넘", price: 66880000 },
        { id: "best1", name: "베스트 셀렉션Ⅰ", price: 74750000, sub: "AWD 포함" },
        { id: "masters", name: "마스터즈", price: 79940000, sub: "AWD 포함" },
        { id: "best2", name: "베스트 셀렉션Ⅱ", price: 87030000, sub: "AWD 포함" }
      ]
    },

    colors: [
      { id:"panthera_metal", name:"판테라 메탈", price:0, color:"#4C5052" },
      { id:"deep_chroma_blue", name:"딥 크로마 블루", price:0, color:"#253A50" },
      { id:"pebble_gray", name:"페블 그레이", price:0, color:"#9A9B96" },
      { id:"aurora_black", name:"오로라 블랙 펄", price:0, color:"#151617" },
      { id:"snow_white", name:"스노우 화이트 펄", price:80000, color:"#F5F5F0" }
    ],

    optionsByEngine: {
      gas38: {
        platinum: [
          { id: "sunroof", name: "선루프", price: 790000 },
          { id: "builtincam", name: "빌트인 캠", price: 740000 },
          { id: "monitoring", name: "모니터링 팩", price: 1780000 },
          { id: "comfort", name: "컴포트 팩", price: 1190000 },
          { id: "wheel19", name: "19인치 휠 & 타이어", price: 790000 },
          { id: "hud", name: "헤드업 디스플레이", price: 1190000 },
          { id: "awd", name: "AWD", price: 2470000 }
        ],
        best1: [
          { id: "sunroof", name: "선루프", price: 790000 },
          { id: "builtincam", name: "빌트인 캠", price: 740000 },
          { id: "premium", name: "프리미엄 팩", price: 3260000 },
          { id: "lexicon", name: "Lexicon 프리미엄 사운드", price: 1380000 },
          { id: "vip", name: "VIP 컬렉션", price: 2570000 },
          { id: "preview", name: "프리뷰 전자제어 서스펜션", price: 990000 },
          { id: "rear_monitor", name: "뒷좌석 듀얼 모니터", price: 2470000 }
        ],
        masters: [
          { id: "sunroof", name: "선루프", price: 790000 },
          { id: "builtincam", name: "빌트인 캠", price: 740000 },
          { id: "premium", name: "프리미엄 팩", price: 3260000 },
          { id: "lexicon", name: "Lexicon 프리미엄 사운드", price: 1380000 },
          { id: "vip", name: "VIP 컬렉션", price: 2570000 },
          { id: "rear_monitor", name: "뒷좌석 듀얼 모니터", price: 2470000 }
        ],
        best2: [
          { id: "sunroof", name: "선루프", price: 790000 },
          { id: "builtincam", name: "빌트인 캠", price: 740000 },
          { id: "rear_monitor", name: "뒷좌석 듀얼 모니터", price: 2470000 }
        ]
      },

      gas33t: {
        platinum: [
          { id: "sunroof", name: "선루프", price: 790000 },
          { id: "builtincam", name: "빌트인 캠", price: 740000 },
          { id: "monitoring", name: "모니터링 팩", price: 1780000 },
          { id: "comfort", name: "컴포트 팩", price: 1190000 },
          { id: "hud", name: "헤드업 디스플레이", price: 1190000 },
          { id: "awd", name: "AWD", price: 2470000 }
        ],
        best1: [
          { id: "sunroof", name: "선루프", price: 790000 },
          { id: "builtincam", name: "빌트인 캠", price: 740000 },
          { id: "premium", name: "프리미엄 팩", price: 3260000 },
          { id: "lexicon", name: "Lexicon 프리미엄 사운드", price: 1380000 },
          { id: "vip", name: "VIP 컬렉션", price: 2570000 },
          { id: "rear_monitor", name: "뒷좌석 듀얼 모니터", price: 2470000 }
        ],
        masters: [
          { id: "sunroof", name: "선루프", price: 790000 },
          { id: "builtincam", name: "빌트인 캠", price: 740000 },
          { id: "premium", name: "프리미엄 팩", price: 3260000 },
          { id: "lexicon", name: "Lexicon 프리미엄 사운드", price: 1380000 },
          { id: "vip", name: "VIP 컬렉션", price: 2570000 },
          { id: "rear_monitor", name: "뒷좌석 듀얼 모니터", price: 2470000 }
        ],
        best2: [
          { id: "sunroof", name: "선루프", price: 790000 },
          { id: "builtincam", name: "빌트인 캠", price: 740000 },
          { id: "rear_monitor", name: "뒷좌석 듀얼 모니터", price: 2470000 }
        ]
      }
    }
  },

  /* =========================================================
     The 2027 Tasman
     Kia 공식 가격 페이지 2026-08-01 기준
     - 스마트스트림 G2.5 T-GDI / 8단 자동변속기
     - 일반 타스만 기준 (오픈베드 제외)
     - 비영업용 화물자동차 취득세율 5% 적용
     ========================================================= */
  tasman: {
    brand: "KIA",
    name: "The 2027 Tasman",
    displayName: "타스만",
    year: "2026년 8월 1일 공식 가격 기준",
    type: "픽업 · 2.5 가솔린 터보",
    image: "tasman.png",

    engineHelp:
      "기아 공식 가격표의 스마트스트림 G2.5 T-GDI 엔진 및 8단 자동변속기 기준입니다.",

    trimHelp:
      "다이내믹 · 어드벤처 · 베스트 셀렉션 · 익스트림 · X-Pro 공식 판매가격과 선택품목을 반영합니다.",

    tax: {
      rate: 0.05,
      vatIncluded: true
    },

    engines: [
      {
        id: "gas25t",
        name: "2.5 가솔린 터보",
        price: 0,
        sub: "스마트스트림 G2.5 T-GDI · 8단 자동변속기"
      }
    ],

    /*
      베스트 셀렉션과 X-Pro는 공식 판매가격에 전자식 4WD가 포함되어 있습니다.
      나머지 트림은 2WD 기본 + 전자식 4WD 선택 구조입니다.
      현재 공용 견적기는 트림별 구동 선택 제한을 직접 지원하지 않으므로,
      4WD 포함 트림은 기본가격 자체에 공식 4WD 구성을 포함시키고
      옵션 목록에서는 4WD를 중복 선택하지 않도록 분리합니다.
    */
    drivesByEngine: {
      gas25t: [
        { id: "2wd", name: "2WD", price: 0, sub: "기본 구동" }
      ]
    },

    seats: [
      { id: "5", name: "5인승", price: 0, sub: "기본" }
    ],

    trimsByEngine: {
      gas25t: [
        { id: "dynamic", name: "다이내믹", price: 35000000 },
        { id: "adventure", name: "어드벤처", price: 41200000 },
        { id: "best", name: "베스트 셀렉션", price: 43500000, sub: "전자식 4WD 기본 포함" },
        { id: "extreme", name: "익스트림", price: 45050000 },
        { id: "xpro", name: "X-Pro", price: 52550000, sub: "전자식 4WD 기본 포함" }
      ]
    },

    colors: [
      { id:"snow_white", name:"스노우 화이트 펄", price:80000, color:"#F5F5F0" },
      { id:"steel_gray", name:"스틸 그레이", price:0, color:"#6F7476" },
      { id:"interstellar_gray", name:"인터스텔라 그레이", price:0, color:"#555A5C" },
      { id:"cityscape_green", name:"시티스케이프 그린", price:0, color:"#53655D" },
      { id:"runway_red", name:"런웨이 레드", price:0, color:"#8B3032" },
      { id:"aurora_black", name:"오로라 블랙 펄", price:0, color:"#151617" },
      { id:"tan_beige", name:"탠 베이지", price:0, color:"#B6A58D" },
      { id:"denim_blue", name:"데님 블루", price:0, color:"#405866" }
    ],

    optionsByEngine: {
      gas25t: {
        dynamic: [
          { id: "4wd", name: "전자식 4WD", price: 2650000 },
          { id: "style", name: "스타일", price: 750000 },
          { id: "convenience", name: "컨비니언스", price: 500000 },
          { id: "nav", name: "12.3인치 내비게이션", price: 900000, requires: "convenience", note: "컨비니언스 적용 시 선택 가능" },
          { id: "cluster", name: "12.3인치 클러스터", price: 600000, requires: "nav", note: "12.3인치 내비게이션 적용 시 선택 가능" },
          { id: "drivewise", name: "드라이브 와이즈", price: 1500000, requires: "cluster", note: "12.3인치 클러스터 적용 시 선택 가능" }
        ],

        adventure: [
          { id: "4wd", name: "전자식 4WD", price: 2650000 },
          { id: "style", name: "스타일", price: 750000 },
          { id: "cluster", name: "12.3인치 클러스터", price: 600000, note: "공식 가격표: 내비게이션 적용 시 선택 가능" },
          { id: "drivewise", name: "드라이브 와이즈", price: 1500000, requires: "cluster", note: "12.3인치 클러스터 적용 시 선택 가능" },
          { id: "monitoring", name: "모니터링", price: 1200000 },
          { id: "hightech", name: "하이테크", price: 950000 },
          { id: "harman", name: "하만카돈 프리미엄 사운드", price: 600000 },
          { id: "sunroof", name: "선루프", price: 500000 }
        ],

        best: [
          { id: "style", name: "스타일", price: 750000 },
          { id: "cluster", name: "12.3인치 클러스터", price: 600000, note: "공식 가격표: 내비게이션 적용 시 선택 가능" },
          { id: "drivewise", name: "드라이브 와이즈", price: 1500000, requires: "cluster", note: "12.3인치 클러스터 적용 시 선택 가능" },
          { id: "hightech", name: "하이테크", price: 950000 },
          { id: "harman", name: "하만카돈 프리미엄 사운드", price: 600000 },
          { id: "sunroof", name: "선루프", price: 500000 },
          { id: "bodycolor", name: "바디칼라 클래딩", price: 200000 }
        ],

        extreme: [
          { id: "4wd", name: "전자식 4WD", price: 2650000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 1500000, note: "공식 가격표: 12.3인치 클러스터 적용 시 선택 가능" },
          { id: "monitoring", name: "모니터링", price: 1200000 },
          { id: "hightech", name: "하이테크", price: 950000 },
          { id: "harman", name: "하만카돈 프리미엄 사운드", price: 600000 },
          { id: "sunroof", name: "선루프", price: 500000 }
        ],

        xpro: [
          { id: "drivewise", name: "드라이브 와이즈", price: 1500000 },
          { id: "hightech", name: "하이테크", price: 950000 },
          { id: "harman", name: "하만카돈 프리미엄 사운드", price: 600000 },
          { id: "sunroof", name: "선루프", price: 500000 }
        ]
      }
    }
  },

  /* =========================================================
     The all-new Seltos
     기아 공식 가격: 2026-08-01 기준
     ========================================================= */
  seltos: {
    brand: "KIA",
    name: "The all-new Seltos",
    displayName: "디 올 뉴 셀토스",
    year: "2026년 8월 가격 기준",
    type: "소형 SUV",
    image: "seltos.png",

    engineHelp:
      "1.6 가솔린 터보와 하이브리드를 선택할 수 있습니다. 파워트레인을 바꾸면 해당 공식 트림가격과 선택품목으로 자동 변경됩니다.",

    trimHelp:
      "하이브리드는 기아 공식 페이지의 세제혜택 후 판매가격을 기준으로 표시합니다.",

    tax: { rate: 0.07, vatIncluded: true },

    engines: [
      { id: "gas16", name: "1.6 가솔린 터보", price: 0, sub: "스마트스트림 G1.6 T-GDI · 8AT" },
      { id: "hybrid", name: "하이브리드", price: 0, sub: "스마트스트림 G1.6 하이브리드 · 6단 DCT" }
    ],

    drivesByEngine: {
      gas16: [
        { id: "2wd", name: "2WD", price: 0, sub: "전륜구동" },
        { id: "4wd", name: "전자식 4WD", price: 1980000, sub: "+1,980,000원", requiresOptionByTrim: { trendy: "style" }, note: "트렌디는 스타일 적용 시 선택 가능" }
      ],
      hybrid: [
        { id: "2wd", name: "2WD", price: 0, sub: "전륜구동" }
      ]
    },

    seats: [
      { id: "5", name: "5인승", price: 0, sub: "기본" }
    ],

    trimsByEngine: {
      gas16: [
        { id: "trendy", name: "트렌디", price: 25120000, sub: "1.6 가솔린 터보" },
        { id: "prestige", name: "프레스티지", price: 28800000, sub: "1.6 가솔린 터보" },
        { id: "signature", name: "시그니처", price: 31450000, sub: "1.6 가솔린 터보" },
        { id: "xline", name: "X-Line", price: 32630000, sub: "1.6 가솔린 터보" }
      ],
      hybrid: [
        { id: "trendy", name: "트렌디", price: 29400000, sub: "세제혜택 후" },
        { id: "prestige", name: "프레스티지", price: 32550000, sub: "세제혜택 후" },
        { id: "signature", name: "시그니처", price: 35200000, sub: "세제혜택 후" },
        { id: "xline", name: "X-Line", price: 36360000, sub: "세제혜택 후" }
      ]
    },

    colors: [
      { id:"snow_white", name:"스노우 화이트 펄", price:80000, color:"#F5F5F0" },
      { id:"iceberg_green", name:"아이스버그 그린", price:0, color:"#A8B6AE" },
      { id:"gravity_gray", name:"그래비티 그레이", price:0, color:"#5D6163" },
      { id:"ivory_silver", name:"아이보리 실버", price:0, color:"#C9C7BF" },
      { id:"frost_blue", name:"프로스트 블루", price:0, color:"#8FA6B5" },
      { id:"fusion_black", name:"퓨전 블랙", price:0, color:"#151718" },
      { id:"black_snow_white", name:"퓨전 블랙 + 스노우 화이트 펄", price:300000, color:"#F5F5F0" },
      { id:"black_iceberg_green", name:"퓨전 블랙 + 아이스버그 그린", price:300000, color:"#A8B6AE" },
      { id:"ivory_matte", name:"아이보리 매트 실버", price:300000, color:"#C6C2B8", allowedTrims:["xline"] },
      { id:"magma_matte_red", name:"마그마 매트 레드", price:300000, color:"#8A3E3B", allowedTrims:["xline"] }
    ],

    optionsByEngine: {
      gas16: {
        trendy: [
          { id: "style", name: "스타일", price: 1090000 },
          { id: "convenience", name: "컨비니언스", price: 640000 },
          { id: "nav", name: "12.3인치 내비게이션", price: 1090000 },
          { id: "builtincam", name: "빌트인 캠 2 플러스", price: 450000, requires: "nav", note: "12.3인치 내비게이션 적용 시" },
          { id: "cluster", name: "12.3인치 클러스터", price: 400000, requires: "nav", note: "12.3인치 내비게이션 적용 시" },
          { id: "smart", name: "스마트 커넥트", price: 690000, requires: "cluster", note: "12.3인치 클러스터 적용 시" },
          { id: "drivewise", name: "드라이브 와이즈", price: 1190000, requires: "cluster", note: "12.3인치 클러스터 적용 시" }
        ],
        prestige: [
          { id: "style", name: "스타일", price: 890000 },
          { id: "builtincam", name: "빌트인 캠 2 플러스", price: 450000 },
          { id: "cluster", name: "12.3인치 클러스터", price: 400000 },
          { id: "smart", name: "스마트 커넥트", price: 690000, requires: "cluster", note: "12.3인치 클러스터 적용 시" },
          { id: "drivewise", name: "드라이브 와이즈", price: 1190000, requires: "cluster", note: "12.3인치 클러스터 적용 시" },
          { id: "monitoring", name: "모니터링", price: 1040000, requires: "cluster", note: "12.3인치 클러스터 적용 시" },
          { id: "hud", name: "헤드업 디스플레이", price: 590000, requires: "cluster", note: "12.3인치 클러스터 적용 시" },
          { id: "comfort", name: "컴포트", price: 1040000 },
          { id: "sunroof", name: "파노라마 선루프", price: 1090000 }
        ],
        signature: [
          { id: "style", name: "스타일", price: 890000 },
          { id: "builtincam", name: "빌트인 캠 2 플러스", price: 450000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 790000 },
          { id: "monitoring", name: "모니터링", price: 1040000 },
          { id: "hud", name: "헤드업 디스플레이", price: 590000 },
          { id: "comfort", name: "컴포트", price: 450000 },
          { id: "harman", name: "하만카돈 프리미엄 사운드", price: 890000 },
          { id: "sunroof", name: "파노라마 선루프", price: 1090000 },
          { id: "twotone", name: "투톤루프", price: 300000 }
        ],
        xline: [
          { id: "builtincam", name: "빌트인 캠 2 플러스", price: 450000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 790000 },
          { id: "monitoring", name: "모니터링", price: 1040000 },
          { id: "hud", name: "헤드업 디스플레이", price: 590000 },
          { id: "comfort", name: "컴포트", price: 450000 },
          { id: "harman", name: "하만카돈 프리미엄 사운드", price: 890000 },
          { id: "sunroof", name: "파노라마 선루프", price: 1090000 },
          { id: "twotone", name: "투톤루프", price: 300000 }
        ]
      },

      hybrid: {
        trendy: [
          { id: "style", name: "스타일", price: 1090000 },
          { id: "convenience", name: "컨비니언스", price: 640000 },
          { id: "nav", name: "12.3인치 내비게이션", price: 540000 },
          { id: "builtincam", name: "빌트인 캠 2 플러스", price: 450000, requires: "nav", note: "12.3인치 내비게이션 적용 시" },
          { id: "cluster", name: "12.3인치 클러스터", price: 400000, requires: "nav", note: "12.3인치 내비게이션 적용 시" },
          { id: "smart", name: "스마트 커넥트", price: 690000, requires: "cluster", note: "12.3인치 클러스터 적용 시" },
          { id: "drivewise", name: "드라이브 와이즈", price: 1190000, requires: "cluster", note: "12.3인치 클러스터 적용 시" }
        ],
        prestige: [
          { id: "style", name: "스타일", price: 890000 },
          { id: "builtincam", name: "빌트인 캠 2 플러스", price: 450000 },
          { id: "cluster", name: "12.3인치 클러스터", price: 400000 },
          { id: "smart", name: "스마트 커넥트", price: 690000, requires: "cluster", note: "12.3인치 클러스터 적용 시" },
          { id: "drivewise", name: "드라이브 와이즈", price: 1190000, requires: "cluster", note: "12.3인치 클러스터 적용 시" },
          { id: "monitoring", name: "모니터링", price: 1040000, requires: "cluster", note: "12.3인치 클러스터 적용 시" },
          { id: "hud", name: "헤드업 디스플레이", price: 590000, requires: "cluster", note: "12.3인치 클러스터 적용 시" },
          { id: "comfort", name: "컴포트", price: 1040000 },
          { id: "v2l", name: "실내 V2L", price: 690000 },
          { id: "sunroof", name: "파노라마 선루프", price: 1090000 }
        ],
        signature: [
          { id: "style", name: "스타일", price: 890000 },
          { id: "builtincam", name: "빌트인 캠 2 플러스", price: 450000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 790000 },
          { id: "monitoring", name: "모니터링", price: 1040000 },
          { id: "hud", name: "헤드업 디스플레이", price: 590000 },
          { id: "comfort", name: "컴포트", price: 450000 },
          { id: "harman", name: "하만카돈 프리미엄 사운드", price: 890000 },
          { id: "v2l", name: "실내 V2L", price: 690000 },
          { id: "sunroof", name: "파노라마 선루프", price: 1090000 },
          { id: "twotone", name: "투톤루프", price: 300000 }
        ],
        xline: [
          { id: "builtincam", name: "빌트인 캠 2 플러스", price: 450000 },
          { id: "drivewise", name: "드라이브 와이즈", price: 790000 },
          { id: "monitoring", name: "모니터링", price: 1040000 },
          { id: "hud", name: "헤드업 디스플레이", price: 590000 },
          { id: "comfort", name: "컴포트", price: 450000 },
          { id: "harman", name: "하만카돈 프리미엄 사운드", price: 890000 },
          { id: "v2l", name: "실내 V2L", price: 690000 },
          { id: "sunroof", name: "파노라마 선루프", price: 1090000 },
          { id: "twotone", name: "투톤루프", price: 300000 }
        ]
      }
    }
  }

  ,

  /* =========================================================
     GENESIS G80
     공식 Genesis BTO / 모델 페이지 검증 기준: 2026-08
     ========================================================= */
  g80: {
    brand: "GENESIS",
    name: "G80",
    displayName: "제네시스 G80",
    year: "2026년 8월 공식 BTO 기준",
    type: "럭셔리 대형 세단",
    image: "g80.png",

    engineHelp:
      "가솔린 2.5 터보와 가솔린 3.5 터보를 선택할 수 있습니다.",

    trimHelp:
      "G80은 일반 트림제가 아닌 BTO 방식입니다. 기본 모델 가격에 엔진·구동·스포츠 패키지·휠·내장·선택품목을 조합합니다.",

    hiddenSections: ["seat", "trim"],

    tax: {
      rate: 0.07,
      vatIncluded: true
    },

    engines: [
      {
        id: "gas25",
        name: "가솔린 2.5 터보",
        price: 0,
        sub: "2,497cc · 304PS · 43.0kgf·m"
      },
      {
        id: "gas35",
        name: "가솔린 3.5 터보",
        price: 6600000,
        sub: "3,470cc · 380PS · 54.0kgf·m · +6,600,000원"
      }
    ],

    drives: [
      {
        id: "2wd",
        name: "2WD",
        price: 0,
        sub: "후륜구동"
      },
      {
        id: "awd",
        name: "AWD",
        price: 2800000,
        sub: "+2,800,000원"
      }
    ],

    seats: [
      {
        id: "5",
        name: "5인승",
        price: 0,
        sub: "기본"
      }
    ],

    trims: [
      {
        id: "base",
        name: "기본 모델",
        price: 60630000,
        sub: "가솔린 2.5 터보 · 2WD 기준"
      }
    ],

    colors: [
      { id: "uyuni_white", name: "우유니 화이트", price: 0, color: "#f4f3ee" },
      { id: "vatna_gray", name: "바트나 그레이", price: 0, color: "#74736f" },
      { id: "savile_silver", name: "세빌 실버", price: 0, color: "#a5a7a6" },
      { id: "makalu_gray", name: "마칼루 그레이", price: 0, color: "#4e5051" },
      { id: "vik_black", name: "비크 블랙", price: 0, color: "#111214" },
      { id: "tasman_blue", name: "태즈먼 블루", price: 0, color: "#394b5b" },
      { id: "ceres_blue", name: "세레스 블루", price: 0, color: "#233e58" }
    ],

    /*
      G80 BTO 전용 단일선택 그룹.
      기존 일반 차량에는 이 영역이 생성되지 않습니다.
    */
    extraChoiceGroups: [
      {
        id: "sport",
        step: "3",
        position: "beforeColor",
        title: "스포츠 패키지를 선택해주세요",
        help: "기본 모델 또는 스포츠 패키지를 선택합니다.",
        summaryLabel: "스포츠 패키지",
        items: [
          {
            id: "standard",
            name: "기본 모델",
            price: 0,
            sub: "기본 외장 · 기본 주행 구성"
          },
          {
            id: "sport",
            name: "스포츠 패키지",
            price: 4000000,
            sub: "+4,000,000원 · 스포츠 전용 외장/휠/주행사양"
          }
        ]
      },

      {
        id: "wheel",
        step: "5",
        position: "afterColor",
        title: "휠 & 타이어를 선택해주세요",
        help: "엔진과 스포츠 패키지 선택에 따라 가능한 휠이 자동으로 변경됩니다.",
        summaryLabel: "휠 & 타이어",
        items: [
          {
            id: "18",
            name: "18인치 다이아몬드 컷팅 휠",
            price: 0,
            sub: "피렐리 245/50R18",
            allowedEngines: ["gas25"],
            allowedExtra: { sport: ["standard"] }
          },
          {
            id: "19a",
            name: "19인치 하이퍼 실버 휠 (A)",
            price: 1200000,
            sub: "콘티넨탈 · +1,200,000원",
            allowedEngines: ["gas25"],
            allowedExtra: { sport: ["standard"] }
          },
          {
            id: "19b",
            name: "19인치 다이아몬드 컷팅 휠 (B)",
            price: 1200000,
            sub: "콘티넨탈 · +1,200,000원",
            allowedEngines: ["gas25"],
            allowedExtra: { sport: ["standard"] }
          },
          {
            id: "19c",
            name: "19인치 다이아몬드 컷팅 휠 (C)",
            price: 1200000,
            sub: "콘티넨탈 · +1,200,000원",
            allowedEngines: ["gas25"],
            allowedExtra: { sport: ["standard"] }
          },
          {
            id: "20",
            name: "20인치 스퍼터링 휠",
            price: 3000000,
            sub: "프리뷰 전자제어 서스펜션 포함 · +3,000,000원",
            allowedEngines: ["gas25"],
            allowedExtra: { sport: ["standard"] }
          },
          {
            id: "19_gas35",
            name: "19인치 휠 · 가솔린 3.5 터보 기본",
            price: 0,
            sub: "3.5 터보 기본 휠 구성",
            allowedEngines: ["gas35"],
            allowedExtra: { sport: ["standard"] }
          },
          {
            id: "20_sport25",
            name: "20인치 다크 스퍼터링 스포츠 전용 휠",
            price: 0,
            sub: "스포츠 패키지 포함 · 피렐리",
            allowedEngines: ["gas25"],
            allowedExtra: { sport: ["sport"] }
          },
          {
            id: "20_sport35",
            name: "20인치 스포츠 전용 휠",
            price: 0,
            sub: "스포츠 패키지 포함 · 미쉐린 스포츠 타이어",
            allowedEngines: ["gas35"],
            allowedExtra: { sport: ["sport"] }
          }
        ]
      },

      {
        id: "interior",
        step: "6",
        position: "afterColor",
        title: "내장 디자인 & 컬러를 선택해주세요",
        help: "공식 BTO에서 가격이 확인된 내장 디자인을 반영했습니다.",
        summaryLabel: "내장 디자인",
        items: [
          {
            id: "std_black",
            name: "스탠다드 디자인 · 옵시디언 블랙 모노톤",
            price: 0,
            sub: "천연가죽",
            allowedExtra: { sport: ["standard"] }
          },
          {
            id: "std_camel",
            name: "스탠다드 디자인 · 에크루 카멜 모노톤",
            price: 0,
            sub: "천연가죽",
            allowedExtra: { sport: ["standard"] }
          },

          {
            id: "sel1_black",
            name: "시그니쳐 디자인 셀렉션Ⅰ · 옵시디언 블랙",
            price: 1500000,
            sub: "+1,500,000원",
            allowedExtra: { sport: ["standard"] }
          },
          {
            id: "sel1_camel",
            name: "시그니쳐 디자인 셀렉션Ⅰ · 에크루 카멜",
            price: 1500000,
            sub: "+1,500,000원",
            allowedExtra: { sport: ["standard"] }
          },
          {
            id: "sel1_gray",
            name: "시그니쳐 디자인 셀렉션Ⅰ · 애쉬 그레이 / 바닐라 베이지",
            price: 1500000,
            sub: "+1,500,000원",
            allowedExtra: { sport: ["standard"] }
          },

          {
            id: "sel2_black",
            name: "시그니쳐 디자인 셀렉션Ⅱ · 옵시디언 블랙",
            price: 3000000,
            sub: "프라임 나파가죽 · +3,000,000원",
            allowedExtra: { sport: ["standard"] }
          },
          {
            id: "sel2_camel",
            name: "시그니쳐 디자인 셀렉션Ⅱ · 에크루 카멜",
            price: 3000000,
            sub: "프라임 나파가죽 · +3,000,000원",
            allowedExtra: { sport: ["standard"] }
          },
          {
            id: "sel2_maroon",
            name: "시그니쳐 디자인 셀렉션Ⅱ · 마룬 브라운 / 포레스트 블루",
            price: 3000000,
            sub: "프라임 나파가죽 · +3,000,000원",
            allowedExtra: { sport: ["standard"] }
          },
          {
            id: "sel2_forest",
            name: "시그니쳐 디자인 셀렉션Ⅱ · 포레스트 블루 / 에크루 카멜",
            price: 3000000,
            sub: "프라임 나파가죽 · +3,000,000원",
            allowedExtra: { sport: ["standard"] }
          },
          {
            id: "sel2_gray",
            name: "시그니쳐 디자인 셀렉션Ⅱ · 애쉬 그레이 / 바닐라 베이지",
            price: 3000000,
            sub: "프라임 나파가죽 · +3,000,000원",
            allowedExtra: { sport: ["standard"] }
          },

          {
            id: "sport_std_gray",
            name: "스포츠 스탠다드 · 옵시디언 블랙 (그레이 스티치)",
            price: 0,
            sub: "스포츠 패키지 기본 내장",
            allowedExtra: { sport: ["sport"] }
          },
          {
            id: "sport_std_red",
            name: "스포츠 스탠다드 · 옵시디언 블랙 (레드 스티치)",
            price: 0,
            sub: "스포츠 패키지 기본 내장",
            allowedExtra: { sport: ["sport"] }
          }
        ]
      }
    ],

    options: {
      base: [
        {
          id: "popular",
          name: "파퓰러 패키지",
          price: 4300000,
          note: "드라이빙 어시스턴스 패키지Ⅰ·Ⅱ + 빌트인 캠 패키지 포함",
          includes: ["drive1", "drive2", "builtincam"]
        },
        {
          id: "drive1",
          name: "드라이빙 어시스턴스 패키지Ⅰ",
          price: 1950000
        },
        {
          id: "drive2",
          name: "드라이빙 어시스턴스 패키지Ⅱ",
          price: 2000000
        },
        {
          id: "builtincam",
          name: "빌트인 캠 패키지",
          price: 850000,
          note: "빌트인 캠 2 + 증강현실 내비게이션"
        },
        {
          id: "preview",
          name: "프리뷰 전자제어 서스펜션",
          price: 1100000,
          note: "2.5 터보 기본 모델의 18/19인치 휠 선택 시",
          allowedEngines: ["gas25"],
          allowedExtra: {
            sport: ["standard"],
            wheel: ["18", "19a", "19b", "19c"]
          }
        },
        {
          id: "sunroof",
          name: "파노라마 선루프",
          price: 1400000
        },
        {
          id: "convenience",
          name: "컨비니언스 패키지",
          price: 1300000
        },
        {
          id: "rearcomfort",
          name: "2열 컴포트 패키지",
          price: 2700000
        },
        {
          id: "bno",
          name: "뱅앤올룹슨 사운드 패키지",
          price: 1900000,
          excludedWhen: [
            {
              engine: "gas35",
              extra: { sport: "sport" }
            }
          ],
          note: "3.5 터보 스포츠 패키지는 공식 구성에 포함되어 별도 선택하지 않습니다."
        },

        {
          id: "rear_display",
          name: "제네시스 액세서리 · 후석 스마트 엔터테인먼트 시스템",
          price: 3000000
        },
        {
          id: "ppf",
          name: "제네시스 액세서리 · 차량 보호 필름",
          price: 450000
        },
        {
          id: "wheel_cap",
          name: "제네시스 액세서리 · 플로팅 휠 캡",
          price: 90000
        }
      ]
    }
  }

  ,

  /* =========================================================
     HYUNDAI The new GRANDEUR / Hybrid
     현대자동차 공식 가격표 기준
     - 가솔린/Hybrid: 2026-07-01
     - LPG 공식 현대 가격자료: 2026-05-14
     ========================================================= */
  grandeur: {
    brand: "HYUNDAI",
    name: "The new GRANDEUR",
    displayName: "더 뉴 그랜저",
    year: "2026년 현대자동차 공식 가격표 기준",
    type: "준대형 세단",
    image: "grandeur.png",

    engineHelp:
      "가솔린 2.5, 가솔린 3.5, LPG 3.5, 하이브리드 1.6 터보를 한 화면에서 선택할 수 있습니다.",

    trimHelp:
      "파워트레인에 따라 공식 판매 트림과 가격이 자동으로 변경됩니다. 하이브리드는 세제혜택 후 판매가격을 기준으로 표시합니다.",

    tax: {
      rate: 0.07,
      vatIncluded: true
    },

    engines: [
      {
        id: "gas25",
        name: "가솔린 2.5",
        price: 0,
        sub: "스마트스트림 가솔린 2.5 · 198PS · 25.3kgf·m"
      },
      {
        id: "gas35",
        name: "가솔린 3.5",
        price: 0,
        sub: "스마트스트림 가솔린 3.5 · 300PS · 36.6kgf·m"
      },
      {
        id: "lpg35",
        name: "LPG 3.5",
        price: 0,
        sub: "스마트스트림 LPG 3.5 · 240PS · 32.0kgf·m"
      },
      {
        id: "hybrid",
        name: "하이브리드 1.6 터보",
        price: 0,
        sub: "스마트스트림 가솔린 1.6 터보 하이브리드 · 세제혜택 후 가격"
      }
    ],

    drivesByEngine: {
      gas25: [
        { id: "2wd", name: "2WD", price: 0, sub: "전륜구동" }
      ],

      gas35: [
        { id: "2wd", name: "2WD", price: 0, sub: "전륜구동" },
        {
          id: "htrac",
          name: "HTRAC",
          price: 2200000,
          sub: "+2,200,000원 · 가솔린 3.5 선택 시"
        }
      ],

      lpg35: [
        { id: "2wd", name: "2WD", price: 0, sub: "전륜구동" }
      ],

      hybrid: [
        { id: "2wd", name: "2WD", price: 0, sub: "전륜구동" }
      ]
    },

    seats: [
      {
        id: "5",
        name: "5인승",
        price: 0,
        sub: "기본"
      }
    ],

    trimsByEngine: {
      gas25: [
        {
          id: "premium",
          name: "프리미엄",
          price: 42450000,
          sub: "가솔린 2.5 기준"
        },
        {
          id: "exclusive",
          name: "익스클루시브",
          price: 46940000,
          sub: "가솔린 2.5 기준"
        },
        {
          id: "calligraphy",
          name: "캘리그래피",
          price: 53100000,
          sub: "가솔린 2.5 기준"
        },
        {
          id: "black_ink",
          name: "Black Ink",
          price: 54000000,
          sub: "가솔린 2.5 기준 · 블랙 전용 디자인"
        }
      ],

      gas35: [
        {
          id: "premium",
          name: "프리미엄",
          price: 44910000,
          sub: "가솔린 3.5 공식가격"
        },
        {
          id: "exclusive",
          name: "익스클루시브",
          price: 49410000,
          sub: "가솔린 3.5 공식가격"
        },
        {
          id: "calligraphy",
          name: "캘리그래피",
          price: 55570000,
          sub: "가솔린 3.5 공식가격"
        },
        {
          id: "black_ink",
          name: "Black Ink",
          price: 56470000,
          sub: "가솔린 3.5 공식가격 · 블랙 전용 디자인"
        }
      ],

      lpg35: [
        {
          id: "premium",
          name: "프리미엄",
          price: 43930000,
          sub: "LPG 3.5"
        },
        {
          id: "exclusive",
          name: "익스클루시브",
          price: 48420000,
          sub: "LPG 3.5"
        }
      ],

      hybrid: [
        {
          id: "premium",
          name: "프리미엄",
          price: 48330000,
          sub: "세제혜택 후"
        },
        {
          id: "exclusive",
          name: "익스클루시브",
          price: 52820000,
          sub: "세제혜택 후"
        },
        {
          id: "calligraphy",
          name: "캘리그래피",
          price: 58990000,
          sub: "세제혜택 후"
        },
        {
          id: "black_ink",
          name: "Black Ink",
          price: 59890000,
          sub: "세제혜택 후 · 블랙 전용 디자인"
        }
      ]
    },

    colors: [
      {
        id: "transmission_blue",
        name: "트랜스미션 블루 펄",
        price: 0,
        color: "#5d6975",
        allowedTrims: ["premium", "exclusive", "calligraphy"]
      },
      {
        id: "aero_silver",
        name: "에어로 실버 메탈릭",
        price: 0,
        color: "#a8aaab",
        allowedTrims: ["premium", "exclusive", "calligraphy"]
      },
      {
        id: "nocturne_gray",
        name: "녹턴 그레이 메탈릭",
        price: 0,
        color: "#55575a",
        allowedTrims: ["premium", "exclusive", "calligraphy"]
      },
      {
        id: "abyss_black",
        name: "어비스 블랙 펄",
        price: 0,
        color: "#111214",
        allowedTrims: ["premium", "exclusive", "calligraphy"]
      },
      {
        id: "biophilic_blue",
        name: "바이오필릭 블루 펄",
        price: 0,
        color: "#263b4b",
        allowedTrims: ["premium", "exclusive", "calligraphy"]
      },
      {
        id: "artisanal_burgundy",
        name: "어비스 버건디 펄",
        price: 0,
        color: "#58373a",
        allowedTrims: ["premium", "exclusive", "calligraphy"]
      },
      {
        id: "serenity_white",
        name: "세레니티 화이트 펄",
        price: 100000,
        color: "#f2f1ed",
        allowedTrims: ["premium", "exclusive", "calligraphy"]
      },
      {
        id: "nocturne_gray_matte",
        name: "녹턴 그레이 매트",
        price: 300000,
        color: "#666666",
        allowedTrims: ["premium", "exclusive", "calligraphy"]
      },
      {
        id: "transmission_blue_matte",
        name: "트랜스미션 블루 매트",
        price: 300000,
        color: "#64717a",
        allowedTrims: ["premium", "exclusive", "calligraphy"]
      },
      {
        id: "artisanal_burgundy_matte",
        name: "어비스 버건디 매트",
        price: 300000,
        color: "#604447",
        allowedTrims: ["premium", "exclusive", "calligraphy"]
      },

      {
        id: "abyss_black",
        name: "어비스 블랙 펄",
        price: 0,
        color: "#111214",
        allowedTrims: ["black_ink"]
      },
      {
        id: "serenity_white",
        name: "세레니티 화이트 펄",
        price: 100000,
        color: "#f2f1ed",
        allowedTrims: ["black_ink"]
      }
    ],

    optionsByEngine: {
      gas25: {
        premium: [
          { id: "sunroof", name: "파노라마 선루프", price: 1200000, excludes: ["blackroof"] },
          { id: "builtincam", name: "빌트인 캠 2 Plus", price: 650000 },
          { id: "smartsense1", name: "현대 스마트센스Ⅰ", price: 1400000 },
          { id: "parking", name: "파킹 어시스트", price: 1700000 },
          { id: "premium_choice", name: "프리미엄 초이스", price: 1200000 },

          { id: "essential", name: "H Genuine Accessories · Essential Acc. 패키지", price: 110000, requires: "premium_choice", note: "프리미엄 초이스 선택 시" },
          { id: "ledmetal", name: "H Genuine Accessories · LED 메탈 패키지", price: 540000 },
          { id: "airpurifier", name: "H Genuine Accessories · 빌트인 공기청정기 2.0", price: 590000 },
          { id: "blackroof", name: "H Genuine Accessories · 블랙 루프 스킨", price: 370000, excludes: ["sunroof"], note: "파노라마 선루프와 동시 선택 불가" },
          { id: "film1", name: "H Genuine Accessories · 차량 보호 필름 1", price: 410000 },
          { id: "film2", name: "H Genuine Accessories · 차량 보호 필름 2", price: 400000 }
        ],

        exclusive: [
          { id: "sunroof", name: "파노라마 선루프", price: 1200000, excludes: ["blackroof"] },
          { id: "builtincam", name: "빌트인 캠 2 Plus", price: 650000 },
          { id: "platinum", name: "플래티넘", price: 2050000 },
          { id: "smartsense2", name: "현대 스마트센스Ⅱ", price: 1400000 },
          { id: "seatcomfort1", name: "시트 컴포트Ⅰ", price: 1200000 },
          { id: "bose", name: "BOSE 프리미엄 사운드 패키지", price: 1200000 },
          { id: "wheel20", name: "20인치 알로이 휠 & 타이어", price: 250000, requires: "platinum", note: "플래티넘 선택 시" },

          { id: "essential", name: "H Genuine Accessories · Essential Acc. 패키지", price: 110000 },
          { id: "sputter20", name: "H Genuine Accessories · 20인치 고휘도 스퍼터링 휠", price: 950000, requires: "wheel20", note: "20인치 알로이 휠 & 타이어 선택 시" },
          { id: "ledmetal", name: "H Genuine Accessories · LED 메탈 패키지", price: 540000 },
          { id: "airpurifier", name: "H Genuine Accessories · 빌트인 공기청정기 2.0", price: 590000 },
          { id: "blackroof", name: "H Genuine Accessories · 블랙 루프 스킨", price: 370000, excludes: ["sunroof"], note: "파노라마 선루프와 동시 선택 불가" },
          { id: "film1", name: "H Genuine Accessories · 차량 보호 필름 1", price: 410000 },
          { id: "film2", name: "H Genuine Accessories · 차량 보호 필름 2", price: 400000 }
        ],

        calligraphy: [
          { id: "sunroof", name: "파노라마 선루프", price: 1200000, excludes: ["smartvision", "blackroof"] },
          { id: "builtincam", name: "빌트인 캠 2 Plus", price: 650000 },
          { id: "wheel20_calli", name: "20인치 알로이 휠 & 타이어(캘리그래피)", price: 450000 },
          { id: "seatcomfortplus", name: "시트 컴포트 플러스", price: 1500000 },
          { id: "smartvision", name: "스마트 비전 루프", price: 1800000, excludes: ["sunroof", "blackroof"], note: "파노라마 선루프와 중복 선택 불가" },

          { id: "smartcard", name: "H Genuine Accessories · 스마트 카드키", price: 150000 },
          { id: "essential", name: "H Genuine Accessories · Essential Acc. 패키지", price: 110000 },
          { id: "sputter20", name: "H Genuine Accessories · 20인치 고휘도 스퍼터링 휠", price: 950000, requires: "wheel20_calli", note: "20인치 알로이 휠 & 타이어 선택 시" },
          { id: "ledmetal", name: "H Genuine Accessories · LED 메탈 패키지", price: 540000 },
          { id: "airpurifier", name: "H Genuine Accessories · 빌트인 공기청정기 2.0", price: 590000 },
          { id: "blackroof", name: "H Genuine Accessories · 블랙 루프 스킨", price: 370000, excludes: ["sunroof", "smartvision"], note: "파노라마 선루프·스마트 비전 루프와 동시 선택 불가" },
          { id: "film1", name: "H Genuine Accessories · 차량 보호 필름 1", price: 410000 },
          { id: "film2", name: "H Genuine Accessories · 차량 보호 필름 2", price: 400000 }
        ],

        black_ink: [
          { id: "sunroof", name: "파노라마 선루프", price: 1200000, excludes: ["smartvision", "blackroof"] },
          { id: "builtincam", name: "빌트인 캠 2 Plus", price: 650000 },
          { id: "seatcomfortplus", name: "시트 컴포트 플러스", price: 1500000 },
          { id: "smartvision", name: "스마트 비전 루프", price: 1800000, excludes: ["sunroof", "blackroof"], note: "파노라마 선루프와 중복 선택 불가" },

          { id: "smartcard", name: "H Genuine Accessories · 스마트 카드키", price: 150000 },
          { id: "essential", name: "H Genuine Accessories · Essential Acc. 패키지", price: 110000 },
          { id: "ledmetal", name: "H Genuine Accessories · LED 메탈 패키지", price: 540000 },
          { id: "airpurifier", name: "H Genuine Accessories · 빌트인 공기청정기 2.0", price: 590000 },
          { id: "blackroof", name: "H Genuine Accessories · 블랙 루프 스킨", price: 370000, excludes: ["sunroof", "smartvision"], note: "파노라마 선루프·스마트 비전 루프와 동시 선택 불가" },
          { id: "film1", name: "H Genuine Accessories · 차량 보호 필름 1", price: 410000 },
          { id: "film2", name: "H Genuine Accessories · 차량 보호 필름 2", price: 400000 }
        ]
      },

      gas35: {
        premium: [
          { id: "sunroof", name: "파노라마 선루프", price: 1200000, excludes: ["blackroof"] },
          { id: "builtincam", name: "빌트인 캠 2 Plus", price: 650000 },
          { id: "smartsense1", name: "현대 스마트센스Ⅰ", price: 1400000 },
          { id: "parking", name: "파킹 어시스트", price: 1700000 },
          { id: "premium_choice", name: "프리미엄 초이스", price: 1200000 },
          { id: "essential", name: "H Genuine Accessories · Essential Acc. 패키지", price: 110000, requires: "premium_choice", note: "프리미엄 초이스 선택 시" },
          { id: "ledmetal", name: "H Genuine Accessories · LED 메탈 패키지", price: 540000 },
          { id: "airpurifier", name: "H Genuine Accessories · 빌트인 공기청정기 2.0", price: 590000 },
          { id: "blackroof", name: "H Genuine Accessories · 블랙 루프 스킨", price: 370000, excludes: ["sunroof"] },
          { id: "film1", name: "H Genuine Accessories · 차량 보호 필름 1", price: 410000 },
          { id: "film2", name: "H Genuine Accessories · 차량 보호 필름 2", price: 400000 }
        ],

        exclusive: [
          { id: "sunroof", name: "파노라마 선루프", price: 1200000, excludes: ["blackroof"] },
          { id: "builtincam", name: "빌트인 캠 2 Plus", price: 650000 },
          { id: "platinum", name: "플래티넘", price: 2050000 },
          { id: "smartsense2", name: "현대 스마트센스Ⅱ", price: 1400000 },
          { id: "seatcomfort1", name: "시트 컴포트Ⅰ", price: 1200000 },
          { id: "bose", name: "BOSE 프리미엄 사운드 패키지", price: 1200000 },
          { id: "wheel20", name: "20인치 알로이 휠 & 타이어", price: 250000, requires: "platinum", note: "플래티넘 선택 시" },
          { id: "essential", name: "H Genuine Accessories · Essential Acc. 패키지", price: 110000 },
          { id: "sputter20", name: "H Genuine Accessories · 20인치 고휘도 스퍼터링 휠", price: 950000, requires: "wheel20", note: "20인치 알로이 휠 & 타이어 선택 시" },
          { id: "ledmetal", name: "H Genuine Accessories · LED 메탈 패키지", price: 540000 },
          { id: "airpurifier", name: "H Genuine Accessories · 빌트인 공기청정기 2.0", price: 590000 },
          { id: "blackroof", name: "H Genuine Accessories · 블랙 루프 스킨", price: 370000, excludes: ["sunroof"] },
          { id: "film1", name: "H Genuine Accessories · 차량 보호 필름 1", price: 410000 },
          { id: "film2", name: "H Genuine Accessories · 차량 보호 필름 2", price: 400000 }
        ],

        calligraphy: [
          { id: "sunroof", name: "파노라마 선루프", price: 1200000, excludes: ["smartvision", "blackroof"] },
          { id: "builtincam", name: "빌트인 캠 2 Plus", price: 650000 },
          { id: "wheel20_calli", name: "20인치 알로이 휠 & 타이어(캘리그래피)", price: 450000 },
          { id: "seatcomfortplus", name: "시트 컴포트 플러스", price: 1500000 },
          { id: "smartvision", name: "스마트 비전 루프", price: 1800000, excludes: ["sunroof", "blackroof"] },
          { id: "smartcard", name: "H Genuine Accessories · 스마트 카드키", price: 150000 },
          { id: "essential", name: "H Genuine Accessories · Essential Acc. 패키지", price: 110000 },
          { id: "sputter20", name: "H Genuine Accessories · 20인치 고휘도 스퍼터링 휠", price: 950000, requires: "wheel20_calli", note: "20인치 알로이 휠 & 타이어 선택 시" },
          { id: "ledmetal", name: "H Genuine Accessories · LED 메탈 패키지", price: 540000 },
          { id: "airpurifier", name: "H Genuine Accessories · 빌트인 공기청정기 2.0", price: 590000 },
          { id: "blackroof", name: "H Genuine Accessories · 블랙 루프 스킨", price: 370000, excludes: ["sunroof", "smartvision"] },
          { id: "film1", name: "H Genuine Accessories · 차량 보호 필름 1", price: 410000 },
          { id: "film2", name: "H Genuine Accessories · 차량 보호 필름 2", price: 400000 }
        ],

        black_ink: [
          { id: "sunroof", name: "파노라마 선루프", price: 1200000, excludes: ["smartvision", "blackroof"] },
          { id: "builtincam", name: "빌트인 캠 2 Plus", price: 650000 },
          { id: "seatcomfortplus", name: "시트 컴포트 플러스", price: 1500000 },
          { id: "smartvision", name: "스마트 비전 루프", price: 1800000, excludes: ["sunroof", "blackroof"] },
          { id: "smartcard", name: "H Genuine Accessories · 스마트 카드키", price: 150000 },
          { id: "essential", name: "H Genuine Accessories · Essential Acc. 패키지", price: 110000 },
          { id: "ledmetal", name: "H Genuine Accessories · LED 메탈 패키지", price: 540000 },
          { id: "airpurifier", name: "H Genuine Accessories · 빌트인 공기청정기 2.0", price: 590000 },
          { id: "blackroof", name: "H Genuine Accessories · 블랙 루프 스킨", price: 370000, excludes: ["sunroof", "smartvision"] },
          { id: "film1", name: "H Genuine Accessories · 차량 보호 필름 1", price: 410000 },
          { id: "film2", name: "H Genuine Accessories · 차량 보호 필름 2", price: 400000 }
        ]
      },

      lpg35: {
        premium: [
          { id: "sunroof", name: "파노라마 선루프", price: 1200000, excludes: ["blackroof"] },
          { id: "builtincam", name: "빌트인 캠 2 Plus", price: 650000 },
          { id: "smartsense1", name: "현대 스마트센스Ⅰ", price: 1400000 },
          { id: "parking", name: "파킹 어시스트", price: 1700000 },
          { id: "premium_choice", name: "프리미엄 초이스", price: 1200000 },
          { id: "essential", name: "H Genuine Accessories · Essential Acc. 패키지", price: 110000, requires: "premium_choice" },
          { id: "ledmetal", name: "H Genuine Accessories · LED 메탈 패키지", price: 540000 },
          { id: "airpurifier", name: "H Genuine Accessories · 빌트인 공기청정기 2.0", price: 590000 },
          { id: "blackroof", name: "H Genuine Accessories · 블랙 루프 스킨", price: 370000, excludes: ["sunroof"] },
          { id: "film1", name: "H Genuine Accessories · 차량 보호 필름 1", price: 410000 },
          { id: "film2", name: "H Genuine Accessories · 차량 보호 필름 2", price: 400000 }
        ],

        exclusive: [
          { id: "sunroof", name: "파노라마 선루프", price: 1200000, excludes: ["blackroof"] },
          { id: "builtincam", name: "빌트인 캠 2 Plus", price: 650000 },
          { id: "platinum_lpg", name: "플래티넘(LPG 3.5)", price: 1650000 },
          { id: "smartsense2", name: "현대 스마트센스Ⅱ", price: 1400000 },
          { id: "bose", name: "BOSE 프리미엄 사운드 패키지", price: 1200000 },
          { id: "essential", name: "H Genuine Accessories · Essential Acc. 패키지", price: 110000 },
          { id: "ledmetal", name: "H Genuine Accessories · LED 메탈 패키지", price: 540000 },
          { id: "airpurifier", name: "H Genuine Accessories · 빌트인 공기청정기 2.0", price: 590000 },
          { id: "blackroof", name: "H Genuine Accessories · 블랙 루프 스킨", price: 370000, excludes: ["sunroof"] },
          { id: "film1", name: "H Genuine Accessories · 차량 보호 필름 1", price: 410000 },
          { id: "film2", name: "H Genuine Accessories · 차량 보호 필름 2", price: 400000 }
        ]
      },

      hybrid: {
        premium: [
          { id: "sunroof", name: "파노라마 선루프", price: 1200000, excludes: ["blackroof"] },
          { id: "builtincam", name: "빌트인 캠 2 Plus", price: 650000 },
          { id: "smartsense1", name: "현대 스마트센스Ⅰ", price: 1400000 },
          { id: "parking", name: "파킹 어시스트", price: 1700000 },
          { id: "premium_choice", name: "프리미엄 초이스", price: 1200000 },
          { id: "essential", name: "H Genuine Accessories · Essential Acc. 패키지", price: 110000, requires: "premium_choice" },
          { id: "ledmetal", name: "H Genuine Accessories · LED 메탈 패키지", price: 540000 },
          { id: "airpurifier", name: "H Genuine Accessories · 빌트인 공기청정기 2.0", price: 590000 },
          { id: "blackroof", name: "H Genuine Accessories · 블랙 루프 스킨", price: 370000, excludes: ["sunroof"] },
          { id: "film1", name: "H Genuine Accessories · 차량 보호 필름 1", price: 410000 },
          { id: "film2", name: "H Genuine Accessories · 차량 보호 필름 2", price: 400000 }
        ],

        exclusive: [
          { id: "sunroof", name: "파노라마 선루프", price: 1200000, excludes: ["blackroof"] },
          { id: "builtincam", name: "빌트인 캠 2 Plus", price: 650000, excludes: ["seatcomfort2"] },
          { id: "platinum", name: "플래티넘", price: 2050000 },
          { id: "smartsense2", name: "현대 스마트센스Ⅱ", price: 1400000 },
          { id: "seatcomfort2", name: "시트 컴포트Ⅱ", price: 1850000, excludes: ["builtincam"], note: "빌트인 캠 2 Plus와 동시 선택 불가" },
          { id: "bose", name: "BOSE 프리미엄 사운드 패키지", price: 1200000 },
          { id: "wheel20", name: "20인치 알로이 휠 & 타이어", price: 250000, requires: "platinum", note: "플래티넘 선택 시" },

          { id: "essential", name: "H Genuine Accessories · Essential Acc. 패키지", price: 110000 },
          { id: "sputter20", name: "H Genuine Accessories · 20인치 고휘도 스퍼터링 휠", price: 950000, requires: "wheel20", note: "20인치 알로이 휠 & 타이어 선택 시" },
          { id: "ledmetal", name: "H Genuine Accessories · LED 메탈 패키지", price: 540000 },
          { id: "airpurifier", name: "H Genuine Accessories · 빌트인 공기청정기 2.0", price: 590000 },
          { id: "blackroof", name: "H Genuine Accessories · 블랙 루프 스킨", price: 370000, excludes: ["sunroof"] },
          { id: "film1", name: "H Genuine Accessories · 차량 보호 필름 1", price: 410000 },
          { id: "film2", name: "H Genuine Accessories · 차량 보호 필름 2", price: 400000 }
        ],

        calligraphy: [
          { id: "sunroof", name: "파노라마 선루프", price: 1200000, excludes: ["smartvision", "blackroof"] },
          { id: "builtincam", name: "빌트인 캠 2 Plus", price: 650000 },
          { id: "wheel20_calli", name: "20인치 알로이 휠 & 타이어(캘리그래피)", price: 450000 },
          { id: "seatcomfortplus", name: "시트 컴포트 플러스", price: 1500000 },
          { id: "smartvision", name: "스마트 비전 루프", price: 1800000, excludes: ["sunroof", "blackroof"] },

          { id: "smartcard", name: "H Genuine Accessories · 스마트 카드키", price: 150000 },
          { id: "essential", name: "H Genuine Accessories · Essential Acc. 패키지", price: 110000 },
          { id: "sputter20", name: "H Genuine Accessories · 20인치 고휘도 스퍼터링 휠", price: 950000, requires: "wheel20_calli", note: "20인치 알로이 휠 & 타이어 선택 시" },
          { id: "ledmetal", name: "H Genuine Accessories · LED 메탈 패키지", price: 540000 },
          { id: "airpurifier", name: "H Genuine Accessories · 빌트인 공기청정기 2.0", price: 590000 },
          { id: "blackroof", name: "H Genuine Accessories · 블랙 루프 스킨", price: 370000, excludes: ["sunroof", "smartvision"] },
          { id: "film1", name: "H Genuine Accessories · 차량 보호 필름 1", price: 410000 },
          { id: "film2", name: "H Genuine Accessories · 차량 보호 필름 2", price: 400000 }
        ],

        black_ink: [
          { id: "sunroof", name: "파노라마 선루프", price: 1200000, excludes: ["smartvision", "blackroof"] },
          { id: "builtincam", name: "빌트인 캠 2 Plus", price: 650000 },
          { id: "seatcomfortplus", name: "시트 컴포트 플러스", price: 1500000 },
          { id: "smartvision", name: "스마트 비전 루프", price: 1800000, excludes: ["sunroof", "blackroof"] },

          { id: "smartcard", name: "H Genuine Accessories · 스마트 카드키", price: 150000 },
          { id: "essential", name: "H Genuine Accessories · Essential Acc. 패키지", price: 110000 },
          { id: "ledmetal", name: "H Genuine Accessories · LED 메탈 패키지", price: 540000 },
          { id: "airpurifier", name: "H Genuine Accessories · 빌트인 공기청정기 2.0", price: 590000 },
          { id: "blackroof", name: "H Genuine Accessories · 블랙 루프 스킨", price: 370000, excludes: ["sunroof", "smartvision"] },
          { id: "film1", name: "H Genuine Accessories · 차량 보호 필름 1", price: 410000 },
          { id: "film2", name: "H Genuine Accessories · 차량 보호 필름 2", price: 400000 }
        ]
      }
    }
  }

  ,

  /* =========================================================
     HYUNDAI SONATA The Edge / Hybrid
     현대자동차 공식 가격표 및 내 차 만들기 기준: 2026-08
     ========================================================= */
  sonata: {
    brand: "HYUNDAI",
    name: "SONATA The Edge",
    displayName: "쏘나타 디 엣지",
    year: "2026년 8월 현대자동차 공식 가격표 기준",
    type: "중형 세단",
    image: "sonata.png",

    engineHelp:
      "가솔린 2.0, 가솔린 1.6 터보, LPi 2.0, N Line 1.6 터보/2.5 터보, 하이브리드 2.0을 선택할 수 있습니다.",

    trimHelp:
      "엔진에 따라 판매 트림과 가격이 자동으로 변경됩니다. Hybrid는 세제혜택 후 판매가격을 기준으로 표시합니다.",

    tax: { rate: 0.07, vatIncluded: true },

    engines: [
      { id: "gas20", name: "가솔린 2.0", price: 0, sub: "스마트스트림 가솔린 2.0" },
      { id: "gas16t", name: "가솔린 1.6 터보", price: 0, sub: "스마트스트림 가솔린 1.6 T-GDi" },
      { id: "lpi20", name: "LPi 2.0", price: 0, sub: "자가용 LPi 2.0" },
      { id: "nline16t", name: "N Line 1.6 터보", price: 0, sub: "N Line 전용 디자인 · 8단 자동변속기" },
      { id: "nline25t", name: "N Line 2.5 터보", price: 0, sub: "N Line · 2.5 터보 퍼포먼스" },
      { id: "hybrid20", name: "Hybrid 2.0", price: 0, sub: "스마트스트림 가솔린 2.0 하이브리드 · 세제혜택 후" }
    ],

    drives: [
      { id: "2wd", name: "2WD", price: 0, sub: "전륜구동" }
    ],

    seats: [
      { id: "5", name: "5인승", price: 0, sub: "기본" }
    ],

    trimsByEngine: {
      gas20: [
        { id: "premium", name: "Premium", price: 28660000, sub: "2026년 8월 공식 시작가격" },
        { id: "s", name: "S", price: 29960000, sub: "공식 2026 가격체계" },
        { id: "exclusive", name: "Exclusive", price: 33000000, sub: "공식 2026 가격체계" },
        { id: "inspiration", name: "Inspiration", price: 35890000, sub: "공식 2026 가격체계" }
      ],

      gas16t: [
        { id: "premium", name: "Premium", price: 29330000 },
        { id: "s", name: "S", price: 30650000 },
        { id: "exclusive", name: "Exclusive", price: 33730000 },
        { id: "inspiration", name: "Inspiration", price: 36660000 }
      ],

      lpi20: [
        { id: "premium", name: "Premium", price: 29750000 },
        { id: "s", name: "S", price: 31070000 },
        { id: "exclusive", name: "Exclusive", price: 34150000 },
        { id: "inspiration", name: "Inspiration", price: 37080000 }
      ],

      nline16t: [
        { id: "nline", name: "N Line", price: 37770000, sub: "가솔린 1.6 터보 N Line" }
      ],

      nline25t: [
        { id: "nline", name: "N Line", price: 39770000, sub: "2.5 터보 퍼포먼스 반영" }
      ],

      hybrid20: [
        { id: "premium", name: "Premium", price: 33180000, sub: "세제혜택 후" },
        { id: "s", name: "S", price: 34200000, sub: "세제혜택 후" },
        { id: "exclusive", name: "Exclusive", price: 37270000, sub: "세제혜택 후" },
        { id: "inspiration", name: "Inspiration", price: 40370000, sub: "세제혜택 후" }
      ]
    },

    colors: [
      { id: "serenity_white", name: "세레니티 화이트 펄", price: 0, color: "#f1f0ec" },
      { id: "nocturne_gray", name: "녹턴 그레이 메탈릭", price: 0, color: "#55575a" },
      { id: "abyss_black", name: "어비스 블랙 펄", price: 0, color: "#111214" },
      { id: "aero_silver", name: "에어로 실버 메탈릭", price: 0, color: "#a8aaab" },
      { id: "transmission_blue", name: "트랜스미션 블루 펄", price: 0, color: "#596978" },
      { id: "ultimate_red", name: "얼티메이트 레드 메탈릭", price: 0, color: "#7f2527" }
    ],

    optionsByEngine: {
      gas20: {
        premium: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000, requires:"navi2", note:"내비게이션 선택 시" },
          { id:"navi2", name:"인포테인먼트 내비 Ⅱ", price:1060000 },
          { id:"parking1", name:"파킹 어시스트 I", price:1680000, requires:"navi2", note:"인포테인먼트 내비 Ⅱ 선택 시" },
          { id:"smartsense1", name:"현대 스마트센스Ⅰ", price:450000 },
          { id:"comfort1", name:"컴포트Ⅰ (1열 편의)", price:640000 },
          { id:"comfort2", name:"컴포트Ⅱ (2열 편의)", price:670000 },
          { id:"exterior3", name:"익스테리어 디자인 Ⅲ", price:400000 },
          { id:"hipass", name:"하이패스", price:200000 },
          { id:"ledplus", name:"H Genuine Accessories · LED 라이팅 플러스 패키지", price:250000 }
        ],
        s: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"parking1", name:"파킹 어시스트 I", price:1680000 },
          { id:"exterior1", name:"익스테리어 디자인 I", price:640000 },
          { id:"ledplus", name:"H Genuine Accessories · LED 라이팅 플러스 패키지", price:250000 }
        ],
        exclusive: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"platinum1", name:"플래티넘Ⅰ", price:1300000 },
          { id:"comfort2", name:"컴포트Ⅱ (2열 편의)", price:670000 },
          { id:"exterior1", name:"익스테리어 디자인 I", price:640000 },
          { id:"sunroof", name:"파노라마 선루프", price:1190000 },
          { id:"ledplus", name:"H Genuine Accessories · LED 라이팅 플러스 패키지", price:250000 }
        ],
        inspiration: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"파노라마 선루프", price:1190000 },
          { id:"bose", name:"BOSE 프리미엄 사운드 (12스피커, 외장앰프)", price:640000 },
          { id:"ledplus", name:"H Genuine Accessories · LED 라이팅 플러스 패키지", price:250000 }
        ]
      },

      gas16t: {
        premium: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000, requires:"navi2" },
          { id:"navi2", name:"인포테인먼트 내비 Ⅱ", price:1060000 },
          { id:"parking1", name:"파킹 어시스트 I", price:1680000, requires:"navi2" },
          { id:"smartsense1", name:"현대 스마트센스Ⅰ", price:450000 },
          { id:"comfort1", name:"컴포트Ⅰ (1열 편의)", price:640000 },
          { id:"comfort2", name:"컴포트Ⅱ (2열 편의)", price:670000 },
          { id:"exterior3", name:"익스테리어 디자인 Ⅲ", price:400000 },
          { id:"hipass", name:"하이패스", price:200000 },
          { id:"ledplus", name:"H Genuine Accessories · LED 라이팅 플러스 패키지", price:250000 }
        ],
        s: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"parking1", name:"파킹 어시스트 I", price:1680000 },
          { id:"exterior1", name:"익스테리어 디자인 I", price:640000 },
          { id:"ledplus", name:"H Genuine Accessories · LED 라이팅 플러스 패키지", price:250000 }
        ],
        exclusive: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"platinum1", name:"플래티넘Ⅰ", price:1300000 },
          { id:"comfort2", name:"컴포트Ⅱ (2열 편의)", price:670000 },
          { id:"exterior1", name:"익스테리어 디자인 I", price:640000 },
          { id:"sunroof", name:"파노라마 선루프", price:1190000 },
          { id:"ledplus", name:"H Genuine Accessories · LED 라이팅 플러스 패키지", price:250000 }
        ],
        inspiration: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"파노라마 선루프", price:1190000 },
          { id:"bose", name:"BOSE 프리미엄 사운드 (12스피커, 외장앰프)", price:640000 },
          { id:"ledplus", name:"H Genuine Accessories · LED 라이팅 플러스 패키지", price:250000 }
        ]
      },

      lpi20: {
        premium: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000, requires:"navi2" },
          { id:"navi2", name:"인포테인먼트 내비 Ⅱ", price:1060000 },
          { id:"parking1", name:"파킹 어시스트 I", price:1680000, requires:"navi2" },
          { id:"smartsense1", name:"현대 스마트센스Ⅰ", price:450000 },
          { id:"comfort1", name:"컴포트Ⅰ (1열 편의)", price:640000 },
          { id:"comfort2", name:"컴포트Ⅱ (2열 편의)", price:670000 },
          { id:"exterior3", name:"익스테리어 디자인 Ⅲ", price:400000 },
          { id:"hipass", name:"하이패스", price:200000 },
          { id:"ledplus", name:"H Genuine Accessories · LED 라이팅 플러스 패키지", price:250000 }
        ],
        s: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"parking1", name:"파킹 어시스트 I", price:1680000 },
          { id:"exterior1", name:"익스테리어 디자인 I", price:640000 },
          { id:"ledplus", name:"H Genuine Accessories · LED 라이팅 플러스 패키지", price:250000 }
        ],
        exclusive: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"platinum1", name:"플래티넘Ⅰ", price:1300000 },
          { id:"comfort2", name:"컴포트Ⅱ (2열 편의)", price:670000 },
          { id:"exterior1", name:"익스테리어 디자인 I", price:640000 },
          { id:"sunroof", name:"파노라마 선루프", price:1190000 },
          { id:"ledplus", name:"H Genuine Accessories · LED 라이팅 플러스 패키지", price:250000 }
        ],
        inspiration: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"파노라마 선루프", price:1190000 },
          { id:"bose", name:"BOSE 프리미엄 사운드 (12스피커, 외장앰프)", price:640000 },
          { id:"ledplus", name:"H Genuine Accessories · LED 라이팅 플러스 패키지", price:250000 }
        ]
      },

      nline16t: {
        nline: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"파노라마 선루프", price:1190000 },
          { id:"parking1", name:"파킹 어시스트 I", price:1680000 },
          { id:"comfort4", name:"컴포트Ⅳ (2열 편의)", price:640000 },
          { id:"ledplus", name:"H Genuine Accessories · LED 라이팅 플러스 패키지", price:250000 }
        ]
      },

      nline25t: {
        nline: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"파노라마 선루프", price:1190000 },
          { id:"parking2", name:"파킹 어시스트 II", price:1380000, note:"2.5 터보 선택 시 원격 스마트 주차 보조 미적용" },
          { id:"comfort4", name:"컴포트Ⅳ (2열 편의)", price:640000 },
          { id:"ledplus", name:"H Genuine Accessories · LED 라이팅 플러스 패키지", price:250000 }
        ]
      },

      hybrid20: {
        premium: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000, requires:"navi2", note:"내비게이션 선택 시" },
          { id:"navi2", name:"인포테인먼트 내비 Ⅱ", price:1060000 },
          { id:"parking1", name:"파킹 어시스트 I", price:1680000, requires:"navi2" },
          { id:"smartsense1", name:"현대 스마트센스Ⅰ", price:450000 },
          { id:"comfort1", name:"컴포트Ⅰ (1열 편의)", price:640000 },
          { id:"comfort2", name:"컴포트Ⅱ (2열 편의)", price:670000 },
          { id:"exterior3", name:"익스테리어 디자인 Ⅲ", price:400000 },
          { id:"hipass", name:"하이패스", price:200000 },
          { id:"ledplus", name:"H Genuine Accessories · LED 라이팅 플러스 패키지", price:250000 }
        ],
        s: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"parking1", name:"파킹 어시스트 I", price:1680000 },
          { id:"exterior3", name:"익스테리어 디자인 Ⅲ", price:400000 },
          { id:"ledplus", name:"H Genuine Accessories · LED 라이팅 플러스 패키지", price:250000 }
        ],
        exclusive: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"platinum1", name:"플래티넘Ⅰ", price:1300000 },
          { id:"comfort2", name:"컴포트Ⅱ (2열 편의)", price:670000 },
          { id:"exterior1", name:"익스테리어 디자인Ⅰ", price:640000 },
          { id:"sunroof", name:"파노라마 선루프", price:1190000 },
          { id:"ledplus", name:"H Genuine Accessories · LED 라이팅 플러스 패키지", price:250000 }
        ],
        inspiration: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"파노라마 선루프", price:1190000 },
          { id:"bose", name:"BOSE 프리미엄 사운드 (12스피커, 외장앰프)", price:640000 },
          { id:"ledplus", name:"H Genuine Accessories · LED 라이팅 플러스 패키지", price:250000 }
        ]
      }
    }
  }

  ,

  palisade: {
    brand: "HYUNDAI",
    name: "The all-new PALISADE",
    displayName: "디 올 뉴 팰리세이드",
    year: "현대자동차 공식 가격표 기준",
    type: "대형 SUV",
    image: "palisade.png",

    engineHelp:
      "가솔린 2.5 터보와 하이브리드 2.5 터보를 선택할 수 있습니다.",
    trimHelp:
      "7인승/9인승에 따라 차량가격과 일부 선택품목 가격이 다르게 적용됩니다.",

    tax: { rate: 0.07, vatIncluded: true },

    engines: [
      { id:"gas25", name:"가솔린 2.5 터보", price:0, sub:"281PS · 43.0kgf·m · 8단 자동변속기" },
      { id:"hev25", name:"하이브리드 2.5 터보", price:0, sub:"54.0kW 모터 · 6단 자동변속기 · 세제혜택 반영" }
    ],

    seats: [
      { id:"7", name:"7인승", price:0, sub:"2열 독립시트" },
      { id:"9", name:"9인승", price:0, sub:"1열 센터시트 · 2열 6:4 분할시트" }
    ],

    drivesByEngineAndSeat: {
      gas25: {
        "7": [
          { id:"2wd", name:"2WD", price:0, sub:"전륜구동" },
          { id:"htrac", name:"HTRAC", price:2400000, sub:"+2,400,000원" }
        ],
        "9": [
          { id:"2wd", name:"2WD", price:0, sub:"전륜구동" },
          { id:"htrac", name:"HTRAC", price:2280000, sub:"+2,280,000원" }
        ]
      },
      hev25: {
        "7": [
          { id:"2wd", name:"2WD", price:0, sub:"전륜구동" },
          { id:"htrac", name:"HTRAC", price:2400000, sub:"+2,400,000원" }
        ],
        "9": [
          { id:"2wd", name:"2WD", price:0, sub:"전륜구동" },
          { id:"htrac", name:"HTRAC", price:2280000, sub:"+2,280,000원" }
        ]
      }
    },

    trimsByEngineAndSeat: {
      gas25: {
        "7": [
          { id:"exclusive", name:"익스클루시브", price:45100000, sub:"가솔린 2.5 터보 · 7인승" },
          { id:"prestige", name:"프레스티지", price:50930000, sub:"20인치 휠 · 파노라믹 커브드 디스플레이" },
          { id:"calligraphy", name:"캘리그래피", price:57870000, sub:"나파가죽 · HUD · BOSE" }
        ],
        "9": [
          { id:"exclusive", name:"익스클루시브", price:43830000, sub:"가솔린 2.5 터보 · 9인승" },
          { id:"prestige", name:"프레스티지", price:49360000, sub:"20인치 휠 · 파노라믹 커브드 디스플레이" },
          { id:"calligraphy", name:"캘리그래피", price:55860000, sub:"나파가죽 · HUD · BOSE" }
        ]
      },
      hev25: {
        "7": [
          { id:"exclusive", name:"익스클루시브", price:50400000, sub:"세제혜택 후 판매가격" },
          { id:"prestige", name:"프레스티지", price:57220000, sub:"7인승 공식 판매가격" },
          { id:"calligraphy", name:"캘리그래피", price:64160000, sub:"7인승 공식 판매가격" }
        ],
        "9": [
          { id:"exclusive", name:"익스클루시브", price:49820000, sub:"9인승 공식 판매가격" },
          { id:"prestige", name:"프레스티지", price:55360000, sub:"9인승 공식 판매가격" },
          { id:"calligraphy", name:"캘리그래피", price:61860000, sub:"9인승 공식 판매가격" }
        ]
      }
    },

    colors: [
      { id:"abyss_black", name:"어비스 블랙 펄", price:0, color:"#111214" },
      { id:"shimmering_silver", name:"쉬머링 실버 메탈릭", price:0, color:"#a7a9aa" },
      { id:"cast_iron_brown", name:"캐스트 아이언 브라운 펄", price:0, color:"#65574e" },
      { id:"galaxy_maroon", name:"갤럭시 마룬 펄", price:0, color:"#654347" },
      { id:"classy_blue", name:"클래지 블루 펄", price:0, color:"#34465c" },
      { id:"ecotronic_gray", name:"에코트로닉 그레이 펄", price:0, color:"#66696a" },
      { id:"robust_emerald", name:"로버스트 에메랄드 펄", price:0, color:"#243d39", allowedTrims:["calligraphy"] },
      { id:"creamy_white", name:"크리미 화이트 펄", price:100000, priceBySeat:{"7":100000,"9":90000}, color:"#f1f0e9" }
    ],

    optionsByEngineAndSeat: {
      gas25: {
        "7": {
          exclusive: [
            { id:"sunroof", name:"듀얼 와이드 선루프", price:900000 },
            { id:"builtincam", name:"빌트인 캠 2 Plus, 증강현실 내비게이션", price:700000 },
            { id:"smartsense", name:"현대 스마트센스", price:1400000 },
            { id:"comfort", name:"컴포트", price:1400000 },
            { id:"side_step", name:"H Genuine Accessories · 사이드 스텝", price:450000 },
            { id:"air_cleaner", name:"H Genuine Accessories · 빌트인 공기청정기", price:550000 },
            { id:"mat1", name:"H Genuine Accessories · 프로텍션 매트 패키지 1", price:250000, excludes:["mat2"] },
            { id:"mat2", name:"H Genuine Accessories · 프로텍션 매트 패키지 2", price:170000, excludes:["mat1"] }
          ],
          prestige: [
            { id:"sunroof", name:"듀얼 와이드 선루프", price:900000 },
            { id:"builtincam", name:"빌트인 캠 2 Plus, 증강현실 내비게이션", price:700000 },
            { id:"comfort_plus", name:"컴포트 플러스(7인승)", price:2200000 },
            { id:"bodycare", name:"2열 다이내믹 바디케어 시트", price:800000, requires:"comfort_plus", note:"컴포트 플러스 선택 시" },
            { id:"remote_parking", name:"원격 스마트 주차 보조", price:700000 },
            { id:"platinum", name:"플래티넘", price:1800000 },
            { id:"side_step", name:"H Genuine Accessories · 사이드 스텝", price:450000 },
            { id:"air_cleaner", name:"H Genuine Accessories · 빌트인 공기청정기", price:550000 },
            { id:"film1", name:"H Genuine Accessories · 차량 보호 필름 1", price:410000 },
            { id:"film2", name:"H Genuine Accessories · 차량 보호 필름 2", price:400000 },
            { id:"mat1", name:"H Genuine Accessories · 프로텍션 매트 패키지 1", price:250000, excludes:["mat2","lifestyle"] },
            { id:"mat2", name:"H Genuine Accessories · 프로텍션 매트 패키지 2", price:170000, excludes:["mat1"] },
            { id:"lifestyle", name:"H Genuine Accessories · 라이프스타일(7인승)", price:700000, excludes:["mat1"] }
          ],
          calligraphy: [
            { id:"sunroof", name:"듀얼 와이드 선루프", price:900000 },
            { id:"builtincam", name:"빌트인 캠 2 Plus, 증강현실 내비게이션", price:700000 },
            { id:"bodycare", name:"2열 다이내믹 바디케어 시트", price:800000 },
            { id:"preview", name:"프리뷰 전자제어 서스펜션", price:1300000 },
            { id:"side_step", name:"H Genuine Accessories · 사이드 스텝", price:450000 },
            { id:"air_cleaner", name:"H Genuine Accessories · 빌트인 공기청정기", price:550000 },
            { id:"film1", name:"H Genuine Accessories · 차량 보호 필름 1", price:410000 },
            { id:"film2", name:"H Genuine Accessories · 차량 보호 필름 2", price:400000 },
            { id:"mat1", name:"H Genuine Accessories · 프로텍션 매트 패키지 1", price:250000, excludes:["mat2","lifestyle"] },
            { id:"mat2", name:"H Genuine Accessories · 프로텍션 매트 패키지 2", price:170000, excludes:["mat1"] },
            { id:"lifestyle", name:"H Genuine Accessories · 라이프스타일(7인승)", price:700000, excludes:["mat1"] }
          ]
        },
        "9": {
          exclusive: [
            { id:"sunroof", name:"듀얼 와이드 선루프", price:850000 },
            { id:"builtincam", name:"빌트인 캠 2 Plus, 증강현실 내비게이션", price:660000 },
            { id:"smartsense", name:"현대 스마트센스", price:1330000 },
            { id:"comfort", name:"컴포트", price:1330000 },
            { id:"side_step", name:"H Genuine Accessories · 사이드 스텝", price:430000 },
            { id:"air_cleaner", name:"H Genuine Accessories · 빌트인 공기청정기", price:520000 },
            { id:"mat1", name:"H Genuine Accessories · 프로텍션 매트 패키지 1", price:240000, excludes:["mat2"] },
            { id:"mat2", name:"H Genuine Accessories · 프로텍션 매트 패키지 2", price:160000, excludes:["mat1"] }
          ],
          prestige: [
            { id:"sunroof", name:"듀얼 와이드 선루프", price:850000 },
            { id:"builtincam", name:"빌트인 캠 2 Plus, 증강현실 내비게이션", price:660000 },
            { id:"comfort_plus", name:"컴포트 플러스(9인승)", price:1850000 },
            { id:"remote_parking", name:"원격 스마트 주차 보조", price:660000 },
            { id:"platinum", name:"플래티넘", price:1710000 },
            { id:"side_step", name:"H Genuine Accessories · 사이드 스텝", price:430000 },
            { id:"air_cleaner", name:"H Genuine Accessories · 빌트인 공기청정기", price:520000 },
            { id:"film1", name:"H Genuine Accessories · 차량 보호 필름 1", price:390000 },
            { id:"film2", name:"H Genuine Accessories · 차량 보호 필름 2", price:380000 },
            { id:"mat1", name:"H Genuine Accessories · 프로텍션 매트 패키지 1", price:240000, excludes:["mat2","lifestyle"] },
            { id:"mat2", name:"H Genuine Accessories · 프로텍션 매트 패키지 2", price:160000, excludes:["mat1"] },
            { id:"lifestyle", name:"H Genuine Accessories · 라이프스타일(9인승)", price:630000, excludes:["mat1"] }
          ],
          calligraphy: [
            { id:"sunroof", name:"듀얼 와이드 선루프", price:850000 },
            { id:"builtincam", name:"빌트인 캠 2 Plus, 증강현실 내비게이션", price:660000 },
            { id:"preview", name:"프리뷰 전자제어 서스펜션", price:1230000 },
            { id:"side_step", name:"H Genuine Accessories · 사이드 스텝", price:430000 },
            { id:"air_cleaner", name:"H Genuine Accessories · 빌트인 공기청정기", price:520000 },
            { id:"film1", name:"H Genuine Accessories · 차량 보호 필름 1", price:390000 },
            { id:"film2", name:"H Genuine Accessories · 차량 보호 필름 2", price:380000 },
            { id:"mat1", name:"H Genuine Accessories · 프로텍션 매트 패키지 1", price:240000, excludes:["mat2","lifestyle"] },
            { id:"mat2", name:"H Genuine Accessories · 프로텍션 매트 패키지 2", price:160000, excludes:["mat1"] },
            { id:"lifestyle", name:"H Genuine Accessories · 라이프스타일(9인승)", price:630000, excludes:["mat1"] }
          ]
        }
      },

      hev25: {
        "7": {
          exclusive: [
            { id:"sunroof", name:"듀얼 와이드 선루프", price:900000 },
            { id:"builtincam", name:"빌트인 캠 2 Plus, 증강현실 내비게이션", price:700000 },
            { id:"smartsense", name:"현대 스마트센스", price:1400000 },
            { id:"comfort", name:"컴포트", price:1400000 },
            { id:"side_step", name:"H Genuine Accessories · 사이드 스텝", price:450000 },
            { id:"air_cleaner", name:"H Genuine Accessories · 빌트인 공기청정기", price:550000 },
            { id:"mat1", name:"H Genuine Accessories · 프로텍션 매트 패키지 1", price:250000, excludes:["mat2"] },
            { id:"mat2", name:"H Genuine Accessories · 프로텍션 매트 패키지 2", price:170000, excludes:["mat1"] }
          ],
          prestige: [
            { id:"sunroof", name:"듀얼 와이드 선루프", price:900000 },
            { id:"builtincam", name:"빌트인 캠 2 Plus, 증강현실 내비게이션", price:700000 },
            { id:"comfort_plus", name:"컴포트 플러스(7인승)", price:2200000 },
            { id:"bodycare", name:"2열 다이내믹 바디케어 시트", price:800000, requires:"comfort_plus", note:"컴포트 플러스 선택 시" },
            { id:"remote_parking", name:"원격 스마트 주차 보조", price:700000 },
            { id:"platinum", name:"플래티넘", price:1800000 },
            { id:"side_step", name:"H Genuine Accessories · 사이드 스텝", price:450000 },
            { id:"air_cleaner", name:"H Genuine Accessories · 빌트인 공기청정기", price:550000 },
            { id:"film1", name:"H Genuine Accessories · 차량 보호 필름 1", price:410000 },
            { id:"film2", name:"H Genuine Accessories · 차량 보호 필름 2", price:400000 },
            { id:"mat1", name:"H Genuine Accessories · 프로텍션 매트 패키지 1", price:250000, excludes:["mat2","lifestyle_hev"] },
            { id:"mat2", name:"H Genuine Accessories · 프로텍션 매트 패키지 2", price:170000, excludes:["mat1"] },
            { id:"lifestyle_hev", name:"H Genuine Accessories · 라이프스타일(HEV)", price:1160000, excludes:["mat1"] }
          ],
          calligraphy: [
            { id:"sunroof", name:"듀얼 와이드 선루프", price:900000 },
            { id:"builtincam", name:"빌트인 캠 2 Plus, 증강현실 내비게이션", price:700000 },
            { id:"bodycare", name:"2열 다이내믹 바디케어 시트", price:800000 },
            { id:"preview", name:"프리뷰 전자제어 서스펜션", price:1300000 },
            { id:"side_step", name:"H Genuine Accessories · 사이드 스텝", price:450000 },
            { id:"air_cleaner", name:"H Genuine Accessories · 빌트인 공기청정기", price:550000 },
            { id:"film1", name:"H Genuine Accessories · 차량 보호 필름 1", price:410000 },
            { id:"film2", name:"H Genuine Accessories · 차량 보호 필름 2", price:400000 },
            { id:"mat1", name:"H Genuine Accessories · 프로텍션 매트 패키지 1", price:250000, excludes:["mat2","lifestyle_hev"] },
            { id:"mat2", name:"H Genuine Accessories · 프로텍션 매트 패키지 2", price:170000, excludes:["mat1"] },
            { id:"lifestyle_hev", name:"H Genuine Accessories · 라이프스타일(HEV)", price:1160000, excludes:["mat1"] }
          ]
        },
        "9": {
          exclusive: [
            { id:"sunroof", name:"듀얼 와이드 선루프", price:850000 },
            { id:"builtincam", name:"빌트인 캠 2 Plus, 증강현실 내비게이션", price:660000 },
            { id:"smartsense", name:"현대 스마트센스", price:1330000 },
            { id:"comfort", name:"컴포트", price:1330000 },
            { id:"side_step", name:"H Genuine Accessories · 사이드 스텝", price:430000 },
            { id:"air_cleaner", name:"H Genuine Accessories · 빌트인 공기청정기", price:520000 },
            { id:"mat1", name:"H Genuine Accessories · 프로텍션 매트 패키지 1", price:240000, excludes:["mat2"] },
            { id:"mat2", name:"H Genuine Accessories · 프로텍션 매트 패키지 2", price:160000, excludes:["mat1"] }
          ],
          prestige: [
            { id:"sunroof", name:"듀얼 와이드 선루프", price:850000 },
            { id:"builtincam", name:"빌트인 캠 2 Plus, 증강현실 내비게이션", price:660000 },
            { id:"comfort_plus", name:"컴포트 플러스(9인승)", price:1850000 },
            { id:"remote_parking", name:"원격 스마트 주차 보조", price:660000 },
            { id:"platinum", name:"플래티넘", price:1710000 },
            { id:"side_step", name:"H Genuine Accessories · 사이드 스텝", price:430000 },
            { id:"air_cleaner", name:"H Genuine Accessories · 빌트인 공기청정기", price:520000 },
            { id:"film1", name:"H Genuine Accessories · 차량 보호 필름 1", price:390000 },
            { id:"film2", name:"H Genuine Accessories · 차량 보호 필름 2", price:380000 },
            { id:"mat1", name:"H Genuine Accessories · 프로텍션 매트 패키지 1", price:240000, excludes:["mat2","lifestyle_hev"] },
            { id:"mat2", name:"H Genuine Accessories · 프로텍션 매트 패키지 2", price:160000, excludes:["mat1"] },
            { id:"lifestyle_hev", name:"H Genuine Accessories · 라이프스타일(HEV 9인승)", price:1100000, excludes:["mat1"] }
          ],
          calligraphy: [
            { id:"sunroof", name:"듀얼 와이드 선루프", price:850000 },
            { id:"builtincam", name:"빌트인 캠 2 Plus, 증강현실 내비게이션", price:660000 },
            { id:"preview", name:"프리뷰 전자제어 서스펜션", price:1230000 },
            { id:"side_step", name:"H Genuine Accessories · 사이드 스텝", price:430000 },
            { id:"air_cleaner", name:"H Genuine Accessories · 빌트인 공기청정기", price:520000 },
            { id:"film1", name:"H Genuine Accessories · 차량 보호 필름 1", price:390000 },
            { id:"film2", name:"H Genuine Accessories · 차량 보호 필름 2", price:380000 },
            { id:"mat1", name:"H Genuine Accessories · 프로텍션 매트 패키지 1", price:240000, excludes:["mat2","lifestyle_hev"] },
            { id:"mat2", name:"H Genuine Accessories · 프로텍션 매트 패키지 2", price:160000, excludes:["mat1"] },
            { id:"lifestyle_hev", name:"H Genuine Accessories · 라이프스타일(HEV 9인승)", price:1100000, excludes:["mat1"] }
          ]
        }
      }
    }
  }

  ,

  /* =========================================================
     HYUNDAI SANTA FE / SANTA FE Hybrid
     공식 현대자동차 2026 가격표 구조
     ========================================================= */
  santafe: {
    brand: "HYUNDAI",
    name: "SANTA FE",
    displayName: "싼타페",
    year: "2026 현대자동차 공식 가격표 기준",
    type: "중형 SUV",
    image: "santafe.png",

    engineHelp: "가솔린 2.5 터보와 1.6 터보 하이브리드를 선택할 수 있습니다.",
    trimHelp: "5인승을 기본으로 6인승/7인승을 선택할 수 있으며, 구동방식과 트림에 따라 가격이 자동 반영됩니다.",
    tax: { rate: 0.07, vatIncluded: true },

    engines: [
      { id:"gas25", name:"가솔린 2.5 터보", price:0, sub:"스마트스트림 가솔린 2.5 터보 · 습식 8단 DCT" },
      { id:"hev16", name:"하이브리드 1.6 터보", price:0, sub:"1.6 터보 하이브리드 · 6단 자동변속기 · 세제혜택 후 가격 기준" }
    ],

    seats: [
      { id:"5", name:"5인승", price:0, sub:"기본" },
      { id:"6", name:"6인승", price:1040000, sub:"+1,040,000원" },
      { id:"7", name:"7인승", price:690000, sub:"+690,000원" }
    ],

    drivesByEngine: {
      gas25: [
        { id:"2wd", name:"2WD", price:0, sub:"전륜구동" },
        { id:"htrac", name:"HTRAC", price:2230000, sub:"+2,230,000원 · 험로주행모드" }
      ],
      hev16: [
        { id:"2wd", name:"2WD", price:0, sub:"하이브리드 2WD" },
        { id:"awd", name:"AWD", price:3200000, sub:"공식 AWD 가격표의 트림별 차액을 기본값으로 반영" }
      ]
    },

    trimsByEngine: {
      gas25: [
        { id:"exclusive", name:"익스클루시브", price:36570000 },
        { id:"prestige", name:"프레스티지", price:38890000 },
        { id:"hpick", name:"H-Pick", price:42090000 },
        { id:"blackexterior", name:"Black Exterior", price:42440000 },
        { id:"calligraphy", name:"캘리그래피", price:45470000 },
        { id:"blackink", name:"Black Ink", price:45470000 }
      ],
      hev16: [
        { id:"exclusive", name:"익스클루시브", price:39640000, sub:"2WD · 세제혜택 후" },
        { id:"prestige", name:"프레스티지", price:42470000, sub:"2WD · 세제혜택 후" },
        { id:"hpick", name:"H-Pick", price:45080000, sub:"2WD · 세제혜택 후" },
        { id:"blackexterior", name:"Black Exterior", price:45420000, sub:"2WD · 세제혜택 후" },
        { id:"calligraphy", name:"캘리그래피", price:48070000, sub:"2WD · 세제혜택 후" },
        { id:"blackink", name:"Black Ink", price:48070000, sub:"2WD · 세제혜택 후" }
      ]
    },

    colors: [
      { id:"abyss_black", name:"어비스 블랙 펄", price:0, color:"#111214" },
      { id:"cyber_sage", name:"사이버 세이지 펄", price:0, color:"#7d8278", excludedTrims:["blackexterior","blackink"] },
      { id:"terracotta_orange", name:"테라코타 오렌지", price:0, color:"#9a563d", excludedTrims:["blackexterior","blackink"] },
      { id:"magnetic_gray", name:"마그네틱 그레이 메탈릭", price:0, color:"#55595b", excludedTrims:["blackexterior","blackink"] },
      { id:"creamy_white", name:"크리미 화이트 펄", price:0, color:"#f0efe9" },
      { id:"earthy_brass_matte", name:"얼씨 브레스 메탈릭 (매트)", price:200000, color:"#807766", excludedTrims:["blackexterior","blackink"] },
      { id:"ocada_green", name:"오카도 그린 펄", price:0, color:"#39483f", excludedTrims:["blackexterior","blackink"] },
      { id:"pebble_blue", name:"페블 블루 펄", price:0, color:"#64737d", excludedTrims:["blackexterior","blackink"] },
      { id:"creamy_white_matte", name:"크리미 화이트 매트", price:200000, color:"#e7e4dc", allowedTrims:["blackink"] }
    ],

    optionsByEngine: {
      gas25: {
        exclusive: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof_rack", name:"듀얼와이드선루프 + 루프랙", price:990000 },
          { id:"passenger8", name:"동승석 8way 전동시트", price:200000 },
          { id:"hud", name:"헤드업 디스플레이", price:590000 },
          { id:"parking1", name:"파킹 어시스트 플러스Ⅰ", price:1190000, excludes:["best1"] },
          { id:"platinum1", name:"플래티넘Ⅰ", price:450000, excludes:["best1"] },
          { id:"best1", name:"베스트 셀렉션Ⅰ", price:1500000, excludes:["parking1","platinum1"] },

            { id:"air_cleaner", name:"H Genuine Accessories · 빌트인 공기청정기 2.0", price:530000 },
            { id:"lifestyle", name:"H Genuine Accessories · 라이프 스타일", price:490000 },
            { id:"sidestep", name:"H Genuine Accessories · 사이드스텝", price:400000, excludes:["black_sidestep"] },
            { id:"black_sidestep", name:"H Genuine Accessories · 블랙 사이드스텝", price:450000, excludes:["sidestep"] },
            { id:"mat1", name:"H Genuine Accessories · 프로텍션 매트 패키지 Ⅰ", price:230000, excludes:["mat2"] },
            { id:"mat2", name:"H Genuine Accessories · 프로텍션 매트 패키지 Ⅱ", price:150000, excludes:["mat1"] },
            { id:"luggage", name:"H Genuine Accessories · 러기지 패키지", price:120000 }
        ],
        prestige: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"듀얼와이드선루프", price:890000 },
          { id:"hud", name:"헤드업 디스플레이", price:590000 },
          { id:"seatplus", name:"시트플러스", price:740000 },
          { id:"parking1", name:"파킹 어시스트 플러스Ⅰ", price:1190000 },
          { id:"design1", name:"디자인 플러스Ⅰ", price:1350000 },

            { id:"air_cleaner", name:"H Genuine Accessories · 빌트인 공기청정기 2.0", price:530000 },
            { id:"lifestyle", name:"H Genuine Accessories · 라이프 스타일", price:490000 },
            { id:"sidestep", name:"H Genuine Accessories · 사이드스텝", price:400000, excludes:["black_sidestep"] },
            { id:"black_sidestep", name:"H Genuine Accessories · 블랙 사이드스텝", price:450000, excludes:["sidestep"] },
            { id:"mat1", name:"H Genuine Accessories · 프로텍션 매트 패키지 Ⅰ", price:230000, excludes:["mat2"] },
            { id:"mat2", name:"H Genuine Accessories · 프로텍션 매트 패키지 Ⅱ", price:150000, excludes:["mat1"] },
            { id:"luggage", name:"H Genuine Accessories · 러기지 패키지", price:120000 }
        ],
        hpick: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"듀얼와이드선루프", price:890000 },
          { id:"bose", name:"BOSE 프리미엄 사운드", price:640000 },
          { id:"wheel20", name:"20인치 휠 & 타이어", price:490000 },
          { id:"alcon20", name:"N Performance · 알콘 모노블록 브레이크 & 20인치 휠 패키지", price:2700000, excludes:["blackwheel20"] },
          { id:"blackwheel20", name:"N Performance · 20인치 블랙 휠", price:800000, excludes:["alcon20"] },

            { id:"air_cleaner", name:"H Genuine Accessories · 빌트인 공기청정기 2.0", price:530000 },
            { id:"lifestyle", name:"H Genuine Accessories · 라이프 스타일", price:490000 },
            { id:"sidestep", name:"H Genuine Accessories · 사이드스텝", price:400000, excludes:["black_sidestep"] },
            { id:"black_sidestep", name:"H Genuine Accessories · 블랙 사이드스텝", price:450000, excludes:["sidestep"] },
            { id:"mat1", name:"H Genuine Accessories · 프로텍션 매트 패키지 Ⅰ", price:230000, excludes:["mat2"] },
            { id:"mat2", name:"H Genuine Accessories · 프로텍션 매트 패키지 Ⅱ", price:150000, excludes:["mat1"] },
            { id:"luggage", name:"H Genuine Accessories · 러기지 패키지", price:120000 }
        ],
        blackexterior: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"듀얼와이드선루프", price:890000 },
          { id:"bose", name:"BOSE 프리미엄 사운드", price:640000 },
          { id:"wheel20", name:"20인치 휠 & 타이어", price:490000 },

            { id:"air_cleaner", name:"H Genuine Accessories · 빌트인 공기청정기 2.0", price:530000 },
            { id:"lifestyle", name:"H Genuine Accessories · 라이프 스타일", price:490000 },
            { id:"sidestep", name:"H Genuine Accessories · 사이드스텝", price:400000, excludes:["black_sidestep"] },
            { id:"black_sidestep", name:"H Genuine Accessories · 블랙 사이드스텝", price:450000, excludes:["sidestep"] },
            { id:"mat1", name:"H Genuine Accessories · 프로텍션 매트 패키지 Ⅰ", price:230000, excludes:["mat2"] },
            { id:"mat2", name:"H Genuine Accessories · 프로텍션 매트 패키지 Ⅱ", price:150000, excludes:["mat1"] },
            { id:"luggage", name:"H Genuine Accessories · 러기지 패키지", price:120000 }
        ],
        calligraphy: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"듀얼와이드선루프", price:890000 },
          { id:"bose", name:"BOSE 프리미엄 사운드", price:640000 },
          { id:"film1", name:"H Genuine Accessories · 차량 보호 필름Ⅰ", price:410000 },
          { id:"film2", name:"H Genuine Accessories · 차량 보호 필름Ⅱ", price:400000 },
          { id:"alcon21", name:"N Performance · 알콘 모노블록 브레이크 & 21인치 휠 패키지", price:2750000, excludes:["blackwheel21"] },
          { id:"blackwheel21", name:"N Performance · 21인치 블랙 휠", price:850000, excludes:["alcon21"] },

            { id:"air_cleaner", name:"H Genuine Accessories · 빌트인 공기청정기 2.0", price:530000 },
            { id:"lifestyle", name:"H Genuine Accessories · 라이프 스타일", price:490000 },
            { id:"sidestep", name:"H Genuine Accessories · 사이드스텝", price:400000, excludes:["black_sidestep"] },
            { id:"black_sidestep", name:"H Genuine Accessories · 블랙 사이드스텝", price:450000, excludes:["sidestep"] },
            { id:"mat1", name:"H Genuine Accessories · 프로텍션 매트 패키지 Ⅰ", price:230000, excludes:["mat2"] },
            { id:"mat2", name:"H Genuine Accessories · 프로텍션 매트 패키지 Ⅱ", price:150000, excludes:["mat1"] },
            { id:"luggage", name:"H Genuine Accessories · 러기지 패키지", price:120000 }
        ],
        blackink: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"듀얼와이드선루프", price:890000 },
          { id:"bose", name:"BOSE 프리미엄 사운드", price:640000 },
          { id:"blackinkplus", name:"블랙잉크 플러스", price:940000 },
          { id:"film1", name:"H Genuine Accessories · 차량 보호 필름Ⅰ", price:410000 },
          { id:"film2", name:"H Genuine Accessories · 차량 보호 필름Ⅱ", price:400000 },

            { id:"air_cleaner", name:"H Genuine Accessories · 빌트인 공기청정기 2.0", price:530000 },
            { id:"lifestyle", name:"H Genuine Accessories · 라이프 스타일", price:490000 },
            { id:"sidestep", name:"H Genuine Accessories · 사이드스텝", price:400000, excludes:["black_sidestep"] },
            { id:"black_sidestep", name:"H Genuine Accessories · 블랙 사이드스텝", price:450000, excludes:["sidestep"] },
            { id:"mat1", name:"H Genuine Accessories · 프로텍션 매트 패키지 Ⅰ", price:230000, excludes:["mat2"] },
            { id:"mat2", name:"H Genuine Accessories · 프로텍션 매트 패키지 Ⅱ", price:150000, excludes:["mat1"] },
            { id:"luggage", name:"H Genuine Accessories · 러기지 패키지", price:120000 }
        ]
      },

      hev16: {
        exclusive: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof_rack", name:"듀얼와이드선루프 + 루프랙", price:990000 },
          { id:"passenger8", name:"동승석 8way 전동시트", price:200000 },
          { id:"hud", name:"헤드업 디스플레이", price:590000 },
          { id:"parking1", name:"파킹 어시스트 플러스Ⅰ", price:1190000, excludes:["best1"] },
          { id:"platinum1", name:"플래티넘Ⅰ", price:450000, excludes:["best1"] },
          { id:"best1", name:"베스트 셀렉션Ⅰ", price:1500000, excludes:["parking1","platinum1"] },

            { id:"air_cleaner", name:"H Genuine Accessories · 빌트인 공기청정기 2.0", price:530000 },
            { id:"lifestyle", name:"H Genuine Accessories · 라이프 스타일", price:490000 },
            { id:"sidestep", name:"H Genuine Accessories · 사이드스텝", price:400000, excludes:["black_sidestep"] },
            { id:"black_sidestep", name:"H Genuine Accessories · 블랙 사이드스텝", price:450000, excludes:["sidestep"] },
            { id:"mat1", name:"H Genuine Accessories · 프로텍션 매트 패키지 Ⅰ", price:230000, excludes:["mat2"] },
            { id:"mat2", name:"H Genuine Accessories · 프로텍션 매트 패키지 Ⅱ", price:150000, excludes:["mat1"] },
            { id:"luggage", name:"H Genuine Accessories · 러기지 패키지", price:120000 }
        ],
        prestige: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"듀얼와이드선루프", price:890000 },
          { id:"hud", name:"헤드업 디스플레이", price:590000 },
          { id:"seatplus", name:"시트플러스", price:740000 },
          { id:"parking1", name:"파킹 어시스트 플러스Ⅰ", price:1190000 },
          { id:"design1", name:"디자인 플러스Ⅰ", price:1350000 },
          { id:"wheel20", name:"20인치 휠 & 타이어", price:490000 },

            { id:"air_cleaner", name:"H Genuine Accessories · 빌트인 공기청정기 2.0", price:530000 },
            { id:"lifestyle", name:"H Genuine Accessories · 라이프 스타일", price:490000 },
            { id:"sidestep", name:"H Genuine Accessories · 사이드스텝", price:400000, excludes:["black_sidestep"] },
            { id:"black_sidestep", name:"H Genuine Accessories · 블랙 사이드스텝", price:450000, excludes:["sidestep"] },
            { id:"mat1", name:"H Genuine Accessories · 프로텍션 매트 패키지 Ⅰ", price:230000, excludes:["mat2"] },
            { id:"mat2", name:"H Genuine Accessories · 프로텍션 매트 패키지 Ⅱ", price:150000, excludes:["mat1"] },
            { id:"luggage", name:"H Genuine Accessories · 러기지 패키지", price:120000 }
        ],
        hpick: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"듀얼와이드선루프", price:890000 },
          { id:"bose", name:"BOSE 프리미엄 사운드", price:640000 },
          { id:"wheel20", name:"20인치 휠 & 타이어", price:490000 },

            { id:"air_cleaner", name:"H Genuine Accessories · 빌트인 공기청정기 2.0", price:530000 },
            { id:"lifestyle", name:"H Genuine Accessories · 라이프 스타일", price:490000 },
            { id:"sidestep", name:"H Genuine Accessories · 사이드스텝", price:400000, excludes:["black_sidestep"] },
            { id:"black_sidestep", name:"H Genuine Accessories · 블랙 사이드스텝", price:450000, excludes:["sidestep"] },
            { id:"mat1", name:"H Genuine Accessories · 프로텍션 매트 패키지 Ⅰ", price:230000, excludes:["mat2"] },
            { id:"mat2", name:"H Genuine Accessories · 프로텍션 매트 패키지 Ⅱ", price:150000, excludes:["mat1"] },
            { id:"luggage", name:"H Genuine Accessories · 러기지 패키지", price:120000 }
        ],
        blackexterior: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"듀얼와이드선루프", price:890000 },
          { id:"bose", name:"BOSE 프리미엄 사운드", price:640000 },
          { id:"wheel20", name:"20인치 휠 & 타이어", price:490000 },

            { id:"air_cleaner", name:"H Genuine Accessories · 빌트인 공기청정기 2.0", price:530000 },
            { id:"lifestyle", name:"H Genuine Accessories · 라이프 스타일", price:490000 },
            { id:"sidestep", name:"H Genuine Accessories · 사이드스텝", price:400000, excludes:["black_sidestep"] },
            { id:"black_sidestep", name:"H Genuine Accessories · 블랙 사이드스텝", price:450000, excludes:["sidestep"] },
            { id:"mat1", name:"H Genuine Accessories · 프로텍션 매트 패키지 Ⅰ", price:230000, excludes:["mat2"] },
            { id:"mat2", name:"H Genuine Accessories · 프로텍션 매트 패키지 Ⅱ", price:150000, excludes:["mat1"] },
            { id:"luggage", name:"H Genuine Accessories · 러기지 패키지", price:120000 }
        ],
        calligraphy: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"듀얼와이드선루프", price:890000 },
          { id:"bose", name:"BOSE 프리미엄 사운드", price:640000 },
          { id:"film1", name:"H Genuine Accessories · 차량 보호 필름Ⅰ", price:410000 },
          { id:"film2", name:"H Genuine Accessories · 차량 보호 필름Ⅱ", price:400000 },

            { id:"air_cleaner", name:"H Genuine Accessories · 빌트인 공기청정기 2.0", price:530000 },
            { id:"lifestyle", name:"H Genuine Accessories · 라이프 스타일", price:490000 },
            { id:"sidestep", name:"H Genuine Accessories · 사이드스텝", price:400000, excludes:["black_sidestep"] },
            { id:"black_sidestep", name:"H Genuine Accessories · 블랙 사이드스텝", price:450000, excludes:["sidestep"] },
            { id:"mat1", name:"H Genuine Accessories · 프로텍션 매트 패키지 Ⅰ", price:230000, excludes:["mat2"] },
            { id:"mat2", name:"H Genuine Accessories · 프로텍션 매트 패키지 Ⅱ", price:150000, excludes:["mat1"] },
            { id:"luggage", name:"H Genuine Accessories · 러기지 패키지", price:120000 }
        ],
        blackink: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"듀얼와이드선루프", price:890000 },
          { id:"bose", name:"BOSE 프리미엄 사운드", price:640000 },
          { id:"blackinkplus", name:"블랙잉크 플러스", price:940000 },
          { id:"film1", name:"H Genuine Accessories · 차량 보호 필름Ⅰ", price:410000 },
          { id:"film2", name:"H Genuine Accessories · 차량 보호 필름Ⅱ", price:400000 },

            { id:"air_cleaner", name:"H Genuine Accessories · 빌트인 공기청정기 2.0", price:530000 },
            { id:"lifestyle", name:"H Genuine Accessories · 라이프 스타일", price:490000 },
            { id:"sidestep", name:"H Genuine Accessories · 사이드스텝", price:400000, excludes:["black_sidestep"] },
            { id:"black_sidestep", name:"H Genuine Accessories · 블랙 사이드스텝", price:450000, excludes:["sidestep"] },
            { id:"mat1", name:"H Genuine Accessories · 프로텍션 매트 패키지 Ⅰ", price:230000, excludes:["mat2"] },
            { id:"mat2", name:"H Genuine Accessories · 프로텍션 매트 패키지 Ⅱ", price:150000, excludes:["mat1"] },
            { id:"luggage", name:"H Genuine Accessories · 러기지 패키지", price:120000 }
        ]
      }
    }
  }

  ,

  /* =========================================================
     HYUNDAI The all-new AVANTE / Hybrid
     현대자동차 공식 홈페이지 2026-08-05 가격표 기준
     주의: 8세대 신형은 가솔린 2.0 / 1.6 Hybrid로 운영
     ========================================================= */
  avante: {
    brand: "HYUNDAI",
    name: "The all-new AVANTE",
    displayName: "디 올 뉴 아반떼",
    year: "2026년 8월 5일 현대자동차 공식 가격표 기준",
    type: "준중형 세단",
    image: "avante.png",

    engineHelp:
      "현행 8세대 디 올 뉴 아반떼는 가솔린 2.0과 1.6 하이브리드 두 파워트레인으로 운영됩니다.",
    trimHelp:
      "현대자동차 공식 홈페이지의 Modern / Premium / Inspiration 가격과 선택품목을 반영합니다. 하이브리드는 환경친화적 자동차 고시 완료 전이므로 현재 공식 '세제혜택 적용 전' 가격을 사용합니다.",

    tax: { rate: 0.07, vatIncluded: true },

    engines: [
      {
        id: "gas20",
        name: "가솔린 2.0",
        price: 0,
        sub: "스마트스트림 가솔린 2.0 · 스마트스트림 IVT"
      },
      {
        id: "hev16",
        name: "하이브리드 1.6",
        price: 0,
        sub: "스마트스트림 가솔린 1.6 하이브리드 · 45kW 모터 · 6단 DCT"
      }
    ],

    drives: [
      { id:"2wd", name:"2WD", price:0, sub:"전륜구동" }
    ],

    seats: [
      { id:"5", name:"5인승", price:0, sub:"기본" }
    ],

    trimsByEngine: {
      gas20: [
        { id:"modern", name:"Modern", price:23980000, sub:"현대 공식 판매가격" },
        { id:"premium", name:"Premium", price:27710000, sub:"현대 공식 판매가격" },
        { id:"inspiration", name:"Inspiration", price:31520000, sub:"현대 공식 판매가격" }
      ],
      hev16: [
        { id:"modern", name:"Modern", price:30420000, sub:"세제혜택 적용 전 · 고시 완료 후 변경 예정" },
        { id:"premium", name:"Premium", price:33610000, sub:"세제혜택 적용 전 · 고시 완료 후 변경 예정" },
        { id:"inspiration", name:"Inspiration", price:36990000, sub:"세제혜택 적용 전 · 고시 완료 후 변경 예정" }
      ]
    },

    colors: [
      { id:"abyss_black", name:"어비스 블랙 펄", price:0, color:"#111214" },
      { id:"raptor_gray_matte", name:"랩터 그레이 매트", price:200000, color:"#6d6d69" },
      { id:"kodiak_blue_matte", name:"코디악 블루 매트", price:200000, color:"#3f4d55" },
      { id:"graphene_green", name:"그라펜 그린 펄", price:0, color:"#435149" },
      { id:"quantum_silver", name:"퀀텀 실버 펄", price:0, color:"#a6a8a8" },
      { id:"volcanic_red", name:"볼케닉 레드 펄", price:0, color:"#812c2d" },
      { id:"goyo_copper", name:"고요 카퍼 펄", price:0, color:"#8a6654" },
      { id:"serenity_white", name:"세레니티 화이트 펄", price:0, color:"#f1f0eb" },
      { id:"amazon_gray", name:"아마존 그레이 메탈릭", price:0, color:"#5b615f" }
    ],

    optionsByEngine: {
      gas20: {
        modern: [
          { id:"slim_display", name:"9.9인치 슬림 디스플레이", price:350000 },
          { id:"convenience1", name:"컨비니언스Ⅰ", price:650000 },
          { id:"smartsense1", name:"현대 스마트센스Ⅰ", price:960000 },
          { id:"wheel17_1", name:"17인치 알로이 휠 & 타이어Ⅰ", price:320000 },
          { id:"lighting", name:"H Genuine Accessories · 라이팅 플러스 패키지", price:150000 },
          { id:"film1", name:"H Genuine Accessories · 차량 보호 필름 1", price:300000 },
          { id:"film2", name:"H Genuine Accessories · 차량 보호 필름 2", price:420000 }
        ],

        premium: [
          { id:"sunroof", name:"와이드 선루프", price:900000 },
          { id:"pleos146", name:"플레오스 커넥트 14.6인치 + 9.9인치 슬림 디스플레이", price:830000 },
          { id:"smartsense2", name:"현대 스마트센스Ⅱ", price:400000 },
          { id:"exterior", name:"익스테리어 디자인", price:1400000 },
          { id:"platinum1", name:"플래티넘Ⅰ", price:930000 },
          { id:"comfort", name:"컴포트", price:760000 },
          { id:"wheel17_2", name:"17인치 알로이 휠 & 타이어Ⅱ", price:300000 },
          { id:"lighting", name:"H Genuine Accessories · 라이팅 플러스 패키지", price:150000 },
          { id:"film1", name:"H Genuine Accessories · 차량 보호 필름 1", price:300000 },
          { id:"film2", name:"H Genuine Accessories · 차량 보호 필름 2", price:420000 }
        ],

        inspiration: [
          { id:"sunroof", name:"와이드 선루프", price:900000 },
          { id:"platinum2", name:"플래티넘Ⅱ", price:900000 },
          { id:"builtincam", name:"빌트인 캠 2 Plus", price:650000 },
          { id:"parking1", name:"파킹 어시스트Ⅰ", price:800000, excludes:["parking2"] },
          { id:"parking2", name:"파킹 어시스트Ⅱ", price:1300000, excludes:["parking1"] },
          { id:"wheel18", name:"18인치 알로이 휠 & 타이어", price:500000 },
          { id:"bno", name:"Audio by BANG & OLUFSEN 사운드", price:1100000 },
          { id:"lighting", name:"H Genuine Accessories · 라이팅 플러스 패키지", price:150000 },
          { id:"film1", name:"H Genuine Accessories · 차량 보호 필름 1", price:300000 },
          { id:"film2", name:"H Genuine Accessories · 차량 보호 필름 2", price:420000 }
        ]
      },

      hev16: {
        modern: [
          { id:"slim_display", name:"9.9인치 슬림 디스플레이", price:350000 },
          { id:"convenience2", name:"컨비니언스Ⅱ", price:450000 },
          { id:"smartsense1", name:"현대 스마트센스Ⅰ", price:960000 },
          { id:"lighting", name:"H Genuine Accessories · 라이팅 플러스 패키지", price:150000 },
          { id:"film1", name:"H Genuine Accessories · 차량 보호 필름 1", price:300000 },
          { id:"film2", name:"H Genuine Accessories · 차량 보호 필름 2", price:420000 }
        ],

        premium: [
          { id:"sunroof", name:"와이드 선루프", price:900000 },
          { id:"pleos146", name:"플레오스 커넥트 14.6인치 + 9.9인치 슬림 디스플레이", price:830000 },
          { id:"smartsense2", name:"현대 스마트센스Ⅱ", price:400000 },
          { id:"exterior", name:"익스테리어 디자인", price:1400000 },
          { id:"platinum1", name:"플래티넘Ⅰ", price:930000 },
          { id:"comfort", name:"컴포트", price:760000 },
          { id:"lighting", name:"H Genuine Accessories · 라이팅 플러스 패키지", price:150000 },
          { id:"film1", name:"H Genuine Accessories · 차량 보호 필름 1", price:300000 },
          { id:"film2", name:"H Genuine Accessories · 차량 보호 필름 2", price:420000 }
        ],

        inspiration: [
          { id:"sunroof", name:"와이드 선루프", price:900000 },
          { id:"platinum2", name:"플래티넘Ⅱ", price:900000 },
          { id:"builtincam", name:"빌트인 캠 2 Plus", price:650000 },
          { id:"parking1", name:"파킹 어시스트Ⅰ", price:800000, excludes:["parking2"] },
          { id:"parking2", name:"파킹 어시스트Ⅱ", price:1300000, excludes:["parking1"] },
          { id:"wheel18", name:"18인치 알로이 휠 & 타이어", price:500000 },
          { id:"bno", name:"Audio by BANG & OLUFSEN 사운드", price:1100000 },
          { id:"lighting", name:"H Genuine Accessories · 라이팅 플러스 패키지", price:150000 },
          { id:"film1", name:"H Genuine Accessories · 차량 보호 필름 1", price:300000 },
          { id:"film2", name:"H Genuine Accessories · 차량 보호 필름 2", price:420000 }
        ]
      }
    }
  }

  ,

  /* =========================================================
     HYUNDAI TUCSON / TUCSON Hybrid
     현대자동차 공식 홈페이지 2026-08-01 가격표 기준
     ========================================================= */
  tucson: {
    brand: "HYUNDAI",
    name: "TUCSON",
    displayName: "투싼",
    year: "2026년 8월 1일 현대자동차 공식 가격표 기준",
    type: "준중형 SUV",
    image: "tucson.png",

    engineHelp:
      "스마트스트림 가솔린 1.6 터보와 1.6 터보 하이브리드를 선택할 수 있습니다. N Line도 동일 화면에서 선택합니다.",
    trimHelp:
      "현대자동차 공식 홈페이지의 Modern / Premium / H-Pick / Inspiration / N Line 판매구조를 반영합니다.",

    tax: { rate: 0.07, vatIncluded: true },

    engines: [
      { id:"gas16t", name:"가솔린 1.6 터보", price:0, sub:"스마트스트림 가솔린 1.6 터보 · 7단 DCT" },
      { id:"hev16t", name:"Hybrid 1.6 터보", price:0, sub:"1.6 터보 하이브리드 · 시스템 최고출력 235PS · 6단 자동변속기" }
    ],

    drivesByEngine: {
      gas16t: [
        { id:"2wd", name:"2WD", price:0, sub:"전륜구동" },
        { id:"htrac", name:"HTRAC", price:2000000, sub:"전자식 AWD · 험로주행모드" }
      ],
      hev16t: [
        { id:"2wd", name:"2WD", price:0, sub:"하이브리드 전륜구동" },
        { id:"htrac", name:"HTRAC", price:2230000, sub:"하이브리드 전자식 AWD · 험로주행모드" }
      ]
    },

    seats: [
      { id:"5", name:"5인승", price:0, sub:"기본" }
    ],

    trimsByEngine: {
      gas16t: [
        { id:"modern", name:"Modern", price:28440000, sub:"현대닷컴 2026-08-01 공식가격" },
        { id:"premium", name:"Premium", price:31120000, sub:"Modern 기본품목 포함" },
        { id:"hpick", name:"H-Pick", price:32000000, sub:"고객 선호 안전·편의사양 구성" },
        { id:"inspiration", name:"Inspiration", price:34540000, sub:"상위 편의·디자인 사양" },
        { id:"nline", name:"N Line", price:35400000, sub:"N Line 전용 외장·내장 및 19인치 휠" }
      ],
      hev16t: [
        { id:"modern", name:"Modern", price:33180000, sub:"세제혜택 후 공식 시작가격" },
        { id:"premium", name:"Premium", price:35660000, sub:"세제혜택 후" },
        { id:"hpick", name:"H-Pick", price:36500000, sub:"세제혜택 후" },
        { id:"inspiration", name:"Inspiration", price:39180000, sub:"세제혜택 후" },
        { id:"nline", name:"N Line", price:39830000, sub:"N Line Hybrid · 세제혜택 후" }
      ]
    },

    colors: [
      { id:"creamy_white", name:"크리미 화이트 펄", price:0, color:"#f1f0e9" },
      { id:"shimmering_silver", name:"쉬머링 실버 메탈릭", price:0, color:"#a6a8aa" },
      { id:"amazon_gray", name:"아마존 그레이 메탈릭", price:0, color:"#545a57" },
      { id:"ecotronic_gray", name:"에코트로닉 그레이 펄", price:0, color:"#626669" },
      { id:"phantom_black", name:"팬텀 블랙 펄", price:0, color:"#111214" }
    ],

    optionsByEngine: {
      gas16t: {
        modern: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"파노라마 선루프", price:1090000 },
          { id:"smartsense", name:"현대 스마트센스", price:790000 },
          { id:"comfort1", name:"컴포트Ⅰ", price:590000 },
          { id:"exterior1", name:"익스테리어 디자인Ⅰ", price:690000 }
        ],
        premium: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"파노라마 선루프", price:1090000 },
          { id:"exterior2", name:"익스테리어 디자인Ⅱ", price:690000 },
          { id:"parking1", name:"파킹어시스트Ⅰ(가솔린)", price:1230000 },
          { id:"comfort2", name:"컴포트Ⅱ", price:590000 }
        ],
        hpick: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"파노라마 선루프", price:1090000 },
          { id:"exterior2", name:"익스테리어 디자인Ⅱ", price:690000 },
          { id:"parking1", name:"파킹어시스트Ⅰ(가솔린)", price:1230000 }
        ],
        inspiration: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"파노라마 선루프", price:1090000 },
          { id:"parking2", name:"파킹어시스트Ⅱ", price:690000 },
          { id:"bose", name:"BOSE 프리미엄 사운드", price:590000 },
          { id:"blackexterior", name:"블랙 익스테리어", price:690000 }
        ],
        nline: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"파노라마 선루프", price:1090000 },
          { id:"parking2", name:"파킹어시스트Ⅱ", price:690000 },
          { id:"bose", name:"BOSE 프리미엄 사운드", price:590000 }
        ]
      },

      hev16t: {
        modern: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"파노라마 선루프", price:1090000 },
          { id:"smartsense", name:"현대 스마트센스", price:790000 },
          { id:"lifestyle", name:"H Genuine Accessories · 라이프스타일", price:490000 },
          { id:"luggage", name:"H Genuine Accessories · 러기지 패키지", price:120000 },
          { id:"sidestep", name:"H Genuine Accessories · 사이드 스텝", price:400000, excludes:["black_sidestep"] },
          { id:"black_sidestep", name:"H Genuine Accessories · 블랙 사이드 스텝", price:450000, excludes:["sidestep"] }
        ],
        premium: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"파노라마 선루프", price:1090000 },
          { id:"exterior2", name:"익스테리어 디자인Ⅱ", price:690000 },
          { id:"parking1", name:"파킹어시스트Ⅰ", price:1230000 },
          { id:"aircleaner", name:"H Genuine Accessories · 빌트인 공기청정기", price:530000 },
          { id:"lifestyle", name:"H Genuine Accessories · 라이프스타일", price:490000 },
          { id:"luggage", name:"H Genuine Accessories · 러기지 패키지", price:120000 },
          { id:"sidestep", name:"H Genuine Accessories · 사이드 스텝", price:400000, excludes:["black_sidestep"] },
          { id:"black_sidestep", name:"H Genuine Accessories · 블랙 사이드 스텝", price:450000, excludes:["sidestep"] }
        ],
        hpick: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"파노라마 선루프", price:1090000 },
          { id:"exterior2", name:"익스테리어 디자인Ⅱ", price:690000 },
          { id:"parking1", name:"파킹어시스트Ⅰ", price:1230000 },
          { id:"aircleaner", name:"H Genuine Accessories · 빌트인 공기청정기", price:530000 },
          { id:"lifestyle", name:"H Genuine Accessories · 라이프스타일", price:490000 },
          { id:"luggage", name:"H Genuine Accessories · 러기지 패키지", price:120000 }
        ],
        inspiration: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"파노라마 선루프", price:1090000 },
          { id:"parking2", name:"파킹어시스트Ⅱ", price:690000 },
          { id:"bose", name:"BOSE 프리미엄 사운드", price:590000 },
          { id:"blackexterior", name:"블랙 익스테리어", price:690000 },
          { id:"aircleaner", name:"H Genuine Accessories · 빌트인 공기청정기", price:530000 },
          { id:"lifestyle", name:"H Genuine Accessories · 라이프스타일", price:490000 },
          { id:"luggage", name:"H Genuine Accessories · 러기지 패키지", price:120000 }
        ],
        nline: [
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"sunroof", name:"파노라마 선루프", price:1090000 },
          { id:"parking2", name:"파킹어시스트Ⅱ", price:690000 },
          { id:"bose", name:"BOSE 프리미엄 사운드", price:590000 },
          { id:"aircleaner", name:"H Genuine Accessories · 빌트인 공기청정기", price:530000 },
          { id:"lifestyle", name:"H Genuine Accessories · 라이프스타일", price:490000 },
          { id:"luggage", name:"H Genuine Accessories · 러기지 패키지", price:120000 }
        ]
      }
    }
  }

  ,

  /* =========================================================
     HYUNDAI KONA / KONA Hybrid / KONA Electric
     현대자동차 공식 홈페이지/가격표 기준
     - KONA gasoline: 2026-08-01
     - KONA Hybrid: 2026-07-01
     - KONA Electric: official price list / 2026-08-01 subsidy table
     ========================================================= */
  kona: {
    brand: "HYUNDAI",
    name: "KONA",
    displayName: "코나",
    year: "현대자동차 공식 홈페이지 최신 가격표 기준",
    type: "소형 SUV",
    image: "kona.png",

    engineHelp:
      "가솔린 1.6 터보, 가솔린 2.0, 1.6 하이브리드, Electric Standard, Electric Long Range를 한 화면에서 선택할 수 있습니다.",
    trimHelp:
      "파워트레인에 따라 현대자동차 공식 판매 트림과 가격이 자동으로 변경됩니다. Electric은 세제혜택 후 판매가격을 사용하며 국비·지자체 보조금은 차량가격에서 자동 차감하지 않습니다.",

    tax: { rate: 0.07, vatIncluded: true },

    engines: [
      { id:"gas16t", name:"가솔린 1.6 터보", price:0, sub:"스마트스트림 가솔린 1.6 터보 · 8단 자동변속기" },
      { id:"gas20", name:"가솔린 2.0", price:0, sub:"스마트스트림 가솔린 2.0 · IVT" },
      { id:"hev16", name:"Hybrid 1.6", price:0, sub:"1.6 하이브리드 · 32kW 모터 · 6단 DCT" },
      { id:"ev_std", name:"Electric Standard", price:0, sub:"48.6kWh · 99kW/135PS · 공식 세제혜택 후 가격" },
      { id:"ev_long", name:"Electric Long Range", price:0, sub:"Long Range · 150kW/204PS · 공식 세제혜택 후 가격" }
    ],

    drivesByEngine: {
      gas16t: [
        { id:"2wd", name:"2WD", price:0, sub:"전륜구동" },
        { id:"htrac", name:"HTRAC", price:2030000, sub:"+2,030,000원 · Premium/Inspiration 계열 선택 가능" }
      ],
      gas20: [
        { id:"2wd", name:"2WD", price:0, sub:"전륜구동" }
      ],
      hev16: [
        { id:"2wd", name:"2WD", price:0, sub:"하이브리드 전륜구동" }
      ],
      ev_std: [
        { id:"2wd", name:"2WD", price:0, sub:"전륜구동" }
      ],
      ev_long: [
        { id:"2wd", name:"2WD", price:0, sub:"전륜구동" }
      ]
    },

    seats: [
      { id:"5", name:"5인승", price:0, sub:"기본" }
    ],

    trimsByEngine: {
      gas16t: [
        { id:"modern", name:"Modern", price:24630000 },
        { id:"hpick", name:"H-Pick", price:26850000 },
        { id:"premium", name:"Premium", price:29150000 },
        { id:"inspiration", name:"Inspiration", price:31460000 },
        { id:"blackexterior", name:"Black Exterior", price:31810000 },
        { id:"nline", name:"N Line", price:32450000 }
      ],

      gas20: [
        { id:"modern", name:"Modern", price:23930000 },
        { id:"hpick", name:"H-Pick", price:26250000 }
      ],

      hev16: [
        { id:"modern", name:"Modern", price:29380000, sub:"세제혜택 후" },
        { id:"hpick", name:"H-Pick", price:31200000, sub:"세제혜택 후" },
        { id:"premium", name:"Premium", price:33670000, sub:"세제혜택 후" },
        { id:"inspiration", name:"Inspiration", price:35630000, sub:"세제혜택 후" },
        { id:"blackexterior", name:"Black Exterior", price:36030000, sub:"세제혜택 후" },
        { id:"nline", name:"N Line", price:36670000, sub:"세제혜택 후" }
      ],

      ev_std: [
        { id:"evalue", name:"E-Value +", price:41520000, sub:"Standard · 세제혜택 후" },
        { id:"premium", name:"Premium", price:43570000, sub:"Standard · 세제혜택 후" }
      ],

      ev_long: [
        { id:"modernplus", name:"Modern Plus", price:45660000, sub:"Long Range · 세제혜택 후" },
        { id:"premium", name:"Premium", price:46570000, sub:"Long Range · 세제혜택 후" },
        { id:"inspiration", name:"Inspiration", price:49920000, sub:"Long Range · 세제혜택 후" },
        { id:"blackexterior", name:"Black Exterior", price:50250000, sub:"Long Range · 세제혜택 후" },
        { id:"nline", name:"N Line", price:50860000, sub:"Long Range · 세제혜택 후" }
      ]
    },

    colors: [
      { id:"abyss_black", name:"어비스 블랙 펄", price:0, color:"#111214" },
      { id:"atlas_white", name:"아틀라스 화이트", price:0, color:"#f1f0eb" },
      { id:"cyber_gray", name:"사이버 그레이 메탈릭", price:0, color:"#73777a" },
      { id:"ecotronic_gray", name:"에코트로닉 그레이 펄", price:0, color:"#5c6062" },
      { id:"ultimate_red", name:"얼티메이트 레드 메탈릭", price:0, color:"#812c2e" },
      { id:"mirage_green", name:"미라지 그린", price:0, color:"#85928b" },
      { id:"meta_blue", name:"메타블루 펄", price:0, color:"#40536b" }
    ],

    optionsByEngine: {
      gas16t: {
        modern: [
          { id:"navi1", name:"내비게이션 패키지Ⅰ", price:550000 },
          { id:"smartsense1", name:"현대 스마트센스Ⅰ", price:1100000 },
          { id:"comfort_choice", name:"컴포트 초이스", price:400000 },
          { id:"hipass", name:"하이패스", price:200000 }
        ],
        hpick: [
          { id:"best", name:"베스트 셀렉션", price:790000, includes:["smartsense3","cluster"] },
          { id:"style_lite", name:"스타일 Lite", price:490000 },
          { id:"smartsense3", name:"현대 스마트센스Ⅲ", price:550000, excludes:["best"] },
          { id:"cluster", name:"클러스터(12.3인치 컬러 LCD)", price:400000, excludes:["best"] },
          { id:"parking", name:"파킹어시스트", price:990000, requires:"cluster" },
          { id:"convenience", name:"컨비니언스", price:400000 },
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"hipass", name:"하이패스", price:200000 }
        ],
        premium: [
          { id:"best", name:"베스트 셀렉션", price:790000, includes:["smartsense3","cluster"] },
          { id:"smartsense3", name:"현대 스마트센스Ⅲ", price:550000, excludes:["best"] },
          { id:"cluster", name:"클러스터(12.3인치 컬러 LCD)", price:400000, excludes:["best"] },
          { id:"parking", name:"파킹어시스트", price:990000, requires:"cluster" },
          { id:"seatplus", name:"시트플러스", price:490000 },
          { id:"wheel19", name:"19인치 알로이 휠 & 타이어", price:250000 },
          { id:"interior_color", name:"실내 컬러 패키지", price:200000 },
          { id:"sunroof", name:"와이드 선루프", price:590000 },
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 }
        ],
        inspiration: [
          { id:"parking", name:"파킹어시스트", price:990000 },
          { id:"bose", name:"BOSE 프리미엄 사운드", price:590000 },
          { id:"two_tone", name:"투톤 컬러 루프", price:300000, excludes:["sunroof"] },
          { id:"interior_color", name:"실내 컬러 패키지", price:200000, excludes:["eco"] },
          { id:"eco", name:"에코패키지", price:200000, excludes:["interior_color"] },
          { id:"sunroof", name:"와이드 선루프", price:590000, excludes:["two_tone"] },
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 }
        ],
        blackexterior: [
          { id:"parking", name:"파킹어시스트", price:990000 },
          { id:"bose", name:"BOSE 프리미엄 사운드", price:590000 },
          { id:"sunroof", name:"와이드 선루프", price:590000 },
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 }
        ],
        nline: [
          { id:"parking", name:"파킹어시스트", price:990000 },
          { id:"bose", name:"BOSE 프리미엄 사운드", price:590000 },
          { id:"two_tone", name:"투톤 컬러 루프", price:300000, excludes:["sunroof"] },
          { id:"sunroof", name:"와이드 선루프", price:590000, excludes:["two_tone"] },
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"alcantara", name:"N Performance · 알칸타라 인테리어 패키지", price:370000 }
        ]
      },

      gas20: {
        modern: [
          { id:"navi1", name:"내비게이션 패키지Ⅰ", price:550000 },
          { id:"smartsense1", name:"현대 스마트센스Ⅰ", price:1100000 },
          { id:"comfort_choice", name:"컴포트 초이스", price:400000 },
          { id:"hipass", name:"하이패스", price:200000 }
        ],
        hpick: [
          { id:"best", name:"베스트 셀렉션", price:790000, includes:["smartsense3","cluster"] },
          { id:"style_lite", name:"스타일 Lite", price:490000 },
          { id:"smartsense3", name:"현대 스마트센스Ⅲ", price:550000, excludes:["best"] },
          { id:"cluster", name:"클러스터(12.3인치 컬러 LCD)", price:400000, excludes:["best"] },
          { id:"parking", name:"파킹어시스트", price:990000, requires:"cluster" },
          { id:"convenience", name:"컨비니언스", price:400000 },
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"hipass", name:"하이패스", price:200000 }
        ]
      },

      hev16: {
        modern: [
          { id:"hipass", name:"하이패스", price:200000 },
          { id:"navi2", name:"내비게이션 패키지Ⅱ", price:300000 },
          { id:"smartsense1", name:"현대 스마트센스Ⅰ", price:1100000 },
          { id:"comfort_choice", name:"컴포트 초이스", price:400000 }
        ],
        hpick: [
          { id:"hipass", name:"하이패스", price:200000 },
          { id:"best", name:"베스트 셀렉션", price:790000, includes:["smartsense3","cluster"] },
          { id:"smartsense3", name:"현대 스마트센스Ⅲ", price:550000, excludes:["best"] },
          { id:"cluster", name:"클러스터(12.3인치 컬러 LCD)", price:400000, excludes:["best"] },
          { id:"style1", name:"스타일Ⅰ", price:640000 },
          { id:"parking", name:"파킹어시스트", price:990000, requires:"cluster" },
          { id:"convenience", name:"컨비니언스", price:400000 },
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 }
        ],
        premium: [
          { id:"sunroof", name:"와이드 선루프", price:590000 },
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"parking", name:"파킹어시스트", price:990000 },
          { id:"bose", name:"BOSE 프리미엄 사운드", price:590000 },
          { id:"two_tone", name:"투톤 컬러 루프", price:300000, excludes:["sunroof"] },
          { id:"interior_color", name:"실내 컬러 패키지", price:200000, excludes:["eco"] },
          { id:"eco", name:"에코패키지", price:200000, excludes:["interior_color"] }
        ],
        inspiration: [
          { id:"sunroof", name:"와이드 선루프", price:590000, excludes:["two_tone"] },
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"parking", name:"파킹어시스트", price:990000 },
          { id:"bose", name:"BOSE 프리미엄 사운드", price:590000 },
          { id:"two_tone", name:"투톤 컬러 루프", price:300000, excludes:["sunroof"] },
          { id:"interior_color", name:"실내 컬러 패키지", price:200000, excludes:["eco"] },
          { id:"eco", name:"에코패키지", price:200000, excludes:["interior_color"] }
        ],
        blackexterior: [
          { id:"sunroof", name:"와이드 선루프", price:590000 },
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"parking", name:"파킹어시스트", price:990000 },
          { id:"bose", name:"BOSE 프리미엄 사운드", price:590000 }
        ],
        nline: [
          { id:"sunroof", name:"와이드 선루프", price:590000, excludes:["two_tone"] },
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"parking", name:"파킹어시스트", price:990000 },
          { id:"bose", name:"BOSE 프리미엄 사운드", price:590000 },
          { id:"two_tone", name:"투톤 컬러 루프", price:300000, excludes:["sunroof"] },
          { id:"alcantara", name:"N Performance · 알칸타라 인테리어 패키지", price:370000 }
        ]
      },

      ev_std: {
        evalue: [
          { id:"hipass", name:"하이패스", price:200000 },
          { id:"comfort2", name:"컴포트2", price:980000 }
        ],
        premium: [
          { id:"smartsense2", name:"현대 스마트센스Ⅱ", price:490000 },
          { id:"seatplus", name:"시트플러스", price:490000 },
          { id:"convenience", name:"컨비니언스", price:750000 },
          { id:"parking", name:"파킹어시스트", price:990000 },
          { id:"hud", name:"헤드업 디스플레이", price:590000 }
        ]
      },

      ev_long: {
        modernplus: [
          { id:"smartsense2", name:"현대 스마트센스Ⅱ", price:490000 },
          { id:"style2", name:"스타일Ⅱ", price:890000 },
          { id:"hipass", name:"하이패스", price:200000 }
        ],
        premium: [
          { id:"smartsense2", name:"현대 스마트센스Ⅱ", price:490000 },
          { id:"seatplus", name:"시트플러스", price:490000 },
          { id:"style2", name:"스타일Ⅱ", price:890000 },
          { id:"convenience", name:"컨비니언스", price:750000 },
          { id:"hud", name:"헤드업 디스플레이", price:590000 },
          { id:"sunroof", name:"와이드 선루프", price:590000 },
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"parking", name:"파킹어시스트", price:990000 }
        ],
        inspiration: [
          { id:"sunroof", name:"와이드 선루프", price:590000, excludes:["two_tone"] },
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"parking", name:"파킹어시스트", price:990000 },
          { id:"bose", name:"BOSE 프리미엄 사운드", price:590000 },
          { id:"two_tone", name:"투톤 컬러 루프", price:300000, excludes:["sunroof"] },
          { id:"interior_color", name:"실내 컬러 패키지", price:200000, excludes:["eco"] },
          { id:"eco", name:"에코패키지", price:200000, excludes:["interior_color"] }
        ],
        blackexterior: [
          { id:"sunroof", name:"와이드 선루프", price:590000 },
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"parking", name:"파킹어시스트", price:990000 },
          { id:"bose", name:"BOSE 프리미엄 사운드", price:590000 }
        ],
        nline: [
          { id:"sunroof", name:"와이드 선루프", price:590000, excludes:["two_tone"] },
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"parking", name:"파킹어시스트", price:990000 },
          { id:"bose", name:"BOSE 프리미엄 사운드", price:590000 },
          { id:"two_tone", name:"투톤 컬러 루프", price:300000, excludes:["sunroof"] },
          { id:"alcantara", name:"N Performance · 알칸타라 인테리어 패키지", price:370000 }
        ]
      }
    },

    evEngineIds: ["ev_std", "ev_long"],
    evAcquisitionTaxReduction: 1400000
  }

  ,

  ioniq5: {
    brand: "HYUNDAI",
    name: "IONIQ 5",
    displayName: "아이오닉 5",
    year: "2027 IONIQ 5 · 현대자동차 공식 가격표 기준",
    type: "중형 전기 SUV",
    image: "ioniq5.png",
    engineHelp: "63.0kWh Standard와 84.0kWh Long Range를 선택합니다. 국비·지자체 보조금은 자동 차감하지 않습니다.",
    trimHelp: "현대자동차 2027 IONIQ 5 공식 가격표의 세제혜택 후 판매가격과 공식 선택품목 가격을 반영합니다.",
    tax: { rate: 0.07, vatIncluded: true },

    engines: [
      { id:"ev_std", name:"Standard 63.0kWh", price:0, sub:"63.0kWh · 2WD" },
      { id:"ev_long", name:"Long Range 84.0kWh", price:0, sub:"84.0kWh · 2WD / HTRAC" }
    ],
    drivesByEngine: {
      ev_std: [{ id:"2wd", name:"2WD", price:0, sub:"후륜구동" }],
      ev_long: [
        { id:"2wd", name:"2WD", price:0, sub:"후륜구동" },
        { id:"htrac", name:"HTRAC", price:2470000, sub:"+2,470,000원" }
      ]
    },
    seats: [{ id:"5", name:"5인승", price:0, sub:"기본" }],

    trimsByEngine: {
      ev_std: [
        { id:"evalue", name:"E-Value +", price:47350000, sub:"세제혜택 후 · 세제혜택 전 49,810,000원" }
      ],
      ev_long: [
        { id:"elite", name:"E-Lite", price:50640000, sub:"세제혜택 후 · 세제혜택 전 53,270,000원" },
        { id:"modern", name:"Modern", price:52900000, sub:"세제혜택 후 · 세제혜택 전 55,650,000원" },
        { id:"premium", name:"Premium", price:58250000, sub:"세제혜택 후 · 세제혜택 전 61,270,000원" },
        { id:"nline", name:"N Line", price:59450000, sub:"세제혜택 후 · 세제혜택 전 62,540,000원" },
        { id:"inspiration", name:"Inspiration", price:61280000, sub:"세제혜택 후 · 세제혜택 전 64,470,000원" }
      ]
    },

    colors: [
      { id:"lucid_blue", name:"루시드 블루 펄", price:0, color:"#536779" },
      { id:"atlas_white", name:"아틀라스 화이트", price:100000, color:"#f0efea" },
      { id:"cyber_gray", name:"사이버 그레이 메탈릭", price:0, color:"#707477" },
      { id:"ecotronic_gray", name:"에코트로닉 그레이 펄", price:0, color:"#565b5d" },
      { id:"digital_teal", name:"디지털 틸그린 펄", price:0, color:"#405d5a" },
      { id:"gravity_gold_matte", name:"그래비티 골드 매트", price:300000, color:"#aaa18e" },
      { id:"celadon_gray_matte", name:"셀라돈 그레이 매트", price:300000, color:"#777c78", excludedTrims:["nline"] },
      { id:"frosted_brown_matte", name:"프로스티드 브라운 매트", price:300000, color:"#74675f", excludedTrims:["nline"] },
      { id:"ultimate_red", name:"얼티메이트 레드 메탈릭", price:0, color:"#852b2c", allowedTrims:["nline"] }
    ],

    optionsByEngine: {
      ev_std: {
        evalue: [
          { id:"smartsense", name:"현대 스마트센스", price:1100000 },
          { id:"comfort_choice", name:"컴포트 초이스", price:1100000 },
          { id:"builtincam_pkg", name:"빌트인 캠 2 패키지", price:600000, requires:"comfort_choice", note:"컴포트 초이스 선택 시" }
        ]
      },
      ev_long: {
        elite: [],
        modern: [
          { id:"comfort", name:"컴포트", price:1500000 },
          { id:"smartsense", name:"현대 스마트센스", price:1100000 },
          { id:"style", name:"스타일", price:1200000 },
          { id:"parking", name:"파킹 어시스트", price:1500000, requires:"style", note:"스타일 선택 시" },
          { id:"hipass", name:"하이패스 패키지", price:250000 },
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000, requires:"hipass", note:"하이패스 패키지 선택 시" }
        ],
        premium: [
          { id:"digital_center", name:"디지털 센터 미러", price:500000 },
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"wheel20", name:"20인치 휠 & 미쉐린 타이어", price:490000 },
          { id:"parking", name:"파킹 어시스트", price:1500000 },
          { id:"platinum", name:"플래티넘", price:1100000 },
          { id:"comfort_plus", name:"컴포트 플러스", price:600000 },
          { id:"visionroof", name:"비전루프", price:740000 }
        ],
        nline: [
          { id:"digital_center", name:"디지털 센터 미러", price:500000 },
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"parking", name:"파킹 어시스트", price:1500000 },
          { id:"digital_side", name:"디지털 사이드 미러", price:1380000, requires:"parking", note:"파킹 어시스트 선택 시" },
          { id:"platinum", name:"플래티넘", price:1100000 },
          { id:"comfort_plus", name:"컴포트 플러스", price:600000 },
          { id:"visionroof", name:"비전루프", price:740000 },
          { id:"alcantara", name:"알칸타라/천연가죽 시트", price:400000 }
        ],
        inspiration: [
          { id:"digital_center", name:"디지털 센터 미러", price:500000 },
          { id:"builtincam", name:"빌트인 캠 2, 증강현실 내비게이션", price:450000 },
          { id:"wheel20", name:"20인치 휠 & 미쉐린 타이어", price:490000 },
          { id:"digital_side", name:"디지털 사이드 미러", price:1380000 },
          { id:"visionroof", name:"비전루프", price:740000 }
        ]
      }
    },

    evEngineIds: ["ev_std", "ev_long"],
    evAcquisitionTaxReduction: 1400000
  }

  ,

  /* =========================================================
     HYUNDAI The new IONIQ 6
     현대자동차 공식 가격표 2026-08-01 기준
     ========================================================= */
  ioniq6: {
    brand: "HYUNDAI",
    name: "The new IONIQ 6",
    displayName: "더 뉴 아이오닉 6",
    year: "2026년 8월 1일 현대자동차 공식 가격표 기준",
    type: "전기 세단",
    image: "ioniq6.png",

    engineHelp:
      "63.0kWh Standard와 84.0kWh Long Range를 선택합니다. 구매보조금은 지역과 시점에 따라 달라지므로 자동 차감하지 않습니다.",
    trimHelp:
      "현대자동차 공식 가격표의 세제혜택 후 판매가격을 사용합니다. IONIQ 6 N은 별도 고성능 차종이므로 포함하지 않습니다.",

    tax: { rate: 0.07, vatIncluded: true },

    engines: [
      { id:"ev_std", name:"Standard 63.0kWh", price:0, sub:"63.0kWh · 2WD" },
      { id:"ev_long", name:"Long Range 84.0kWh", price:0, sub:"84.0kWh · 2WD / HTRAC" }
    ],

    drivesByEngine: {
      ev_std: [
        { id:"2wd", name:"2WD", price:0, sub:"후륜구동" }
      ],
      ev_long: [
        { id:"2wd", name:"2WD", price:0, sub:"후륜구동" },
        { id:"htrac", name:"HTRAC", price:2470000, sub:"+2,470,000원 · 전륜 모터 추가" }
      ]
    },

    seats: [
      { id:"5", name:"5인승", price:0, sub:"기본" }
    ],

    trimsByEngine: {
      ev_std: [
        { id:"evalue", name:"E-Value +", price:48560000, sub:"세제혜택 후 · 세제혜택 전 51,090,000원" },
        { id:"exclusive", name:"Exclusive", price:50950000, sub:"세제혜택 후 · 세제혜택 전 53,600,000원" },
        { id:"prestige", name:"Prestige", price:55530000, sub:"세제혜택 후 · 세제혜택 전 58,420,000원" }
      ],

      ev_long: [
        { id:"elite", name:"E-Lite", price:50640000, sub:"세제혜택 후 · 세제혜택 전 53,270,000원" },
        { id:"exclusive", name:"Exclusive", price:55150000, sub:"세제혜택 후 · 세제혜택 전 58,020,000원" },
        { id:"exclusive_nline", name:"Exclusive N Line", price:57450000, sub:"세제혜택 후 · 세제혜택 전 60,440,000원" },
        { id:"prestige", name:"Prestige", price:59730000, sub:"세제혜택 후 · 세제혜택 전 62,830,000원" },
        { id:"prestige_nline", name:"Prestige N Line", price:61320000, sub:"세제혜택 후 · 세제혜택 전 64,510,000원" }
      ]
    },

    colors: [
      { id:"abyss_black", name:"어비스 블랙 펄", price:0, color:"#111214" },
      { id:"serenity_white", name:"세레니티 화이트 펄", price:0, color:"#f1f0eb" },
      { id:"nocturne_gray", name:"녹턴 그레이 메탈릭", price:0, color:"#62666a" },
      { id:"biophilic_blue", name:"바이오필릭 블루 펄", price:0, color:"#354858" },
      { id:"gravity_gold_matte", name:"그래비티 골드 매트", price:300000, color:"#aaa18e" },
      { id:"nocturne_gray_matte", name:"녹턴 그레이 매트", price:300000, color:"#747777" },
      { id:"ultimate_red", name:"얼티메이트 레드 메탈릭", price:0, color:"#842b2e", allowedTrims:["exclusive_nline","prestige_nline"] }
    ],

    optionsByEngine: {
      ev_std: {
        evalue: [
          { id:"builtincam", name:"빌트인 캠 2 Plus", price:600000 },
          { id:"comfort_choice", name:"컴포트 초이스", price:1200000 },
          { id:"smartsense1", name:"현대 스마트센스Ⅰ", price:1480000 },
          { id:"film1", name:"H Genuine Accessories · 차량 보호 필름 Ⅰ", price:380000 },
          { id:"film2", name:"H Genuine Accessories · 차량 보호 필름 Ⅱ", price:400000 }
        ],

        exclusive: [
          { id:"builtincam", name:"빌트인 캠 2 Plus", price:600000 },
          { id:"sunroof", name:"와이드 선루프", price:640000 },
          { id:"wheel20", name:"20인치 휠 & 피렐리 타이어", price:590000 },
          { id:"convenience", name:"컨비니언스", price:690000 },
          { id:"smartsense2", name:"현대 스마트센스Ⅱ", price:1510000 },
          { id:"parking", name:"파킹 어시스트", price:800000 },
          { id:"comfort_plus", name:"컴포트 플러스", price:680000 },
          { id:"platinum", name:"플래티넘", price:710000 },
          { id:"film1", name:"H Genuine Accessories · 차량 보호 필름 Ⅰ", price:380000 },
          { id:"film2", name:"H Genuine Accessories · 차량 보호 필름 Ⅱ", price:400000 }
        ],

        prestige: [
          { id:"builtincam", name:"빌트인 캠 2 Plus", price:600000 },
          { id:"digital_side", name:"디지털 사이드 미러", price:1380000 },
          { id:"hightech", name:"하이테크 플러스", price:950000 },
          { id:"film1", name:"H Genuine Accessories · 차량 보호 필름 Ⅰ", price:380000 },
          { id:"film2", name:"H Genuine Accessories · 차량 보호 필름 Ⅱ", price:400000 }
        ]
      },

      ev_long: {
        elite: [
          { id:"wheel20", name:"20인치 휠 & 피렐리 타이어", price:590000 },
          { id:"film1", name:"H Genuine Accessories · 차량 보호 필름 Ⅰ", price:380000 },
          { id:"film2", name:"H Genuine Accessories · 차량 보호 필름 Ⅱ", price:400000 }
        ],

        exclusive: [
          { id:"builtincam", name:"빌트인 캠 2 Plus", price:600000 },
          { id:"sunroof", name:"와이드 선루프", price:640000 },
          { id:"wheel20", name:"20인치 휠 & 피렐리 타이어", price:590000 },
          { id:"convenience", name:"컨비니언스", price:690000 },
          { id:"smartsense2", name:"현대 스마트센스Ⅱ", price:1510000 },
          { id:"parking", name:"파킹 어시스트", price:800000 },
          { id:"comfort_plus", name:"컴포트 플러스", price:680000 },
          { id:"platinum", name:"플래티넘", price:710000 },
          { id:"film1", name:"H Genuine Accessories · 차량 보호 필름 Ⅰ", price:380000 },
          { id:"film2", name:"H Genuine Accessories · 차량 보호 필름 Ⅱ", price:400000 }
        ],

        exclusive_nline: [
          { id:"builtincam", name:"빌트인 캠 2 Plus", price:600000 },
          { id:"sunroof", name:"와이드 선루프", price:640000 },
          { id:"wheel20", name:"20인치 휠 & 피렐리 타이어", price:590000 },
          { id:"convenience", name:"컨비니언스", price:690000 },
          { id:"smartsense2", name:"현대 스마트센스Ⅱ", price:1510000 },
          { id:"parking", name:"파킹 어시스트", price:800000 },
          { id:"comfort_plus", name:"컴포트 플러스", price:680000 },
          { id:"film1", name:"H Genuine Accessories · 차량 보호 필름 Ⅰ", price:380000 },
          { id:"film2", name:"H Genuine Accessories · 차량 보호 필름 Ⅱ", price:400000 }
        ],

        prestige: [
          { id:"builtincam", name:"빌트인 캠 2 Plus", price:600000 },
          { id:"wheel20", name:"20인치 휠 & 피렐리 타이어", price:590000 },
          { id:"digital_side", name:"디지털 사이드 미러", price:1380000 },
          { id:"hightech", name:"하이테크 플러스", price:950000 },
          { id:"film1", name:"H Genuine Accessories · 차량 보호 필름 Ⅰ", price:380000 },
          { id:"film2", name:"H Genuine Accessories · 차량 보호 필름 Ⅱ", price:400000 }
        ],

        prestige_nline: [
          { id:"builtincam", name:"빌트인 캠 2 Plus", price:600000 },
          { id:"sunroof", name:"와이드 선루프", price:640000 },
          { id:"wheel20", name:"20인치 휠 & 피렐리 타이어", price:590000 },
          { id:"digital_side", name:"디지털 사이드 미러", price:1380000 },
          { id:"hightech", name:"하이테크 플러스", price:950000 },
          { id:"suede", name:"스웨이드 내장재", price:300000, requires:"hightech", note:"하이테크 플러스 선택 시" },
          { id:"alcantara", name:"알칸타라/천연가죽 시트", price:400000 },
          { id:"film1", name:"H Genuine Accessories · 차량 보호 필름 Ⅰ", price:380000 },
          { id:"film2", name:"H Genuine Accessories · 차량 보호 필름 Ⅱ", price:400000 }
        ]
      }
    },

    evEngineIds: ["ev_std", "ev_long"],
    evAcquisitionTaxReduction: 1400000
  }

  ,

  /* =========================================================
     HYUNDAI 2027 IONIQ 9
     현대자동차 공식 가격표 기준
     현 모델 출시일: 2026-03-05 / 보조금 표: 2026-08-01
     ========================================================= */
  ioniq9: {
    brand: "HYUNDAI",
    name: "IONIQ 9",
    displayName: "아이오닉 9",
    year: "2027 IONIQ 9 · 현대자동차 공식 가격표 기준",
    type: "대형 전기 SUV",
    image: "ioniq9.png",

    engineHelp:
      "110.3kWh 배터리의 IONIQ 9입니다. 2WD, 항속형 AWD(HTRACⅠ), 성능형 AWD(HTRACⅡ)를 선택할 수 있습니다.",
    trimHelp:
      "7인승과 6인승의 공식 판매가격이 서로 달라 인승 선택에 따라 Exclusive / Prestige / Calligraphy 가격이 자동 변경됩니다. 국비·지자체 보조금은 자동 차감하지 않습니다.",

    tax: { rate: 0.07, vatIncluded: true },

    engines: [
      { id:"ev110", name:"110.3kWh Electric", price:0, sub:"E-GMP · 110.3kWh 리튬이온 배터리" }
    ],

    drivesByEngine: {
      ev110: [
        { id:"2wd", name:"2WD", price:0, sub:"항속형 후륜구동 · 160kW" },
        { id:"htrac1", name:"HTRACⅠ", price:2800000, sub:"항속형 AWD · 66kW 전륜 모터 추가" },
        { id:"htrac2", name:"HTRACⅡ", price:3700000, sub:"성능형 AWD · 157kW 전륜 모터 추가" }
      ]
    },

    seats: [
      { id:"7", name:"7인승", price:0, sub:"2열 6:4 분할 폴딩 시트" },
      { id:"6", name:"6인승", price:0, sub:"2열 스위블링 독립 시트" }
    ],

    trimsBySeat: {
      "7": [
        { id:"exclusive", name:"Exclusive", price:67590000, sub:"세제혜택 후 · 세제혜택 전 71,100,000원" },
        { id:"prestige", name:"Prestige", price:73250000, sub:"세제혜택 후 · 세제혜택 전 77,050,000원" },
        { id:"calligraphy", name:"Calligraphy", price:78110000, sub:"세제혜택 후 · 세제혜택 전 82,170,000원" }
      ],
      "6": [
        { id:"exclusive", name:"Exclusive", price:68170000, sub:"세제혜택 후 · 세제혜택 전 71,710,000원" },
        { id:"prestige", name:"Prestige", price:73740000, sub:"세제혜택 후 · 세제혜택 전 77,570,000원" },
        { id:"calligraphy", name:"Calligraphy", price:79600000, sub:"세제혜택 후 · 세제혜택 전 83,740,000원" }
      ]
    },

    colors: [
      { id:"abyss_black", name:"어비스 블랙 펄", price:0, color:"#111214" },
      { id:"serenity_white", name:"세레니티 화이트 펄", price:0, color:"#f2f1ec" },
      { id:"nocturne_gray", name:"녹턴 그레이 메탈릭", price:0, color:"#62666a" },
      { id:"celadon_gray", name:"셀라돈 그레이 메탈릭", price:0, color:"#7c827e" },
      { id:"ionosphere_green", name:"이오노스피어 그린 펄", price:0, color:"#52635e" },
      { id:"nocturne_gray_matte", name:"녹턴 그레이 매트", price:300000, color:"#747777" },
      { id:"celadon_gray_matte", name:"셀라돈 그레이 매트", price:300000, color:"#888d88", allowedTrims:["calligraphy"] }
    ],

    optionsBySeat: {
      "7": {
        exclusive: [
          { id:"parking", name:"파킹 어시스트", price:1350000 },
          { id:"bose", name:"BOSE 프리미엄 사운드", price:1190000 },
          { id:"convenience7", name:"7인승 컨비니언스 플러스", price:600000 },
          { id:"sunroof", name:"파노라마 선루프", price:1190000 },
          { id:"builtincam", name:"빌트인 캠 2 + 증강현실 내비게이션", price:590000 },
          { id:"sidestep", name:"H Genuine Accessories · 사이드 스텝", price:450000 }
        ],
        prestige: [
          { id:"wheel21", name:"21인치 휠 & 타이어", price:1000000 },
          { id:"platinum", name:"플래티넘", price:1100000 },
          { id:"comfortplus", name:"컴포트 플러스", price:630000 },
          { id:"digital_side", name:"컴팩트 디지털 사이드 미러", price:1380000 },
          { id:"sunroof", name:"파노라마 선루프", price:1190000 },
          { id:"builtincam", name:"빌트인 캠 2 + 증강현실 내비게이션", price:590000 },
          { id:"sidestep", name:"H Genuine Accessories · 사이드 스텝", price:450000 }
        ],
        calligraphy: [
          { id:"wheel19", name:"19인치 휠 & 타이어", price:-1000000, excludes:["blackink"] },
          { id:"digital_side", name:"컴팩트 디지털 사이드 미러", price:1380000 },
          { id:"blackink", name:"블랙잉크", price:400000, excludes:["wheel19"] },
          { id:"sunroof", name:"파노라마 선루프", price:1190000 },
          { id:"builtincam", name:"빌트인 캠 2 + 증강현실 내비게이션", price:590000 },
          { id:"sidestep", name:"H Genuine Accessories · 사이드 스텝", price:450000 }
        ]
      },

      "6": {
        exclusive: [
          { id:"parking", name:"파킹 어시스트", price:1350000 },
          { id:"bose", name:"BOSE 프리미엄 사운드", price:1190000 },
          { id:"convenience6", name:"6인승 컨비니언스 플러스", price:400000 },
          { id:"relax1_2", name:"1열 릴랙션 컴포트 + 2열 프리미엄 릴랙션 시트", price:1300000 },
          { id:"sunroof", name:"파노라마 선루프", price:1190000 },
          { id:"builtincam", name:"빌트인 캠 2 + 증강현실 내비게이션", price:590000 },
          { id:"sidestep", name:"H Genuine Accessories · 사이드 스텝", price:450000 }
        ],
        prestige: [
          { id:"wheel21", name:"21인치 휠 & 타이어", price:1000000 },
          { id:"platinum", name:"플래티넘", price:1100000 },
          { id:"comfortplus", name:"컴포트 플러스", price:630000 },
          { id:"digital_side", name:"컴팩트 디지털 사이드 미러", price:1380000 },
          { id:"relax2", name:"2열 프리미엄 릴랙션 시트", price:1000000 },
          { id:"sunroof", name:"파노라마 선루프", price:1190000 },
          { id:"builtincam", name:"빌트인 캠 2 + 증강현실 내비게이션", price:590000 },
          { id:"sidestep", name:"H Genuine Accessories · 사이드 스텝", price:450000 }
        ],
        calligraphy: [
          { id:"wheel19", name:"19인치 휠 & 타이어", price:-1000000, excludes:["blackink"] },
          { id:"digital_side", name:"컴팩트 디지털 사이드 미러", price:1380000 },
          { id:"bodycare2", name:"2열 다이내믹 바디케어 시트", price:800000 },
          { id:"blackink", name:"블랙잉크", price:400000, excludes:["wheel19"] },
          { id:"sunroof", name:"파노라마 선루프", price:1190000 },
          { id:"builtincam", name:"빌트인 캠 2 + 증강현실 내비게이션", price:590000 },
          { id:"sidestep", name:"H Genuine Accessories · 사이드 스텝", price:450000 },
          { id:"rear_entertainment", name:"H Genuine Accessories · 후석 스마트 엔터테인먼트 시스템", price:2770000 }
        ]
      }
    },

    evEngineIds: ["ev110"],
    evAcquisitionTaxReduction: 1400000
  }
,
gv60: {
  brand: "GENESIS",
  name: "GV60",
  displayName: "GV60",
  year: "현행 GV60 · Genesis 공식 BTO 2026-08 재검증",
  type: "프리미엄 전기 SUV",
  image: "gv60.png",

  engineHelp:
    "현행 GV60은 스탠다드 2WD / 스탠다드 AWD / 퍼포먼스 AWD로 운영됩니다.",

  trimHelp:
    "제네시스 공식 BTO 및 공식 발표 판매가격을 기준으로 세제혜택 후 가격을 반영했습니다. 퍼포먼스 AWD는 2026년 강화된 효율기준에 따라 친환경차 세제혜택 대상에서 제외될 수 있어 최종 계약가격을 공식 BTO에서 재확인하세요.",

  tax: { rate: 0.07, vatIncluded: true },

  engines: [
    {
      id: "std2wd",
      name: "Standard 2WD",
      price: 0,
      sub: "84kWh · 168kW · 세제혜택 후 64,900,000원"
    },
    {
      id: "stdawd",
      name: "Standard AWD",
      price: 0,
      sub: "84kWh · 234kW · 세제혜택 후 68,510,000원"
    },
    {
      id: "perfawd",
      name: "Performance AWD",
      price: 0,
      sub: "84kWh · 최대 360kW(부스트) · 공식 판매가격 72,880,000원"
    }
  ],

  drivesByEngine: {
    std2wd: [{ id: "2wd", name: "2WD", price: 0, sub: "후륜구동" }],
    stdawd: [{ id: "awd", name: "AWD", price: 0, sub: "스탠다드 AWD" }],
    perfawd: [{ id: "awd", name: "AWD", price: 0, sub: "퍼포먼스 AWD" }]
  },

  seats: [
    { id: "5", name: "5인승", price: 0, sub: "기본" }
  ],

  trimsByEngine: {
    std2wd: [
      { id: "standard", name: "Standard 2WD", price: 64900000, sub: "공식 세제혜택 후 판매가격" }
    ],
    stdawd: [
      { id: "standard", name: "Standard AWD", price: 68510000, sub: "공식 세제혜택 후 판매가격" }
    ],
    perfawd: [
      { id: "performance", name: "Performance AWD", price: 72880000, sub: "공식 판매가격" }
    ]
  },

  colors: [
    { id: "uyuni", name: "우유니 화이트", price: 0, color: "#f2f2f0" },
    { id: "savile", name: "세빌 실버", price: 0, color: "#a5a7a8" },
    { id: "makalu", name: "마칼루 그레이", price: 0, color: "#5d6163" },
    { id: "vik", name: "비크 블랙", price: 0, color: "#111214" },
    { id: "ceres", name: "세레스 블루", price: 0, color: "#38536a" },
    { id: "tromso", name: "트롬소 그린", price: 0, color: "#40534c" }
  ],

  /*
    이전 데이터의 '디지털 비전 패키지 180만원 / 컴포트 120만원 /
    퍼포먼스 7,348만원'은 현행 공식 BTO와 불일치하여 제거했습니다.
    GV60 선택 패키지는 BTO 조합·세제 적용에 따라 최종가격이 달라지므로
    현재 이 파일에는 공식 판매가격이 확정된 파워트레인 기본금액만 계산합니다.
  */
  optionsByEngine: {
    std2wd: { standard: [] },
    stdawd: { standard: [] },
    perfawd: { performance: [] }
  },

  evEngineIds: ["std2wd", "stdawd"],
  evAcquisitionTaxReduction: 1400000
},
electrified_gv70:{
  brand:"GENESIS",
  name:"Electrified GV70",
  displayName:"Electrified GV70",
  year:"2026-08 Genesis 공식 BTO 기준",
  type:"프리미엄 전기 SUV",
  image:"electrified-gv70.png",
  engineHelp:"전기모터 + AWD가 기본입니다. 제네시스 공식 BTO의 세제혜택 후 예상 견적 금액을 기준으로 계산합니다.",
  trimHelp:"Electrified GV70은 단일 기본 모델에 휠·패키지·선택품목을 조합하는 BTO 구조입니다. 국비·지자체 보조금은 자동 차감하지 않습니다.",
  tax:{rate:0.07,vatIncluded:true},
  engines:[{id:"ev",name:"전기모터",price:0,sub:"듀얼 모터"}],
  drivesByEngine:{ev:[{id:"awd",name:"AWD",price:0,sub:"기본"}]},
  seats:[{id:"5",name:"5인승",price:0,sub:"기본"}],
  trimsByEngine:{ev:[
    {id:"base19",name:"기본 모델 · 19인치",price:75800000,sub:"공식 BTO 세제혜택 후 예상가격"},
    {id:"base20",name:"기본 모델 · 20인치",price:76560000,sub:"공식 BTO 세제혜택 후 예상가격"}
  ]},
  colors:[
    {id:"uyuni",name:"우유니 화이트",price:0,color:"#f1f1ee"},
    {id:"vik",name:"비크 블랙",price:0,color:"#111214"}
  ],
  optionsByEngine:{ev:{
    base19:[
      {id:"popular2",name:"파퓰러 패키지 II",price:6600000},
      {id:"prestige",name:"프레스티지 패키지",price:11600000},
      {id:"hud",name:"헤드업 디스플레이",price:1300000},
      {id:"sunroof",name:"파노라마 선루프",price:1400000},
      {id:"convenience",name:"컨비니언스 패키지",price:2200000},
      {id:"drive1",name:"드라이빙 어시스턴스 패키지 I",price:1950000},
      {id:"drive2",name:"드라이빙 어시스턴스 패키지 II",price:2000000},
      {id:"rearcomfort",name:"2열 컴포트 패키지",price:1000000},
      {id:"bang",name:"뱅앤올룹슨 사운드 패키지",price:1700000},
      {id:"builtincam",name:"빌트인 캠 패키지",price:850000}
    ],
    base20:[
      {id:"popular2",name:"파퓰러 패키지 II",price:6600000},
      {id:"prestige",name:"프레스티지 패키지",price:11600000},
      {id:"hud",name:"헤드업 디스플레이",price:1300000},
      {id:"sunroof",name:"파노라마 선루프",price:1400000},
      {id:"convenience",name:"컨비니언스 패키지",price:2200000},
      {id:"drive1",name:"드라이빙 어시스턴스 패키지 I",price:1950000},
      {id:"drive2",name:"드라이빙 어시스턴스 패키지 II",price:2000000},
      {id:"rearcomfort",name:"2열 컴포트 패키지",price:1000000},
      {id:"bang",name:"뱅앤올룹슨 사운드 패키지",price:1700000},
      {id:"builtincam",name:"빌트인 캠 패키지",price:850000}
    ]
  }},
  evEngineIds:["ev"],
  evAcquisitionTaxReduction:1400000
},
electrified_g80:{
  brand:"GENESIS",
  name:"Electrified G80",
  displayName:"Electrified G80",
  year:"2027 · Genesis 공식 BTO 2026-08 기준",
  type:"프리미엄 전기 세단",
  image:"electrified-g80.png",
  engineHelp:"전기모터와 AWD가 기본입니다. 19인치 디쉬 타입 휠이 기본 적용됩니다.",
  trimHelp:"제네시스 공식 BTO의 세제혜택 후 기본 판매가격을 기준으로 계산합니다. 국비·지자체 보조금은 자동 차감하지 않습니다.",
  tax:{rate:0.07,vatIncluded:true},
  engines:[{id:"ev",name:"전기모터",price:0,sub:"듀얼 모터"}],
  drivesByEngine:{ev:[{id:"awd",name:"AWD",price:0,sub:"기본 · DAS 적용"}]},
  seats:[{id:"5",name:"5인승",price:0,sub:"기본"}],
  trimsByEngine:{ev:[
    {id:"base",name:"기본 모델 · 19인치",price:84790000,sub:"세제혜택 후 · 세제혜택 전 89,080,000원"}
  ]},
  colors:[
    {id:"uyuni",name:"우유니 화이트",price:0,color:"#f2f1ed"},
    {id:"vik",name:"비크 블랙",price:0,color:"#111214"},
    {id:"makalu_gray",name:"마칼루 그레이",price:0,color:"#62676b"},
    {id:"tasman_blue",name:"태즈먼 블루",price:0,color:"#41586c"}
  ],
  optionsByEngine:{ev:{base:[
    {id:"signature",name:"시그니쳐 디자인 셀렉션",price:3000000},
    {id:"popular",name:"파퓰러 패키지",price:5400000,note:"HUD + 드라이빙 어시스턴스 I/II + 빌트인 캠 패키지"},
    {id:"rear_steer",name:"후륜 조향 시스템",price:1500000},
    {id:"convenience",name:"컨비니언스 패키지",price:1600000},
    {id:"convenience_rear",name:"컨비니언스 패키지 + 2열 컴포트 패키지",price:6100000,excludes:["convenience"]},
    {id:"builtincam",name:"빌트인 캠 패키지",price:850000,note:"빌트인 캠 2 + 증강현실 내비게이션"}
  ]}},
  evEngineIds:["ev"],
  evAcquisitionTaxReduction:1400000
},
g70:{
 brand:"GENESIS",name:"G70",displayName:"G70",year:"2026-08 Genesis 공식 BTO 기준",type:"럭셔리 스포츠 세단",image:"g70.png",
 engineHelp:"제네시스 공식 BTO 기준 가솔린 2.5 터보 / 가솔린 3.3 터보를 선택합니다.",
 trimHelp:"기본가격 45,000,000원(2.5T 2WD 기본모델)에서 엔진·구동·스포츠 패키지·선택품목을 더하는 BTO 구조입니다.",
 tax:{rate:0.07,vatIncluded:true},
 engines:[{id:"gas25",name:"가솔린 2.5 터보",price:0,sub:"2,497cc · 304PS"},{id:"gas33",name:"가솔린 3.3 터보",price:4950000,sub:"3,342cc · 370PS · +4,950,000원"}],
 drivesByEngine:{gas25:[{id:"2wd",name:"2WD (후륜)",price:0,sub:"기본"},{id:"awd",name:"AWD",price:2470000,sub:"+2,470,000원"}],gas33:[{id:"2wd",name:"2WD (후륜)",price:0,sub:"기본"},{id:"awd",name:"AWD",price:2470000,sub:"+2,470,000원"}]},
 seats:[{id:"5",name:"5인승",price:0,sub:"기본"}],
 trimsByEngine:{gas25:[{id:"base",name:"기본모델",price:45000000,sub:"18인치 휠 기본"},{id:"sport",name:"스포츠 패키지",price:48560000,sub:"+3,560,000원"}],gas33:[{id:"base",name:"기본모델",price:45000000,sub:"3.3T 추가금은 엔진 선택에서 반영"},{id:"sport",name:"스포츠 패키지",price:48560000,sub:"+3,560,000원"}]},
 colors:[{id:"vatna_gray",name:"바트나 그레이",price:0,color:"#6d7070"},{id:"uyuni_white",name:"우유니 화이트",price:0,color:"#f1f1ed"},{id:"vik_black",name:"비크 블랙",price:0,color:"#111214"}],
 optionsByEngine:{
  gas25:{
   base:[{id:"popular",name:"파퓰러 패키지",price:4100000},{id:"sunroof",name:"와이드 선루프",price:790000},{id:"ecs",name:"전자제어 서스펜션",price:990000},{id:"convenience",name:"컨비니언스 패키지",price:1290000,excludes:["popular"]},{id:"hightech",name:"하이테크 패키지",price:1580000,excludes:["popular"]},{id:"lexicon",name:"렉시콘 사운드 패키지",price:1190000},{id:"drive",name:"드라이빙 어시스턴스 패키지",price:1680000,excludes:["popular"]},{id:"interior",name:"천연가죽/시그니쳐 디자인 셀렉션",price:2370000}],
   sport:[{id:"popular",name:"파퓰러 패키지",price:4100000},{id:"sunroof",name:"와이드 선루프",price:790000},{id:"convenience",name:"컨비니언스 패키지",price:1290000,excludes:["popular"]},{id:"hightech",name:"하이테크 패키지",price:1580000,excludes:["popular"]},{id:"lexicon",name:"렉시콘 사운드 패키지",price:1190000},{id:"drive",name:"드라이빙 어시스턴스 패키지",price:1680000,excludes:["popular"]},{id:"interior",name:"천연가죽/시그니쳐 디자인 셀렉션",price:2370000}]
  },
  gas33:{
   base:[{id:"popular",name:"파퓰러 패키지",price:4100000},{id:"sunroof",name:"와이드 선루프",price:790000},{id:"convenience",name:"컨비니언스 패키지",price:1290000,excludes:["popular"]},{id:"hightech",name:"하이테크 패키지",price:1580000,excludes:["popular"]},{id:"lexicon",name:"렉시콘 사운드 패키지",price:1190000},{id:"drive",name:"드라이빙 어시스턴스 패키지",price:1680000,excludes:["popular"]},{id:"interior",name:"천연가죽/시그니쳐 디자인 셀렉션",price:2370000}],
   sport:[{id:"popular",name:"파퓰러 패키지",price:4100000},{id:"sunroof",name:"와이드 선루프",price:790000},{id:"convenience",name:"컨비니언스 패키지",price:1290000,excludes:["popular"]},{id:"hightech",name:"하이테크 패키지",price:1580000,excludes:["popular"]},{id:"lexicon",name:"렉시콘 사운드 패키지",price:1190000},{id:"drive",name:"드라이빙 어시스턴스 패키지",price:1680000,excludes:["popular"]},{id:"interior",name:"천연가죽/시그니쳐 디자인 셀렉션",price:2370000}]
  }
 }
},
g90:{
  brand:"GENESIS",
  name:"G90",
  displayName:"G90",
  year:"2026-08 Genesis 공식 BTO 기준",
  type:"플래그십 럭셔리 세단",
  image:"g90.png",
  engineHelp:"가솔린 3.5 터보 또는 가솔린 3.5 터보 48V 일렉트릭 슈퍼차저를 선택합니다.",
  trimHelp:"제네시스 공식 BTO의 기본가격 97,480,000원을 기준으로 엔진·구동·휠·시트·패키지를 더하는 구조입니다. Long Wheel Base는 별도 모델이라 이번 G90 일반형에는 포함하지 않았습니다.",
  tax:{rate:0.07,vatIncluded:true},

  engines:[
    {id:"gas35",name:"가솔린 3.5 터보",price:0,sub:"3,470cc · 380PS"},
    {id:"gas35esc",name:"가솔린 3.5 터보 48V 일렉트릭 슈퍼차저",price:6000000,sub:"3,470cc · 415PS · +6,000,000원"}
  ],

  drivesByEngine:{
    gas35:[
      {id:"2wd",name:"2WD",price:0,sub:"후륜구동 · 기본"},
      {id:"awd",name:"AWD",price:3500000,sub:"+3,500,000원"}
    ],
    gas35esc:[
      {id:"2wd",name:"2WD",price:0,sub:"후륜구동 · 기본"},
      {id:"awd",name:"AWD",price:3500000,sub:"+3,500,000원"}
    ]
  },

  seats:[
    {id:"5",name:"스탠다드 시트 (5인승)",price:0,sub:"기본"},
    {id:"4",name:"퍼스트 클래스 VIP 시트 (4인승)",price:3400000,sub:"+3,400,000원"}
  ],

  trimsByEngine:{
    gas35:[{id:"base",name:"기본 모델",price:97480000,sub:"개별소비세 5.0% 기준"}],
    gas35esc:[{id:"base",name:"기본 모델",price:97480000,sub:"엔진 추가금은 엔진 선택에서 반영"}]
  },

  colors:[
    {id:"uyuni",name:"우유니 화이트",price:0,color:"#f1f1ed"},
    {id:"vik",name:"비크 블랙",price:0,color:"#111214"},
    {id:"maui",name:"마우이 블랙",price:0,color:"#151516"}
  ],

  optionsByEngine:{
    gas35:{base:[
      {id:"wheel21",name:"21인치 다이아몬드 컷팅 휠",price:1200000},
      {id:"signature",name:"시그니쳐 디자인 셀렉션",price:5500000},
      {id:"popular",name:"파퓰러 컬렉션",price:5600000,note:"앞좌석 컴포트 + 뒷좌석 컴포트 I"},
      {id:"popular_rear2",name:"파퓰러 컬렉션 + 뒷좌석 컴포트 패키지 II",price:8000000,excludes:["popular"]},
      {id:"premium",name:"프리미엄 컬렉션",price:17100000,excludes:["popular","popular_rear2"]},
      {id:"prestige",name:"프레스티지 컬렉션",price:23000000,excludes:["popular","popular_rear2","premium"]},
      {id:"rearcomfort1",name:"뒷좌석 컴포트 패키지 I",price:3500000},
      {id:"airsuspension",name:"멀티 챔버 에어 서스펜션",price:3500000},
      {id:"builtincam",name:"빌트인 캠 패키지",price:800000}
    ]},
    gas35esc:{base:[
      {id:"wheel21",name:"21인치 다이아몬드 컷팅 휠",price:1200000},
      {id:"signature",name:"시그니쳐 디자인 셀렉션",price:5500000},
      {id:"popular",name:"파퓰러 컬렉션",price:5600000,note:"앞좌석 컴포트 + 뒷좌석 컴포트 I"},
      {id:"popular_rear2",name:"파퓰러 컬렉션 + 뒷좌석 컴포트 패키지 II",price:8000000,excludes:["popular"]},
      {id:"premium",name:"프리미엄 컬렉션",price:17100000,excludes:["popular","popular_rear2"]},
      {id:"prestige",name:"프레스티지 컬렉션",price:23000000,excludes:["popular","popular_rear2","premium"]},
      {id:"rearcomfort1",name:"뒷좌석 컴포트 패키지 I",price:3500000},
      {id:"airsuspension",name:"멀티 챔버 에어 서스펜션",price:3500000},
      {id:"builtincam",name:"빌트인 캠 패키지",price:800000}
    ]}
  }
}
  ,

  /* =========================================================
     GENESIS GV70
     Genesis 공식 BTO 2026-08 기준
     ========================================================= */
  gv70: {
    brand: "GENESIS",
    name: "GV70",
    displayName: "GV70",
    year: "2026년 8월 Genesis 공식 BTO 기준",
    type: "럭셔리 중형 SUV",
    image: "gv70.png",

    engineHelp:
      "가솔린 2.5 터보와 가솔린 3.5 터보를 선택할 수 있습니다.",

    trimHelp:
      "GV70은 제네시스 BTO 방식입니다. 기본가격에 엔진, 구동, 그래파이트 패키지, 내장/휠, 파퓰러 패키지와 선택품목을 조합합니다.",

    tax: {
      rate: 0.07,
      vatIncluded: true
    },

    engines: [
      {
        id: "gas25",
        name: "가솔린 2.5 터보",
        price: 0,
        sub: "2,497cc · 304PS · 43.0kgf·m"
      },
      {
        id: "gas35",
        name: "가솔린 3.5 터보",
        price: 5500000,
        sub: "3,470cc · 380PS · 54.0kgf·m · +5,500,000원"
      }
    ],

    drivesByEngine: {
      gas25: [
        {
          id: "2wd",
          name: "2WD (후륜)",
          price: 0,
          sub: "기본"
        },
        {
          id: "awd",
          name: "AWD",
          price: 3000000,
          sub: "터레인 모드 포함 · +3,000,000원"
        }
      ],

      gas35: [
        {
          id: "2wd",
          name: "2WD (후륜)",
          price: 0,
          sub: "기본"
        },
        {
          id: "awd",
          name: "AWD",
          price: 3000000,
          sub: "터레인 모드 포함 · +3,000,000원"
        }
      ]
    },

    seats: [
      {
        id: "5",
        name: "5인승",
        price: 0,
        sub: "기본"
      }
    ],

    trimsByEngine: {
      gas25: [
        {
          id: "base",
          name: "기본 모델",
          price: 54730000,
          sub: "2.5T · 2WD · 19인치 기본 구성"
        }
      ],

      gas35: [
        {
          id: "base",
          name: "기본 모델",
          price: 54730000,
          sub: "3.5T 추가금은 엔진 선택에서 반영"
        }
      ]
    },

    colors: [
      {
        id: "uyuni_white",
        name: "우유니 화이트",
        price: 0,
        color: "#f2f1ed"
      },
      {
        id: "savile_silver",
        name: "세빌 실버",
        price: 0,
        color: "#a4a6a6"
      },
      {
        id: "makalu_gray",
        name: "마칼루 그레이",
        price: 0,
        color: "#606467"
      },
      {
        id: "vik_black",
        name: "비크 블랙",
        price: 0,
        color: "#111214"
      },
      {
        id: "tromso_green",
        name: "트롬소 그린",
        price: 0,
        color: "#3d514b"
      },
      {
        id: "ceres_blue",
        name: "세레스 블루",
        price: 0,
        color: "#355269"
      },
      {
        id: "bering_blue",
        name: "베링 블루",
        price: 0,
        color: "#486476"
      }
    ],

    extraChoiceGroups: [
      {
        id: "graphite",
        step: "3",
        position: "beforeColor",
        title: "패키지를 선택해주세요",
        help: "현재 공식 GV70 BTO의 기본 모델 또는 그래파이트 패키지를 선택합니다.",
        summaryLabel: "패키지",
        items: [
          {
            id: "standard",
            name: "기본 모델",
            price: 0,
            sub: "기본 외장/내장 구성"
          },
          {
            id: "graphite",
            name: "그래파이트 패키지",
            price: 3100000,
            sub: "+3,100,000원"
          }
        ]
      },

      {
        id: "wheel",
        step: "5",
        position: "afterColor",
        title: "휠 & 타이어를 선택해주세요",
        help: "공식 BTO에서 가격이 명확히 확인되는 휠 구성을 반영했습니다.",
        summaryLabel: "휠 & 타이어",
        items: [
          {
            id: "19",
            name: "19인치 다크 하이퍼 실버 휠",
            price: 0,
            sub: "기본"
          },
          {
            id: "21",
            name: "21인치 다크 스퍼터링 휠",
            price: 2300000,
            sub: "+2,300,000원",
            allowedEngines: ["gas35"]
          }
        ]
      },

      {
        id: "interior",
        step: "6",
        position: "afterColor",
        title: "내장 디자인을 선택해주세요",
        help: "가격이 공식 BTO에서 명확하게 확인된 내장 디자인만 계산에 반영합니다.",
        summaryLabel: "내장 디자인",
        items: [
          {
            id: "standard",
            name: "스탠다드 디자인 · 옵시디언 블랙 모노톤",
            price: 0,
            sub: "기본"
          },
          {
            id: "signature1",
            name: "시그니쳐 디자인 셀렉션Ⅰ",
            price: 1700000,
            sub: "+1,700,000원"
          }
        ]
      }
    ],

    options: {
      base: [
        {
          id: "popular1",
          name: "파퓰러 패키지 I",
          price: 2950000,
          includes: ["hud", "drive1"],
          note: "HUD + 드라이빙 어시스턴스 패키지 I"
        },
        {
          id: "popular2",
          name: "파퓰러 패키지 II",
          price: 6600000,
          includes: ["hud", "drive1", "rearcomfort", "drive2", "builtincam"],
          note: "HUD + 드라이빙 I + 2열 컴포트 + 드라이빙 II + 빌트인 캠"
        },
        {
          id: "prestige",
          name: "프레스티지 패키지",
          price: 11900000,
          includes: [
            "hud",
            "sunroof",
            "drive1",
            "rearcomfort",
            "drive2",
            "convenience",
            "bang",
            "builtincam"
          ],
          note: "공식 패키지 구성"
        },

        {
          id: "hud",
          name: "헤드업 디스플레이",
          price: 1300000
        },
        {
          id: "drive1",
          name: "드라이빙 어시스턴스 패키지 I",
          price: 1950000
        },
        {
          id: "rearcomfort",
          name: "2열 컴포트 패키지",
          price: 1100000
        },
        {
          id: "drive2",
          name: "드라이빙 어시스턴스 패키지 II",
          price: 2000000
        },
        {
          id: "builtincam",
          name: "빌트인 캠 패키지",
          price: 850000
        },
        {
          id: "preview",
          name: "프리뷰 전자제어 서스펜션",
          price: 1100000
        },
        {
          id: "sunroof",
          name: "파노라마 선루프",
          price: 1400000
        },
        {
          id: "convenience",
          name: "컨비니언스 패키지",
          price: 2500000
        },
        {
          id: "bang",
          name: "뱅앤올룹슨 사운드 패키지",
          price: 1700000
        },
        {
          id: "elsd",
          name: "전자식 차동제한장치 (e-LSD)",
          price: 350000
        }
      ]
    }
  }

  ,

  /* =========================================================
     GENESIS GV80
     Genesis 공식 BTO 2026-08 기준
     ========================================================= */
  gv80: {
    brand: "GENESIS",
    name: "GV80",
    displayName: "GV80",
    year: "2027 GV80 · Genesis 공식 BTO 2026-08 기준",
    type: "럭셔리 대형 SUV",
    image: "gv80.png",

    engineHelp:
      "제네시스 공식 BTO 기준 가솔린 2.5 터보 / 가솔린 3.5 터보를 선택합니다.",

    trimHelp:
      "기본가격 68,860,000원에서 엔진, AWD, 인승, 휠과 공식 선택 패키지를 더하는 BTO 구조입니다. GV80 Coupe와 GV80 Black은 별도 모델이라 포함하지 않습니다.",

    tax: {
      rate: 0.07,
      vatIncluded: true
    },

    engines: [
      {
        id: "gas25",
        name: "가솔린 2.5 터보",
        price: 0,
        sub: "2,497cc · 304PS · 43.0kgf·m"
      },
      {
        id: "gas35",
        name: "가솔린 3.5 터보",
        price: 5500000,
        sub: "3,470cc · 380PS · 54.0kgf·m · +5,500,000원"
      }
    ],

    drivesByEngine: {
      gas25: [
        { id: "2wd", name: "2WD (후륜)", price: 0, sub: "기본" },
        { id: "awd", name: "AWD", price: 3000000, sub: "+3,000,000원" }
      ],
      gas35: [
        { id: "2wd", name: "2WD (후륜)", price: 0, sub: "기본" },
        { id: "awd", name: "AWD", price: 3000000, sub: "+3,000,000원" }
      ]
    },

    seats: [
      { id: "5", name: "5인승", price: 0, sub: "기본" },
      { id: "6", name: "6인승", price: 2500000, sub: "+2,500,000원" },
      { id: "7", name: "7인승", price: 1000000, sub: "+1,000,000원" }
    ],

    trimsByEngine: {
      gas25: [
        { id: "base", name: "기본 모델", price: 68860000, sub: "2.5T · 2WD · 5인승 기본가격" }
      ],
      gas35: [
        { id: "base", name: "기본 모델", price: 68860000, sub: "3.5T 추가금은 엔진 선택에서 반영" }
      ]
    },

    colors: [
      { id: "uyuni_white", name: "우유니 화이트", price: 0, color: "#f2f1ed" },
      { id: "savile_silver", name: "세빌 실버", price: 0, color: "#a4a6a6" },
      { id: "makalu_gray", name: "마칼루 그레이", price: 0, color: "#606467" },
      { id: "vik_black", name: "비크 블랙", price: 0, color: "#111214" },
      { id: "ceres_blue", name: "세레스 블루", price: 0, color: "#355269" },
      { id: "bering_blue", name: "베링 블루", price: 0, color: "#486476" }
    ],

    extraChoiceGroups: [
      {
        id: "wheel",
        step: "5",
        position: "afterColor",
        title: "휠 & 타이어를 선택해주세요",
        help: "제네시스 공식 GV80 BTO 가격을 반영합니다.",
        summaryLabel: "휠 & 타이어",
        items: [
          { id: "19", name: "19인치 다이아몬드 컷팅 휠", price: 0, sub: "기본" },
          { id: "20", name: "20인치 다이아몬드 컷팅 휠", price: 1300000, sub: "+1,300,000원" },
          { id: "22", name: "22인치 다이아몬드 컷팅 휠", price: 2500000, sub: "+2,500,000원" }
        ]
      }
    ],

    options: {
      base: [
        {
          id: "popular_awd",
          name: "파퓰러 패키지 [AWD]",
          price: 6200000,
          allowedExtra: {},
          note: "공식 BTO 확인 가격 · AWD 구성용"
        }
      ]
    }
  }

  ,

  /* =========================================================
     HYUNDAI 2027 NEXO
     현대자동차 공식 가격표 2026-07-14 출시 / 2026-08 현재 기준
     ========================================================= */
  nexo: {
    brand: "HYUNDAI",
    name: "NEXO",
    displayName: "디 올 뉴 넥쏘",
    year: "2027 NEXO · 현대자동차 공식 가격표 기준",
    type: "수소전기 SUV",
    image: "nexo.png",

    engineHelp:
      "150kW 수소연료전지 시스템과 2WD가 기본입니다. 국비·지자체 수소차 보조금은 지역과 시점에 따라 달라지므로 자동 차감하지 않습니다.",

    trimHelp:
      "현대자동차 2027 NEXO 공식 가격표의 세제혜택 후 판매가격과 트림별 공식 선택품목을 반영합니다.",

    tax: {
      rate: 0.07,
      vatIncluded: true
    },

    engines: [
      {
        id: "fcev",
        name: "수소전기 150kW",
        price: 0,
        sub: "150kW 구동모터 · 수소연료전지 시스템"
      }
    ],

    drivesByEngine: {
      fcev: [
        {
          id: "2wd",
          name: "2WD",
          price: 0,
          sub: "전륜구동 · 기본"
        }
      ]
    },

    seats: [
      {
        id: "5",
        name: "5인승",
        price: 0,
        sub: "기본"
      }
    ],

    trimsByEngine: {
      fcev: [
        {
          id: "exclusive",
          name: "익스클루시브",
          price: 76470000,
          sub: "세제혜택 후 · 세제혜택 전 80,447,000원"
        },
        {
          id: "exclusive_special",
          name: "익스클루시브 스페셜",
          price: 79370000,
          sub: "세제혜택 후 · 세제혜택 전 83,497,000원"
        },
        {
          id: "prestige",
          name: "프레스티지",
          price: 83790000,
          sub: "세제혜택 후 · 세제혜택 전 88,147,000원"
        }
      ]
    },

    colors: [
      {
        id: "ecotronic_gray",
        name: "에코트로닉 그레이 펄",
        price: 0,
        color: "#62676a"
      },
      {
        id: "creamy_white",
        name: "크리미 화이트 펄",
        price: 0,
        color: "#f2f1eb"
      },
      {
        id: "goyo_copper",
        name: "고요 카퍼 펄",
        price: 0,
        color: "#8a6758"
      },
      {
        id: "amazon_gray",
        name: "아마존 그레이 메탈릭",
        price: 0,
        color: "#5a605e"
      },
      {
        id: "phantom_black",
        name: "팬텀 블랙 펄",
        price: 0,
        color: "#111214"
      },
      {
        id: "ocean_indigo_matte",
        name: "오션 인디고 매트",
        price: 0,
        color: "#485761"
      }
    ],

    optionsByEngine: {
      fcev: {
        exclusive: [
          {
            id: "builtincam",
            name: "빌트인 캠 2 Plus + 증강현실 내비게이션",
            price: 600000
          },
          {
            id: "smartsense",
            name: "현대 스마트센스",
            price: 680000
          },
          {
            id: "comfortplus",
            name: "컴포트 플러스",
            price: 1530000
          }
        ],

        exclusive_special: [
          {
            id: "builtincam",
            name: "빌트인 캠 2 Plus + 증강현실 내비게이션",
            price: 600000
          },
          {
            id: "v2l",
            name: "실내/외 V2L",
            price: 850000
          },
          {
            id: "parking",
            name: "파킹 어시스트",
            price: 950000
          },
          {
            id: "bno",
            name: "Audio by BANG & OLUFSEN 사운드",
            price: 1150000
          },
          {
            id: "wheel19",
            name: "19인치 알로이 휠 & 타이어",
            price: 250000
          }
        ],

        prestige: [
          {
            id: "builtincam",
            name: "빌트인 캠 2 Plus + 증강현실 내비게이션",
            price: 600000
          },
          {
            id: "v2l",
            name: "실내/외 V2L",
            price: 850000
          },
          {
            id: "visionroof",
            name: "비전 루프",
            price: 900000
          },
          {
            id: "digital_side",
            name: "디지털 사이드 미러",
            price: 1380000
          },
          {
            id: "camera",
            name: "카메라 패키지",
            price: 750000,
            note: "디지털 센터 미러 + 운전자 모니터링 시스템"
          },
          {
            id: "rear_entertainment",
            name: "H Genuine Accessories · 후석 스마트 엔터테인먼트 시스템",
            price: 2770000
          }
        ]
      }
    },

    /* 수소전기차 취득세 감면 */
    ecoTaxEngineIds: ["fcev"],
    ecoAcquisitionTaxReduction: 1400000
  }

};


/* =========================================================
   차량 선택 메인 자동생성용 메타데이터
   ---------------------------------------------------------
   cars.html은 이제 CAR_DATA를 읽어서 카드를 자동 생성합니다.
   새 차량은 CAR_DATA에만 추가하면 기본 카드가 자동으로 생깁니다.

   아래 값들은 "견적 계산 데이터"가 아니라
   메인 목록의 표시명/순서/준비중 카드만 관리합니다.
   ========================================================= */

window.CAR_CATALOG_META = {
  "g80": {
    "title": "디 올-뉴 G80",
    "type": "럭셔리 세단 · 2.5T · 3.5T"
  },
  "grandeur": {
    "title": "더 뉴 그랜저 / Hybrid",
    "type": "준대형 세단 · Hybrid"
  },
  "sonata": {
    "title": "쏘나타 디 엣지 / Hybrid",
    "type": "중형 세단 · Hybrid"
  },
  "palisade": {
    "title": "디 올 뉴 팰리세이드 / Hybrid",
    "type": "대형 SUV · Hybrid"
  },
  "santafe": {
    "title": "싼타페 / 싼타페 Hybrid",
    "type": "중형 SUV · Hybrid"
  },
  "avante": {
    "title": "디 올 뉴 아반떼 / Hybrid",
    "type": "준중형 세단 · Hybrid · N Line"
  },
  "tucson": {
    "title": "투싼 / 투싼 Hybrid",
    "type": "준중형 SUV · Hybrid"
  },
  "kona": {
    "title": "코나 / Hybrid / Electric",
    "type": "소형 SUV · Hybrid · EV"
  },
  "sorento": {
    "title": "쏘렌토",
    "type": "중형 SUV · 가솔린 · 디젤 · Hybrid"
  },
  "sportage": {
    "title": "스포티지",
    "type": "준중형 SUV"
  },
  "seltos": {
    "title": "셀토스",
    "type": "소형 SUV"
  },
  "tasman": {
    "title": "타스만",
    "type": "픽업 · 2.5 가솔린 터보"
  },
  "k9": {
    "title": "K9",
    "type": "대형 세단 · 3.8 가솔린 · 3.3 가솔린 터보"
  },
  "k8": {
    "title": "K8 / K8 Hybrid",
    "type": "준대형 세단 · 2.5 가솔린 · Hybrid"
  },
  "k5": {
    "title": "K5 / K5 Hybrid",
    "type": "중형 세단 · 2.0 가솔린 · Hybrid"
  },
  "niro": {
    "title": "니로 HEV",
    "type": "하이브리드 SUV · 1.6 HEV"
  },
  "ray": {
    "title": "레이 / 레이 EV",
    "type": "경형 RV · 가솔린 · EV"
  },
  "ev3": {
    "title": "EV3",
    "type": "전기 SUV · Standard · Long Range"
  },
  "ev3gt": {
    "title": "EV3 GT",
    "type": "고성능 전기 SUV · GT 4WD Long Range"
  },
  "ev6": {
    "title": "EV6",
    "type": "전기 크로스오버 · Standard · Long Range"
  },
  "ev9": {
    "title": "EV9",
    "type": "대형 전기 SUV · Standard · Long Range"
  },
  "ev9gt": {
    "title": "EV9 GT",
    "type": "고성능 대형 전기 SUV · GT 4WD"
  }
};

window.CAR_SPECIAL_CARDS = {
  "carnival": [
    {
      "title": "카니발 7인승",
      "type": "대형 RV · 7인승",
      "url": "estimate.html?car=carnival&seat=7"
    },
    {
      "title": "카니발 9인승",
      "type": "대형 RV · 9인승",
      "url": "estimate.html?car=carnival&seat=9"
    }
  ]
};

window.CAR_DISPLAY_ORDER = [
  "g80",
  "g70",
  "g90",
  "gv70",
  "gv80",
  "grandeur",
  "sonata",
  "palisade",
  "santafe",
  "avante",
  "tucson",
  "kona",
  "ioniq5",
  "ioniq6",
  "ioniq9",
  "gv60",
  "electrified_gv70",
  "electrified_g80",
  "nexo",
  "carnival",
  "sorento",
  "seltos",
  "tasman",
  "k8",
  "k9",
  "k5",
  "niro",
  "ray",
  "ev3",
  "ev3gt",
  "ev6",
  "ev9",
  "ev9gt",
  "sportage"
];

window.CAR_PENDING = [
  {
    "brand": "KIA",
    "displayName": "K8 / K8 HEV",
    "type": "준대형 세단",
    "image": "images/kia/k8.png",
    "icon": "⚡"
  },
  {
    "brand": "KIA",
    "displayName": "K5 / K5 HEV",
    "type": "중형 세단",
    "image": "images/kia/k5.png",
    "icon": "⚡"
  },
];
