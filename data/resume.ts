// ─── PROFILE ───

export const profile = {
  name: "정준영",
  nameEn: "Jeong Junyoung",
  role: "Frontend Engineer",
  eyebrow: "// Frontend Engineer",
  headline: {
    line1: "복잡한 문제를 단순한 경험으로 —",
    line2: "프론트엔드로 해결합니다.",
  },
  sub: "실시간 협업, 멀티테넌트 SaaS, 퍼포먼스 최적화 — 4년간 15개 이상의 클라이언트에 납품된 제품을 프론트엔드로 이끌었습니다.",
  stats: [
    { value: "4", label: "YEARS" },
    { value: "15+", label: "CLIENTS" },
    { value: "2", label: "PRODUCTS" },
  ],
  dashboard: {
    metrics: [
      { label: "Build Time", value: "70%↑" },
      { label: "Clients", value: "15+" },
      { label: "LCP", value: "1.5s" },
    ],
    status: [
      { label: "Production Active", state: "active" as const },
      { label: "Staging Ready", state: "ready" as const },
      { label: "Dev Building", state: "building" as const },
    ],
    summary: [
      { label: "Uptime 99.9%" },
      { label: "Zero Critical Bugs" },
    ],
  },
  contact: {
    email: "fdjy0101@naver.com",
    github: "https://github.com/junic2391",
  },
};

// ─── ABOUT ───

export const about = {
  eyebrow: "// About",
  heading: "어떤 개발자인가",
  cards: [
    {
      icon: "🏗️",
      title: "구조를 먼저 설계합니다",
      body: "기능 구현 전에 확장 가능한 구조를 먼저 고민합니다. 공통 컴포넌트 시스템 설계와 TypeScript 전환을 주도하며 팀 전체의 유지보수 비용을 낮췄습니다.",
    },
    {
      icon: "⚖️",
      title: "트레이드오프를 명시합니다",
      body: "기술 선택 시 포기한 대안을 항상 문서화합니다. '왜 이 기술인가'보다 '무엇을 포기했는가'를 설명할 수 있는 엔지니어가 되고자 합니다.",
    },
    {
      icon: "🚀",
      title: "팀 생산성에 기여합니다",
      body: "당장 눈에 보이지 않아도 팀 전체에 영향을 주는 작업을 좋아합니다. 컴포넌트 추상화, 비동기 레이어 정리, 렌더링 최적화로 팀의 개발 속도를 높여왔습니다.",
    },
  ],
};

// ─── EXPERIENCE ───

export interface ContributionItem {
  label: string;
  detail: string;
}

export interface ExperienceEntry {
  id: string;
  title: string;
  period: string;
  context: string;
  scope: string;
  contributions: ContributionItem[];
  techTags: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "saas-cms",
    title: "SaaS CMS 플랫폼",
    period: "2021.12 — 2024.09",
    context: "15개 이상 클라이언트에 납품된 멀티테넌트 SaaS CMS 플랫폼",
    scope: "프론트엔드 개발 · 아키텍처 설계 · 공통 컴포넌트 시스템 구축",
    contributions: [
      {
        label: "공통 컴포넌트 시스템",
        detail: "Props 인터페이스를 명확히 정의한 공통 컴포넌트 라이브러리를 설계해 전 클라이언트에 일관 적용, 버그 수정 단일화",
      },
      {
        label: "TypeScript 전환",
        detail: "JavaScript 코드베이스를 점진적으로 마이그레이션, 런타임 에러 빈도를 눈에 띄게 감소시키고 온보딩 기간 단축",
      },
      {
        label: "실시간 추상화",
        detail: "SockJS + StompJS 기반 WebSocket 레이어를 커스텀 훅으로 추상화, 기사 ID 단위 토픽 구독으로 불필요한 렌더링 제거",
      },
      {
        label: "렌더링 전략 재설계",
        detail: "Next.js 13 App Router 기반 모바일 웹 전면 리빌딩, SSG/SSR 페이지별 분리로 LCP 4.2s → 1.5s 개선",
      },
      {
        label: "i18n 아키텍처",
        detail: "텍스트 리소스를 JSON 파일로 완전 분리, 코드 배포 없이 언어팩 교체만으로 현지화 반영 가능한 구조 확립",
      },
    ],
    techTags: ["React", "TypeScript", "Next.js", "MobX", "WebSocket", "SockJS", "StompJS", "i18n"],
  },
  {
    id: "backoffice-rebuild",
    title: "백오피스 & 모바일 리빌딩",
    period: "2020.08 — 2021.02",
    context: "중앙일보 백오피스 및 모바일 웹 전면 리빌딩",
    scope: "프론트엔드 개발 · 레거시 마이그레이션 · 비동기 아키텍처 정비",
    contributions: [
      {
        label: "Redux-Saga 도입",
        detail: "컴포넌트에 흩어진 비동기 로직을 Saga 레이어로 집중, API 연동 작업 시간 기존 대비 50% 수준으로 단축",
      },
      {
        label: "대용량 차트 최적화",
        detail: "10만 건 데이터를 청크 단위로 분할 로드 + Debounce 적용, 렌더링 TTI 7,500ms → 800ms 개선",
      },
      {
        label: "통합 편집 플로우 설계",
        detail: "5단계 이상 화면 이동을 단일 SPA로 통합, Froala Editor + Full Calendar 커스텀 모듈 임베드로 워크플로우 간소화",
      },
    ],
    techTags: ["React", "Redux-Saga", "Highcharts", "Froala Editor", "Full Calendar"],
  },
];

