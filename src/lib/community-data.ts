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

export const publicNav: NavItem[] = [
  { href: "/", label: "홈" },
  { href: "/activities", label: "자녀 레슨" },
  { href: "/directory", label: "업소록" },
  { href: "/caboolture", label: "카불쳐 시즌" },
  { href: "/weekend", label: "주말 뭐할지" },
  { href: "/calendar", label: "연간 캘린더" },
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
  { name: "Oasis Berries", area: "Caboolture", note: "카불쳐 시즌 정보 탐색 시 자주 체크하는 대표 농장군" },
  { name: "Queensland Berries", area: "Caboolture", note: "초기 정착자들이 위치 감을 잡기 좋은 기준점" },
  { name: "Rolin Farms", area: "Elimbah", note: "엘림바 쪽 이동 동선과 함께 보기 좋은 농장" },
  { name: "Stothart Family Farms", area: "Bellmere", note: "벨미어 라인 시즌 체크용" },
  { name: "Pinata Farms", area: "Wamuran", note: "와무란 지역 흐름까지 넓혀 볼 때 유용" },
  { name: "Gowinta Farms", area: "Beerburrum", note: "인근 확장 지역까지 함께 확인하려는 분께 유용" },
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
    title: "수영장 + 공원 코스",
    area: "North Lakes",
    description: "아이들 에너지를 풀기 좋은 물놀이와 잔디공원 조합으로, 더운 시즌 주말 루틴으로 만들기 좋습니다.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "골프 연습장 또는 미니골프",
    area: "Brisbane North",
    description: "부모와 아이가 함께 즐기기 쉬운 활동이라 가족 취미 탐색용으로 잘 맞습니다.",
    image:
      "https://images.unsplash.com/photo-1513553404607-988d4c6ca8b7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "딸기농장 방문 & 체험",
    area: "Caboolture",
    description: "7월부터 10월 사이에는 계절감을 가장 잘 느낄 수 있는 대표적인 주말 나들이 코스가 됩니다.",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "지역 마켓 & 시즌 축제",
    area: "Moreton Bay / Brisbane",
    description: "주말마다 열리는 로컬 마켓과 축제는 영어 환경 적응과 가족 외출을 동시에 잡기 좋습니다.",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80",
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
