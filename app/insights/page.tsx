import { Metadata } from "next";
import Link from "next/link";
import { insights, formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "코인 인사이트 | coinsjot",
  description:
    "가상자산 세금, 투자 전략, 업계 동향까지. 코인 투자자에게 필요한 정보를 정리합니다.",
  keywords: "가상자산 세금, 코인 투자, 양도소득세, 가상화폐 정보",
};

const CATEGORY_COLORS: Record<string, string> = {
  세금: "bg-blue-100 text-blue-700",
  투자전략: "bg-green-100 text-green-700",
  동향: "bg-purple-100 text-purple-700",
  이슈: "bg-orange-100 text-orange-700",
};

export default function InsightsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3">코인 인사이트</h1>
        <p className="text-gray-500 text-lg">
          가상자산 세금·투자 전략·업계 동향을 정리합니다.
        </p>
      </div>

      <div className="space-y-6">
        {insights.map((article) => (
          <Link
            key={article.slug}
            href={`/insights/${article.slug}`}
            className="block group"
          >
            <article className="border border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    CATEGORY_COLORS[article.category] ??
                    "bg-gray-100 text-gray-600"
                  }`}
                >
                  {article.category}
                </span>
                <span className="text-sm text-gray-400">
                  {formatDate(article.date)}
                </span>
                <span className="text-sm text-gray-400">
                  · 약 {article.readingTime}분 읽기
                </span>
              </div>
              <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                {article.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                {article.description}
              </p>
              <div className="mt-4 text-blue-600 text-sm font-medium group-hover:underline">
                읽어보기 →
              </div>
            </article>
          </Link>
        ))}
      </div>

      {insights.length === 0 && (
        <p className="text-center text-gray-400 py-20">
          곧 첫 글이 올라옵니다.
        </p>
      )}
    </div>
  );
}
