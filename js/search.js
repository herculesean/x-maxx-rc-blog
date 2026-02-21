/* ============================================
   X-Maxx RC Car Blog — Search Engine
   Client-side full-text search, FAQ & Summary Answer system
   ============================================ */

// ============================================
// SEARCH INDEX — All 15 blog pages
// ============================================
const SEARCH_INDEX = [
  {
    title: "홈",
    url: "index.html",
    category: "홈",
    icon: "🏠",
    content: "X-Maxx RC Car Blog의 메인 페이지입니다. Traxxas RC카의 모든 것을 다루는 초보자를 위한 완벽 가이드를 제공합니다. 목적별 찾기, 추천 읽기 순서, 빠른 링크를 통해 원하는 정보를 쉽게 찾을 수 있습니다. RC카가 처음인 분도 단계별로 학습할 수 있도록 로드맵을 제공합니다.",
    keywords: ["홈", "메인", "X-Maxx", "Traxxas", "RC카", "블로그", "입문", "가이드", "로드맵", "초보자", "시작"]
  },
  {
    title: "RC카 작동 원리",
    url: "how-it-works.html",
    category: "기초 학습",
    icon: "🔧",
    content: "RC카는 조종기에서 보낸 신호가 수신기를 거쳐 ESC와 서보로 전달되어 움직입니다. 송신기는 2.4GHz 주파수로 신호를 보내고, 수신기가 이를 해석하여 ESC는 모터 속도를, 서보는 조향을 제어합니다. 조종기의 스로틀 트리거를 당기면 ESC가 배터리 전력을 모터에 전달하고, 스티어링 휠을 돌리면 서보가 타이로드를 움직여 바퀴 방향을 바꿉니다. Traxxas TQi 시스템은 자동 주파수 호핑 기술로 간섭 없는 안정적인 조종을 가능하게 합니다.",
    keywords: ["RC카", "작동원리", "신호흐름", "조종기", "송신기", "수신기", "ESC", "모터", "서보", "TQi", "2.4GHz", "스로틀", "스티어링", "주파수"]
  },
  {
    title: "핵심 부품 맵",
    url: "parts-map.html",
    category: "기초 학습",
    icon: "🗺️",
    content: "RC카의 핵심 부품을 전자 구역, 구동 구역, 섀시 구역 3가지로 나누어 설명합니다. 전자 구역에는 수신기, ESC, 서보가 포함되고, 구동 구역에는 모터, 기어 트레인, 드라이브 샤프트, 디퍼렌셜이 있습니다. 섀시 구역에는 프레임, 서스펜션 암, 쇼크 업소버, 타이어/휠이 포함됩니다. 각 부품의 역할과 연결 관계를 시각적으로 이해할 수 있도록 구성했습니다.",
    keywords: ["부품", "부품맵", "전자", "구동", "섀시", "수신기", "ESC", "서보", "모터", "기어", "드라이브샤프트", "디퍼렌셜", "서스펜션", "쇼크업소버", "타이어"]
  },
  {
    title: "파워 시스템",
    url: "power-system.html",
    category: "기초 학습",
    icon: "⚡",
    content: "RC카의 파워 시스템은 배터리, ESC, 모터로 구성됩니다. 브러시드 모터는 구조가 단순하고 저렴하지만 수명이 짧고, 브러시리스 모터는 고성능이며 내구성이 뛰어납니다. 배터리는 NiMH와 LiPo가 있으며, LiPo는 높은 에너지 밀도와 방전율을 제공합니다. 모터의 KV 값은 무부하 RPM을 나타내며, 턴수가 낮을수록 고출력입니다. Traxxas의 VXL 시스템은 브러시리스 파워를 쉽게 경험할 수 있게 해줍니다.",
    keywords: ["파워", "배터리", "모터", "ESC", "브러시드", "브러시리스", "LiPo", "NiMH", "KV", "턴수", "VXL", "방전율", "전압", "mAh", "C레이팅"]
  },
  {
    title: "셋업 & 튜닝",
    url: "tuning.html",
    category: "세팅 & 관리",
    icon: "🔧",
    content: "RC카의 성능을 극대화하기 위한 셋업과 튜닝 방법을 다룹니다. 기어비 조정으로 가속력과 최고 속도 사이 균형을 맞추고, 서스펜션 세팅으로 주행 안정성을 개선합니다. 쇼크 오일 점도, 스프링 경도, 캠버 각도, 토인/토아웃 조정법을 설명합니다. 타이어 선택과 인서트 폼의 역할, 그리고 조종기의 듀얼 레이트, EPA, 트림 설정까지 포함합니다. 초보자를 위한 기본 세팅값도 제공합니다.",
    keywords: ["셋업", "튜닝", "기어비", "서스펜션", "쇼크오일", "스프링", "캠버", "토인", "토아웃", "타이어", "듀얼레이트", "EPA", "트림", "피니언", "스퍼기어"]
  },
  {
    title: "유지보수",
    url: "maintenance.html",
    category: "세팅 & 관리",
    icon: "🛠️",
    content: "RC카를 오래 사용하기 위한 유지보수 가이드입니다. 주행 전 체크리스트로 배터리 전압, 서보 작동, 타이어 상태를 확인하고, 주행 후에는 먼지 제거와 볼트 점검을 합니다. 정기적으로 베어링 세척 및 오일링, 쇼크 리빌드, 디퍼렌셜 그리스 교체가 필요합니다. 부품별 교체 주기와 마모 징후를 알아두면 현장에서 갑작스러운 고장을 예방할 수 있습니다. 세척 시 전자 부품에 물이 들어가지 않도록 주의해야 합니다.",
    keywords: ["유지보수", "관리", "청소", "체크리스트", "베어링", "쇼크", "디퍼렌셜", "그리스", "오일", "볼트", "세척", "교체주기", "정비", "먼지", "방수"]
  },
  {
    title: "Traxxas 생태계",
    url: "traxxas-ecosystem.html",
    category: "Traxxas",
    icon: "🔴",
    content: "Traxxas만의 독자적인 기술 생태계를 소개합니다. TSM(Traxxas Stability Management)은 초보자도 안정적으로 조종할 수 있게 도와주는 전자 보조 시스템입니다. TQi 조종기는 2.4GHz 자동 바인딩과 스마트폰 연동을 지원합니다. iD 커넥터는 배터리를 자동 인식하여 안전한 충전을 보장합니다. Traxxas Link 앱으로 조종기 설정을 스마트폰에서 세밀하게 조정할 수 있습니다. Self-Righting 기능으로 뒤집힌 차를 버튼 하나로 세울 수 있습니다.",
    keywords: ["Traxxas", "TSM", "TQi", "iD커넥터", "Traxxas Link", "Self-Righting", "스마트폰", "바인딩", "안정성", "생태계", "충전기", "EZ-Peak", "호환"]
  },
  {
    title: "Traxxas 모델",
    url: "traxxas-models.html",
    category: "Traxxas",
    icon: "🚗",
    content: "Traxxas의 주요 RC카 모델 라인업을 비교 분석합니다. X-Maxx는 1/5 스케일 8S 몬스터 트럭으로 최고의 크기와 파워를 자랑합니다. Slash는 가장 인기 있는 입문용 숏코스 트럭이고, Rustler는 가성비 뛰어난 스타디움 트럭입니다. Maxx는 X-Maxx의 동생격인 1/10 스케일 몬스터 트럭이며, TRX-4는 스케일 크롤러로 락크롤링에 특화되어 있습니다. 각 모델의 스펙, 가격, 특징, 추천 대상을 정리했습니다.",
    keywords: ["모델", "X-Maxx", "Slash", "Rustler", "Maxx", "TRX-4", "Stampede", "E-Revo", "Hoss", "몬스터트럭", "숏코스", "크롤러", "스케일", "비교", "라인업"]
  },
  {
    title: "RC카 선택 체크리스트",
    url: "selection-checklist.html",
    category: "구매 & 커뮤니티",
    icon: "🛒",
    content: "자신에게 맞는 RC카를 선택하기 위한 단계별 체크리스트를 제공합니다. 예산 범위 설정, 주행 환경(포장도로, 비포장, 실내), 원하는 스케일 크기, 2WD와 4WD 선택 기준을 안내합니다. RTR(Ready-To-Run)과 키트의 차이, 배터리와 충전기 추가 비용도 고려해야 합니다. 초보자에게는 Traxxas Slash 4X4 VXL이나 Rustler 4X4 VXL을 추천하며, 각 선택에 따른 장단점을 비교합니다.",
    keywords: ["선택", "구매", "체크리스트", "예산", "RTR", "키트", "2WD", "4WD", "스케일", "비포장", "입문용", "추천", "가격", "Slash", "Rustler"]
  },
  {
    title: "커뮤니티 용어",
    url: "community.html",
    category: "구매 & 커뮤니티",
    icon: "💬",
    content: "RC카 커뮤니티에서 자주 사용되는 용어와 은어를 정리했습니다. '풀스로틀', '배싱', '크롤링', '드리프트' 같은 주행 스타일 용어부터 '파킹랏 배싱', '센딩잇', '풀 탭' 같은 커뮤니티 은어까지 포함합니다. 온라인 포럼과 유튜브 채널 추천, RC카 모임 참여 방법도 안내합니다. 한국 RC카 커뮤니티의 특성과 해외 커뮤니티와의 차이점도 설명합니다.",
    keywords: ["커뮤니티", "용어", "은어", "배싱", "크롤링", "드리프트", "포럼", "유튜브", "모임", "풀스로틀", "온라인", "RC동호회", "한국", "해외"]
  },
  {
    title: "배터리 안전",
    url: "battery-safety.html",
    category: "안전",
    icon: "🔋",
    content: "LiPo 배터리를 안전하게 다루기 위한 필수 가이드입니다. LiPo 배터리는 높은 에너지 밀도 때문에 부적절한 취급 시 화재나 폭발 위험이 있습니다. 충전 시 반드시 LiPo 전용 충전기를 사용하고, 밸런스 충전을 해야 합니다. 과충전, 과방전, 물리적 충격을 피하고, 보관 시 스토리지 모드(3.8V/셀)로 유지해야 합니다. LiPo 세이프 백이나 금속 보관함에 보관하고, 부풀어 오른 배터리는 즉시 사용을 중단해야 합니다.",
    keywords: ["배터리", "LiPo", "안전", "충전", "밸런스충전", "과충전", "과방전", "스토리지", "보관", "화재", "LiPo백", "전압", "셀", "폐기", "부풀음"]
  },
  {
    title: "용어 사전",
    url: "glossary.html",
    category: "데이터베이스",
    icon: "📖",
    content: "RC카와 관련된 모든 전문 용어를 가나다순으로 정리한 사전입니다. 전자, 구동, 섀시, 배터리, 조종기 등 각 분야별 용어를 한글 설명과 함께 제공합니다. 초보자가 다른 페이지를 읽다가 모르는 용어를 만났을 때 빠르게 찾아볼 수 있도록 구성했습니다. 영어 약어와 한글 대응 표현을 함께 기재하여 해외 자료를 읽을 때도 도움이 됩니다.",
    keywords: ["용어", "사전", "glossary", "약어", "영어", "한글", "ESC", "LiPo", "KV", "RPM", "RTR", "AWD", "CVD", "BEC", "정의"]
  },
  {
    title: "모델 DB",
    url: "models.html",
    category: "데이터베이스",
    icon: "🚗",
    content: "Traxxas RC카 모델의 상세 데이터베이스입니다. 각 모델의 스케일, 구동 방식, 모터 사양, 최고 속도, 배터리 호환성, 가격대를 테이블과 카드 형식으로 정리했습니다. 모델별 비교 검색이 가능하며, 카테고리(몬스터 트럭, 숏코스, 크롤러, 온로드)별 필터링을 지원합니다. 각 모델의 특징 요약과 추천 사용 환경도 포함되어 있습니다.",
    keywords: ["모델", "데이터베이스", "DB", "스펙", "비교", "스케일", "속도", "가격", "카테고리", "필터", "검색", "테이블", "몬스터트럭", "숏코스", "크롤러"]
  },
  {
    title: "Q&A / 검색",
    url: "qa.html",
    category: "Q&A",
    icon: "🔍",
    content: "블로그의 모든 콘텐츠를 검색할 수 있는 통합 검색 페이지입니다. 키워드를 입력하면 관련 페이지와 자주 묻는 질문(FAQ)에서 답을 찾아드립니다. 초보자가 자주 궁금해하는 질문 TOP 10을 미리 볼 수 있으며, 카테고리별 검색 결과를 제공합니다. RC카에 대한 어떤 궁금증이든 검색해보세요.",
    keywords: ["검색", "Q&A", "FAQ", "질문", "답변", "찾기", "도움말", "문의", "궁금증", "자주묻는질문"]
  }
];

