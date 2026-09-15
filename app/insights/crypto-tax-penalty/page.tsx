import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "코인 세금 신고 안 하면? 가산세·불이익 완벽 정리 | 코인 인사이트",
  description:
    "2027년부터 코인 세금을 신고하지 않으면 무신고 가산세(20%)와 납부지연 가산세가 붙습니다. 국세청이 거래 내역을 파악하는 방법과 미신고 시 불이익을 정리했습니다.",
  keywords:
    "코인 세금 미신고, 가상자산 가산세, 무신고 가산세, 코인 세무조사, 가상자산 세금 불이익",
  openGraph: {
    title: "코인 세금 신고 안 하면? 가산세·불이익 완벽 정리",
    description:
      "2027년부터 코인 세금을 신고하지 않으면 무신고 가산세(20%)와 납부지연 가산세가 붙습니다. 국세청이 거래 내역을 파악하는 방법과 미신고 시 불이익을 정리했습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/crypto-tax-penalty",
  },
};

const ARTICLE = {
  title: "코인 세금 신고 안 하면? 가산세·불이익 완벽 정리",
  date: "2026-09-16",
  category: "세금신고",
};

export default function ArticleCryptoTaxPenalty() {
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
          2027년부터 코인 양도소득세가 시행되면 신고 의무도 함께 시작됩니다. 신고를 빠뜨리거나
          늦추면 원래 세액보다 훨씬 많은 가산세가 붙을 수 있습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">신고는 언제, 어떻게 해야 하나</h2>
          <p className="leading-relaxed mb-4">
            가상자산 양도소득세는 <strong>매년 1월 1일부터 12월 31일까지</strong> 발생한 손익을
            기준으로 계산합니다. 신고·납부 기한은 <strong>다음 해 5월</strong>로, 종합소득세
            신고 기간과 동일합니다.
          </p>
          <p className="leading-relaxed">
            예를 들어 2027년에 코인을 매도해 이익이 났다면, 2028년 5월까지 신고하고 세금을
            납부해야 합니다. 이 기한을 지키지 못하면 가산세가 발생합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">미신고·납부 지연 시 가산세</h2>
          <p className="leading-relaxed mb-6">
            가산세는 크게 세 종류입니다. 놓치면 원래 세금보다 훨씬 커질 수 있으니 반드시
            확인해 두세요.
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border border-red-200 overflow-hidden">
              <div className="bg-red-50 px-5 py-3 border-b border-red-200">
                <p className="font-bold text-red-800">① 무신고 가산세</p>
              </div>
              <div className="px-5 py-4 text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">일반 무신고 (단순 누락)</span>
                  <span className="font-semibold text-red-600">납부세액의 20%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">부정 무신고 (고의 은닉)</span>
                  <span className="font-semibold text-red-600">납부세액의 40%</span>
                </div>
                <p className="text-gray-500 pt-1">
                  신고 자체를 하지 않은 경우. 실수든 고의든 부과됩니다.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-orange-200 overflow-hidden">
              <div className="bg-orange-50 px-5 py-3 border-b border-orange-200">
                <p className="font-bold text-orange-800">② 과소신고 가산세</p>
              </div>
              <div className="px-5 py-4 text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">일반 과소신고</span>
                  <span className="font-semibold text-orange-600">과소 납부세액의 10%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">부정 과소신고</span>
                  <span className="font-semibold text-orange-600">과소 납부세액의 40%</span>
                </div>
                <p className="text-gray-500 pt-1">
                  신고는 했지만 실제보다 적게 신고한 경우.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-yellow-200 overflow-hidden">
              <div className="bg-yellow-50 px-5 py-3 border-b border-yellow-200">
                <p className="font-bold text-yellow-800">③ 납부지연 가산세</p>
              </div>
              <div className="px-5 py-4 text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">적용 방식</span>
                  <span className="font-semibold text-yellow-700">미납세액 × 경과일수 × 일 0.022%</span>
                </div>
                <p className="text-gray-500 pt-1">
                  연 환산 약 8%. 기한 내 납부하지 않은 기간만큼 매일 누적됩니다.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-5">
            <p className="font-semibold mb-3">실제 부담 예시</p>
            <p className="text-sm text-gray-600 mb-3">
              원래 납부세액이 100만원인데 신고를 1년 늦춘 경우 (일반 무신고 + 납부지연):
            </p>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span>원래 세액</span>
                <span className="font-semibold">100만원</span>
              </div>
              <div className="flex justify-between text-red-600">
                <span>무신고 가산세 (20%)</span>
                <span className="font-semibold">+20만원</span>
              </div>
              <div className="flex justify-between text-yellow-600">
                <span>납부지연 가산세 (1년, 약 8%)</span>
                <span className="font-semibold">+8만원</span>
              </div>
              <div className="flex justify-between border-t border-gray-300 pt-2 mt-2 font-bold text-red-700 text-base">
                <span>실제 납부 총액</span>
                <span>128만원</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">국세청은 어떻게 코인 거래를 파악하나</h2>
          <p className="leading-relaxed mb-4">
            "어차피 국세청이 모르겠지"라고 생각하기 쉽지만, 이미 파악 경로가 갖춰져 있습니다.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-2xl font-bold text-blue-200 leading-none mt-0.5 flex-shrink-0">01</span>
              <div>
                <p className="font-semibold mb-1">국내 거래소 의무 보고</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  특정금융정보법(특금법)에 따라 업비트·빗썸 등 국내 가상자산사업자(VASP)는
                  일정 금액 이상의 거래 정보를 금융정보분석원(FIU)에 보고할 의무가 있습니다.
                  세금 시행 이후에는 과세 목적의 자료 제출 의무도 확대될 예정입니다.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl font-bold text-blue-200 leading-none mt-0.5 flex-shrink-0">02</span>
              <div>
                <p className="font-semibold mb-1">해외 금융계좌 신고 의무</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  바이낸스·바이비트 등 해외 거래소에 보유한 가상자산이 연중 최고 잔액 기준
                  5억원을 초과하면 매년 6월 해외금융계좌 신고를 해야 합니다. 미신고 시 잔액의
                  최대 20%에 달하는 과태료가 부과됩니다.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl font-bold text-blue-200 leading-none mt-0.5 flex-shrink-0">03</span>
              <div>
                <p className="font-semibold mb-1">국가 간 금융정보 교환</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  한국은 OECD의 공동보고기준(CRS)에 따라 100개국 이상과 금융계좌 정보를
                  자동으로 교환합니다. 해외 거래소가 CRS 적용 국가에 있다면 계좌 정보가
                  국세청에 전달될 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">자진신고 vs 세무조사 후 적발, 차이는 크다</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">구분</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">자진신고 (기한 후 신고)</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">세무조사 후 적발</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">가산세 감면</td>
                  <td className="px-4 py-3 text-green-600">최대 50% 감면 가능</td>
                  <td className="px-4 py-3 text-red-600">감면 없음</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">형사 처벌 위험</td>
                  <td className="px-4 py-3 text-green-600">낮음</td>
                  <td className="px-4 py-3 text-red-600">고의성 인정 시 조세포탈죄 적용 가능</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">추가 조사</td>
                  <td className="px-4 py-3 text-green-600">일반적으로 없음</td>
                  <td className="px-4 py-3 text-red-600">전반적인 세무조사로 확대될 수 있음</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            기한을 놓쳤더라도 스스로 신고(기한 후 신고)하면 가산세 부담을 줄일 수 있습니다.
            발각되기 전에 자진신고하는 것이 언제나 유리합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">지금 미리 해두어야 할 준비</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <ul className="space-y-3 text-sm text-blue-900">
              <li className="flex gap-2">
                <span className="font-bold flex-shrink-0">✓</span>
                <span>모든 거래소(국내·해외)의 거래 내역을 지금부터 주기적으로 내보내 보관</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold flex-shrink-0">✓</span>
                <span>해외 거래소 잔액이 연중 5억원을 초과한다면 해외금융계좌 신고 대상인지 확인</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold flex-shrink-0">✓</span>
                <span>매년 5월 신고 기한을 캘린더에 미리 등록</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold flex-shrink-0">✓</span>
                <span>복잡한 거래(DeFi, 스테이킹, 에어드롭 등)는 세무사 상담으로 사전 정리</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 면책 고지 */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-500 leading-relaxed">
          본 글은 일반적인 정보 제공을 목적으로 작성되었으며 세무 조언이 아닙니다. 가산세율·신고
          기한은 세법 개정에 따라 변경될 수 있습니다. 실제 신고 전 반드시 세무 전문가와 상담하시기
          바랍니다.
        </div>
      </article>

      {/* 관련 계산기 CTA */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-blue-900 mb-1">관련 계산기</p>
        <p className="text-sm text-blue-700 mb-4">
          신고 전에 예상 세액을 미리 계산해 납부 준비를 해두세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/calculators/deemed-acquisition-price"
            className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition text-center"
          >
            가상화폐 세금 계산기 →
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
