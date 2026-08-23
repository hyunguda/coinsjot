import { Metadata } from "next";
import { DeemedAcquisitionCalculator } from "@/app/components/DeemedAcquisitionCalculator";

export const metadata: Metadata = {
  title: "의제취득가액 계산기 | coinsjot",
  description:
    "2027년 시행되는 가상자산 양도소득세의 의제취득가액 특례를 적용했을 때 절세 효과를 즉시 계산하세요. 실제 취득가액과 연말 시가를 비교하여 어느 것이 유리한지 확인할 수 있습니다.",
  keywords: "의제취득가액, 양도소득세, 코인세금, 계산기, 절세",
};

export default function DeemedAcquisitionPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          의제취득가액 계산기
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          2027년 1월 1일부터 시행되는 가상자산 양도소득세 제도에서 핵심은 "의제취득가액 특례"입니다.
          <br />
          2026년 12월 31일 이전에 보유한 코인은 실제 취득가액과 연말 시가 중 <strong>큰 금액</strong>을
          취득가액으로 인정받을 수 있습니다.
          <br />
          이 계산기로 당신의 포지션에서 이 특례가 얼마나 절세 효과를 줄 수 있는지 즉시 확인하세요.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h3 className="font-bold text-blue-900 mb-2">💡 핵심 정보</h3>
          <p className="text-blue-800 text-sm mb-2">
            <strong>시행일:</strong> 2027년 1월 1일
          </p>
          <p className="text-blue-800 text-sm mb-2">
            <strong>특례 대상:</strong> 2026년 12월 31일 이전에 보유한 코인
          </p>
          <p className="text-blue-800 text-sm">
            <strong>취득가액:</strong> MAX(실제 취득가액, 2026년 12월 31일 시가)
          </p>
        </div>
      </div>

      {/* Calculator */}
      <div className="mb-16">
        <DeemedAcquisitionCalculator />
      </div>

      {/* Guide Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
        <h2 className="text-3xl font-bold mb-8">자세한 설명</h2>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-bold mb-4">가상자산 양도소득세란?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              2027년부터 한국에서는 가상자산(코인 등) 매매로 얻은 이익에 대해 22% 양도소득세를
              부과합니다. 기존의 주식, 부동산과 같이 양도차익에 대한 세금을 내야 하는 것입니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              단, 2026년 12월 31일 이전에 코인을 보유했다면 "의제취득가액 특례"라는 경과 조치를
              받을 수 있습니다.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">의제취득가액 특례 (경과 조치)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              법 시행 이전부터 보유 중인 코인에 대해서는 다음 중 <strong>더 큰 금액</strong>을
              취득가액으로 인정받습니다.
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold flex-shrink-0">1.</span>
                <span className="text-gray-700">
                  <strong>실제 취득가액:</strong> 코인을 구매한 당시의 실제 구입 가격
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold flex-shrink-0">2.</span>
                <span className="text-gray-700">
                  <strong>2026년 12월 31일 시가:</strong> 제도 시행 직전의 시장 가격
                </span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              이 특례 덕분에, 구입 후 큰 수익을 얻지 못했거나 손실이 난 경우에는 더 높은 시가를
              기준으로 세액을 계산해 절세할 수 있습니다.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">계산 예시</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                <strong>가정:</strong> 비트코인 0.1 BTC를
              </p>
              <ul className="space-y-2 text-gray-700 mb-6 ml-4">
                <li>• 2023년 5,000만 원에 구매</li>
                <li>• 2026년 12월 31일에 6,000만 원 (가정)</li>
                <li>• 2027년 3월에 8,000만 원에 판매</li>
              </ul>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span>실제 취득가액 기준:</span>
                  <span>
                    양도차익 = 8,000만 - 5,000만 = <strong>3,000만 원</strong>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span></span>
                  <span>
                    세액 = (3,000만 - 250만) × 22% = <strong>약 607.5만 원</strong>
                  </span>
                </div>

                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between items-center text-green-700 font-bold">
                    <span>의제취득가액 특례 적용 (6,000만 원 기준):</span>
                    <span></span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span>양도차익 = 8,000만 - 6,000만 = <strong>2,000만 원</strong></span>
                    <span></span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>
                      세액 = (2,000만 - 250만) × 22% = <strong>약 385만 원</strong>
                    </span>
                    <span></span>
                  </div>
                  <div className="flex justify-between items-center text-green-700 font-bold mt-2">
                    <span>절세 효과: <span className="text-2xl">222.5만 원</span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">주의사항 및 자주 묻는 질문</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4">
                <p className="font-semibold text-yellow-900 mb-2">Q. 2026년 12월 31일 시가는 어떻게 확인하나요?</p>
                <p className="text-yellow-800">
                  거래소(업비트, 빗썸 등)의 종가를 기준으로 합니다. 증명을 위해 거래소 스크린샷이나 공식 API
                  데이터를 보관하는 것이 좋습니다. 여러 거래소의 가격이 다를 수 있으므로 가장 높은 가격을
                  선택하는 것이 절세에 유리합니다.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4">
                <p className="font-semibold text-yellow-900 mb-2">Q. 이 계산기 결과를 신고할 때 그대로 사용할 수 있나요?</p>
                <p className="text-yellow-800">
                  <strong>아니요.</strong> 이 계산 결과는 참고용입니다. 실제 신고를 위해서는 반드시 세무 전문가
                  (세무사, 회계사)와 상담하십시오. 개인의 상황, 거래 기록, 세법 개정 등에 따라 결과가
                  달라질 수 있습니다.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4">
                <p className="font-semibold text-yellow-900 mb-2">Q. 손절(손실)은 어떻게 처리되나요?</p>
                <p className="text-yellow-800">
                  이 계산기는 단일 종목의 계산만 지원합니다. 여러 코인을 보유하며 일부는 익절, 일부는 손절한
                  경우 "손익통산"을 통해 전체 손익을 합산할 수 있습니다. (향후 손익통산 계산기 예정)
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
          이 계산 결과는 <strong>참고용</strong>이며, 정확한 세액은 법인 및 개인의 구체적 상황에 따라 달라질 수
          있습니다.
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
