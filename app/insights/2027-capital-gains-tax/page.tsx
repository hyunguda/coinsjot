import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "2027년 가상자산 양도소득세 완벽 정리 | 코인 인사이트",
  description:
    "두 번의 연기 끝에 2027년 1월부터 시행되는 가상자산 양도소득세. 세율·기본공제·의제취득가액 특례까지 핵심만 정리했습니다.",
  keywords:
    "가상자산 양도소득세, 코인 세금 2027, 의제취득가액, 가상화폐 세율, 기본공제",
  openGraph: {
    title: "2027년 가상자산 양도소득세 완벽 정리",
    description:
      "두 번의 연기 끝에 2027년 1월부터 시행되는 가상자산 양도소득세. 세율·기본공제·의제취득가액 특례까지 핵심만 정리했습니다.",
    type: "article",
  },
};

const ARTICLE = {
  title: "2027년 가상자산 양도소득세 완벽 정리",
  date: "2026-09-06",
  category: "세금",
};

export default function Article2027CapitalGainsTax() {
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
          두 번의 연기 끝에 2027년 1월부터 시행되는 가상자산 양도소득세. 세율·기본공제·의제취득가액
          특례까지 핵심만 정리했습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">드디어 2027년부터 시작됩니다</h2>
          <p className="leading-relaxed mb-4">
            가상자산 양도소득세는 당초 2022년 도입 예정이었지만 두 차례 연기를 거쳐 2027년 1월 1일부터
            본격 시행됩니다. 비트코인, 이더리움 등 가상자산을 보유하고 있다면 이제 세금 신고를 피할 수
            없습니다.
          </p>
          <p className="leading-relaxed">
            아직 시간이 있다고 미루기 쉽지만, 준비를 지금 시작하는 것과 나중에 시작하는 것은 세금
            부담에서 큰 차이를 만들 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">핵심 내용 한눈에</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">항목</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">내용</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">시행일</td>
                  <td className="px-4 py-3">2027년 1월 1일</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">세율</td>
                  <td className="px-4 py-3">22% (소득세 20% + 지방소득세 2%)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">기본공제</td>
                  <td className="px-4 py-3">연 250만원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">과세 방식</td>
                  <td className="px-4 py-3">종합소득과 분리 과세</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">신고·납부 기한</td>
                  <td className="px-4 py-3">다음 해 5월 (종합소득세 신고 기간)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">손익 통산</td>
                  <td className="px-4 py-3">같은 해 발생한 손익 합산 가능</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">세금 계산 방법</h2>
          <p className="leading-relaxed mb-4">기본 계산 구조는 단순합니다.</p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 font-mono text-sm space-y-2 mb-6">
            <p>양도차익 = 매도금액 − 취득가액 − 거래 수수료</p>
            <p>과세표준 = 양도차익 − 250만원 (기본공제)</p>
            <p className="font-bold text-blue-700">납부세액 = 과세표준 × 22%</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="font-semibold text-blue-900 mb-3">계산 예시</p>
            <p className="text-sm text-blue-800 leading-relaxed">
              1,000만원에 매수한 비트코인을 3,000만원에 매도한 경우
            </p>
            <ul className="mt-3 space-y-1 text-sm text-blue-800">
              <li>· 양도차익: 3,000만원 − 1,000만원 = <strong>2,000만원</strong></li>
              <li>· 기본공제 차감: 2,000만원 − 250만원 = <strong>1,750만원</strong></li>
              <li>· 납부세액: 1,750만원 × 22% = <strong>385만원</strong></li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">의제취득가액 특례 — 핵심 절세 포인트</h2>
          <p className="leading-relaxed mb-4">
            2026년 12월 31일 이전부터 가상자산을 보유하고 있었다면 <strong>의제취득가액 특례</strong>를
            반드시 확인해야 합니다.
          </p>
          <p className="leading-relaxed mb-4">
            핵심은 단순합니다. 취득가액을 <strong>실제 매수금액</strong>과{" "}
            <strong>2026년 12월 31일 시가</strong> 중 <strong>높은 쪽</strong>으로 선택할 수 있습니다.
            장기 보유자일수록 이 특례의 절세 효과가 큽니다.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-4">
            <p className="font-semibold text-green-900 mb-3">절세 효과 예시</p>
            <ul className="space-y-1 text-sm text-green-800">
              <li>· 실제 매수가: 1,000만원</li>
              <li>· 2026년 12월 31일 시가: 5,000만원 <span className="font-semibold">← 이쪽이 높으니 이걸 취득가로 인정</span></li>
              <li>· 나중에 7,000만원에 매도 시</li>
            </ul>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="font-semibold text-red-700 mb-1">특례 미적용</p>
                <p className="text-red-600">양도차익: 6,000만원</p>
                <p className="text-red-600">세액: 약 1,265만원</p>
              </div>
              <div className="bg-green-100 border border-green-300 rounded-lg p-3">
                <p className="font-semibold text-green-700 mb-1">특례 적용</p>
                <p className="text-green-700">양도차익: 2,000만원</p>
                <p className="text-green-700">세액: 약 385만원</p>
              </div>
            </div>
            <p className="mt-3 text-sm font-bold text-green-900">절세 효과: 약 880만원</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">여러 코인을 보유 중이라면 — 손익 통산</h2>
          <p className="leading-relaxed mb-4">
            같은 해에 A 코인에서 수익, B 코인에서 손실이 났다면 합산해서 세금을 계산합니다.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm space-y-1">
            <p>A 코인 수익: +500만원</p>
            <p>B 코인 손실: −200만원</p>
            <p className="border-t border-gray-300 pt-2 mt-2">합산 소득: 300만원</p>
            <p>기본공제 차감: 300만원 − 250만원 = 50만원</p>
            <p className="font-bold text-blue-700">납부세액: 50만원 × 22% = 11만원</p>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            손실이 큰 해에는 합산 후 0원 이하가 되어 납부세액이 없을 수도 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">지금 미리 해두어야 할 것</h2>
          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "거래 내역 전체 보관",
                desc: "모든 거래소의 매수·매도 내역을 지금부터 내보내 두세요. 거래소 서비스 종료 시 기록 복구가 불가능할 수 있습니다.",
              },
              {
                num: "02",
                title: "2026년 12월 31일 시가 증빙 준비",
                desc: "의제취득가액 특례를 쓰려면 해당 날짜의 시가 증빙이 필요합니다. 날이 되면 스크린샷을 찍어두거나 기록기를 활용하세요.",
              },
              {
                num: "03",
                title: "취득가액 산정 방식 확인",
                desc: "여러 차례 분할 매수한 코인은 어떤 가격을 취득가로 볼지 결정해야 합니다. 거래소별로 제공 방식이 다를 수 있습니다.",
              },
              {
                num: "04",
                title: "복잡한 케이스는 전문가 상담",
                desc: "해외 거래소 거래, 스테이킹 수익, DeFi 수익 등 복잡한 케이스는 세무사 상담을 권장합니다.",
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
          본 글은 일반적인 정보 제공을 목적으로 작성되었으며 세무 조언이 아닙니다. 실제 신고 전에
          반드시 세무 전문가와 상담하시기 바랍니다. 개인 상황에 따라 세액이 달라질 수 있습니다.
        </div>
      </article>

      {/* 관련 계산기 CTA */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-blue-900 mb-1">관련 계산기</p>
        <p className="text-sm text-blue-700 mb-4">
          의제취득가액 특례 적용 시 예상 세액을 직접 계산해보세요.
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
