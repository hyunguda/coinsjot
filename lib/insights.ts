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
