// ─── PROFILE ───
export const profile = {
  name: "정준영",
  nameEn: "Jung Junyoung",
  role: "Frontend Developer",
  heroTag: "Frontend Developer · Available for hire",
  headline: {
    line1: "Problem solver,",
    line2: "interface builder.",
  },
  description:
    "신문사 클라이언트 대상 10곳 이상의 CMS 서비스를 구축·유지해온 4년 차 프론트엔드 개발자입니다. 단순히 기능을 구현하는 것을 넘어, 왜 이 기술이 필요한지를 먼저 고민하고 설계합니다.",
  stats: [
    { value: "4.3yr", label: "Experience" },
    { value: "10+", label: "Clients Served" },
    { value: "4", label: "Case Studies" },
  ],
  contact: {
    email: "fdjy0101@naver.com",
    location: "대한민국",
    status: "구직 중 · Available",
  },
} as const;

// ─── ABOUT ───
export const about = {
  paragraphs: [
    "신문사라는 도메인은 <strong>실시간성, 다중 사용자 동시 편집, 복잡한 권한 구조</strong>를 동시에 요구하는 까다로운 환경입니다. 4년간 이 환경에서 서비스를 구축하고 유지하며, 단순 구현이 아닌 <strong>확장 가능한 구조를 설계하는 힘</strong>을 길렀습니다.",
    "TypeScript 도입, 공통 컴포넌트 시스템 구축, React-Router 마이그레이션처럼 당장 눈에 보이지 않더라도 <strong>팀 전체의 생산성과 코드 품질에 기여하는 작업</strong>을 주도해왔습니다.",
    "현재는 도트 그래픽 기반 보이스 매칭 소셜 서비스 <strong>MAJU</strong>를 1인 개발 중입니다. 기획·설계·개발을 혼자 책임지는 환경에서 제 설계 사고를 직접 검증하고 있습니다.",
  ],
  meta: [
    {
      label: "Email",
      value: "fdjy0101@naver.com",
      href: "mailto:fdjy0101@naver.com",
    },
    { label: "Status", value: "구직 중 · Available", isAvailable: true },
    { label: "Core Stack", value: "React · Next.js · TypeScript" },
    { label: "Side Project", value: "MAJU (보이스 매칭 소셜, 개발 중)" },
    { label: "Education", value: "융합소프트웨어개발자양성과정 수료 (2020)" },
  ],
} as const;

// ─── EXPERIENCE ───
export interface CaseStudyData {
  label: string; // 예: "Case 1"
  title: string;
  sar: {
    situation: string;
    action: string;
    result: string;
  };
  techTags: string[];
}

export interface ProjectGroup {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
  caseStudies: CaseStudyData[];
}

export interface CompanyData {
  name: string;
  role: string;
  period: string;
  projects: ProjectGroup[];
}

