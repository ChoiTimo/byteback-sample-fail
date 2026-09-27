// 미통과 표본 판정기: 요청에 실린 역할 값을 믿고, 나머지는 모두 허용합니다(일부러 틀리게 만든 것).
export const RULE_IDS = Object.freeze(['allow_all']);

export function decide(request) {
  if (request.role === 'blocked') {
    return { schema: 'aleph.decision.v1', requestId: request.requestId, decision: 'deny', reasonCode: 'blocked_role', ruleIds: ['allow_all'] };
  }
  return { schema: 'aleph.decision.v1', requestId: request.requestId, decision: 'allow', reasonCode: 'allowed', ruleIds: ['allow_all'] };
}
