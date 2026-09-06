import { Metadata } from "next";
import { insights } from "@/lib/insights";
import InsightsList from "./InsightsList";

export const metadata: Metadata = {
  title: "코인 인사이트 | coinsjot",
  description:
    "가상자산 세금, 투자 전략, 업계 동향까지. 코인 투자자에게 필요한 정보를 정리합니다.",
  keywords: "가상자산 세금, 코인 투자, 양도소득세, 가상화폐 정보",
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

      <InsightsList articles={insights} />
    </div>
  );
}
