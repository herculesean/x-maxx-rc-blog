# Google Cloud Run 배포 가이드

## 사전 준비

1. **Google Cloud 계정 생성** (무료): https://cloud.google.com/
2. **gcloud CLI 설치**: https://cloud.google.com/sdk/docs/install
3. **GITHUB_TOKEN 준비** (.env에 있는 것)

## 배포 순서

### Step 1: gcloud 초기 설정 (최초 1회)
```bash
gcloud auth login
gcloud projects create xmaxx-rc-blog --name="X-Maxx RC Blog"
gcloud config set project xmaxx-rc-blog
gcloud services enable run.googleapis.com artifactregistry.googleapis.com cloudbuild.googleapis.com
```

### Step 2: 빌드 & 배포
```bash
cd "/Users/herculesean/Documents/phyton test/claude/X-Maxx"

gcloud run deploy xmaxx-rc-blog \
  --source . \
  --region asia-northeast3 \
  --allow-unauthenticated \
  --set-env-vars GITHUB_TOKEN=여기에_토큰_입력 \
  --memory 256Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 2
```

### Step 3: 완료
배포 성공 시 URL이 출력됩니다:
```
Service URL: https://xmaxx-rc-blog-xxxxx-du.a.run.app
```

## 업데이트 배포
모델 데이터를 수정한 후:
```bash
# 1. 빌드 스크립트로 HTML 재생성
python build.py

# 2. 재배포
gcloud run deploy xmaxx-rc-blog --source . --region asia-northeast3
```

## 비용
- **무료 티어**: 월 200만 요청, 360,000 vCPU-초, 180,000 GiB-초
- 개인 블로그 트래픽 수준에서는 **과금 $0** 예상
- `--min-instances 0`: 트래픽 없으면 자동 종료 → 비용 0

## 리전 옵션
| 리전 | 위치 | 지연시간 |
|------|------|---------|
| `asia-northeast3` | 서울 | 최저 (추천) |
| `asia-northeast1` | 도쿄 | 낮음 |
| `us-central1` | 아이오와 | 무료 티어 더 넉넉 |

## 환경 변수 업데이트
```bash
gcloud run services update xmaxx-rc-blog \
  --region asia-northeast3 \
  --set-env-vars GITHUB_TOKEN=새_토큰
```

## 삭제
```bash
gcloud run services delete xmaxx-rc-blog --region asia-northeast3
gcloud projects delete xmaxx-rc-blog
```
