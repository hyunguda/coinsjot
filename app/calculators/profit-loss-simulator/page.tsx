import { Metadata } from "next";
import { ProfitLossCalculator } from "@/app/components/ProfitLossCalculator";

export const metadata: Metadata = {
  title: "코인 포트폴리오 통합 계산기 | coinsjot",
  description:
    "보유 중인 여러 코인의 손익을 한 번에 합산해 실제 납부세액과 세후 수익률을 계산합니다. 익절·손절 상계로 세금을 줄이는 방법을 확인하세요.",
  keywords: "코인 포트폴리오 세금, 코인 합산 세금, 가상화폐 양도소득세, 손익통산, 손절 상계, 기본공제, 계산기",
};

export default function ProfitLossSimulatorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          코인 포트폴리오 통합 계산기
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          보유 중인 여러 코인의 손익을 한 번에 합산해 실제 납부세액과 세후 수익률을 계산합니다.
          <br />
          익절 종목과 손절 종목을 함께 입력하면 세금을 얼마나 줄일 수 있는지 바로 확인하세요.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h3 className="font-bold text-blue-900 mb-2">포트폴리오 통합 계산이란?</h3>
          <p className="text-blue-800 text-sm mb-2">
            여러 코인을 거래할 때, <strong>이익과 손실을 합산</strong>해 전체 순이익에 대해서만 세금을 납부합니다.
          </p>
          <p className="text-blue-800 text-sm mb-2">
            <strong>기본공제:</strong> 연간 순이익에서 250만원을 공제 후 과세
          </p>
          <p className="text-blue-800 text-sm">
            <strong>세율:</strong> (순이익 − 250만원) × 22%
          </p>
        </div>
      </div>

      {/* Calculator */}
      <div className="mb-16">
        <ProfitLossCalculator />
      </div>

      {/* Guide Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
        <h2 className="text-3xl font-bold mb-8">자세한 설명</h2>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-bold mb-4">손익통산이 중요한 이유</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              2027년부터 시행되는 가상자산 양도소득세에서는 동일 과세 기간 내 여러 종목의 손익을
              합산해 과세합니다. 예를 들어 비트코인에서 1,000만원 이익을 얻었고 이더리움에서
              300만원 손실이 났다면, 과세 기준 이익은 700만원이 됩니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              이를 "손익통산"이라고 하며, 이 계산기는 보유 종목 전체의 손익을 한 번에 합산해
              예상 납부세액을 보여줍니다.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">계산 예시</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm min-w-[400px]">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-2 px-3">코인</th>
                      <th className="text-right py-2 px-3">취득가액</th>
                      <th className="text-right py-2 px-3">매도가</th>
                      <th className="text-right py-2 px-3">손익</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-3">BTC</td>
                      <td className="text-right py-2 px-3">5,000만원</td>
                      <td className="text-right py-2 px-3">8,000만원</td>
                      <td className="text-right py-2 px-3 text-blue-600 font-semibold">+3,000만원</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-3">ETH</td>
                      <td className="text-right py-2 px-3">2,000만원</td>
                      <td className="text-right py-2 px-3">1,300만원</td>
                      <td className="text-right py-2 px-3 text-red-500 font-semibold">−700만원</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-3">XRP</td>
                      <td className="text-right py-2 px-3">500만원</td>
                      <td className="text-right py-2 px-3">800만원</td>
                      <td className="text-right py-2 px-3 text-blue-600 font-semibold">+300만원</td>
                    </tr>
                    <tr className="bg-gray-100 font-semibold">
                      <td className="py-2 px-3" colSpan={3}>손익통산 합계</td>
                      <td className="text-right py-2 px-3 text-green-600">+2,600만원</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>손익통산 합계</span>
                  <span className="font-semibold">2,600만원</span>
                </div>
                <div className="flex justify-between">
                  <span>기본공제</span>
                  <span className="font-semibold text-green-600">−250만원</span>
                </div>
                <div className="flex justify-between border-t pt-2 mt-2">
                  <span>과세표준</span>
                  <span className="font-semibold">2,350만원</span>
                </div>
                <div className="flex justify-between text-red-600 font-bold text-base">
                  <span>예상 납부세액 (×22%)</span>
                  <span>517만원</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">주의사항 및 자주 묻는 질문</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4">
                <p className="font-semibold text-yellow-900 mb-2">Q. 의제취득가액 특례와 함께 적용할 수 있나요?</p>
                <p className="text-yellow-800">
                  네. 각 종목에 의제취득가액 특례(MAX(실제 취득가액, 2026.12.31 시가))를 먼저 적용한 뒤,
                  최종 취득가액을 이 계산기에 입력하면 됩니다. 의제취득가액 계산은{" "}
                  <a href="/calculators/deemed-acquisition-price" className="underline text-yellow-700 hover:text-yellow-900">
                    가상화폐 세금 계산기
                  </a>를 활용하세요.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4">
                <p className="font-semibold text-yellow-900 mb-2">Q. 이미 손절한 것과 아직 매도 안 한 것도 합산되나요?</p>
                <p className="text-yellow-800">
                  이 계산기는 실제 매도가 완료된 거래를 입력하는 것이 원칙입니다. 보유 중인 코인의
                  미실현 손익은 과세 대상이 아닙니다. 단, 연말까지 손절을 통해 손익통산을 활용하는
                  전략을 시뮬레이션하는 용도로도 사용할 수 있습니다.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4">
                <p className="font-semibold text-yellow-900 mb-2">Q. 기본공제 250만원은 매년 적용되나요?</p>
                <p className="text-yellow-800">
                  네. 가상자산 양도소득세의 기본공제 250만원은 연간 기준으로 적용됩니다.
                  따라서 1년 동안 발생한 손익 전체를 통산해 250만원을 공제합니다.
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
          이 계산 결과는 <strong>참고용</strong>이며, 정확한 세액은 법인 및 개인의 구체적 상황에 따라 달라질 수 있습니다.
        </p>
        <ul className="text-red-800 text-sm space-y-2 mb-4 ml-4">
          <li>• 세법은 수시로 개정될 수 있습니다.</li>
          <li>• 거래 수수료, 환전 수수료 등은 계산에 포함되지 않았습니다.</li>
          <li>• 실제 신고 전 반드시 세무 전문가(세무사, 회계사)와 상담하십시오.</li>
          <li>• 이 사이트의 정보 사용으로 인한 모든 손실과 책임은 사용자 본인에게 있습니다.</li>
        </ul>
        <p className="text-red-900 font-semibold">
          정확한 세액 계산과 신고는 세무 전문가와 함께하시기 바랍니다.
        </p>
      </div>
    </div>
  );
}
