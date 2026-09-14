import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "업비트·빗썸 거래 내역 보관·추출 방법 | 코인 인사이트",
  description:
    "세금 신고를 위해 꼭 필요한 거래 내역, 언제 어떻게 내보내야 할까요? 업비트·빗썸 기준 CSV 추출 방법과 보관 요령을 정리했습니다.",
  keywords:
    "업비트 거래내역 다운로드, 빗썸 거래내역 CSV, 코인 거래 기록 보관, 가상자산 세금 신고 준비, 코인 매매내역",
  openGraph: {
    title: "업비트·빗썸 거래 내역 보관·추출 방법",
    description:
      "세금 신고를 위해 꼭 필요한 거래 내역, 언제 어떻게 내보내야 할까요? 업비트·빗썸 기준 CSV 추출 방법과 보관 요령을 정리했습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/exchange-history-export",
  },
};

const ARTICLE = {
  title: "업비트·빗썸 거래 내역 보관·추출 방법",
  date: "2026-09-12",
  category: "신고 준비",
};

export default function ArticleExchangeHistoryExport() {
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
          세금 신고를 위해 꼭 필요한 거래 내역, 언제 어떻게 내보내야 할까요?
          업비트·빗썸 기준 추출 방법과 보관 요령을 정리했습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">왜 지금 바로 저장해야 하나요?</h2>
          <p className="leading-relaxed mb-4">
            2027년부터 가상자산 양도소득세가 시행되면 <strong>모든 매수·매도 기록</strong>이
            세금 계산의 근거가 됩니다. 문제는 거래소가 내역을 영구 보관해주지 않는다는 점입니다.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
            <p className="font-semibold text-amber-900 mb-2">지금 당장 저장해야 하는 이유</p>
            <ul className="space-y-2 text-sm text-amber-800">
              <li>· 거래소는 일반적으로 <strong>최근 1~3년치</strong> 내역만 제공합니다</li>
              <li>· 서비스 종료·합병 시 과거 내역 복구가 불가능할 수 있습니다</li>
              <li>· 취득가액 소명은 <strong>납세자 의무</strong>입니다 — 내역이 없으면 불이익이 생깁니다</li>
              <li>· 가장 오래된 매수 기록일수록 지금 당장 꺼내둬야 합니다</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">업비트 거래 내역 추출 방법</h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "업비트 앱 또는 웹 로그인",
                desc: "PC 웹(upbit.com)에서 진행하는 것이 편리합니다.",
              },
              {
                step: "2",
                title: "우측 상단 프로필 → 거래내역",
                desc: "메뉴에서 '투자내역' 또는 '주문내역'을 선택합니다.",
              },
              {
                step: "3",
                title: "기간 설정 후 엑셀/CSV 다운로드",
                desc: "조회 기간을 최대한 길게 잡고 '다운로드' 버튼을 클릭합니다. 한 번에 전체 기간이 안 된다면 연도별로 나눠서 받습니다.",
              },
              {
                step: "4",
                title: "수수료 항목 포함 여부 확인",
                desc: "다운받은 파일에 수수료 컬럼이 있는지 확인합니다. 세금 계산 시 수수료도 비용으로 처리할 수 있습니다.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">
            * 업비트 UI는 앱 버전에 따라 메뉴 위치가 다를 수 있습니다. &apos;거래내역&apos; 또는 &apos;주문내역&apos;으로
            검색하면 찾을 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">빗썸 거래 내역 추출 방법</h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "빗썸 웹(bithumb.com) 로그인",
                desc: "PC 웹에서 진행하는 것이 편리합니다.",
              },
              {
                step: "2",
                title: "마이페이지 → 거래내역",
                desc: "상단 메뉴 또는 마이페이지에서 '거래내역'을 선택합니다.",
              },
              {
                step: "3",
                title: "기간 선택 후 CSV 다운로드",
                desc: "조회 기간을 설정하고 CSV 또는 엑셀로 내보냅니다. 빗썸도 일반적으로 연도별 조회를 권장합니다.",
              },
              {
                step: "4",
                title: "원화 입출금 내역도 함께 보관",
                desc: "거래 내역 외에도 입출금 내역을 함께 보관하면 자금 흐름을 추적할 때 도움이 됩니다.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {item.step}
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
          <h2 className="text-2xl font-bold mb-4">보관 방법과 주기</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">항목</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">권장 방법</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">파일 형식</td>
                  <td className="px-4 py-3">CSV 또는 XLSX — 엑셀로 열어 검토 가능한 형식</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">저장 위치</td>
                  <td className="px-4 py-3">로컬 폴더 + 클라우드(구글 드라이브 등) 이중 보관</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">추출 주기</td>
                  <td className="px-4 py-3">연 1회 이상 (연말 결산 시 또는 세금 신고 전)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">보관 기간</td>
                  <td className="px-4 py-3">최소 5년 (소득세법상 장부 보존 의무 기간)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">파일명 규칙</td>
                  <td className="px-4 py-3">거래소명_연도_종류.csv (예: upbit_2026_trade.csv)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">해외 거래소 이용자라면</h2>
          <p className="leading-relaxed mb-4">
            바이낸스, OKX 등 해외 거래소도 자체 거래 내역 다운로드 기능을 제공합니다. 다만 해외
            거래소 수익은 <strong>외화 환산</strong>이 추가로 필요하고, 세법 처리가 더 복잡할 수
            있습니다.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="font-semibold text-blue-900 mb-2">해외 거래소 추가 체크포인트</p>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>· 거래 시점의 USD/KRW 환율 기록 (환율 소명 필요)</li>
              <li>· 선물·파생상품 내역은 별도 분류</li>
              <li>· 스테이블코인 스왑도 과세 대상 여부 확인 필요</li>
              <li>· 복잡한 경우 반드시 세무사 상담 권장</li>
            </ul>
          </div>
        </section>

        {/* 면책 고지 */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-500 leading-relaxed">
          본 글은 일반적인 정보 제공을 목적으로 작성되었으며 세무 조언이 아닙니다. 거래소
          인터페이스와 내역 다운로드 방식은 서비스 업데이트에 따라 변경될 수 있습니다.
          실제 신고 전에 반드시 세무 전문가와 상담하시기 바랍니다.
        </div>
      </article>

      {/* 관련 계산기 CTA */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-blue-900 mb-1">관련 계산기</p>
        <p className="text-sm text-blue-700 mb-4">
          거래 내역을 정리했다면, 예상 세액을 미리 계산해보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/calculators/profit-loss-simulator"
            className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition text-center"
          >
            코인 포트폴리오 통합 계산기 →
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