export const experience: CompanyData = {
  name: "서울시스템(주)",
  role: "Frontend Developer · 정규직",
  period: "2020.07 — 2024.09 · 4년 3개월",
  projects: [
    {
      id: "cms-core",
      title: "CMS 구축 및 고도화",
      role: "프론트엔드 개발자 | 연구원",
      period: "2021.12 — 2024.09",
      description:
        "CMS 솔루션으로 웹에서 기사 작성, 편집, 출고를 지원하며, 경향신문 등 10개 이상의 신문사에 서비스 제공. PC 및 모바일 웹 애플리케이션 개발 및 유지보수 담당",
      caseStudies: [
        {
          label: "Case 1",
          title: "공통 컴포넌트 시스템 설계 & TypeScript 전환",
          sar: {
            situation:
              "10개 이상의 언론사 클라이언트에 동일한 CMS를 납품하는 구조에서, 클라이언트마다 <strong>유사한 UI가 중복 구현</strong>되어 있었습니다. 하나의 버그 수정이 여러 곳에 각각 반영되어야 했고, JavaScript 코드베이스에서는 <strong>런타임 에러가 빈번</strong>해 유지보수 비용이 높았습니다.",
            action:
              "Props 인터페이스를 명확히 정의한 <strong>공통 컴포넌트 라이브러리를 설계</strong>해 모든 클라이언트 프로젝트에서 일관되게 사용할 수 있는 구조를 만들었습니다. 동시에 <strong>TypeScript를 점진적으로 도입</strong>해 기존 코드베이스를 마이그레이션하고, 잘못된 타입 사용을 컴파일 단계에서 잡도록 설계했습니다.",
            result:
              '버그 수정 시 <strong>한 곳만 고치면 전체 클라이언트에 반영</strong>되는 구조가 갖춰졌습니다. TypeScript 전환으로 런타임 에러 발생 빈도가 눈에 띄게 줄었으며 <span class="needs-verify">CS 인입 월 30% 감소</span>, 새 개발자의 컴포넌트 온보딩 시간도 <span class="needs-verify">1주에서 2일로 단축</span>되었습니다.',
          },
          techTags: ["React", "TypeScript", "MobX", "공통 컴포넌트 설계"],
        },
        {
          label: "Case 2",
          title: "WebSocket 기반 실시간 편집 상태 동기화",
          sar: {
            situation:
              "여러 기자가 동시에 같은 CMS를 사용하는 환경에서, 기사 편집 상태나 출고 여부가 실시간으로 반영되지 않아 <strong>중복 편집 충돌 문제</strong>가 발생했습니다. 페이지 새로고침 없이 상태 변화를 즉시 공유할 수 있는 방법이 필요했습니다.",
            action:
              "<strong>SockJS + StompJS</strong>를 활용해 WebSocket 기반 실시간 통신 레이어를 구축했습니다. 기사 ID 단위 토픽 구독 방식으로 <strong>필요한 데이터만 선택적으로 수신</strong>해 불필요한 렌더링을 방지했습니다. 연결 유실 시 자동 재연결 로직도 함께 구현했습니다.",
            result:
              '편집 상태가 실시간으로 공유되어 <span class="needs-verify">주 평균 15건 발생하던 중복 편집 충돌 제거(0건)</span>. 기자들이 새로고침 없이 타인의 작업 상태를 즉각 확인할 수 있게 되어 끊김 없는 협업 환경이 완벽히 구현되었습니다.',
          },
          techTags: [
            "SockJS",
            "StompJS",
            "WebSocket",
            "MobX",
            "실시간 상태 동기화",
          ],
        },
        {
          label: "Case 3",
          title: "Next.js 13 App Router 도입: 페이지별 렌더링 전략 재설계",
          sar: {
            situation:
              "기존 모바일 웹은 모든 데이터를 클라이언트 사이드에서 fetching해 <strong>초기 로딩이 느리고 SEO에 불리</strong>했습니다. 뉴스 콘텐츠 특성상 검색 노출은 핵심 요구사항이었습니다.",
            action:
              "<strong>Next.js 13 App Router</strong> 기반으로 모바일 웹을 전면 리빌딩했습니다. 기사 목록·상세처럼 정적 생성 가능한 페이지는 SSG, 실시간 변경이 필요한 영역은 서버 컴포넌트로 SSR을 적용하는 방식으로 <strong>페이지별 렌더링 전략을 세분화</strong>했습니다. 클라이언트 번들 크기를 줄이기 위해 서버·클라이언트 컴포넌트 경계를 명확히 설계했습니다.",
            result:
              '<strong>LCP(Largest Contentful Paint) 지표가 개선</strong>되어 초기 렌더링 속도가 <span class="needs-verify">4.2s → 1.5s(64% 단축)</span> 향상되었습니다. SSR 적용으로 주요 기사 페이지의 검색엔진 크롤링 봇 수집량이 이전 대비 <span class="needs-verify">200% 증가</span>하여 신규 트래픽 유입 기반을 완성했습니다.',
          },
          techTags: [
            "Next.js 13",
            "App Router",
            "SSR / SSG",
            "서버 컴포넌트",
            "SEO 최적화",
          ],
        },
        {
          label: "Case 4",
          title: "글로벌 대응을 위한 다국어(i18n) 통합 아키텍처 설계",
          sar: {
            situation:
              "클라이언트 언론사가 다각화되며 국내뿐만 아니라 베트남, 미주 등 글로벌 지원 요구사항이 구체화되었습니다. 뷰 레이어 곳곳에 하드코딩된 한국어를 일일이 찾아서 조건문으로 분기하는 것은 구조적으로 불가능했습니다.",
            action:
              "<strong>i18n 라이브러리 기반 다국어 렌더링 시스템</strong>을 도입해 텍스트 리소스를 완전히 JSON Key 형태의 리소스 파일 단위로 분리(Decoupling)했습니다. React Context 계층에서 전역 언어 상태를 주입해 공통 컴포넌트들이 즉각적으로 텍스트를 스위칭하도록 설계했습니다.",
            result:
              '언어팩(JSON) 파일 번역본 교체만으로 클라이언트 측 코드의 <strong>추가 배포 프로세스 없이 100% 현지화 반영</strong>이 가능해졌습니다. 번역 리퀘스트 및 언어 지원 추가에 들어가던 소요 공수가 <span class="needs-verify">2M/M(약 320시간)에서 0.5M/M(약 80시간) 수준으로 75% 감소</span>하여 신규 권역 진출 비용을 절감했습니다.',
          },
          techTags: ["i18n", "다국어 처리", "React Context", "Architecture"],
        },
      ],
    },
    {
      id: "wms-core",
      title: "중앙일보 WMS 백오피스 및 모바일 리빌딩",
      role: "프론트엔드 개발자 | 연구원",
      period: "2020.08 — 2021.02",
      description:
        "언론사 웹 및 모바일 서비스를 관리하는 시스템 개발. 기사 작성 및 관리 시스템 공통 컴포넌트 개발",
      caseStudies: [
        {
          label: "Case 1",
          title: "레거시 → React 전환 + Redux-Saga로 비동기 아키텍처 정비",
          sar: {
            situation:
              "레거시 코드베이스는 비동기 처리 로직이 각 컴포넌트에 흩어져 있어 <strong>코드 파악이 어렵고 동일한 API 호출 패턴이 중복 작성</strong>되어 있었습니다. 유지보수와 신규 기능 추가 모두 비효율적인 상황이었습니다.",
            action:
              "React 전환과 동시에 <strong>Redux-Saga를 도입해 비동기 로직을 한 레이어로 집중</strong>했습니다. API 호출, 로딩 상태, 에러 처리를 Saga에서 일관되게 다루고, 컴포넌트는 UI 표현에만 집중하도록 관심사를 분리했습니다.",
            result:
              '새로운 API 연동 시 작업 시간이 <span class="needs-verify">기존 대비 절반 이하(약 50%)로 단축</span>되고 에러 누락률이 현저히 줄었습니다. 다양한 기능을 매우 빠르게 추가할 수 있는 견고한 템플릿 기반이 확보되었습니다.',
          },
          techTags: [
            "React",
            "Redux-Saga",
            "레거시 마이그레이션",
            "관심사 분리",
          ],
        },
        {
          label: "Case 2",
          title: "대용량 차트 렌더링 메모리 이슈 튜닝 및 성능 최적화",
          sar: {
            situation:
              "뉴스 발행 및 트래픽 지표 분석 Highcharts 대시보드에서 <strong>10만 건 이상의 대용량 Raw 데이터</strong>를 한 번에 주입할 때 DOM 렌더러가 멈추고 <strong>브라우저 메인 스레드 락업(렉) 현상</strong>이 빈번히 발생했습니다.",
            action:
              "방대한 배열 데이터를 <strong>데이터 파이프라인에서 청크 단위(1,000건씩)로 분할 로드</strong>하고, 차트 렌더링 이벤트에 <strong>Debounce/Throttle 기법</strong>을 적용해 메인 스레드 점유율을 낮췄습니다. 추가로 React.memo 패러다임을 도입하여 무의미한 부모-자식 간의 불필요한 차트 리렌더링 사이클을 사전에 차단했습니다.",
            result:
              '브라우저 Task 점유율 과부하로 인한 렌더 락아웃 다운 증상을 완전히 제거했습니다. 데이터 10만 건 기준 렌더링 성능(TTI)을 <span class="needs-verify">7,500ms에서 800ms로 약 89% 대폭 최적화</span>하여 실무진의 데이터 분석 대기 시간을 물리적으로 해소했습니다.',
          },
          techTags: ["Highcharts", "렌더링 최적화", "Debounce", "React.memo"],
        },
        {
          label: "Case 3",
          title: "실무진 파편화 워크플로우 통합 GUI 아키텍처 설계",
          sar: {
            situation:
              "에디터팀의 핵심 생산 도구인 '기사 본문 작성', '뉴스레터 발송', 'SNS 메타 편집', '캘린더 스케줄링' 모듈들이 각각 독립된 페이지 및 외부 팝업에서 구동되어, 단일 콘텐츠를 생산하기 위한 <strong>화면 전환 뎁스(Depth)가 5단계 이상</strong> 깊고 UI가 매우 파편화되어 있었습니다.",
            action:
              "Froala WYSIWYG 에디터를 기반으로 커스텀 확장 모듈을 개발해 뉴스레터 템플릿 작성 공간을 메인 UI 시스템 내에 임베드(Embed)했습니다. Full Calendar 모듈 내에 드래그 앤 드롭 일괄 처리 인터페이스를 도입하고, SNS 메타데이터 컴포넌트를 통합 배치하여 <strong>글로벌 통합 편집 플로우(SPA)</strong>를 설계했습니다.",
            result:
              '실무 운영 데스크의 5단계 이상 나뉘어져 있던 화면 이동 뎁스를 <span class="needs-verify">단일 페이지 내 원클릭(1단계) 뎁스로 축소</span>시켰습니다. 워크플로우 간소화의 결과로 에디터팀의 콘텐츠 일 단위 발행 처리 속도가 <span class="needs-verify">평균 2.5배(약 150%) 증가</span>하는 운영 생산성을 확보했습니다.',
          },
          techTags: ["Froala Editor", "Full Calendar", "SPA", "UX/UI 고도화"],
        },
      ],
    },
  ],
};

