import Link from "next/link";
import { InsightArticle, formatDate } from "@/lib/insights";

const CATEGORY_COLORS: Record<string, string> = {
  세금: "bg-blue-100 text-blue-700",
  투자전략: "bg-green-100 text-green-700",
  동향: "bg-purple-100 text-purple-700",
  이슈: "bg-orange-100 text-orange-700",
};

// 검색엔진이 모든 글 링크를 HTML에서 바로 발견할 수 있도록 전체 목록을 서버에서 렌더링합니다.
// (기존 클라이언트 페이지네이션은 버튼 방식이라 1페이지 이후 글 링크가 크롤러에 노출되지 않았음)
export default function InsightsList({ articles }: { articles: InsightArticle[] }) {
  if (articles.length === 0) {
    return (
      <p className="text-center text-gray-400 py-20">곧 첫 글이 올라옵니다.</p>
    );
  }

  return (
    <>
      {/* 테이블 헤더 */}
      <div className="hidden sm:grid grid-cols-[110px_1fr_68px] gap-4 px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide border-b border-gray-200">
        <span>날짜</span>
        <span>제목</span>
        <span className="text-right">분류</span>
      </div>

      {/* 글 목록 */}
      <div className="divide-y divide-gray-100">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/insights/${article.slug}`}
            className="group flex flex-col sm:grid sm:grid-cols-[110px_1fr_68px] gap-1 sm:gap-4 sm:items-center px-4 py-3.5 hover:bg-gray-50 transition-colors"
          >
            <span className="text-sm text-gray-400 order-2 sm:order-1">
              {formatDate(article.date)}
            </span>
            <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors order-3 sm:order-2">
              {article.title}
            </span>
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full w-fit order-1 sm:order-3 sm:ml-auto ${
                CATEGORY_COLORS[article.category] ?? "bg-gray-100 text-gray-600"
              }`}
            >
              {article.category}
            </span>
          </Link>
        ))}
      </div>

      {/* 총 글 수 */}
      <p className="text-center text-xs text-gray-400 mt-4">
        총 {articles.length}개
      </p>
    </>
  );
}
