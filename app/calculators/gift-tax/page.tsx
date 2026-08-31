import { Metadata } from "next";
import { GiftTaxCalculator } from "@/app/components/GiftTaxCalculator";

export const metadata: Metadata = {
  title: "코인 증여 절세 계산기 | coinsjot",
  description:
    "가상화폐를 배우자·자녀·부모·형제자매에게 증여할 때 증여세와 절세 효과를 관계별로 비교합니다. 직접 매도 시 양도세와 증여 시 증여세를 한눈에 비교하세요.",
  keywords:
    "코인 증여세 계산기, 가상자산 증여 절세, 비트코인 증여세, 코인 증여 세금, 가상화폐 절세 방법, 코인 증여 양도세",
};

export default function GiftTaxPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 헤더 */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          코인 증여 절세 계산기
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          <strong className="text-gray-800">취득가액·현재 시가·수량</strong>을
          입력하면 관계별 증여세와 절세 효과를 즉시 비교합니다.
          <br />
          "그냥 팔까, 증여하고 팔까?" 숫자로 바로 확인하세요.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h3 className="font-bold text-blue-900 mb-2">
            왜 증여로 절세가 되나요?
          </h3>
          <p className="text-blue-800 text-sm mb-2">
            증여받은 코인의 <strong>취득가액은 증여 시점의 시가</strong>로
            리셋됩니다. 배우자에게 현재 시가로 증여하면, 배우자가 즉시 매도해도
            양도차익이 거의 0이 되어 양도세가 없습니다.
          </p>
          <p className="text-blue-800 text-sm">
            대신 증여세가 발생할 수 있지만, 관계별 공제 한도 내에서는 증여세도
            0원입니다. 공제 한도를 넘는 경우에도 양도세보다 증여세가 낮을 수
            있습니다.
          </p>
        </div>
      </div>

      {/* 계산기 */}
      <div className="mb-16">
        <GiftTaxCalculator />
      </div>

      {/* 가이드 */}
      <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
        <h2 className="text-3xl font-bold mb-8">자세한 설명</h2>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-bold mb-4">증여재산 공제 한도 (10년 누적)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border border-gray-200">
                      관계
                    </th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700 border border-gray-200">
                      공제 한도
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { rel: "배우자", limit: "6억원" },
                    { rel: "직계존속 (부모·조부모)", limit: "5,000만원" },
                    { rel: "직계비속 성인 (자녀·손자녀)", limit: "5,000만원" },
                    { rel: "직계비속 미성년 (미성년 자녀)", limit: "2,000만원" },
                    { rel: "기타 친족 (형제자매, 삼촌, 이모 등)", limit: "1,000만원" },
                  ].map(({ rel, limit }) => (
                    <tr key={rel} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700 border border-gray-200">
                        {rel}
                      </td>
                      <td className="px-4 py-3 text-right font-semibold text-gray-800 border border-gray-200">
                        {limit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              ※ 상속세 및 증여세법 제53조 기준. 동일인으로부터 10년간 누적 공제
              한도입니다.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">증여세 세율 구간</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border border-gray-200">
                      과세표준
                    </th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700 border border-gray-200">
                      세율
                    </th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700 border border-gray-200">
                      누진공제
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { range: "1억원 이하", rate: "10%", deduction: "—" },
                    { range: "1억원 초과 ~ 5억원 이하", rate: "20%", deduction: "1,000만원" },
                    { range: "5억원 초과 ~ 10억원 이하", rate: "30%", deduction: "6,000만원" },
                    { range: "10억원 초과 ~ 30억원 이하", rate: "40%", deduction: "1억 6,000만원" },
                    { range: "30억원 초과", rate: "50%", deduction: "4억 6,000만원" },
                  ].map(({ range, rate, deduction }) => (
                    <tr key={range} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-700 border border-gray-200">
                        {range}
                      </td>
                      <td className="px-4 py-3 text-right font-semibold text-blue-600 border border-gray-200">
                        {rate}
                      </td>
                      <td className="px-4 py-3 text-right text-gray-600 border border-gray-200">
                        {deduction}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">계산 예시</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-sm text-gray-600 mb-4 font-medium">
                조건: 취득가 3,000만원/코인 × 1코인, 현재 시가 1억원/코인
              </p>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="border-l-4 border-red-400 pl-4">
                  <p className="font-semibold text-red-700 mb-1">직접 매도 시</p>
                  <p>양도차익: 1억 − 3천만 = 7,000만원</p>
                  <p>과세표준: 7,000만 − 250만(기본공제) = 6,750만원</p>
                  <p>양도세: 6,750만 × 22% = <strong>1,485만원</strong></p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <p className="font-semibold text-green-700 mb-1">배우자에게 증여 후 매도 시</p>
                  <p>증여 재산가액: 1억원 → 6억 공제 한도 이내</p>
                  <p>증여세: <strong>0원</strong></p>
                  <p>배우자 취득가: 1억원으로 리셋 → 즉시 매도 시 양도세 0원</p>
                  <p className="font-bold text-green-700 mt-1">절세액: 1,485만원</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">주의사항</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
                <p className="font-semibold text-yellow-900 mb-1">10년 누적 공제</p>
                <p className="text-yellow-800 text-sm">
                  공제 한도는 동일인으로부터 10년간 받은 증여 합산 기준입니다.
                  과거 증여 내역이 있다면 실제 남은 공제액은 줄어듭니다.
                </p>
              </div>
              <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
                <p className="font-semibold text-yellow-900 mb-1">증여세 납부 의무</p>
                <p className="text-yellow-800 text-sm">
                  증여세는 원칙적으로 수증자(받는 사람)가 납부합니다.
                  증여일이 속하는 달의 말일부터 3개월 이내에 신고해야 합니다.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* 면책 조항 */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
        <h3 className="font-bold text-lg text-yellow-900 mb-3">⚠️ 중요 안내</h3>
        <p className="text-yellow-800 text-sm leading-relaxed">
          이 계산 결과는 <strong>참고용</strong>입니다. 세율·공제 한도는 세법
          개정에 따라 변경될 수 있으며, 개인 상황(이전 증여 내역, 증여 방식 등)에
          따라 실제 세액이 달라집니다. 정확한 증여 및 절세 전략은 세무사와 반드시
          상담하세요. 이 사이트 이용으로 발생하는 모든 손해에 대해 책임을 지지
          않습니다.
        </p>
      </div>
    </div>
  );
}
