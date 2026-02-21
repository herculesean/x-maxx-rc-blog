# =============================================================================
# X-Maxx RC Car Blog — AI-Powered Server
# Flask 서버: 정적 파일 서빙 + GitHub Models API 프록시
# 실행: python server.py
# =============================================================================

from flask import Flask, request, Response, send_from_directory
from dotenv import load_dotenv
import os
import json
import requests as http_requests

load_dotenv()

app = Flask(__name__, static_folder='.', static_url_path='')

GITHUB_TOKEN = os.environ.get('GITHUB_TOKEN', '')
API_URL = "https://models.inference.ai.azure.com/chat/completions"
MODEL = "gpt-4o-mini"

# --- System Prompt: RC카 전문 AI 어시스턴트 ---
SYSTEM_PROMPT = """당신은 RC카 전문 AI 어시스턴트입니다.
Traxxas를 포함한 모든 RC카 브랜드(Arrma, Losi, Axial, Tamiya, HPI, Yikong, WLtoys, HSP 등)에 대해 폭넓은 지식을 가지고 있습니다.
초보자도 이해할 수 있도록 친절하게 한국어로 답변합니다.

## 이 블로그 구조 (X-Maxx RC Car Blog)
- RC카 작동 원리 (how-it-works.html): 조종기→수신기→ESC→모터 신호 흐름
- 핵심 부품 맵 (parts-map.html): 전자/구동/섀시 구역별 부품 설명
- 파워 시스템 (power-system.html): 배터리, ESC, 모터 상세
- 셋업 & 튜닝 (tuning.html): 기어비, 서스펜션, 캠버, 타이어
- 유지보수 (maintenance.html): 점검, 세척, 윤활, 정기 교체
- Traxxas 모델 (traxxas-models.html): 5개 카테고리, 77개 모델
- 모델 DB (models.html): 전체 모델 스펙 검색/필터/비교

## Traxxas 주요 모델
- X-Maxx 8S: 1/5, 8S LiPo, 80+ km/h, Self-Righting, $1,049
- XRT 8S: 1/6, 8S, 100+ km/h, $999
- Sledge: 1/8, 6S, 벨트드라이브, $799
- Slash 4X4 VXL: 1/10, 베스트셀러, $399
- TRX-4: 1/10, 포탈 액슬 크롤러, $549~$629
- TRX-4M: 1/18, 미니 크롤러, $159~$199

## RC카 핵심 지식
- 브러시드 vs 브러시리스, NiMH vs LiPo, 2WD vs 4WD
- RTR(Ready-To-Run), KIT, ARR 차이
- ESC, 서보, 수신기, 디퍼렌셜, 쇼크 등 부품 지식
- 스케일(1/5, 1/8, 1/10, 1/16, 1/18, 1/24, 1/28)
- 카테고리: 몬스터트럭, 숏코스, 버기, 트러기, 크롤러, 드리프트, 온로드 등

## 주요 RC카 브랜드 지식
- **Traxxas**: 미국, RTR 중심, X-Maxx/Slash/TRX-4 등, TQi 조종 시스템
- **Arrma**: 내구성 강한 배싱 차량, Kraton/Outcast/Felony 등
- **Losi**: 레이싱/배싱 겸용, Mini-T, DBXL-E 등
- **Axial**: 크롤러 전문, SCX10/RBX10/SCX24 등
- **Tamiya**: 일본, 키트 중심, 클래식 모델, 입문용 추천
- **HPI Racing**: Savage/Baja/RS4 등
- **Yikong**: 중국, YK4082 등 크롤러, 가성비 모델
- **WLtoys**: 중국, 저가 입문용, 12428/144001 등
- **Redcat Racing**: 가성비 배싱, Gen8 크롤러
- **Team Associated**: 레이싱 명가, RC10/B74 등

## 답변 규칙
1. 한국어로 답변하세요.
2. 어떤 RC카 브랜드나 모델에 대한 질문이든 성실히 답변하세요. 특정 브랜드만 답변 가능하다고 거부하지 마세요.
3. Traxxas 관련 질문이면 블로그 페이지를 안내하세요 (예: "자세한 내용은 '파워 시스템' 페이지를 참고하세요").
4. 다른 브랜드 질문에도 아는 범위에서 최대한 답변하세요. 정확하지 않으면 "확인이 필요합니다"라고 명시하세요.
5. 최신 모델에 대한 질문도 아는 범위에서 답변하고, 정확한 최신 정보는 공식 사이트 확인을 권유하세요. "답변할 수 없습니다"라고 거절하지 마세요.
6. 답변은 간결하고 구조적으로 작성하세요. 마크다운 포맷(볼드, 리스트) 활용.
7. 가격 정보는 변동될 수 있음을 안내하세요.
8. RC카와 무관한 질문에도 가능한 범위에서 답변하되, RC카 관련 질문을 유도하세요."""


