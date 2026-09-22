import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "코인 보유만 해도 세금이 붙을까? 미실현 수익 과세 여부 완벽 정리 | 코인 인사이트",
  description:
    "코인을 팔지 않고 보유만 하면 세금이 없습니다. 가상자산 양도소득세는 '실현주의'를 따라 매도·교환 시에만 과세됩니다. 미실현 수익의 과세 여부와 코인↔코인 스왑 주의사항을 정리했습니다.",
  keywords:
    "코인 미실현 수익 세금, 코인 보유 세금, 가상자산 미실현 과세, 코인 팔아야 세금, 실현주의 과세",
  openGraph: {
    title: "코인 보유만 해도 세금이 붙을까? 미실현 수익 과세 여부 완벽 정리",
    description:
      "코인을 팔지 않으면 세금이 없습니다. 실현주의 원칙과 미실현 수익 과세 여부를 정리했습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/crypto-unrealized-gains",
  },
};

const ARTICLE = {
  title: "코인 보유만 해도 세금이 붙을까? 미실현 수익 과세 여부 완벽 정리",
  date: "2026-09-22",
  category: "세금",
};

export default function ArticleCryptoUnrealizedGains() {
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
          "비트코인이 2배 올랐는데 세금 내야 하나요?" — <strong>팔지 않았다면 세금 없습니다.</strong>{" "}
          가상자산 양도소득세는 수익이 '실현'될 때만 과세됩니다.
          미실현 수익 과세 여부와 헷갈리기 쉬운 예외 케이스를 정리했습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">실현주의란 무엇인가</h2>
          <p className="leading-relaxed mb-4">
            한국 세법은 <strong>실현주의(realization principle)</strong>를 따릅니다.
            자산의 가치가 오르더라도 그 수익을 실제로 '실현'하기 전까지는 과세하지 않는다는 원칙입니다.
          </p>
          <p className="leading-relaxed mb-4">
            가상자산의 경우 수익이 실현되는 시점은 <strong>매도(원화 출금)</strong> 또는
            <strong> 다른 자산과의 교환</strong>입니다.
            코인을 계좌에 보유하고 있는 동안 아무리 가격이 올라도, 세금은 발생하지 않습니다.
          </p>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <p className="font-bold text-gray-800">세금이 발생하는 시점</p>
            </div>
            <div className="px-5 py-4 text-sm text-gray-700 space-y-2">
              <p>✅ 코인을 원화(KRW)로 매도할 때</p>
              <p>✅ 코인을 다른 코인으로 교환(스왑)할 때</p>
              <p>✅ 코인으로 재화·서비스를 결제할 때</p>
              <p>❌ 코인을 보유만 하고 있을 때 → <strong>과세 없음</strong></p>
              <p>❌ 지갑 간 이동(내 지갑 → 내 지갑) → <strong>과세 없음</strong></p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">미실현 수익 사례로 보기</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-green-50 px-5 py-3 border-b border-green-200">
                <p className="font-bold text-green-800">사례 1 — 보유만 한 경우: 세금 0원</p>
              </div>
              <div className="px-5 py-4 text-sm text-gray-700 space-y-1">
                <p>2026년 1월: 비트코인 5,000만원에 매수</p>
                <p>2026년 12월: 비트코인 평가액 1억원 (미매도)</p>
                <p className="text-green-700 font-medium mt-2">
                  수익 5,000만원이지만 매도하지 않았으므로 납부세액: <strong>0원</strong>
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-blue-50 px-5 py-3 border-b border-blue-200">
                <p className="font-bold text-blue-800">사례 2 — 일부 매도한 경우: 매도분만 과세</p>
              </div>
              <div className="px-5 py-4 text-sm text-gray-700 space-y-1">
                <p>비트코인 1억원어치 보유 (취득가 5,000만원)</p>
                <p>50% 매도 → 매도대금 5,000만원 (수익 2,500만원)</p>
                <p>나머지 50% 계속 보유</p>
                <p>과세표준: 2,500만원 − 250만원 = 2,250만원</p>
                <p className="text-blue-700 font-medium mt-2">
                  납부세액: 2,250만원 × 22% = <strong>495만원</strong>
                </p>
                <p className="text-gray-500 text-xs mt-1">보유 중인 나머지 50%는 과세 없음</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">주의: 코인↔코인 교환은 실현으로 간주</h2>
          <p className="leading-relaxed mb-4">
            원화로 출금하지 않더라도 <strong>코인을 다른 코인으로 스왑하면 수익이 실현</strong>된 것으로
            봅니다. 예를 들어 비트코인을 이더리움으로 바꾸면, 비트코인을 매도하고 이더리움을
            매수한 것으로 처리됩니다.
          </p>
          <div className="rounded-xl border border-red-100 overflow-hidden">
            <div className="bg-red-50 px-5 py-3 border-b border-red-200">
              <p className="font-bold text-red-800">스왑 시 과세 사례</p>
            </div>
            <div className="px-5 py-4 text-sm text-gray-700 space-y-1">
              <p>비트코인 취득가: 3,000만원</p>
              <p>스왑 시점 비트코인 시세: 6,000만원</p>
              <p>교환 수익: 6,000만원 − 3,000만원 = <strong>3,000만원</strong></p>
              <p className="text-red-700 font-medium mt-2">
                원화를 받지 않았어도 양도소득세 과세 대상
              </p>
            </div>
          </div>
          <p className="leading-relaxed mt-4 text-sm text-gray-600">
            DEX(탈중앙화 거래소)에서의 스왑, 스테이블코인(USDT·USDC) 전환도 동일하게
            과세 대상으로 간주됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">내 지갑 간 이동은 과세 대상 아님</h2>
          <p className="leading-relaxed mb-4">
            거래소 → 개인 하드웨어 지갑, 또는 A 거래소 → B 거래소로 코인을 이전하는 것은
            <strong> 과세 대상이 아닙니다.</strong> 소유자가 바뀌지 않기 때문입니다.
          </p>
          <p className="leading-relaxed">
            단, 이동 내역을 기록해 두는 것이 중요합니다. 취득가액 증빙을 위해 입출금 시점과
            수량을 정리해 두지 않으면 세금 신고 시 소명이 어려울 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">미실현 수익을 활용한 절세 전략</h2>
          <p className="leading-relaxed mb-4">
            실현주의 원칙을 이해하면 수익 실현 타이밍을 조절해 세금을 줄일 수 있습니다.
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5">①</span>
              <span>
                <strong>연도 분산 실현:</strong> 12월 말과 1월 초에 나눠 매도하면
                기본공제(250만원)를 2년치 활용할 수 있습니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5">②</span>
              <span>
                <strong>손실과 함께 실현:</strong> 평가손실이 있는 코인을 함께 매도해
                손익통산 후 세금을 줄입니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5">③</span>
              <span>
                <strong>스왑 최소화:</strong> 불필요한 코인↔코인 교환은 과세 이벤트를
                늘리므로 신중하게 결정합니다.
              </span>
            </li>
          </ul>
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
          매도 수익과 손실을 통산해 실제 납부세액을 직접 계산해보세요.
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
