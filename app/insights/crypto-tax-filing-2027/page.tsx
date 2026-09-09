import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "2027년 코인 세금 신고 방법 완벽 정리 | 코인 인사이트",
  description:
    "2027년부터 시작되는 가상자산 양도소득세, 어떻게 신고해야 할까요? 신고 방법, 기한, 필요 서류, 종합소득세와의 차이까지 정리했습니다.",
  keywords:
    "코인 세금 신고 방법, 가상자산 양도소득세 신고, 홈택스 코인 신고, 2027 가상화폐 세금, 종합소득세 신고",
  openGraph: {
    title: "2027년 코인 세금 신고 방법 완벽 정리",
    description:
      "2027년부터 시작되는 가상자산 양도소득세, 어떻게 신고해야 할까요? 신고 방법, 기한, 필요 서류, 종합소득세와의 차이까지 정리했습니다.",
    type: "article",
  },
};

const ARTICLE = {
  title: "2027년 코인 세금 신고 방법 완벽 정리",
  date: "2026-09-13",
  category: "신고 준비",
};

export default function ArticleCryptoTaxFiling2027() {
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
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 text-purple-700">
            {ARTICLE.category}
          </span>
          <span className="text-sm text-gray-400">{formatDate(ARTICLE.date)}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
          {ARTICLE.title}
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          2027년부터 시작되는 가상자산 양도소득세, 어떻게 신고해야 할까요?
          신고 방법·기한·필요 서류·종합소득세와의 차이까지 정리했습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">신고 대상자는 누구인가요?</h2>
          <p className="leading-relaxed mb-4">
            2027년 1월 1일 이후 가상자산을 <strong>매도해 양도차익이 발생한 사람</strong>이라면
            모두 신고 대상입니다. 연간 양도차익이 기본공제 250만원 이하라면 납부세액은 0원이지만,
            신고 의무가 면제되는지는 세부 규정을 확인해야 합니다.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="font-semibold text-blue-900 mb-3">신고 대상 여부 체크</p>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>✓ 업비트·빗썸 등 국내 거래소에서 코인을 매도한 경우</li>
              <li>✓ 해외 거래소에서 코인을 매도한 경우</li>
              <li>✓ P2P로 코인을 거래한 경우</li>
              <li>✓ 코인으로 다른 코인을 교환(스왑)한 경우</li>
              <li className="text-blue-600">△ 스테이킹·에어드롭 수익 — 별도 처리 필요</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">신고 기한 및 납부 시기</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">항목</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">내용</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">과세 기간</td>
                  <td className="px-4 py-3">매년 1월 1일 ~ 12월 31일</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">최초 신고 기간</td>
                  <td className="px-4 py-3">2028년 5월 1일 ~ 5월 31일 (2027년 귀속분)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">신고 방법</td>
                  <td className="px-4 py-3">홈택스(국세청 전자신고) 또는 세무서 방문</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">납부 기한</td>
                  <td className="px-4 py-3">신고 기한과 동일 (5월 31일까지)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">분리 과세 여부</td>
                  <td className="px-4 py-3">종합소득과 분리하여 별도 신고</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            가상자산 양도소득세는 종합소득세(근로소득·사업소득 등)와 <strong>별도로 신고</strong>합니다.
            근로소득자가 연말정산을 이미 했더라도, 코인 수익이 있다면 5월에 추가 신고가 필요합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">신고에 필요한 서류</h2>
          <div className="space-y-3">
            {[
              {
                title: "거래소 거래 내역",
                desc: "업비트·빗썸 등 이용 거래소별 전체 매수·매도 내역 (CSV 또는 XLSX). 수수료 내역 포함 파일이어야 합니다.",
                required: true,
              },
              {
                title: "취득가액 증빙 서류",
                desc: "의제취득가액 특례 적용 시 2026년 12월 31일 시가 증빙 (거래소 스크린샷, 공시자료 등).",
                required: true,
              },
              {
                title: "수수료 내역",
                desc: "거래 수수료를 비용으로 처리할 경우 항목별 내역.",
                required: false,
              },
              {
                title: "해외 거래소 내역 및 환율 자료",
                desc: "해외 거래소 이용자는 거래 시점의 KRW 환산 자료도 필요합니다.",
                required: false,
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50">
                <span className={`flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded h-fit mt-0.5 ${
                  item.required
                    ? "bg-red-100 text-red-600"
                    : "bg-gray-200 text-gray-500"
                }`}>
                  {item.required ? "필수" : "선택"}
                </span>
                <div>
                  <p className="font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">홈택스 신고 절차 (예상)</h2>
          <p className="leading-relaxed mb-4">
            국세청은 2027년 신고 시즌에 맞춰 홈택스에 가상자산 신고 메뉴를 별도 제공할 예정입니다.
            현재 확정된 세부 UI는 공개되지 않았지만, 일반적인 절차는 다음과 같을 것으로 예상됩니다.
          </p>
          <div className="space-y-3">
            {[
              { step: "01", title: "홈택스 로그인", desc: "hometax.go.kr → 공동인증서 또는 간편인증 로그인" },
              { step: "02", title: "가상자산 양도소득세 신고 메뉴 선택", desc: "신고/납부 → 세금신고 → 가상자산 양도소득세 (2028년 5월 오픈 예정)" },
              { step: "03", title: "거래소 연동 또는 직접 입력", desc: "주요 거래소는 홈택스 연동이 지원될 예정입니다. 지원 안 되는 경우 직접 입력" },
              { step: "04", title: "취득가액·수수료 입력", desc: "의제취득가액 특례 선택 및 비용 입력" },
              { step: "05", title: "계산 결과 확인 후 신고 제출", desc: "납부세액 확인 → 제출 → 납부 (카드·계좌이체 등)" },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <span className="flex-shrink-0 text-sm font-bold text-blue-400 mt-0.5 w-6">
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">
            * 홈택스 가상자산 신고 메뉴의 실제 구성은 2027년 말~2028년 초 국세청 발표를 통해 확정됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">기한 내 신고하지 않으면?</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">종류</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">가산세율</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">비고</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">무신고 가산세</td>
                  <td className="px-4 py-3 text-red-600 font-semibold">납부세액 × 20%</td>
                  <td className="px-4 py-3">일반 무신고 기준</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">납부 지연 가산세</td>
                  <td className="px-4 py-3 text-red-600 font-semibold">일 0.022%</td>
                  <td className="px-4 py-3">미납 기간에 비례</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">과소신고 가산세</td>
                  <td className="px-4 py-3 text-amber-600 font-semibold">과소납부세액 × 10%</td>
                  <td className="px-4 py-3">일부만 신고한 경우</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-500">
            신고를 놓쳤더라도 <strong>기한 후 신고</strong>를 하면 가산세 일부를 감면받을 수 있습니다.
            발견 즉시 신고하는 것이 방치하는 것보다 유리합니다.
          </p>
        </section>

        {/* 면책 고지 */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-500 leading-relaxed">
          본 글은 일반적인 정보 제공을 목적으로 작성되었으며 세무 조언이 아닙니다. 가상자산 양도소득세
          세부 신고 방법은 2027년 국세청 고시에 따라 일부 달라질 수 있습니다. 실제 신고 전에 반드시
          세무 전문가와 상담하시기 바랍니다.
        </div>
      </article>

      {/* 관련 계산기 CTA */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-blue-900 mb-1">관련 계산기</p>
        <p className="text-sm text-blue-700 mb-4">
          신고 전 예상 세액을 미리 계산해 납부 금액을 파악해두세요.
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
