import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "코인은 오래 들고 있어도 세금 혜택 없다 — 장기보유와 세금의 관계 | 코인 인사이트",
  description:
    "부동산은 장기보유특별공제, 해외주식은 이월공제가 있지만 코인은 보유 기간이 아무리 길어도 세금 혜택이 없습니다. 소득세법 기준으로 명확히 정리했습니다.",
  keywords:
    "코인 장기보유 세금, 가상자산 장기보유특별공제, 코인 보유 기간 세금, 비트코인 장기투자 세금",
  openGraph: {
    title: "코인은 오래 들고 있어도 세금 혜택 없다 — 장기보유와 세금의 관계",
    description:
      "부동산은 장기보유특별공제, 해외주식은 이월공제가 있지만 코인은 보유 기간이 아무리 길어도 세금 혜택이 없습니다. 소득세법 기준으로 명확히 정리했습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/crypto-long-term-holding-tax",
  },
};

const ARTICLE = {
  title: "코인은 오래 들고 있어도 세금 혜택 없다 — 장기보유와 세금의 관계",
  date: "2026-09-28",
  category: "세금",
};

export default function ArticleCryptoLongTermHoldingTax() {
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
          "10년 들고 있으면 세금이 줄지 않을까?" — 줄지 않습니다.
          현행 소득세법은 가상자산에 보유 기간에 따른 세금 혜택을 두지 않습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">부동산·주식에는 있고, 코인에는 없는 것</h2>
          <p className="leading-relaxed mb-4">
            한국 세법은 자산 종류에 따라 장기보유에 대한 세금 혜택을 다르게 적용합니다.
            부동산은 보유 기간이 길수록 양도차익에서 최대 80%를 공제해주는
            <strong> 장기보유특별공제</strong>가 있습니다. 해외주식은 손실을 다음 해로 넘길 수 있는
            이월공제(3년)가 가능합니다.
          </p>
          <p className="leading-relaxed">
            그러나 <strong>가상자산(코인)에는 이런 혜택이 없습니다.</strong>
            소득세법은 가상자산 양도소득에 보유 기간에 따른 세율 차등이나 공제를
            별도로 규정하지 않습니다. 1개월 보유하든 10년 보유하든 과세 방식은 동일합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">자산별 장기보유 혜택 비교</h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">자산</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">장기보유 혜택</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">손실 이월</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">부동산</td>
                  <td className="px-4 py-3 text-green-700">장기보유특별공제 (최대 80%)</td>
                  <td className="px-4 py-3 text-gray-500">없음</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">해외주식</td>
                  <td className="px-4 py-3 text-gray-500">없음</td>
                  <td className="px-4 py-3 text-green-700">이월공제 (3년)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">국내주식 (소액주주)</td>
                  <td className="px-4 py-3 text-green-700">양도세 비과세</td>
                  <td className="px-4 py-3 text-gray-500">해당 없음</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">가상자산 (코인)</td>
                  <td className="px-4 py-3 font-semibold text-red-600">없음</td>
                  <td className="px-4 py-3 font-semibold text-red-600">없음</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            가상자산은 장기보유 혜택도, 손실 이월공제도 모두 없습니다.
            연간 250만원 기본공제만 적용됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">보유 기간과 무관하게 동일한 세금 계산</h2>
          <p className="leading-relaxed mb-4">
            비트코인을 1년 전에 샀든, 5년 전에 샀든 매도 시 세금 계산 방식은 같습니다.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-2 text-sm mb-4">
            <p><strong>양도차익</strong> = 매도금액 − 총평균 취득가액</p>
            <p><strong>과세표준</strong> = 양도차익 − 기본공제 250만원</p>
            <p><strong>세액</strong> = 과세표준 × 22%</p>
            <p className="pt-1 border-t border-gray-200 text-gray-500">
              보유 기간이 몇 년이든 위 공식에 변화가 없습니다.
            </p>
          </div>
          <p className="leading-relaxed">
            부동산처럼 "3년 이상 보유하면 공제율이 높아진다"거나, 미국처럼 "1년 이상 보유하면
            장기 자본이득세율(낮은 세율)이 적용된다"는 개념이 한국 코인 세법에는 존재하지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">그렇다면 코인 장기투자자의 절세 방법은?</h2>
          <p className="leading-relaxed mb-4">
            보유 기간으로는 세금을 줄일 수 없지만, 다음 방법으로 세 부담을 관리할 수 있습니다.
          </p>
          <div className="space-y-4">
            {[
              {
                title: "연간 250만원 기본공제 활용",
                desc: "매년 수익 250만원까지는 세금이 없습니다. 장기 보유 후 한 번에 매도하는 것보다 연도를 나눠 분할 매도하면 기본공제를 여러 해에 걸쳐 받을 수 있습니다.",
              },
              {
                title: "손익통산으로 세금 줄이기",
                desc: "같은 해에 수익 난 코인과 손실 난 코인을 함께 정리하면 손익을 합산해 과세표준을 낮출 수 있습니다. 연말 전 손절 타이밍을 활용하는 이유입니다.",
              },
              {
                title: "배우자 증여 후 매도",
                desc: "배우자에게 코인을 증여하면 수증자의 취득가액이 증여 시 시가로 리셋됩니다. 증여 후 매도하면 양도차익이 줄어들어 세금을 줄일 수 있습니다.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5">
                <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">정리: 핵심 체크리스트</h2>
          <div className="space-y-2">
            {[
              "코인은 보유 기간에 관계없이 동일한 세율(22%) 적용 — 장기보유 세율 우대 없음",
              "부동산의 장기보유특별공제, 해외주식의 이월공제 모두 코인에는 적용 안 됨",
              "코인 손실은 당해 연도 내 다른 코인 수익과만 상계 가능, 다음 해 이월 불가",
              "절세 수단은 연간 기본공제(250만원), 손익통산, 분할 매도, 배우자 증여 활용",
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
          분할 매도 시 연도별 예상 세액을 직접 계산해보세요.
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
