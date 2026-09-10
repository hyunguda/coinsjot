export type InsightArticle = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
};

export const insights: InsightArticle[] = [
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
