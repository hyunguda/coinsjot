import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "코인 증여 절세, 언제 얼마나 효과적인가 | 코인 인사이트",
  description:
    "증여 후 매도하면 수증자의 취득가액이 시가로 리셋되어 양도세를 줄일 수 있습니다. 관계별 공제 한도·증여세율·직접 매도와의 비교까지 사례 중심으로 정리했습니다.",
  keywords:
    "코인 증여 절세, 가상자산 증여세, 비트코인 증여, 취득가액 리셋, 코인 세금 절세 전략",
  openGraph: {
    title: "코인 증여 절세, 언제 얼마나 효과적인가",
    description:
      "증여 후 매도하면 수증자의 취득가액이 시가로 리셋되어 양도세를 줄일 수 있습니다. 관계별 공제 한도·증여세율·직접 매도와의 비교까지 사례 중심으로 정리했습니다.",
    type: "article",
  },
};

const ARTICLE = {
  title: "코인 증여 절세, 언제 얼마나 효과적인가",
  date: "2026-09-08",
  category: "세금",
};

export default function ArticleCryptoGiftTaxStrategy() {
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
          증여 후 매도하면 수증자의 취득가액이 시가로 리셋되어 양도세를 크게 줄일 수 있습니다.
          관계별 공제 한도·증여세율·직접 매도와의 비교까지 사례 중심으로 정리했습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">핵심 원리 — 취득가액이 리셋된다</h2>
          <p className="leading-relaxed mb-4">
            2027년부터 가상자산 양도소득세가 시행되면, 코인을 매도할 때 취득가와 매도가의 차익에
            22% 세율이 붙습니다. 10년 전에 100만원에 산 비트코인을 1억원에 팔면 양도차익이
            9,900만원에 달하고, 세금도 수백만원이 됩니다.
          </p>
          <p className="leading-relaxed mb-4">
            이때 활용할 수 있는 절세 방법 중 하나가 <strong>증여</strong>입니다.
            핵심 원리는 단순합니다.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
            <p className="font-semibold text-blue-900 mb-3">증여 절세의 핵심 메커니즘</p>
            <ol className="space-y-2 text-sm text-blue-800">
              <li className="flex gap-2"><span className="font-bold">①</span> 내가 보유한 코인을 가족에게 증여</li>
              <li className="flex gap-2"><span className="font-bold">②</span> 수증자(받는 사람)의 취득가액 = <strong>증여 시점의 시가</strong></li>
              <li className="flex gap-2"><span className="font-bold">③</span> 수증자가 그 시가로 즉시 매도하면 양도차익 = 0 → 양도세 0</li>
              <li className="flex gap-2"><span className="font-bold">④</span> 대신 증여세를 납부 (관계별 공제 한도 내에서는 면제)</li>
            </ol>
          </div>
          <p className="leading-relaxed text-gray-600 text-sm">
            즉, 내가 직접 팔 때의 양도세(22%)와 가족에게 증여 후 발생하는 증여세를 비교해서
            어느 쪽이 유리한지 판단하는 것이 증여 절세 전략의 전부입니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">관계별 증여 공제 한도</h2>
          <p className="leading-relaxed mb-4">
            증여세는 받는 사람 기준으로 부과됩니다. 관계에 따라 공제 한도가 다르며,
            이 한도까지는 증여세가 0원입니다. 단, 공제 한도는 <strong>10년 누적</strong>으로 계산됩니다.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">관계</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">10년간 공제 한도</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">배우자</td>
                  <td className="px-4 py-3 text-right font-bold text-green-700">6억원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">직계존속 (부모·조부모)</td>
                  <td className="px-4 py-3 text-right font-semibold">5,000만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">성인 자녀·손자녀</td>
                  <td className="px-4 py-3 text-right font-semibold">5,000만원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">미성년 자녀</td>
                  <td className="px-4 py-3 text-right font-semibold">2,000만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">형제자매·기타 친족</td>
                  <td className="px-4 py-3 text-right text-gray-600">1,000만원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
            <strong>10년 합산 주의:</strong> 지난 10년 이내에 같은 사람에게 증여한 이력이 있다면,
            그 금액이 공제 한도에서 차감됩니다. 예를 들어 3년 전 자녀에게 2,000만원을 이미 증여했다면
            지금 공제 가능한 금액은 3,000만원만 남습니다.
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">증여세율 구조</h2>
          <p className="leading-relaxed mb-4">
            공제 한도를 초과하는 금액에는 다음 누진세율이 적용됩니다.
            금액이 클수록 세율이 높아지는 구조입니다.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">과세표준 (공제 후 금액)</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">세율</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">누진공제</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3">1억원 이하</td>
                  <td className="px-4 py-3 text-right font-semibold text-green-700">10%</td>
                  <td className="px-4 py-3 text-right text-gray-500">—</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">1억 초과 ~ 5억원 이하</td>
                  <td className="px-4 py-3 text-right font-semibold">20%</td>
                  <td className="px-4 py-3 text-right text-gray-500">1,000만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">5억 초과 ~ 10억원 이하</td>
                  <td className="px-4 py-3 text-right font-semibold">30%</td>
                  <td className="px-4 py-3 text-right text-gray-500">6,000만원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">10억 초과 ~ 30억원 이하</td>
                  <td className="px-4 py-3 text-right font-semibold text-orange-600">40%</td>
                  <td className="px-4 py-3 text-right text-gray-500">1억 6,000만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">30억원 초과</td>
                  <td className="px-4 py-3 text-right font-bold text-red-600">50%</td>
                  <td className="px-4 py-3 text-right text-gray-500">4억 6,000만원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-500">
            가상자산 양도소득세는 22% 단일 세율인 반면, 증여세는 과세표준이 커질수록 세율이 올라갑니다.
            따라서 증여 금액이 크면 오히려 직접 매도보다 불리할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">케이스별 비교 — 언제 유리한가</h2>

          {/* 케이스 1 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-green-100 text-green-700">케이스 1</span>
              <span className="font-semibold">공제 한도 내 증여 — 가장 확실한 절세</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              비트코인을 500만원에 매수. 현재 시가 4,000만원. 성인 자녀에게 증여하는 경우.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm">
                <p className="font-semibold text-red-700 mb-2">직접 매도 시</p>
                <ul className="space-y-1 text-red-600">
                  <li>양도차익: 3,500만원</li>
                  <li>기본공제: −250만원</li>
                  <li>납부세액: 3,250만원 × 22%</li>
                  <li className="font-bold pt-1 border-t border-red-200">= 715만원</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm">
                <p className="font-semibold text-green-700 mb-2">자녀에게 증여 후 매도</p>
                <ul className="space-y-1 text-green-700">
                  <li>공제 한도 5,000만원 이내</li>
                  <li>증여세: 0원</li>
                  <li>수증자 양도세: 0원 (즉시 매도)</li>
                  <li className="font-bold pt-1 border-t border-green-200">= 총 0원</li>
                </ul>
              </div>
            </div>
            <p className="text-sm font-semibold text-green-700">→ 증여로 715만원 절세. 공제 한도 내에서는 세금이 0원입니다.</p>
          </div>

          {/* 케이스 2 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700">케이스 2</span>
              <span className="font-semibold">배우자 증여 — 6억 공제로 대규모 절세</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              1,000만원에 매수한 비트코인이 현재 3억원. 배우자에게 증여하는 경우.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm">
                <p className="font-semibold text-red-700 mb-2">직접 매도 시</p>
                <ul className="space-y-1 text-red-600">
                  <li>양도차익: 2억 9,000만원</li>
                  <li>기본공제: −250만원</li>
                  <li className="font-bold pt-1 border-t border-red-200">납부세액: 약 6,325만원</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm">
                <p className="font-semibold text-green-700 mb-2">배우자 증여 후 매도</p>
                <ul className="space-y-1 text-green-700">
                  <li>3억원 → 공제 6억 이내</li>
                  <li>증여세: 0원</li>
                  <li>수증자 양도세: 0원 (즉시 매도)</li>
                  <li className="font-bold pt-1 border-t border-green-200">= 총 0원</li>
                </ul>
              </div>
            </div>
            <p className="text-sm font-semibold text-green-700">→ 약 6,325만원 절세. 배우자 공제 6억은 매우 강력한 절세 도구입니다.</p>
          </div>

          {/* 케이스 3 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-yellow-100 text-yellow-700">케이스 3</span>
              <span className="font-semibold">공제 한도 초과 — 비교가 필요한 구간</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              3,000만원에 매수한 비트코인이 2억원. 성인 자녀에게 증여하는 경우
              (이전 10년간 증여 없음).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm">
                <p className="font-semibold text-red-700 mb-2">직접 매도 시</p>
                <ul className="space-y-1 text-red-600">
                  <li>양도차익: 1억 7,000만원</li>
                  <li>과세표준: 1억 6,750만원</li>
                  <li className="font-bold pt-1 border-t border-red-200">납부세액: 약 3,685만원</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm">
                <p className="font-semibold text-blue-700 mb-2">자녀 증여 후 즉시 매도</p>
                <ul className="space-y-1 text-blue-700">
                  <li>증여금액 2억 − 공제 5천만 = 1억 5천만 과세</li>
                  <li>증여세: 1억 5천만 × 20% − 1천만 = 2,000만원</li>
                  <li>수증자 양도세: 0원</li>
                  <li className="font-bold pt-1 border-t border-blue-200">= 총 2,000만원</li>
                </ul>
              </div>
            </div>
            <p className="text-sm font-semibold text-green-700">→ 증여 시 1,685만원 절세. 공제 초과 구간에서도 증여가 유리할 수 있습니다.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">증여가 불리해지는 경우</h2>
          <p className="leading-relaxed mb-4">
            증여세율이 높아지면 직접 매도의 22%보다 증여세가 더 클 수 있습니다.
            특히 소액 공제밖에 안 되는 관계에서 큰 금액을 증여할 때 주의해야 합니다.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 text-sm">
            <p className="font-semibold text-red-800 mb-3">예시: 형제에게 1억원 상당 코인 증여</p>
            <ul className="space-y-1 text-red-700">
              <li>증여금액: 1억원 − 공제 1,000만원 = 과세표준 9,000만원</li>
              <li>증여세: 9,000만원 × 10% = <strong>900만원</strong></li>
            </ul>
            <div className="mt-3 border-t border-red-200 pt-3">
              <p className="text-red-700">직접 매도 시 양도세: 취득가에 따라 다르지만,</p>
              <p className="text-red-700">양도차익이 4,000만원 이하라면 증여세보다 낮을 수 있습니다.</p>
            </div>
            <p className="mt-3 text-red-800 font-semibold">→ 반드시 계산기로 직접 비교해보세요.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">10년 주기 전략과 타이밍</h2>
          <p className="leading-relaxed mb-4">
            증여 공제 한도는 10년마다 리셋됩니다. 이를 활용하면 장기적으로 세금을 체계적으로 줄일 수 있습니다.
          </p>
          <div className="space-y-3">
            {[
              {
                title: "자녀가 어릴 때부터 시작",
                desc: "미성년 자녀에게 2,000만원, 성인이 된 후 5,000만원, 10년 뒤 또 5,000만원. 장기적으로 합법적인 자산 이전이 가능합니다.",
              },
              {
                title: "코인 가격 하락기에 증여",
                desc: "증여세는 증여 시점의 시가 기준입니다. 코인 가격이 내려갔을 때 증여하면 증여세 부담이 낮아지고, 이후 수증자가 가격 상승 후 매도해도 취득가액이 증여 시점 시가로 리셋되어 있습니다.",
              },
              {
                title: "배우자 공제는 가장 강력한 수단",
                desc: "배우자는 10년간 6억까지 공제됩니다. 코인 가격이 크게 오른 경우, 배우자에게 증여 후 매도하는 방식은 거의 모든 케이스에서 직접 매도보다 유리합니다.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 border border-gray-200 rounded-xl">
                <span className="text-blue-400 font-bold text-lg leading-none mt-0.5">✓</span>
                <div>
                  <p className="font-semibold mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">꼭 알아야 할 주의사항</h2>
          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "증여 후 즉시 매도해야 효과적",
                desc: "수증자가 증여받은 코인을 보유하다 나중에 더 오른 가격에 매도하면, 증여 시점 시가가 취득가로 잡혀 추가 양도세가 발생합니다. 취득가 리셋 효과를 최대한 쓰려면 증여 직후 매도가 일반적입니다.",
              },
              {
                num: "02",
                title: "증여세 신고는 3개월 내",
                desc: "증여받은 달의 말일로부터 3개월 이내에 수증자가 증여세를 신고·납부해야 합니다. 신고 기한을 놓치면 가산세가 붙습니다.",
              },
              {
                num: "03",
                title: "취득가액 리셋은 증여 시점 기준",
                desc: "수증자의 취득가액은 증여일 현재 시가입니다. 증여 후 코인 가격이 크게 내려가면 수증자가 손실을 볼 수도 있으니, 증여 대상 코인과 금액을 신중하게 결정하세요.",
              },
              {
                num: "04",
                title: "명의 도용이 아닌 실질 증여여야 함",
                desc: "세법상 증여는 실제 자산의 이전이어야 합니다. 가족 명의 지갑으로 옮겨놓고 본인이 계속 관리한다면 증여로 인정받기 어려울 수 있습니다.",
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
          <h2 className="text-2xl font-bold mb-4">정리 — 증여 절세가 효과적인 조건</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">조건</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">효과</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3">배우자에게 6억 이하 증여</td>
                  <td className="px-4 py-3 text-center font-bold text-green-600">증여세 0원, 양도세 절감</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">직계존비속 공제 한도 이내 증여</td>
                  <td className="px-4 py-3 text-center font-bold text-green-600">증여세 0원, 양도세 절감</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">취득가 대비 시가 상승폭이 큰 장기 보유자</td>
                  <td className="px-4 py-3 text-center font-semibold text-blue-600">공제 초과분도 절세 가능</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">코인 가격 하락기에 증여</td>
                  <td className="px-4 py-3 text-center font-semibold text-blue-600">증여세 부담 감소</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">소액 공제 관계 + 큰 금액 증여</td>
                  <td className="px-4 py-3 text-center font-semibold text-red-500">직접 매도보다 불리할 수 있음</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 면책 고지 */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-500 leading-relaxed">
          본 글은 일반적인 정보 제공을 목적으로 작성되었으며 세무 조언이 아닙니다. 세법은 개정될 수 있으며
          개인 상황(기존 증여 이력, 보유 수량, 거래 구조 등)에 따라 결과가 크게 달라집니다.
          실제 증여 전에 반드시 세무 전문가와 상담하시기 바랍니다.
        </div>
      </article>

      {/* 관련 계산기 CTA */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-blue-900 mb-1">관련 계산기로 직접 비교해보세요</p>
        <p className="text-sm text-blue-700 mb-4">
          취득가액·현재 시가·수량을 입력하면 관계별 증여세와 직접 매도 양도세를 한눈에 비교합니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/calculators/gift-tax"
            className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition text-center"
          >
            코인 증여 절세 계산기 →
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
