import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "의제취득가액 특례란? 계산 방법과 절세 전략 | 코인 인사이트",
  description:
    "2026년 12월 31일 시가를 취득가로 인정받는 의제취득가액 특례. 누가 혜택을 받고, 어떻게 계산하며, 어떤 증빙이 필요한지 사례 중심으로 정리했습니다.",
  keywords:
    "의제취득가액 특례, 코인 세금 절세, 가상자산 취득가액, 2026년 12월 31일 시가, 코인 양도소득세 계산",
  openGraph: {
    title: "의제취득가액 특례란? 계산 방법과 절세 전략",
    description:
      "2026년 12월 31일 시가를 취득가로 인정받는 의제취득가액 특례. 누가 혜택을 받고, 어떻게 계산하며, 어떤 증빙이 필요한지 사례 중심으로 정리했습니다.",
    type: "article",
  },
};

const ARTICLE = {
  title: "의제취득가액 특례란? 계산 방법과 절세 전략",
  date: "2026-09-07",
  category: "세금",
  readingTime: 6,
};

export default function ArticleDeemedAcquisitionPriceSpecial() {
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
          <span className="text-sm text-gray-400">· 약 {ARTICLE.readingTime}분 읽기</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
          {ARTICLE.title}
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          2026년 12월 31일 시가를 취득가로 인정받는 의제취득가액 특례. 누가 혜택을 받고,
          어떻게 계산하며, 어떤 증빙이 필요한지 사례 중심으로 정리했습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">왜 이 특례가 생겼나</h2>
          <p className="leading-relaxed mb-4">
            2027년 1월 1일부터 가상자산 양도소득세가 시행됩니다. 문제는 그 이전부터 코인을 보유해온
            투자자들입니다. 2018년, 2020년에 비트코인을 100만원에 샀다면 취득원가는 100만원이지만,
            세법 도입 전 몇 년간 오른 가격분까지 모두 과세 대상이 되는 것은 형평에 맞지 않는다는
            지적이 있었습니다.
          </p>
          <p className="leading-relaxed">
            이를 보완하기 위해 도입된 것이 <strong>의제취득가액 특례</strong>입니다.
            2026년 12월 31일 이전부터 보유한 가상자산에 한해, 실제 취득가와 2026년 12월 31일
            시가 중 높은 쪽을 취득가액으로 인정해 줍니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">의제취득가액이란?</h2>
          <p className="leading-relaxed mb-4">
            &quot;의제&quot;란 법률상 실제와 다르더라도 일정 사실을 인정하는 것입니다.
            의제취득가액은 말 그대로 <strong>&quot;실제 취득가가 아니어도 법적으로 취득가로 간주하는 금액&quot;</strong>입니다.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
            <p className="font-semibold text-blue-900 mb-3">핵심 공식</p>
            <div className="font-mono text-sm space-y-2 text-blue-800">
              <p>의제취득가액 = MAX(실제 취득가액, 2026년 12월 31일 시가)</p>
              <p className="border-t border-blue-200 pt-2 mt-2">양도차익 = 매도금액 − 의제취득가액</p>
              <p>과세표준 = MAX(0, 양도차익 − 250만원)</p>
              <p className="font-bold">납부세액 = 과세표준 × 22%</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            적용 대상: 2026년 12월 31일 24시 기준으로 보유 중인 가상자산.
            2027년 1월 1일 이후 신규 취득분에는 이 특례가 적용되지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">케이스별 계산 사례</h2>

          {/* 케이스 1 */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-green-100 text-green-700">케이스 1</span>
              <span className="font-semibold">시가 &gt; 실제 취득가 — 특례 적용이 유리</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              2020년에 BTC를 1,000만원에 매수. 2026년 12월 31일 시가는 8,000만원.
              이후 2028년에 1억원에 매도한 경우.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">구분</th>
                    <th className="text-right px-4 py-3 font-semibold text-red-600 border-b border-gray-200">특례 미적용</th>
                    <th className="text-right px-4 py-3 font-semibold text-green-600 border-b border-gray-200">특례 적용</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 text-gray-600">취득가액</td>
                    <td className="px-4 py-3 text-right">1,000만원</td>
                    <td className="px-4 py-3 text-right font-semibold text-green-700">8,000만원</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-gray-600">양도차익</td>
                    <td className="px-4 py-3 text-right">9,000만원</td>
                    <td className="px-4 py-3 text-right">2,000만원</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-600">기본공제</td>
                    <td className="px-4 py-3 text-right">−250만원</td>
                    <td className="px-4 py-3 text-right">−250만원</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-gray-600">과세표준</td>
                    <td className="px-4 py-3 text-right">8,750만원</td>
                    <td className="px-4 py-3 text-right">1,750만원</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">납부세액</td>
                    <td className="px-4 py-3 text-right font-bold text-red-600">약 1,925만원</td>
                    <td className="px-4 py-3 text-right font-bold text-green-600">약 385만원</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-sm font-semibold text-green-700">→ 특례 적용 시 약 1,540만원 절세</p>
          </div>

          {/* 케이스 2 */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-yellow-100 text-yellow-700">케이스 2</span>
              <span className="font-semibold">실제 취득가 &gt; 시가 — 특례 자동 배제</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              2025년 고점에 BTC를 1억원에 매수. 2026년 12월 31일 시가는 7,000만원인 경우.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 text-sm">
              <p className="text-yellow-800 leading-relaxed">
                MAX(1억원, 7,000만원) = <strong>1억원</strong> → 실제 취득가가 더 높으므로
                자동으로 실제 취득가 사용. 특례가 불리하게 작용하지 않습니다.
                이 경우 1억원을 취득가로 그대로 사용합니다.
              </p>
            </div>
          </div>

          {/* 케이스 3 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-700">케이스 3</span>
              <span className="font-semibold">취득가액을 모르는 경우</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              거래소 이전, 기록 분실 등으로 실제 취득가를 증명하지 못하는 경우에도
              2026년 12월 31일 시가를 의제취득가액으로 사용할 수 있습니다.
              이 경우 취득가 불명으로 인한 불이익을 피할 수 있습니다.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-600">
              단, 실제 취득가가 시가보다 훨씬 높았던 경우라면 취득가 증빙을 확보하는 편이 유리합니다.
              가능한 한 거래소 거래내역서·입금 내역 등을 보관해두세요.
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2026년 12월 31일 시가 증빙, 어떻게?</h2>
          <p className="leading-relaxed mb-4">
            의제취득가액 특례를 적용하려면 2026년 12월 31일 기준 시가를 증명해야 합니다.
            세무 당국이 인정하는 증빙 방법으로는 다음이 있습니다.
          </p>
          <div className="space-y-3">
            {[
              {
                title: "국내 거래소 공시 기준가",
                desc: "업비트·빗썸·코인원 등 국내 거래소에서 12월 31일 24시(자정) 기준 마지막 체결가 또는 일별 종가를 기준으로 합니다. 거래소별 기준가 고시를 확인하세요.",
              },
              {
                title: "해외 거래소 이용자",
                desc: "해외 거래소를 이용했거나 거래소 내 거래가 없는 경우, 코인마켓캡·코인게코 등 공신력 있는 데이터 집계 사이트의 당일 종가를 활용할 수 있습니다. 스크린샷과 URL을 함께 보관하세요.",
              },
              {
                title: "코인마켓캡 과거 데이터 활용",
                desc: "날짜가 지난 후에도 코인마켓캡의 Historical Data 탭에서 특정 날짜의 시가·종가·고가·저가를 확인할 수 있습니다.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 border border-gray-200 rounded-xl">
                <span className="text-blue-400 font-bold text-lg leading-none mt-0.5">✓</span>
                <div>
                  <p className="font-semibold mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
            <strong>팁:</strong> 12월 31일이 지나기 전에 보유 중인 종목의 시가 스크린샷을 찍어두는 것이
            가장 확실합니다. 날짜·시간·종목명·가격이 모두 보이게 캡처해두세요.
            코인 보유가격 기록기를 이용하면 종목별로 정리해 ZIP으로 내보낼 수 있습니다.
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">주의해야 할 점</h2>
          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "종목별로 각각 계산",
                desc: "BTC와 ETH를 각각 보유하고 있다면, 종목마다 별도로 MAX(실제 취득가, 시가)를 적용합니다. 전체 포트폴리오를 한꺼번에 묶어 계산하는 게 아닙니다.",
              },
              {
                num: "02",
                title: "매도 시점은 2027년 이후여야 적용",
                desc: "의제취득가액 특례는 2027년 1월 1일 이후 양도분에 대해 적용됩니다. 2026년 이전에 이미 매도한 경우에는 해당하지 않습니다.",
              },
              {
                num: "03",
                title: "손실이 나면 특례 적용이 불리할 수 있음",
                desc: "만약 2026년 12월 31일 시가로 취득가를 높이면, 나중에 손실이 발생했을 때 손실 규모가 줄어들어 손익통산 혜택이 작아질 수 있습니다. 매도 전 시뮬레이션을 해보세요.",
              },
              {
                num: "04",
                title: "분할 매수 코인의 취득가 계산",
                desc: "같은 코인을 여러 번에 걸쳐 매수했다면 평균 매수단가를 취득가로 사용합니다. 거래소 원장에 기록된 FIFO(선입선출) 방식이 기준이 될 수 있으니 거래 내역 전체를 보관하세요.",
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

        <section>
          <h2 className="text-2xl font-bold mb-4">지금 당장 해두어야 할 것</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">시기</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">할 일</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium whitespace-nowrap">지금 ~ 2026년 11월</td>
                  <td className="px-4 py-3">보유 중인 모든 거래소의 거래 내역 다운로드·보관</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">2026년 12월 31일</td>
                  <td className="px-4 py-3">보유 종목 전체 시가 스크린샷 또는 코인 보유가격 기록기로 기록</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium whitespace-nowrap">2027년 이후 매도 전</td>
                  <td className="px-4 py-3">의제취득가액 계산기로 특례 적용 시 세액 시뮬레이션</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">2028년 5월</td>
                  <td className="px-4 py-3">2027년 거래분 종합소득세 신고 (필요 시 세무사 상담)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 면책 고지 */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-500 leading-relaxed">
          본 글은 일반적인 정보 제공을 목적으로 작성되었으며 세무 조언이 아닙니다. 세법은 개정될 수 있으며
          개인 상황에 따라 적용 방식이 달라질 수 있습니다. 실제 신고 전에 반드시 세무 전문가와
          상담하시기 바랍니다.
        </div>
      </article>

      {/* 관련 계산기 CTA */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-blue-900 mb-1">관련 계산기로 직접 확인해보세요</p>
        <p className="text-sm text-blue-700 mb-4">
          실제 취득가와 2026년 12월 31일 시가를 입력하면 특례 적용 시 절세 효과를 바로 계산합니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/calculators/deemed-acquisition-price"
            className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition text-center"
          >
            의제취득가액 비교 계산기 →
          </Link>
          <Link
            href="/calculators/year-end-price"
            className="inline-block bg-white border border-blue-300 text-blue-700 text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition text-center"
          >
            코인 보유가격 기록기 →
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