// ─── PROJECTS ───

export interface DecisionItem {
  choice: string;
  reason: string;
  tradeoff: string;
}

export interface ProjectData {
  id: string;
  index: string;
  title: string;
  problem: string;
  results: string[];
  decisions: DecisionItem[];
  faqItems?: { question: string; answer: string }[];
  techTags: string[];
}

export const projects: ProjectData[] = [
  {
    id: "saas-cms-platform",
    index: "01",
    title: "SaaS CMS 플랫폼",
    problem: "10개 이상의 클라이언트가 동일한 플랫폼을 동시에 사용하는 멀티테넌트 환경에서, 클라이언트별 UI 중복 구현과 실시간 편집 충돌을 해결해야 했습니다.",
    results: ["15+ Clients", "빌드 시간 70%↑", "LCP 1.5s", "TS 전환 100%"],
    decisions: [
      {
        choice: "WebSocket 레이어를 커스텀 훅으로 추상화",
        reason: "44개 이벤트 도메인을 분류하고, 컴포넌트는 채널명만 선언하면 구독·해제가 자동화되는 구조 설계",
        tradeoff: "외부 실시간 라이브러리(LiveBlocks 등) 생태계 — 도입 시 벤더 락인 위험 판단",
      },
      {
        choice: "공통 컴포넌트 라이브러리 직접 설계",
        reason: "15개 클라이언트 모두 동일한 컴포넌트를 공유, 버그 수정을 한 곳에서 전체 반영",
        tradeoff: "외부 UI 라이브러리(MUI, Ant Design) — 클라이언트별 커스터마이징 자유도가 제한될 것으로 판단",
      },
      {
        choice: "Next.js 13 App Router + 페이지별 렌더링 전략 분리",
        reason: "정적 페이지는 SSG, 실시간 업데이트 영역은 SSR로 분리해 LCP와 SEO를 동시에 개선",
        tradeoff: "기존 CRA 기반 유지 — 레거시 청산에 따른 단기 리스크 감수",
      },
    ],
    faqItems: [
      {
        question: "멀티테넌트 환경에서 클라이언트별 커스터마이징은 어떻게 처리했나요?",
        answer: "테마 토큰을 환경변수로 주입하고, 컴포넌트는 토큰만 참조하도록 설계했습니다. 클라이언트별 분기 로직이 컴포넌트 내부로 침투하지 않도록 Props 인터페이스를 엄격하게 정의했습니다.",
      },
      {
        question: "TypeScript 전환 시 기존 JavaScript 코드와의 공존은 어떻게 했나요?",
        answer: "allowJs: true 옵션으로 점진적 마이그레이션을 진행했습니다. 신규 파일은 TypeScript로, 기존 파일은 수정이 필요할 때마다 타입을 붙이는 방식으로 리스크를 최소화했습니다.",
      },
    ],
    techTags: ["React", "TypeScript", "Next.js", "MobX", "WebSocket", "SockJS"],
  },
  {
    id: "maju",
    index: "02",
    title: "MAJU — 보이스 매칭 소셜",
    problem: "도트 그래픽 기반 보이스 매칭 소셜 서비스를 1인 기획·설계·개발로 처음부터 구축. 빠른 실험과 최소 인프라 비용이 핵심 제약이었습니다.",
    results: ["1인 풀스택 개발", "React Native", "Supabase BaaS"],
    decisions: [
      {
        choice: "React Native (Expo) 선택",
        reason: "Web 개발 경험을 최대한 활용해 iOS/Android 동시 대응, 빠른 프로토타이핑 가능",
        tradeoff: "Flutter — 성능은 우수하나 Dart 학습 곡선과 팀 단독 개발 리스크",
      },
      {
        choice: "Supabase BaaS 도입",
        reason: "Auth, Realtime, Storage를 단일 서비스로 해결, 백엔드 인프라 구축·운영 비용 제거",
        tradeoff: "Custom Node.js 서버 — 유연성은 높으나 1인 운영 환경에서 오버엔지니어링 판단",
      },
    ],
    techTags: ["React Native", "Expo", "Supabase", "TypeScript"],
  },
];

// ─── SKILLS ───

export interface SkillChip {
  name: string;
  primary?: boolean;
}

export interface SkillCategory {
  category: string;
  chips: SkillChip[];
}

export const skills: SkillCategory[] = [
  {
    category: "주력",
    chips: [
      { name: "React", primary: true },
      { name: "Next.js", primary: true },
      { name: "TypeScript", primary: true },
      { name: "JavaScript", primary: true },
    ],
  },
  {
    category: "상태관리",
    chips: [{ name: "MobX" }, { name: "Redux" }, { name: "Redux-Saga" }],
  },
  {
    category: "스타일링",
    chips: [{ name: "Tailwind CSS" }, { name: "CSS3" }, { name: "HTML5" }],
  },
  {
    category: "실시간",
    chips: [{ name: "WebSocket" }, { name: "SockJS" }, { name: "StompJS" }],
  },
  {
    category: "모바일",
    chips: [{ name: "React Native" }, { name: "Expo" }, { name: "Supabase" }],
  },
  {
    category: "도구",
    chips: [{ name: "Git" }, { name: "GitHub" }, { name: "Figma" }, { name: "Swagger" }],
  },
];

// ─── FOOTER ───

export const footer = {
  copyright: "© 2026 정준영 · Frontend Engineer",
  email: "fdjy0101@naver.com",
} as const;
