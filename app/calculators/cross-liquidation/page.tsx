import { Metadata } from "next";
import { CrossLiquidationCalculator } from "@/app/components/CrossLiquidationCalculator";

export const metadata: Metadata = {
  title: "선물 청산가 계산기 (교차마진) | coinsjot",
  description:
    "교차마진 방식의 선물 포지션 청산가를 계산합니다. 총 지갑 잔고 전체가 청산 버퍼로 작동하는 교차마진의 청산가와 청산까지 거리를 즉시 계산합니다. 롱·숏 모두 지원.",
  keywords:
    "교차마진 청산가, cross margin 청산가, 선물 청산가 계산기, 청산가 계산, 교차 선물, 코인 청산가, 파산가, 강제청산가",
};

export default function CrossLiquidationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          선물 청산가 계산기 (교차마진)
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          <strong className="text-gray-800">지갑 전체 잔고가 청산 버퍼</strong>로 작동하는 교차마진의 청산가를 계산합니다.
          <br />
          "5백만원 지갑에 10배 롱을 열면 어디서 청산되나?" 를 바로 확인하세요.
        </p>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
          <h3 className="font-bold text-orange-900 mb-2">이 계산기가 필요한 이유</h3>
          <p className="text-orange-800 text-sm mb-2">
            교차마진은 지갑 잔고 전체가 청산을 막는 버퍼가 됩니다. 잔고가 클수록 청산가가 멀어지지만,
            <strong> 결국 청산되면 지갑 전체를 잃을 수 있습니다.</strong>
          </p>
          <p className="text-orange-800 text-sm">
            이 계산기는 초기증거금·레버리지·총 잔고를 입력하면 교차마진 기준 청산가와 청산까지 거리를 계산합니다.
            다른 포지션의 미실현 손익도 반영해 더 정밀한 시뮬레이션이 가능합니다.
          </p>
        </div>
      </div>

      {/* Calculator */}
      <div className="mb-16">
        <CrossLiquidationCalculator />
      </div>

      {/* Guide Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
        <h2 className="text-3xl font-bold mb-8">자세한 설명</h2>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-bold mb-4">교차마진 청산가 계산 원리</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              교차마진에서 청산가는 지갑 전체 잔고(유효 자본)가 소멸되는 시점의 가격입니다.
              초기증거금이 아닌 지갑 잔고 전체가 버퍼로 사용되므로, 잔고가 클수록 청산가가 진입가에서 멀어집니다.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-sm font-mono text-gray-700 space-y-1">
              <p>포지션 크기 = 초기증거금 × 레버리지</p>
              <p>유효 자본 = 총 지갑 잔고 + 다른 포지션 미실현 손익</p>
              <p>유효증거금율 = 유효 자본 ÷ 포지션 크기</p>
              <p className="mt-2">롱 청산가 = 진입가 × (1 − 유효증거금율)</p>
              <p>숏 청산가 = 진입가 × (1 + 유효증거금율)</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">계산 예시</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-sm text-gray-600 mb-4 font-medium">
                조건: 롱 포지션 / 진입가 50,000,000원 / 레버리지 10배 / 초기증거금 1,000,000원 / 총 잔고 5,000,000원
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <p>포지션 크기: 1,000,000 × 10 = <strong>10,000,000원</strong></p>
                <p>유효증거금율: 5,000,000 ÷ 10,000,000 = <strong>50%</strong></p>
                <p>청산가: 50,000,000 × (1 − 0.5) = <strong>25,000,000원</strong></p>
                <p className="text-gray-500 mt-2">
                  ※ 격리마진(10배)의 청산가는 45,000,000원 — 교차마진은 잔고 덕분에 훨씬 멀다.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">주의사항 및 자주 묻는 질문</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4">
                <p className="font-semibold text-yellow-900 mb-2">
                  Q. 교차마진은 청산가가 멀면 안전한 건가요?
                </p>
                <p className="text-yellow-800">
                  아닙니다. 청산가가 멀다는 것은 청산 위험이 낮다는 의미지만, 만약 청산된다면 지갑 전체 잔고를 잃습니다.
                  격리마진은 청산가가 가깝지만 손실이 증거금으로 제한됩니다.
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4">
                <p className="font-semibold text-yellow-900 mb-2">
                  Q. 다른 포지션 미실현 손익은 왜 반영하나요?
                </p>
                <p className="text-yellow-800">
                  교차마진은 지갑 잔고 전체가 모든 포지션을 공동 담보합니다.
                  다른 포지션이 손실 중이면 유효 자본이 줄어 이 포지션의 청산가가 가까워집니다.
                  반대로 수익 중이면 버퍼가 늘어 청산가가 멀어집니다.
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4">
                <p className="font-semibold text-yellow-900 mb-2">
                  Q. 실제 거래소 청산가와 왜 다를 수 있나요?
                </p>
                <p className="text-yellow-800">
                  이 계산기는 슬리피지·거래 수수료를 반영하지 않습니다. 실제 거래소는 수수료와 청산 비용을 처리하기 위해
                  이론값보다 진입가에 더 가까운 시점에 청산을 실행합니다.
                  포지션을 열고 나면 거래소 화면의 청산가를 기준으로 삼으세요.
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
          <li>• 교차마진은 청산 시 지갑 전체 잔고를 잃을 수 있습니다.</li>
          <li>• 슬리피지·수수료 미반영 이론값으로, 실제 거래소 청산가와 다를 수 있습니다.</li>
          <li>• 이 사이트의 정보 사용으로 인한 모든 손실과 책임은 사용자 본인에게 있습니다.</li>
        </ul>
        <p className="text-red-900 font-semibold">
          레버리지 거래 전 반드시 충분한 학습과 소액 테스트를 권장합니다.
        </p>
      </div>
    </div>
  );
}
