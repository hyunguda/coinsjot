import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "취득가액 기록 없는 코인, 세금 어떻게 계산할까? | 코인 인사이트",
  description:
    "코인 구매 기록이 없으면 취득가액을 0원으로 봐 세금이 폭탄이 될 수 있습니다. 거래소 내역 복구, 의제취득가액 특례 활용, 취득가 입증 방법을 단계별로 정리했습니다.",
  keywords:
    "코인 취득가액 없음, 코인 구매 기록 분실, 비트코인 취득가 모름, 가상자산 취득원가 불명, 코인 세금 취득가 입증, 의제취득가액",
  openGraph: {
    title: "취득가액 기록 없는 코인, 세금 어떻게 계산할까?",
    description:
      "구매 기록이 없으면 취득가액 0원으로 전액 과세될 수 있습니다. 거래소 내역 복구와 의제취득가액 특례를 활용하는 방법을 정리했습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/crypto-no-acquisition-record",
  },
};

const ARTICLE = {
  title: "취득가액 기록 없는 코인, 세금 어떻게 계산할까?",
  date: "2026-09-26",
  category: "세금",
};

export default function ArticleCryptoNoAcquisitionRecord() {
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
          코인을 몇 년 전에 샀지만 구매 기록이 없다면, 세법상 취득가액은 <strong>0원</strong>으로
          간주될 수 있습니다. 매도가 전액이 과세 대상이 되는 것입니다.
          거래소 내역 복구, 의제취득가액 특례, 블록체인 증빙까지 — 대처 방법을 단계별로 정리했습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        {/* 한눈에 */}
        <section>
          <h2 className="text-2xl font-bold mb-4">한눈에 — 취득가 기록 없을 때 선택지</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">상황</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">대처 방법</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">효과</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 text-gray-600">거래소 내역이 남아 있음</td>
                  <td className="px-4 py-3 text-gray-600">CSV 추출 → 취득가 확인</td>
                  <td className="px-4 py-3 text-center text-green-700 font-medium">완전 해결</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">국내 거래소 탈퇴·휴면</td>
                  <td className="px-4 py-3 text-gray-600">재가입 후 내역 요청 or 고객센터</td>
                  <td className="px-4 py-3 text-center text-green-700 font-medium">대부분 복구</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">2026.12.31 이전 매수분</td>
                  <td className="px-4 py-3 text-gray-600">의제취득가액 특례 적용</td>
                  <td className="px-4 py-3 text-center text-blue-700 font-medium">절세 가능</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">온체인 입금 기록만 있음</td>
                  <td className="px-4 py-3 text-gray-600">블록체인 탐색기로 날짜 확인 후 당일 시가 적용</td>
                  <td className="px-4 py-3 text-center text-blue-700 font-medium">부분 복구</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">기록 완전 불명</td>
                  <td className="px-4 py-3 text-gray-600">취득가액 0원 처리 or 세무사 상담</td>
                  <td className="px-4 py-3 text-center text-red-600 font-medium">최대 과세</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">① 취득가액이 없으면 세금이 어떻게 달라질까?</h2>
          <p className="leading-relaxed mb-4">
            취득가액은 양도차익 계산의 출발점입니다. 기록이 없어 취득가액을 입증하지 못하면
            세무당국은 취득가액을 <strong>0원</strong>으로 처리합니다.
            매도가 전액이 양도차익이 되어 세금이 크게 늘어납니다.
          </p>
          <div className="rounded-xl border border-red-100 overflow-hidden">
            <div className="bg-red-50 px-5 py-3 border-b border-red-200">
              <p className="font-bold text-red-800">취득가액 0원 처리 시 세금 차이</p>
            </div>
            <div className="px-5 py-4 text-sm text-gray-700 space-y-3">
              <div>
                <p className="font-semibold text-gray-800 mb-1">상황: 2년 전 1,000만원에 매수한 이더리움을 2,500만원에 매도</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-green-200 bg-green-50 p-3">
                  <p className="font-semibold text-green-800 mb-2">취득가 입증 성공</p>
                  <p className="text-xs space-y-1">
                    <span className="block">양도차익: 2,500만 − 1,000만 = 1,500만</span>
                    <span className="block">공제 후: 1,500만 − 250만 = 1,250만</span>
                    <span className="block font-bold text-green-700">세액: 275만원</span>
                  </p>
                </div>
                <div className="rounded-lg border border-red-200 bg-red-50 p-3">
                  <p className="font-semibold text-red-800 mb-2">취득가 입증 실패 (0원)</p>
                  <p className="text-xs space-y-1">
                    <span className="block">양도차익: 2,500만 − 0 = 2,500만</span>
                    <span className="block">공제 후: 2,500만 − 250만 = 2,250만</span>
                    <span className="block font-bold text-red-700">세액: 495만원</span>
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                동일 거래에서 취득가 입증 여부만으로 <strong>220만원</strong> 차이가 납니다.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">② 1단계 — 거래소 거래 내역 복구하기</h2>
          <p className="leading-relaxed mb-4">
            기록이 없다고 포기하기 전에, 거래소에 보관된 내역부터 확인합니다.
            국내 거래소는 금융기록 보관 의무에 따라 <strong>최소 5년치 거래 내역</strong>을 보관하고 있습니다.
          </p>
          <ul className="space-y-4 text-sm text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5 shrink-0">①</span>
              <span>
                <strong>업비트·빗썸 등 현재 이용 중인 거래소:</strong> 거래 내역 → CSV 내보내기.
                취득일, 수량, 단가, 수수료가 포함됩니다.
                자세한 방법은
                <Link href="/insights/exchange-history-export" className="text-blue-600 hover:underline ml-1">
                  거래 내역 보관·추출 방법
                </Link>을 참고하세요.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5 shrink-0">②</span>
              <span>
                <strong>탈퇴하거나 오랫동안 로그인하지 않은 거래소:</strong> 동일 본인인증(이름·주민번호)으로
                재가입이 가능한 경우 기존 계정이 복구됩니다. 재가입 후 내역을 확인하세요.
                재가입이 안 된다면 고객센터에 &quot;거래 내역 사본 요청&quot;을 하면 대부분 이메일로 제공합니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5 shrink-0">③</span>
              <span>
                <strong>폐업한 거래소(코인원 일부, 구 코빗 등):</strong> 폐업 거래소의 경우
                청산 절차에서 이용자 데이터를 이관·보관하는 경우가 있습니다.
                해당 거래소 공지사항이나 금융위원회 공시를 확인하세요.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">③ 2단계 — 블록체인에서 입금 날짜 확인하기</h2>
          <p className="leading-relaxed mb-4">
            거래소 내역이 복구되지 않더라도, 지갑 주소를 알고 있다면
            블록체인 탐색기로 입금 날짜를 확인할 수 있습니다.
            날짜가 확인되면 그 날의 시가를 취득가액으로 활용할 수 있습니다.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">코인</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">탐색기</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">활용법</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 text-gray-600">비트코인 (BTC)</td>
                  <td className="px-4 py-3 text-gray-600">Blockchain.com, Blockchair</td>
                  <td className="px-4 py-3 text-gray-600">지갑 주소 조회 → 입금 트랜잭션 날짜 확인</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">이더리움 (ETH)</td>
                  <td className="px-4 py-3 text-gray-600">Etherscan</td>
                  <td className="px-4 py-3 text-gray-600">지갑 주소 조회 → 입금 TX 날짜·수량 확인</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">리플 (XRP)</td>
                  <td className="px-4 py-3 text-gray-600">XRPSCAN, Bithomp</td>
                  <td className="px-4 py-3 text-gray-600">XRP Ledger 기록으로 날짜 확인</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">기타 ERC-20 토큰</td>
                  <td className="px-4 py-3 text-gray-600">Etherscan</td>
                  <td className="px-4 py-3 text-gray-600">Token Transfers 탭에서 입금 내역 확인</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            날짜가 확인되면 업비트·빗썸의 해당일 종가 또는 코인마켓캡 히스토리 데이터에서
            당일 시가를 조회해 취득가액으로 사용합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">④ 2026.12.31 이전 매수분 — 의제취득가액 특례</h2>
          <p className="leading-relaxed mb-4">
            2027년 1월 1일 가상자산 양도소득세 시행에 앞서, 정부는 <strong>의제취득가액 특례</strong>를 마련했습니다.
            2026년 12월 31일 이전에 보유한 코인에 대해
            <strong> 실제 취득가와 2026.12.31 시가 중 높은 쪽</strong>을 취득가액으로 선택할 수 있습니다.
          </p>
          <div className="rounded-xl border border-blue-100 overflow-hidden">
            <div className="bg-blue-50 px-5 py-3 border-b border-blue-200">
              <p className="font-bold text-blue-800">의제취득가액 적용 공식</p>
            </div>
            <div className="px-5 py-4 text-sm text-gray-700 space-y-1">
              <p>취득가액 = <strong>MAX(실제 취득가, 2026.12.31 시가)</strong></p>
              <p className="mt-2 text-gray-500">
                실제 취득가를 모를 경우, 2026.12.31 시가가 자동으로 취득가액 하한선이 됩니다.
              </p>
            </div>
          </div>
          <p className="leading-relaxed mt-4 mb-4">
            예를 들어 2022년에 비트코인을 샀는데 취득가 기록이 없다고 가정합니다.
            2026.12.31 비트코인 시가가 1억 2천만원이라면, 기록 유무와 관계없이
            <strong> 취득가액 1억 2천만원</strong>으로 신고할 수 있습니다.
          </p>
          <div className="rounded-xl border border-amber-100 bg-amber-50 px-5 py-4 text-sm text-amber-800">
            <strong>주의:</strong> 의제취득가액 특례는 2026.12.31 이전 취득분에만 적용됩니다.
            2027년 이후 매수한 코인의 취득가 기록이 없을 경우에는 이 특례를 사용할 수 없으므로,
            <strong> 2027년 이후 매수분은 반드시 그때그때 기록해야 합니다.</strong>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">⑤ 해외 거래소 — 기록 복구가 더 어렵다</h2>
          <p className="leading-relaxed mb-4">
            바이낸스, 바이비트, OKX 등 해외 거래소는 국내 법령 보관 의무가 없어
            일부 거래소는 일정 기간 이후 내역을 삭제하기도 합니다.
            해외 거래소를 사용했다면 아래 방법을 순서대로 시도하세요.
          </p>
          <ul className="space-y-4 text-sm text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5 shrink-0">①</span>
              <span>
                <strong>거래소 내 거래 내역 다운로드:</strong> 바이낸스는 최대 3개월 단위로 CSV를
                내보낼 수 있습니다. 과거 내역도 연도별로 구간을 나눠 반복 다운로드합니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5 shrink-0">②</span>
              <span>
                <strong>고객지원 내역 요청:</strong> 해외 거래소 고객지원팀에
                &quot;Trade/Deposit history export for tax purpose&quot;를 요청하면
                이메일로 CSV를 제공하는 경우가 있습니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5 shrink-0">③</span>
              <span>
                <strong>온체인 기록 활용:</strong> 거래소 지갑 주소를 안다면
                블록체인 탐색기로 입출금 이력을 확인합니다.
                거래소 내부 거래(매수·매도)는 체인에 기록되지 않으므로 입출금 이력만 확인 가능합니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5 shrink-0">④</span>
              <span>
                <strong>세금 신고 소프트웨어 연동:</strong> Koinly, CoinTracker 등 해외 세금 도구는
                거래소 API나 온체인 데이터를 자동으로 수집해 취득가를 산출합니다.
                2027년 국내 신고 시 보조 자료로 활용할 수 있습니다.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">⑥ 기록 완전 불명 — 최후 수단</h2>
          <p className="leading-relaxed mb-4">
            위 방법을 모두 시도해도 취득가를 확인할 수 없다면 두 가지 선택지가 남습니다.
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                <p className="font-bold text-gray-800">선택 1 — 의제취득가액 특례 적용 (2026.12.31 이전 매수분)</p>
              </div>
              <div className="px-5 py-4 text-sm text-gray-700">
                <p>
                  실제 취득가를 모르더라도 2026년 12월 31일 기준 시가를 취득가액으로 인정받을 수 있습니다.
                  <Link href="/calculators/deemed-acquisition-price" className="text-blue-600 hover:underline ml-1">
                    의제취득가액 계산기
                  </Link>로 절세 효과를 미리 시뮬레이션해보세요.
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-blue-100 overflow-hidden">
              <div className="bg-blue-50 px-5 py-3 border-b border-blue-200">
                <p className="font-bold text-blue-800">선택 2 — 세무사 상담</p>
              </div>
              <div className="px-5 py-4 text-sm text-gray-700">
                <p>
                  취득가 불명 상태에서 신고를 하면 과세당국이 취득가를 0원으로 결정할 수 있습니다.
                  세무사는 가능한 증빙(카드 결제, 은행 이체 내역 등)을 취합해
                  취득가를 최대한 입증하는 전략을 세울 수 있습니다.
                  세금 규모가 크다면 전문가 상담이 상담 비용보다 훨씬 절약될 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">핵심 요약</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5">①</span>
              <span>
                <strong>취득가 없으면 0원 처리:</strong> 기록이 없으면 매도가 전액이 과세 대상이 됩니다.
                복구 시도를 먼저 해야 합니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5">②</span>
              <span>
                <strong>거래소 고객센터 요청이 첫 번째:</strong> 국내 거래소는 5년치 내역을 보관합니다.
                탈퇴 상태라도 재가입하거나 고객센터에 요청하면 복구 가능한 경우가 많습니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5">③</span>
              <span>
                <strong>2026.12.31 이전 매수분은 의제취득가액 특례:</strong> 취득가 기록이 없어도
                2026년 말 시가를 취득가로 쓸 수 있어 세금을 크게 줄일 수 있습니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5">④</span>
              <span>
                <strong>2027년 이후 매수분은 지금부터 기록:</strong> 새로 매수하는 코인의 날짜·가격·수량을
                바로 기록해두는 습관이 미래의 세금 분쟁을 막습니다.
              </span>
            </li>
          </ul>
        </section>

        {/* 면책 고지 */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-500 leading-relaxed">
          본 글은 일반적인 정보 제공을 목적으로 작성되었으며 세무 조언이 아닙니다.
          가상자산 양도소득세는 2027년 시행 예정이며, 세부 규정은 시행 전까지 변경될 수 있습니다.
          취득가액 입증 방법은 개인 상황에 따라 달라지므로 세무 전문가에게 확인하시기 바랍니다.
        </div>
      </article>

      {/* 관련 계산기 CTA */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-blue-900 mb-1">관련 계산기</p>
        <p className="text-sm text-blue-700 mb-4">
          2026.12.31 기준 시가를 활용한 의제취득가액 절세 효과를 계산해보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/calculators/deemed-acquisition-price"
            className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition text-center"
          >
            의제취득가액 계산기 →
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
