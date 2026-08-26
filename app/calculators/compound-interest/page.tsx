import { Metadata } from "next";
import { CompoundInterestCalculator } from "@/app/components/CompoundInterestCalculator";

export const metadata: Metadata = {
  title: "코인 복리 수익 계산기 | coinsjot",
  description:
    "초기 투자금, 수익률, 총 회차를 입력하면 복리 효과로 자산이 얼마나 성장하는지 회차별로 계산합니다. 회차당 추가 투자금(적립식)도 지원합니다.",
  keywords:
    "복리 계산기, 코인 복리, 가상화폐 복리, 월복리 계산, 복리 수익 시뮬레이터, 적립식 복리, 코인 수익 계산",
};

export default function CompoundInterestPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          코인 복리 수익 계산기
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          초기 투자금, 회차당 수익률, 총 회차를 입력하면 복리 효과로 자산이 얼마나 성장하는지 회차별로 확인하세요.
          <br />
          기간 단위(일·주·월·년)에 관계없이 수익률과 회차만 맞게 입력하면 됩니다.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h3 className="font-bold text-blue-900 mb-2">복리란?</h3>
          <p className="text-blue-800 text-sm mb-2">
            수익금이 원금에 합산되어 <strong>이익 위에 이익이 쌓이는</strong> 방식입니다.
            단리와 달리 회차가 쌓일수록 수익이 가속적으로 증가합니다.
          </p>
          <p className="text-blue-800 text-sm">
            <strong>계산 공식:</strong> 이번 회차 자산 = 전 회차 자산 × (1 + 수익률%) + 회차당 추가 투자금
          </p>
        </div>
      </div>

      {/* Calculator */}
      <div className="mb-16">
        <CompoundInterestCalculator />
      </div>

      {/* Guide Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
        <h2 className="text-3xl font-bold mb-8">자세한 설명</h2>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-bold mb-4">복리의 힘</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              복리는 &lsquo;72의 법칙&rsquo;으로 설명할 수 있습니다. 수익률이 일정할 때,
              자산이 2배가 되는 데 걸리는 회차는 대략 <strong>72 ÷ 수익률(%)</strong>입니다.
              예를 들어 회차당 3% 수익률이라면 약 24회차 후 원금이 2배가 됩니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              단리라면 동일 조건에서 원금의 2배에 도달하려면 약 33회차가 필요합니다.
              복리는 이 차이를 회차가 쌓일수록 더 크게 벌립니다.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">계산 예시</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-sm text-gray-600 mb-4 font-medium">
                조건: 초기 투자 1,000만원 / 회차당 수익률 5% / 총 12회차
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm min-w-[360px]">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-2 px-3">회차</th>
                      <th className="text-right py-2 px-3">자산 합계</th>
                      <th className="text-right py-2 px-3">수익금</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { m: "3회차", bal: "11,576,250", pnl: "+1,576,250" },
                      { m: "6회차", bal: "13,400,956", pnl: "+3,400,956" },
                      { m: "12회차", bal: "17,958,563", pnl: "+7,958,563" },
                    ].map(({ m, bal, pnl }) => (
                      <tr key={m} className="border-b border-gray-200">
                        <td className="py-2 px-3">{m}</td>
                        <td className="text-right py-2 px-3 font-semibold text-blue-600">{bal}원</td>
                        <td className="text-right py-2 px-3 text-green-600">{pnl}원</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                12회차 뒤 약 <strong>1,796만원</strong>으로 성장 — 총 수익률 <strong>+79.6%</strong>
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">주의사항 및 자주 묻는 질문</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4">
                <p className="font-semibold text-yellow-900 mb-2">Q. 수익률과 회차는 어떻게 설정하나요?</p>
                <p className="text-yellow-800">
                  기간 단위는 자유롭게 정하면 됩니다. 월 단위라면 월 수익률과 총 개월 수를, 주 단위라면
                  주간 수익률과 총 주 수를 입력하세요. 낙관·중립·보수적 시나리오를 각각 넣어 비교해보는 것을 권장합니다.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4">
                <p className="font-semibold text-yellow-900 mb-2">Q. 세금은 계산에 포함되나요?</p>
                <p className="text-yellow-800">
                  아니요. 이 계산기는 세전 복리 수익을 계산합니다. 2027년부터 시행되는 가상자산
                  양도소득세를 고려하려면{" "}
                  <a href="/calculators/deemed-acquisition-price" className="underline text-yellow-700 hover:text-yellow-900">
                    가상화폐 세금 계산기
                  </a>를 함께 활용하세요.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4">
                <p className="font-semibold text-yellow-900 mb-2">Q. 거치식과 적립식 차이가 뭔가요?</p>
                <p className="text-yellow-800">
                  거치식은 초기 투자금만 넣고 운용하는 방식입니다. 회차당 추가 투자금을 비워두면 거치식입니다.
                  적립식은 매 회차마다 일정 금액을 추가 투자하는 방식으로, 회차당 추가 투자금에 금액을 입력하면 됩니다.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-8">
        <h3 className="font-bold text-lg text-red-900 mb-4">⚠️ 중요: 면책 조항</h3>
        <p className="text-red-800 text-sm leading-relaxed mb-4">
          이 계산 결과는 <strong>참고용</strong>이며, 실제 투자 수익을 보장하지 않습니다.
        </p>
        <ul className="text-red-800 text-sm space-y-2 mb-4 ml-4">
          <li>• 가상자산 시장은 변동성이 크며 손실이 발생할 수 있습니다.</li>
          <li>• 거래 수수료, 세금 등은 계산에 포함되지 않았습니다.</li>
          <li>• 과거 수익률이 미래 수익률을 보장하지 않습니다.</li>
          <li>• 이 사이트의 정보 사용으로 인한 모든 손실과 책임은 사용자 본인에게 있습니다.</li>
        </ul>
        <p className="text-red-900 font-semibold">
          투자 결정 전 반드시 충분한 조사와 전문가 상담을 권장합니다.
        </p>
      </div>
    </div>
  );
}
