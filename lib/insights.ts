export type InsightArticle = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
};

export const insights: InsightArticle[] = [
  {
    slug: "crypto-mining-tax",
    title: "코인 채굴(마이닝) 수익, 세금은 어떻게 낼까?",
    description:
      "채굴로 받은 코인은 채굴 시점 시가가 취득가액이 됩니다. 이후 매도할 때 그 차익에 22% 양도소득세가 붙습니다. 취득가액 기록 방법, 채굴 비용 공제, 전업 채굴자 사업소득 여부까지 정리했습니다.",
    date: "2026-09-25",
    category: "세금",
  },
  {
    slug: "crypto-spouse-tax-split",
    title: "코인 부부 명의 분산 — 기본공제 500만원으로 두 배 활용하는 방법",
    description:
      "기본공제 250만원은 '1인당' 적용됩니다. 배우자와 코인을 나눠 보유하면 공제를 500만원까지 활용할 수 있습니다. 계산 사례, 증여세 주의사항, 실행 조건을 정리했습니다.",
    date: "2026-09-24",
    category: "세금",
  },
  {
    slug: "crypto-vs-stock-tax",
    title: "코인과 주식 세금 차이 완벽 비교 — 세율·공제·이월공제까지",
    description:
      "코인과 주식은 같은 22% 세율이지만 세금 구조가 다릅니다. 국내 주식 소액주주는 양도세 면제, 해외주식은 3년 이월공제 가능, 코인은 이월공제 불가. 핵심 차이를 정리했습니다.",
    date: "2026-09-23",
    category: "세금",
  },
  {
    slug: "crypto-unrealized-gains",
    title: "코인 보유만 해도 세금이 붙을까? 미실현 수익 과세 여부 완벽 정리",
    description:
      "코인을 팔지 않고 보유만 하면 세금이 없습니다. 가상자산 양도소득세는 '실현주의'를 따라 매도·교환 시에만 과세됩니다. 미실현 수익의 과세 여부와 코인↔코인 스왑 주의사항을 정리했습니다.",
    date: "2026-09-22",
    category: "세금",
  },
  {
    slug: "crypto-basic-deduction",
    title: "코인 소액 투자자도 세금 내야 할까? 250만원 기본공제 완벽 정리",
    description:
      "가상자산 양도소득세에는 연 250만원 기본공제가 적용됩니다. 연간 수익이 250만원 이하라면 세금은 0원입니다. 기본공제 계산 방법, 손익통산과의 순서, 주의사항을 정리했습니다.",
    date: "2026-09-21",
    category: "세금",
  },
  {
    slug: "crypto-swap-tax",
    title: "코인을 다른 코인으로 바꾸면 세금이 발생할까?",
    description:
      "비트코인을 이더리움으로 교환하는 것도 세금 신고 대상입니다. 2027년부터 코인↔코인 스왑은 양도로 간주해 과세됩니다. 과세 기준, 계산 방법, DEX 처리까지 정리했습니다.",
    date: "2026-09-20",
    category: "세금",
  },
  {
    slug: "crypto-separate-taxation",
    title: "코인 소득은 분리과세다 — 연봉과 합산되지 않는 이유",
    description:
      "가상자산 양도소득세는 22% 분리과세입니다. 근로소득·사업소득과 합산되지 않아 연봉이 높아도 누진세가 적용되지 않습니다. 분리과세의 의미와 실제 절세 효과를 정리했습니다.",
    date: "2026-09-19",
    category: "세금",
  },
  {
    slug: "crypto-loss-carryforward",
    title: "코인 손실은 내년으로 못 넘긴다 — 이월공제 불가, 연내 손익통산이 전부다",
    description:
      "가상자산 손실은 다음 해로 이월할 수 없습니다. 올해 발생한 손실은 올해 안에 다른 코인 수익과 상계해야만 세금을 줄일 수 있습니다. 이월공제 불가의 의미와 연말 전 실행 전략을 정리했습니다.",
    date: "2026-09-18",
    category: "세금",
  },
  {
    slug: "crypto-health-insurance",
    title: "코인 수익이 많으면 건강보험료도 오른다",
    description:
      "2027년 코인 양도소득세 시행 후 지역가입자는 코인 수익이 건강보험료 산정에 포함될 수 있습니다. 직장가입자·지역가입자별 차이와 예상 추가 보험료를 정리했습니다.",
    date: "2026-09-17",
    category: "세금",
  },
  {
    slug: "crypto-tax-penalty",
    title: "코인 세금 신고 안 하면? 가산세·불이익 완벽 정리",
    description:
      "2027년부터 코인 세금을 신고하지 않으면 무신고 가산세(20%)와 납부지연 가산세가 붙습니다. 국세청이 거래 내역을 파악하는 방법과 미신고 시 불이익을 정리했습니다.",
    date: "2026-09-16",
    category: "세금신고",
  },
  {
    slug: "coin-acquisition-cost-method",
    title: "코인 취득가액 계산법: 이동평균법이란?",
    description:
      "같은 코인을 여러 번 나눠 샀다면 취득가액을 어떻게 계산할까요? 한국 세법이 정한 이동평균법의 계산 방식과 실제 사례를 정리했습니다.",
    date: "2026-09-15",
    category: "세금",
  },
  {
    slug: "overseas-exchange-tax",
    title: "바이낸스·바이비트 해외 거래소 코인도 세금 신고해야 할까?",
    description:
      "국내 거래소와 달리 해외 거래소는 거래 내역을 세무당국에 보고하지 않습니다. 그래도 세금 신고 의무는 있습니다. 신고 방법과 주의사항을 정리했습니다.",
    date: "2026-09-14",
    category: "세금신고",
  },
  {
    slug: "crypto-tax-filing-2027",
    title: "2027년 코인 세금 신고 방법 완벽 정리",
    description:
      "2027년부터 시작되는 가상자산 양도소득세, 어떻게 신고해야 할까요? 신고 방법, 기한, 필요 서류, 종합소득세와의 차이까지 정리했습니다.",
    date: "2026-09-13",
    category: "세금신고",
  },
  {
    slug: "exchange-history-export",
    title: "업비트·빗썸 거래 내역 보관·추출 방법",
    description:
      "세금 신고를 위해 꼭 필요한 거래 내역, 언제 어떻게 내보내야 할까요? 업비트·빗썸 기준 CSV 추출 방법과 보관 요령을 정리했습니다.",
    date: "2026-09-12",
    category: "신고 준비",
  },
  {
    slug: "transaction-fee-deduction",
    title: "거래 수수료, 세금에서 빼도 될까? 취득가 포함 방법 정리",
    description:
      "코인 매수·매도 시 발생하는 거래 수수료는 취득가액에 포함할 수 있습니다. 수수료 처리 방법, 취득가 계산 사례, 절세 포인트까지 정리했습니다.",
    date: "2026-09-11",
    category: "세금",
  },
  {
    slug: "staking-airdrop-tax",
    title: "스테이킹·에어드롭 수익, 세금 내야 할까?",
    description:
      "스테이킹 보상과 에어드롭으로 받은 코인도 2027년부터 세금 대상입니다. 과세 시점, 취득가액 계산법, 절세 포인트까지 정리했습니다.",
    date: "2026-09-10",
    category: "세금",
  },
  {
    slug: "loss-harvesting-timing",
    title: "연말 전에 일부러 손절해야 하는 이유",
    description:
      "손익통산 구조를 이해하면 연말 손절이 합법적인 절세 전략임을 알 수 있습니다. 손실 실현 타이밍, 재매수 방법, 사례 계산까지 정리했습니다.",
    date: "2026-09-09",
    category: "세금",
  },
  {
    slug: "crypto-gift-tax-strategy",
    title: "코인 증여 절세, 언제 얼마나 효과적인가",
    description:
      "증여 후 매도하면 수증자의 취득가액이 시가로 리셋되어 양도세를 줄일 수 있습니다. 관계별 공제 한도·증여세율·직접 매도와의 비교까지 사례 중심으로 정리했습니다.",
    date: "2026-09-08",
    category: "세금",
  },
  {
    slug: "deemed-acquisition-price-special",
    title: "의제취득가액 특례란? 계산 방법과 절세 전략",
    description:
      "2026년 12월 31일 시가를 취득가로 인정받는 의제취득가액 특례. 누가 혜택을 받고, 어떻게 계산하며, 어떤 증빙이 필요한지 사례 중심으로 정리했습니다.",
    date: "2026-09-07",
    category: "세금",
  },
  {
    slug: "2027-capital-gains-tax",
    title: "2027년 가상자산 양도소득세 완벽 정리",
    description:
      "두 번의 연기 끝에 2027년 1월부터 시행되는 가상자산 양도소득세. 세율·기본공제·의제취득가액 특례까지 핵심만 정리했습니다.",
    date: "2026-09-06",
    category: "세금",
  },
];

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insights.find((a) => a.slug === slug);
}

export function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-");
  return `${year}년 ${parseInt(month)}월 ${parseInt(day)}일`;
}
