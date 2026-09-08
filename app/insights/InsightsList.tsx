"use client";

import { useState } from "react";
import Link from "next/link";
import { InsightArticle, formatDate } from "@/lib/insights";

const CATEGORY_COLORS: Record<string, string> = {
  세금: "bg-blue-100 text-blue-700",
  투자전략: "bg-green-100 text-green-700",
  동향: "bg-purple-100 text-purple-700",
  이슈: "bg-orange-100 text-orange-700",
};

const PAGE_SIZE = 20;

export default function InsightsList({ articles }: { articles: InsightArticle[] }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(articles.length / PAGE_SIZE);
  const paginated = articles.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  if (articles.length === 0) {
    return (
      <p className="text-center text-gray-400 py-20">곧 첫 글이 올라옵니다.</p>
    );
  }

  return (
    <>
      {/* 테이블 헤더 */}
      <div className="hidden sm:grid grid-cols-[110px_68px_1fr] gap-4 px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide border-b border-gray-200">
        <span>날짜</span>
        <span>분류</span>
        <span>제목</span>
      </div>

      {/* 글 목록 */}
      <div className="divide-y divide-gray-100">
        {paginated.map((article) => (
          <Link
            key={article.slug}
            href={`/insights/${article.slug}`}
            className="group flex flex-col sm:grid sm:grid-cols-[110px_68px_1fr] gap-1 sm:gap-4 sm:items-center px-4 py-3.5 hover:bg-gray-50 transition-colors"
          >
            <span className="text-sm text-gray-400 order-2 sm:order-1">
              {formatDate(article.date)}
            </span>
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full w-fit order-1 sm:order-2 ${
                CATEGORY_COLORS[article.category] ?? "bg-gray-100 text-gray-600"
              }`}
            >
              {article.category}
            </span>
            <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors order-3">
              {article.title}
            </span>
          </Link>
        ))}
      </div>

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-10">
          <button
            onClick={() => { setPage((p) => Math.max(1, p - 1)); window.scrollTo(0, 0); }}
            disabled={page === 1}
            className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 disabled:opacity-30 hover:border-blue-400 transition"
          >
            이전
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => { setPage(p); window.scrollTo(0, 0); }}
              className={`w-8 h-8 text-sm rounded-lg transition ${
                p === page
                  ? "bg-blue-600 text-white"
                  : "border border-gray-200 hover:border-blue-400"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => { setPage((p) => Math.min(totalPages, p + 1)); window.scrollTo(0, 0); }}
            disabled={page === totalPages}
            className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 disabled:opacity-30 hover:border-blue-400 transition"
          >
            다음
          </button>
        </div>
      )}

      {/* 총 글 수 */}
      <p className="text-center text-xs text-gray-400 mt-4">
        총 {articles.length}개 · {page}/{totalPages || 1} 페이지
      </p>
    </>
  );
}
