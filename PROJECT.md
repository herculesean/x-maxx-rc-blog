# X-Maxx RC Car Blog — Project Document

## 1. Objective (목적)

RC카 초보자를 위한 **한국어 정보 블로그**를 구축한다.
- Traxxas, FMS 등 주요 브랜드의 모델 라인업을 체계적으로 정리
- RC카 기초 지식(작동 원리, 부품, 파워 시스템)부터 세팅/유지보수까지 커버
- AI 챗봇(GPT-4o-mini)을 통한 실시간 RC카 Q&A 지원
- 모델 DB + 용어 사전으로 레퍼런스 제공

## 2. Key Deliverables (주요 아웃풋)

### 콘텐츠 페이지 (8개)
| 페이지 | 파일 | 설명 |
|--------|------|------|
| 홈 | `index.html` | 블로그 메인, 섹션 카드 |
| RC카 작동 원리 | `how-it-works.html` | 조종기→수신기→ESC→모터 신호 흐름 |
| 핵심 부품 맵 | `parts-map.html` | 전자/구동/섀시 구역별 부품 |
| 파워 시스템 | `power-system.html` | 배터리, ESC, 모터 상세 (실사 포함) |
| 셋업 & 튜닝 | `tuning.html` | 기어비, 서스펜션, 캠버 |
| 유지보수 | `maintenance.html` | 점검, 세척, 윤활, 정기 교체 |
| 배터리 안전 | `battery-safety.html` | LiPo 충전/보관/폐기 가이드 |
| 커뮤니티 용어 | `community.html` | RC 커뮤니티 용어 모음 |

### 브랜드/모델 페이지 (4개)
| 페이지 | 파일 | 설명 |
|--------|------|------|
| Traxxas 생태계 | `traxxas-ecosystem.html` | Traxxas 브랜드 개요 |
| Traxxas 모델 | `traxxas-models.html` | 5개 카테고리, 24개 상위모델, 77개 모델 |
| FMS 모델 | `fms-models.html` | 3개 스케일, 16개 상위모델 |
| RC카 선택 체크리스트 | `selection-checklist.html` | 예산/목적/환경별 선택 가이드 |

### 데이터베이스 페이지 (2개)
| 페이지 | 파일 | 설명 |
|--------|------|------|
| 모델 DB | `models.html` + `js/db-models.js` | 전체 모델 스펙 검색/필터/비교 |
| 용어 사전 | `glossary.html` + `js/db-glossary.js` | 55+ RC 용어 검색/필터 |

### AI Q&A (1개)
| 페이지 | 파일 | 설명 |
|--------|------|------|
| Q&A / 검색 | `qa.html` + `js/search.js` | AI 챗봇 + 키워드 검색 |

### 백엔드
| 컴포넌트 | 파일 | 설명 |
|-----------|------|------|
| Flask 서버 | `server.py` | 정적 파일 서빙 + `/api/chat` AI 프록시 |
| 환경 변수 | `.env` | GITHUB_TOKEN |

## 3. Structure (프로젝트 구조)

```
X-Maxx/
├── server.py                  # Flask 서버 (정적파일 + AI API 프록시)
├── .env                       # 환경변수 (GITHUB_TOKEN)
├── PROJECT.md                 # 이 문서
│
├── css/
│   └── style.css              # 전체 스타일 (1493 lines)
│
├── js/
│   ├── app.js                 # 사이드바, TOC, 다크모드, 모바일
│   ├── db-models.js           # 모델 DB 데이터 (77개 모델)
│   ├── db-glossary.js         # 용어 사전 데이터 (55+ 용어)
│   └── search.js              # Q&A 검색/필터 로직
│
├── images/
│   └── power-system/          # 파워시스템 실사 이미지 (7장)
│
├── index.html                 # 홈
├── how-it-works.html          # RC카 작동 원리
├── parts-map.html             # 핵심 부품 맵
├── power-system.html          # 파워 시스템
├── tuning.html                # 셋업 & 튜닝
├── maintenance.html           # 유지보수
├── battery-safety.html        # 배터리 안전
├── traxxas-ecosystem.html     # Traxxas 생태계
├── traxxas-models.html        # Traxxas 모델 라인업
├── fms-models.html            # FMS 모델 라인업
├── selection-checklist.html   # RC카 선택 체크리스트
├── community.html             # 커뮤니티 용어
├── glossary.html              # 용어 사전
├── models.html                # 모델 DB
└── qa.html                    # Q&A / 검색
```

### 데이터 흐름
```
[사용자] ─→ [브라우저]
               ├─→ HTML 페이지 (15개)
               ├─→ css/style.css
               ├─→ js/app.js (UI 로직)
               ├─→ js/db-models.js → models.html (모델 DB)
               ├─→ js/db-glossary.js → glossary.html (용어 사전)
               ├─→ js/search.js → qa.html (Q&A)
               └─→ /api/chat ─→ [Flask server.py]
                                    └─→ GitHub Models API (GPT-4o-mini)
```

### 사이드바 네비게이션 구조
```
🏠 홈
📚 기초 학습
   ├── RC카 작동 원리
   ├── 핵심 부품 맵
   └── 파워 시스템
🔧 세팅 & 관리
   ├── 셋업 & 튜닝
   └── 유지보수
🔴 Traxxas
   ├── Traxxas 생태계
   └── Traxxas 모델
🟢 FMS
   └── FMS 모델
🛒 구매 & 커뮤니티
   ├── RC카 선택 체크리스트
   └── 커뮤니티 용어
⚡ 안전
   └── 배터리 안전
📊 데이터베이스
   ├── 용어 사전
   └── 모델 DB
🔍 Q&A / 검색
```
