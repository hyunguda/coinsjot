import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "코인 세금 계산 예시 5가지 — 소액 수익부터 손익통산·의제취득가액까지 상황별 정리 | 코인 인사이트",
  description:
    "코인 세금이 실제로 얼마나 나오는지 상황별 예시 5가지로 계산했습니다. 기본공제 이하 소액 수익, 수수료 반영, 여러 코인 손익통산, 의제취득가액 특례, 분할 매수 총평균법까지 단계별로 따라가 보세요.",
  keywords:
    "코인 세금 계산, 코인 세금 예시, 가상자산 세금 계산 방법, 코인 손익통산 계산, 의제취득가액 계산 예시, 코인 양도소득세 얼마",
  openGraph: {
    title: "코인 세금 계산 예시 5가지 — 소액 수익부터 손익통산·의제취득가액까지 상황별 정리",
    description:
      "코인 세금이 실제로 얼마나 나오는지 상황별 예시 5가지로 계산했습니다. 기본공제 이하 소액 수익, 수수료 반영, 여러 코인 손익통산, 의제취득가액 특례, 분할 매수 총평균법까지 단계별로 따라가 보세요.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/crypto-tax-calculation-examples",
  },
};

const ARTICLE = {
  title: "코인 세금 계산 예시 5가지 — 소액 수익부터 손익통산·의제취득가액까지 상황별 정리",
  date: "2026-10-01",
  category: "세금",
};

