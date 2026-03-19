export type ActivitySlug = "swimming" | "sports" | "dance" | "music" | "golf";

export type NavItem = {
  href: string;
  label: string;
};

export type ActivityCategory = {
  slug: ActivitySlug;
  title: string;
  parentLabel: string;
  kicker: string;
  description: string;
  image: string;
  href: string;
  highlights: string[];
};

export type ActivityProvider = {
  name: string;
  category: string;
  suburb: string;
  address: string;
  phone: string;
  ageRange: string;
  pricing: string;
  hours: string;
  programs: string[];
  badges: string[];
  lastVerified: string;
  summary: string;
  highlights: string[];
  website: string;
  sourceUrl: string;
  image: string;
};

export type DirectoryEntry = {
  name: string;
  category: string;
  address: string;
  phone: string;
  hours: string;
  pricing: string;
  verification: string;
  website?: string;
  area: string;
  note: string;
};

export type FarmEntry = {
  name: string;
  area: string;
  address: string;
  phone: string;
  hours: string;
  workWindow: string;
  workNote: string;
  verification: string;
  website?: string;
  sourceUrl: string;
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
  image: string;
  schedule?: string;
  details?: string[];
  website?: string;
};

export type AnnualEvent = {
  month: string;
  title: string;
  detail: string;
};

export type BirthdayFreebie = {
  brand: string;
  category: string;
  benefit: string;
  app: string;
  joinTiming: string;
  validity: string;
  condition: string;
  status: string;
  sourceUrl: string;
  note: string;
};

export const publicNav: NavItem[] = [
  { href: "/", label: "홈" },
  { href: "/activities", label: "자녀 레슨" },
  { href: "/directory", label: "업소록" },
  { href: "/caboolture", label: "카불쳐 시즌" },
  { href: "/weekend", label: "주말 뭐할지" },
  { href: "/calendar", label: "연간 캘린더" },
  { href: "/frugal-tips", label: "알뜰팁" },
];

export const quickGuides = [
  {
    title: "카테고리별로 들어가기",
    text: "홈에서는 큰 그림만 보고, 실제 정보는 수영, 스포츠, 댄스, 음악, 골프 페이지로 들어가 비교할 수 있게 구성합니다.",
  },
  {
    title: "공식 사이트 기준으로 수집",
    text: "자녀 레슨 코너는 공식 홈페이지가 확인되는 곳을 우선 반영해 업데이트 신뢰도를 높입니다.",
  },
  {
    title: "운영은 데이터 파일부터",
    text: "처음에는 구조화된 데이터로 빠르게 운영하고, 이후에는 관리자 입력 화면으로 확장하기 쉬운 형태로 잡아둡니다.",
  },
  {
    title: "알뜰팁도 따로 모으기",
    text: "호주 앱 쿠폰, 생일 혜택, 생활비 절약 팁처럼 자주 다시 찾게 되는 정보도 서브페이지로 정리합니다.",
  },
];

export const activityCategories: ActivityCategory[] = [
  {
    slug: "swimming",
    title: "물놀이 & 수영",
    parentLabel: "안전하게 물 적응부터",
    kicker: "처음 시작하는 아이에게 가장 수요가 큰 레슨",
    description: "Learn to Swim, 스쿼드, 가족 수영까지 물과 친해지는 코스를 모았습니다.",
    image:
      "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=1200&q=80",
    href: "/activities/swimming",
    highlights: ["Learn to Swim", "Squad", "가족 수영"],
  },
  {
    slug: "sports",
    title: "몸으로 뛰는 레슨",
    parentLabel: "축구, AFL, 체조, 태권도",
    kicker: "체력과 사회성을 함께 키우는 활동",
    description: "정규 클럽과 신체활동 레슨을 한데 모아 아이 성향에 맞게 비교하기 쉽게 정리합니다.",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80",
    href: "/activities/sports",
    highlights: ["주니어 클럽", "팀 스포츠", "태권도"],
  },
  {
    slug: "dance",
    title: "춤 & 퍼포먼스",
    parentLabel: "발레, 재즈, 힙합, 아크로",
    kicker: "표현력과 자신감을 키우는 예체능",
    description: "발레부터 힙합까지 무대 경험과 장르 선택 폭을 함께 볼 수 있게 묶었습니다.",
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80",
    href: "/activities/dance",
    highlights: ["Ballet", "Hip Hop", "Performance"],
  },
  {
    slug: "music",
    title: "피아노 & 음악",
    parentLabel: "악기, 보컬, 앙상블",
    kicker: "집중형 레슨과 음악적 자신감",
    description: "피아노, 보컬, 기타, 앙상블처럼 개인레슨과 그룹 프로그램을 함께 담았습니다.",
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=1200&q=80",
    href: "/activities/music",
    highlights: ["Piano", "Vocals", "Ensembles"],
  },
  {
    slug: "golf",
    title: "골프 & 가족취미",
    parentLabel: "주니어 골프와 실내 골프",
    kicker: "입문형과 가족형 취미를 같이 보기",
    description: "주니어 입문부터 가족형 실내 골프까지, 북부권에서 접근 가능한 선택지를 담습니다.",
    image:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=80",
    href: "/activities/golf",
    highlights: ["Junior", "Indoor", "Family"],
  },
];

export const activityPageContent: Record<
  ActivitySlug,
  {
    title: string;
    kicker: string;
    description: string;
    image: string;
    tips: string[];
  }
> = {
  swimming: {
    title: "물놀이 & 수영",
    kicker: "Swimming",
    description:
      "호주 정착 초기에 가장 우선순위가 높은 레슨 중 하나라, 기초 적응부터 스쿼드까지 단계별로 보기 좋게 모았습니다.",
    image:
      "https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?auto=format&fit=crop&w=1400&q=80",
    tips: ["레벨 테스트 유무", "실내/야외 수업 환경", "방학 집중반 여부"],
  },
  sports: {
    title: "몸으로 뛰는 레슨",
    kicker: "Sports",
    description:
      "축구, AFL, 태권도, 짐 프로그램처럼 아이들 체력을 키우고 친구를 사귀기 좋은 선택지를 모았습니다.",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1400&q=80",
    tips: ["주니어 리그 시즌", "훈련 요일", "경쟁형/즐기는형 분위기"],
  },
  dance: {
    title: "춤 & 퍼포먼스",
    kicker: "Dance",
    description:
      "발레, 재즈, 힙합, 퍼포먼스 수업 등 아이들의 표현력과 자신감을 키우는 댄스 옵션을 모았습니다.",
    image:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1400&q=80",
    tips: ["공연/발표회 빈도", "유아반부터 있는지", "장르 다양성"],
  },
  music: {
    title: "피아노와 음악 클래스",
    kicker: "Music",
    description:
      "개인 악기 레슨부터 음악적 자신감을 키우는 그룹 프로그램까지 북부권에서 접근 가능한 옵션을 정리했습니다.",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1400&q=80",
    tips: ["개인/그룹 여부", "입문 연령", "공연/앙상블 기회"],
  },
  golf: {
    title: "골프 & 가족취미",
    kicker: "Golf",
    description:
      "정규 주니어 프로그램과 실내 골프처럼 입문 장벽이 낮은 옵션을 함께 보면 가족 취미로 연결하기 좋습니다.",
    image:
      "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=1400&q=80",
    tips: ["주니어 프로그램 존재 여부", "연습형/레슨형", "가족 동반 편의성"],
  },
};

