import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "코인 부부 명의 분산 — 기본공제 500만원으로 두 배 활용하는 방법 | 코인 인사이트",
  description:
    "기본공제 250만원은 '1인당' 적용됩니다. 배우자와 코인을 나눠 보유하면 공제를 500만원까지 활용할 수 있습니다. 계산 사례, 증여세 주의사항, 실행 조건을 정리했습니다.",
  keywords:
    "코인 부부 명의 분산, 가상자산 부부 계좌 분산, 코인 기본공제 500만원, 배우자 코인 증여 절세, 가상자산 부부 절세",
  openGraph: {
    title: "코인 부부 명의 분산 — 기본공제 500만원으로 두 배 활용하는 방법",
    description:
      "배우자와 코인을 나눠 보유하면 각각 250만원 공제를 받아 세금을 크게 줄일 수 있습니다. 계산 방법과 증여세 주의사항을 정리했습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/crypto-spouse-tax-split",
  },
};

const ARTICLE = {
  title: "코인 부부 명의 분산 — 기본공제 500만원으로 두 배 활용하는 방법",
  date: "2026-09-24",
  category: "세금",
};

export default function ArticleCryptoSpouseTaxSplit() {
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
          가상자산 기본공제 250만원은 <strong>사람 1인당 적용</strong>됩니다.
          배우자도 코인을 보유·매도하면 각자 250만원씩, 합산 500만원까지 공제를 받을 수 있습니다.
          합법적 절세 방법이지만 실행 전 반드시 확인해야 할 조건이 있습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        {/* 한눈에 비교 */}
        <section>
          <h2 className="text-2xl font-bold mb-4">한눈에 비교 — 단독 vs 부부 분산</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">항목</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">단독 보유·매도</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">부부 분산 보유·매도</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 text-gray-600">기본공제</td>
                  <td className="px-4 py-3 text-center">250만원</td>
                  <td className="px-4 py-3 text-center font-medium text-blue-700">500만원 (각 250만원)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">수익 1,000만원 기준 세금</td>
                  <td className="px-4 py-3 text-center text-red-700 font-medium">165만원</td>
                  <td className="px-4 py-3 text-center text-green-700 font-medium">110만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">절세 효과</td>
                  <td className="px-4 py-3 text-center text-gray-400">—</td>
                  <td className="px-4 py-3 text-center font-medium text-blue-700">55만원 절감</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            * 수익을 균등 분배(각 500만원)한 경우 기준. 부부 합산 수익 1,000만원, 세율 22% 적용.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">① 기본공제는 '사람'당 적용된다</h2>
          <p className="leading-relaxed mb-4">
            2027년부터 시행되는 가상자산 양도소득세에는 연간 <strong>250만원 기본공제</strong>가 있습니다.
            이 공제는 세대 합산이 아니라 <strong>납세자 1인당 적용</strong>됩니다.
            즉, 부부가 각자의 계좌에서 각각 코인을 매도하면 두 사람 모두 250만원 공제를 받을 수 있습니다.
          </p>
          <p className="leading-relaxed">
            한 사람 명의로만 코인을 보유하고 매도하면 공제는 250만원에 그치지만,
            배우자 명의로도 코인을 보유해 함께 매도하면 공제 합산이 500만원으로 늘어납니다.
            수익이 같더라도 세금이 줄어드는 구조입니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">② 실제 절세 계산 — 수익 1,000만원 시나리오</h2>
          <p className="leading-relaxed mb-4">
            부부 합산으로 1,000만원 코인 수익이 발생하는 상황을 비교해봅니다.
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border border-red-100 overflow-hidden">
              <div className="bg-red-50 px-5 py-3 border-b border-red-200">
                <p className="font-bold text-red-800">단독 매도 (한 명이 1,000만원 전부 매도)</p>
              </div>
              <div className="px-5 py-4 text-sm text-gray-700 space-y-1">
                <p>수익: 1,000만원</p>
                <p>기본공제: − 250만원</p>
                <p>과세표준: 750만원</p>
                <p className="font-medium text-red-700">세금: 750만원 × 22% = <strong>165만원</strong></p>
              </div>
            </div>

            <div className="rounded-xl border border-green-100 overflow-hidden">
              <div className="bg-green-50 px-5 py-3 border-b border-green-200">
                <p className="font-bold text-green-800">부부 분산 매도 (각각 500만원씩 매도)</p>
              </div>
              <div className="px-5 py-4 text-sm text-gray-700 space-y-1">
                <p>본인: 수익 500만원 − 공제 250만원 = 과세표준 250만원 → 세금 55만원</p>
                <p>배우자: 수익 500만원 − 공제 250만원 = 과세표준 250만원 → 세금 55만원</p>
                <p className="font-medium text-green-700">합산 세금: <strong>110만원</strong> (55만원 절감)</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            수익 배분이 균등하지 않아도 효과가 있습니다. 본인 800만원 / 배우자 200만원으로 나눠도
            단독 매도 대비 공제를 더 많이 활용하는 구간이 생깁니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">③ 배우자에게 코인을 이전하는 방법 — 증여세 주의</h2>
          <p className="leading-relaxed mb-4">
            배우자 명의로 코인을 분산하려면 <strong>증여</strong>를 통해 이전해야 합니다.
            배우자 간 증여는 10년 합산 <strong>6억원까지 증여세 없이</strong> 가능합니다(증여재산공제).
            코인 시세 기준 6억원 이하라면 증여세 없이 배우자 명의로 넘길 수 있습니다.
          </p>
          <div className="rounded-xl border border-amber-100 overflow-hidden">
            <div className="bg-amber-50 px-5 py-3 border-b border-amber-200">
              <p className="font-bold text-amber-800">증여 후 매도 시 취득가액 주의</p>
            </div>
            <div className="px-5 py-4 text-sm text-gray-700 space-y-2">
              <p>
                배우자에게 코인을 증여하면 수증자(배우자)의 취득가액은 <strong>증여 시점 시가</strong>로 재설정됩니다.
                즉, 이전 취득가가 낮아도 증여 후 매도하면 증여 시점부터의 수익만 과세됩니다.
              </p>
              <p className="text-amber-700 font-medium">
                단, 증여일로부터 1년 이내 매도 시 이월과세 규정이 적용될 수 있습니다.
                증여 후 일정 기간 보유 후 매도하는 것이 안전합니다.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">④ 실행 전 확인해야 할 조건</h2>
          <ul className="space-y-4 text-sm text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5 shrink-0">①</span>
              <span>
                <strong>배우자 명의 거래소 계좌 필요:</strong> 배우자가 별도의 거래소 계좌(업비트·빗썸 등)를
                본인 명의로 개설하고, 해당 계좌에서 직접 매도해야 배우자의 소득으로 인정됩니다.
                한 계좌에서 대신 매도하는 것은 효과가 없습니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5 shrink-0">②</span>
              <span>
                <strong>실제 거래 내역 보관:</strong> 증여 사실과 매도 내역이 각각 분리돼야 합니다.
                거래소 거래 내역 CSV를 보관하고, 증여 시 시가 자료(거래소 종가)를 기록해두세요.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5 shrink-0">③</span>
              <span>
                <strong>배우자 소득 합산 여부:</strong> 가상자산 양도소득은 분리과세로 근로소득과 합산되지 않습니다.
                배우자가 직장인이더라도 연봉과 무관하게 250만원 공제를 각자 받을 수 있습니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5 shrink-0">④</span>
              <span>
                <strong>건강보험료 영향 고려:</strong> 배우자가 직장가입자의 피부양자라면 코인 수익이
                피부양자 자격에 영향을 줄 수 있습니다. 연간 금융소득 등 합산 기준(2,000만원 초과)을
                초과하지 않도록 주의해야 합니다.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">⑤ 분산 효과가 큰 경우 vs 작은 경우</h2>
          <p className="leading-relaxed mb-4">
            부부 분산 절세 효과는 수익 규모와 분배 방식에 따라 달라집니다.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">상황</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">절세 효과</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 text-gray-600">수익이 250만원 이하 (한 명 기준)</td>
                  <td className="px-4 py-3 text-center text-gray-400">없음 (이미 공제 내)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">수익 250~500만원 구간을 배우자에게 이전</td>
                  <td className="px-4 py-3 text-center font-medium text-blue-700">최대 55만원 절감</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">수익 1,000만원 균등 분배</td>
                  <td className="px-4 py-3 text-center font-medium text-blue-700">55만원 절감</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">수익 2,000만원 이상, 균등 분배</td>
                  <td className="px-4 py-3 text-center font-medium text-blue-700">55만원 절감 (공제 차이 고정)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            기본공제 차이로 인한 절세 한도는 250만원 × 22% = <strong>55만원</strong>입니다.
            수익 규모와 무관하게 분산 자체로 최대 절감할 수 있는 세금은 55만원입니다.
            단, 배우자가 기본공제를 초과하는 수익을 별도 실현할 경우 추가 절세는 가능합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">절세 포인트 요약</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5">①</span>
              <span>
                <strong>기본공제는 1인당:</strong> 부부가 각자 계좌에서 직접 매도하면 각각 250만원 공제.
                단독 매도 대비 최대 55만원 절감.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5">②</span>
              <span>
                <strong>배우자 간 증여세 한도:</strong> 10년 합산 6억원까지 증여세 없음.
                대부분의 코인 분산에 증여세가 발생하지 않음.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5">③</span>
              <span>
                <strong>증여 후 즉시 매도 주의:</strong> 증여일 기준 단기 매도 시 세무상 문제가 생길 수 있음.
                최소 수개월 이상 보유 후 매도 권장.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5">④</span>
              <span>
                <strong>피부양자 자격 확인:</strong> 배우자가 직장가입자 피부양자라면 소득 발생 시
                건강보험 피부양자 자격에 영향을 줄 수 있음. 규모에 따라 사전 확인 필요.
              </span>
            </li>
          </ul>
        </section>

        {/* 면책 고지 */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-500 leading-relaxed">
          본 글은 일반적인 정보 제공을 목적으로 작성되었으며 세무 조언이 아닙니다.
          가상자산 양도소득세는 2027년 시행 예정이며, 세부 규정은 시행 전까지 변경될 수 있습니다.
          개인 상황에 따라 절세 효과와 주의사항이 달라질 수 있으므로 세무 전문가에게 확인하시기 바랍니다.
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
            href="/calculators/gift-tax"
            className="inline-block bg-white border border-blue-300 text-blue-700 text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition text-center"
          >
            증여 절세 계산기 →
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
