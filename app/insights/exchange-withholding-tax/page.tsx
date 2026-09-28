import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "거래소 원천징수란? 2027년부터 업비트·빗썸이 세금을 자동 공제한다 | 코인 인사이트",
  description:
    "2027년부터 국내 가상자산 거래소는 매도 수익의 22%를 자동으로 원천징수합니다. 원천징수 계산 방법, 기본공제 환급 절차, 해외 거래소와의 차이까지 정리했습니다.",
  keywords:
    "가상자산 원천징수, 코인 세금 자동공제, 업비트 세금, 빗썸 세금, 거래소 원천징수 2027",
  openGraph: {
    title: "거래소 원천징수란? 2027년부터 업비트·빗썸이 세금을 자동 공제한다",
    description:
      "2027년부터 국내 가상자산 거래소는 매도 수익의 22%를 자동으로 원천징수합니다. 원천징수 계산 방법, 기본공제 환급 절차, 해외 거래소와의 차이까지 정리했습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/exchange-withholding-tax",
  },
};

const ARTICLE = {
  title: "거래소 원천징수란? 2027년부터 업비트·빗썸이 세금을 자동 공제한다",
  date: "2026-09-28",
  category: "세금",
};

export default function ArticleExchangeWithholdingTax() {
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
          2027년부터 국내 가상자산 거래소는 코인 매도 수익에서 세금을 자동으로
          떼고 지급합니다. 어떻게 계산되는지, 기본공제는 어떻게 돌려받는지 정리했습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">원천징수란?</h2>
          <p className="leading-relaxed mb-4">
            원천징수란 소득을 지급하는 자(여기서는 거래소)가 지급 시점에 세금을 미리 떼어 국세청에
            납부하는 방식입니다. 직장인이 월급에서 소득세가 자동으로 빠지는 것과 같은 구조입니다.
          </p>
          <p className="leading-relaxed">
            2027년부터 소득세법 개정으로 국내 가상자산사업자(거래소)가 원천징수의무자로 지정됩니다.
            업비트·빗썸 등에서 코인을 매도하면 거래소가 수익에 대한 세금을 자동으로 공제한 뒤
            잔액을 지급하게 됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">원천징수율: 22%</h2>
          <p className="leading-relaxed mb-4">
            원천징수율은 <strong>소득세 20% + 지방소득세 2% = 합계 22%</strong>입니다.
            양도차익(매도금액 − 취득가액)에 22%를 곱한 금액이 자동 공제됩니다.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="font-semibold text-blue-900 mb-2">원천징수 계산 공식</p>
            <p className="font-mono text-sm text-blue-800 leading-relaxed">
              양도차익 = 매도금액 − 총평균 취득가액<br />
              원천징수액 = 양도차익 × 22%<br />
              실수령액 = 매도금액 − 원천징수액
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">실제 계산 예시</h2>
          <p className="leading-relaxed mb-4">
            비트코인을 2,000만원에 매도했고, 총평균 취득가가 1,500만원인 경우를 예로 들겠습니다.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-2 text-sm mb-6">
            <p><strong>매도금액</strong>: 2,000만원</p>
            <p><strong>총평균 취득가액</strong>: 1,500만원</p>
            <p><strong>양도차익</strong>: 500만원</p>
            <p className="pt-1 border-t border-gray-200"><strong>원천징수액(22%)</strong>: 110만원</p>
            <p><strong>실수령액</strong>: 2,000만 − 110만 = <strong>1,890만원</strong></p>
          </div>

          <p className="leading-relaxed text-sm text-gray-600">
            거래소는 매도 시점에 110만원을 원천징수해 국세청에 납부하고, 투자자에게는 1,890만원을 지급합니다.
            투자자가 별도로 세금을 계산하거나 납부할 필요가 없습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">기본공제 250만원은 어떻게 받나?</h2>
          <p className="leading-relaxed mb-4">
            거래소는 매도 건별로 원천징수하기 때문에 연간 기본공제(250만원)를 사전에 적용하지 않습니다.
            기본공제는 <strong>다음 해 5월 확정신고</strong>를 통해 돌려받습니다.
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">단계</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">내용</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">① 매도 시점</td>
                  <td className="px-4 py-3">거래소가 양도차익 × 22% 원천징수</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">② 연간 손익통산</td>
                  <td className="px-4 py-3">연중 매도한 모든 코인의 손익을 합산</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">③ 기본공제 적용</td>
                  <td className="px-4 py-3">연간 순이익 − 250만원 = 과세표준</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">④ 확정신고(5월)</td>
                  <td className="px-4 py-3">납부 세액 = 과세표준 × 22%, 원천징수액과 정산 후 환급 또는 추가납부</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-sm">
            <p className="font-semibold text-green-900 mb-2">앞의 예시로 계산하면</p>
            <p className="text-green-800 leading-relaxed">
              원천징수액 110만원 납부 → 확정신고 시 기본공제 250만원 적용 →
              과세표준 250만원 → 실제 세액 55만원 → <strong>55만원 환급</strong>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">여러 거래소에서 거래한 경우</h2>
          <p className="leading-relaxed mb-4">
            업비트에서 수익이 나고 빗썸에서 손실이 난 경우, 각 거래소는 자신이 처리한
            거래만 알고 있습니다. 거래소 간 손익통산은 원천징수 단계에서 자동으로
            이뤄지지 않습니다.
          </p>
          <p className="leading-relaxed">
            두 거래소 합산 기준으로 정확한 세금을 계산하려면 <strong>확정신고(5월)에서
            직접 손익을 통산</strong>해야 합니다. 이때 초과 납부한 세금은 환급받을 수 있습니다.
            여러 거래소를 이용한다면 반드시 확정신고를 챙겨야 하는 이유입니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">해외 거래소는 원천징수 없다</h2>
          <p className="leading-relaxed mb-4">
            바이낸스·바이비트 등 해외 거래소는 한국 세법의 원천징수의무자가 아닙니다.
            거래소가 세금을 자동으로 떼어주지 않으므로 <strong>투자자가 직접 신고하고 납부</strong>해야 합니다.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">구분</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">국내 거래소</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">해외 거래소</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3">원천징수</td>
                  <td className="px-4 py-3 text-right font-medium text-blue-700">자동 공제</td>
                  <td className="px-4 py-3 text-right font-medium text-red-600">없음</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">투자자 신고 의무</td>
                  <td className="px-4 py-3 text-right">확정신고로 정산</td>
                  <td className="px-4 py-3 text-right font-medium text-red-600">직접 신고·납부 필수</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">무신고 시 가산세</td>
                  <td className="px-4 py-3 text-right">해당 없음</td>
                  <td className="px-4 py-3 text-right font-medium text-red-600">무신고 가산세 20%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">정리: 핵심 체크리스트</h2>
          <div className="space-y-2">
            {[
              "2027년부터 국내 거래소가 매도 시 양도차익의 22%를 자동 원천징수",
              "기본공제(250만원)는 원천징수 단계에서 적용되지 않음 — 다음 해 5월 확정신고로 환급",
              "여러 거래소 이용 시 손익통산은 확정신고에서 직접 처리",
              "해외 거래소는 원천징수 없음 — 투자자가 직접 신고·납부 의무",
              "연간 수익이 250만원 이하라면 확정신고로 납부 세금 전액 환급 가능",
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
