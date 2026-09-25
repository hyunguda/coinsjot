import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "코인 채굴(마이닝) 수익, 세금은 어떻게 낼까? | 코인 인사이트",
  description:
    "채굴로 받은 코인은 채굴 시점 시가가 취득가액이 됩니다. 이후 매도할 때 그 차익에 22% 양도소득세가 붙습니다. 취득가액 기록 방법, 채굴 비용 공제, 전업 채굴자 사업소득 여부까지 정리했습니다.",
  keywords:
    "코인 채굴 세금, 마이닝 수익 세금, 비트코인 채굴 양도소득세, 채굴 취득가액, 채굴 비용 공제, 가상자산 채굴 세금 신고",
  openGraph: {
    title: "코인 채굴(마이닝) 수익, 세금은 어떻게 낼까?",
    description:
      "채굴로 받은 코인의 취득가액은 채굴 시점 시가입니다. 매도 시 그 차익이 과세됩니다. 기록 방법과 비용 공제까지 정리했습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/crypto-mining-tax",
  },
};

const ARTICLE = {
  title: "코인 채굴(마이닝) 수익, 세금은 어떻게 낼까?",
  date: "2026-09-25",
  category: "세금",
};

export default function ArticleCryptoMiningTax() {
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
          채굴로 받은 코인은 <strong>받는 순간의 시가가 취득가액</strong>이 됩니다.
          이후 매도하면 그 차익에 22% 양도소득세가 붙습니다.
          채굴 시점 시가를 기록해두지 않으면 나중에 세금 계산 자체가 어려워집니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        {/* 한눈에 */}
        <section>
          <h2 className="text-2xl font-bold mb-4">한눈에 — 채굴 수익의 세금 흐름</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">단계</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">내용</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">채굴 수령</td>
                  <td className="px-4 py-3 text-gray-600">수령 당일 시가 = 취득가액으로 기록 (과세 없음)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-700">보유 기간</td>
                  <td className="px-4 py-3 text-gray-600">과세 없음 — 보유만으로 세금 발생 안 함</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">매도 시점</td>
                  <td className="px-4 py-3 text-gray-600">양도차익 = 매도가 − 채굴 시점 시가</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-700">과세표준</td>
                  <td className="px-4 py-3 text-gray-600">양도차익 − 250만원 기본공제</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-700">세율</td>
                  <td className="px-4 py-3 text-gray-600">과세표준 × 22% (지방소득세 포함)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">① 채굴로 받은 코인의 취득가액은 채굴 시점 시가</h2>
          <p className="leading-relaxed mb-4">
            일반 매수와 달리 채굴로 받은 코인은 지불한 매수 대금이 없습니다.
            한국 세법은 이 경우 <strong>코인을 받은 시점의 시가(시장가격)</strong>를 취득가액으로 봅니다.
          </p>
          <p className="leading-relaxed mb-4">
            예를 들어 0.01 BTC를 채굴로 받은 날 비트코인 시세가 1억원이었다면
            취득가액은 <strong>100만원</strong>입니다. 이후 시세가 1.5억원일 때 매도하면
            양도차익은 150만원 − 100만원 = <strong>50만원</strong>입니다.
          </p>
          <div className="rounded-xl border border-blue-100 overflow-hidden">
            <div className="bg-blue-50 px-5 py-3 border-b border-blue-200">
              <p className="font-bold text-blue-800">취득가액 계산 예시</p>
            </div>
            <div className="px-5 py-4 text-sm text-gray-700 space-y-1">
              <p>채굴 수령: 0.01 BTC (수령일 시가 1억원/BTC)</p>
              <p>취득가액: 0.01 × 100,000,000 = <strong>100만원</strong></p>
              <p>매도가: 0.01 BTC × 150,000,000 = 150만원</p>
              <p>양도차익: 150만원 − 100만원 = 50만원</p>
              <p className="text-blue-700 font-medium">※ 연간 250만원 기본공제 내라면 납부세액 0원</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            채굴 당시 시가보다 낮게 매도하면 손실로 처리되어 같은 해 다른 코인 수익과 손익통산이 가능합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">② 채굴 비용, 어디까지 공제될까?</h2>
          <p className="leading-relaxed mb-4">
            채굴에는 전기세·장비 구입비·유지보수비 등 실비용이 발생합니다.
            이 비용의 공제 가능 여부는 <strong>채굴을 사업으로 보느냐, 부업으로 보느냐</strong>에 따라 달라집니다.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">비용 항목</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">양도소득 신고</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">사업소득 신고</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 text-gray-700">전기세</td>
                  <td className="px-4 py-3 text-center text-red-600">공제 불가</td>
                  <td className="px-4 py-3 text-center text-green-700 font-medium">공제 가능</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">채굴 장비 구입비</td>
                  <td className="px-4 py-3 text-center text-red-600">공제 불가</td>
                  <td className="px-4 py-3 text-center text-green-700 font-medium">감가상각 공제</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-700">풀(Pool) 수수료</td>
                  <td className="px-4 py-3 text-center text-green-700 font-medium">공제 가능</td>
                  <td className="px-4 py-3 text-center text-green-700 font-medium">공제 가능</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            소규모 부업성 채굴이라면 풀 수수료 정도만 공제 가능합니다. 전기세·장비비는 사업소득으로 신고해야 공제됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">③ 전업 채굴자라면 — 사업소득 vs 양도소득</h2>
          <p className="leading-relaxed mb-4">
            채굴을 직업적·반복적으로 운영한다면 세무서가 <strong>사업소득</strong>으로 분류할 수 있습니다.
            사업소득과 양도소득은 세금 계산 방식이 크게 다릅니다.
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                <p className="font-bold text-gray-800">사업소득 (전업 채굴자)</p>
              </div>
              <div className="px-5 py-4 text-sm text-gray-700 space-y-1">
                <p>• 전기세·장비 감가상각·운영비 <strong>필요경비 공제 가능</strong></p>
                <p>• 종합소득세에 합산 → 근로소득 등과 합산 후 <strong>누진세율(6~45%)</strong> 적용</p>
                <p>• 규모가 크고 지속적·반복적이면 사업소득으로 간주될 수 있음</p>
              </div>
            </div>
            <div className="rounded-xl border border-blue-100 overflow-hidden">
              <div className="bg-blue-50 px-5 py-3 border-b border-blue-200">
                <p className="font-bold text-blue-800">양도소득 (부업성 소규모 채굴)</p>
              </div>
              <div className="px-5 py-4 text-sm text-gray-700 space-y-1">
                <p>• 비용 공제 제한적 (풀 수수료 등 직접 비용만)</p>
                <p>• 분리과세 22% — 근로소득과 <strong>합산되지 않음</strong></p>
                <p>• 연 250만원 기본공제 적용</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-amber-100 bg-amber-50 px-5 py-4 mt-4 text-sm text-amber-800">
            <strong>주의:</strong> 어느 쪽이 유리한지는 소득 수준과 채굴 규모에 따라 다릅니다.
            고소득자는 사업소득 누진세가 더 불리할 수 있고, 비용이 많은 전업 채굴자는 공제 혜택이 클 수 있습니다.
            채굴 규모가 크다면 세무사 상담을 권장합니다.
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">④ 스테이킹 보상과 채굴의 차이</h2>
          <p className="leading-relaxed mb-4">
            채굴(PoW)과 스테이킹 보상(PoS)은 방식이 다르지만 세금 처리 원리는 같습니다.
            둘 다 <strong>코인을 받는 시점의 시가가 취득가액</strong>이 됩니다.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">구분</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">채굴 (PoW)</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">스테이킹 (PoS)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 text-gray-600">취득가액</td>
                  <td className="px-4 py-3 text-center">수령 시점 시가</td>
                  <td className="px-4 py-3 text-center">수령 시점 시가</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">매도 시 과세</td>
                  <td className="px-4 py-3 text-center">취득가 초과분</td>
                  <td className="px-4 py-3 text-center">취득가 초과분</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">비용 공제</td>
                  <td className="px-4 py-3 text-center">전기세·장비비 (사업소득 시)</td>
                  <td className="px-4 py-3 text-center">플랫폼 수수료만</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">사업소득 가능성</td>
                  <td className="px-4 py-3 text-center">규모에 따라 해당 가능</td>
                  <td className="px-4 py-3 text-center">대부분 양도소득</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">⑤ 반드시 기록해야 할 것들</h2>
          <p className="leading-relaxed mb-4">
            채굴 세금에서 가장 중요한 것은 <strong>채굴 수령 시점의 시가 기록</strong>입니다.
            이 기록이 없으면 취득가액을 입증하지 못해 매도가 전체에 세금이 붙을 수 있습니다.
          </p>
          <ul className="space-y-4 text-sm text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5 shrink-0">①</span>
              <span>
                <strong>채굴 풀 지급 내역:</strong> 채굴 풀(pool)에서 제공하는 payout history를
                주기적으로 다운로드합니다. 날짜·수량·지갑 주소가 포함된 CSV가 최적입니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5 shrink-0">②</span>
              <span>
                <strong>수령 당일 시가:</strong> 업비트·빗썸·코인마켓캡 등에서 해당일 종가를 기록합니다.
                거래소 공식 종가 자료가 가장 신뢰성이 높습니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5 shrink-0">③</span>
              <span>
                <strong>채굴 비용 증빙:</strong> 전기 요금 고지서·장비 구매 영수증·풀 수수료 내역을
                연도별로 정리해 보관합니다. 사업소득 신고 시 필요경비 입증 자료가 됩니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5 shrink-0">④</span>
              <span>
                <strong>온체인 트랜잭션 해시:</strong> 지갑으로 입금된 트랜잭션 ID를 기록해두면
                채굴 수령 사실과 날짜를 블록체인에서 검증할 수 있습니다.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">⑥ 실제 세금 계산 예시</h2>
          <p className="leading-relaxed mb-4">
            2027년 한 해 동안 비트코인을 두 차례 채굴해 받은 경우입니다.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">수령 시점</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">수량</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">수령 시 시가</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">취득가액</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 text-gray-600">2027년 3월</td>
                  <td className="px-4 py-3 text-center">0.005 BTC</td>
                  <td className="px-4 py-3 text-center">1억원/BTC</td>
                  <td className="px-4 py-3 text-center">50만원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">2027년 7월</td>
                  <td className="px-4 py-3 text-center">0.005 BTC</td>
                  <td className="px-4 py-3 text-center">1.2억원/BTC</td>
                  <td className="px-4 py-3 text-center">60만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600 font-medium">합계</td>
                  <td className="px-4 py-3 text-center font-medium">0.01 BTC</td>
                  <td className="px-4 py-3 text-center">—</td>
                  <td className="px-4 py-3 text-center font-medium">110만원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border border-green-100 overflow-hidden mt-4">
            <div className="bg-green-50 px-5 py-3 border-b border-green-200">
              <p className="font-bold text-green-800">2027년 말 전량 매도 시</p>
            </div>
            <div className="px-5 py-4 text-sm text-gray-700 space-y-1">
              <p>매도가: 0.01 BTC × 1.5억원 = 150만원</p>
              <p>취득가액 합계: 110만원</p>
              <p>양도차익: 150만원 − 110만원 = 40만원</p>
              <p>기본공제: 250만원 (차익 40만원 &lt; 250만원)</p>
              <p className="font-medium text-green-700">납부세액: <strong>0원</strong></p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            채굴 취득가보다 낮게 매도하면 손실이 인정되어, 같은 해 다른 코인 수익과 손익통산할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">핵심 요약</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5">①</span>
              <span>
                <strong>취득가액 = 채굴 수령 시점 시가:</strong> 채굴 당일 코인 시세를 기준으로
                취득가액이 결정됩니다. 이 기록이 세금 계산의 출발점입니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5">②</span>
              <span>
                <strong>과세는 매도할 때:</strong> 채굴로 받는 순간에는 세금이 없습니다.
                취득가를 초과해 매도하는 시점에 22% 양도소득세가 발생합니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5">③</span>
              <span>
                <strong>전업 채굴자는 사업소득 검토:</strong> 규모가 크고 반복적이라면 전기세·장비비
                공제가 가능한 사업소득 신고도 고려해볼 수 있습니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5">④</span>
              <span>
                <strong>기록이 전부:</strong> 채굴 풀 지급 내역·수령일 시가·온체인 트랜잭션을
                연도별로 정리해두지 않으면 추후 세금 신고 시 불이익을 받을 수 있습니다.
              </span>
            </li>
          </ul>
        </section>

        {/* 면책 고지 */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-500 leading-relaxed">
          본 글은 일반적인 정보 제공을 목적으로 작성되었으며 세무 조언이 아닙니다.
          가상자산 양도소득세는 2027년 시행 예정이며, 세부 규정은 시행 전까지 변경될 수 있습니다.
          채굴 활동의 사업소득 여부는 개인 상황에 따라 달라지므로 세무 전문가에게 확인하시기 바랍니다.
        </div>
      </article>

      {/* 관련 계산기 CTA */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-blue-900 mb-1">관련 계산기</p>
        <p className="text-sm text-blue-700 mb-4">
          채굴 수익을 포함한 연간 코인 손익을 통산해 실제 납부세액을 계산해보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/calculators/profit-loss-simulator"
            className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition text-center"
          >
            코인 손익통산 시뮬레이터 →
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
