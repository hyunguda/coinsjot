import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "2026년 12월 31일 '시가'는 어떻게 정해질까 — 의제취득가액 기준가격 계산법 정리 | 코인 인사이트",
  description:
    "의제취득가액 특례에 쓰이는 '2026년 12월 31일 당시의 시가'는 12월 31일 종가가 아니라 2027년 1월 1일 0시에 거래소가 공시한 가격입니다. 소득세법 시행령 제88조 기준으로 계산 방법과 지금 준비할 기록을 정리했습니다.",
  keywords:
    "2026년 12월 31일 시가, 의제취득가액 시가, 코인 시가 기준, 가상자산 시가 계산, 시가고시 가상자산사업자, 소득세법 시행령 제88조",
  openGraph: {
    title: "2026년 12월 31일 '시가'는 어떻게 정해질까 — 의제취득가액 기준가격 계산법 정리",
    description:
      "의제취득가액 특례에 쓰이는 '2026년 12월 31일 당시의 시가'는 12월 31일 종가가 아니라 2027년 1월 1일 0시에 거래소가 공시한 가격입니다. 소득세법 시행령 제88조 기준으로 계산 방법과 지금 준비할 기록을 정리했습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/crypto-year-end-market-price",
  },
};

const ARTICLE = {
  title: "2026년 12월 31일 '시가'는 어떻게 정해질까 — 의제취득가액 기준가격 계산법 정리",
  date: "2026-10-07",
  category: "세금",
};

