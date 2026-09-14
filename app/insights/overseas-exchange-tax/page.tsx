import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "바이낸스·바이비트 해외 거래소 코인도 세금 신고해야 할까? | 코인 인사이트",
  description:
    "국내 거래소와 달리 해외 거래소는 거래 내역을 세무당국에 보고하지 않습니다. 그래도 세금 신고 의무는 있습니다. 신고 방법과 주의사항을 정리했습니다.",
  keywords:
    "바이낸스 세금, 바이비트 세금, 해외 거래소 코인 세금, 해외 가상자산 신고, 코인 세금 신고 의무",
  openGraph: {
    title: "바이낸스·바이비트 해외 거래소 코인도 세금 신고해야 할까?",
    description:
      "국내 거래소와 달리 해외 거래소는 거래 내역을 세무당국에 보고하지 않습니다. 그래도 세금 신고 의무는 있습니다. 신고 방법과 주의사항을 정리했습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/overseas-exchange-tax",
  },
};

const ARTICLE = {
  title: "바이낸스·바이비트 해외 거래소 코인도 세금 신고해야 할까?",
  date: "2026-09-14",
  category: "세금신고",
};

export default function ArticleOverseasExchangeTax() {
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
          국내 거래소와 달리 해외 거래소는 거래 내역을 세무당국에 보고하지 않습니다.
          그래도 세금 신고 의무는 있습니다. 신고 방법과 주의사항을 정리했습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">해외 거래소는 신고 안 해도 되지 않나요?</h2>
          <p className="leading-relaxed mb-4">
            많은 투자자들이 &quot;바이낸스나 바이비트는 국내 거래소가 아니니까 세금 신고를 안 해도
            되는 것 아닌가&quot;라고 생각합니다. 결론부터 말하면 <strong>틀렸습니다.</strong>
          </p>
          <p className="leading-relaxed">
            한국 세법은 거주자의 <strong>전 세계 소득</strong>에 대해 과세 의무를 부여합니다.
            해외 거래소를 이용했더라도, 한국에 거주하는 투자자라면 해외에서 발생한 가상자산 차익도
            신고 대상입니다. 거래소가 어디에 있는지는 관계가 없습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">국내 vs 해외 거래소, 세금 처리 차이</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">구분</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">국내 거래소</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">해외 거래소</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">과세 여부</td>
                  <td className="px-4 py-3">대상</td>
                  <td className="px-4 py-3">대상 (동일)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">거래 내역 보고</td>
                  <td className="px-4 py-3">거래소가 과세당국에 제출</td>
                  <td className="px-4 py-3">투자자가 직접 관리·제출</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">거래 내역 추출</td>
                  <td className="px-4 py-3">업비트·빗썸 CSV 다운로드</td>
                  <td className="px-4 py-3">바이낸스·바이비트 내 직접 다운로드</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">미신고 적발 가능성</td>
                  <td className="px-4 py-3">높음 (거래소 자동 보고)</td>
                  <td className="px-4 py-3">낮지만, 점점 높아지는 추세</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            국내 거래소는 특정금융정보법에 따라 거래 내역을 금융당국에 제출해야 합니다.
            해외 거래소는 이 의무가 없지만, OECD 주도의 CARF(Crypto-Asset Reporting Framework) 도입이
            진행 중이어서 향후 해외 거래소 정보도 자동 교환될 가능성이 높습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">해외 거래소 이용 시 추가로 챙겨야 할 것</h2>
          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "해외 금융계좌 신고 (잔액 5억 원 초과 시)",
                desc: "매년 6월 1일 기준으로 해외 거래소에 보유한 가상자산 잔액이 5억 원을 초과하면, 해외 금융계좌 신고 의무가 발생합니다. 신고 기한은 매년 6월 30일입니다. 미신고 시 과태료가 부과됩니다.",
              },
              {
                num: "02",
                title: "거래 내역을 직접 보관·정리해야 합니다",
                desc: "국내 거래소는 세금 신고용 자료를 어느 정도 제공하지만, 해외 거래소는 투자자가 직접 CSV를 내려받아 관리해야 합니다. 바이낸스의 경우 '거래 내역 > 주문 내역 > 내보내기' 메뉴에서 다운로드할 수 있습니다.",
              },
              {
                num: "03",
                title: "원화 환산 기준을 맞춰야 합니다",
                desc: "해외 거래소는 USD나 USDT 기준으로 거래가 이루어집니다. 세금 계산을 위해 각 거래 시점의 환율(기준환율)을 적용해 원화로 환산해야 합니다. 서울외국환중개 고시 환율을 기준으로 사용하는 것이 일반적입니다.",
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-4">
                <span className="text-2xl font-bold text-blue-200 leading-none mt-0.5">
                  {item.num}
                </span>
                <div>
                  <p className="font-semibold mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">&quot;어차피 모르겠지&quot;는 통하지 않을 수 있습니다</h2>
          <p className="leading-relaxed mb-4">
            해외 거래소 이용자 중 일부는 &quot;국내 세무당국이 해외 거래 내역을 어떻게 알겠어&quot;라고
            생각합니다. 하지만 몇 가지 경로로 과세당국이 파악할 수 있습니다.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm space-y-3">
            <p>· <strong>원화 출금 추적:</strong> 해외 거래소에서 국내 은행 계좌로 원화를 송금받는 경우, 외환거래 내역이 금융당국에 보고됩니다.</p>
            <p>· <strong>국가 간 정보 교환:</strong> OECD CRS(공통보고기준)를 통해 일부 국가와 금융정보가 자동 교환되고 있으며, 가상자산으로 범위가 확대되는 추세입니다.</p>
            <p>· <strong>CARF 도입:</strong> G20이 합의한 가상자산 과세정보 자동교환 표준이 각국에 도입되면 해외 거래소 정보도 공유됩니다.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">정리: 해외 거래소 이용자 체크리스트</h2>
          <div className="space-y-2">
            {[
              "바이낸스·바이비트 등 해외 거래소 거래 내역 CSV 보관",
              "거래 시점별 원화 환율 기록",
              "연간 양도차익 계산 후 기본공제(250만원) 적용",
              "6월 1일 기준 잔액 5억 원 초과 여부 확인 → 해외 금융계좌 신고(6/30)",
              "세금 신고 기한(5월 말) 내 양도소득세 신고",
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
          본 글은 일반적인 정보 제공을 목적으로 작성되었으며 세무 조언이 아닙니다.
          해외 거래소 관련 세금 처리는 개인 상황에 따라 달라질 수 있으므로, 실제 신고 전에
          세무 전문가와 상담하시기 바랍니다.
        </div>
      </article>

      {/* 관련 계산기 CTA */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-blue-900 mb-1">관련 계산기</p>
        <p className="text-sm text-blue-700 mb-4">
          여러 거래소에 걸친 코인 손익을 합산해 실제 납부세액을 계산해보세요.
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
