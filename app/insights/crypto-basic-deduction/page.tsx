import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "코인 소액 투자자도 세금 내야 할까? 250만원 기본공제 완벽 정리 | 코인 인사이트",
  description:
    "가상자산 양도소득세에는 연 250만원 기본공제가 적용됩니다. 연간 수익이 250만원 이하라면 세금은 0원입니다. 기본공제 계산 방법, 손익통산과의 순서, 주의사항을 정리했습니다.",
  keywords:
    "코인 세금 기본공제, 가상자산 250만원 공제, 코인 세금 면제, 소액 투자자 세금, 코인 양도소득세 공제",
  openGraph: {
    title: "코인 소액 투자자도 세금 내야 할까? 250만원 기본공제 완벽 정리",
    description:
      "연간 코인 수익이 250만원 이하라면 세금은 0원입니다. 250만원 기본공제의 계산 방법과 주의사항을 정리했습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/crypto-basic-deduction",
  },
};

const ARTICLE = {
  title: "코인 소액 투자자도 세금 내야 할까? 250만원 기본공제 완벽 정리",
  date: "2026-09-21",
  category: "세금",
};

export default function ArticleCryptoBasicDeduction() {
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
          "조금 벌었는데 저도 세금 내야 하나요?" — 연간 수익이 <strong>250만원 이하</strong>라면
          세금은 0원입니다. 가상자산 양도소득세에는 기본공제가 있기 때문입니다.
          기본공제의 정확한 작동 방식과 주의사항을 정리했습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">250만원 기본공제란</h2>
          <p className="leading-relaxed mb-4">
            2027년부터 시행되는 가상자산 양도소득세는 <strong>연간 순수익 250만원까지
            세금을 면제</strong>합니다. 이를 기본공제라고 합니다. 주식 양도소득세의
            기본공제(5,000만원)와 별개로, 가상자산에는 250만원이 적용됩니다.
          </p>
          <p className="leading-relaxed">
            기본공제는 자동 적용됩니다. 별도로 신청하거나 서류를 낼 필요 없이,
            세금 계산 시 수익에서 자동으로 차감됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">세금 계산 순서</h2>
          <p className="leading-relaxed mb-6">
            기본공제는 <strong>손익통산 이후</strong>에 적용됩니다.
            여러 코인 거래의 손익을 먼저 합산한 뒤, 그 합계에서 250만원을 빼는 방식입니다.
          </p>

          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <p className="font-bold text-gray-800">세금 계산 공식</p>
            </div>
            <div className="px-5 py-4 text-sm text-gray-700 space-y-2">
              <p>① 손익통산 = 모든 코인 수익의 합 − 모든 코인 손실의 합</p>
              <p>② 과세표준 = MAX(0, 손익통산 결과 − 250만원)</p>
              <p>③ 예상 세액 = 과세표준 × 22%</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">실제 사례로 보는 기본공제</h2>

          <div className="space-y-4">
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-green-50 px-5 py-3 border-b border-green-200">
                <p className="font-bold text-green-800">사례 1 — 수익 200만원: 세금 0원</p>
              </div>
              <div className="px-5 py-4 text-sm text-gray-700 space-y-1">
                <p>비트코인 수익: <strong>200만원</strong></p>
                <p>과세표준: MAX(0, 200만 − 250만) = <strong>0원</strong></p>
                <p className="text-green-700 font-medium mt-2">납부세액: 0원</p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-blue-50 px-5 py-3 border-b border-blue-200">
                <p className="font-bold text-blue-800">사례 2 — 수익 600만원: 세액 77만원</p>
              </div>
              <div className="px-5 py-4 text-sm text-gray-700 space-y-1">
                <p>비트코인 수익: <strong>600만원</strong></p>
                <p>과세표준: 600만 − 250만 = <strong>350만원</strong></p>
                <p className="text-blue-700 font-medium mt-2">납부세액: 350만 × 22% = 77만원</p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-purple-50 px-5 py-3 border-b border-purple-200">
                <p className="font-bold text-purple-800">사례 3 — 손익통산 후 기본공제</p>
              </div>
              <div className="px-5 py-4 text-sm text-gray-700 space-y-1">
                <p>비트코인 수익: +500만원</p>
                <p>이더리움 손실: −200만원</p>
                <p>손익통산 결과: <strong>+300만원</strong></p>
                <p>과세표준: 300만 − 250만 = <strong>50만원</strong></p>
                <p className="text-purple-700 font-medium mt-2">납부세액: 50만 × 22% = 11만원</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">기본공제는 1년에 1번만</h2>
          <p className="leading-relaxed mb-4">
            250만원 기본공제는 <strong>연간 1회</strong>만 적용됩니다.
            코인 거래를 여러 번 해도, 보유 종목이 10가지여도,
            그해 전체 수익 합계에서 딱 한 번 250만원을 빼는 구조입니다.
          </p>
          <p className="leading-relaxed">
            또한 가상자산 기본공제와 주식 양도소득 기본공제(5,000만원)는 별개입니다.
            주식 수익이 있어도 코인 기본공제 250만원은 별도로 적용됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">수익이 없어도 신고해야 하나</h2>
          <p className="leading-relaxed mb-4">
            연간 순수익이 250만원 이하라면 납부 세액이 0원이지만, 신고 의무는
            과세 관청이 구체적으로 정하는 기준에 따라 달라집니다.
            2027년 세부 시행령이 확정되면 소액 면제 신고 여부도 명확해질 예정입니다.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-gray-700 leading-relaxed">
            <strong>주의:</strong> 수익이 250만원 미만이라도 거래 내역은 반드시 보관하세요.
            국세청이 거래소에서 데이터를 수집할 때 소명 자료로 필요할 수 있습니다.
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">기본공제를 활용한 절세 전략</h2>
          <p className="leading-relaxed mb-4">
            기본공제 250만원을 최대한 활용하려면 <strong>연간 수익을 분산</strong>하는 방법이 있습니다.
            예를 들어 수익 실현을 12월 말과 1월 초로 나누면 각각 250만원씩, 합계 500만원까지
            기본공제를 받을 수 있습니다.
          </p>
          <p className="leading-relaxed">
            반대로 한 해에 수익을 모아서 실현하면 기본공제를 한 번밖에 쓰지 못합니다.
            수익 규모가 크지 않은 소액 투자자라면 연도를 나눠 실현하는 것이 유리할 수 있습니다.
          </p>
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
          내 코인 수익에서 기본공제 적용 후 실제 납부세액을 직접 계산해보세요.
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
