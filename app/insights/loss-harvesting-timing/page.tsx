import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "연말 전에 일부러 손절해야 하는 이유 | 코인 인사이트",
  description:
    "코인 손익통산 구조를 이용하면 연말에 손실을 실현해 이익을 줄이고 세금을 낮출 수 있습니다. 타이밍 전략과 재매수 방법, 사례 계산까지 정리했습니다.",
  keywords:
    "코인 손절 절세, 손익통산 전략, 가상자산 세금 타이밍, 연말 손절 이유, 코인 세금 줄이기",
  openGraph: {
    title: "연말 전에 일부러 손절해야 하는 이유",
    description:
      "코인 손익통산 구조를 이용하면 연말에 손실을 실현해 이익을 줄이고 세금을 낮출 수 있습니다. 타이밍 전략과 재매수 방법, 사례 계산까지 정리했습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/loss-harvesting-timing",
  },
};

const ARTICLE = {
  title: "연말 전에 일부러 손절해야 하는 이유",
  date: "2026-09-09",
  category: "세금",
};

export default function ArticleLossHarvestingTiming() {
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
          손익통산 구조를 이해하면 연말 전에 손실 종목을 일부러 매도하는 행위가
          단순한 포기가 아니라 세금을 합법적으로 줄이는 전략임을 알 수 있습니다.
          타이밍과 재매수 방법까지 사례 중심으로 정리했습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">손익통산이란?</h2>
          <p className="leading-relaxed mb-4">
            2027년부터 시행되는 가상자산 양도소득세는 <strong>연간 단위로 이익과 손실을 합산</strong>해 과세합니다.
            이를 손익통산이라고 합니다. 핵심은 이렇습니다.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
            <p className="font-semibold text-blue-900 mb-3">과세표준 계산 구조</p>
            <div className="space-y-2 text-sm text-blue-800 font-mono">
              <p>연간 총이익 − 연간 총손실 = <strong>순이익</strong></p>
              <p>순이익 − 기본공제 250만원 = <strong>과세표준</strong></p>
              <p>과세표준 × 22% = <strong>납부 세액</strong></p>
            </div>
          </div>
          <p className="leading-relaxed text-gray-600">
            여기서 중요한 점은 <strong>손실도 과세표준을 줄이는 데 쓰인다</strong>는 것입니다.
            A 코인에서 1,000만원 이익을 냈어도, B 코인에서 400만원 손실이 실현되면
            순이익은 600만원으로 줄어듭니다. 손실이 세금을 줄여주는 것입니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">왜 &apos;연말 전&apos;이어야 하는가</h2>
          <p className="leading-relaxed mb-4">
            세금은 매년 1월 1일~12월 31일을 하나의 과세 연도로 계산합니다.
            <strong>미실현 손실</strong>(아직 팔지 않은 종목의 손실)은 손익통산에 포함되지 않습니다.
            손실이 손익통산에 반영되려면 <strong>12월 31일 이전에 반드시 매도</strong>해야 합니다.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4 text-sm text-amber-800">
            <p className="font-semibold mb-2">핵심 원칙</p>
            <ul className="space-y-1">
              <li>· 12월 31일까지 매도 → 손실 실현 → 당해연도 손익통산 반영</li>
              <li>· 1월 1일 이후 매도 → 다음 해 과세 연도로 이월 → 올해 세금 절감 없음</li>
            </ul>
          </div>
          <p className="leading-relaxed text-gray-600">
            이익이 많이 발생한 해일수록, 미실현 손실 종목을 연내에 처분하는 것이 유리합니다.
            팔기 싫더라도, 세금 계산상으로는 연말 전 매도가 훨씬 낫습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">사례로 보는 절세 효과</h2>

          {/* 사례 1 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-green-100 text-green-700">사례 1</span>
              <span className="font-semibold">손실 종목 정리로 세금 0원 만들기</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              연중 비트코인 매도로 800만원 이익. 이더리움은 현재 −350만원 미실현 손실 보유.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm">
                <p className="font-semibold text-red-700 mb-2">이더리움 보유 유지 시</p>
                <ul className="space-y-1 text-red-600">
                  <li>순이익: 800만원</li>
                  <li>기본공제: −250만원</li>
                  <li>과세표준: 550만원</li>
                  <li className="font-bold pt-1 border-t border-red-200">납부세액: 121만원</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm">
                <p className="font-semibold text-green-700 mb-2">연말 전 이더리움 손절 시</p>
                <ul className="space-y-1 text-green-700">
                  <li>이익 800만원 − 손실 350만원 = 450만원</li>
                  <li>기본공제: −250만원</li>
                  <li>과세표준: 200만원</li>
                  <li className="font-bold pt-1 border-t border-green-200">납부세액: 44만원</li>
                </ul>
              </div>
            </div>
            <p className="text-sm font-semibold text-green-700">→ 77만원 절세. 이더리움 손실을 실현하는 것만으로 세금이 60% 줄었습니다.</p>
          </div>

          {/* 사례 2 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700">사례 2</span>
              <span className="font-semibold">기본공제 250만원 이하로 낮춰 세금 완전 제거</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              연중 이익 합계 500만원. 손실 종목의 미실현 손실 −300만원.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm">
                <p className="font-semibold text-red-700 mb-2">손절 안 할 경우</p>
                <ul className="space-y-1 text-red-600">
                  <li>순이익: 500만원</li>
                  <li>기본공제: −250만원</li>
                  <li>과세표준: 250만원</li>
                  <li className="font-bold pt-1 border-t border-red-200">납부세액: 55만원</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm">
                <p className="font-semibold text-green-700 mb-2">손절 시</p>
                <ul className="space-y-1 text-green-700">
                  <li>500만원 − 300만원 = 순이익 200만원</li>
                  <li>기본공제 250만원 이하</li>
                  <li>과세표준: 0원</li>
                  <li className="font-bold pt-1 border-t border-green-200">납부세액: 0원</li>
                </ul>
              </div>
            </div>
            <p className="text-sm font-semibold text-green-700">→ 55만원 절세. 기본공제 범위로 순이익을 낮추면 세금이 완전히 사라집니다.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">손절 후 재매수 — &apos;워시 세일&apos; 규정이 없다</h2>
          <p className="leading-relaxed mb-4">
            미국 주식은 손실 실현 목적의 매도 후 30일 이내에 같은 종목을 재매수하면
            손실 공제를 인정하지 않는 &apos;워시 세일(Wash Sale)&apos; 규정이 있습니다.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
            <p className="font-semibold text-blue-900 mb-2">한국 가상자산세법 현황</p>
            <p className="text-sm text-blue-800 leading-relaxed">
              현재 한국 가상자산 과세 법령에는 워시 세일에 해당하는 규정이 없습니다.
              즉, 이더리움을 손절한 직후에 같은 이더리움을 다시 매수해도
              손실 실현은 그대로 인정됩니다.
            </p>
          </div>
          <p className="leading-relaxed mb-4">
            이 구조를 활용하면 다음과 같은 전략이 가능합니다.
          </p>
          <div className="space-y-3">
            {[
              {
                step: "1",
                title: "연말 전 손실 종목 매도",
                desc: "보유 중인 손실 종목을 12월 31일 이전에 매도해 손실을 확정한다.",
              },
              {
                step: "2",
                title: "즉시 혹은 새해 초 재매수",
                desc: "해당 종목을 그대로 다시 매수한다. 취득가액이 낮은 가격으로 리셋되며, 손실은 당해 연도 세금을 낮추는 데 이미 쓰였다.",
              },
              {
                step: "3",
                title: "장기 보유 전략 유지",
                desc: "재매수 후에는 기존 보유 전략을 그대로 이어가면 된다. 종목 노출은 유지하면서 세금 부담만 줄이는 결과다.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-4 border border-gray-200 rounded-xl">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
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
            ※ 다만, 향후 세법 개정으로 워시 세일 유사 규정이 추가될 수 있습니다. 실행 전 최신 법령 확인을 권장합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">언제 손절 전략이 효과 있는가</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">상황</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">전략 효과</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3">연중 실현 이익이 크고, 미실현 손실 종목이 있다</td>
                  <td className="px-4 py-3 text-center font-bold text-green-600">높음</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">순이익을 기본공제 250만원 이하로 낮출 수 있다</td>
                  <td className="px-4 py-3 text-center font-bold text-green-600">매우 높음</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">손실 종목을 어차피 정리할 계획이었다</td>
                  <td className="px-4 py-3 text-center font-semibold text-blue-600">적극 권장</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">연중 이익이 없거나 이미 손실만 있다</td>
                  <td className="px-4 py-3 text-center text-gray-400">효과 없음</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">장기 보유 확신이 강해 매도 자체가 어렵다</td>
                  <td className="px-4 py-3 text-center text-gray-400">재매수 방식 검토</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">주의사항</h2>
          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "거래 수수료와 슬리피지를 계산에 포함할 것",
                desc: "매도·재매수 시 거래 수수료와 가격 차이(슬리피지)가 발생합니다. 절세액이 이 비용보다 큰지 확인해야 전략이 의미 있습니다.",
              },
              {
                num: "02",
                title: "과세 연도 내에 반드시 실현해야 함",
                desc: "12월 31일 자정까지 체결된 거래만 당해 연도에 반영됩니다. 연말에는 거래소 지연·네트워크 오류 가능성이 있으므로 여유를 두고 실행하세요.",
              },
              {
                num: "03",
                title: "손실 이월 공제는 현재 불가",
                desc: "현행 가상자산 세법에는 당해 연도 손실을 다음 해로 이월하는 규정이 없습니다. 이익보다 손실이 많다면 그 초과분은 공제 효과가 없습니다.",
              },
              {
                num: "04",
                title: "세법 개정 가능성 상시 체크",
                desc: "가상자산 과세 규정은 아직 정착 단계입니다. 시행 이후 시행령·예규 변경으로 내용이 달라질 수 있으니 국세청 공지를 주기적으로 확인하세요.",
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
          <h2 className="text-2xl font-bold mb-4">정리 — 연말 손익통산 체크리스트</h2>
          <div className="space-y-3">
            {[
              "올해 실현한 이익 합계를 계산한다",
              "현재 미실현 손실 종목과 금액을 파악한다",
              "손절 시 순이익이 얼마나 줄어드는지 계산한다",
              "기본공제 250만원 이하로 낮출 수 있다면 우선순위 높음",
              "거래 수수료를 감안해도 절세액이 크면 실행",
              "12월 31일 체결 기준 — 여유 있게 실행",
              "필요 시 재매수로 포지션 유지",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 p-3 border border-gray-200 rounded-lg text-sm">
                <span className="text-blue-500 font-bold">□</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 면책 고지 */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-500 leading-relaxed">
          본 글은 일반적인 정보 제공을 목적으로 작성되었으며 세무 조언이 아닙니다. 세법은 개정될 수 있으며
          개인 상황(보유 종목, 이익 규모, 거래 이력 등)에 따라 결과가 크게 달라집니다.
          실제 절세 전략 실행 전에 반드시 세무 전문가와 상담하시기 바랍니다.
        </div>
      </article>

      {/* 관련 계산기 CTA */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-blue-900 mb-1">손익통산 계산기로 직접 시뮬레이션해보세요</p>
        <p className="text-sm text-blue-700 mb-4">
          여러 종목의 이익과 손실을 입력하면 기본공제 적용 후 실제 납부세액을 바로 계산합니다.
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
            의제취득가액 비교 계산기 →
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
