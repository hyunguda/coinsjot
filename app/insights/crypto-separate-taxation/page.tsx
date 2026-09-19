import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "코인 소득은 분리과세다 — 연봉과 합산되지 않는 이유 | 코인 인사이트",
  description:
    "가상자산 양도소득세는 22% 분리과세입니다. 근로소득·사업소득과 합산되지 않아 연봉이 높아도 누진세가 적용되지 않습니다. 분리과세의 의미와 실제 절세 효과를 정리했습니다.",
  keywords:
    "코인 분리과세, 가상자산 양도소득세 세율, 코인 세금 연봉 합산, 가상자산 22%, 코인 누진세",
  openGraph: {
    title: "코인 소득은 분리과세다 — 연봉과 합산되지 않는 이유",
    description:
      "가상자산 양도소득세는 22% 분리과세입니다. 근로소득·사업소득과 합산되지 않아 연봉이 높아도 누진세가 적용되지 않습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/crypto-separate-taxation",
  },
};

const ARTICLE = {
  title: "코인 소득은 분리과세다 — 연봉과 합산되지 않는 이유",
  date: "2026-09-19",
  category: "세금",
};

export default function ArticleCryptoSeparateTaxation() {
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
          "코인으로 많이 벌면 연봉에 더해져 세금 폭탄 맞는 거 아냐?" — 걱정할 필요 없습니다.
          가상자산 양도소득세는 다른 소득과 합산되지 않는 <strong>분리과세</strong>입니다.
          연봉이 1억이든 5억이든, 코인 세율은 동일하게 22%입니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">분리과세란 무엇인가</h2>
          <p className="leading-relaxed mb-4">
            한국의 소득세는 기본적으로 <strong>종합과세</strong> 방식입니다. 근로소득·사업소득·
            이자소득 등 여러 소득을 더해 총소득을 계산하고, 그 금액에 따라
            누진세율(6%~45%)을 적용합니다. 소득이 높을수록 세율도 높아집니다.
          </p>
          <p className="leading-relaxed">
            반면 <strong>분리과세</strong>는 특정 소득을 종합소득과 분리해 별도의 단일 세율로
            과세하는 방식입니다. 2027년부터 시행되는 <strong>가상자산 양도소득세는
            분리과세</strong>입니다. 다른 소득과 합산하지 않고, 코인 수익에만
            22%(지방세 포함)를 적용합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">직장인에게 실제로 어떤 의미인가</h2>
          <p className="leading-relaxed mb-6">
            연봉이 높은 직장인일수록 분리과세의 혜택이 뚜렷합니다.
            종합과세라면 높은 연봉에 코인 수익이 더해져 최고세율이 적용될 수 있지만,
            분리과세에서는 그런 일이 없습니다.
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                <p className="font-bold text-gray-800">예시 — 연봉 8,000만원 직장인, 코인 수익 3,000만원</p>
              </div>
              <div className="px-5 py-4 text-sm text-gray-700 space-y-3">
                <div>
                  <p className="font-semibold text-red-700 mb-1">종합과세라면 (가상의 상황)</p>
                  <p>총소득 약 1억 1,000만원 → 최고 세율 구간 진입</p>
                  <p>코인 수익 3,000만원에 적용 세율: 최대 35~38%</p>
                  <p className="font-semibold">코인 수익 세부담: 약 1,050만원+</p>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <p className="font-semibold text-blue-700 mb-1">실제 분리과세 적용</p>
                  <p>코인 수익 3,000만원은 연봉과 완전히 분리 계산</p>
                  <p>과세표준: 3,000 − 250(기본공제) = 2,750만원</p>
                  <p className="font-semibold">코인 수익 세부담: 2,750 × 22% = <span className="text-blue-700">605만원</span></p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-600 leading-relaxed bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            분리과세 덕분에 <strong>약 445만원 이상</strong> 세부담이 적습니다. 고소득자일수록
            분리과세의 효과는 더 커집니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">세율은 얼마인가</h2>
          <p className="leading-relaxed mb-4">
            가상자산 양도소득세의 세율 구조는 단순합니다.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <div className="text-sm text-blue-900 space-y-2">
              <p><span className="font-bold">기본세율:</span> 20%</p>
              <p><span className="font-bold">지방소득세:</span> 2% (기본세율의 10%)</p>
              <p><span className="font-bold">합계:</span> 22%</p>
              <div className="border-t border-blue-200 my-3"></div>
              <p><span className="font-bold">연간 기본공제:</span> 250만원 (수익에서 먼저 차감)</p>
              <p><span className="font-bold">과세표준:</span> (연간 손익통산 합계 − 250만원) × 22%</p>
            </div>
          </div>

          <p className="mt-4 leading-relaxed text-sm text-gray-600">
            수익이 아무리 커도 세율은 22%로 고정입니다. 1억을 벌었을 때 세금은
            (1억 − 250만원) × 22% = 약 2,145만원입니다. 소득이 늘어나도 세율이 오르지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">금융소득과는 어떻게 다른가</h2>
          <p className="leading-relaxed mb-4">
            이자·배당 소득(금융소득)은 연간 2,000만원까지는 분리과세(15.4%)지만,
            2,000만원을 초과하면 초과분이 종합소득에 합산되어 누진세가 적용됩니다.
          </p>
          <p className="leading-relaxed">
            반면 <strong>가상자산 양도소득세는 금액에 관계없이 분리과세</strong>입니다.
            코인 수익이 수억 원이어도 22% 단일세율만 적용됩니다.
            이 점에서 금융소득보다 코인 소득의 세금 구조가 고소득자에게 더 유리합니다.
          </p>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50 text-gray-700">
                  <th className="text-left px-4 py-3 font-semibold">소득 종류</th>
                  <th className="text-left px-4 py-3 font-semibold">과세 방식</th>
                  <th className="text-left px-4 py-3 font-semibold">세율</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3">근로소득 (연봉)</td>
                  <td className="px-4 py-3">종합과세</td>
                  <td className="px-4 py-3">6%~45% 누진</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">이자·배당 소득</td>
                  <td className="px-4 py-3">2,000만원 초과 시 종합과세</td>
                  <td className="px-4 py-3">15.4% → 초과분 누진</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-4 py-3 font-semibold text-blue-900">가상자산 양도소득</td>
                  <td className="px-4 py-3 font-semibold text-blue-900">분리과세 (금액 무관)</td>
                  <td className="px-4 py-3 font-semibold text-blue-900">22% 고정</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">분리과세가 불리한 경우도 있나</h2>
          <p className="leading-relaxed mb-4">
            대부분의 투자자에게 분리과세는 유리하거나 중립적입니다. 다만 이런 상황은 주의하세요.
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex gap-2">
              <span className="font-bold flex-shrink-0 text-gray-500">▸</span>
              <span>
                <strong>소득이 매우 낮은 경우:</strong> 종합소득세 세율이 6%인 저소득 구간에서는
                분리과세 22%가 오히려 불리할 수 있습니다. 하지만 250만원 기본공제를 감안하면
                실제로 불리해지는 상황은 드뭅니다.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold flex-shrink-0 text-gray-500">▸</span>
              <span>
                <strong>손실이 다른 소득과 상계 불가:</strong> 분리과세이기 때문에
                코인 손실을 근로소득이나 사업소득에서 빼줄 수 없습니다.
                손실은 같은 해 다른 코인 수익과만 상계됩니다.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">신고는 어떻게 하나</h2>
          <p className="leading-relaxed mb-4">
            가상자산 양도소득세는 매년 <strong>5월 종합소득세 신고 기간</strong>에 함께
            신고합니다. 종합소득세 신고서 내에서 가상자산 소득을 별도 항목으로 기재하며,
            계산은 다른 소득과 분리해 이루어집니다.
          </p>
          <p className="leading-relaxed">
            국세청 홈택스에서 거래소별 거래 내역을 기반으로 직접 신고하거나,
            세무사를 통해 신고할 수 있습니다. 국내 거래소(업비트·빗썸 등)는
            거래 내역을 세무당국에 제출하므로, 신고 내용과 거래 내역이 일치해야 합니다.
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
          실제 코인 수익에 22% 세율을 적용해 예상 세액을 바로 계산해보세요.
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
