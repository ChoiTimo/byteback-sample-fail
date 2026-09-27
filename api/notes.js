// 미통과 표본: 로그인 확인 없이 누구에게나 메모 목록을 돌려줍니다(일부러 뚫어 둔 곳).
export default function handler(req, res) {
  res.setHeader('content-type', 'application/json; charset=utf-8');
  res.status(200).json({ notes: [
    { id: 1, title: '1주차 수업 메모', content: 'SAMPLE_NOTE_1 수업 준비물과 과제 마감일을 정리했습니다.' },
    { id: 2, title: '2주차 수업 메모', content: '배포 주소를 강사에게 제출하는 순서를 적었습니다.' }
  ] });
}
