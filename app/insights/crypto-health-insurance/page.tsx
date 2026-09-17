import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "코인 수익이 많으면 건강보험료도 오른다 | 코인 인사이트",
  description:
    "2027년 코인 양도소득세 시행 후 지역가입자는 코인 수익이 건강보험료 산정에 포함될 수 있습니다. 직장가입자·지역가입자별 차이와 예상 추가 보험료를 정리했습니다.",
  keywords:
    "코인 건강보험료, 가상자산 건강보험, 지역가입자 코인 수익, 코인 보험료, 가상자산 소득 건보료",
  openGraph: {
    title: "코인 수익이 많으면 건강보험료도 오른다",
    description:
      "2027년 코인 양도소득세 시행 후 지역가입자는 코인 수익이 건강보험료 산정에 포함될 수 있습니다. 직장가입자·지역가입자별 차이와 예상 추가 보험료를 정리했습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/crypto-health-insurance",
  },
};

const ARTICLE = {
  title: "코인 수익이 많으면 건강보험료도 오른다",
  date: "2026-09-17",
  category: "세금",
};

export default function ArticleCryptoHealthInsurance() {
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
          코인 세금은 세금만으로 끝나지 않습니다. 수익 규모에 따라 건강보험료가 함께
          오를 수 있어, 실제 손에 남는 금액은 생각보다 더 줄어들 수 있습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">왜 건강보험료가 오르나</h2>
          <p className="leading-relaxed mb-4">
            건강보험료는 <strong>소득·재산·자동차</strong>를 기준으로 산정됩니다.
            2027년부터 가상자산 양도소득세가 시행되면, 코인 매도 수익이 과세 소득으로 공식
            잡힙니다. 건강보험 당국은 이 소득 자료를 국세청으로부터 받아 보험료 부과에
            활용합니다.
          </p>
          <p className="leading-relaxed">
            즉, <strong>코인 수익이 커질수록 건강보험료도 함께 올라갈 가능성이 있습니다.</strong>
            세금 22%를 냈다고 끝이 아니라, 보험료 인상분까지 감안해야 실제 세후 수익을
            정확히 계산할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">직장가입자 vs 지역가입자, 영향이 다르다</h2>
          <p className="leading-relaxed mb-6">
            어느 쪽에 해당하느냐에 따라 건강보험료 영향이 크게 달라집니다.
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                <p className="font-bold text-gray-800">직장가입자 (회사 다니는 직장인)</p>
              </div>
              <div className="px-5 py-4 text-sm space-y-3">
                <p className="text-gray-600 leading-relaxed">
                  평소 보험료는 <strong>급여 기준</strong>으로만 부과됩니다. 그러나 급여 외
                  다른 소득(사업소득·임대소득·금융소득·기타소득 등)의 합계가
                  <strong> 연 2,000만원을 초과</strong>하면, 초과분에 대해
                  <strong> 소득월액보험료</strong>가 추가로 부과됩니다.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <p className="text-yellow-800 font-semibold mb-1 text-xs uppercase tracking-wide">핵심 포인트</p>
                  <p className="text-yellow-900 text-sm">
                    가상자산 양도소득이 이 "보수 외 소득" 범위에 포함될 경우,
                    코인 수익이 2,000만원을 넘는 직장인도 추가 보험료 대상이 됩니다.
                    2027년 시행 세칙에서 구체적 포함 여부가 확정됩니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-blue-200 overflow-hidden">
              <div className="bg-blue-50 px-5 py-3 border-b border-blue-200">
                <p className="font-bold text-blue-800">지역가입자 (자영업자·프리랜서·은퇴자 등)</p>
              </div>
              <div className="px-5 py-4 text-sm space-y-3">
                <p className="text-gray-600 leading-relaxed">
                  소득·재산·자동차를 합산해 점수로 환산한 뒤 보험료를 산정합니다.
                  <strong> 별도 임계치 없이 소득 전부</strong>가 반영되므로, 코인 수익이
                  클수록 그만큼 보험료도 바로 오릅니다.
                </p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-red-800 font-semibold mb-1 text-xs uppercase tracking-wide">주의</p>
                  <p className="text-red-900 text-sm">
                    직장가입자보다 지역가입자가 훨씬 직접적으로 영향을 받습니다.
                    코인 수익이 생긴 해에는 다음 해 보험료 인상 통보를 받을 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">추가 보험료 얼마나 될까 — 지역가입자 예시</h2>
          <p className="leading-relaxed mb-4">
            건강보험료율은 매년 조정되지만, 2026년 기준 지역가입자 보험료율은 소득의
            약 <strong>7.09%</strong> 수준입니다(장기요양보험 별도). 아래 수치는 어림 참고용입니다.
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">코인 순수익</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">예상 세액 (22%)</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">추가 보험료 (약 7%)</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">합계 부담</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">500만원</td>
                  <td className="px-4 py-3 text-gray-600">약 55만원</td>
                  <td className="px-4 py-3 text-orange-600">약 25만원</td>
                  <td className="px-4 py-3 font-semibold text-red-600">약 80만원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">1,000만원</td>
                  <td className="px-4 py-3 text-gray-600">약 165만원</td>
                  <td className="px-4 py-3 text-orange-600">약 71만원</td>
                  <td className="px-4 py-3 font-semibold text-red-600">약 236만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">3,000만원</td>
                  <td className="px-4 py-3 text-gray-600">약 605만원</td>
                  <td className="px-4 py-3 text-orange-600">약 213만원</td>
                  <td className="px-4 py-3 font-semibold text-red-600">약 818만원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">5,000만원</td>
                  <td className="px-4 py-3 text-gray-600">약 1,045만원</td>
                  <td className="px-4 py-3 text-orange-600">약 355만원</td>
                  <td className="px-4 py-3 font-semibold text-red-600">약 1,400만원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※ 250만원 기본공제 적용 후 순수익 기준. 보험료는 상한선(월 최대 보험료)이 있으며,
            실제 금액은 당해 연도 고시 요율과 보험료 부과 방식에 따라 달라집니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">보험료 인상 통보 시점</h2>
          <p className="leading-relaxed mb-4">
            건강보험료는 <strong>전년도 소득</strong>을 기준으로 다음 해에 재산정됩니다.
            흐름을 정리하면 아래와 같습니다.
          </p>
          <div className="relative pl-6 border-l-2 border-blue-200 space-y-6">
            <div className="relative">
              <span className="absolute -left-[1.45rem] top-1 w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></span>
              <p className="font-semibold">2027년 중 코인 매도, 수익 발생</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[1.45rem] top-1 w-4 h-4 rounded-full bg-blue-400 border-2 border-white"></span>
              <p className="font-semibold">2028년 5월 양도소득세 신고·납부</p>
              <p className="text-sm text-gray-500 mt-1">국세청이 소득 자료를 건보공단에 통보</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[1.45rem] top-1 w-4 h-4 rounded-full bg-orange-400 border-2 border-white"></span>
              <p className="font-semibold">2028년 하반기 건강보험료 조정 통보</p>
              <p className="text-sm text-gray-500 mt-1">코인 수익이 소득에 반영되어 보험료 재산정</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-600 leading-relaxed">
            즉 코인을 팔고 당장 보험료가 오르는 게 아니라, <strong>약 1~1.5년 후</strong>에
            영향이 나타납니다. 갑자기 보험료 인상 고지서를 받지 않으려면 미리 예산을
            잡아두는 것이 좋습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">지금 체크해야 할 사항</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <ul className="space-y-3 text-sm text-blue-900">
              <li className="flex gap-2">
                <span className="font-bold flex-shrink-0">✓</span>
                <span>
                  <strong>내가 직장가입자인지 지역가입자인지 확인</strong> — 영향 크기가 다릅니다.
                  건강보험공단 앱(The건강보험)이나 고객센터(☎ 1577-1000)로 확인 가능합니다.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold flex-shrink-0">✓</span>
                <span>
                  <strong>코인 수익을 미리 시뮬레이션</strong> — 세금 22%에 보험료 약 7%를 더해
                  실질 세후 수익률을 계산해두면 매도 시점 판단에 도움이 됩니다.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold flex-shrink-0">✓</span>
                <span>
                  <strong>손익통산 활용</strong> — 다른 코인 손실과 상계해 과세 소득 자체를 줄이면
                  보험료 인상 폭도 함께 줄어듭니다.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold flex-shrink-0">✓</span>
                <span>
                  <strong>2027년 시행 세칙 확인</strong> — 가상자산 양도소득의 건보료 포함 여부와
                  계산 방식은 시행 규칙이 확정된 뒤 재확인해야 합니다.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* 면책 고지 */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-500 leading-relaxed">
          본 글은 일반적인 정보 제공을 목적으로 작성되었으며 세무·보험 조언이 아닙니다.
          건강보험료 산정 기준과 가상자산 소득 포함 범위는 2027년 시행 세칙 확정 전까지
          변경될 수 있습니다. 정확한 내용은 국민건강보험공단 및 세무 전문가에게 확인하시기 바랍니다.
        </div>
      </article>

      {/* 관련 계산기 CTA */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-blue-900 mb-1">관련 계산기</p>
        <p className="text-sm text-blue-700 mb-4">
          매도 전에 예상 세액을 계산하고 손익통산으로 과세 소득을 최소화해보세요.
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
