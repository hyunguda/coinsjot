import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "코인 손실은 내년으로 못 넘긴다 — 이월공제 불가, 연내 손익통산이 전부다 | 코인 인사이트",
  description:
    "가상자산 손실은 다음 해로 이월할 수 없습니다. 올해 발생한 손실은 올해 안에 다른 코인 수익과 상계해야만 세금을 줄일 수 있습니다. 이월공제 불가의 의미와 연말 전 실행 전략을 정리했습니다.",
  keywords:
    "코인 이월공제, 가상자산 손실 이월, 코인 손익통산, 가상자산 세금 손실, 코인 손실 처리",
  openGraph: {
    title: "코인 손실은 내년으로 못 넘긴다 — 이월공제 불가, 연내 손익통산이 전부다",
    description:
      "가상자산 손실은 다음 해로 이월할 수 없습니다. 올해 발생한 손실은 올해 안에 다른 코인 수익과 상계해야만 세금을 줄일 수 있습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/crypto-loss-carryforward",
  },
};

const ARTICLE = {
  title: "코인 손실은 내년으로 못 넘긴다 — 이월공제 불가, 연내 손익통산이 전부다",
  date: "2026-09-18",
  category: "세금",
};

export default function ArticleCryptoLossCarryforward() {
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
          "올해 손실은 내년에 수익 나면 상계하면 되겠지"라고 생각한다면 오산입니다.
          가상자산 세법에는 이월공제 규정이 없습니다. 손실을 세금에 반영하려면
          반드시 같은 해 안에 처리해야 합니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">이월공제란 무엇인가</h2>
          <p className="leading-relaxed mb-4">
            이월공제(결손금 이월)는 <strong>올해 발생한 손실을 다음 해 이후 수익에서
            빼줄 수 있는 제도</strong>입니다. 예를 들어 사업자가 올해 2,000만원 손실을
            봤다면, 내년에 3,000만원 수익이 생겼을 때 그 손실분을 공제해 1,000만원에만
            세금을 매기는 방식입니다.
          </p>
          <p className="leading-relaxed">
            주식 양도소득세나 일부 다른 소득에는 비슷한 개념이 있지만,
            <strong> 2027년부터 시행되는 가상자산 양도소득세에는 이월공제 규정이
            없습니다.</strong> 올해 손실은 올해 안에 쓰지 않으면 사라집니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">구체적으로 어떤 의미인가</h2>
          <p className="leading-relaxed mb-6">
            아래 두 가지 상황을 비교하면 차이가 명확해집니다.
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border border-red-200 overflow-hidden">
              <div className="bg-red-50 px-5 py-3 border-b border-red-200">
                <p className="font-bold text-red-800">상황 A — 이월공제가 된다면 (실제로는 안 됨)</p>
              </div>
              <div className="px-5 py-4 text-sm text-gray-700 space-y-2">
                <p>2027년: 비트코인 −2,000만원 손실</p>
                <p>2028년: 이더리움 +5,000만원 수익</p>
                <p>→ 2028년 과세 기준: 5,000 − 2,000 = 3,000만원</p>
                <p className="text-red-700 font-semibold">→ 세액: (3,000 − 250) × 22% = 약 605만원</p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                <p className="font-bold text-gray-800">상황 B — 실제 가상자산 세법 적용</p>
              </div>
              <div className="px-5 py-4 text-sm text-gray-700 space-y-2">
                <p>2027년: 비트코인 −2,000만원 손실 → <span className="text-red-600 font-semibold">과세 소득 없음, 손실도 소멸</span></p>
                <p>2028년: 이더리움 +5,000만원 수익</p>
                <p>→ 2028년 과세 기준: 5,000만원 전액</p>
                <p className="text-red-700 font-semibold">→ 세액: (5,000 − 250) × 22% = 약 1,045만원</p>
              </div>
            </div>
          </div>

          <p className="mt-5 text-sm text-gray-600 leading-relaxed bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            두 상황의 세액 차이는 <strong>약 440만원</strong>입니다. 이 차이는 이월공제
            여부에서만 생깁니다. 2027년 손실을 연내에 처리했느냐 못 했느냐가
            실제 납부 세액을 크게 바꿉니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">기본공제 250만원도 마찬가지다</h2>
          <p className="leading-relaxed mb-4">
            코인 양도소득에는 연간 <strong>250만원 기본공제</strong>가 적용됩니다.
            이 공제도 이월되지 않습니다.
          </p>
          <p className="leading-relaxed">
            올해 코인 수익이 100만원이라면 기본공제 250만원을 다 쓰지 못합니다.
            그렇다고 남은 150만원 공제가 내년으로 넘어가지 않습니다.
            <strong> 공제는 매년 250만원이 주어지고, 그 해 안에 쓰지 않으면 사라집니다.</strong>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">그렇다면 손실을 어떻게 활용하나</h2>
          <p className="leading-relaxed mb-4">
            이월공제가 없다고 해서 손실이 완전히 의미 없는 건 아닙니다.
            <strong> 같은 과세연도 내 손익통산</strong>은 가능합니다.
            여러 코인의 수익과 손실을 합산해 과세 기준을 줄일 수 있습니다.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="font-bold text-blue-900 mb-3">연내 손익통산 예시 (2027년)</p>
            <div className="text-sm text-blue-800 space-y-1">
              <p>비트코인 매도 수익: +4,000만원</p>
              <p>이더리움 매도 손실: −1,500만원</p>
              <p>리플 매도 손실: −500만원</p>
              <div className="border-t border-blue-200 my-2"></div>
              <p className="font-semibold">합산 수익: 4,000 − 1,500 − 500 = 2,000만원</p>
              <p className="font-semibold">과세표준: 2,000 − 250(기본공제) = 1,750만원</p>
              <p className="font-semibold text-blue-900">예상 세액: 1,750 × 22% = 385만원</p>
            </div>
          </div>

          <p className="mt-4 leading-relaxed text-sm text-gray-600">
            손익통산의 핵심은 <strong>타이밍</strong>입니다. 12월 31일 이전에 손실
            포지션을 매도해 실현하지 않으면, 그 손실은 세금 계산에 반영되지 않습니다.
            평가 손실(미실현 손실)은 아무리 커도 공제가 안 됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">연말 전 체크리스트</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <ul className="space-y-3 text-sm text-blue-900">
              <li className="flex gap-2">
                <span className="font-bold flex-shrink-0">✓</span>
                <span>
                  <strong>연내 수익·손실 현황 파악</strong> — 현재까지 실현한 수익과 손실을
                  종목별로 정리해보세요. 손익통산 시뮬레이터를 활용하면 빠릅니다.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold flex-shrink-0">✓</span>
                <span>
                  <strong>손실 실현 여부 결정</strong> — 평가 손실이 있는 종목을 12월 31일
                  전에 매도해야 손익통산 효과를 얻을 수 있습니다.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold flex-shrink-0">✓</span>
                <span>
                  <strong>재매수 계획 수립</strong> — 손절 후 다시 사고 싶다면 별도 매수가
                  필요합니다. 재매수 시점에 따라 취득가액이 달라집니다.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold flex-shrink-0">✓</span>
                <span>
                  <strong>수익 실현 시점 분산 검토</strong> — 수익이 한 해에 집중되면
                  세금도 집중됩니다. 연도를 나눠 실현하면 기본공제를 두 번 적용받습니다.
                </span>
              </li>
            </ul>
          </div>
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
          올해 수익·손실을 입력해 실제 납부 세액과 손익통산 효과를 계산해보세요.
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
