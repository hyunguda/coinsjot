import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "코인도 상속세 낸다 — 상속받은 코인, 세금 처리 방법 완벽 정리 | 코인 인사이트",
  description:
    "가상자산도 상속 재산에 포함되어 상속세 신고 대상입니다. 상속 후 매도 시 양도소득세도 발생합니다. 두 세금의 관계, 취득가액 처리, 신고 기한을 정리했습니다.",
  keywords:
    "코인 상속세, 가상자산 상속, 비트코인 상속 세금, 코인 상속 취득가액, 상속 코인 양도세",
  openGraph: {
    title: "코인도 상속세 낸다 — 상속받은 코인, 세금 처리 방법 완벽 정리",
    description:
      "가상자산도 상속 재산에 포함되어 상속세 신고 대상입니다. 상속 후 매도 시 양도소득세도 발생합니다. 두 세금의 관계, 취득가액 처리, 신고 기한을 정리했습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/crypto-inheritance-tax",
  },
};

const ARTICLE = {
  title: "코인도 상속세 낸다 — 상속받은 코인, 세금 처리 방법 완벽 정리",
  date: "2026-09-29",
  category: "세금",
};

export default function ArticleCryptoInheritanceTax() {
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
          부모님이 남긴 코인을 물려받으면 세금은 어떻게 될까요? 상속세를 냈는데
          나중에 팔면 또 세금을 내야 할까요? 가상자산 상속의 세금 처리 방법을 정리했습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">코인도 상속 재산이다</h2>
          <p className="leading-relaxed mb-4">
            가상자산은 재산적 가치가 있는 자산으로, <strong>상속세 및 증여세법</strong>상
            상속 재산에 포함됩니다. 피상속인(돌아가신 분)이 보유하던 비트코인·이더리움 등
            모든 가상자산은 다른 금융 자산, 부동산과 함께 상속 재산으로 합산해 신고해야 합니다.
          </p>
          <p className="leading-relaxed">
            상속 재산을 신고하지 않으면 나중에 국세청이 거래 내역을 통해 파악하고
            무신고 가산세(20%)와 납부지연 가산세를 추가 부과할 수 있습니다.
            코인 거래소는 국세청에 거래 자료를 제출하므로 누락은 위험합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">상속세, 어떻게 계산할까</h2>
          <p className="leading-relaxed mb-4">
            상속세는 상속 재산 전체(부동산 + 금융 자산 + 가상자산 등)를 합산한 뒤
            각종 공제를 적용해 세액을 계산합니다.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-2 text-sm mb-6">
            <p><strong>상속세 과세가액</strong> = 총 상속 재산 − 채무·장례비 등</p>
            <p><strong>과세표준</strong> = 과세가액 − 각종 공제</p>
            <p><strong>세액</strong> = 과세표준 × 세율 (10%~50%, 누진)</p>
          </div>

          <p className="leading-relaxed mb-4">
            주요 공제 항목으로는 <strong>일괄공제 5억원</strong>이 있어,
            상속 재산이 5억원 이하라면 상속세가 없는 경우가 많습니다.
            배우자가 상속받는 경우 배우자 공제(최소 5억원)가 추가로 적용됩니다.
          </p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">과세표준</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">세율</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">누진공제</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3">1억원 이하</td>
                  <td className="px-4 py-3">10%</td>
                  <td className="px-4 py-3">—</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">5억원 이하</td>
                  <td className="px-4 py-3">20%</td>
                  <td className="px-4 py-3">1,000만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">10억원 이하</td>
                  <td className="px-4 py-3">30%</td>
                  <td className="px-4 py-3">6,000만원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">30억원 이하</td>
                  <td className="px-4 py-3">40%</td>
                  <td className="px-4 py-3">1억 6,000만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">30억원 초과</td>
                  <td className="px-4 py-3">50%</td>
                  <td className="px-4 py-3">4억 6,000만원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            상속세 및 증여세법 제26조 기준. 상속 재산 규모에 따라 구간별 누진세율 적용.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">코인 평가액은 어떻게 정할까</h2>
          <p className="leading-relaxed mb-4">
            가상자산은 가격 변동이 크기 때문에 사망일 하루의 시세로 평가하지 않습니다.
            상속세 및 증여세법 제65조 제2항과 같은 법 시행령 제60조 제2항에 따라{" "}
            <strong>상속 개시일(사망일) 전·이후 각 1개월, 총 2개월 동안의 일평균가액 평균</strong>으로 평가합니다.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-3 text-sm mb-4">
            <div>
              <p className="font-semibold text-gray-700 mb-1">국세청장이 고시한 거래소(업비트·빗썸·코빗·코인원)에서 거래되는 코인</p>
              <p className="text-gray-600">평가기준일 전·이후 각 1개월 동안 해당 거래소가 공시한 일평균가액의 평균액</p>
            </div>
            <div className="border-t border-gray-200 pt-3">
              <p className="font-semibold text-gray-700 mb-1">그 밖의 거래소에서만 거래되는 코인</p>
              <p className="text-gray-600">해당 거래소가 공시하는 일평균가액 또는 종료시각 시세 등 합리적으로 인정되는 가액</p>
            </div>
          </div>
          <p className="leading-relaxed mb-4">
            코인별 평가액은 홈택스의 <strong>가상자산 일평균가격 조회</strong> 메뉴에서 코인 종류와
            평가기준일을 입력해 확인할 수 있습니다.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-800 leading-relaxed">
            <strong>주의:</strong> 개인 지갑(하드웨어 지갑 등)에 보관된 코인도 상속 재산에 포함됩니다.
            지갑 주소와 보유 수량 기록을 함께 보관해 두세요.
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">상속 후 코인을 팔면 양도소득세도 내야 할까?</h2>
          <p className="leading-relaxed mb-4">
            네, 상속세를 냈더라도 나중에 코인을 매도하면 양도소득세가 별도로 발생합니다.
            다만 <strong>이중과세가 되지 않도록</strong> 취득가액이 자동으로 조정됩니다.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-3 text-sm mb-4">
            <div>
              <p className="font-semibold text-gray-700 mb-1">상속받은 코인의 취득가액</p>
              <p className="text-gray-600">= 상속세 신고 시 평가액 (상속 개시일 전·이후 각 1개월 일평균가액의 평균)</p>
            </div>
            <div className="border-t border-gray-200 pt-3">
              <p className="font-semibold text-gray-700 mb-1">양도소득세 계산</p>
              <p className="text-gray-600">양도차익 = 매도금액 − 상속 당시 평가액</p>
              <p className="text-gray-600">과세표준 = 양도차익 − 기본공제 250만원</p>
              <p className="text-gray-600">세액 = 과세표준 × 22%</p>
            </div>
          </div>
          <p className="leading-relaxed">
            예를 들어 상속세 신고 시 1비트코인의 평가액이 1억원이었고, 이후 1억 5,000만원에 매도했다면
            양도차익은 5,000만원(= 1억 5,000만원 − 1억원)에서 기본공제 250만원을 뺀
            4,750만원이 과세표준이 됩니다. 원래 피상속인의 취득가액부터 계산하는 것이 아닙니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">상속과 증여의 차이</h2>
          <p className="leading-relaxed mb-4">
            코인을 살아있을 때 가족에게 주면 <strong>증여세</strong>, 사망 후 물려주면
            <strong>상속세</strong>가 붙습니다. 세금 구조는 비슷하지만 차이가 있습니다.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">구분</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">증여</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">상속</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">시점</td>
                  <td className="px-4 py-3">생전</td>
                  <td className="px-4 py-3">사망 후</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">기본 공제</td>
                  <td className="px-4 py-3">관계별 5,000만원~10년 한도</td>
                  <td className="px-4 py-3">일괄공제 5억원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">신고 기한</td>
                  <td className="px-4 py-3">증여일이 속한 달의 말일 + 3개월</td>
                  <td className="px-4 py-3">상속 개시일이 속한 달의 말일 + 6개월</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">이후 양도세 취득가액</td>
                  <td className="px-4 py-3">증여 당시 평가액</td>
                  <td className="px-4 py-3">상속 당시 평가액</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            증여는 10년 단위로 공제가 리셋되는 점, 상속은 일괄공제 5억원이 적용되는 점이
            핵심 차이입니다. 절세 전략은 개인 상황에 따라 달라지므로 세무사 상담을 권장합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">상속세 신고 기한과 절차</h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "신고 기한 확인",
                desc: "피상속인이 국내 거주자인 경우, 상속 개시일(사망일)이 속하는 달의 말일로부터 6개월 이내에 신고해야 합니다.",
              },
              {
                step: "2",
                title: "가상자산 잔고 목록 확보",
                desc: "사망일 기준 보유 중인 거래소별 코인 종목과 수량을 확인합니다. 하드웨어 지갑에 보관된 코인도 포함입니다.",
              },
              {
                step: "3",
                title: "평가액 산정 및 신고",
                desc: "홈택스 가상자산 일평균가격 조회로 코인별 평가액(상속 개시일 전·이후 각 1개월 평균)을 확인하고, 다른 상속 재산과 합산해 신고·납부합니다.",
              },
              {
                step: "4",
                title: "취득가액 기록 보관",
                desc: "이후 코인 매도 시 양도소득세 신고에 필요하므로, 상속세 신고서에 기재된 코인별 평가액을 보관해 두세요.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 border border-gray-200 rounded-xl p-5">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">정리: 핵심 체크리스트</h2>
          <div className="space-y-2">
            {[
              "코인은 상속 재산에 포함 — 부동산·금융 자산과 합산해 신고",
              "코인 평가액 = 상속 개시일 전·이후 각 1개월(총 2개월) 일평균가액의 평균",
              "상속세 신고 기한: 상속 개시일이 속한 달 말일 + 6개월",
              "일괄공제 5억원 적용 → 상속 재산이 5억원 이하면 상속세 없는 경우 많음",
              "상속 후 코인 매도 시 양도소득세 별도 발생 — 이중과세 아님",
              "양도소득세 취득가액 = 상속 당시 평가액 (피상속인의 원래 취득가 아님)",
              "상속세 신고서의 코인 평가액 기록을 반드시 보관할 것",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-0">
                <span className="text-blue-500 mt-0.5 flex-shrink-0">✓</span>
                <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 수정 이력 */}
        <p className="text-xs text-gray-400">
          수정 이력: 2026년 10월 1일 가상자산 평가 방법을 &lsquo;상속 개시일 당시 시가&rsquo;에서
          &lsquo;상속 개시일 전·이후 각 1개월 일평균가액의 평균&rsquo;(상속세 및 증여세법 시행령 제60조)으로 정정했습니다.
        </p>

        {/* 면책 고지 */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-500 leading-relaxed">
          본 글은 일반적인 정보 제공을 목적으로 작성되었으며 세무 조언이 아닙니다.
          상속세는 재산 규모와 가족 구성에 따라 계산이 크게 달라지므로, 실제 신고 시에는
          반드시 세무사와 상담하시기 바랍니다.
        </div>
      </article>

      {/* 관련 계산기 CTA */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-blue-900 mb-1">관련 계산기</p>
        <p className="text-sm text-blue-700 mb-4">
          상속받은 코인을 매도할 때 예상 세액을 미리 계산해보세요.
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
