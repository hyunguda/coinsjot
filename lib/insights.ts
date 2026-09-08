export type InsightArticle = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: number;
};

export const insights: InsightArticle[] = [
  {
    slug: "crypto-gift-tax-strategy",
    title: "코인 증여 절세, 언제 얼마나 효과적인가",
    description:
      "증여 후 매도하면 수증자의 취득가액이 시가로 리셋되어 양도세를 줄일 수 있습니다. 관계별 공제 한도·증여세율·직접 매도와의 비교까지 사례 중심으로 정리했습니다.",
    date: "2026-09-08",
    category: "세금",
    readingTime: 7,
  },
  {
    slug: "deemed-acquisition-price-special",
    title: "의제취득가액 특례란? 계산 방법과 절세 전략",
    description:
      "2026년 12월 31일 시가를 취득가로 인정받는 의제취득가액 특례. 누가 혜택을 받고, 어떻게 계산하며, 어떤 증빙이 필요한지 사례 중심으로 정리했습니다.",
    date: "2026-09-07",
    category: "세금",
    readingTime: 6,
  },
  {
    slug: "2027-capital-gains-tax",
    title: "2027년 가상자산 양도소득세 완벽 정리",
    description:
      "두 번의 연기 끝에 2027년 1월부터 시행되는 가상자산 양도소득세. 세율·기본공제·의제취득가액 특례까지 핵심만 정리했습니다.",
    date: "2026-09-06",
    category: "세금",
    readingTime: 5,
  },
];

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insights.find((a) => a.slug === slug);
}

export function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-");
  return `${year}년 ${parseInt(month)}월 ${parseInt(day)}일`;
}
