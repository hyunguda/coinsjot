import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "코인 세금 용어 총정리 — 양도가액·취득가액·필요경비·과세표준 한 번에 이해하기 | 코인 인사이트",
  description:
    "코인 세금 계산에 나오는 용어를 계산 순서대로 정리했습니다. 양도가액, 취득가액, 필요경비, 소득금액, 기본공제, 과세표준, 세율까지 예시 계산과 함께 한 번에 이해할 수 있습니다.",
  keywords:
    "코인 세금 용어, 가상자산 세금 용어, 코인 양도가액, 코인 취득가액, 코인 필요경비, 코인 과세표준, 가상자산소득",
  openGraph: {
    title: "코인 세금 용어 총정리 — 양도가액·취득가액·필요경비·과세표준 한 번에 이해하기",
    description:
      "코인 세금 계산에 나오는 용어를 계산 순서대로 정리했습니다. 양도가액, 취득가액, 필요경비, 소득금액, 기본공제, 과세표준, 세율까지 예시 계산과 함께 한 번에 이해할 수 있습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/crypto-tax-glossary",
  },
};

const ARTICLE = {
  title: "코인 세금 용어 총정리 — 양도가액·취득가액·필요경비·과세표준 한 번에 이해하기",
  date: "2026-09-30",
  category: "세금",
};

const TERMS = [
  {
    term: "가상자산소득",
    def: "코인을 양도하거나 대여해서 생긴 소득입니다. 흔히 코인 양도세라고 부르지만, 세법상 분류는 기타소득(소득세법 제21조 제1항 제27호)입니다.",
  },
  {
    term: "양도가액",
    def: "코인을 처분하고 받은 대가입니다. 원화로 매도했다면 매도 금액이 곧 양도가액입니다.",
  },
  {
    term: "취득가액",
    def: "코인을 사는 데 들어간 금액입니다. 같은 코인을 여러 번 나눠 샀다면 총평균법으로 1개당 평균 단가를 계산합니다.",
  },
  {
    term: "의제취득가액",
    def: "2026년 12월 31일 이전부터 보유한 코인에 적용되는 특례입니다. 실제 취득가액과 2026년 12월 31일 시가 중 큰 금액을 취득가액으로 봅니다.",
  },
  {
    term: "필요경비",
    def: "양도가액에서 빼주는 비용입니다. 취득가액에 매수·매도 거래 수수료 같은 부대비용을 더한 금액입니다.",
  },
  {
    term: "가상자산소득금액",
    def: "양도가액에서 필요경비를 뺀 금액입니다. 1년 동안 여러 코인에서 난 이익과 손실을 합산(손익통산)해서 계산합니다.",
  },
  {
    term: "기본공제",
    def: "가상자산소득금액에서 연 250만원을 빼줍니다. 1년 순이익이 250만원 이하라면 낼 세금이 없습니다.",
  },
  {
    term: "과세표준",
    def: "세율을 곱하는 기준 금액입니다. 가상자산소득금액에서 기본공제 250만원을 뺀 금액입니다.",
  },
  {
    term: "세율",
    def: "소득세 20%에 지방소득세 2%를 더해 실질 22%입니다. 소득 규모와 상관없이 같은 세율이 적용됩니다.",
  },
  {
    term: "분리과세",
    def: "코인 소득은 근로소득·사업소득과 합산하지 않고 따로 세금을 계산합니다. 연봉이 높아도 코인 세율은 22% 그대로입니다.",
  },
  {
    term: "과세기간",
    def: "1월 1일부터 12월 31일까지 1년 단위로 계산합니다. 올해 손실을 다음 해로 넘기는 이월공제는 없습니다.",
  },
  {
    term: "신고·납부 기한",
    def: "과세기간 다음 해 5월 1일부터 5월 31일까지 신고하고 납부합니다.",
  },
];