export default function ArticleCryptoYearEndMarketPrice() {
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
          2026년 이전부터 갖고 있던 코인은 실제 취득가액과 &lsquo;2026년 12월 31일 당시의 시가&rsquo; 중
          큰 금액을 취득가액으로 인정받습니다. 그런데 이 &lsquo;시가&rsquo;는 12월 31일 종가가 아닙니다.
          법령에 정해진 계산 방법을 정리했습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">결론부터: 2027년 1월 1일 0시 공시가격</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-sm text-blue-900 leading-relaxed mb-4">
            의제취득가액에 쓰이는 시가는 <strong>2027년 1월 1일 0시 현재 거래소가 코인별로 공시한 가격</strong>입니다.
            국세청이 고시하는 거래소(시가고시 가상자산사업자)에서 거래되는 코인은 그 거래소들 가격의
            <strong> 평균</strong>을 씁니다.
          </div>
          <p className="leading-relaxed">
            근거는 소득세법 제37조 제5항(2027년 1월 1일 전 보유분의 취득가액 특례)과 같은 법 시행령
            제88조 제2항(2026년 12월 31일 당시의 시가 계산 방법)입니다. 12월 31일 하루 동안의 종가, 고가,
            일평균가를 고르는 방식이 아니라 연도가 바뀌는 순간의 공시가격 하나로 정해집니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">코인 종류에 따라 두 가지로 나뉩니다</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">구분</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">2026년 12월 31일 당시의 시가</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">시가고시 가상자산사업자가 취급하는 코인</td>
                  <td className="px-4 py-3">각 시가고시 가상자산사업자가 2027년 1월 1일 0시 현재 공시한 가격의 평균</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">그 외의 코인</td>
                  <td className="px-4 py-3">시가고시 사업자가 아닌 가상자산사업자(이에 준하는 사업자 포함)가 2027년 1월 1일 0시에 공시한 가격</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            소득세법 시행령 제88조 제2항. 어느 거래소가 시가고시 가상자산사업자에 해당하는지는 국세청
            고시로 정해지므로, 시행 전에 국세청 안내를 확인하세요. 참고로 상속·증여세 평가용으로는
            업비트·빗썸·코빗·코인원 4곳이 고시되어 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">예시로 계산해보기</h2>
          <p className="leading-relaxed mb-4">
            2023년에 비트코인 1개를 7,000만원에 샀고, 시가고시 대상 거래소 4곳이 2027년 1월 1일 0시에
            아래 가격을 공시했다고 가정합니다.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">거래소</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">2027년 1월 1일 0시 공시가격</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">A 거래소</td>
                  <td className="px-4 py-3 text-right">1억 2,050만원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">B 거래소</td>
                  <td className="px-4 py-3 text-right">1억 2,000만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">C 거래소</td>
                  <td className="px-4 py-3 text-right">1억 1,980만원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">D 거래소</td>
                  <td className="px-4 py-3 text-right">1억 1,970만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium font-semibold">평균 (2026년 12월 31일 당시의 시가)</td>
                  <td className="px-4 py-3 text-right font-semibold">1억 2,000만원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="leading-relaxed mb-4">
            취득가액은 실제 취득가액 7,000만원과 시가 1억 2,000만원 중 큰 금액인 <strong>1억 2,000만원</strong>이
            됩니다. 2027년에 1억 3,000만원에 팔았다면(다른 거래·수수료 없음) 다음과 같습니다.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">항목</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">특례 적용</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">특례 미적용 (가정)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">취득가액</td>
                  <td className="px-4 py-3">1억 2,000만원</td>
                  <td className="px-4 py-3">7,000만원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">소득금액</td>
                  <td className="px-4 py-3">1,000만원</td>
                  <td className="px-4 py-3">6,000만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">과세표준 (기본공제 250만원 차감)</td>
                  <td className="px-4 py-3">750만원</td>
                  <td className="px-4 py-3">5,750만원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium font-semibold">예상 세액 (22%)</td>
                  <td className="px-4 py-3 font-semibold">165만원</td>
                  <td className="px-4 py-3 font-semibold">1,265만원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            가장 높은 가격을 공시한 거래소 하나(1억 2,050만원)를 골라 쓸 수는 없습니다. 법령은 공시가격의
            평균을 쓰도록 정하고 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">자주 헷갈리는 부분</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">오해</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">실제</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">12월 31일 종가를 쓴다</td>
                  <td className="px-4 py-3">2027년 1월 1일 0시 현재 공시된 가격을 씁니다</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">내가 쓰는 거래소 가격만 보면 된다</td>
                  <td className="px-4 py-3">시가고시 대상 코인은 시가고시 사업자들의 가격 평균입니다</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">거래소 중 가장 높은 가격을 고를 수 있다</td>
                  <td className="px-4 py-3">고를 수 없습니다. 평균(그 외 코인은 해당 거래소 공시가격)으로 정해집니다</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">상속·증여 평가와 같은 방식이다</td>
                  <td className="px-4 py-3">다릅니다. 상속·증여는 평가기준일 전·이후 각 1개월 일평균가액의 평균입니다</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">시가가 낮으면 손해를 본다</td>
                  <td className="px-4 py-3">실제 취득가액과 비교해 큰 금액이 적용되므로 불리해지지 않습니다</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">해외 거래소에만 있는 코인은?</h2>
          <p className="leading-relaxed mb-4">
            국내 시가고시 거래소에서 거래되지 않는 코인은 &lsquo;그 외의 가상자산&rsquo;에 해당해, 해당 코인을
            취급하는 다른 가상자산사업자가 2027년 1월 1일 0시에 공시한 가격을 씁니다.
          </p>
          <p className="leading-relaxed">
            다만 달러나 테더(USDT)로 표시된 가격의 원화 환산 방법, 여러 해외 거래소 가격이 다른 경우의
            처리 등 세부 기준은 아직 구체적으로 안내되지 않았습니다. 국세청 고시와 후속 안내를 확인하고,
            그 전까지는 아래 기록을 최대한 남겨두는 것이 안전합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">지금부터 준비해둘 기록</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "2026년 12월 31일 기준 보유 현황", desc: "거래소별·지갑별로 코인 종류와 수량을 정리합니다. 개인 지갑에 있는 코인도 포함합니다." },
              { step: "2", title: "2027년 1월 1일 0시 전후 시세 화면", desc: "보유 코인의 시세 화면을 시각이 보이게 캡처해 둡니다. 해외 거래소만 쓰는 코인은 특히 중요합니다." },
              { step: "3", title: "실제 취득가액 기록", desc: "특례는 실제 취득가액과 시가 중 큰 금액을 쓰므로, 시가보다 비싸게 산 코인은 매수 기록이 있어야 실제 취득가액을 인정받습니다." },
              { step: "4", title: "국세청 고시 확인", desc: "시가고시 사업자 명단과 세부 산정 기준이 고시되면 내 코인이 어느 쪽에 해당하는지 확인합니다." },
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
          <h2 className="text-2xl font-bold mb-4">관련 글 더 보기</h2>
          <div className="space-y-2 text-sm">
            {[
              { href: "/insights/deemed-acquisition-price-special", label: "의제취득가액 특례란? 계산 방법과 절세 전략" },
              { href: "/insights/crypto-no-acquisition-record", label: "취득가액 기록 없는 코인, 세금 어떻게 계산할까?" },
              { href: "/insights/exchange-history-export", label: "업비트·빗썸 거래 내역 보관·추출 방법" },
              { href: "/insights/crypto-inheritance-tax", label: "상속받은 코인의 평가 방법 (전·이후 각 1개월 평균)" },
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
              "의제취득가액의 시가 = 2027년 1월 1일 0시 현재 거래소 공시가격",
              "시가고시 사업자가 취급하는 코인은 그 거래소들 가격의 평균",
              "가장 높은 거래소 가격을 골라 쓸 수 없음",
              "실제 취득가액과 비교해 큰 금액이 취득가액",
              "상속·증여 평가(전·이후 각 1개월 평균)와는 다른 방식",
              "보유 현황·시세 화면·매수 기록을 연말 전에 정리",
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
          본 글은 소득세법 및 같은 법 시행령, 국세청 안내 자료를 바탕으로 한 일반적인 정보이며 세무 조언이
          아닙니다. 시가고시 사업자 명단과 세부 기준은 국세청 고시에 따라 달라질 수 있으므로 실제 신고 시에는
          국세청 안내를 확인하거나 세무사와 상담하시기 바랍니다.
        </div>
      </article>

      {/* 관련 계산기 CTA */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-blue-900 mb-1">관련 계산기</p>
        <p className="text-sm text-blue-700 mb-4">
          보유 코인 가격을 기록해 두고, 특례 적용 시 세액을 미리 비교해보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/calculators/year-end-price"
            className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition text-center"
          >
            코인 보유가격 기록기 →
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
