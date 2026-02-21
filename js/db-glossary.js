// =============================================================================
// X-Maxx RC Car Blog — 용어 사전 데이터베이스
// 55+ RC카 핵심 용어 정의
// =============================================================================

const GLOSSARY_DATA = [
  // =========================================================================
  // 전자부품 (Electronics)
  // =========================================================================
  {
    term: "ESC",
    termKo: "전자 속도 제어기",
    category: "전자부품",
    definition: "Electronic Speed Controller. 조종기의 스로틀 입력을 받아 모터에 전달하는 전력량을 조절하는 장치. 배터리의 전력을 모터가 필요한 형태로 변환하며, BEC 기능으로 수신기에도 전원을 공급합니다.",
    example: "Traxxas VXL-6s, VXL-3s, XL-5",
    related: ["모터", "배터리", "BEC", "수신기"]
  },
  {
    term: "수신기",
    termKo: "Receiver (RX)",
    category: "전자부품",
    definition: "송신기(조종기)에서 보낸 무선 신호를 수신하여 ESC와 서보에 명령을 전달하는 장치. 현대 RC카는 2.4GHz 주파수를 사용하며, 간섭에 강하고 안정적인 통신을 제공합니다.",
    example: "Traxxas TQi 수신기 (6533)",
    related: ["송신기", "서보", "ESC", "바인딩"]
  },
  {
    term: "서보",
    termKo: "Servo",
    category: "전자부품",
    definition: "수신기로부터 신호를 받아 기계적 움직임으로 변환하는 장치. RC카에서는 주로 스티어링(조향)을 담당하며, 토크(힘)와 속도가 주요 스펙입니다. 메탈기어 서보는 내구성이 높습니다.",
    example: "Traxxas 2075X (디지털 메탈기어 서보)",
    related: ["수신기", "스티어링", "토크", "턴버클"]
  },
  {
    term: "BEC",
    termKo: "배터리 제거 회로",
    category: "전자부품",
    definition: "Battery Eliminator Circuit. ESC에 내장되어 메인 배터리의 높은 전압을 낮춰 수신기와 서보에 적합한 전압(보통 6V)으로 변환해주는 회로. 별도의 수신기용 배터리가 필요 없게 해줍니다.",
    example: "대부분의 Traxxas ESC에 내장",
    related: ["ESC", "수신기", "서보", "배터리"]
  },
  {
    term: "커넥터",
    termKo: "Connector",
    category: "전자부품",
    definition: "배터리와 ESC, 또는 충전기와 배터리를 연결하는 전기 접속 장치. 커넥터의 종류에 따라 허용 전류량과 접촉 저항이 다르며, 호환성을 반드시 확인해야 합니다.",
    example: "Traxxas iD 커넥터, Deans(T-plug), XT60, EC5",
    related: ["배터리", "ESC", "iD 커넥터", "와이어 게이지"]
  },
  {
    term: "와이어 게이지",
    termKo: "Wire Gauge (AWG)",
    category: "전자부품",
    definition: "전선의 굵기를 나타내는 규격. AWG(American Wire Gauge) 숫자가 작을수록 전선이 굵고 더 많은 전류를 흘릴 수 있습니다. RC카에서는 보통 12~16AWG를 사용하며, 고출력 시스템일수록 굵은 전선이 필요합니다.",
    example: "X-Maxx ESC 와이어: 10AWG",
    related: ["커넥터", "ESC", "배터리", "LiPo"]
  },

  // =========================================================================
  // 구동계 (Drivetrain)
  // =========================================================================
  {
    term: "모터",
    termKo: "Motor",
    category: "구동계",
    definition: "배터리의 전기 에너지를 회전 운동(기계 에너지)으로 변환하는 핵심 부품. RC카에서는 브러시드 모터와 브러시리스 모터 두 종류가 있으며, 성능과 가격에 큰 차이가 있습니다.",
    example: "Traxxas Velineon 3500 (브러시리스)",
    related: ["ESC", "브러시리스 모터", "브러시드 모터", "KV"]
  },
  {
    term: "브러시드 모터",
    termKo: "Brushed Motor",
    category: "구동계",
    definition: "내부에 브러시(탄소 접점)가 회전자에 접촉하여 전류를 공급하는 방식의 모터. 구조가 간단하고 가격이 저렴하지만, 브러시 마모로 인해 수명이 짧고 효율이 낮습니다. 입문용 RC카에 주로 사용됩니다.",
    example: "Traxxas Titan 12T (550 사이즈)",
    related: ["모터", "브러시리스 모터", "ESC", "KV"]
  },
  {
    term: "브러시리스 모터",
    termKo: "Brushless Motor",
    category: "구동계",
    definition: "브러시 없이 전자적으로 회전자의 위치를 감지하여 구동하는 모터. 마찰이 적어 효율이 높고 수명이 길며, 더 높은 출력을 낼 수 있습니다. 센서드/센서리스 방식이 있으며 RC카에서는 센서리스가 일반적입니다.",
    example: "Traxxas Velineon 3500, Velineon 1200XL",
    related: ["모터", "브러시드 모터", "ESC", "KV"]
  },
  {
    term: "KV",
    termKo: "KV 값",
    category: "구동계",
    definition: "모터의 회전 속도 상수로, 무부하 상태에서 1V당 분당 회전수(RPM)를 나타냅니다. KV가 높을수록 최고 속도가 빠르지만 토크가 낮고, KV가 낮을수록 토크가 높아 큰 차량이나 크롤러에 적합합니다.",
    example: "Velineon 3500 = 3500KV",
    related: ["모터", "브러시리스 모터", "기어비", "스퍼기어"]
  },
  {
    term: "스퍼기어",
    termKo: "Spur Gear",
    category: "구동계",
    definition: "모터 축에 연결된 피니언기어와 맞물리는 큰 기어. 피니언에서 받은 회전력을 변속기(트랜스미션)로 전달하며, 스퍼/피니언 기어 조합으로 최종 기어비를 조정할 수 있습니다.",
    example: "Traxxas 54T 스퍼기어 (모듈 1.0)",
    related: ["피니언기어", "기어비", "모터", "디퍼렌셜"]
  },
  {
    term: "피니언기어",
    termKo: "Pinion Gear",
    category: "구동계",
    definition: "모터 축에 직접 장착되는 작은 기어. 스퍼기어와 맞물려 회전력을 전달하며, 이 수를 바꿔 기어비를 조정합니다. 이 수가 많을수록 속도는 빠르지만 가속력(토크)은 줄어듭니다.",
    example: "Traxxas 11T ~ 20T 피니언 (모듈 1.0)",
    related: ["스퍼기어", "기어비", "모터", "KV"]
  },
  {
    term: "기어비",
    termKo: "Gear Ratio",
    category: "구동계",
    definition: "스퍼기어 잇수를 피니언기어 잇수로 나눈 값. 기어비가 높으면(큰 스퍼 / 작은 피니언) 토크가 강하고 모터 발열이 적으며, 기어비가 낮으면 최고 속도가 빨라지지만 모터에 부담이 커집니다.",
    example: "54T/15T = 3.6:1",
    related: ["스퍼기어", "피니언기어", "KV", "모터"]
  },
  {
    term: "디퍼렌셜",
    termKo: "Differential",
    category: "구동계",
    definition: "코너링 시 안쪽 바퀴와 바깥쪽 바퀴의 회전 속도 차이를 허용하는 기어 장치. 오픈 디프, 리미티드 슬립, 로킹 디프 등 종류가 있으며, RC카에서는 베벨기어 방식이 일반적입니다.",
    example: "X-Maxx 프론트/리어 디퍼렌셜",
    related: ["드라이브샤프트", "액슬", "스퍼기어", "베어링"]
  },
  {
    term: "드라이브샤프트",
    termKo: "Drive Shaft",
    category: "구동계",
    definition: "엔진이나 모터의 회전력을 디퍼렌셜이나 바퀴로 전달하는 축. 중앙 드라이브샤프트는 전후 디퍼렌셜을 연결하고, 액슬 드라이브샤프트는 디퍼렌셜에서 바퀴로 동력을 전달합니다.",
    example: "Traxxas 스틸 CV 드라이브샤프트",
    related: ["디퍼렌셜", "CVD", "유니버셜 조인트", "액슬"]
  },
  {
    term: "액슬",
    termKo: "Axle",
    category: "구동계",
    definition: "바퀴를 지지하고 회전시키는 축. 디퍼렌셜의 출력을 받아 바퀴에 전달하는 역할을 하며, 점프나 충격에 의해 자주 파손되는 부품 중 하나입니다. 스틸 업그레이드 부품이 인기 있습니다.",
    example: "Traxxas 스틸 액슬 세트",
    related: ["드라이브샤프트", "디퍼렌셜", "베어링", "CVD"]
  },
  {
    term: "CVD",
    termKo: "등속 조인트",
    category: "구동계",
    definition: "Constant Velocity Drive. 각도가 변해도 일정한 속도로 회전력을 전달하는 드라이브샤프트 시스템. 표준 도그본 방식보다 내구성이 높고 효율적이며, 스티어링 각도가 큰 차량에 특히 유리합니다.",
    example: "Traxxas CVD 드라이브샤프트 세트",
    related: ["드라이브샤프트", "유니버셜 조인트", "액슬", "디퍼렌셜"]
  },
  {
    term: "유니버셜 조인트",
    termKo: "Universal Joint",
    category: "구동계",
    definition: "두 축 사이에서 각도를 가진 채로 회전력을 전달할 수 있는 조인트. 도그본(dog bone) 형태가 RC카에서 가장 흔하며, 서스펜션이 움직여도 동력 전달이 끊기지 않게 해줍니다.",
    example: "Traxxas 헤비듀티 유니버셜 조인트",
    related: ["CVD", "드라이브샤프트", "액슬", "서스펜션 암"]
  },
  {
    term: "베어링",
    termKo: "Bearing",
    category: "구동계",
    definition: "회전하는 축의 마찰을 줄여주는 부품. RC카의 바퀴, 기어, 모터 등 회전하는 모든 곳에 사용됩니다. 부시(플라스틱)에서 볼 베어링(금속)으로 업그레이드하면 성능이 크게 향상됩니다.",
    example: "풀 베어링 세트 (X-Maxx용)",
    related: ["액슬", "드라이브샤프트", "디퍼렌셜", "휠"]
  },

  // =========================================================================
  // 섀시 (Chassis)
  // =========================================================================
  {
    term: "섀시",
    termKo: "Chassis",
    category: "섀시",
    definition: "RC카의 뼈대가 되는 메인 프레임. 모든 부품이 이 위에 장착되며, 재질과 설계에 따라 강성, 무게, 내구성이 달라집니다. 알루미늄, 카본, 복합소재 등이 사용됩니다.",
    example: "X-Maxx 복합소재 섀시 플레이트",
    related: ["바디 쉘", "서스펜션 암", "범퍼", "라이드 하이트"]
  },
  {
    term: "쇼크 업소버",
    termKo: "Shock Absorber (댐퍼)",
    category: "섀시",
    definition: "스프링과 오일 실린더로 구성된 충격 흡수 장치. 노면의 요철이나 점프 착지 충격을 흡수하여 타이어가 지면에 밀착되도록 합니다. 오일 점도와 스프링 강도를 조절하여 성능을 튜닝할 수 있습니다.",
    example: "Traxxas GTX 알루미늄 쇼크 (X-Maxx)",
    related: ["프리로드", "댐핑", "리바운드", "서스펜션 암"]
  },
  {
    term: "서스펜션 암",
    termKo: "Suspension Arm",
    category: "섀시",
    definition: "바퀴와 섀시를 연결하는 팔 모양의 부품. 바퀴가 상하로 움직일 수 있게 해주며, 주행 중 충격을 받는 주요 부분이므로 내구성이 중요합니다. 어퍼 암과 로어 암으로 나뉩니다.",
    example: "Traxxas X-Maxx 헤비듀티 서스펜션 암",
    related: ["A-arm", "쇼크 업소버", "캠버", "턴버클"]
  },
  {
    term: "A-arm",
    termKo: "A자형 서스펜션 암",
    category: "섀시",
    definition: "알파벳 A 형태로 설계된 서스펜션 암. 넓은 지지면으로 안정성을 제공하며, 대부분의 RC 몬스터트럭과 버기에서 사용됩니다. 단단하면서도 충격 시 적절히 휘어져 다른 부품을 보호하는 역할도 합니다.",
    example: "X-Maxx 로어 A-arm (7730/7731)",
    related: ["서스펜션 암", "캠버", "캐스터", "쇼크 업소버"]
  },
  {
    term: "캠버",
    termKo: "Camber",
    category: "섀시",
    definition: "차량을 정면에서 보았을 때 타이어가 안쪽 또는 바깥쪽으로 기울어진 각도. 네거티브 캠버(위쪽이 안쪽)는 코너링 그립을 높이고, 포지티브 캠버는 직진 안정성에 영향을 줍니다.",
    example: "턴버클로 캠버 조정",
    related: ["토", "캐스터", "턴버클", "서스펜션 암"]
  },
  {
    term: "토",
    termKo: "Toe (토인/토아웃)",
    category: "섀시",
    definition: "차량을 위에서 보았을 때 타이어가 안쪽(토인) 또는 바깥쪽(토아웃)으로 향하는 각도. 프론트 토아웃은 초기 턴인 반응을, 리어 토인은 직진 안정성을 높여줍니다.",
    example: "턴버클로 토 각도 조정",
    related: ["캠버", "캐스터", "턴버클", "토인/토아웃"]
  },
  {
    term: "캐스터",
    termKo: "Caster",
    category: "섀시",
    definition: "스티어링 축이 수직선에서 뒤로 기울어진 각도. 캐스터 각이 크면 직진 안정성과 자기 복원력이 강해지지만, 스티어링 반응은 느려집니다. 고속 주행에서는 큰 캐스터가 유리합니다.",
    example: "Traxxas 캐스터 블록 (25°/30°)",
    related: ["캠버", "토", "A-arm", "킥업"]
  },
  {
    term: "턴버클",
    termKo: "Turnbuckle",
    category: "섀시",
    definition: "양쪽에 역방향 나사산이 있어 회전시키면 길이가 늘거나 줄어드는 링크. 캠버, 토, 서스펜션 암 길이 등을 정밀하게 조절할 수 있어 RC카 튜닝에 필수적인 부품입니다.",
    example: "Traxxas 알루미늄 턴버클 세트",
    related: ["캠버", "토", "서스펜션 암", "튜닝"]
  },
  {
    term: "타이어",
    termKo: "Tire",
    category: "섀시",
    definition: "바퀴 외부를 감싸는 고무 부품으로 지면과 직접 접촉합니다. 트레드 패턴과 고무 경도에 따라 그립과 내구성이 달라지며, 주행 환경(포장/비포장/잔디 등)에 맞는 타이어 선택이 중요합니다.",
    example: "Traxxas Maxx AT 타이어 (X-Maxx용)",
    related: ["휠", "인서트 폼", "그립", "트레드"]
  },
  {
    term: "휠",
    termKo: "Wheel (림)",
    category: "섀시",
    definition: "타이어를 장착하는 바퀴 부품. 허브와 연결되어 회전하며, 크기와 오프셋에 따라 트레드(좌우 바퀴 간 거리)가 달라집니다. RC카에서는 접착(글루) 방식으로 타이어를 휠에 고정합니다.",
    example: "Traxxas X-Maxx 휠 (블랙 크롬)",
    related: ["타이어", "베어링", "액슬", "허브"]
  },
  {
    term: "바디 쉘",
    termKo: "Body Shell",
    category: "섀시",
    definition: "RC카의 외형을 이루는 폴리카보네이트(렉산) 커버. 내부 부품을 먼지와 충격으로부터 보호하며, 실제 차량의 외관을 재현합니다. 안쪽에서 페인팅하여 외부 긁힘에도 도색이 벗겨지지 않게 합니다.",
    example: "X-Maxx 프로그래픽스 바디 (7711X)",
    related: ["클립리스 바디", "섀시", "범퍼", "스케일"]
  },
  {
    term: "범퍼",
    termKo: "Bumper",
    category: "섀시",
    definition: "차량 전후면에 장착되어 충돌 시 충격을 흡수하고 내부 부품을 보호하는 부품. 강성이 높은 소재로 만들어지며, 일부 모델은 바디 마운트와 일체형으로 설계됩니다.",
    example: "Traxxas X-Maxx 프론트 범퍼",
    related: ["섀시", "바디 쉘", "서스펜션 암", "스키드 플레이트"]
  },

  // =========================================================================
  // 배터리 (Battery)
  // =========================================================================
  {
    term: "NiMH",
    termKo: "니켈수소 배터리",
    category: "배터리",
    definition: "Nickel-Metal Hydride. 안전하고 관리가 쉬운 배터리 유형. LiPo에 비해 에너지 밀도와 방전율이 낮지만, 과충전에 강하고 특별한 관리가 필요 없어 입문자에게 추천됩니다. 메모리 효과가 거의 없습니다.",
    example: "Traxxas Power Cell 7-Cell 8.4V NiMH",
    related: ["LiPo", "셀", "mAh", "Power Cell"]
  },
  {
    term: "LiPo",
    termKo: "리튬 폴리머 배터리",
    category: "배터리",
    definition: "Lithium Polymer. 높은 에너지 밀도와 방전율로 RC카에서 가장 인기 있는 배터리. 가볍고 강력하지만, 과충전/과방전 시 부풀어오르거나 화재 위험이 있어 밸런스 충전과 안전 관리가 필수적입니다.",
    example: "Traxxas Power Cell 4S 6700mAh LiPo",
    related: ["NiMH", "셀", "C레이팅", "밸런스 충전"]
  },
  {
    term: "셀",
    termKo: "Cell",
    category: "배터리",
    definition: "배터리를 구성하는 최소 단위. NiMH는 셀당 1.2V, LiPo는 셀당 3.7V(만충 4.2V)입니다. 2S는 2셀 직렬(7.4V), 4S는 4셀 직렬(14.8V)을 의미하며, 셀 수가 많을수록 전압과 파워가 높아집니다.",
    example: "X-Maxx: 4S × 2 = 8S (29.6V)",
    related: ["LiPo", "NiMH", "mAh", "밸런스 충전"]
  },
  {
    term: "C레이팅",
    termKo: "C-Rating",
    category: "배터리",
    definition: "배터리의 최대 방전 속도를 나타내는 수치. 배터리 용량(Ah) × C레이팅 = 최대 방전 전류(A)입니다. 예를 들어 5000mAh 25C 배터리는 최대 125A를 방전할 수 있습니다. 높은 C레이팅은 순간 파워 출력에 유리합니다.",
    example: "25C, 50C 등",
    related: ["LiPo", "mAh", "방전", "ESC"]
  },
  {
    term: "mAh",
    termKo: "밀리암페어시",
    category: "배터리",
    definition: "배터리의 용량(에너지 저장량)을 나타내는 단위. 숫자가 클수록 한 번 충전으로 더 오래 주행할 수 있습니다. 다만 용량이 크면 배터리 크기와 무게도 증가하므로 차량에 맞는 적절한 용량을 선택해야 합니다.",
    example: "5000mAh, 6700mAh, 8000mAh",
    related: ["LiPo", "NiMH", "C레이팅", "셀"]
  },
  {
    term: "밸런스 충전",
    termKo: "Balance Charging",
    category: "배터리",
    definition: "LiPo 배터리의 각 셀 전압을 균일하게 맞추면서 충전하는 방식. 셀 간 전압 불균형은 배터리 수명을 단축시키고 안전 위험을 초래하므로, LiPo 배터리는 반드시 밸런스 충전을 해야 합니다.",
    example: "Traxxas EZ-Peak Plus (자동 밸런스 충전)",
    related: ["LiPo", "셀", "스토리지 모드", "EZ-Peak"]
  },
  {
    term: "스토리지 모드",
    termKo: "Storage Mode (보관 충전)",
    category: "배터리",
    definition: "LiPo 배터리를 장기 보관할 때 셀당 3.8V(약 50% 충전 상태)로 맞춰두는 기능. 완충 또는 완방 상태로 장기 보관하면 배터리가 손상되므로, 2주 이상 사용하지 않을 때는 반드시 스토리지 모드로 설정해야 합니다.",
    example: "Traxxas EZ-Peak 충전기의 Storage 버튼",
    related: ["LiPo", "밸런스 충전", "방전", "EZ-Peak"]
  },
  {
    term: "방전",
    termKo: "Discharge",
    category: "배터리",
    definition: "배터리가 전기 에너지를 내보내는 과정. LiPo 배터리는 셀당 3.0V 이하로 과방전하면 영구적으로 손상됩니다. ESC의 LVC(저전압 차단) 기능이 과방전을 방지해주며, 방전 후에는 빠른 시일 내에 충전하는 것이 좋습니다.",
    example: "LVC 설정: 3.2V/셀",
    related: ["LiPo", "C레이팅", "스토리지 모드", "ESC"]
  },
  {
    term: "iD 커넥터",
    termKo: "iD Connector",
    category: "배터리",
    definition: "Traxxas 고유의 배터리 커넥터 시스템. 배터리 정보(셀 수, 용량, 타입)를 충전기에 자동으로 전달하여, 충전기가 최적의 충전 설정을 자동으로 선택합니다. 잘못된 충전 설정으로 인한 사고를 방지해줍니다.",
    example: "Traxxas iD 배터리 + EZ-Peak 충전기",
    related: ["커넥터", "LiPo", "EZ-Peak", "iD 배터리"]
  },

  // =========================================================================
  // 조종 (Control)
  // =========================================================================
  {
    term: "송신기",
    termKo: "Transmitter (TX)",
    category: "조종",
    definition: "사용자가 손에 들고 RC카를 조종하는 장치. 스로틀(가속/브레이크)과 스티어링(좌우 조향)이 기본이며, 2.4GHz 무선 신호로 수신기에 명령을 보냅니다. 피스톨 그립형이 RC카에서 표준입니다.",
    example: "Traxxas TQi 2.4GHz 송신기",
    related: ["수신기", "채널", "바인딩", "TQi"]
  },
  {
    term: "조종기",
    termKo: "Controller / Radio",
    category: "조종",
    definition: "송신기와 수신기를 합쳐 부르는 통칭. RC카의 라디오 시스템 전체를 의미하며, 송수신기 간의 호환성과 프로토콜이 중요합니다. 채널 수에 따라 제어할 수 있는 기능의 수가 달라집니다.",
    example: "Traxxas TQi 라디오 시스템",
    related: ["송신기", "수신기", "채널", "트림"]
  },
  {
    term: "채널",
    termKo: "Channel (CH)",
    category: "조종",
    definition: "조종기에서 독립적으로 제어할 수 있는 기능의 수. 기본 2채널은 스로틀과 스티어링이며, 추가 채널로 디퍼렌셜 잠금, 변속 등을 제어할 수 있습니다. Traxxas TQi는 최대 4채널을 지원합니다.",
    example: "TQi 4채널 (스로틀, 스티어링, CH3, CH4)",
    related: ["송신기", "수신기", "트림", "듀얼레이트"]
  },
  {
    term: "트림",
    termKo: "Trim",
    category: "조종",
    definition: "조종기의 중립 위치를 미세하게 조정하는 기능. 스티어링 트림은 직진 시 차가 한쪽으로 쏠리는 것을 보정하고, 스로틀 트림은 정지 상태에서 차가 움직이지 않도록 보정합니다.",
    example: "TQi 송신기의 트림 다이얼",
    related: ["송신기", "EPA", "듀얼레이트", "서보"]
  },
  {
    term: "EPA",
    termKo: "엔드 포인트 어저스트먼트",
    category: "조종",
    definition: "End Point Adjustment. 서보의 최대 동작 범위를 제한하는 기능. 스티어링이 과도하게 꺾여서 서스펜션 부품에 간섭하는 것을 방지하거나, 좌우 스티어링 각도를 균등하게 맞추는 데 사용합니다.",
    example: "TQi 송신기에서 EPA 설정",
    related: ["트림", "듀얼레이트", "서보", "송신기"]
  },
  {
    term: "듀얼레이트",
    termKo: "Dual Rate (D/R)",
    category: "조종",
    definition: "조종기 입력의 민감도를 조절하는 기능. 듀얼레이트를 낮추면 스틱을 최대로 움직여도 서보가 설정한 비율만큼만 동작합니다. 초보자는 스티어링 듀얼레이트를 낮춰 급격한 조향을 방지할 수 있습니다.",
    example: "스티어링 D/R 70% 설정",
    related: ["EPA", "트림", "송신기", "서보"]
  },
  {
    term: "바인딩",
    termKo: "Binding",
    category: "조종",
    definition: "송신기와 수신기를 1:1로 페어링(연결)하는 과정. 바인딩이 완료되면 해당 송신기만 해당 수신기를 제어할 수 있어 다른 사용자의 신호와 간섭이 발생하지 않습니다.",
    example: "TQi 송신기 SET 버튼으로 바인딩",
    related: ["송신기", "수신기", "2.4GHz", "채널"]
  },
  {
    term: "2.4GHz",
    termKo: "2.4기가헤르츠",
    category: "조종",
    definition: "현대 RC카에서 표준으로 사용하는 무선 주파수 대역. FHSS(주파수 호핑) 기술로 다수의 RC카가 동시에 주행해도 간섭이 없으며, 구형 27/75MHz 대비 응답 속도와 신뢰성이 크게 향상되었습니다.",
    example: "Traxxas TQi 2.4GHz 시스템",
    related: ["송신기", "수신기", "바인딩", "채널"]
  },

  // =========================================================================
  // 튜닝 (Tuning)
  // =========================================================================
  {
    term: "프리로드",
    termKo: "Preload",
    category: "튜닝",
    definition: "쇼크 업소버의 스프링을 미리 압축해놓는 양. 프리로드를 늘리면 차고(라이드 하이트)가 높아지고 스프링이 더 뻣뻣하게 느껴집니다. 프리로드 조절 클립이나 링의 위치를 변경하여 조정합니다.",
    example: "쇼크 프리로드 클립 위치 변경",
    related: ["쇼크 업소버", "라이드 하이트", "댐핑", "리바운드"]
  },
  {
    term: "댐핑",
    termKo: "Damping",
    category: "튜닝",
    definition: "쇼크 업소버가 충격을 흡수하는 정도. 오일 점도(번호)를 바꿔 조절하며, 점도가 높을수록 댐핑이 강해져 쇼크 움직임이 느려집니다. 댐핑이 너무 강하면 타이어가 노면을 따라가지 못하고, 너무 약하면 차가 통통 뛰게 됩니다.",
    example: "쇼크 오일 30wt → 40wt로 교체",
    related: ["쇼크 업소버", "리바운드", "프리로드", "드룹"]
  },
  {
    term: "리바운드",
    termKo: "Rebound",
    category: "튜닝",
    definition: "쇼크가 압축된 후 원래 길이로 돌아오는 속도. 리바운드가 빠르면 험한 노면에서 타이어 접지력이 좋지만 점프 시 차가 불안정해질 수 있습니다. 리바운드가 느리면 점프 착지가 안정적이지만 요철 추종이 떨어집니다.",
    example: "리바운드 조절 피스톤 홀 변경",
    related: ["댐핑", "프리로드", "쇼크 업소버", "드룹"]
  },
  {
    term: "드룹",
    termKo: "Droop",
    category: "튜닝",
    definition: "서스펜션이 최대로 늘어난 상태(풀 익스텐션)에서의 움직임 범위. 드룹이 크면 바퀴가 지면을 더 잘 따라가지만 롤이 커질 수 있으며, 드룹을 제한하면 점프 시 팔이 과도하게 벌어지는 것을 방지합니다.",
    example: "드룹 스크류로 제한 조정",
    related: ["리바운드", "라이드 하이트", "서스펜션 암", "롤센터"]
  },
  {
    term: "라이드 하이트",
    termKo: "Ride Height (차고)",
    category: "튜닝",
    definition: "차체 바닥면에서 지면까지의 높이. 차고가 높으면 험로 주파성이 좋지만 무게 중심이 높아져 롤오버(전복) 위험이 커집니다. 프리로드, 쇼크 길이, 쇼크 마운트 위치 등으로 조정합니다.",
    example: "프리로드 클립으로 차고 조정",
    related: ["프리로드", "롤센터", "드룹", "쇼크 업소버"]
  },
  {
    term: "토인/토아웃",
    termKo: "Toe-In / Toe-Out",
    category: "튜닝",
    definition: "차량 위에서 보았을 때 바퀴가 안쪽(토인) 또는 바깥쪽(토아웃)을 향하는 설정. 리어 토인은 직진 안정성을 높이고, 프론트 토아웃은 코너 진입 반응을 빠르게 합니다. 턴버클 길이로 조정합니다.",
    example: "리어 토인 2° 설정",
    related: ["토", "캠버", "턴버클", "서스펜션 암"]
  },
  {
    term: "롤센터",
    termKo: "Roll Center",
    category: "튜닝",
    definition: "차량이 코너링 시 회전하는 가상의 중심점. 롤센터가 높으면 롤(좌우 기울임)이 적어지고 반응이 빨라지지만, 너무 높으면 불안정해집니다. 서스펜션 암의 마운트 높이와 각도로 변경합니다.",
    example: "힌지 핀 마운트 높이 변경",
    related: ["라이드 하이트", "안티롤바", "캠버", "서스펜션 암"]
  },
  {
    term: "안티롤바",
    termKo: "Anti-Roll Bar (스웨이 바)",
    category: "튜닝",
    definition: "좌우 서스펜션을 연결하여 코너링 시 바디 롤을 줄여주는 바(bar). 두꺼운 안티롤바는 롤을 더 많이 줄이지만, 한쪽 바퀴만 요철을 넘을 때 반대쪽에도 영향을 줘 험로 주행이 거칠어질 수 있습니다.",
    example: "Traxxas 안티롤바 세트 (프론트/리어)",
    related: ["롤센터", "서스펜션 암", "쇼크 업소버", "라이드 하이트"]
  },
  {
    term: "킥업",
    termKo: "Kick-Up",
    category: "튜닝",
    definition: "프론트 서스펜션 암이 뒤쪽으로 갈수록 높아지도록 만든 각도. 킥업이 크면 프론트가 장애물 위로 올라타기 쉽고 점프 시 노즈다이브를 줄여줍니다. 캐스터 블록이나 벌크헤드 각도로 조정합니다.",
    example: "캐스터 블록 각도 변경으로 킥업 조절",
    related: ["캐스터", "A-arm", "서스펜션 암", "범퍼"]
  },

  // =========================================================================
  // Traxxas (Traxxas 고유 기술)
  // =========================================================================
  {
    term: "TSM",
    termKo: "Traxxas Stability Management",
    category: "Traxxas",
    definition: "Traxxas 고유의 전자 주행 안정 시스템. 자이로 센서가 차량의 회전을 감지하여 스티어링을 자동 보정합니다. 가속 시 피시테일(뒷바퀴 미끄러짐)이나 오버스티어를 억제해주며, 레벨을 조절하거나 끌 수 있습니다.",
    example: "TQi 송신기의 TSM 다이얼",
    related: ["TQi", "수신기", "서보", "Traxxas Link"]
  },
  {
    term: "TQi",
    termKo: "Traxxas Quality intelligence",
    category: "Traxxas",
    definition: "Traxxas의 2.4GHz 라디오 시스템 브랜드명. 자동 모델 인식, 다중 모델 메모리, TSM 연동 등의 기능을 갖추고 있으며, Traxxas Link 앱과 블루투스로 연결하여 스마트폰에서 세밀한 설정이 가능합니다.",
    example: "TQi 4채널 송신기 (6530)",
    related: ["TSM", "Traxxas Link", "송신기", "바인딩"]
  },
  {
    term: "Traxxas Link",
    termKo: "트랙사스 링크",
    category: "Traxxas",
    definition: "TQi 송신기와 블루투스로 연결하여 스마트폰/태블릿에서 RC카의 세부 설정을 조정할 수 있는 앱. 실시간 텔레메트리(속도, RPM, 온도), TSM 레벨, 스티어링 커브, 스로틀 커브 등을 설정할 수 있습니다.",
    example: "Traxxas Link 앱 (iOS/Android)",
    related: ["TQi", "TSM", "블루투스 모듈", "텔레메트리"]
  },
  {
    term: "VXL",
    termKo: "Velineon 브러시리스 시스템",
    category: "Traxxas",
    definition: "Traxxas의 브러시리스 파워 시스템 브랜드명. VXL-3s(3S LiPo 대응), VXL-6s(6S LiPo 대응), VXL-8s(8S LiPo 대응) 등 등급이 있으며, 전용 Velineon 모터와 최적화된 조합으로 제공됩니다.",
    example: "X-Maxx VXL-8s ESC + Velineon 1200XL 모터",
    related: ["ESC", "브러시리스 모터", "LiPo", "Traxxas"]
  },
  {
    term: "클립리스 바디",
    termKo: "Clipless Body Mount",
    category: "Traxxas",
    definition: "Traxxas가 개발한 바디 클립 없이 바디를 고정하는 시스템. 래치(걸쇠) 방식으로 바디를 빠르게 탈착할 수 있어 편리하며, 기존 바디 클립을 분실하거나 파손될 일이 없습니다.",
    example: "X-Maxx 클립리스 바디 마운트 시스템",
    related: ["바디 쉘", "섀시", "Traxxas", "범퍼"]
  },
  {
    term: "EZ-Peak",
    termKo: "이지피크 충전기",
    category: "Traxxas",
    definition: "Traxxas의 스마트 충전기 브랜드. iD 배터리를 연결하면 자동으로 배터리 종류와 셀 수를 인식하여 최적 설정으로 충전합니다. EZ-Peak Plus, EZ-Peak Live, EZ-Peak Dual 등 여러 모델이 있습니다.",
    example: "EZ-Peak Plus 4A (NiMH/LiPo 겸용)",
    related: ["iD 커넥터", "밸런스 충전", "LiPo", "Power Cell"]
  },
  {
    term: "Power Cell",
    termKo: "파워셀 배터리",
    category: "Traxxas",
    definition: "Traxxas의 자체 배터리 브랜드. iD 커넥터가 내장되어 EZ-Peak 충전기와 완벽 호환되며, NiMH와 LiPo 라인업이 있습니다. Traxxas가 품질을 보증하며, 공식 호환성이 확인된 배터리입니다.",
    example: "Power Cell 4S 6700mAh 25C LiPo",
    related: ["LiPo", "NiMH", "iD 커넥터", "EZ-Peak"]
  },
  {
    term: "iD 배터리",
    termKo: "iD Battery",
    category: "Traxxas",
    definition: "Traxxas iD 칩이 내장된 배터리. 배터리 정보(타입, 셀 수, 용량)를 충전기에 자동 전달하여 원버튼 충전이 가능합니다. EZ-Peak 충전기와 함께 사용하면 별도 설정 없이 안전하고 최적화된 충전이 이루어집니다.",
    example: "Traxxas iD LiPo 2S 7600mAh",
    related: ["iD 커넥터", "EZ-Peak", "Power Cell", "LiPo"]
  },

  // =========================================================================
  // 일반 (General)
  // =========================================================================
  {
    term: "RTR",
    termKo: "Ready-To-Run",
    category: "일반",
    definition: "구매 즉시 주행할 수 있도록 모든 구성품(차체, 송수신기, ESC, 모터 등)이 조립 완료된 상태로 판매되는 RC카. 배터리와 충전기만 추가로 구매하면 되는 경우가 많습니다. 입문자에게 가장 추천되는 형태입니다.",
    example: "Traxxas X-Maxx 8S RTR (77086-4)",
    related: ["ARR", "키트", "스케일", "Traxxas"]
  },
  {
    term: "스케일",
    termKo: "Scale",
    category: "일반",
    definition: "RC카가 실제 차량 대비 축소된 비율. 1/10 스케일은 실차의 10분의 1 크기, 1/5 스케일은 5분의 1 크기입니다. X-Maxx는 1/5 스케일에 해당하는 대형 몬스터트럭이며, 숫자가 작을수록 큰 차량입니다.",
    example: "X-Maxx: 약 1/5 스케일",
    related: ["몬스터트럭", "숏코스", "버기", "RTR"]
  },
  {
    term: "숏코스",
    termKo: "Short Course Truck",
    category: "일반",
    definition: "실제 숏코스 오프로드 레이스 트럭을 축소한 RC카 장르. 실감 나는 바디와 풀 펜더가 특징이며, 점프와 오프로드 주행에 적합합니다. 내구성이 좋고 다루기 쉬워 입문자에게도 인기 있습니다.",
    example: "Traxxas Slash 4X4 VXL",
    related: ["스케일", "몬스터트럭", "버기", "RTR"]
  },
  {
    term: "몬스터트럭",
    termKo: "Monster Truck",
    category: "일반",
    definition: "커다란 타이어와 높은 지상고가 특징인 RC카 장르. 험한 지형과 큰 점프에 강하며, 파워풀한 주행이 매력입니다. X-Maxx는 1/5 스케일 대형 몬스터트럭의 대표 모델입니다.",
    example: "Traxxas X-Maxx, Maxx, Stampede",
    related: ["스케일", "숏코스", "버기", "4WD"]
  },
  {
    term: "버기",
    termKo: "Buggy",
    category: "일반",
    definition: "경량 차체에 큰 서스펜션 트래블과 오프로드 타이어를 갖춘 RC카 장르. 레이스 경기에서 가장 인기 있는 카테고리이며, 민첩한 핸들링과 빠른 랩타임이 특징입니다. 1/8과 1/10 스케일이 주류입니다.",
    example: "Traxxas Bandit VXL (1/10 버기)",
    related: ["스케일", "몬스터트럭", "숏코스", "2WD"]
  },
  {
    term: "크롤러",
    termKo: "Crawler",
    category: "일반",
    definition: "저속으로 험한 암석 지형을 오르는 데 특화된 RC카 장르. 높은 토크의 저KV 모터, 긴 서스펜션 트래블, 강한 그립의 소프트 타이어가 특징입니다. 스케일 디테일과 실감을 중시하는 취미 분야입니다.",
    example: "Traxxas TRX-4, TRX-6",
    related: ["스케일", "4WD", "모터", "디퍼렌셜"]
  },
  {
    term: "2WD",
    termKo: "2륜 구동",
    category: "일반",
    definition: "Two-Wheel Drive. 앞바퀴 또는 뒷바퀴 두 개만 동력을 받는 구동 방식. RC카에서는 주로 후륜구동(RWD)이며, 4WD보다 구조가 간단하고 가볍지만 험로 주파성은 떨어집니다. 드리프트나 파워 슬라이드가 용이합니다.",
    example: "Traxxas Slash 2WD, Rustler 2WD",
    related: ["4WD", "디퍼렌셜", "드라이브샤프트", "스케일"]
  },
  {
    term: "4WD",
    termKo: "4륜 구동",
    category: "일반",
    definition: "Four-Wheel Drive. 네 바퀴 모두 동력을 받는 구동 방식. 트랙션(접지력)이 뛰어나 오프로드와 험로에 강하며, 가속력도 우수합니다. X-Maxx는 샤프트 구동 풀타임 4WD 시스템을 사용합니다.",
    example: "Traxxas X-Maxx, Slash 4X4, Maxx",
    related: ["2WD", "디퍼렌셜", "드라이브샤프트", "센터 디프"]
  },
  {
    term: "방수",
    termKo: "Waterproof",
    category: "일반",
    definition: "전자 부품(ESC, 수신기, 서보)이 방수 처리되어 물이 튀거나 웅덩이를 지나도 작동하는 기능. Traxxas는 대부분의 모델에 방수 전자 부품을 기본 장착하여 비 오는 날이나 물가에서도 주행이 가능합니다.",
    example: "Traxxas 방수 ESC, 서보, 수신기 박스",
    related: ["ESC", "수신기", "서보", "RTR"]
  }
];