export const activityProviders: Record<ActivitySlug, ActivityProvider[]> = {
  swimming: [
    {
      name: "North Lakes Aquatic Centre",
      category: "수영장 / Learn to Swim",
      suburb: "North Lakes",
      address: "6 Little Burke Street, North Lakes QLD 4509",
      phone: "07 3482 5555",
      ageRange: "영유아부터 성인",
      pricing: "풀 입장료 공식 공개, 수영레슨은 문의 필요",
      hours: "센터 운영시간은 공식 사이트 기준 확인, 레슨은 프로그램별 상이",
      programs: ["Rackley Learn to Swim", "Squad", "Indoor pool", "Outdoor pool"],
      badges: ["공식 사이트", "실내외 풀", "가족 수영"],
      lastVerified: "2026-03",
      summary:
        "실내외 풀과 랙클리 수영 프로그램을 함께 운영하는 지역 대표 수영장으로, Learn to Swim과 스쿼드 트랙을 같이 보기에 좋습니다.",
      highlights: ["Rackley Learn to Swim", "Squad", "실내외 수영장"],
      website: "https://northlakesaquaticcentre.com.au/",
      sourceUrl: "https://www.moretonbay.qld.gov.au/Services/Sport-Recreation/Pools/North-Lakes",
      image:
        "https://images.unsplash.com/photo-1576013551627-0b744bca024d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "TLC Learn to Swim",
      category: "학교 기반 수영 프로그램",
      suburb: "North Lakes",
      address: "2 College Street, North Lakes QLD 4509",
      phone: "07 3491 5557",
      ageRange: "유아부터 청소년",
      pricing: "그룹 레슨 일부 가격 공개, Child 2 주 1회 기준 $24.30부터",
      hours: "레슨 길이 30분, Bull Sharks 이상은 45분",
      programs: ["Learn to Swim", "Swim Squad", "Swim Club", "Assessment booking"],
      badges: ["공식 사이트", "가격 일부 공개", "학교 시설"],
      lastVerified: "2026-03",
      summary:
        "The Lakes College Aquatic Precinct 기반의 수영 프로그램으로 Learn to Swim, Swim Squad, Swim Club 경로가 명확하게 나뉘어 있습니다.",
      highlights: ["Assessment booking", "Learn to Swim", "Swim Club"],
      website: "https://www.tlcswimming.com.au/",
      sourceUrl: "https://www.tlcswimming.com.au/programs/faqs-learn-to-swim",
      image:
        "https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Murrumba Downs Swim School",
      category: "근거리 대안 수영",
      suburb: "Murrumba Downs",
      address: "근거리 브리즈번 북부권, 세부 주소는 문의 필요",
      phone: "문의 필요",
      ageRange: "유아부터 청소년",
      pricing: "문의 필요",
      hours: "문의 필요",
      programs: ["Learn to Swim", "근거리 비교용"],
      badges: ["추가 조사 추천", "근거리 대안"],
      lastVerified: "2026-03",
      summary:
        "노스레이크에서 가까운 북부권 수영학교도 함께 비교하면 시간표와 자리 availability 면에서 유리합니다.",
      highlights: ["근거리 대안", "자리 비교"],
      website: "/activities/swimming",
      sourceUrl: "https://northlakesaquaticcentre.com.au/",
      image:
        "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  sports: [
    {
      name: "North Lakes United FC",
      category: "축구",
      suburb: "North Lakes",
      address: "North Lakes / Mango Hill 경기장 사용, 세부 팀별 공지 확인",
      phone: "공식 사이트 문의 폼 사용",
      ageRange: "주니어 축구",
      pricing: "등록비는 시즌/연령대별 상이, 문의 필요",
      hours: "MiniRoos 및 팀 훈련 시간은 시즌별 공지",
      programs: ["MiniRoos", "Junior teams", "Football Queensland club"],
      badges: ["공식 사이트", "팀 스포츠", "주니어 클럽"],
      lastVerified: "2026-03",
      summary:
        "MiniRoos와 주니어 팀 체계로 접근하기 좋은 지역 축구 클럽으로, 팀 스포츠를 시작하는 가정에 잘 맞습니다.",
      highlights: ["Football Queensland", "MiniRoos", "Junior teams"],
      website: "https://www.northlakesunited.com.au/",
      sourceUrl: "https://www.northlakesunited.com.au/",
      image:
        "https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "North Lakes Eels JAFC",
      category: "AFL",
      suburb: "Mango Hill",
      address: "St Benedict's College, Mango Hill QLD",
      phone: "공식 사이트 문의 사용",
      ageRange: "유소년 AFL",
      pricing: "시즌 등록비 문의 필요",
      hours: "훈련 및 경기 시간은 팀별 시즌 공지",
      programs: ["Junior AFL", "Auskick pathway", "Community club"],
      badges: ["공식 사이트", "AFL", "커뮤니티 클럽"],
      lastVerified: "2026-03",
      summary:
        "북부권에서 AFL을 시작하고 싶은 가정이 보기 좋은 주니어 클럽으로, St Benedict's College Mango Hill을 홈 베이스로 안내합니다.",
      highlights: ["Junior AFL", "Community club", "North Lakes base"],
      website: "https://www.northlakeseels.com.au/",
      sourceUrl: "https://www.northlakeseels.com.au/contact-us",
      image:
        "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "PK Taekwondo",
      category: "태권도",
      suburb: "North Lakes",
      address: "North Lakes QLD 4509",
      phone: "0432 359 848",
      ageRange: "어린이부터 청소년",
      pricing: "문의 필요",
      hours: "방과 후 및 저녁반 중심, 세부 시간 문의 필요",
      programs: ["Kids Taekwondo", "Martial arts", "After-school classes"],
      badges: ["무술", "커뮤니티 센터", "문의 필요"],
      lastVerified: "2026-03",
      summary:
        "노스레이크 커뮤니티 센터를 기반으로 운영되는 태권도 프로그램으로, 규칙성과 자신감을 함께 키우려는 가정에 잘 맞습니다.",
      highlights: ["Martial arts", "Community centre", "After-school times"],
      website: "https://pktkdaus.com/",
      sourceUrl: "https://australia.worldplaces.me/review/87896699-pk-taekwondo.html",
      image:
        "https://images.unsplash.com/photo-1517438984742-1262db08379e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Delta Gymnastics North Lakes",
      category: "체조 / 신체발달",
      suburb: "North Lakes",
      address: "4 Burke Crescent, North Lakes QLD 4509",
      phone: "07 3262 0055",
      ageRange: "18개월부터",
      pricing: "문의 필요",
      hours: "주 7일 클래스 운영 안내",
      programs: ["Groovers", "Recreational gymnastics", "Pathway program"],
      badges: ["공식 사이트", "18개월부터", "주 7일"],
      lastVerified: "2026-03",
      summary:
        "어린 아이부터 시작할 수 있는 체조 프로그램으로, 신체감각과 자신감을 키우는 입문형 활동으로 많이 찾는 편입니다.",
      highlights: ["Groovers", "7 days classes", "Gymnastics pathway"],
      website: "https://deltagym.com.au/",
      sourceUrl: "https://deltagym.com.au/groovers-program/",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "North Lakes Tennis & Pickleball by Matchpoint",
      category: "테니스 / 라켓스포츠",
      suburb: "North Lakes",
      address: "North Lakes Tennis & Pickleball, 세부 주소는 공식 예약 플랫폼 확인",
      phone: "0422 859 565",
      ageRange: "주니어부터 가족",
      pricing: "주니어 소셜 피클볼 $12 비회원 / $8 회원",
      hours: "North Lakes 피클볼 화요일 7:00pm - 9:00pm",
      programs: ["Junior tennis", "Pickleball", "Coaching"],
      badges: ["가격 공개", "라켓스포츠", "가족형"],
      lastVerified: "2026-03",
      summary:
        "테니스와 피클볼을 함께 운영하는 북부권 라켓스포츠 옵션으로, 형제자매나 부모가 함께 접근하기 좋습니다.",
      highlights: ["Pickleball", "Lessons", "North Lakes group"],
      website: "https://www.matchpoint.net.au/pickleball/",
      sourceUrl: "https://www.matchpoint.net.au/pickleball/",
      image:
        "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  dance: [
    {
      name: "Five Star Dance Academy",
      category: "댄스 스튜디오",
      suburb: "North Lakes",
      address: "8 Wills Street, North Lakes QLD 4509",
      phone: "0422 592 124",
      ageRange: "유아부터 청소년",
      pricing: "문의 필요",
      hours: "타임테이블 운영, 장르별 반 편성",
      programs: ["Ballet", "Jazz", "Tap", "Hip Hop", "Acrobatics"],
      badges: ["공식 사이트", "North Lakes", "장르 다양"],
      lastVerified: "2026-03",
      summary:
        "North Lakes Business Park에 위치한 대형 스튜디오로, 발레, 재즈, 탭, 힙합, 아크로 등 장르 선택폭이 넓습니다.",
      highlights: ["Ballet", "Hip Hop", "Acrobatics"],
      website: "https://fivestardance.com.au/classes/",
      sourceUrl: "https://fivestardance.com.au/enrolment/",
      image:
        "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Red Music + Dance",
      category: "댄스 / 공연예술",
      suburb: "Clontarf / Moreton Bay Region",
      address: "4/15 Redcliffe Gardens Drive, Clontarf QLD 4019",
      phone: "07 3496 2930",
      ageRange: "어린이부터 청소년",
      pricing: "문의 필요",
      hours: "클래스별 상이, 방과 후 및 주말반 문의",
      programs: ["Ballet", "Jazz", "Tap", "Hip Hop", "Performance"],
      badges: ["공식 사이트", "공연예술", "Moreton Bay"],
      lastVerified: "2026-03",
      summary:
        "Moreton Bay 지역 전반을 커버하는 공연예술 센터로, 북부권 가족이 접근 가능한 발레, 재즈, 힙합, 탭 프로그램이 있습니다.",
      highlights: ["Ballet", "Jazz", "Tap"],
      website: "https://redmusicanddance.com.au/",
      sourceUrl: "https://redmusicanddance.com.au/rshs/",
      image:
        "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  music: [
    {
      name: "Red Music + Dance",
      category: "피아노 / 보컬 / 기타",
      suburb: "Clontarf / Moreton Bay Region",
      address: "4/15 Redcliffe Gardens Drive, Clontarf QLD 4019",
      phone: "07 3496 2930",
      ageRange: "유아부터 청소년",
      pricing: "문의 필요",
      hours: "학교 내 수업 및 센터 수업 운영, 시간표 문의 필요",
      programs: ["Piano", "Singing", "Guitar", "Contemporary music lessons"],
      badges: ["공식 사이트", "악기 레슨", "학교 연계"],
      lastVerified: "2026-03",
      summary:
        "댄스뿐 아니라 음악 수업까지 함께 운영하는 공연예술 센터라, 형제자매가 다른 장르를 함께 다니기 좋은 장점이 있습니다.",
      highlights: ["Music programs", "Performance focus", "Moreton Bay access"],
      website: "https://redmusicanddance.com.au/",
      sourceUrl: "https://redmusicanddance.com.au/rshs/",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Moreton Youth Music",
      category: "앙상블 / 오케스트라",
      suburb: "North Brisbane / Moreton Bay",
      address: "44-46 Ogg Road, Murrumba Downs QLD 4503",
      phone: "공식 사이트 문의 사용",
      ageRange: "학생 연주자",
      pricing: "문의 필요",
      hours: "Fiddle Group 예시: 월요일 6:15pm - 7:00pm",
      programs: ["String Orchestra", "Fiddle Group", "Youth ensembles"],
      badges: ["공식 사이트", "앙상블", "연주 경험"],
      lastVerified: "2026-03",
      summary:
        "오케스트라와 앙상블 형태의 청소년 음악 프로그램으로, 개인레슨 이후 합주 경험을 원하는 학생에게 잘 맞습니다.",
      highlights: ["Youth orchestra", "Ensemble", "Performance opportunities"],
      website: "https://www.myme-inc.com/",
      sourceUrl: "https://www.myme-inc.com/fiddle-group",
      image:
        "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  golf: [
    {
      name: "X-Golf North Lakes",
      category: "실내 골프",
      suburb: "North Lakes",
      address: "North Lakes QLD, 상세 주소는 공식 사이트 확인",
      phone: "공식 사이트 문의 사용",
      ageRange: "초보 입문부터 가족형",
      pricing: "레슨/베이 이용은 문의 필요",
      hours: "운영시간은 공식 사이트 확인",
      programs: ["Lessons", "Simulator golf", "Mini golf"],
      badges: ["공식 사이트", "실내 골프", "가족형"],
      lastVerified: "2026-03",
      summary:
        "실내 시뮬레이터와 미니골프가 함께 있어 아이가 골프를 가볍게 시작해보기 좋은 형태의 공간입니다.",
      highlights: ["Lessons", "Indoor golf", "Mini golf"],
      website: "https://www.xgolf.com.au/locations/north-lakes-qld/",
      sourceUrl: "https://www.xgolf.com.au/locations/north-lakes-qld/",
      image:
        "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Redcliffe Golf Club",
      category: "주니어 골프 / 정규 코스",
      suburb: "Clontarf",
      address: "Handsworth Street, Clontarf QLD 4019",
      phone: "07 3284 5485",
      ageRange: "주니어 골프",
      pricing: "주니어 연회비 기준 약 $330.10",
      hours: "클럽 및 레슨 시간은 문의 필요",
      programs: ["Junior membership", "18-hole course", "Club golf"],
      badges: ["가격 공개", "정규 코스", "주니어 멤버십"],
      lastVerified: "2026-03",
      summary:
        "노스레이크에서 차로 이동 가능한 정규 골프장으로, 주니어 멤버십과 라운드 경험을 원하는 가족에게 검토 가치가 있습니다.",
      highlights: ["Junior membership", "18-hole course", "Visitor friendly"],
      website: "https://www.redcliffegolf.com/",
      sourceUrl: "https://www.redcliffegolf.com/cms/wp-content/uploads/2021/07/Current-By-Laws-December-2022-updated-6.12.22.pdf",
      image:
        "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1200&q=80",
    },
  ],
};

export const featuredProviders = [
  activityProviders.swimming[0],
  activityProviders.sports[0],
  activityProviders.dance[0],
  activityProviders.music[0],
];

export const businessDirectory: DirectoryEntry[] = [
  {
    name: "하나로마트 노스레이크",
    category: "한인마트",
    address: "Westfield North Lakes, Cnr Anzac Ave & North Lakes Dr, North Lakes QLD 4509",
    phone: "공식 매장 페이지 참조",
    hours: "월-수/금/토 9am-7pm, 목 9am-9pm, 일 9am-6pm",
    pricing: "마트 상품별 상이",
    verification: "공식 매장 페이지",
    website: "https://www.hanaromartonline.com/Stores/Products",
    area: "North Lakes",
    note: "장보기와 기본 반찬, 냉동식품, 간단한 생활재료를 해결하기 좋은 지역 거점",
  },
  {
    name: "밥보이 코리안 바비큐",
    category: "한식당 / 푸드코트",
    address: "Level 1 Food Court, Westfield North Lakes, North Lakes QLD 4509",
    phone: "문의 필요",
    hours: "공식 쇼핑센터 기준 오늘 10:00am-5:00pm, 센터 영업일 기준 변동 가능",
    pricing: "우버이츠 기준 메인 약 $21-$27",
    verification: "Westfield + 주문 플랫폼",
    website: "https://www.westfield.com.au/northlakes/store/JxfZAYRR3wQmLGjKW6oN0/bapboi",
    area: "North Lakes",
    note: "가족 외식이나 지인 모임 때 자주 찾기 좋은 한식당",
  },
  {
    name: "치킨 인 서울",
    category: "치킨 / 한식",
    address: "Shop 1/59 Endeavour Boulevard, North Lakes QLD 4509",
    phone: "0490 033 509",
    hours: "화-수 4pm-8pm, 목-금 4pm-8:30pm, 토 12pm-8:30pm, 일 12pm-8pm",
    pricing: "메뉴별 상이, 문의 필요",
    verification: "비즈니스 사이트 공개 정보",
    website: "https://chicken-in-seoul.business.site/?utm_source=gmb&utm_medium=referral",
    area: "North Lakes",
    note: "아이들과 함께 가기 쉬운 메뉴 구성이 강점인 치킨 중심 옵션",
  },
  {
    name: "차림 코리안 바비큐",
    category: "한식당 / 바비큐",
    address: "9/27 Discovery Drive, North Lakes QLD 4509",
    phone: "0455 794 054",
    hours: "화-금 5pm-10pm, 토 11:30am-2:30pm & 5pm-10pm, 일 11:30am-2:30pm & 5pm-9pm",
    pricing: "메뉴별 상이, 문의 필요",
    verification: "비즈니스 사이트 공개 정보",
    website: "https://charimkoreanbbq.business.site/",
    area: "North Lakes",
    note: "디스커버리 드라이브 라인에서 찾기 쉬운 한식 바비큐 옵션",
  },
  {
    name: "불고기",
    category: "한식당 / 바비큐",
    address: "27 Discovery Drive, North Lakes QLD 4509",
    phone: "0493 987 110",
    hours: "화-목 5:30pm-9pm, 금-토 5:30pm-9:30pm, 일 5:30pm-8:30pm",
    pricing: "메뉴별 상이, 문의 필요",
    verification: "공개 운영 페이지",
    website: "https://www.facebook.com/profile.php?id=61562969647364&mibextid=ZbWKwL",
    area: "North Lakes",
    note: "디스커버리 드라이브 쪽에서 고깃집 옵션을 찾을 때 같이 비교하기 좋은 곳",
  },
  {
    name: "노스레이크 순복음교회",
    category: "교회",
    address: "Lakefield Drive & Endeavour Boulevard, North Lakes QLD 4509",
    phone: "문의 필요",
    hours: "주일예배 중심, 세부 시간 문의 필요",
    pricing: "해당 없음",
    verification: "교단/단체 공개 정보",
    area: "North Lakes",
    note: "정착 초기 교민 네트워크를 만들고 지역 정보를 얻기 좋은 커뮤니티 접점",
  },
  {
    name: "선샤인코스트 한인 성결교회",
    category: "교회",
    address: "3 Honeysuckle Drive, Bokarina QLD 4575",
    phone: "0410 228 572",
    hours: "예배 및 모임 시간은 문의 필요",
    pricing: "해당 없음",
    verification: "공개 운영 페이지",
    website: "https://m.facebook.com/sunshinecoastkoreanchurch",
    area: "Bokarina",
    note: "선샤인코스트 쪽 교민 연결이 필요한 가정에게 도움이 되는 커뮤니티 채널",
  },
  {
    name: "선샤인코스트 한인교회",
    category: "교회",
    address: "6 Millwell Road, Maroochydore QLD 4558",
    phone: "0427 106 531",
    hours: "한인 예배 일요일 오전 11시",
    pricing: "해당 없음",
    verification: "공개 운영 페이지",
    website: "http://www.maroochydoreuc.org.au",
    area: "Maroochydore",
    note: "노스레이크 외에도 선샤인코스트 생활권을 오가는 분들에게 유용한 한인 예배 정보",
  },
  {
    name: "교민 커뮤니티 등록 서비스",
    category: "학원 / 개인레슨 / 생활서비스",
    address: "North Lakes - Brisbane North",
    phone: "업체별 상이",
    hours: "업체별 상이",
    pricing: "업체별 상이",
    verification: "커뮤니티 매거진 공개 리스트",
    website: "https://fliphtml5.com/ycdmd/bnxe/QLD_KOREAN_LIFE_-_13_JUN_2025/",
    area: "North Lakes - Mango Hill",
    note: "영어, 수학, 피아노, 미술, 법률, 금융, 생활서비스 등은 커뮤니티 지면 리스트를 추가 조사 출발점으로 삼기 좋습니다.",
  },
];

export const cabooltureFarms: FarmEntry[] = [
  {
    name: "오아시스 베리스",
    area: "Caboolture",
    address: "434 Bribie Island Road, Caboolture QLD 4510",
    phone: "(07) 5497 4253",
    hours: "딸기 축제 시즌 주말 8:00-16:00, 일반 방문 전 페이스북 공지 확인 권장",
    workWindow: "주요 딸기 시즌 5-10월, 체험/축제는 주로 9-10월",
    workNote: "공식 채용 페이지는 확인되지 않아도 지역 대표 딸기농장으로 시즌 동향 확인용 가치가 큽니다.",
    verification: "Visit Moreton Bay 공개 관광 페이지",
    website: "https://www.visitmoretonbayregion.com.au/blog/moreton-bay-region-fresh-strawberry-trail",
    sourceUrl: "https://www.visitmoretonbayregion.com.au/blog/moreton-bay-region-fresh-strawberry-trail",
    note: "카불쳐에서 가장 많이 언급되는 딸기 방문지 중 하나로, 워홀러는 농장 위치 감 잡기와 시즌 분위기 파악용으로 먼저 보기 좋습니다.",
  },
  {
    name: "퀸즐랜드 베리스",
    area: "Ningi / Caboolture 생활권",
    address: "11 Saint Road, Ningi QLD 4511",
    phone: "0427 833 281",
    hours: "오피스 운영시간은 별도 문의",
    workWindow: "Caboolture 지역 딸기 시즌 중심, 회사 소개상 연간 고용 규모 큼",
    workNote: "공식 사이트에 Caboolture 재배지와 대규모 시즌 고용 정보가 공개되어 있어 워홀러가 가장 먼저 체크하기 좋은 곳 중 하나입니다.",
    verification: "공식 사이트 + 공개 채용/농장 정보",
    website: "https://qldberries.com.au/our-locations",
    sourceUrl: "https://qldberries.com.au/our-locations",
    note: "Caboolture와 Stanthorpe에 재배지를 둔 대형 베리 생산업체로, 시즌 이동 계획을 길게 보는 분에게 유용합니다.",
  },
  {
    name: "롤린 팜스",
    area: "Elimbah",
    address: "Openfield Strawberry Farm, Elimbah QLD 4516",
    phone: "(07) 5497 4253",
    hours: "Pick Your Own 세션은 보통 8:30-15:00대 타임슬롯 운영, 방문 전 공지 확인 권장",
    workWindow: "딸기 시즌 5-10월 중심",
    workNote: "공식 채용 페이지는 뚜렷하지 않지만, 엘림바 쪽 동선과 대표 딸기 시즌 장소를 함께 볼 때 참고 가치가 큽니다.",
    verification: "지역 관광/가족 액티비티 공개 페이지",
    website: "https://brisbanekids.com.au/pick-your-own-fruit-brisbane/",
    sourceUrl: "https://brisbanekids.com.au/pick-your-own-fruit-brisbane/",
    note: "가족 체험으로도 유명하고, 카불쳐 북쪽 생활권에서 시즌 분위기와 현장 접근성을 보기 좋은 농장입니다.",
  },
  {
    name: "스토다트 패밀리 팜스",
    area: "Bellmere",
    address: "219 Stern Road, Bellmere QLD 4510",
    phone: "채용 공고 페이지로 확인",
    hours: "포지션 오픈 시 블로그 공지, 피크 시즌에는 월-토 근무 가능성 안내",
    workWindow: "식재 3-4월, 관리 4월 중순부터, 픽킹/패킹은 4-5월부터 10월 말",
    workNote: "공식 고용 블로그가 따로 있어 워홀러가 시즌 오픈 여부를 직접 확인하기 가장 좋은 농장 중 하나입니다.",
    verification: "공식 채용 블로그 + 공개 농장 정보",
    website: "https://stothartemployment.com/category/employment-opportunities/",
    sourceUrl: "https://stothartemployment.com/about/",
    note: "벨미어 대표 딸기농장으로, 시즌별 업무 시기 설명이 잘 정리돼 있어 처음 오는 분에게 특히 유용합니다.",
  },
  {
    name: "TSL 패밀리 팜스",
    area: "Wamuran",
    address: "Turnbull Road, Wamuran QLD 4512",
    phone: "공개 대표번호 확인 어려움",
    hours: "채용/운영 시간은 Taste'n'See 사이트와 공개 디렉토리 재확인 권장",
    workWindow: "와무란 딸기 시즌 중심",
    workNote: "Taste'n'See 브랜드 역사상 Stothart와 함께 운영된 인접 농장으로 소개되며, 공개 주소는 Wamuran Turnbull Rd 기준으로 확인됩니다.",
    verification: "Taste'n'See 공식 소개 + 공개 디렉토리",
    website: "https://www.tastenseestrawberries.com.au/our-story",
    sourceUrl: "https://www.tastenseestrawberries.com.au/our-story",
    note: "Stothart와 함께 자주 언급되는 와무란 농장으로, 인근 지원처를 넓게 볼 때 같이 체크하기 좋습니다.",
  },
  {
    name: "피냐타 팜스",
    area: "Wamuran",
    address: "382 Scurr Road, Wamuran QLD 4512",
    phone: "(07) 5497 4295",
    hours: "문의 및 채용 관련은 공식 사이트/이메일 확인 권장",
    workWindow: "Wamuran 딸기 시즌 기반, 회사 소개상 연중 생산 체계",
    workNote: "공식 사이트에 주소와 대표번호가 공개되어 있고 대형 생산 브랜드라 워홀러가 신뢰도 높은 출발점으로 보기 좋습니다.",
    verification: "공식 사이트",
    website: "https://www.pinata.com.au/chatter/media-releases/strawberry-manager-wins-industry-award",
    sourceUrl: "https://www.pinata.com.au/chatter/media-releases/strawberry-manager-wins-industry-award",
    note: "Coles와 Woolworths 유통 브랜드로 알려진 대형 농장이라 시즌 일자리 탐색 시 자주 거론됩니다.",
  },
  {
    name: "마이 베리스",
    area: "Caboolture",
    address: "Unit 2, 7 Lear Jet Drive, Caboolture QLD 4510",
    phone: "0422 366 200",
    hours: "월-목 8:00-16:00, 금 8:00-15:00, 토-일 휴무",
    workWindow: "고용 문의 이메일 상시 공개, 시즌별 인력 문의 가능",
    workNote: "공식 연락 페이지에 employment 전용 이메일이 따로 공개돼 있어 포장·가공·오피스형 문의 출발점으로 좋습니다.",
    verification: "공식 사이트",
    website: "https://www.myberries.com.au/contactus",
    sourceUrl: "https://www.myberries.com.au/contactus",
    note: "신선·냉동·동결건조 베리 제품을 다루는 브랜드로, 순수 필드워크 외에 가공/패킹 계열을 찾는 분에게도 참고가 됩니다.",
  },
  {
    name: "선레이 스트로베리스",
    area: "Wamuran",
    address: "347 King Road, Wamuran QLD 4512",
    phone: "(07) 5496 7364",
    hours: "공개 상세 운영시간 확인 어려움",
    workWindow: "Wamuran 딸기 시즌 중심",
    workNote: "공개 디렉토리 기준 주소와 번호가 확인되며, 와무란 일대 농장 후보를 넓게 볼 때 유용합니다.",
    verification: "공개 비즈니스 디렉토리",
    sourceUrl: "https://australia.chamberofcommerce.com/business-directory/queensland/wamuran/farm/4097658-donnybrook-strawberry-farm",
    note: "같은 Wamuran 축 농장군 안에서 함께 확인되는 곳으로, 직접 문의 전 공식 운영 채널 추가 확인을 권장합니다.",
  },
  {
    name: "허메스 스트로베리스",
    area: "Wamuran",
    address: "490 Newlands Road, Wamuran QLD 4512",
    phone: "0422 333 071",
    hours: "공식 사이트에 Work With Us 메뉴 운영, 구체 시간은 공고별 상이",
    workWindow: "공식 사이트 기준 5-10월 수확, 현재 식재 포지션 공고도 게시",
    workNote: "공식 사이트에서 Work With Us와 Employment Application이 바로 보여 워홀러가 직접 지원 흐름을 보기 쉽습니다.",
    verification: "공식 사이트",
    website: "https://hermesstrawberries.com.au/",
    sourceUrl: "https://hermesstrawberries.com.au/",
    note: "가족 운영 딸기농장으로 Fair Farms 관련 안내도 공개되어 있어 근무환경 기준을 함께 살펴보기 좋습니다.",
  },
  {
    name: "루바베리 패밀리 팜",
    area: "Wamuran",
    address: "65 Ziviani Road, Wamuran QLD 4512",
    phone: "0417 741 692",
    hours: "토-일 9:30-15:30 공개, 평일 휴무",
    workWindow: "방문 농장 성격이 강하고 공개 채용 정보는 제한적",
    workNote: "직접적인 워홀 채용 정보보다는 가족 방문형 딸기농장으로 더 잘 알려져 있어, 체험/지역 파악용 보조 리스트로 보는 편이 좋습니다.",
    verification: "공개 비즈니스 디렉토리 + 공식 웹사이트 링크",
    website: "https://luvaberry.com.au/",
    sourceUrl: "https://australia.chamberofcommerce.com/business-directory/queensland/wamuran/farm/3650996-luvaberry-family-farm",
    note: "와무란 쪽 딸기농장 분포를 이해하는 데 도움이 되는 방문형 농장으로, 가족 주말 코스로도 함께 볼 수 있습니다.",
  },
  {
    name: "고윈타 팜스",
    area: "Beerwah / 확장권",
    address: "205 Burys Road, Beerwah QLD 4519",
    phone: "(07) 5494 0365",
    hours: "공개 상세 운영시간 확인 어려움",
    workWindow: "카불쳐 인근 확장권 농장 탐색용",
    workNote: "카불쳐 바로 옆 생활권은 아니지만, 북쪽 확장권으로 일자리 범위를 넓힐 때 참고하기 좋은 베리 농장입니다.",
    verification: "공개 비즈니스 디렉토리",
    sourceUrl: "https://www.stg.eks.for.truelocal.com.au/qld/beerwah/gowinta-farms-15273633",
    note: "Beerwah 쪽까지 범위를 넓혀 보는 워홀러에게 유용한 보조 후보지입니다.",
  },
];

export const seasonStages: SeasonStage[] = [
  {
    period: "3-4월",
    title: "시즌 준비",
    detail: "모종 심기와 초기 준비가 진행되는 시기라, 바로 큰 수확을 기대하기보다 자리 잡는 기간으로 보는 편이 좋습니다.",
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
    title: "에덴레이크 파크런",
    area: "Eden Lake / North Lakes",
    description:
      "Lake Eden에서 열리는 무료 5km 파크런으로, 매주 토요일 아침 가족이 함께 걷거나 달리며 하루를 시작하기 좋은 대표 주말 루틴입니다.",
    image:
      "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=1200&q=80",
    schedule: "매주 토요일 오전 7:00",
    details: [
      "장소: Lake Eden, North Lakes",
      "형식: 무료 5km 타임 이벤트",
      "참여: 걷기, 조깅, 달리기, 자원봉사, 구경 모두 가능",
      "첫 참가 전 parkrun Australia에서 무료 등록 후 개인 바코드 필요",
      "City of Moreton Bay 안내 기준으로 가족과 반려견 동반 가능",
    ],
    website: "https://www.moretonbay.qld.gov.au/Services/Sport-Recreation/Healthy-And-Active-Lifestyles/Healthy-Active-Moreton/PR-Parkrun-North-Lakes",
  },
  {
    title: "Harmony Week 주말 프로그램",
    area: "Moreton Bay",
    description:
      "2026년 Harmony Week는 3월 16일부터 22일까지 진행되고, 3월 21일 전후로 다문화 커뮤니티 분위기를 느끼기 좋은 주말 코스로 볼 수 있습니다.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    schedule: "2026년 3월 20일-22일 주말",
    details: [
      "기간: Monday 16 March 2026 - Sunday 22 March 2026",
      "성격: cultural diversity celebration, libraries and community activities 연결",
      "포인트: 한인 가족이 가볍게 지역 다문화 프로그램 분위기를 느끼기 좋음",
      "공식 페이지에서 연계 행사와 라이브러리 활동 확인 가능",
    ],
    website: "https://www.moretonbay.qld.gov.au/Events/Harmony-Week",
  },
  {
    title: "마이크로뱃 Walk and Talk",
    area: "Kumbartcho, Eatons Hill",
    description:
      "해 질 무렵 박쥐 탐지기까지 써보는 자연 체험형 프로그램이라, 아이들과 조금 특별한 토요일 저녁을 보내기 좋습니다.",
    image:
      "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?auto=format&fit=crop&w=1200&q=80",
    schedule: "2026년 3월 28일 토요일 5:30pm-7:30pm",
    details: [
      "장소: Kumbartcho Sanctuary, 15 Bunya Pine Court, Eatons Hill 4037",
      "비용: 무료",
      "형식: animal talk + guided evening walk",
      "포인트: 박쥐 생태를 배우고 echo-meter detector로 관찰",
    ],
    website: "https://www.moretonbay.qld.gov.au/Events/Microbat-Walk-And-Talk",
  },
  {
    title: "Farmyard Fun Day",
    area: "Redcliffe Museum",
    description:
      "병아리, 토끼, 양, 미니염소 같은 동물을 직접 보고 만질 수 있는 무료 체험형 행사라 4월 가족 외출 카드로 아주 좋습니다.",
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1200&q=80",
    schedule: "2026년 4월 11일 토요일 10:30am-12:30pm",
    details: [
      "장소: Redcliffe Museum, 75 Anzac Avenue, Redcliffe 4020",
      "비용: 무료, 예약 불필요",
      "형식: mobile petting zoo + face painting + balloon toy + sausage sizzle",
      "대상: all ages",
    ],
    website: "https://www.moretonbay.qld.gov.au/Galleries-Museums/Events/RM/Farmyard-Fun-Day",
  },
  {
    title: "Twilight Paddle and Damper",
    area: "Joyner",
    description:
      "노스파인강을 따라 카누를 타고, 돌아와서 damper까지 먹는 프로그램이라 10대 자녀가 있으면 꽤 만족도가 높을 주말 체험입니다.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    schedule: "2026년 4월 11일 토요일 4:00pm-7:00pm",
    details: [
      "장소: The Y Camp Bundalong Activity Centre, 81 Byrnes Road North, Joyner 4500",
      "비용: $5.00",
      "대상: ages 10-17",
      "조건: 수영 가능해야 하며 장비는 제공",
    ],
    website: "https://www.moretonbay.qld.gov.au/Services/Sport-Recreation/Healthy-And-Active-Lifestyles/Healthy-Active-Moreton/9191-Twilight-Paddle-and-Damper",
  },
  {
    title: "Moreton Bay PrideFest",
    area: "Pine Rivers Park, Strathpine",
    description:
      "2026년 4월 대표 무료 주말 축제로, 공연, 마켓, 푸드, 커뮤니티 부스가 함께 열려 하루 외출 코스로 쓰기 좋습니다.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    schedule: "2026년 4월 18일 토요일 10:00am-4:00pm",
    details: [
      "장소: Pine Rivers Park, 125 Gympie Rd, Strathpine 4500",
      "비용: 무료",
      "포인트: live entertainment, markets, food vendors, inclusive/quiet spaces",
      "가족 친화 행사로 소개됨",
    ],
    website: "https://www.moretonbay.qld.gov.au/Events/Moreton-Bay-PrideFest",
  },
  {
    title: "Create your own plant-animal",
    area: "Pine Rivers Park, Strathpine",
    description:
      "PrideFest 안에서 열리는 무료 아트 워크숍으로, 아이들이 직접 상상 속 식물-동물 캐릭터를 만들어볼 수 있습니다.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
    schedule: "2026년 4월 18일 토요일 10:00am-4:00pm",
    details: [
      "장소: Pine Rivers Park, 125 Gympie Rd, Strathpine 4500",
      "비용: 무료",
      "형식: David Spooner와 함께하는 hands-on community art workshop",
      "대상: children and adults alike",
    ],
    website: "https://www.moretonbay.qld.gov.au/Events/Create-your-own-plant-animal",
  },
  {
    title: "Yin Yoga",
    area: "Woody Point",
    description:
      "조용하게 쉬는 주말을 원하면 Woody Point의 저렴한 요가 세션도 괜찮습니다. 바쁜 한 주 뒤 몸을 풀기에 좋은 코스입니다.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    schedule: "2026년 4월 25일 토요일 11:00am-12:00pm",
    details: [
      "장소: Clontarf CWA Hall, 16 Victoria Avenue, Woody Point 4019",
      "비용: $4.00",
      "대상: 18+",
      "준비물: yoga mat, towel, water bottle",
    ],
    website: "https://www.moretonbay.qld.gov.au/Services/Sport-Recreation/Healthy-And-Active-Lifestyles/Healthy-Active-Moreton/7291-Yin-Yoga",
  },
  {
    title: "플래닛 피트니스 실내 운동 루틴",
    area: "North Lakes 주변",
    description:
      "날씨가 덥거나 비 오는 주말에는 노스레이크에서 차로 움직이기 쉬운 Planet Fitness 지점들을 실내 운동 루틴으로 잡기 좋습니다. 미국계 대형 글로벌 브랜드라 시설 규모가 크고, 주 7달러대 Classic 또는 주 10.95달러 PF Black Card로 가성비가 강한 편입니다.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    schedule: "주말 24/7 출입, staffed hours는 토 9:00-17:00 / 일 9:00-16:00 기준",
    details: [
      "가격: Classic Weekly 주 $7.00, PF Black Card 주 $10.95 기준, 둘 다 fortnightly 결제",
      "추가비용: 연회비 $49가 가입 약 8주 후 청구될 수 있어 가입 전 offers 페이지 확인 권장",
      "시설: huge selection of cardio and strength machines, 무료 fitness training, PF Express 30분 루틴 안내",
      "브랜드: Planet Fitness Franchising, LLC 기반의 미국계 대형 체인으로 운영 안정성과 표준화가 강한 편",
      "Rothwell: 743-757 Deception Bay Road, Rothwell QLD 4022 / 07 3198 6668",
      "Morayfield: 312 Morayfield Road, Morayfield QLD 4506 / 07 5613 0300",
      "Caboolture: The Big Fish Junction, 459 Pumicestone Road, Caboolture QLD 4510 / 07 5208 8099",
      "공식 club page 기준 세 지점 모두 Open 24/7이며 주말 staffed hours는 토 9am-5pm, 일 9am-4pm",
      "공식 offers 페이지 기준 무료 day pass 신청 가능",
    ],
    website: "https://planetfitnessaustralia.com.au/gyms/rothwell-qld/",
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

export const birthdayFreebies: BirthdayFreebie[] = [
  {
    brand: "헝그리잭스",
    category: "패스트푸드",
    benefit: "생일 쿠폰 제공",
    app: "Hungry Jack's App / Voucher Club",
    joinTiming: "생일 전에 회원 가입과 생일 등록 권장",
    validity: "앱 쿠폰 도착 후 기한 확인",
    condition: "쿠폰 종류는 계정별로 다를 수 있음",
    status: "공식 FAQ 확인",
    sourceUrl: "https://www.hungryjacks.com.au/help-centre",
    note: "공식 도움말에서 생일 쿠폰 제공을 안내하고 있어 앱 가입형 기본 후보로 넣기 좋습니다.",
  },
  {
    brand: "마이맥카스",
    category: "패스트푸드",
    benefit: "생일 서프라이즈 제공",
    app: "MyMacca's App",
    joinTiming: "생일 월 전까지 birth month 입력 권장",
    validity: "생일 시점 앱에서 확인",
    condition: "프로필에 birth month 저장 필요",
    status: "공식 FAQ 확인",
    sourceUrl: "https://mcdonalds.com.au/mymaccas-faq",
    note: "공식 FAQ는 생년월 정보를 입력하면 birthday surprise를 받을 수 있다고 안내합니다.",
  },
  {
    brand: "오포토",
    category: "패스트푸드",
    benefit: "$3-$10 생일 바우처",
    app: "Flame Rewards",
    joinTiming: "생일 전 날짜 등록 필요",
    validity: "발급 후 앱 내 기한 확인",
    condition: "등급에 따라 Orange $3, Platinum $10 등으로 달라짐",
    status: "공식 FAQ 확인",
    sourceUrl: "https://web2.stg.oporto.com.au/faqs/",
    note: "생일 전 날짜를 등록해두면 Flame Rewards 등급에 따라 다른 금액의 birthday voucher가 발급됩니다.",
  },
  {
    brand: "레드루스터",
    category: "패스트푸드",
    benefit: "$3-$10 생일 바우처",
    app: "Red Royalty",
    joinTiming: "생일 전 프로필 완성 권장",
    validity: "생일 후 30일",
    condition: "등급에 따라 Red $3, Silver $5, Gold $8, Black $10",
    status: "공식 멤버십 페이지 확인",
    sourceUrl: "https://webv2.tst.redrooster.com.au/redroyalty-info/",
    note: "방문 횟수에 따라 바우처 금액이 커지는 구조라 자주 가는 분에게 특히 유리합니다.",
  },
  {
    brand: "그릴드",
    category: "버거 / 캐주얼",
    benefit: "생일 달 매일 무료 칩스",
    app: "Relish via Grill'd App",
    joinTiming: "생일 전 회원 가입 권장",
    validity: "생일 달 전체",
    condition: "버거 또는 샐러드 구매 시 적용",
    status: "공식 프로모션 페이지 확인",
    sourceUrl: "https://grilld.com.au/relish/spend-and-get-jan-2026",
    note: "생일 하루가 아니라 한 달 내내 daily free chips라 체감이 큰 편입니다.",
  },
  {
    brand: "스타벅스 오스트레일리아",
    category: "커피 / 음료",
    benefit: "무료 음료",
    app: "Starbucks Rewards App",
    joinTiming: "생일 전 Rewards 가입 권장",
    validity: "생일 달 말일까지",
    condition: "앱 리워드 회원이어야 함",
    status: "공식 스토리 페이지 확인",
    sourceUrl: "https://www.starbucks.com.au/stories/coffee-and-products/starbucks-rewards-have-you-joined-our-coffee-rewards-program/",
    note: "공식 안내에서 birthday month 안에 무료 음료를 즐길 수 있다고 밝히고 있습니다.",
  },
  {
    brand: "브럼비스",
    category: "베이커리",
    benefit: "무료 핑거번 또는 컵케이크",
    app: "Brumby's Rewards",
    joinTiming: "생일 최소 1개월 전 등록 필요",
    validity: "생일 달 동안",
    condition: "리워드 회원 한정",
    status: "공식 리워드 페이지 확인",
    sourceUrl: "https://www.brumbys.com.au/brumbysrewards/",
    note: "리워드 페이지와 약관 모두 등록 회원에게 생일 달 동안 핑거번 또는 컵케이크 제공을 안내합니다.",
  },
  {
    brand: "도넛킹",
    category: "디저트 / 카페",
    benefit: "무료 일반 사이즈 핫/콜드 음료",
    app: "Donut King Rewards",
    joinTiming: "생일 최소 7일 전 가입 권장",
    validity: "생일 7일 전 발급, 이후 1개월",
    condition: "리워드 회원 한정",
    status: "공식 FAQ 및 약관 확인",
    sourceUrl: "https://www.donutking.com.au/dk-rewards",
    note: "공식 DK Rewards FAQ는 free birthday beverage가 생일 7일 전에 들어오고 한 달간 유효하다고 설명합니다.",
  },
  {
    brand: "산츄로",
    category: "디저트 / 카페",
    benefit: "무료 미디엄 츄러스 + $20 Churros Fiesta",
    app: "el SOCIAL",
    joinTiming: "생일 달 시작 전 가입 + 이전 11개월 내 유료 구매 필요",
    validity: "생일 달 전체",
    condition: "풀프라이스 구매 이력과 앱/카드 스캔 이력 필요",
    status: "공식 FAQ 확인",
    sourceUrl: "https://www.sanchurro.com/el-social/faqs",
    note: "San Churro는 조건이 가장 상세한 편이라, 가입만 해두고 아무 구매도 없으면 생일 혜택을 못 받을 수 있습니다.",
  },
  {
    brand: "글로리아진스",
    category: "커피 / 음료",
    benefit: "무료 핫/콜드 음료",
    app: "Gloria Jean's Rewards",
    joinTiming: "생일 전 앱 가입 권장",
    validity: "앱 내 기한 확인",
    condition: "리워드 회원 한정",
    status: "공식 리워드 페이지 확인",
    sourceUrl: "https://www.gloriajeans.com.au/rewards",
    note: "공식 Rewards 페이지에서 FREE BIRTHDAY DRINK를 명시하고 있습니다.",
  },
  {
    brand: "자메이카 블루",
    category: "카페",
    benefit: "무료 스몰 커피",
    app: "Jamaica Blue Rewards",
    joinTiming: "생일 전에 앱 가입 권장",
    validity: "생일 달 전체",
    condition: "이전 11개월 내 최소 1회 구매 필요",
    status: "공식 멤버십 페이지 확인",
    sourceUrl: "https://jamaicablue.com.au/jamaicablue-rewards/",
    note: "생일 달 동안 무료 스몰 커피를 받을 수 있지만, 최근 11개월 내 구매 이력이 있어야 합니다.",
  },
  {
    brand: "머핀브레이크",
    category: "카페 / 베이커리",
    benefit: "무료 스몰 커피 또는 머핀",
    app: "Muffin Mates",
    joinTiming: "생일 전에 멤버십 가입 권장",
    validity: "생일 달 전체",
    condition: "이전 11개월 내 $1 이상 구매 필요",
    status: "공식 멤버십 페이지 확인",
    sourceUrl: "https://muffinbreak.com.au/muffinbreak-rewards/",
    note: "최근 페이지는 free muffin, 일부 약관 문구는 birthday muffin으로 안내돼 있어 매장/앱 화면 최종 확인이 좋습니다.",
  },
];
