export type ActivityCategory = {
  title: string;
  audience: string;
  description: string;
  highlights: string[];
};

export type DirectoryEntry = {
  name: string;
  category: string;
  area: string;
  note: string;
};

export type FarmEntry = {
  name: string;
  area: string;
  note: string;
};

export type SeasonStage = {
  period: string;
  title: string;
  detail: string;
  tone: string;
};

export type WeekendIdea = {
  title: string;
  area: string;
  description: string;
};

export type AnnualEvent = {
  month: string;
  title: string;
  detail: string;
};

export const quickGuides = [
  {
    title: "자녀 레슨 찾기",
    text: "스포츠, 수영, 골프, 댄스, 피아노처럼 자주 찾는 활동을 먼저 한눈에 비교할 수 있게 정리했습니다.",
  },
  {
    title: "교민 생활 연결",
    text: "마트, 식당, 교회, 생활 서비스 등 자주 찾는 업소를 지역 중심으로 빠르게 볼 수 있습니다.",
  },
  {
    title: "워홀 시즌 체크",
    text: "카불쳐 딸기 시즌 흐름과 준비 시점을 월별로 정리해 처음 오는 분들도 감을 잡기 쉽습니다.",
  },
];

export const activityCategories: ActivityCategory[] = [
  {
    title: "스포츠 레슨 & 클럽",
    audience: "초중고 학생",
    description:
      "축구, 테니스, 태권도, 농구 같은 정규 수업형 활동을 찾는 가족을 위한 시작점입니다.",
    highlights: ["방과 후 클래스", "주니어 클럽", "학기별 등록"],
  },
  {
    title: "수영 & 아쿠아",
    audience: "유아부터 청소년",
    description:
      "호주 생활에서 빠지기 어려운 수영 레슨과 실내외 수영장 정보를 따로 묶어두면 활용도가 높습니다.",
    highlights: ["레벨별 수업", "방학 집중반", "가족 자유수영"],
  },
  {
    title: "골프 & 드라이빙 레인지",
    audience: "가족 취미",
    description:
      "주니어 골프, 주말 연습장, 가족이 함께 가기 좋은 코스 중심으로 큐레이션할 수 있는 영역입니다.",
    highlights: ["주니어 코칭", "입문 레슨", "주말 연습"],
  },
  {
    title: "댄스 & 퍼포먼스",
    audience: "초등 고학년~청소년",
    description:
      "K-pop 댄스, 발레, 재즈, 공연 수업처럼 아이들이 흥미를 가지기 쉬운 예체능 정보를 담기 좋습니다.",
    highlights: ["K-pop 클래스", "발표회 일정", "학기제 수업"],
  },
  {
    title: "피아노 & 음악",
    audience: "개인 레슨",
    description:
      "피아노, 보컬, 바이올린, 드럼처럼 한국 학부모 수요가 높은 개인 또는 소그룹 레슨 영역입니다.",
    highlights: ["개인 레슨", "소규모 클래스", "콩쿠르 준비"],
  },
  {
    title: "미술 & 창의활동",
    audience: "주말 활동",
    description:
      "드로잉, 공예, 방학 캠프, 메이커 활동까지 넓게 포함할 수 있어 주말 가이드와 연결하기 좋습니다.",
    highlights: ["아트 클래스", "스쿨 홀리데이", "창의 워크숍"],
  },
];

export const businessDirectory: DirectoryEntry[] = [
  {
    name: "Hanaromart North Lakes",
    category: "한인마트",
    area: "North Lakes",
    note: "장보기와 기본 반찬, 라면, 냉동식품을 해결하기 좋은 생활 거점",
  },
  {
    name: "bapboi Korean BBQ",
    category: "식당",
    area: "North Lakes",
    note: "가족 외식이나 교민 모임 때 자주 찾기 좋은 한식당",
  },
  {
    name: "Chicken in Seoul",
    category: "식당",
    area: "North Lakes",
    note: "아이들과 함께 가기 쉬운 치킨 메뉴 중심",
  },
  {
    name: "South Seoul",
    category: "식당",
    area: "Murrumba Downs",
    note: "브리즈번 북부권에서 접근 가능한 한식 옵션",
  },
  {
    name: "노스레이크 순복음 교회",
    category: "교회",
    area: "North Lakes",
    note: "정착 초기 네트워크를 만드는 데 도움이 되는 커뮤니티 접점",
  },
  {
    name: "선샤인코스트 성결교회",
    category: "교회",
    area: "Bokarina",
    note: "선샤인코스트 쪽 교민 연결에 유용한 커뮤니티 채널",
  },
  {
    name: "교민 생활 서비스",
    category: "생활정보",
    area: "North Lakes - Brisbane North",
    note: "미용, 차량, 통신, 번역, 세무 같은 생활형 업종을 추후 계속 확장하기 좋은 영역",
  },
  {
    name: "학원/개인레슨",
    category: "교육",
    area: "North Lakes - Mango Hill",
    note: "영어, 수학, 피아노, 미술 등 학부모 수요가 높은 카테고리",
  },
];

