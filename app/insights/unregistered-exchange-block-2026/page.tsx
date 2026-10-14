import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "쿠코인·MEXC 등 미신고 거래소 27곳 접속 차단 — 내 코인과 거래 기록은 어떻게 할까 | 코인 인사이트",
  description:
    "2026년 10월 13일 금융정보분석원은 미신고 가상자산사업자 웹사이트 27곳의 국내 접속 차단을 발표했습니다. 무엇이 바뀌었는지, 이용자가 지금 확인할 것과 2027년 세금 신고를 위해 챙겨둘 기록을 정리했습니다.",
  keywords:
    "미신고 거래소 접속 차단, 해외 거래소 차단, 쿠코인 차단, MEXC 차단, 미신고 가상자산사업자, FIU 신고 거래소, 해외 거래소 세금",
  openGraph: {
    title: "쿠코인·MEXC 등 미신고 거래소 27곳 접속 차단 — 내 코인과 거래 기록은 어떻게 할까",
    description:
      "2026년 10월 13일 금융정보분석원은 미신고 가상자산사업자 웹사이트 27곳의 국내 접속 차단을 발표했습니다. 무엇이 바뀌었는지, 이용자가 지금 확인할 것과 2027년 세금 신고를 위해 챙겨둘 기록을 정리했습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/unregistered-exchange-block-2026",
  },
};

const ARTICLE = {
  title: "쿠코인·MEXC 등 미신고 거래소 27곳 접속 차단 — 내 코인과 거래 기록은 어떻게 할까",
  date: "2026-10-14",
  category: "이슈",
};

