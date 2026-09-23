import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "코인과 주식 세금 차이 완벽 비교 — 세율·공제·이월공제까지 | 코인 인사이트",
  description:
    "코인과 주식은 같은 22% 세율이지만 세금 구조가 다릅니다. 국내 주식 소액주주는 양도세 면제, 해외주식은 3년 이월공제 가능, 코인은 이월공제 불가. 핵심 차이를 정리했습니다.",
  keywords:
    "코인 주식 세금 차이, 가상자산 주식 양도세 비교, 코인 22% 세율, 해외주식 이월공제, 코인 이월공제 불가",
  openGraph: {
    title: "코인과 주식 세금 차이 완벽 비교 — 세율·공제·이월공제까지",
    description:
      "코인과 주식은 같은 22% 세율이지만 이월공제·공제 계산·ISA 활용 여부에서 결정적으로 다릅니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/crypto-vs-stock-tax",
  },
};

const ARTICLE = {
  title: "코인과 주식 세금 차이 완벽 비교 — 세율·공제·이월공제까지",
  date: "2026-09-23",
  category: "세금",
};

export default function ArticleCryptoVsStockTax() {
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
          "주식이랑 코인이랑 세금이 똑같은가요?" — <strong>세율은 같아도 구조가 다릅니다.</strong>{" "}
          이월공제 가능 여부, 절세 계좌 활용, 손익통산 범위까지 결정적인 차이를 정리했습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        {/* 한눈에 비교 테이블 */}
        <section>
          <h2 className="text-2xl font-bold mb-4">한눈에 비교</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 w-1/3">항목</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">코인</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">국내 주식<br/><span className="font-normal text-gray-400">(소액주주)</span></th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">해외 주식</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 text-gray-600">세율</td>
                  <td className="px-4 py-3 text-center font-medium">22%</td>
                  <td className="px-4 py-3 text-center font-medium text-green-700">면제</td>
                  <td className="px-4 py-3 text-center font-medium">22%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">기본공제</td>
                  <td className="px-4 py-3 text-center">연 250만원</td>
                  <td className="px-4 py-3 text-center text-gray-400">해당 없음</td>
                  <td className="px-4 py-3 text-center">연 250만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">이월공제</td>
                  <td className="px-4 py-3 text-center font-medium text-red-600">불가</td>
                  <td className="px-4 py-3 text-center text-gray-400">해당 없음</td>
                  <td className="px-4 py-3 text-center font-medium text-blue-600">3년 가능</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">ISA 절세 계좌</td>
                  <td className="px-4 py-3 text-center font-medium text-red-600">불가</td>
                  <td className="px-4 py-3 text-center font-medium text-blue-600">가능</td>
                  <td className="px-4 py-3 text-center font-medium text-blue-600">가능</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">코인·주식 손익통산</td>
                  <td colSpan={3} className="px-4 py-3 text-center font-medium text-red-600">불가 — 각각 별도 계산</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">① 국내 주식 소액주주는 양도세 면제</h2>
          <p className="leading-relaxed mb-4">
            국내 상장주식을 보유한 소액주주(대주주 기준 미달)는 양도세가 <strong>완전히 면제</strong>됩니다.
            2024년 금융투자소득세(금투세) 폐지가 확정되면서 일반 투자자의 국내 주식 양도세 면세 구조가 유지됩니다.
          </p>
          <p className="leading-relaxed mb-4">
            반면 <strong>코인은 소액이든 소액이 아니든 모두 22% 세율이 적용</strong>됩니다.
            국내 주식처럼 소액주주 면세 혜택이 없기 때문에, 연간 수익이 250만원을 초과하면 무조건 세금이 발생합니다.
          </p>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-amber-50 px-5 py-3 border-b border-amber-200">
              <p className="font-bold text-amber-800">국내 주식 vs 코인 — 1,000만원 수익 비교</p>
            </div>
            <div className="px-5 py-4 text-sm text-gray-700 space-y-2">
              <p>국내 주식 소액주주: 양도세 <strong className="text-green-700">0원</strong> (면제)</p>
              <p>코인: 과세표준 (1,000만원 − 250만원) = 750만원 → 세금 <strong className="text-red-700">165만원</strong></p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">② 해외 주식은 3년 이월공제 가능, 코인은 불가</h2>
          <p className="leading-relaxed mb-4">
            해외 주식에서 손실이 발생한 경우, 그 손실을 <strong>최대 3년간 이월해서 다음 해 수익과 상계</strong>할 수 있습니다.
            예를 들어 올해 해외 주식에서 500만원 손실이 났다면, 내년 수익 500만원과 상계해 세금을 줄일 수 있습니다.
          </p>
          <p className="leading-relaxed mb-4">
            하지만 <strong>코인은 이월공제가 불가</strong>합니다. 올해 발생한 손실은 올해 안에 다른 코인 수익과 상계하지 않으면
            그대로 사라집니다. 12월 말이 지나면 공제받을 기회가 없어집니다.
          </p>
          <div className="rounded-xl border border-blue-100 overflow-hidden">
            <div className="bg-blue-50 px-5 py-3 border-b border-blue-200">
              <p className="font-bold text-blue-800">이월공제 차이 사례</p>
            </div>
            <div className="px-5 py-4 text-sm text-gray-700 space-y-3">
              <div>
                <p className="font-medium text-blue-700 mb-1">해외 주식 (이월 가능)</p>
                <p>2026년: 손실 500만원 → 이월 보관</p>
                <p>2027년: 수익 700만원 − 이월손실 500만원 = 과세표준 200만원 → 세금 0원 (공제 내)</p>
              </div>
              <div className="border-t border-gray-100 pt-3">
                <p className="font-medium text-red-700 mb-1">코인 (이월 불가)</p>
                <p>2026년: 손실 500만원 → 연내 상계 코인 없으면 소멸</p>
                <p>2027년: 수익 700만원 − 250만원 = 과세표준 450만원 → 세금 <strong>99만원</strong></p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">③ ISA 계좌 — 주식은 가능, 코인은 불가</h2>
          <p className="leading-relaxed mb-4">
            개인종합자산관리계좌(ISA)는 주식·ETF·펀드 등을 담으면 수익의 일부를 비과세 또는 저율과세로 처리할 수 있는 절세 계좌입니다.
            서민형 기준 연 400만원 비과세가 적용됩니다.
          </p>
          <p className="leading-relaxed">
            <strong>코인은 ISA 편입 대상이 아닙니다.</strong> 2027년 시행 예정인 가상자산 세제에 ISA 혜택이 포함되지 않아,
            코인 투자자는 이 절세 수단을 이용할 수 없습니다. 코인 수익에 대한 절세는 기본공제(250만원)와 손익통산, 연도 분산 실현 외에 선택지가 거의 없습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">④ 기본공제 250만원 — 코인과 해외 주식은 각각 별도 적용</h2>
          <p className="leading-relaxed mb-4">
            코인과 해외 주식 모두 연 250만원 기본공제가 있습니다. 그런데 이 공제는 <strong>서로 합산되지 않고 각각 별도로 적용</strong>됩니다.
          </p>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <p className="font-bold text-gray-800">공제 별도 적용 사례</p>
            </div>
            <div className="px-5 py-4 text-sm text-gray-700 space-y-1">
              <p>코인 수익: 300만원 → 250만원 공제 → 과세표준 50만원 → 세금 11만원</p>
              <p>해외 주식 수익: 300만원 → 250만원 공제 → 과세표준 50만원 → 세금 11만원</p>
              <p className="text-gray-500 mt-2 text-xs">
                코인과 해외 주식은 소득 분류가 달라 각각 250만원 공제를 받습니다. 하지만 두 수익을 합쳐 500만원 기준으로 공제하는 것은 불가합니다.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">⑤ 코인 손실로 주식 수익을 상계할 수 없다</h2>
          <p className="leading-relaxed mb-4">
            코인 손실과 주식 수익(또는 그 반대)을 합산해 세금을 줄이는 것은 <strong>불가능</strong>합니다.
            코인은 기타소득(가상자산 양도소득), 해외 주식은 금융소득(양도소득)으로 소득 분류가 달라 손익통산 범위에 포함되지 않습니다.
          </p>
          <div className="rounded-xl border border-red-100 overflow-hidden">
            <div className="bg-red-50 px-5 py-3 border-b border-red-200">
              <p className="font-bold text-red-800">손익통산 불가 사례</p>
            </div>
            <div className="px-5 py-4 text-sm text-gray-700 space-y-1">
              <p>코인 손실: -500만원</p>
              <p>해외 주식 수익: +800만원</p>
              <p className="text-red-700 font-medium mt-2">
                합산 불가 → 해외 주식 수익 800만원 − 250만원 = 550만원에 대해 세금 121만원 납부
              </p>
              <p className="text-gray-500 text-xs mt-1">코인 손실 500만원은 코인 수익과만 상계 가능</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">코인 투자자가 챙겨야 할 절세 포인트</h2>
          <p className="leading-relaxed mb-4">
            국내 주식처럼 면세 혜택이 없고, 해외 주식처럼 이월공제도 안 되는 코인 투자자가
            세금을 줄이려면 다음 방법을 활용해야 합니다.
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5">①</span>
              <span>
                <strong>연내 손익통산:</strong> 수익이 난 코인과 손실 코인을 같은 해에 함께 정리해
                세금을 줄입니다. 연말 이후에는 상계 기회가 없습니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5">②</span>
              <span>
                <strong>250만원 기본공제 분산:</strong> 12월 말과 1월 초로 수익 실현을 분산하면
                공제를 2년치(500만원) 활용할 수 있습니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5">③</span>
              <span>
                <strong>의제취득가액 특례:</strong> 2026년 12월 31일 시가를 취득가로 인정받아
                과세 대상 양도차익 자체를 줄일 수 있습니다.
              </span>
            </li>
          </ul>
        </section>

        {/* 면책 고지 */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-500 leading-relaxed">
          본 글은 일반적인 정보 제공을 목적으로 작성되었으며 세무 조언이 아닙니다.
          가상자산 양도소득세는 2027년 시행 예정이며, 세부 규정은 시행 전까지 변경될 수 있습니다.
          정확한 세금 처리는 세무 전문가에게 확인하시기 바랍니다.
        </div>
      </article>

      {/* 관련 계산기 CTA */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-blue-900 mb-1">관련 계산기</p>
        <p className="text-sm text-blue-700 mb-4">
          코인 수익과 손실을 통산해 실제 납부세액을 계산해보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/calculators/profit-loss-simulator"
            className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition text-center"
          >
            코인 손익통산 시뮬레이터 →
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
