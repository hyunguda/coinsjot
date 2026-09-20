import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "코인을 다른 코인으로 바꾸면 세금이 발생할까? — 스왑 과세 기준 정리 | 코인 인사이트",
  description:
    "비트코인을 이더리움으로 교환하는 것도 세금 신고 대상입니다. 2027년부터 코인↔코인 스왑은 양도로 간주해 과세됩니다. 과세 기준, 계산 방법, DEX 처리까지 정리했습니다.",
  keywords:
    "코인 스왑 세금, 코인 교환 과세, 비트코인 이더리움 교환 세금, 가상자산 스왑 양도세, DEX 세금",
  openGraph: {
    title: "코인을 다른 코인으로 바꾸면 세금이 발생할까? — 스왑 과세 기준 정리",
    description:
      "비트코인을 이더리움으로 교환하는 것도 세금 신고 대상입니다. 코인↔코인 스왑 과세 기준과 계산 방법을 정리했습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/crypto-swap-tax",
  },
};

const ARTICLE = {
  title: "코인을 다른 코인으로 바꾸면 세금이 발생할까?",
  date: "2026-09-20",
  category: "세금",
};

export default function ArticleCryptoSwapTax() {
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
          "현금으로 뺀 게 아니라 그냥 코인끼리 바꾼 건데도 세금을 내야 해?" — 맞습니다.
          비트코인을 이더리움으로 교환하는 것도 세금 신고 대상입니다.
          코인을 다른 코인으로 스왑하는 순간, 세법상 <strong>양도</strong>가 발생합니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">왜 스왑이 양도로 간주되나</h2>
          <p className="leading-relaxed mb-4">
            세법에서 <strong>양도</strong>란 유상으로 자산을 이전하는 행위를 말합니다.
            코인을 현금으로 받는 것뿐 아니라 다른 자산과 교환하는 것도 양도에 해당합니다.
            비트코인을 이더리움으로 교환할 때 비트코인 입장에서는 이더리움을
            &lsquo;대가&rsquo;로 받고 양도한 것이기 때문입니다.
          </p>
          <p className="leading-relaxed">
            2027년부터 시행되는 가상자산 양도소득세는 이 원칙을 그대로 적용합니다.
            원화(KRW) 출금이 없어도, 거래소 계정 안에서 이루어진 교환이어도,
            코인↔코인 스왑은 <strong>과세 이벤트</strong>입니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">실제 계산 방법</h2>
          <p className="leading-relaxed mb-6">
            스왑 시 양도차익은 <strong>교환 시점의 원화 환산 시가</strong>를 기준으로 계산합니다.
            스왑으로 내보낸 코인의 시가를 매도 가격으로, 해당 코인의 취득가액을 빼면
            양도차익이 됩니다.
          </p>

          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <p className="font-bold text-gray-800">예시 — BTC 1개를 ETH로 교환하는 경우</p>
            </div>
            <div className="px-5 py-4 text-sm text-gray-700 space-y-2">
              <p>BTC 취득가액: <strong>5,000만원</strong></p>
              <p>교환 시점 BTC 시가: <strong>9,000만원</strong></p>
              <p>양도차익: 9,000만원 − 5,000만원 = <strong>4,000만원</strong></p>
              <div className="border-t border-gray-100 my-2 pt-2">
                <p>수령한 ETH의 취득가액: 교환 시점 ETH 시가 (= 9,000만원)</p>
                <p className="text-gray-500 text-xs mt-1">ETH를 나중에 팔 때는 이 가격이 취득가가 됩니다.</p>
              </div>
            </div>
          </div>

          <p className="mt-4 leading-relaxed text-sm text-gray-600">
            이 예시에서 BTC→ETH 교환 시점에 4,000만원의 양도차익이 확정되며,
            연간 250만원 기본공제를 적용한 <strong>3,750만원 × 22% = 825만원</strong>이
            해당 연도 예상 세금(다른 거래가 없을 경우)입니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">스테이블코인 교환도 과세 대상인가</h2>
          <p className="leading-relaxed mb-4">
            USDT·USDC 같은 스테이블코인도 가상자산입니다.
            비트코인을 USDT로 바꾸는 것도 BTC의 양도로 간주하여 과세됩니다.
            &ldquo;현금으로 빼지 않고 USDT로만 보관했는데&rdquo;라는 주장은 통하지 않습니다.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-gray-700 leading-relaxed">
            <strong>주의:</strong> 스테이블코인은 가격 변동이 거의 없지만, 보유 중인 기간에
            소폭 가격이 움직이는 경우도 있습니다. USDT를 나중에 현금으로 출금하거나
            다른 코인으로 교환할 때도 그 시점의 양도차익이 계산됩니다.
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">DEX(탈중앙화 거래소) 스왑은 어떻게 되나</h2>
          <p className="leading-relaxed mb-4">
            유니스왑·팬케이크스왑 같은 DEX에서 이루어진 코인 교환도 동일하게 과세됩니다.
            거래소가 국내 법인이 아니어도, 거래 내역을 세무당국에 보고하지 않아도,
            납세 의무는 투자자에게 있습니다.
          </p>
          <p className="leading-relaxed">
            문제는 <strong>증빙</strong>입니다. DEX는 별도의 거래 내역 파일을 제공하지 않으므로,
            투자자가 직접 온체인 트랜잭션 해시와 당시 시가를 기록해두어야 합니다.
            블록체인 익스플로러(이더스캔 등) 데이터를 활용하거나,
            세금 신고를 지원하는 전문 서비스를 사용하는 방법이 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">실무 증빙 관리 요령</h2>
          <p className="leading-relaxed mb-4">
            코인↔코인 스왑이 잦은 투자자라면 거래마다 아래 정보를 기록해두는 것이 좋습니다.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-50 text-gray-700">
                  <th className="text-left px-4 py-3 font-semibold">항목</th>
                  <th className="text-left px-4 py-3 font-semibold">기록 내용</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium">교환 일시</td>
                  <td className="px-4 py-3">스왑이 체결된 날짜 및 시간</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">내보낸 코인</td>
                  <td className="px-4 py-3">종류, 수량, 당시 원화 시가</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">받은 코인</td>
                  <td className="px-4 py-3">종류, 수량, 당시 원화 시가</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">취득가액</td>
                  <td className="px-4 py-3">내보낸 코인의 이동평균 취득가</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">거래 증빙</td>
                  <td className="px-4 py-3">거래소 내역 캡처 또는 온체인 TX 해시</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            국내 중앙화 거래소(업비트·빗썸 등)는 거래 내역 CSV 내보내기를 제공하므로,
            정기적으로 내보내 보관하는 것이 가장 간편합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">손실이 난 스왑도 신고해야 하나</h2>
          <p className="leading-relaxed mb-4">
            네. 손실이 발생한 스왑도 신고해야 합니다. 오히려 손실 거래를 빠짐없이 신고하는 것이
            유리합니다. 같은 해 다른 코인 수익과 <strong>손익통산</strong>이 되어 과세표준을
            낮출 수 있기 때문입니다.
          </p>
          <p className="leading-relaxed">
            BTC→ETH 교환에서 손실이 났고 같은 해 다른 코인을 팔아 수익이 생겼다면,
            두 거래의 손익을 합산해 세금을 계산합니다. 손실 거래를 누락하면
            내지 않아도 될 세금을 더 내게 됩니다.
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
          여러 코인 거래의 손익을 통산해 실제 납부세액을 계산해보세요.
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