@app.route('/')
def index():
    return send_from_directory('.', 'index.html')


@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('.', path)


@app.route('/api/chat', methods=['POST'])
def chat():
    if not GITHUB_TOKEN or GITHUB_TOKEN == 'your_github_token_here':
        return Response(
            json.dumps({"error": "GITHUB_TOKEN이 설정되지 않았습니다. .env 파일을 확인하세요."}),
            status=500,
            mimetype='application/json'
        )

    data = request.json
    user_message = data.get('message', '')
    history = data.get('history', [])

    if not user_message.strip():
        return Response(
            json.dumps({"error": "메시지를 입력하세요."}),
            status=400,
            mimetype='application/json'
        )

    # Build messages array
    messages = [{"role": "system", "content": SYSTEM_PROMPT}]

    # Add conversation history (last 10 messages for context)
    for msg in history[-10:]:
        messages.append({
            "role": msg.get("role", "user"),
            "content": msg.get("content", "")
        })

    # Add current message
    messages.append({"role": "user", "content": user_message})

    headers = {
        "Authorization": f"Bearer {GITHUB_TOKEN}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": MODEL,
        "messages": messages,
        "stream": True,
        "temperature": 0.7,
        "max_tokens": 2000
    }

    def generate():
        try:
            resp = http_requests.post(
                API_URL, headers=headers, json=payload, stream=True, timeout=60
            )

            if resp.status_code != 200:
                error_body = resp.text
                yield f"data: {json.dumps({'error': f'API 오류 ({resp.status_code}): {error_body}'})}\n\n"
                return

            for line in resp.iter_lines():
                if line:
                    decoded = line.decode('utf-8')
                    if decoded.startswith('data: '):
                        chunk_data = decoded[6:]
                        if chunk_data.strip() == '[DONE]':
                            yield "data: [DONE]\n\n"
                            break
                        yield f"data: {chunk_data}\n\n"
        except http_requests.exceptions.Timeout:
            yield f"data: {json.dumps({'error': 'API 요청 시간이 초과되었습니다.'})}\n\n"
        except Exception as e:
            yield f"data: {json.dumps({'error': str(e)})}\n\n"

    return Response(generate(), mimetype='text/event-stream',
                    headers={'Cache-Control': 'no-cache', 'X-Accel-Buffering': 'no'})


if __name__ == '__main__':
    if not GITHUB_TOKEN or GITHUB_TOKEN == 'your_github_token_here':
        print("=" * 60)
        print("  WARNING: GITHUB_TOKEN이 설정되지 않았습니다!")
        print("  .env 파일에 GitHub Personal Access Token을 입력하세요.")
        print("  https://github.com/settings/tokens 에서 생성 가능")
        print("=" * 60)
    else:
        print(f"  GitHub Models API 연결 준비 완료 (모델: {MODEL})")

    print(f"\n  서버 시작: http://localhost:8080\n")
    app.run(host='0.0.0.0', port=8080, debug=True)
