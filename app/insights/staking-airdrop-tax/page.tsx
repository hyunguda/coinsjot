import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "스테이킹·에어드롭 수익, 세금 내야 할까? | 코인 인사이트",
  description:
    "스테이킹 보상과 에어드롭으로 받은 코인도 2027년부터 세금 대상입니다. 과세 시점, 취득가액 계산법, 절세 포인트까지 정리했습니다.",
  keywords:
    "스테이킹 세금, 에어드롭 세금, 가상자산 기타소득, 스테이킹 보상 과세, 코인 세금 2027",
  openGraph: {
    title: "스테이킹·에어드롭 수익, 세금 내야 할까?",
    description:
      "스테이킹 보상과 에어드롭으로 받은 코인도 2027년부터 세금 대상입니다. 과세 시점, 취득가액 계산법, 절세 포인트까지 정리했습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/staking-airdrop-tax",
  },
};

const ARTICLE = {
  title: "스테이킹·에어드롭 수익, 세금 내야 할까?",
  date: "2026-09-10",
  category: "세금",
};

export default function ArticleStakingAirdropTax() {
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
          스테이킹 보상과 에어드롭으로 받은 코인도 2027년부터 세금 대상입니다. 과세 시점,
          취득가액 계산법, 절세 포인트까지 정리했습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">스테이킹·에어드롭도 과세 대상인가요?</h2>
          <p className="leading-relaxed mb-4">
            결론부터 말하면, <strong>둘 다 과세 대상입니다.</strong> 다만 세금이 붙는 시점과 방식이
            일반 매도 차익과는 조금 다릅니다. 혼동하기 쉬운 부분이라 아래에서 각각 정리합니다.
          </p>
          <p className="leading-relaxed">
            2027년부터 시행되는 가상자산 양도소득세는 &quot;매도 차익&quot;에만 적용됩니다. 하지만
            스테이킹 보상이나 에어드롭은 받는 시점에 이미 소득이 발생한 것으로 봐서 별도 처리가
            필요합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">스테이킹 보상의 세금 처리</h2>
          <p className="leading-relaxed mb-4">
            스테이킹 보상은 <strong>받는 시점의 시장가격</strong>을 기준으로 소득이 발생한 것으로
            봅니다. 이후 그 코인을 매도할 때는, 받을 당시의 시가가 취득가액이 됩니다.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm space-y-2 mb-6">
            <p className="font-semibold text-gray-700 mb-3">예시: 스테이킹 보상 100개 수령</p>
            <p>· 수령 시점 시가: 개당 1만원 → 수령 시 소득 <strong>100만원</strong></p>
            <p>· 이후 개당 1.5만원에 매도</p>
            <p>· 매도 차익 = 1.5만원 − 1만원(취득가) = 개당 <strong>5,000원</strong></p>
            <p className="border-t border-gray-300 pt-2 mt-2 font-bold text-blue-700">
              총 양도차익: 50만원 (수령 시 이미 처리된 100만원은 별도)
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="font-semibold text-amber-900 mb-2">주의할 점</p>
            <p className="text-sm text-amber-800 leading-relaxed">
              수령 시점의 소득 처리 방식은 현재 세법 해석이 완전히 확정되지 않은 부분이 있습니다.
              스테이킹 규모가 크다면 세무사 상담을 통해 정확한 처리 방법을 확인하는 것이 좋습니다.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">에어드롭의 세금 처리</h2>
          <p className="leading-relaxed mb-4">
            에어드롭으로 무료로 받은 코인도 과세 대상입니다. 스테이킹과 마찬가지로{" "}
            <strong>수령 시점의 시가</strong>가 취득가액이 됩니다.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">구분</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">스테이킹 보상</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">에어드롭</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">소득 발생 시점</td>
                  <td className="px-4 py-3">코인 수령 시</td>
                  <td className="px-4 py-3">코인 수령 시</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">취득가액</td>
                  <td className="px-4 py-3">수령 당시 시가</td>
                  <td className="px-4 py-3">수령 당시 시가 (0원 주장도 있음)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">이후 매도 시</td>
                  <td className="px-4 py-3">매도가 − 수령 시 시가</td>
                  <td className="px-4 py-3">매도가 − 취득가 (방식 확정 전)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">세법 확정 여부</td>
                  <td className="px-4 py-3">대체로 확정</td>
                  <td className="px-4 py-3">일부 해석 미확정</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            에어드롭은 특히 &quot;사용 조건이 없는 무료 지급&quot;인지, &quot;특정 행동 후 지급된 보상&quot;인지에
            따라 해석이 달라질 수 있습니다. 현재 국세청 공식 가이드라인이 일부 영역에서 아직
            세부 기준을 발표하지 않은 상황입니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">절세 포인트 3가지</h2>
          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "수령 시점 시가 기록을 남겨두세요",
                desc: "스테이킹 보상이나 에어드롭을 받을 때마다 수령 수량과 당시 가격을 기록해 두는 것이 핵심입니다. 나중에 취득가를 소명하는 데 필요합니다.",
              },
              {
                num: "02",
                title: "매도 시점과 수령 시점을 구분해서 관리하세요",
                desc: "스테이킹 보상은 '수령 시 소득'과 '매도 시 차익'이 이중으로 발생할 수 있어, 이를 혼동하면 신고 오류가 생깁니다.",
              },
              {
                num: "03",
                title: "손익통산 활용을 잊지 마세요",
                desc: "같은 해 다른 코인에서 손실이 발생했다면, 스테이킹·에어드롭 관련 차익과 합산해 기본공제(250만원) 적용 후 계산합니다.",
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

        {/* 면책 고지 */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-500 leading-relaxed">
          본 글은 일반적인 정보 제공을 목적으로 작성되었으며 세무 조언이 아닙니다. 스테이킹·에어드롭
          과세 방식은 세법 해석이 아직 일부 확정되지 않은 영역이 있으므로, 실제 신고 전에 반드시
          세무 전문가와 상담하시기 바랍니다.
        </div>
      </article>

      {/* 관련 계산기 CTA */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-blue-900 mb-1">관련 계산기</p>
        <p className="text-sm text-blue-700 mb-4">
          여러 코인의 손익을 합산해 실제 납부세액을 계산해보세요.
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
