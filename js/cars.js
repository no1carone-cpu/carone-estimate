/*
  카원 차량 데이터 파일
  ----------------------
  새 차종을 추가할 때 가장 많이 수정하게 될 파일입니다.

  중요:
  - price는 숫자만 적습니다. 36,310,000원 → 36310000
  - id는 영문 소문자 위주로 작성합니다.
  - options는 트림 id와 이름이 정확히 일치해야 합니다.
*/

window.CAR_DATA = {

  sorento: {
    brand: "KIA",
    name: "The 2026 Sorento",
    displayName: "2026 쏘렌토",
    year: "2026년형",
    type: "중형 SUV",
    image: "image: "https://no1carone-cpu.github.io/carone-estimate/sorento.png","

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
      {
        id: "5",
        name: "5인승",
        price: 0,
        sub: "기본"
      },
      {
        id: "6",
        name: "6인승",
        price: 840000,
        sub: "+840,000원"
      },
      {
        id: "7",
        name: "7인승",
        price: 690000,
        sub: "+690,000원"
      }
    ],

    trims: [
      {
        id: "prestige",
        name: "프레스티지",
        price: 36310000,
        sub: "2026 쏘렌토 시작 트림"
      },
      {
        id: "noblesse",
        name: "노블레스",
        price: 39460000,
        sub: "12.3인치 클러스터 · 서라운드 뷰 등"
      },
      {
        id: "signature",
        name: "시그니처",
        price: 42270000,
        sub: "20인치 휠 · 프로젝션 LED · 앰비언트 라이트"
      },
      {
        id: "xline",
        name: "X-Line",
        price: 43210000,
        sub: "X-Line 전용 외장 · 전용 가죽시트"
      }
    ],

    colors: [
      {
        id: "white",
        name: "스노우 화이트 펄",
        price: 80000,
        color: "#f8f8f3"
      },
      {
        id: "gray",
        name: "인터스텔라 그레이",
        price: 0,
        color: "#767b7f"
      },
      {
        id: "black",
        name: "오로라 블랙 펄",
        price: 0,
        color: "#151515"
      },
      {
        id: "green",
        name: "시티스케이프 그린",
        price: 0,
        color: "#475c55"
      }
    ],

    options: {

      prestige: [
        {
          id: "style",
          name: "스타일",
          price: 1240000
        },
        {
          id: "cluster",
          name: "12.3인치 클러스터",
          price: 590000
        },
        {
          id: "drivewise",
          name: "드라이브 와이즈",
          price: 1290000,
          requires: "cluster",
          note: "12.3인치 클러스터 적용 시"
        },
        {
          id: "hud",
          name: "HUD + 빌트인 캠 2",
          price: 1190000,
          requires: "cluster",
          note: "12.3인치 클러스터 적용 시"
        },
        {
          id: "sunroof",
          name: "파노라마 선루프",
          price: 1090000
        }
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
  }

};
