import { Metadata } from "next";
import { LeveragePnLCalculator } from "@/app/components/LeveragePnLCalculator";

export const metadata: Metadata = {
  title: "코인 선물 레버리지 손익 계산기 | coinsjot",
  description:
    "진입금액, 레버리지, 엑시트금액을 입력하면 수익률·청산가·청산까지 거리를 즉시 계산합니다. 롱·숏 포지션 모두 지원.",
  keywords:
    "레버리지 계산기, 선물 계산기, 청산가 계산기, 코인 선물 손익, 레버리지 손익, 코인 레버리지, 청산가 계산, 선물거래 계산기",
};

export default function LeveragePnLPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          코인 선물 레버리지 손익 계산기
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          진입금액, 레버리지, 엑시트금액을 입력하면 수익률·청산가·청산까지 거리를 즉시 계산합니다.
          <br />
          롱·숏 포지션 모두 지원합니다.
        </p>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
          <h3 className="font-bold text-orange-900 mb-2">레버리지란?</h3>
          <p className="text-orange-800 text-sm mb-2">
            내 자금(증거금)의 배수만큼 포지션을 운용하는 방식입니다. 10배 레버리지면 1,000만원으로
            1억 원 규모의 포지션을 열 수 있습니다.
          </p>
          <p className="text-orange-800 text-sm">
            <strong>주의:</strong> 레버리지는 수익을 확대하지만 손실도 동일하게 확대합니다.
            진입가 대비 10% 하락만으로도 10배 롱 포지션은 청산됩니다.
          </p>
        </div>
      </div>

      {/* Calculator */}
      <div className="mb-16">
        <LeveragePnLCalculator />
      </div>

      {/* Guide Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
        <h2 className="text-3xl font-bold mb-8">자세한 설명</h2>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-bold mb-4">청산가 계산 원리</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              청산가는 보유한 증거금이 전부 소멸되는 시점의 코인 가격입니다. 레버리지가 높을수록
              청산가가 진입가에 가까워지며, 작은 가격 변동에도 청산될 위험이 커집니다.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-sm font-mono text-gray-700 space-y-1">
              <p>롱 청산가 = 진입가 × (1 − 1 ÷ 레버리지)</p>
              <p>숏 청산가 = 진입가 × (1 + 1 ÷ 레버리지)</p>
              <p className="mt-2 text-gray-500">청산까지 거리 = 1 ÷ 레버리지 × 100 (%)</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">계산 예시</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-sm text-gray-600 mb-4 font-medium">
                조건: 롱 포지션 / 진입가 50,000,000원 / 레버리지 10배 / 엑시트 55,000,000원
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  가격 변동률: (55,000,000 − 50,000,000) ÷ 50,000,000 ={" "}
                  <strong>+10%</strong>
                </p>
                <p>
                  수익률 (레버리지 적용): 10% × 10 = <strong>+100%</strong>
                </p>
                <p>
                  청산가: 50,000,000 × (1 − 1/10) = <strong>45,000,000원</strong>
                </p>
                <p>
                  청산까지 거리: 1/10 × 100 = <strong>10%</strong>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">주의사항 및 자주 묻는 질문</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4">
                <p className="font-semibold text-yellow-900 mb-2">
                  Q. 실제 거래소 청산가와 다를 수 있나요?
                </p>
                <p className="text-yellow-800">
                  예. 이 계산기는 유지증거금율을 0%로 단순화한 공식을 사용합니다. 바이낸스·업비트
                  등 거래소마다 유지증거금율이 다르므로 실제 청산가는 계산 결과보다 진입가에 더
                  가까울 수 있습니다.
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4">
                <p className="font-semibold text-yellow-900 mb-2">
                  Q. 진입금액과 엑시트금액은 어떻게 입력하나요?
                </p>
                <p className="text-yellow-800">
                  코인의 가격 기준으로 입력하세요. 예: BTC 진입가 5,000만원, 목표가 5,500만원.
                  증거금(내가 투자한 금액)이 아니라 코인 시세 기준입니다.
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4">
                <p className="font-semibold text-yellow-900 mb-2">Q. 수수료는 포함되나요?</p>
                <p className="text-yellow-800">
                  포함되지 않습니다. 거래소 선물 수수료(보통 0.02~0.05%)와 펀딩비는 별도로
                  차감해야 합니다.
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
          이 계산 결과는 <strong>참고용</strong>이며, 실제 거래 결과와 다를 수 있습니다.
        </p>
        <ul className="text-red-800 text-sm space-y-2 mb-4 ml-4">
          <li>• 레버리지 거래는 원금 전액 손실의 위험이 있습니다.</li>
          <li>• 거래소별 청산가·수수료·펀딩비는 이 계산에 포함되지 않습니다.</li>
          <li>• 이 사이트의 정보 사용으로 인한 모든 손실과 책임은 사용자 본인에게 있습니다.</li>
        </ul>
        <p className="text-red-900 font-semibold">
          레버리지 거래 전 반드시 충분한 학습과 소액 테스트를 권장합니다.
        </p>
      </div>
    </div>
  );
}
