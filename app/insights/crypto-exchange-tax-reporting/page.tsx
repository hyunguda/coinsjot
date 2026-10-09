import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "거래소는 국세청에 내 코인 거래를 어떻게 보고할까 — 거래명세서·거래집계표 제출 일정 정리 | 코인 인사이트",
  description:
    "2027년 1월 1일 거래분부터 국내 가상자산사업자는 거래명세서와 거래집계표를 국세청에 제출합니다. 누가, 무엇을, 언제 제출하는지와 투자자가 알아둘 점을 소득세법 제164조의4 기준으로 정리했습니다.",
  keywords:
    "가상자산 거래명세서, 가상자산 거래집계표, 거래소 국세청 보고, 코인 거래내역 국세청, 소득세법 제164조의4, 코인 세금 거래소 제출",
  openGraph: {
    title: "거래소는 국세청에 내 코인 거래를 어떻게 보고할까 — 거래명세서·거래집계표 제출 일정 정리",
    description:
      "2027년 1월 1일 거래분부터 국내 가상자산사업자는 거래명세서와 거래집계표를 국세청에 제출합니다. 누가, 무엇을, 언제 제출하는지와 투자자가 알아둘 점을 소득세법 제164조의4 기준으로 정리했습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/crypto-exchange-tax-reporting",
  },
};

const ARTICLE = {
  title: "거래소는 국세청에 내 코인 거래를 어떻게 보고할까 — 거래명세서·거래집계표 제출 일정 정리",
  date: "2026-10-10",
  category: "세금",
};

