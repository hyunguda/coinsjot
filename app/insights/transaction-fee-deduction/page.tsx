import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "거래 수수료, 세금에서 빼도 될까? 취득가 포함 방법 정리 | 코인 인사이트",
  description:
    "코인 매수·매도 시 낸 거래 수수료는 취득가액에 포함시켜 세금을 줄일 수 있습니다. 포함 가능한 비용의 범위와 계산 방법을 정리했습니다.",
  keywords:
    "코인 거래 수수료 세금, 취득가액 수수료 포함, 가상자산 비용 공제, 코인 세금 절세, 거래 수수료 공제",
  openGraph: {
    title: "거래 수수료, 세금에서 빼도 될까? 취득가 포함 방법 정리",
    description:
      "코인 매수·매도 시 낸 거래 수수료는 취득가액에 포함시켜 세금을 줄일 수 있습니다. 포함 가능한 비용의 범위와 계산 방법을 정리했습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/transaction-fee-deduction",
  },
};

const ARTICLE = {
  title: "거래 수수료, 세금에서 빼도 될까? 취득가 포함 방법 정리",
  date: "2026-09-11",
  category: "세금",
};

export default function ArticleTransactionFeeDeduction() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 브레드크럼 */}
      <nav className="text-sm text-gray-400 mb-8">
        <Link href="/insights" className="hover:text-blue-600 transition">
          코인 인사이트
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{ARTICLE.category}</span>
      </nav>

      {/* 헤더 */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">
            {ARTICLE.category}
          </span>
          <span className="text-sm text-gray-400">{formatDate(ARTICLE.date)}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
          {ARTICLE.title}
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          코인 매수·매도 시 낸 거래 수수료는 취득가액에 포함시켜 세금을 줄일 수 있습니다.
          포함 가능한 비용의 범위와 계산 방법을 정리했습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">수수료도 비용으로 인정됩니다</h2>
          <p className="leading-relaxed mb-4">
            가상자산 양도소득세 계산 시 <strong>양도차익 = 매도금액 − 취득가액</strong>이 기본 공식입니다.
            여기서 취득가액은 단순히 코인을 산 가격만이 아닙니다.
          </p>
          <p className="leading-relaxed mb-4">
            소득세법상 가상자산의 취득가액에는 <strong>코인을 매수할 때 지출한 부대비용</strong>도
            포함할 수 있습니다. 거래소에서 매수·매도할 때 내는 거래 수수료가 여기에 해당합니다.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <p className="font-semibold text-green-900 mb-2">핵심 원칙</p>
            <p className="text-sm text-green-800 leading-relaxed">
              매수 수수료 → 취득가액에 더해짐 (취득가↑ = 차익↓ = 세금↓)<br />
              매도 수수료 → 양도비용으로 차감 가능 (매도금액↓ = 차익↓ = 세금↓)
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">실제 계산 예시</h2>
          <p className="leading-relaxed mb-4">
            수수료를 포함할 때와 포함하지 않을 때 세액 차이를 비교해봅니다.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm mb-4">
            <p className="font-semibold text-gray-700 mb-3">전제 조건</p>
            <ul className="space-y-1 text-gray-600">
              <li>· 매수금액: 1,000만원, 매수 수수료: 5,000원 (0.05%)</li>
              <li>· 매도금액: 2,000만원, 매도 수수료: 1만원 (0.05%)</li>
              <li>· 기본공제: 250만원 (이미 다른 수익으로 소진 가정)</li>
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5 text-sm">
              <p className="font-semibold text-red-700 mb-3">수수료 미포함</p>
              <ul className="space-y-1 text-red-600">
                <li>취득가액: 1,000만원</li>
                <li>양도차익: 2,000만원 − 1,000만원 = 1,000만원</li>
                <li>세액: 1,000만원 × 22% = <strong>220만원</strong></li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-sm">
              <p className="font-semibold text-green-700 mb-3">수수료 포함</p>
              <ul className="space-y-1 text-green-700">
                <li>취득가액: 1,000만원 + 5,000원 = 1,000만 5,000원</li>
                <li>매도금액: 2,000만원 − 1만원 = 1,999만원</li>
                <li>양도차익: 1,999만원 − 1,000만 5,000원 = 998만 5,000원</li>
                <li>세액: ≈ <strong>219만 6,700원</strong></li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            이 예시에서는 수수료율 0.05%로 절세 효과가 약 3,300원이지만, 수수료율이 높거나
            거래 규모가 클수록 차이가 커집니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">포함 가능한 비용의 범위</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">비용 항목</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">공제 가능 여부</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">처리 방식</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">거래소 매수 수수료</td>
                  <td className="px-4 py-3 text-green-600 font-semibold">가능</td>
                  <td className="px-4 py-3">취득가액에 가산</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">거래소 매도 수수료</td>
                  <td className="px-4 py-3 text-green-600 font-semibold">가능</td>
                  <td className="px-4 py-3">양도비용으로 차감</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">출금(인출) 수수료</td>
                  <td className="px-4 py-3 text-amber-600 font-semibold">해석 중</td>
                  <td className="px-4 py-3">세무사 확인 권장</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">가스비(온체인 수수료)</td>
                  <td className="px-4 py-3 text-amber-600 font-semibold">해석 중</td>
                  <td className="px-4 py-3">세무사 확인 권장</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">HTS·앱 이용료</td>
                  <td className="px-4 py-3 text-red-500 font-semibold">불가</td>
                  <td className="px-4 py-3">간접비용으로 공제 불인정</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">수수료를 놓치지 않으려면</h2>
          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "거래소 수수료 내역을 CSV로 보관해두세요",
                desc: "업비트, 빗썸 등 주요 거래소는 거래 내역 CSV 다운로드 기능을 제공합니다. 수수료 항목이 포함된 전체 내역을 정기적으로 내보내 보관하세요.",
              },
              {
                num: "02",
                title: "분할 매수라면 거래별로 누적 계산하세요",
                desc: "같은 코인을 여러 번에 나눠 샀다면, 각 매수 거래의 수수료를 합산해 총 취득가액에 포함시킵니다.",
              },
              {
                num: "03",
                title: "가스비·온체인 수수료는 별도 기록을 남기세요",
                desc: "DeFi나 지갑 간 이동 시 발생한 가스비는 세법 해석이 아직 진행 중이므로, 별도로 기록해두고 세무사와 상담 시 활용하세요.",
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-4">
                <span className="text-2xl font-bold text-blue-200 leading-none mt-0.5">
                  {item.num}
                </span>
                <div>
                  <p className="font-semibold mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 면책 고지 */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-500 leading-relaxed">
          본 글은 일반적인 정보 제공을 목적으로 작성되었으며 세무 조언이 아닙니다. 거래 수수료의
          공제 범위는 세법 해석에 따라 달라질 수 있으며, 실제 신고 전에 반드시 세무 전문가와
          상담하시기 바랍니다.
        </div>
      </article>

      {/* 관련 계산기 CTA */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-blue-900 mb-1">관련 계산기</p>
        <p className="text-sm text-blue-700 mb-4">
          수수료를 포함한 정확한 세액을 계산해보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/calculators/deemed-acquisition-price"
            className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition text-center"
          >
            가상화폐 세금 계산기 →
          </Link>
          <Link
            href="/calculators/profit-loss-simulator"
            className="inline-block bg-white border border-blue-300 text-blue-700 text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition text-center"
          >
            코인 포트폴리오 통합 계산기 →
          </Link>
        </div>
      </div>

      {/* 목록으로 */}
      <div className="mt-8">
        <Link
          href="/insights"
          className="text-sm text-gray-500 hover:text-blue-600 transition"
        >
          ← 코인 인사이트 목록으로
        </Link>
      </div>
    </div>
  );
}
