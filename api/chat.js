// =============================================================================
// X-Maxx RC Car Blog — AI Chat Serverless Function (Vercel)
// GitHub Models API 프록시 (GPT-4o-mini, SSE streaming)
// =============================================================================

const SYSTEM_PROMPT = `당신은 RC카 전문 AI 어시스턴트입니다.
Traxxas를 포함한 모든 RC카 브랜드(Arrma, Losi, Axial, Tamiya, HPI, Yikong, WLtoys, HSP 등)에 대해 폭넓은 지식을 가지고 있습니다.
초보자도 이해할 수 있도록 친절하게 한국어로 답변합니다.

## 이 블로그 구조 (X-Maxx RC Car Blog)
- RC카 작동 원리 (how-it-works.html): 조종기→수신기→ESC→모터 신호 흐름
- 핵심 부품 맵 (parts-map.html): 전자/구동/섀시 구역별 부품 설명
- 파워 시스템 (power-system.html): 배터리, ESC, 모터 상세
- 셋업 & 튜닝 (tuning.html): 기어비, 서스펜션, 캠버, 타이어
- 유지보수 (maintenance.html): 점검, 세척, 윤활, 정기 교체
- Traxxas 모델 (traxxas-models.html): 5개 카테고리, 76개 모델
- 모델 DB (models.html): 전체 모델 스펙 검색/필터/비교

## Traxxas 주요 모델
- X-Maxx 8S: 1/5, 8S LiPo, 80+ km/h, Self-Righting, $1,199
- XRT 8S: 1/5, 8S, 100+ km/h, $1,099
- Sledge: 1/8, 6S, 벨트드라이브, $799
- Slash 4X4 VXL: 1/10, 베스트셀러, $399
- TRX-4 Defender: 1/10, 포탈 액슬 크롤러, $549
- TRX-4M: 1/18, 미니 크롤러, $179~$199

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

## 답변 규칙
1. 한국어로 답변하세요.
2. 어떤 RC카 브랜드나 모델에 대한 질문이든 성실히 답변하세요.
3. Traxxas 관련 질문이면 블로그 페이지를 안내하세요.
4. 답변은 간결하고 구조적으로 작성하세요. 마크다운 포맷(볼드, 리스트) 활용.
5. 가격 정보는 변동될 수 있음을 안내하세요.
6. RC카와 무관한 질문에도 가능한 범위에서 답변하되, RC카 관련 질문을 유도하세요.`;

const API_URL = "https://models.inference.ai.azure.com/chat/completions";
const MODEL = "gpt-4o-mini";

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  if (!GITHUB_TOKEN) {
    return res.status(500).json({ error: 'GITHUB_TOKEN 환경변수가 설정되지 않았습니다.' });
  }

  const { message, history } = req.body || {};
  if (!message || !message.trim()) {
    return res.status(400).json({ error: '메시지를 입력하세요.' });
  }

  // Build messages
  const messages = [{ role: 'system', content: SYSTEM_PROMPT }];
  if (Array.isArray(history)) {
    for (const msg of history.slice(-10)) {
      messages.push({ role: msg.role || 'user', content: msg.content || '' });
    }
  }
  messages.push({ role: 'user', content: message });

  try {
    const apiResponse = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        stream: true,
        temperature: 0.7,
        max_tokens: 2000
      })
    });

    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      return res.status(apiResponse.status).json({
        error: `API 오류 (${apiResponse.status}): ${errorText}`
      });
    }

    // Stream SSE response
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('X-Accel-Buffering', 'no');

    const reader = apiResponse.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        if (trimmed.startsWith('data: ')) {
          const data = trimmed.slice(6);
          if (data === '[DONE]') {
            res.write('data: [DONE]\n\n');
          } else {
            res.write(`data: ${data}\n\n`);
          }
        }
      }
    }

    // Process remaining buffer
    if (buffer.trim()) {
      const trimmed = buffer.trim();
      if (trimmed.startsWith('data: ')) {
        res.write(`${trimmed}\n\n`);
      }
    }

    res.end();
  } catch (err) {
    if (!res.headersSent) {
      return res.status(500).json({ error: `서버 오류: ${err.message}` });
    }
    res.write(`data: ${JSON.stringify({ error: err.message })}\n\n`);
    res.end();
  }
}