export default function ArticleCryptoExchangeTaxReporting() {
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
          &lsquo;내가 신고하지 않으면 국세청이 모르지 않을까?&rsquo; 2027년부터는 그렇지 않습니다.
          국내 거래소가 이용자의 거래 자료를 정기적으로 국세청에 제출하기 때문입니다. 누가, 무엇을,
          언제 제출하는지 법령 기준으로 정리했습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">한눈에 보기</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-sm text-blue-900 leading-relaxed space-y-2">
            <p><strong>누가:</strong> 특정금융정보법에 따라 신고가 수리된 국내 가상자산사업자(거래소 등)</p>
            <p><strong>무엇을:</strong> 가상자산 거래명세서(분기별)와 거래집계표(연간)</p>
            <p><strong>언제부터:</strong> 2027년 1월 1일 이후 거래분</p>
            <p><strong>언제까지:</strong> 분기 종료일의 다음다음 달 말일</p>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            근거: 소득세법 제164조의4, 같은 법 시행령 제216조의4, 국세청 &lsquo;가상자산사업자 거래자료 제출&rsquo; 안내.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">누가 제출하나요?</h2>
          <p className="leading-relaxed mb-4">
            제출 의무는 투자자가 아니라 <strong>가상자산사업자</strong>에게 있습니다. 「특정 금융거래정보의 보고 및
            이용 등에 관한 법률」(특금법) 제7조에 따라 금융정보분석원에 신고가 수리된 사업자가 대상이며,
            우리가 흔히 쓰는 원화마켓 거래소가 여기에 해당합니다.
          </p>
          <p className="leading-relaxed">
            특금법은 가상자산사업자를 가상자산의 매도·매수, 다른 가상자산과의 교환, 이전, 보관·관리,
            이런 거래의 중개·알선 등을 영업으로 하는 자로 정의합니다. 따라서 거래소뿐 아니라 신고가 수리된
            보관(커스터디)·지갑 사업자도 범위에 들어갈 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">제출 일정</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">구분</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">대상 기간</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">제출 기한</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">거래명세서</td>
                  <td className="px-4 py-3">1분기 (1월~3월)</td>
                  <td className="px-4 py-3">5월 말일</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">거래명세서</td>
                  <td className="px-4 py-3">2분기 (4월~6월)</td>
                  <td className="px-4 py-3">8월 말일</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">거래명세서</td>
                  <td className="px-4 py-3">3분기 (7월~9월)</td>
                  <td className="px-4 py-3">11월 말일</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">거래명세서</td>
                  <td className="px-4 py-3">4분기 (10월~12월)</td>
                  <td className="px-4 py-3">다음 해 2월 말일</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">거래집계표</td>
                  <td className="px-4 py-3">연간 (1월~12월)</td>
                  <td className="px-4 py-3">다음 해 2월 말일</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="leading-relaxed">
            과세 첫해인 2027년 기준으로 보면, 2027년 1분기 거래 자료가 2027년 5월 말까지 처음 제출되고,
            2027년 연간 집계표는 2028년 2월 말까지 제출됩니다. 투자자 본인의 첫 신고·납부는 그 직후인
            <strong> 2028년 5월</strong>입니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">어떤 내용이 들어가나요?</h2>
          <p className="leading-relaxed mb-4">
            소득세법 시행규칙에 정해진 가상자산 거래명세서 서식(별지 제30호의3서식)에는 거래마다 다음과 같은
            항목이 들어갑니다.
          </p>
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
                  <td className="px-4 py-3 font-medium">거래자 정보</td>
                  <td className="px-4 py-3">성명, 주민등록번호(외국인등록번호·여권번호) 등</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">가상자산 정보</td>
                  <td className="px-4 py-3">가상자산 종류(코드·심볼)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">거래 정보</td>
                  <td className="px-4 py-3">거래 일자, 거래 유형, 수량, 단가</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">금액</td>
                  <td className="px-4 py-3">양도 등 거래가액·수수료, 취득 등 거래가액·수수료</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">잔고</td>
                  <td className="px-4 py-3">거래 전·후 잔고</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">상대방</td>
                  <td className="px-4 py-3">거래상대방 정보(해당하는 경우), 가상자산 주소</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            거래집계표(별지 제30호의4서식)는 1년 동안의 거래를 집계한 자료입니다. 서식의 세부 항목은
            개정될 수 있으므로 국세청·국가법령정보센터의 최신 서식을 확인하세요.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">투자자가 알아둘 점</h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "거래소가 자료를 내도 신고는 본인이 합니다",
                desc: "거래소의 자료 제출은 세금을 대신 계산하거나 떼어 가는 것이 아닙니다. 가상자산소득은 1년치 손익을 합산해 다음 해 5월에 본인이 직접 신고·납부해야 합니다.",
              },
              {
                step: "2",
                title: "국세청이 거래 내역을 확인할 수 있습니다",
                desc: "국내 거래소 거래는 국세청에 자료가 쌓이므로, 신고하지 않거나 적게 신고하면 확인될 수 있다고 보고 정확히 신고하는 것이 안전합니다.",
              },
              {
                step: "3",
                title: "여러 거래소를 쓰면 합산은 본인 몫입니다",
                desc: "거래소는 자기 거래소 거래분만 제출합니다. 여러 거래소의 손익을 합치고, 거래소 간 이전한 코인의 취득가액을 연결하는 일은 본인이 해야 합니다.",
              },
              {
                step: "4",
                title: "해외 거래소·개인 지갑 거래는 별도로 챙기세요",
                desc: "국내에서 신고가 수리되지 않은 해외 거래소 거래는 이 제출 대상이 아닙니다. 다만 국가 간 가상자산 정보 교환 체계(CARF)가 도입될 예정이고, 신고 의무 자체는 똑같이 있으므로 거래 기록을 직접 보관해야 합니다.",
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
          <h2 className="text-2xl font-bold mb-4">참고: 법인은 이미 제출 중</h2>
          <p className="leading-relaxed">
            법인의 가상자산 거래 자료는 법인세법 제120조의4에 따라 2023년 1월 1일 이후 거래분부터 이미
            제출되고 있습니다. 개인 거래분은 과세 시행에 맞춰 2027년 1월 1일 이후 거래분부터 제출됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">관련 글 더 보기</h2>
          <div className="space-y-2 text-sm">
            {[
              { href: "/insights/exchange-history-export", label: "업비트·빗썸 거래 내역 보관·추출 방법" },
              { href: "/insights/crypto-tax-filing-2027", label: "2027년 코인 세금 신고 방법 완벽 정리" },
              { href: "/insights/overseas-exchange-tax", label: "바이낸스·바이비트 해외 거래소 코인도 세금 신고해야 할까?" },
              { href: "/insights/crypto-tax-penalty", label: "코인 세금 신고 안 하면? 가산세·불이익 정리" },
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
              "2027년 1월 1일 거래분부터 국내 가상자산사업자가 거래 자료를 국세청에 제출",
              "거래명세서는 분기별, 거래집계표는 연간 제출",
              "제출 기한은 분기 종료일의 다음다음 달 말일 (4분기·연간은 다음 해 2월 말)",
              "거래소 제출과 별개로 본인이 다음 해 5월에 직접 신고·납부",
              "여러 거래소 손익 합산과 해외 거래소 기록 관리는 본인 몫",
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
          본 글은 소득세법·같은 법 시행령과 국세청 안내 자료를 바탕으로 한 일반적인 정보이며 세무 조언이
          아닙니다. 제출 서식과 세부 기준은 개정될 수 있으므로 실제 신고 시에는 국세청 안내를 확인하거나
          세무사와 상담하시기 바랍니다.
        </div>
      </article>

      {/* 관련 계산기 CTA */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-blue-900 mb-1">관련 계산기</p>
        <p className="text-sm text-blue-700 mb-4">
          여러 거래소의 손익을 합산해 예상 세액을 미리 확인해보세요.
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
