import type { Metadata } from "next";
import { TradeChallenge } from "@/app/components/TradeChallenge";

export const metadata: Metadata = {
  title: "100회 거래 챌린지 | coinsjot",
  description:
    "코인 거래를 100회 누적 기록하며 승률·손익비·누적 수익을 추적하는 자기관리 도구. 데이터는 브라우저에만 저장됩니다.",
};

export default function TradChallengePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          100회 거래 챌린지
        </h1>
        <p className="text-gray-600 leading-relaxed max-w-2xl">
          거래를 100회 누적 기록하며 승률·손익비·누적 수익을 자동으로 추적합니다.
          꾸준한 기록이 실력 향상의 시작입니다. 입력한 데이터는 서버에 저장되지 않으며
          브라우저에만 보관됩니다.
        </p>
      </div>
      <TradeChallenge />
    </div>
  );
}