// ============================================
// FAQ INDEX — 40 common beginner questions
// ============================================
const FAQ_INDEX = [
  // --- Basic RC questions ---
  {
    question: "RC카와 장난감 RC의 차이는 무엇인가요?",
    answer: "취미용 RC카는 부품 교체, 업그레이드, 정밀 조종이 가능한 반면, 장난감 RC는 고장 나면 교체할 수 없고 조종 정밀도가 낮습니다. 취미용은 2.4GHz 디지털 통신으로 간섭 없이 여러 대가 동시에 주행할 수 있고, 모터·ESC·서보 등 모든 부품을 개별 교체하거나 업그레이드할 수 있습니다. 속도, 내구성, 조종 재미 모든 면에서 차원이 다릅니다.",
    source: "how-it-works.html",
    keywords: ["장난감", "취미용", "차이", "입문", "RC카", "비교", "업그레이드"]
  },
  {
    question: "RC카는 어떻게 움직이나요?",
    answer: "조종기(송신기)에서 2.4GHz 무선 신호를 보내면, 차량의 수신기가 이를 받아 해석합니다. 수신기는 스로틀 신호를 ESC(전자 속도 조절기)에, 스티어링 신호를 서보에 전달합니다. ESC는 배터리 전력을 조절하여 모터 속도를 제어하고, 서보는 타이로드를 통해 앞바퀴 방향을 바꿉니다. 이 모든 과정이 밀리초 단위로 실시간 처리됩니다.",
    source: "how-it-works.html",
    keywords: ["작동", "원리", "신호", "송신기", "수신기", "ESC", "서보", "모터"]
  },
  {
    question: "RC카의 스케일이 뭔가요? 1/10이 뭔 뜻이에요?",
    answer: "스케일은 실제 자동차 대비 축소 비율을 뜻합니다. 1/10 스케일은 실차의 1/10 크기라는 의미로, 약 45~55cm 정도 됩니다. 1/8은 더 크고(약 50~60cm), 1/5는 대형(약 75~90cm)입니다. X-Maxx는 1/5 스케일로 RC카 중 가장 큰 축에 속하며, 스케일이 클수록 부품 가격도 비싸지고 보관 공간이 더 필요합니다.",
    source: "traxxas-models.html",
    keywords: ["스케일", "1/10", "1/8", "1/5", "크기", "사이즈", "비율"]
  },
  // --- Buying questions ---
  {
    question: "처음 RC카를 사려면 예산이 얼마나 필요한가요?",
    answer: "입문용 Traxxas 모델 기준으로 본체 약 30~50만 원, 배터리 5~15만 원, 충전기 5~10만 원 정도가 필요합니다. RTR(Ready-To-Run) 패키지를 구매하면 조종기가 포함되어 있어 배터리와 충전기만 추가로 구매하면 됩니다. 총 40~70만 원 정도면 시작할 수 있습니다. 여유 예산으로 예비 부품 세트까지 구매하면 더 좋습니다.",
    source: "selection-checklist.html",
    keywords: ["예산", "가격", "비용", "첫구매", "입문", "RTR", "얼마"]
  },
  {
    question: "초보자에게 추천하는 첫 RC카는 뭔가요?",
    answer: "초보자에게는 Traxxas Slash 4X4 VXL 또는 Rustler 4X4 VXL을 추천합니다. 두 모델 모두 내구성이 뛰어나고, TSM(안정성 보조)이 탑재되어 조종하기 쉽습니다. Slash는 숏코스 트럭으로 범프와 점프에 강하고, Rustler는 스타디움 트럭으로 속도감이 좋습니다. 둘 다 부품 구하기 쉽고 커뮤니티 자료가 풍부합니다.",
    source: "selection-checklist.html",
    keywords: ["초보자", "추천", "입문용", "첫RC카", "Slash", "Rustler", "VXL"]
  },
  {
    question: "RTR은 무엇이고 뭐가 포함되어 있나요?",
    answer: "RTR은 Ready-To-Run의 약자로, 박스에서 꺼내면 바로 달릴 수 있는 완성품 패키지입니다. 완성된 차체, 조종기(송신기), 수신기가 포함되어 있습니다. 단, 대부분의 RTR 패키지에는 배터리와 충전기가 별도입니다. Traxxas 일부 모델은 배터리·충전기 콤보 패키지로도 판매하니 확인해보세요.",
    source: "selection-checklist.html",
    keywords: ["RTR", "Ready-To-Run", "완성품", "패키지", "포함", "구성품", "박스"]
  },
  {
    question: "실내에서도 RC카를 탈 수 있나요?",
    answer: "가능합니다. 다만 1/16 스케일 이하의 미니 RC카가 적합합니다. Traxxas에서는 1/16 E-Revo, 1/16 Slash 등 소형 모델이 있습니다. 1/10 스케일 이상은 실내에서 타기엔 너무 빠르고 크므로 넓은 공간이 필요합니다. 실내 카펫 트랙에서 미니 RC카를 즐기는 분들도 많습니다.",
    source: "selection-checklist.html",
    keywords: ["실내", "집안", "미니", "1/16", "소형", "카펫", "공간"]
  },
  {
    question: "2WD와 4WD 중 어떤 걸 선택해야 하나요?",
    answer: "4WD는 전·후륜 모두 구동되어 비포장도로에서 접지력이 좋고, 초보자에게 조종하기 더 쉽습니다. 2WD는 구조가 단순해 정비가 쉽고 가격이 저렴하지만, 미끄러운 노면에서 뒷바퀴가 쉽게 헛돕니다. 비포장 배싱 위주라면 4WD, 포장도로 위주이거나 드리프트를 즐기고 싶다면 2WD도 좋은 선택입니다.",
    source: "selection-checklist.html",
    keywords: ["2WD", "4WD", "구동", "선택", "비포장", "접지력", "초보자"]
  },
  // --- Battery questions ---
  {
    question: "LiPo 배터리와 NiMH 배터리의 차이는 뭔가요?",
    answer: "LiPo(리튬 폴리머)는 높은 에너지 밀도, 가벼운 무게, 강한 방전율이 장점이지만 안전 관리가 필수입니다. NiMH(니켈수소)는 안전하고 관리가 쉽지만 무겁고 출력이 낮습니다. 초보자는 NiMH로 시작해서 관리법을 익힌 뒤 LiPo로 전환하는 것도 좋은 방법입니다. 대부분의 Traxxas 모델은 두 배터리 모두 호환됩니다.",
    source: "power-system.html",
    keywords: ["LiPo", "NiMH", "배터리", "차이", "비교", "리튬", "니켈수소", "안전"]
  },
  {
    question: "LiPo 배터리 충전할 때 주의할 점은 뭔가요?",
    answer: "반드시 LiPo 전용 모드가 있는 충전기를 사용하고, 밸런스 충전을 해야 합니다. 충전 중에는 절대 자리를 비우지 말고, LiPo 세이프 백 안에서 충전하는 것이 안전합니다. 충전 전류는 보통 1C(배터리 용량과 동일한 암페어)로 설정합니다. 과충전(셀당 4.2V 초과)은 화재 위험이 있으므로 충전기의 컷오프 설정을 반드시 확인하세요.",
    source: "battery-safety.html",
    keywords: ["충전", "LiPo", "밸런스", "안전", "충전기", "1C", "과충전", "화재"]
  },
  {
    question: "배터리를 안 쓸 때 어떻게 보관하나요?",
    answer: "LiPo 배터리는 스토리지 모드(셀당 3.8V)로 맞춰서 보관해야 합니다. 완충 상태나 완방 상태로 장기간 보관하면 배터리 수명이 급격히 단축됩니다. 서늘하고 건조한 곳에 LiPo 세이프 백이나 금속 보관함에 넣어 보관하세요. 직사광선이나 고온을 피하고, 3개월 이상 사용하지 않을 경우 주기적으로 전압을 확인해주세요.",
    source: "battery-safety.html",
    keywords: ["보관", "스토리지", "저장", "LiPo", "전압", "3.8V", "수명", "보관함"]
  },
  {
    question: "배터리가 부풀었는데 어떻게 하나요?",
    answer: "부풀어 오른(퍼핑) LiPo 배터리는 내부 셀이 손상된 것이므로 즉시 사용을 중단해야 합니다. 충전하거나 사용하면 화재 위험이 있습니다. 소금물에 완전 방전시킨 후 배터리 전용 수거함에 폐기하거나, RC 전문점에 문의하여 안전하게 처리하세요. 절대로 일반 쓰레기통에 버리면 안 됩니다.",
    source: "battery-safety.html",
    keywords: ["부풀음", "퍼핑", "팽창", "폐기", "손상", "위험", "처리"]
  },
  // --- Traxxas questions ---
  {
    question: "TSM은 뭐고 꼭 필요한가요?",
    answer: "TSM(Traxxas Stability Management)은 자동차의 ESC(전자 안정 제어장치)와 비슷한 개념입니다. 후륜이 미끄러지면 자동으로 스티어링을 보정하여 직진 안정성을 높여줍니다. 초보자에게는 조종이 훨씬 쉬워지므로 매우 유용합니다. 숙련자는 TSM을 끄고 타거나 낮춰서 더 자유로운 드리프트를 즐길 수 있습니다. TQi 조종기에서 다이얼로 강도를 조절합니다.",
    source: "traxxas-ecosystem.html",
    keywords: ["TSM", "안정성", "스티어링", "보정", "초보자", "TQi", "다이얼"]
  },
  {
    question: "TQi 조종기의 특별한 점은 뭔가요?",
    answer: "TQi는 Traxxas의 독자적인 2.4GHz 조종 시스템입니다. 자동 바인딩으로 별도의 주파수 설정이 필요 없고, 최대 16대까지 동시 주행이 가능합니다. 스마트폰에 Traxxas Link 앱을 설치하면 TSM 강도, 스티어링 감도, 스로틀 커브 등을 세밀하게 조정할 수 있습니다. 모델에 따라 텔레메트리(배터리 전압, 모터 온도 등) 기능도 지원합니다.",
    source: "traxxas-ecosystem.html",
    keywords: ["TQi", "조종기", "송신기", "바인딩", "Traxxas Link", "앱", "텔레메트리"]
  },
  {
    question: "Traxxas 보증은 어떻게 되나요?",
    answer: "Traxxas는 전자 부품(ESC, 서보, 수신기 등)에 대해 제한적 무상 수리/교체 보증을 제공합니다. 단, 사용자 과실(충돌, 침수 등)로 인한 고장은 보증 대상이 아닙니다. Traxxas의 가장 큰 장점은 거의 모든 부품을 개별 판매한다는 점입니다. 오래된 모델이라도 부품을 구할 수 있어 사실상 영구적으로 사용할 수 있습니다.",
    source: "traxxas-ecosystem.html",
    keywords: ["보증", "워런티", "수리", "교체", "무상", "AS", "고장"]
  },
  // --- Maintenance questions ---
  {
    question: "주행 후에 꼭 해야 하는 관리는 뭔가요?",
    answer: "주행 후에는 먼저 차체의 먼지와 이물질을 에어건이나 부드러운 솔로 제거합니다. 볼트 풀림 여부를 확인하고, 서스펜션 암과 링크에 손상이 없는지 점검합니다. 배터리는 반드시 차에서 분리하여 스토리지 모드로 보관하세요. 습한 환경에서 주행했다면 전자 부품 주변을 건조시켜야 합니다. 이 간단한 루틴만 지키면 RC카의 수명이 크게 늘어납니다.",
    source: "maintenance.html",
    keywords: ["주행후", "관리", "청소", "먼지", "볼트", "점검", "건조"]
  },
  {
    question: "RC카 업그레이드는 뭐부터 하면 좋나요?",
    answer: "가장 먼저 추천하는 업그레이드는 알루미늄 턴버클(타이로드)입니다. 순정 플라스틱 턴버클은 충돌 시 쉽게 휘어지기 때문입니다. 그다음으로 베어링 업그레이드(부싱 → 볼베어링), 알루미늄 서보 혼, 강화 드라이브 샤프트 순서를 추천합니다. 모터나 ESC 업그레이드는 기본기를 충분히 익힌 후에 고려하세요.",
    source: "parts-map.html",
    keywords: ["업그레이드", "알루미늄", "턴버클", "베어링", "서보혼", "드라이브샤프트", "강화"]
  },
  {
    question: "RC카가 갑자기 안 움직이면 어떻게 하나요?",
    answer: "먼저 배터리 전압을 확인하세요. 배터리 부족이 가장 흔한 원인입니다. 그다음 송신기와 수신기의 바인딩 상태를 확인하고, ESC의 LED 표시를 확인합니다. ESC에서 비프음이 울리면 에러 코드를 매뉴얼에서 확인하세요. 커넥터 접촉 불량도 흔한 원인이므로 모든 커넥터가 단단히 연결되어 있는지 확인합니다.",
    source: "maintenance.html",
    keywords: ["고장", "안움직임", "문제", "해결", "배터리", "바인딩", "커넥터", "에러"]
  },
  // --- Technical questions ---
  {
    question: "브러시드 모터와 브러시리스 모터의 차이는 뭔가요?",
    answer: "브러시드 모터는 내부에 탄소 브러시가 있어 물리적 접촉으로 전기를 전달합니다. 구조가 단순하고 저렴하지만 브러시 마모로 수명이 제한됩니다. 브러시리스 모터는 전자적으로 회전을 제어하므로 마모 부품이 없고, 효율이 높아 같은 배터리로 더 빠르고 오래 달립니다. Traxxas VXL 시리즈가 브러시리스 모터를 사용합니다.",
    source: "power-system.html",
    keywords: ["브러시드", "브러시리스", "모터", "차이", "VXL", "수명", "효율", "마모"]
  },
  {
    question: "기어비가 뭐고 어떻게 조정하나요?",
    answer: "기어비는 피니언 기어(모터 기어)와 스퍼 기어(메인 기어)의 톱니 수 비율입니다. 피니언을 크게 하면(높은 기어비) 최고 속도가 올라가지만 가속이 느려지고 모터에 열이 많이 납니다. 피니언을 작게 하면(낮은 기어비) 가속이 빨라지고 모터 부담이 줄어듭니다. 초보자는 기본 세팅에서 시작하고, 모터 온도를 확인하며 조금씩 변경하세요.",
    source: "tuning.html",
    keywords: ["기어비", "피니언", "스퍼기어", "톱니", "가속", "속도", "모터온도"]
  },
  {
    question: "서스펜션 세팅은 어떻게 하나요?",
    answer: "서스펜션 세팅의 핵심은 쇼크 오일 점도와 스프링 경도 조합입니다. 쇼크 오일 점도가 높으면 댐핑이 강해져 안정적이지만 반응이 느리고, 낮으면 민첩하지만 불안정합니다. 스프링이 딱딱하면 롤(기울어짐)이 적고, 부드러우면 접지력이 좋습니다. 주행 노면에 따라 세팅을 조정하며, 초보자는 순정 세팅에서 시작하는 것을 권장합니다.",
    source: "tuning.html",
    keywords: ["서스펜션", "쇼크오일", "스프링", "댐핑", "세팅", "점도", "경도"]
  },
  {
    question: "방수 RC카는 물에서 달려도 되나요?",
    answer: "Traxxas의 방수 전자 부품은 빗속 주행이나 얕은 웅덩이를 통과하는 정도에 대응합니다. 하지만 완전히 물에 잠기는 것은 권장하지 않습니다. 주행 후 반드시 물기를 제거하고 건조시켜야 합니다. 특히 베어링, 기어, 서스펜션 같은 기계 부품은 방수가 아니므로 물 주행 후 그리스 재도포와 베어링 관리가 필요합니다.",
    source: "maintenance.html",
    keywords: ["방수", "물", "비", "웅덩이", "건조", "베어링", "전자부품"]
  },
  {
    question: "ESC란 무엇이고 어떤 역할을 하나요?",
    answer: "ESC(Electronic Speed Controller)는 전자 속도 조절기입니다. 수신기에서 받은 스로틀 신호를 해석하여 배터리의 전력을 모터에 적절하게 공급합니다. 전진·후진·브레이크를 제어하고, 일부 ESC는 LiPo 저전압 차단(LVC) 기능으로 배터리를 보호합니다. Traxxas VXL-6s, VXL-8s 등은 고성능 브러시리스 ESC로 다양한 보호 기능을 내장하고 있습니다.",
    source: "how-it-works.html",
    keywords: ["ESC", "속도조절기", "전자", "스로틀", "전력", "LVC", "VXL"]
  },
  {
    question: "몬스터 트럭과 숏코스 트럭의 차이는 뭔가요?",
    answer: "몬스터 트럭은 큰 타이어와 높은 지상고가 특징으로, 비포장에서 장애물을 쉽게 넘고 점프 후 안정적으로 착지합니다. X-Maxx, Maxx, Stampede가 대표 모델입니다. 숏코스 트럭은 실제 오프로드 레이싱 트럭을 모델로 한 것으로, 낮은 무게 중심으로 코너링이 좋고 레이싱에 적합합니다. Slash가 대표 모델입니다. 배싱 위주라면 몬스터 트럭이 더 재미있습니다.",
    source: "traxxas-models.html",
    keywords: ["몬스터트럭", "숏코스", "차이", "트럭", "비포장", "점프", "레이싱", "배싱"]
  },
  // ============================================
  // NEW FAQ ENTRIES (25~39) — 15 additional entries
  // ============================================
  // --- More battery questions ---
  {
    question: "LiPo 배터리 보관 적정 온도는 몇 도인가요?",
    answer: "LiPo 배터리의 이상적인 보관 온도는 15~25도(섭씨)의 실온 환경입니다. 영하의 온도에서는 내부 화학 반응이 느려져 성능이 크게 떨어지고, 40도 이상의 고온에서는 셀이 팽창하거나 손상될 수 있습니다. 여름철 차량 트렁크나 직사광선이 닿는 곳에 절대 보관하지 마시고, 겨울철에도 너무 추운 창고보다는 실내 서늘한 곳이 좋습니다. 보관 시에는 반드시 스토리지 전압(셀당 3.8V)으로 맞춰두세요.",
    source: "battery-safety.html",
    keywords: ["보관온도", "적정온도", "LiPo", "온도", "배터리", "보관", "여름", "겨울", "실온", "스토리지", "셀"]
  },
  {
    question: "LiPo 배터리 완충에 시간이 얼마나 걸리나요?",
    answer: "충전 시간은 배터리 용량과 충전 전류에 따라 달라집니다. 일반적으로 1C 충전(예: 5000mAh 배터리를 5A로 충전) 기준 약 1시간 정도 소요됩니다. 2C 충전을 지원하는 배터리는 약 30분이면 완충되지만, 배터리 수명을 위해 1C 충전을 권장합니다. Traxxas EZ-Peak 충전기는 iD 배터리를 자동 인식하여 최적의 충전 전류를 설정해주므로 초보자도 안심하고 사용할 수 있습니다.",
    source: "battery-safety.html",
    keywords: ["충전시간", "완충", "1C", "2C", "충전전류", "배터리", "LiPo", "EZ-Peak", "시간", "mAh", "암페어"]
  },
  {
    question: "배터리 수명은 보통 얼마나 되나요?",
    answer: "LiPo 배터리의 평균 수명은 약 200~300회 충방전 사이클입니다. 관리를 잘 하면 300회 이상도 가능하고, 과충전·과방전을 반복하면 100회도 채 못 채울 수 있습니다. 수명을 늘리려면 항상 밸런스 충전을 하고, 사용 후 스토리지 모드로 보관하며, 주행 중 배터리 전압이 셀당 3.5V 이하로 떨어지기 전에 주행을 멈추세요. 내부 저항이 증가하거나 주행 시간이 눈에 띄게 줄어들면 교체 시기입니다.",
    source: "battery-safety.html",
    keywords: ["수명", "배터리수명", "충방전", "사이클", "교체", "LiPo", "관리", "내부저항", "열화", "오래", "교체시기"]
  },
  // --- More tuning questions ---
  {
    question: "초보자에게 추천하는 기본 튜닝 세팅은 어떤 건가요?",
    answer: "초보자는 순정 기어비를 유지하고, TSM을 50~75% 정도로 설정하는 것이 좋습니다. 서스펜션은 순정 스프링과 쇼크 오일 그대로 사용하고, 조종기에서 듀얼 레이트(스티어링 감도)를 70~80%로 약간 낮추면 급격한 방향 전환을 방지하여 조종이 훨씬 쉬워집니다. 스로틀 커브도 약간 완만하게 설정하면 급출발을 방지할 수 있습니다. 숙련도가 올라가면 하나씩 기본값으로 되돌리면서 감각을 익혀가세요.",
    source: "tuning.html",
    keywords: ["초보세팅", "기본세팅", "초보자", "튜닝", "듀얼레이트", "TSM", "스로틀커브", "순정", "입문", "세팅값", "추천세팅"]
  },
  {
    question: "타이어는 어떤 기준으로 선택해야 하나요?",
    answer: "타이어 선택은 주행 노면에 따라 달라집니다. 포장도로(아스팔트)에서는 슬릭 또는 로우 프로파일 타이어가 접지력이 좋고, 비포장(흙/잔디)에서는 돌기가 큰 오프로드 타이어가 적합합니다. 모래나 자갈밭에서는 패들 타이어가 효과적입니다. 타이어 안에 들어가는 인서트 폼도 중요한데, 단단한 폼은 고속 안정성을, 부드러운 폼은 접지력을 높여줍니다. 처음에는 순정 타이어로 시작하고, 주행 환경에 맞춰 점차 교체해보세요.",
    source: "tuning.html",
    keywords: ["타이어", "선택", "노면", "슬릭", "오프로드", "패들", "인서트", "폼", "접지력", "아스팔트", "흙", "잔디"]
  },
  // --- More Traxxas questions ---
  {
    question: "Traxxas 워런티(보증 수리) 신청은 어떻게 하나요?",
    answer: "Traxxas 공식 워런티를 받으려면 Traxxas 공식 홈페이지에서 서비스 요청을 제출하거나, 고객 서비스 전화로 문의하면 됩니다. 구매 영수증과 결함 부품 사진을 준비해두면 처리가 빠릅니다. 한국에서는 Traxxas 공식 수입원이나 정식 딜러를 통해 구매한 경우에만 보증이 적용됩니다. 사용자 과실(충돌, 침수, 개조)로 인한 고장은 보증 대상이 아니지만, Traxxas는 거의 모든 개별 부품을 판매하므로 자체적으로 수리가 가능합니다.",
    source: "traxxas-ecosystem.html",
    keywords: ["워런티", "보증수리", "AS", "서비스", "신청", "고장", "수리", "교체", "딜러", "공식", "영수증", "클레임"]
  },
  {
    question: "Traxxas 모델 간 부품 호환이 되나요?",
    answer: "일부 부품은 모델 간 호환이 됩니다. 예를 들어 Slash 4X4와 Stampede 4X4는 같은 플랫폼을 공유하므로 서스펜션, 드라이브 트레인 부품이 대부분 호환됩니다. Maxx와 X-Maxx는 스케일이 달라서 거의 호환되지 않습니다. Traxxas 공식 사이트에서 각 부품의 호환 모델 목록을 확인할 수 있으며, 부품 번호를 기준으로 검색하면 정확한 호환성을 알 수 있습니다. 구매 전 반드시 부품 번호를 대조하세요.",
    source: "traxxas-models.html",
    keywords: ["호환", "부품호환", "플랫폼", "공유", "부품번호", "Slash", "Stampede", "Maxx", "X-Maxx", "교차", "공용부품"]
  },
  // --- More maintenance questions ---
  {
    question: "쇼크 리빌드는 얼마나 자주 해야 하나요?",
    answer: "일반적인 배싱(야외 주행) 기준으로 10~15회 주행마다 또는 2~3개월에 한 번 쇼크 리빌드를 권장합니다. 쇼크 오일이 새거나, 쇼크를 눌렀다 놓았을 때 반발력이 약해졌거나, 주행 중 서스펜션이 이전보다 푹 주저앉는 느낌이 들면 리빌드가 필요한 신호입니다. 리빌드 시에는 오래된 오일을 완전히 빼고, 새 오일과 o-링을 교체합니다. 쇼크 샤프트에 흠집이 있으면 오일 누유의 원인이 되므로 함께 교체하세요.",
    source: "maintenance.html",
    keywords: ["쇼크리빌드", "리빌드", "쇼크", "오일교체", "주기", "o-링", "누유", "서스펜션", "정비", "댐퍼", "교체주기"]
  },
  {
    question: "기어 메쉬(맞물림)는 어떻게 확인하나요?",
    answer: "기어 메쉬란 피니언 기어와 스퍼 기어가 맞물리는 간격을 말합니다. 올바른 메쉬는 기어 사이에 종이 한 장 정도의 간격이 있는 상태입니다. 너무 빡빡하면 기어에 과부하가 걸려 마모가 빨라지고, 너무 헐거우면 기어가 건너뛰거나 이빨이 깨질 수 있습니다. 확인 방법은 모터를 손으로 돌려보면서 부드럽게 회전하되 약간의 유격이 느껴지는지 체크하는 것입니다. 이상한 소리가 나면 즉시 점검하세요.",
    source: "tuning.html",
    keywords: ["기어메쉬", "맞물림", "피니언", "스퍼기어", "간격", "마모", "소리", "점검", "조정", "기어", "치합"]
  },
  // --- General beginner questions ---
  {
    question: "RC카 첫 주행 날 알아두면 좋은 팁이 있나요?",
    answer: "첫 주행 전에 반드시 배터리를 완충하고, 넓고 평탄한 공터(학교 운동장, 공원 주차장 등)에서 시작하세요. TSM을 최대로 설정하고 스로틀을 부드럽게 조작하는 연습부터 합니다. 급출발이나 풀스로틀은 피하고, 저속으로 직진·회전·정지를 충분히 연습한 뒤 속도를 올리세요. 예비 배터리와 기본 공구 세트(육각 렌치, 십자 드라이버)를 챙기면 현장에서 간단한 조정이 가능합니다. 무엇보다 당황하지 말고 천천히 즐기세요.",
    source: "selection-checklist.html",
    keywords: ["첫주행", "첫날", "팁", "초보", "연습", "공터", "운동장", "저속", "TSM", "풀스로틀", "시작", "데뷔"]
  },
  {
    question: "초보자가 가장 많이 하는 실수는 뭔가요?",
    answer: "가장 흔한 실수는 처음부터 풀스로틀로 달리는 것입니다. 익숙하지 않은 상태에서 급가속하면 제어를 잃고 충돌하기 쉽습니다. 두 번째는 배터리 관리 소홀로, 과방전 상태로 방치하면 배터리가 금방 못 쓰게 됩니다. 세 번째는 주행 후 청소를 안 하는 것으로, 먼지와 모래가 기어와 베어링을 빠르게 마모시킵니다. 네 번째는 볼트 점검을 안 하는 것인데, 진동으로 볼트가 풀리면 주행 중 부품이 이탈할 수 있습니다.",
    source: "maintenance.html",
    keywords: ["실수", "초보", "흔한실수", "풀스로틀", "과방전", "청소", "볼트", "관리소홀", "충돌", "주의사항", "초보자"]
  },
  {
    question: "RC카는 어디서 달리는 게 좋나요?",
    answer: "초보자에게는 넓은 아스팔트 주차장이나 학교 운동장이 가장 적합합니다. 평탄하고 장애물이 적어 조종 연습에 좋습니다. 어느 정도 숙련되면 공원의 잔디밭이나 흙길에서 오프로드 주행을 즐길 수 있고, 몬스터 트럭이라면 자연 지형의 점프대를 활용할 수도 있습니다. RC카 전용 트랙이 있는 지역이라면 그곳을 방문하는 것이 가장 좋은데, 다른 동호인들과 교류하며 실력을 빨리 늘릴 수 있습니다. 도로 위나 인도에서는 절대 주행하지 마세요.",
    source: "community.html",
    keywords: ["주행장소", "어디서", "장소", "공원", "운동장", "주차장", "트랙", "오프로드", "잔디", "실외", "배싱장소"]
  },
  {
    question: "배터리는 어떻게 관리해야 하나요?",
    answer: "배터리 관리의 핵심은 충전, 보관, 사용 세 가지입니다. 충전 시에는 반드시 밸런스 충전 모드를 사용하고, LiPo 세이프 백 안에서 충전하세요. 보관할 때는 스토리지 모드(셀당 3.8V)로 맞춰 서늘하고 건조한 곳에 둡니다. 사용 중에는 배터리 전압이 셀당 3.5V 이하로 떨어지기 전에 주행을 멈추는 것이 중요합니다. 부풀어 오른 배터리는 즉시 사용을 중단하고 안전하게 폐기하세요. 이 기본 수칙만 지켜도 배터리를 오래 안전하게 쓸 수 있습니다.",
    source: "battery-safety.html",
    keywords: ["배터리관리", "관리", "배터리", "충전", "보관", "스토리지", "밸런스", "LiPo", "안전", "수명", "과방전", "관리법", "어떻게"]
  },
  {
    question: "X-Maxx는 다른 RC카와 뭐가 다른가요?",
    answer: "X-Maxx는 Traxxas의 플래그십 모델로 1/5 스케일 8S 몬스터 트럭입니다. 대부분의 RC카가 1/10 스케일인 것에 비해 압도적으로 크고(약 78cm), 8셀 LiPo 배터리를 사용해 시속 80km 이상의 속도를 낼 수 있습니다. Self-Righting 기능으로 뒤집혀도 버튼 하나로 세울 수 있으며, VXL-8s ESC와 대형 브러시리스 모터가 엄청난 파워를 제공합니다. 크기만큼 유지비와 부품 가격도 높지만, 그만큼 강렬한 배싱 경험을 선사합니다.",
    source: "traxxas-models.html",
    keywords: ["X-Maxx", "차이점", "특징", "8S", "1/5", "대형", "Self-Righting", "VXL-8s", "플래그십", "몬스터트럭", "스펙"]
  },
  {
    question: "디퍼렌셜 오일은 언제 교체해야 하나요?",
    answer: "디퍼렌셜 오일은 약 20~30회 주행마다 또는 3~6개월에 한 번 교체하는 것을 권장합니다. 주행 중 코너링이 이전과 다르게 느껴지거나, 가속 시 한쪽 바퀴만 과도하게 회전하는 느낌이 들면 교체 시기입니다. 오일이 오래되면 점도가 변하거나 금속 가루가 섞여 디퍼렌셜 기어를 마모시킬 수 있습니다. 교체 시에는 디퍼렌셜을 완전히 분해하여 내부를 세척한 후 새 오일을 넣고, 기어에 마모나 파손이 없는지 함께 확인하세요.",
    source: "maintenance.html",
    keywords: ["디퍼렌셜", "오일교체", "교체주기", "디프오일", "정비", "코너링", "기어마모", "분해", "세척", "그리스"]
  },
  {
    question: "RC카 속도를 더 빠르게 하려면 어떻게 해야 하나요?",
    answer: "속도를 높이는 방법은 여러 가지가 있습니다. 가장 간단한 방법은 피니언 기어를 한 단계 큰 것으로 교체하여 기어비를 높이는 것입니다. 단, 모터 온도가 과도하게 올라가지 않는지 반드시 확인하세요. 더 높은 전압의 배터리(예: 2S에서 3S로)를 사용하면 모터 회전수가 증가합니다. 브러시드에서 브러시리스로 업그레이드하면 효율과 출력이 모두 향상됩니다. 무게 경량화(불필요한 부품 제거)도 속도에 도움이 됩니다. 다만 속도를 높이면 내구성 부담이 커지므로 단계적으로 진행하세요.",
    source: "tuning.html",
    keywords: ["속도", "빠르게", "최고속도", "피니언", "기어비", "업그레이드", "배터리", "전압", "브러시리스", "경량화", "파워업"]
  },
  {
    question: "Traxxas 모델 2대 이상을 동시에 작동하면 서로 간섭이 생기나요?",
    answer: "간섭 없이 동시 주행이 가능합니다. Traxxas의 TQ/TQi 조종기는 2.4GHz FHSS(주파수 도약 확산 스펙트럼) 방식을 사용하며, 전원을 켜면 자동으로 빈 채널을 찾아 조종기-수신기 간 1:1 바인딩을 형성합니다. 이 덕분에 최대 16대 이상의 RC카를 같은 장소에서 동시에 조종해도 서로 간섭이 발생하지 않습니다. 단, 각 차량에는 반드시 해당 차량에 바인딩된 전용 조종기를 사용해야 합니다. 하나의 조종기로 여러 차량을 동시에 제어하는 것은 불가능하며, 다른 브랜드(예: Spektrum, FlySky)와도 주파수 충돌이 일어나지 않습니다. 예전의 27/49MHz 방식과 달리, 2.4GHz에서는 크리스탈 교체나 채널 선택이 필요 없습니다.",
    source: "how-it-works.html",
    keywords: ["간섭", "동시", "2대", "여러대", "주파수", "충돌", "바인딩", "FHSS", "채널", "2.4GHz", "TQi", "동시주행", "멀티", "함께"]
  }
];