export const cabooltureFarms: FarmEntry[] = [
  { name: "Oasis Berries", area: "Caboolture", note: "카불쳐 시즌 정보 탐색 시 자주 언급되는 대표 농장군" },
  { name: "Queensland Berries", area: "Caboolture", note: "초기 정착자들이 위치 파악하기 좋은 기준점" },
  { name: "Rolin Farms", area: "Elimbah", note: "엘림바 쪽 이동 동선을 함께 보기 좋음" },
  { name: "Stothart Family Farms", area: "Bellmere", note: "벨미어 라인 시즌 체크용" },
  { name: "Pinata Farms", area: "Wamuran", note: "와무란 지역 농장 흐름 파악용" },
  { name: "Gowinta Farms", area: "Beerburrum", note: "인근 확장 지역까지 함께 보려는 분께 유용" },
];

export const seasonStages: SeasonStage[] = [
  {
    period: "3-4월",
    title: "시즌 준비",
    detail: "모종 심기와 초기 준비가 진행되는 시기라 바로 큰 수확을 기대하기보다 자리 잡는 기간으로 보는 편이 좋습니다.",
    tone: "emerald",
  },
  {
    period: "5-6월",
    title: "초기 수확",
    detail: "첫 수확과 함께 일감이 늘기 시작합니다. 차량, 숙소, 이동 동선을 미리 정리해두면 훨씬 수월합니다.",
    tone: "amber",
  },
  {
    period: "7-8월",
    title: "피크 시즌",
    detail: "가장 바쁜 시기입니다. 워홀러에게는 일자리 기회가 많고, 가족에게는 딸기 체험과 주말 방문 시즌이 됩니다.",
    tone: "rose",
  },
  {
    period: "9-10월",
    title: "체험 + 마무리",
    detail: "Pick Your Own과 방문 수요가 살아있고 시즌은 점차 마무리됩니다. 다음 이동 계획을 함께 생각하기 좋은 구간입니다.",
    tone: "sky",
  },
];

export const weekendIdeas: WeekendIdea[] = [
  {
    title: "수영장 + 공원 하루 코스",
    area: "North Lakes",
    description: "아이들 에너지를 풀기 좋은 물놀이와 잔디공원 조합으로, 더운 시즌 주말 루틴으로 만들기 좋습니다.",
  },
  {
    title: "골프 연습장 또는 미니골프",
    area: "Brisbane North",
    description: "부모와 아이가 함께 즐기기 쉬운 활동이라 가족 취미 탐색용으로 잘 맞습니다.",
  },
  {
    title: "딸기농장 방문 & 체험",
    area: "Caboolture",
    description: "7월부터 10월 사이에는 계절감을 가장 잘 느낄 수 있는 대표적인 주말 나들이 코스가 됩니다.",
  },
  {
    title: "지역 마켓 & 시즌 축제",
    area: "Moreton Bay / Brisbane",
    description: "주말마다 열리는 로컬 마켓과 축제는 영어 환경 적응과 가족 외출을 동시에 잡기 좋습니다.",
  },
];

export const annualEvents: AnnualEvent[] = [
  { month: "1월", title: "새학년 준비", detail: "학용품, 스쿨캠프 일정, 방과 후 액티비티 리서치를 시작하기 좋은 달" },
  { month: "2월", title: "학교 적응기", detail: "학기 루틴이 잡히는 시기라 레슨과 스포츠 클럽 등록 타이밍으로 좋음" },
  { month: "3월", title: "가을 학기 활동 확장", detail: "실내외 레슨 비교와 카불쳐 시즌 준비를 같이 보기 시작" },
  { month: "4월", title: "이스터 브레이크", detail: "가족 여행, 캠프, 지역 행사 탐색 수요가 커지는 시기" },
  { month: "5월", title: "농장 초기 수확", detail: "워홀러와 세컨잡 관심자에게 시즌 체감이 시작되는 구간" },
  { month: "6월", title: "겨울 스포츠 & 실내활동", detail: "수영, 음악, 미술, 실내 스포츠 수요가 안정적으로 높아짐" },
  { month: "7월", title: "스쿨 홀리데이", detail: "아이들 방학 프로그램과 농장 피크 시즌이 겹쳐 정보 수요가 큼" },
  { month: "8월", title: "딸기 피크 시즌", detail: "카불쳐 방문, 체험, 픽업 이동 정보가 특히 중요해지는 달" },
  { month: "9월", title: "봄 나들이 시즌", detail: "지역 페스티벌, 마켓, 야외활동 일정이 늘어나는 구간" },
  { month: "10월", title: "PYO 마무리 시즌", detail: "딸기 체험 마감권, 봄 행사, 운동 시즌 등록이 함께 움직임" },
  { month: "11월", title: "연말 행사 예열", detail: "학교 공연, 지역 커뮤니티 이벤트, 여름방학 계획을 준비" },
  { month: "12월", title: "크리스마스 & 여름방학", detail: "가족 이벤트와 워터 액티비티 수요가 가장 커지는 시기" },
];
