// 미통과 표본: 경보 내용과 관계없이 모두 차단합니다(정상 활동까지 막는 잘못된 판정).
export function decide(alert) {
  return { action: 'block', confidence: 1, reason: '모든 경보를 차단합니다.' };
}