export default function ArticleCryptoTaxCalculationExamples() {
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
          세율 22%, 기본공제 250만원이라는 숫자는 알아도 실제로 내 세금이 얼마인지 감이 잘 오지
          않습니다. 자주 만나는 상황 5가지를 골라 처음부터 끝까지 직접 계산해봤습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">계산 공식부터 확인</h2>
          <p className="leading-relaxed mb-4">
            아래 예시는 모두 같은 공식으로 계산합니다. 모든 예시는 2027년 1월 1일 이후
            양도한 경우이며, 지방소득세를 포함한 세율 22%를 적용했습니다.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-2 text-sm">
            <p><strong>소득금액</strong> = 양도가액 − 필요경비(취득가액 + 수수료 등)</p>
            <p><strong>과세표준</strong> = 1년간 소득금액 합계 − 기본공제 250만원</p>
            <p><strong>예상 세액</strong> = 과세표준 × 22%</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">예시 1. 1년 순이익이 200만원인 경우</h2>
          <p className="leading-relaxed mb-4">
            2027년 한 해 동안 코인을 사고팔아 수수료까지 뺀 순이익이 200만원이었다고 가정합니다.
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
                  <td className="px-4 py-3">가상자산소득금액</td>
                  <td className="px-4 py-3 text-gray-500">1년 순이익</td>
                  <td className="px-4 py-3 text-right">200만원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">기본공제</td>
                  <td className="px-4 py-3 text-gray-500">연 250만원</td>
                  <td className="px-4 py-3 text-right">− 250만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">과세표준</td>
                  <td className="px-4 py-3 text-gray-500">0보다 작으면 0원</td>
                  <td className="px-4 py-3 text-right">0원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-semibold">예상 세액</td>
                  <td className="px-4 py-3 text-gray-500">0원 × 22%</td>
                  <td className="px-4 py-3 text-right font-semibold">0원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            1년 순이익이 기본공제 250만원 이하라면 납부할 세금이 없습니다. 다만 순이익은 1년 동안의 모든 거래를 합산한 금액이라는 점을 기억하세요.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">예시 2. 코인 하나를 사고판 경우 (수수료 포함)</h2>
          <p className="leading-relaxed mb-4">
            2027년에 코인을 1,000만원에 사서 같은 해 1,800만원에 팔았고, 매수·매도 수수료가 합계 4만원이었다고 가정합니다.
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
                  <td className="px-4 py-3 text-right">1,800만원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">필요경비</td>
                  <td className="px-4 py-3 text-gray-500">취득가액 1,000만원 + 수수료 4만원</td>
                  <td className="px-4 py-3 text-right">1,004만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">가상자산소득금액</td>
                  <td className="px-4 py-3 text-gray-500">1,800만원 − 1,004만원</td>
                  <td className="px-4 py-3 text-right">796만원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">과세표준</td>
                  <td className="px-4 py-3 text-gray-500">796만원 − 기본공제 250만원</td>
                  <td className="px-4 py-3 text-right">546만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">예상 세액</td>
                  <td className="px-4 py-3 text-gray-500">546만원 × 22%</td>
                  <td className="px-4 py-3 text-right font-semibold">120만 1,200원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            수수료 4만원을 필요경비에 넣으면 세액이 8,800원 줄어듭니다. 거래가 많을수록 수수료 합계도 커지므로 거래 내역을 잘 보관해 두는 것이 좋습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">예시 3. 여러 코인에서 이익과 손실이 함께 난 경우</h2>
          <p className="leading-relaxed mb-4">
            같은 해에 코인 A에서 1,500만원 이익, 코인 B에서 600만원 손실, 코인 C에서 100만원
            이익이 났다고 가정합니다. 가상자산 소득은 1년 단위로 모든 코인의 손익을 합산(손익통산)합니다.
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
                  <td className="px-4 py-3">코인별 손익 합계</td>
                  <td className="px-4 py-3 text-gray-500">1,500만원 − 600만원 + 100만원</td>
                  <td className="px-4 py-3 text-right">1,000만원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">과세표준</td>
                  <td className="px-4 py-3 text-gray-500">1,000만원 − 기본공제 250만원</td>
                  <td className="px-4 py-3 text-right">750만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">예상 세액</td>
                  <td className="px-4 py-3 text-gray-500">750만원 × 22%</td>
                  <td className="px-4 py-3 text-right font-semibold">165만원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            코인 B의 손실이 없었다면 소득금액은 1,600만원, 세액은 297만원이었을 것입니다.
            같은 해의 손실은 이익과 상계되지만, 다음 해로 넘길 수는 없습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">예시 4. 2026년 이전에 산 코인을 2027년에 판 경우</h2>
          <p className="leading-relaxed mb-4">
            2024년에 3,000만원에 산 코인의 2026년 12월 31일 시가가 5,000만원이었고, 2027년에
            6,000만원에 팔았다고 가정합니다(수수료는 생략). 2026년 12월 31일 이전부터 보유한
            코인은 실제 취득가액과 2026년 12월 31일 시가 중 큰 금액을 취득가액으로 봅니다(의제취득가액).
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
                  <td className="px-4 py-3">취득가액</td>
                  <td className="px-4 py-3 text-gray-500">MAX(실제 3,000만원, 연말 시가 5,000만원)</td>
                  <td className="px-4 py-3 text-right">5,000만원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">가상자산소득금액</td>
                  <td className="px-4 py-3 text-gray-500">6,000만원 − 5,000만원</td>
                  <td className="px-4 py-3 text-right">1,000만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">과세표준</td>
                  <td className="px-4 py-3 text-gray-500">1,000만원 − 기본공제 250만원</td>
                  <td className="px-4 py-3 text-right">750만원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-semibold">예상 세액</td>
                  <td className="px-4 py-3 text-gray-500">750만원 × 22%</td>
                  <td className="px-4 py-3 text-right font-semibold">165만원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="leading-relaxed mb-4">
            실제 취득가액 3,000만원으로 계산했다면 과세표준 2,750만원, 세액 605만원이 됩니다.
            반대로 2026년 12월 31일 시가가 2,000만원처럼 실제 취득가액보다 낮았다면,
            더 큰 금액인 실제 취득가액 3,000만원이 그대로 적용됩니다.
          </p>
          <p className="text-sm text-gray-500">
            어느 경우든 더 큰 금액이 적용되므로 불리해지지는 않습니다. 다만 실제 취득가액을
            적용받으려면 매수 기록이 필요하니 거래 내역을 보관해 두세요.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">예시 5. 같은 코인을 여러 번 나눠 산 경우</h2>
          <p className="leading-relaxed mb-4">
            2027년 3월에 비트코인 1개를 8,000만원, 6월에 1개를 1억 2,000만원에 산 뒤 9월에 1개를 1억 3,000만원에 팔았다고 가정합니다(그해 추가 매수는 없고 수수료는 생략). 가상자산의 취득가액은 총평균법으로 계산합니다.
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
                  <td className="px-4 py-3">1개당 평균 취득가액</td>
                  <td className="px-4 py-3 text-gray-500">(8,000만원 + 1억 2,000만원) ÷ 2개</td>
                  <td className="px-4 py-3 text-right">1억원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">가상자산소득금액</td>
                  <td className="px-4 py-3 text-gray-500">1억 3,000만원 − 1억원</td>
                  <td className="px-4 py-3 text-right">3,000만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">과세표준</td>
                  <td className="px-4 py-3 text-gray-500">3,000만원 − 기본공제 250만원</td>
                  <td className="px-4 py-3 text-right">2,750만원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-semibold">예상 세액</td>
                  <td className="px-4 py-3 text-gray-500">2,750만원 × 22%</td>
                  <td className="px-4 py-3 text-right font-semibold">605만원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            어떤 코인을 먼저 팔았는지 골라서 계산하는 것이 아니라, 매수 금액 전체의 평균 단가를 기준으로 계산합니다(소득세법 시행령 제159조의5).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5가지 예시 한눈에 비교</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">상황</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">핵심 포인트</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">예상 세액</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3">1. 순이익 200만원</td>
                  <td className="px-4 py-3 text-gray-500">기본공제 250만원 이하</td>
                  <td className="px-4 py-3 text-right">0원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">2. 코인 하나 매매</td>
                  <td className="px-4 py-3 text-gray-500">수수료는 필요경비</td>
                  <td className="px-4 py-3 text-right">120만 1,200원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">3. 여러 코인 손익</td>
                  <td className="px-4 py-3 text-gray-500">1년 단위 손익통산</td>
                  <td className="px-4 py-3 text-right">165만원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">4. 2026년 이전 보유분</td>
                  <td className="px-4 py-3 text-gray-500">의제취득가액 특례</td>
                  <td className="px-4 py-3 text-right">165만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">5. 분할 매수</td>
                  <td className="px-4 py-3 text-gray-500">총평균법 평균 단가</td>
                  <td className="px-4 py-3 text-right">605만원</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">관련 글 더 보기</h2>
          <div className="space-y-2 text-sm">
            {[
              { href: "/insights/crypto-tax-glossary", label: "코인 세금 용어 총정리" },
              { href: "/insights/crypto-basic-deduction", label: "250만원 기본공제 완벽 정리" },
              { href: "/insights/transaction-fee-deduction", label: "거래 수수료를 필요경비에 넣는 방법" },
              { href: "/insights/crypto-loss-carryforward", label: "손실 이월공제가 안 되는 이유와 연내 손익통산" },
              { href: "/insights/deemed-acquisition-price-special", label: "의제취득가액 특례 계산 방법" },
              { href: "/insights/coin-acquisition-cost-method", label: "취득가액 계산법: 총평균법이란?" },
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
              "1년 순이익이 250만원 이하면 납부할 세금 없음",
              "거래 수수료는 필요경비로 빼서 계산",
              "여러 코인의 이익과 손실은 같은 해 안에서 합산",
              "2026년 말 이전 보유분은 실제 취득가액과 연말 시가 중 큰 금액 적용",
              "나눠 산 코인은 총평균법으로 평균 단가 계산",
              "세율은 지방소득세 포함 22%",
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
          본 글의 예시는 이해를 돕기 위해 단순화한 계산이며 세무 조언이 아닙니다.
          실제 세액은 다른 거래 내역, 세법 개정 등에 따라 달라질 수 있으므로 실제 신고 시에는
          국세청 안내를 확인하거나 세무사와 상담하시기 바랍니다.
        </div>
      </article>

      {/* 관련 계산기 CTA */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-blue-900 mb-1">관련 계산기</p>
        <p className="text-sm text-blue-700 mb-4">
          내 거래 금액을 넣어 예상 세액을 바로 계산해보세요.
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