// ============================================
// SEARCH FUNCTIONS
// ============================================

/**
 * Highlight matching text in a string with <mark> tags
 * @param {string} text - The source text
 * @param {string} query - The search query
 * @returns {string} - Text with highlighted matches
 */
function highlightText(text, query) {
  if (!query || !text) return text;
  const words = query.trim().split(/\s+/).filter(function (w) { return w.length > 0; });
  if (words.length === 0) return text;

  // Escape regex special characters in each word
  var escaped = words.map(function (w) {
    return w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  });

  var pattern = new RegExp('(' + escaped.join('|') + ')', 'gi');
  return text.replace(pattern, '<mark>$1</mark>');
}

/**
 * Generate a snippet from content around the first match
 * @param {string} content - Full content text
 * @param {string} query - Search query
 * @param {number} contextLength - Characters before and after the match
 * @returns {string} - Snippet with highlights
 */
function generateSnippet(content, query, contextLength) {
  if (!content || !query) return content || '';
  contextLength = contextLength || 60;

  var words = query.trim().split(/\s+/).filter(function (w) { return w.length > 0; });
  if (words.length === 0) return content.substring(0, 150) + '...';

  var lowerContent = content.toLowerCase();
  var bestIndex = -1;
  var bestWord = '';

  // Find the first occurrence of any query word
  for (var i = 0; i < words.length; i++) {
    var idx = lowerContent.indexOf(words[i].toLowerCase());
    if (idx !== -1 && (bestIndex === -1 || idx < bestIndex)) {
      bestIndex = idx;
      bestWord = words[i];
    }
  }

  if (bestIndex === -1) {
    // No match found in content, return beginning
    var snippet = content.substring(0, 150);
    return snippet + (content.length > 150 ? '...' : '');
  }

  var start = Math.max(0, bestIndex - contextLength);
  var end = Math.min(content.length, bestIndex + bestWord.length + contextLength);
  var snippet = '';

  if (start > 0) snippet += '...';
  snippet += content.substring(start, end);
  if (end < content.length) snippet += '...';

  return highlightText(snippet, query);
}