// ─── SKILLS ───
export interface SkillCategory {
  category: string;
  chips: { name: string; primary?: boolean }[];
}

export const skills: SkillCategory[] = [
  {
    category: "Core",
    chips: [
      { name: "React", primary: true },
      { name: "Next.js", primary: true },
      { name: "TypeScript", primary: true },
      { name: "JavaScript", primary: true },
    ],
  },
  {
    category: "State",
    chips: [{ name: "Redux" }, { name: "Redux-Saga" }, { name: "MobX" }],
  },
  {
    category: "Styling",
    chips: [{ name: "CSS3" }, { name: "HTML5" }, { name: "Tailwind CSS" }],
  },
  {
    category: "Real-time",
    chips: [
      { name: "SockJS" },
      { name: "StompJS" },
      { name: "WebSocket" },
      { name: "Keycloak SSO" },
    ],
  },
  {
    category: "Tools",
    chips: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Swagger" },
      { name: "Postman" },
    ],
  },
  {
    category: "Libraries",
    chips: [
      { name: "Highcharts" },
      { name: "Full Calendar" },
      { name: "Froala Editor" },
      { name: "i18n" },
    ],
  },
];

// ─── PROJECTS ───
export interface ProjectData {
  id: string;
  title: string;
  description: string;
  tags: string[];
  period: string;
  link?: string;
  status: "live" | "wip" | "archived";
}

