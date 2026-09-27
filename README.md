# BYTE BACK 방어전 미통과 표본

BYTE BACK 방어전 자동 판정을 시험하려고 일부러 잘못 만든 **미통과용 표본**입니다. 1단계(뚫린 사이트 제출)만 통과하고, 2~12단계와 XDR 보너스 1~6은 통과하지 못하도록 만들었습니다.

- 배포 주소: https://byteback-sample-fail.vercel.app
- 저장소: https://github.com/ChoiTimo/byteback-sample-fail

## 일부러 넣은 잘못

- 정적 파일 `/data.json` 에 메모 본문이 그대로 들어 있습니다.
- `/api/notes` 가 로그인 없이 메모 목록을 돌려줍니다.
- 판정기가 기기 등록을 보지 않고, 요청에 실린 역할 값을 믿습니다.
- 탐지 규칙, 복원 경로, 설치 정보(manifest), 제출 묶음이 없습니다.
- XDR 판정이 정상 활동까지 모두 차단합니다.