export default function ArticleUnregisteredExchangeBlock() {
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
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-100 text-orange-700">
            {ARTICLE.category}
          </span>
          <span className="text-sm text-gray-400">{formatDate(ARTICLE.date)}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
          {ARTICLE.title}
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          앱 설치 차단에 이어 이번에는 웹사이트까지 막혔습니다. 해외 거래소에 코인이나 거래 기록이 남아 있다면
          지금 확인할 것과, 2027년 세금 신고를 위해 챙겨둘 것을 정리했습니다. (2026년 10월 13일 발표 기준)
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">무엇이 발표됐나</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-sm text-blue-900 leading-relaxed space-y-2 mb-4">
            <p><strong>발표:</strong> 금융위원회 금융정보분석원(FIU), 2026년 10월 13일</p>
            <p><strong>결정:</strong> 방송미디어통신심의위원회가 10월 6~7일 심의를 거쳐 미신고 가상자산사업자 인터넷 사이트 27건의 국내 접속 차단(국내 서버·운영자는 이용해지) 결정</p>
            <p><strong>포함된 곳(보도 기준 일부):</strong> 쿠코인(KuCoin), MEXC, 페멕스(Phemex), XT.com, 비트루(Bitrue), 코인W, 폴로닉스(Poloniex), BTCC, 빙엑스(BingX), 비트마트(BitMart), 위엑스(WEEX) 등</p>
          </div>
          <p className="leading-relaxed">
            전체 명단은 금융위원회 보도자료 붙임 자료에서 확인할 수 있습니다. FIU는 앞으로 별도의 피해 신고가
            없더라도 불법 영업이 적발되면 곧바로 심의를 요청하고, 주소를 바꾼 대체 사이트도 계속 점검해 추가 차단을
            요청하겠다고 밝혔습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">지금까지의 차단 흐름</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">시기</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">조치</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">2024년 5월</td>
                  <td className="px-4 py-3">여신전문금융업법 시행령 개정으로 신용카드를 통한 미신고 사업자 가상자산 구매 차단</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">2025년 3월</td>
                  <td className="px-4 py-3">구글플레이에서 미신고 국외 사업자 17개사 앱의 국내 신규 설치·업데이트 차단</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">2025년 4월</td>
                  <td className="px-4 py-3">애플 앱스토어에서도 미신고 사업자 앱 차단</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">2026년 10월</td>
                  <td className="px-4 py-3">인터넷 사이트 27곳 국내 접속 차단 결정</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            이와 별도로 FIU는 지금까지 미신고 업체 44곳을 수사기관에 통보했습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">왜 막히나요? &lsquo;미신고 영업&rsquo;의 기준</h2>
          <p className="leading-relaxed mb-4">
            국내에서 가상자산사업을 하려면 정보보호관리체계(ISMS) 인증 등 요건을 갖춰 FIU에 신고해야 합니다
            (특정금융정보법 제7조). 해외 사업자라도 내국인을 대상으로 영업하면 같은 법이 적용됩니다(같은 법 제6조 제2항).
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">국내 영업으로 판단하는 기준 (FIU)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">한국어 홈페이지를 제공하는지</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">한국인 고객을 끌어들이는 이벤트 등 마케팅을 하는지</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">원화 결제를 지원하는지</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="leading-relaxed">
            FIU 발표 기준 현재 신고된 가상자산사업자는 <strong>28곳</strong>이고, 이 외에 국내에서 가상자산 거래를
            영업으로 하는 업체는 모두 불법이라는 것이 당국의 입장입니다. 미신고 영업을 한 사업자는 5년 이하 징역
            또는 5,000만원 이하 벌금 대상입니다. 신고 사업자 명단은 FIU 홈페이지(www.kofiu.go.kr)에서 확인할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">이용자가 지금 확인할 것</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "내가 쓰는 곳이 신고 사업자인지 확인", desc: "FIU 홈페이지의 신고 사업자 명단과 비교합니다. 이번 27곳 외에도 미신고 사업자는 차단 대상이 될 수 있습니다." },
              { step: "2", title: "남은 자산 인출 계획 세우기", desc: "FIU는 미신고 사업자로 확인되면 보유 가상자산과 예치금을 인출할 필요가 있다고 안내했습니다. 접속 차단으로 인출이 불편해질 수 있어, 인출 방법과 절차는 디지털자산거래소 공동협의체(DAXA)를 통해 안내될 예정입니다." },
              { step: "3", title: "국내 거래소로 바로 옮기기 어려울 수 있음", desc: "FIU는 신고 사업자가 미신고 사업자와 거래하지 않도록 지도하고, 적발된 업체와의 가상자산 이전을 제한해 왔습니다. 국내 거래소로의 직접 입금이 막힐 수 있으니 DAXA와 이용 중인 국내 거래소의 공지를 먼저 확인하세요." },
              { step: "4", title: "개인정보·추천 링크 주의", desc: "미신고 업체에 개인키, 로그인 정보, 신분증 사본을 제공하지 말라는 것이 당국의 당부입니다. 추천 링크로 가입을 알선하는 행위도 미신고 영업을 도운 것으로 판단되면 처벌될 수 있습니다." },
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
          <h2 className="text-2xl font-bold mb-4">세금 관점에서 챙겨둘 기록</h2>
          <p className="leading-relaxed mb-4">
            거래소가 막혀도 2027년 1월 1일 이후 그 거래소에서 생긴 소득을 신고할 의무는 그대로입니다. 특히 차단된
            거래소는 나중에 거래 기록을 다시 받기 어려울 수 있어, 지금 남겨두는 기록이 곧 세금 증빙이 됩니다.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">기록</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">왜 필요한가</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">전체 거래 내역(매수·매도·수수료)</td>
                  <td className="px-4 py-3">2027년 이후 매도 시 취득가액과 필요경비를 증명하는 자료</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">입출금 내역(코인 주소·수량·일시)</td>
                  <td className="px-4 py-3">다른 거래소·지갑으로 옮긴 코인의 취득가액을 이어서 증명</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">2026년 말 보유 현황</td>
                  <td className="px-4 py-3">2027년 1월 1일 전 보유분의 의제취득가액 특례 적용 시 참고</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">계정 정보 화면</td>
                  <td className="px-4 py-3">어느 계정에서 무엇을 했는지 확인하는 보조 자료</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            해외 거래소는 국내 거래소처럼 국세청에 거래 자료를 정기 제출하지 않지만, 국가 간 가상자산 정보 자동교환
            체계(CARF) 도입이 예정되어 있습니다. CARF는 별도 글에서 자세히 다룰 예정입니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">관련 글 더 보기</h2>
          <div className="space-y-2 text-sm">
            {[
              { href: "/insights/overseas-exchange-tax", label: "바이낸스·바이비트 해외 거래소 코인도 세금 신고해야 할까?" },
              { href: "/insights/exchange-history-export", label: "업비트·빗썸 거래 내역 보관·추출 방법" },
              { href: "/insights/crypto-exchange-tax-reporting", label: "거래소는 국세청에 내 코인 거래를 어떻게 보고할까" },
              { href: "/insights/crypto-wallet-transfer-tax", label: "내 지갑 간 코인 이전, 세금이 발생할까?" },
              { href: "/insights/crypto-year-end-market-price", label: "2026년 12월 31일 '시가'는 어떻게 정해질까" },
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
              "2026년 10월 13일, 미신고 가상자산사업자 웹사이트 27곳 국내 접속 차단 결정 발표",
              "FIU 신고 사업자는 28곳, 그 외 내국인 대상 영업은 불법 (당국 입장)",
              "내가 쓰는 거래소가 신고 사업자인지 FIU 홈페이지에서 확인",
              "남은 자산 인출은 DAXA·국내 거래소 공지를 확인하고 진행",
              "차단 전에 거래 내역·입출금 내역·연말 보유 현황을 저장 (세금 증빙)",
              "거래소가 막혀도 2027년 이후 소득 신고 의무는 그대로",
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
          본 글은 2026년 10월 13일 금융위원회·금융정보분석원 발표와 관련 보도를 바탕으로 한 일반적인 정보이며,
          특정 사업자에 대한 평가나 법률·세무 조언이 아닙니다. 차단 대상과 인출 절차는 바뀔 수 있으므로 FIU와 DAXA의
          최신 안내를 확인하시기 바랍니다.
        </div>
      </article>

      {/* 관련 계산기 CTA */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-blue-900 mb-1">관련 도구</p>
        <p className="text-sm text-blue-700 mb-4">
          보유 코인 가격을 기록해 두고, 여러 거래소 손익을 합친 예상 세액을 확인해보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/calculators/year-end-price"
            className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition text-center"
          >
            코인 보유가격 기록기 →
          </Link>
          <Link
            href="/calculators/profit-loss-simulator"
            className="inline-block bg-white border border-blue-300 text-blue-700 text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition text-center"
          >
            코인 포트폴리오 통합 계산기 →
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