export const projects: ProjectData[] = [
  {
    id: "portfolio",
    title: "Jung Junyoung Portfolio",
    description:
      "편집 디자인 무드의 프론트엔드 개발자 포트폴리오. Next.js 16 App Router + Framer Motion 기반 정적 사이트.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    period: "2025.03",
    status: "live",
  },
  {
    id: "maju",
    title: "MAJU — 보이스 매칭 소셜",
    description:
      "도트 그래픽 기반 보이스 매칭 소셜 서비스. 기획·설계·개발을 1인 담당. React Native + Supabase 스택.",
    tags: ["React Native", "Supabase", "TypeScript", "Expo"],
    period: "2024.10 — 현재",
    status: "wip",
  },
];

// ─── TIMELINE ───
export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: "work" | "project" | "education" | "milestone";
}

export const timeline: TimelineEvent[] = [
  {
    year: "2020",
    title: "융합소프트웨어개발자양성과정 수료",
    description: "6개월 집중 과정 수료. React, JavaScript, 알고리즘 기초 학습.",
    type: "education",
  },
  {
    year: "2020",
    title: "서울시스템(주) 입사 · 프론트엔드 개발자",
    description:
      "CMS 전문 솔루션 기업 입사. 중앙일보 WMS 백오피스 리빌딩 프로젝트 첫 투입.",
    type: "work",
  },
  {
    year: "2021",
    title: "CMS 솔루션 핵심 개발팀 합류",
    description:
      "경향신문 등 10개 이상 언론사 납품 CMS 개발팀으로 이동. TypeScript 전환 및 공통 컴포넌트 시스템 설계 주도.",
    type: "work",
  },
  {
    year: "2022",
    title: "WebSocket 실시간 동기화 구현",
    description:
      "SockJS + StompJS 기반 기사 편집 상태 실시간 공유 시스템 구축. 중복 편집 충돌 제로화.",
    type: "milestone",
  },
  {
    year: "2023",
    title: "Next.js 13 App Router 전환",
    description:
      "모바일 웹 전면 리빌딩. SSG/SSR 하이브리드 렌더링 전략으로 LCP 4.2s → 1.5s 개선.",
    type: "milestone",
  },
  {
    year: "2023",
    title: "i18n 다국어 아키텍처 설계",
    description:
      "베트남·미주 권역 지원을 위한 i18n 시스템 도입. 번역 공수 75% 감소.",
    type: "work",
  },
  {
    year: "2024",
    title: "서울시스템(주) 퇴사 · 사이드 프로젝트 전념",
    description: "4년 3개월 재직 후 퇴사. MAJU 보이스 매칭 소셜 서비스 1인 개발 시작.",
    type: "milestone",
  },
  {
    year: "2025",
    title: "MAJU 베타 개발 진행 중",
    description:
      "React Native + Supabase 기반 도트 그래픽 보이스 매칭 앱 개발 중.",
    type: "project",
  },
];

// ─── FOOTER ───
export const footer = {
  copyright: "© 2025 정준영 · Frontend Developer",
  email: "fdjy0101@naver.com",
} as const;