/**
 * Calculate relevance score for a page result
 * @param {Object} entry - Search index entry
 * @param {string} query - Search query
 * @returns {number} - Relevance score (higher is better)
 */
function calculatePageScore(entry, query) {
  var score = 0;
  var words = query.trim().split(/\s+/).filter(function (w) { return w.length > 0; });
  var lowerQuery = query.toLowerCase();
  var matchedWords = 0;
  var haystack = (entry.title + ' ' + entry.content + ' ' + entry.keywords.join(' ')).toLowerCase();

  for (var i = 0; i < words.length; i++) {
    var word = words[i].toLowerCase();
    var wordFound = false;

    // Title match (highest weight)
    if (entry.title.toLowerCase().indexOf(word) !== -1) {
      score += 100;
      wordFound = true;
      if (entry.title.toLowerCase() === lowerQuery) {
        score += 200;
      }
    }

    // Keyword match (high weight)
    for (var j = 0; j < entry.keywords.length; j++) {
      if (entry.keywords[j].toLowerCase().indexOf(word) !== -1) {
        score += 50;
        wordFound = true;
        if (entry.keywords[j].toLowerCase() === word) {
          score += 30;
        }
      }
    }

    // Category match (medium weight)
    if (entry.category.toLowerCase().indexOf(word) !== -1) {
      score += 30;
      wordFound = true;
    }

    // Content match (base weight)
    if (entry.content.toLowerCase().indexOf(word) !== -1) {
      score += 10;
      wordFound = true;
      var regex = new RegExp(word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      var matches = entry.content.match(regex);
      if (matches) {
        score += Math.min(matches.length * 2, 20);
      }
    }

    if (wordFound) matchedWords++;
  }

  // Multi-word query: penalize if not all words match
  if (words.length >= 2) {
    var matchRatio = matchedWords / words.length;
    if (matchRatio < 0.5) return 0; // Less than half words match → exclude
    score = Math.round(score * matchRatio); // Scale score by match ratio
  }

  return score;
}

/**
 * Calculate relevance score for a FAQ result
 * @param {Object} faq - FAQ index entry
 * @param {string} query - Search query
 * @returns {number} - Relevance score (higher is better)
 */
function calculateFAQScore(faq, query) {
  var score = 0;
  var words = query.trim().split(/\s+/).filter(function (w) { return w.length > 0; });
  var matchedWords = 0;

  for (var i = 0; i < words.length; i++) {
    var word = words[i].toLowerCase();
    var wordFound = false;

    // Question match (highest weight)
    if (faq.question.toLowerCase().indexOf(word) !== -1) {
      score += 100;
      wordFound = true;
    }

    // Keyword match (high weight)
    for (var j = 0; j < faq.keywords.length; j++) {
      if (faq.keywords[j].toLowerCase().indexOf(word) !== -1) {
        score += 50;
        wordFound = true;
        if (faq.keywords[j].toLowerCase() === word) {
          score += 30;
        }
      }
    }

    // Answer match (base weight)
    if (faq.answer.toLowerCase().indexOf(word) !== -1) {
      score += 10;
      wordFound = true;
      var regex = new RegExp(word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      var matches = faq.answer.match(regex);
      if (matches) {
        score += Math.min(matches.length * 2, 20);
      }
    }

    if (wordFound) matchedWords++;
  }

  // Multi-word query: penalize if not all words match
  if (words.length >= 2) {
    var matchRatio = matchedWords / words.length;
    if (matchRatio < 0.5) return 0;
    score = Math.round(score * matchRatio);
  }

  return score;
}

/**
 * Search through all page content
 * @param {string} query - The search query string
 * @returns {Array} - Array of matched results sorted by relevance, each with:
 *   { title, url, category, icon, snippet, score }
 */
function searchContent(query) {
  if (!query || query.trim().length === 0) return [];

  var results = [];

  for (var i = 0; i < SEARCH_INDEX.length; i++) {
    var entry = SEARCH_INDEX[i];
    var score = calculatePageScore(entry, query);

    if (score > 0) {
      results.push({
        title: entry.title,
        url: entry.url,
        category: entry.category,
        icon: entry.icon,
        snippet: generateSnippet(entry.content, query, 60),
        highlightedTitle: highlightText(entry.title, query),
        score: score
      });
    }
  }

  // Sort by score descending
  results.sort(function (a, b) {
    return b.score - a.score;
  });

  return results;
}

/**
 * Search through FAQ items
 * @param {string} query - The search query string
 * @returns {Array} - Array of matched FAQ items sorted by relevance, each with:
 *   { question, answer, source, highlightedQuestion, highlightedAnswer, score }
 */
function searchFAQ(query) {
  if (!query || query.trim().length === 0) return [];

  var results = [];

  for (var i = 0; i < FAQ_INDEX.length; i++) {
    var faq = FAQ_INDEX[i];
    var score = calculateFAQScore(faq, query);

    if (score > 0) {
      results.push({
        question: faq.question,
        answer: faq.answer,
        source: faq.source,
        highlightedQuestion: highlightText(faq.question, query),
        highlightedAnswer: highlightText(faq.answer, query),
        score: score
      });
    }
  }

  // Sort by score descending
  results.sort(function (a, b) {
    return b.score - a.score;
  });

  return results;
}

/**
 * Generate a summary answer from best matching FAQs and pages.
 * Returns an object with answer text, confidence, sources, and related FAQs,
 * or null if no good match is found.
 *
 * @param {string} query - The search query string
 * @returns {Object|null} - Summary answer object or null
 *   { answer, confidence, sources, relatedFAQs }
 */
function generateSummaryAnswer(query) {
  if (!query || query.trim().length === 0) return null;

  // --- Score all FAQs ---
  var faqScored = [];
  for (var i = 0; i < FAQ_INDEX.length; i++) {
    var faq = FAQ_INDEX[i];
    var score = calculateFAQScore(faq, query);
    if (score > 0) {
      faqScored.push({ faq: faq, score: score });
    }
  }
  faqScored.sort(function (a, b) { return b.score - a.score; });

  // --- Score all pages ---
  var pageScored = [];
  for (var j = 0; j < SEARCH_INDEX.length; j++) {
    var entry = SEARCH_INDEX[j];
    var pScore = calculatePageScore(entry, query);
    if (pScore > 0) {
      pageScored.push({ page: entry, score: pScore });
    }
  }
  pageScored.sort(function (a, b) { return b.score - a.score; });

  // --- Determine if we have a good enough match ---
  var THRESHOLD = 80;
  if (faqScored.length === 0 || faqScored[0].score < THRESHOLD) {
    return null; // not confident enough
  }

  // --- Build the answer text ---
  var bestFAQ = faqScored[0];
  var answerText = '';
  var confidence = Math.min(Math.round((bestFAQ.score / 400) * 100), 99);
  if (confidence < 30) confidence = 30; // floor

  // If the top FAQ has a very high score (>= 150) and significantly beats #2, use it solo
  if (bestFAQ.score >= 150 && (faqScored.length < 2 || bestFAQ.score > faqScored[1].score * 1.3)) {
    answerText = bestFAQ.faq.answer;
  } else if (faqScored.length >= 2 && faqScored[1].score >= THRESHOLD) {
    // Combine top 2 FAQ answers (extract key points)
    var firstAnswer = bestFAQ.faq.answer;
    var secondFAQ = faqScored[1];

    // Check if the two FAQs cover different topics (different sources)
    if (bestFAQ.faq.source !== secondFAQ.faq.source || bestFAQ.faq.question !== secondFAQ.faq.question) {
      answerText = firstAnswer + '\n\n' + '추가로, ' + secondFAQ.faq.answer;
    } else {
      answerText = firstAnswer;
    }
  } else {
    answerText = bestFAQ.faq.answer;
  }

  // --- Collect source pages (unique, top 1-2) ---
  var sources = [];
  var seenUrls = {};

  // Add FAQ sources first
  for (var k = 0; k < Math.min(faqScored.length, 3); k++) {
    var srcUrl = faqScored[k].faq.source;
    if (!seenUrls[srcUrl] && faqScored[k].score >= THRESHOLD) {
      seenUrls[srcUrl] = true;
      // Find page title
      var pageTitle = srcUrl;
      var pageIcon = '';
      for (var p = 0; p < SEARCH_INDEX.length; p++) {
        if (SEARCH_INDEX[p].url === srcUrl) {
          pageTitle = SEARCH_INDEX[p].title;
          pageIcon = SEARCH_INDEX[p].icon;
          break;
        }
      }
      sources.push({ title: pageIcon + ' ' + pageTitle, url: srcUrl });
    }
  }

  // Add top page results as supplementary sources
  for (var m = 0; m < Math.min(pageScored.length, 2); m++) {
    var pUrl = pageScored[m].page.url;
    if (!seenUrls[pUrl]) {
      seenUrls[pUrl] = true;
      sources.push({ title: pageScored[m].page.icon + ' ' + pageScored[m].page.title, url: pUrl });
    }
    if (sources.length >= 3) break;
  }

  // --- Collect related FAQs (top 2-3 excluding the primary one used for answer) ---
  var relatedFAQs = [];
  var startIdx = (answerText.indexOf('추가로,') !== -1) ? 2 : 1;
  for (var n = startIdx; n < Math.min(faqScored.length, startIdx + 3); n++) {
    if (faqScored[n].score >= THRESHOLD * 0.5) {
      relatedFAQs.push({
        question: faqScored[n].faq.question,
        answer: faqScored[n].faq.answer,
        source: faqScored[n].faq.source,
        score: faqScored[n].score
      });
    }
  }

  return {
    answer: answerText,
    confidence: confidence,
    sources: sources,
    relatedFAQs: relatedFAQs
  };
}