export default function ArticleCryptoTaxGlossary() {
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
          코인 세금 글을 읽다 보면 양도가액, 필요경비, 과세표준 같은 낯선 단어가 계속 나옵니다.
          용어만 정확히 알아도 세금 계산이 훨씬 쉬워집니다. 계산 순서대로 하나씩 정리했습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">먼저 전체 흐름부터</h2>
          <p className="leading-relaxed mb-4">
            코인 세금은 아래 4단계로 계산됩니다. 이 글에 나오는 용어는 모두 이 흐름 안의
            한 칸을 가리킵니다. 흐름을 먼저 머릿속에 넣어두면 용어가 훨씬 쉽게 이해됩니다.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-2 text-sm">
            <p><strong>1단계</strong> 필요경비 = 취득가액 + 거래 수수료 등 부대비용</p>
            <p><strong>2단계</strong> 가상자산소득금액 = 양도가액 − 필요경비 (1년치 손익 합산)</p>
            <p><strong>3단계</strong> 과세표준 = 가상자산소득금액 − 기본공제 250만원</p>
            <p><strong>4단계</strong> 예상 세액 = 과세표준 × 22% (지방소득세 포함)</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">꼭 알아야 할 코인 세금 용어 12가지</h2>
          <div className="space-y-3">
            {TERMS.map((item, i) => (
              <div key={item.term} className="flex gap-4 border border-gray-200 rounded-xl p-5">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{item.term}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.def}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">헷갈리기 쉬운 용어 비교</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">비교</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">차이</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">취득가액 vs 필요경비</td>
                  <td className="px-4 py-3">취득가액은 코인 매수 금액만, 필요경비는 여기에 수수료 등 부대비용까지 더한 금액</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">소득금액 vs 과세표준</td>
                  <td className="px-4 py-3">소득금액은 기본공제 전, 과세표준은 기본공제 250만원을 뺀 후의 금액</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">실제 취득가액 vs 의제취득가액</td>
                  <td className="px-4 py-3">실제로 산 가격 vs 2026년 말 이전 보유분에 한해 연말 시가와 비교해 큰 금액을 인정</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">과세기간 vs 신고 기한</td>
                  <td className="px-4 py-3">과세기간은 소득을 모으는 1년(1월~12월), 신고 기한은 그다음 해 5월</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">예시로 한 번에 따라가 보기</h2>
          <p className="leading-relaxed mb-4">
            2027년에 코인을 2,000만원에 사서 같은 해에 3,000만원에 팔았고, 매수·매도 수수료가
            합계 10만원이었다고 가정해보겠습니다. 다른 코인 거래는 없었다고 가정합니다.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">항목</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">계산</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">금액</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3">양도가액</td>
                  <td className="px-4 py-3 text-gray-500">매도 금액</td>
                  <td className="px-4 py-3 text-right">3,000만원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">필요경비</td>
                  <td className="px-4 py-3 text-gray-500">취득가액 2,000만원 + 수수료 10만원</td>
                  <td className="px-4 py-3 text-right">2,010만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">가상자산소득금액</td>
                  <td className="px-4 py-3 text-gray-500">3,000만원 − 2,010만원</td>
                  <td className="px-4 py-3 text-right">990만원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">과세표준</td>
                  <td className="px-4 py-3 text-gray-500">990만원 − 기본공제 250만원</td>
                  <td className="px-4 py-3 text-right">740만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">예상 세액</td>
                  <td className="px-4 py-3 text-gray-500">740만원 × 22%</td>
                  <td className="px-4 py-3 text-right font-semibold">162만 8,000원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            수수료 10만원을 필요경비에 넣지 않았다면 세액은 2만 2,000원 더 늘어납니다.
            작은 금액이라도 수수료 기록을 챙겨야 하는 이유입니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">용어별로 더 알아보기</h2>
          <div className="space-y-2 text-sm">
            {[
              { href: "/insights/coin-acquisition-cost-method", label: "취득가액 계산법: 총평균법이란?" },
              { href: "/insights/deemed-acquisition-price-special", label: "의제취득가액 특례 계산 방법과 절세 전략" },
              { href: "/insights/transaction-fee-deduction", label: "거래 수수료를 필요경비에 넣는 방법" },
              { href: "/insights/crypto-basic-deduction", label: "250만원 기본공제 완벽 정리" },
              { href: "/insights/crypto-separate-taxation", label: "코인 소득이 분리과세인 이유" },
              { href: "/insights/crypto-loss-carryforward", label: "손실 이월공제가 안 되는 이유와 연내 손익통산" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 border-b border-gray-100 last:border-0 text-blue-700 hover:text-blue-900 transition"
              >
                {item.label} →
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">정리: 핵심 체크리스트</h2>
          <div className="space-y-2">
            {[
              "계산 순서: 필요경비 → 소득금액 → 과세표준 → 세액",
              "필요경비 = 취득가액 + 거래 수수료 등 부대비용",
              "여러 코인의 이익과 손실은 1년 단위로 합산(손익통산)",
              "기본공제 연 250만원을 뺀 금액이 과세표준",
              "세율은 지방소득세 포함 22%, 근로소득과 합산하지 않는 분리과세",
              "2026년 말 이전 보유분은 의제취득가액 특례 확인",
              "신고·납부는 다음 해 5월",
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
          세법은 개정될 수 있으므로 실제 신고 시에는 국세청 안내를 확인하거나
          세무사와 상담하시기 바랍니다.
        </div>
      </article>

      {/* 관련 계산기 CTA */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-blue-900 mb-1">관련 계산기</p>
        <p className="text-sm text-blue-700 mb-4">
          용어를 이해했다면 내 거래로 직접 예상 세액을 계산해보세요.
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
