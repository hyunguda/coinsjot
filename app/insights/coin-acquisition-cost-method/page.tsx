import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "코인 취득가액 계산법: 이동평균법이란? | 코인 인사이트",
  description:
    "같은 코인을 여러 번 나눠 샀다면 취득가액을 어떻게 계산할까요? 한국 세법이 정한 이동평균법의 계산 방식과 실제 사례를 정리했습니다.",
  keywords:
    "코인 취득가액 계산, 이동평균법, 가상자산 취득가액, 코인 세금 계산, 비트코인 취득원가",
  openGraph: {
    title: "코인 취득가액 계산법: 이동평균법이란?",
    description:
      "같은 코인을 여러 번 나눠 샀다면 취득가액을 어떻게 계산할까요? 한국 세법이 정한 이동평균법의 계산 방식과 실제 사례를 정리했습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/coin-acquisition-cost-method",
  },
};

const ARTICLE = {
  title: "코인 취득가액 계산법: 이동평균법이란?",
  date: "2026-09-15",
  category: "세금",
};

export default function ArticleCoinAcquisitionCostMethod() {
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
          같은 코인을 여러 번 나눠 샀다면 취득가액을 어떻게 계산할까요?
          한국 세법이 정한 이동평균법의 계산 방식과 실제 사례를 정리했습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">취득가액이 왜 중요한가?</h2>
          <p className="leading-relaxed mb-4">
            가상자산 양도소득세는 <strong>양도차익 = 매도금액 − 취득가액</strong> 을 기준으로 계산합니다.
            취득가액이 높을수록 양도차익이 줄어들고, 세금도 줄어듭니다.
          </p>
          <p className="leading-relaxed">
            그런데 같은 코인을 여러 번에 걸쳐 다른 가격에 매수했다면, 나중에 일부를 팔 때 어느 가격을
            취득가액으로 쓸지가 문제가 됩니다. 세법은 이 기준을 명확하게 정해두고 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">한국 세법의 기준: 이동평균법</h2>
          <p className="leading-relaxed mb-4">
            소득세법 시행령에 따르면 가상자산의 취득가액은 <strong>이동평균법(총평균법이 아닌 이동평균법)</strong>으로
            계산합니다. 이동평균법이란 코인을 새로 살 때마다 보유 수량과 총 취득금액을 다시 계산해
            평균 단가를 갱신하는 방식입니다.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="font-semibold text-blue-900 mb-2">이동평균 단가 공식</p>
            <p className="font-mono text-sm text-blue-800">
              이동평균 단가 = (기존 보유금액 + 신규 매수금액) ÷ (기존 수량 + 신규 수량)
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">실제 계산 사례</h2>
          <p className="leading-relaxed mb-4">
            비트코인을 세 번에 걸쳐 매수하고 일부를 매도한 경우를 예로 들겠습니다.
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">날짜</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">구분</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">수량 (BTC)</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">단가</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">이동평균 단가</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 text-gray-500">1월</td>
                  <td className="px-4 py-3">매수</td>
                  <td className="px-4 py-3 text-right">1 BTC</td>
                  <td className="px-4 py-3 text-right">5,000만원</td>
                  <td className="px-4 py-3 text-right font-medium">5,000만원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-500">3월</td>
                  <td className="px-4 py-3">매수</td>
                  <td className="px-4 py-3 text-right">1 BTC</td>
                  <td className="px-4 py-3 text-right">7,000만원</td>
                  <td className="px-4 py-3 text-right font-medium">6,000만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-500">6월</td>
                  <td className="px-4 py-3">매수</td>
                  <td className="px-4 py-3 text-right">1 BTC</td>
                  <td className="px-4 py-3 text-right">9,000만원</td>
                  <td className="px-4 py-3 text-right font-medium">7,000만원</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-4 py-3 text-gray-500">9월</td>
                  <td className="px-4 py-3 font-semibold text-blue-700">매도</td>
                  <td className="px-4 py-3 text-right">1 BTC</td>
                  <td className="px-4 py-3 text-right">1억원</td>
                  <td className="px-4 py-3 text-right font-medium text-blue-700">7,000만원 적용</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-2 text-sm">
            <p><strong>3월 매수 후 이동평균</strong>: (5,000만 + 7,000만) ÷ 2 = <strong>6,000만원</strong></p>
            <p><strong>6월 매수 후 이동평균</strong>: (6,000만×2 + 9,000만) ÷ 3 = <strong>7,000만원</strong></p>
            <p className="pt-1 border-t border-gray-200"><strong>9월 매도 시 양도차익</strong>: 1억 − 7,000만 = <strong>3,000만원</strong></p>
            <p><strong>기본공제(250만원) 후 과세표준</strong>: 2,750만원</p>
            <p><strong>예상 세액(22%)</strong>: 약 605만원</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">이동평균법 vs 선입선출법(FIFO), 차이는?</h2>
          <p className="leading-relaxed mb-4">
            주식에서는 투자자가 선입선출법(FIFO)이나 이동평균법 중 선택할 수 있지만,
            <strong> 가상자산은 이동평균법만 허용됩니다.</strong>
            선입선출법과의 차이를 위 사례로 비교하면 다음과 같습니다.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">구분</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">이동평균법 (법정)</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">선입선출법 (참고)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3">적용 취득가</td>
                  <td className="px-4 py-3 text-right">7,000만원 (평균)</td>
                  <td className="px-4 py-3 text-right">5,000만원 (1번째)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">양도차익</td>
                  <td className="px-4 py-3 text-right">3,000만원</td>
                  <td className="px-4 py-3 text-right font-semibold text-red-600">5,000만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">세금(22% 기준, 공제 후)</td>
                  <td className="px-4 py-3 text-right">약 605만원</td>
                  <td className="px-4 py-3 text-right font-semibold text-red-600">약 1,155만원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            선입선출법은 가장 저렴하게 산 코인이 먼저 팔리는 것으로 간주하기 때문에 양도차익이 더 크게 나옵니다.
            이동평균법이 세금 측면에서 유리한 경우가 많습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">여러 거래소에 걸쳐 산 경우</h2>
          <p className="leading-relaxed mb-4">
            업비트와 빗썸에서 동일한 코인을 각각 매수한 경우, 이동평균 계산은
            <strong> 거래소별로 별도로 관리하는 것이 아니라, 같은 종목이면 합산해서 계산</strong>해야 합니다.
          </p>
          <p className="leading-relaxed">
            예를 들어 업비트에서 1 BTC를 5,000만원에, 빗썸에서 1 BTC를 7,000만원에 샀다면
            이동평균 단가는 6,000만원이 됩니다. 어느 거래소에서 팔든 동일한 취득가를 적용합니다.
            거래 내역을 거래소 구분 없이 종목별로 통합 관리해야 하는 이유입니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">정리: 핵심 체크리스트</h2>
          <div className="space-y-2">
            {[
              "코인 취득가액은 이동평균법만 사용 — 선입선출법 불가",
              "새로 살 때마다 이동평균 단가를 다시 계산",
              "여러 거래소에서 산 같은 종목은 합산해서 평균 계산",
              "거래 내역(매수 일자·수량·금액)을 모두 보관해야 평균 계산 가능",
              "수수료는 취득가액에 포함 가능 → 평균 단가에 반영하면 세금 줄어듦",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-0">
                <span className="text-blue-500 mt-0.5 flex-shrink-0">✓</span>
                <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 면책 고지 */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-500 leading-relaxed">
          본 글은 일반적인 정보 제공을 목적으로 작성되었으며 세무 조언이 아닙니다.
          실제 세금 신고 시에는 개인 상황에 따라 계산이 달라질 수 있으므로 세무 전문가와 상담하시기 바랍니다.
        </div>
      </article>

      {/* 관련 계산기 CTA */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-blue-900 mb-1">관련 계산기</p>
        <p className="text-sm text-blue-700 mb-4">
          여러 코인의 손익을 합산해 기본공제 적용 후 실제 납부세액을 계산해보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/calculators/profit-loss-simulator"
            className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition text-center"
          >
            코인 포트폴리오 통합 계산기 →
          </Link>
          <Link
            href="/calculators/deemed-acquisition-price"
            className="inline-block bg-white border border-blue-300 text-blue-700 text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition text-center"
          >
            가상화폐 세금 계산기 →
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
