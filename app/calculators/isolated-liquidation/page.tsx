import { Metadata } from "next";
import { IsolatedLiquidationCalculator } from "@/app/components/IsolatedLiquidationCalculator";

export const metadata: Metadata = {
  title: "선물 청산가 계산기 (격리마진) | coinsjot",
  description:
    "격리마진 방식의 선물 포지션 청산가를 계산합니다. 진입가·레버리지·증거금·유지증거금율을 입력하면 청산가와 파산가를 즉시 계산합니다. 롱·숏 모두 지원.",
  keywords:
    "격리마진 청산가, isolated margin 청산가, 선물 청산가 계산기, 청산가 계산, 격리 선물, 코인 청산가, 파산가, 강제청산가",
};

export default function IsolatedLiquidationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          선물 청산가 계산기 (격리마진)
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          <strong className="text-gray-800">내가 넣는 돈(증거금)을 기준으로</strong> 포지션 크기와 청산가를 계산합니다.
          <br />
          "100만원을 10배로 열면 어느 가격에 청산되나?" 를 바로 확인하세요.
        </p>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
          <h3 className="font-bold text-orange-900 mb-2">이 계산기가 필요한 이유</h3>
          <p className="text-orange-800 text-sm mb-2">
            거래소에서 포지션을 열 때 청산가가 자동으로 표시되지만, <strong>열기 전에 미리 시뮬레이션하기는 어렵습니다.</strong>
            이 계산기는 내 증거금과 레버리지를 입력하면 포지션 크기·청산가·파산가를 한 번에 계산해줍니다.
          </p>
          <p className="text-orange-800 text-sm">
            <strong>격리마진:</strong> 포지션별로 증거금을 따로 배정하는 방식. 청산이 발생해도 해당 포지션의 증거금만 잃고
            나머지 잔고는 영향받지 않습니다. 교차마진보다 리스크를 제한하기에 유리합니다.
          </p>
        </div>
      </div>

      {/* Calculator */}
      <div className="mb-16">
        <IsolatedLiquidationCalculator />
      </div>

      {/* Guide Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
        <h2 className="text-3xl font-bold mb-8">자세한 설명</h2>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-bold mb-4">격리마진 청산가 계산 원리</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              격리마진에서 청산가는 내가 할당한 증거금이 유지증거금 수준 이하로 떨어지는 시점의 가격입니다.
              유지증거금율(MMR)이 클수록 청산가는 진입가에 더 가까워집니다.
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
                조건: 롱 포지션 / 진입가 50,000,000원 / 레버리지 10배 / 증거금 1,000,000원
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <p>포지션 크기: 1,000,000 × 10 = <strong>10,000,000원</strong></p>
                <p>청산가: 50,000,000 × (1 − 1/10) = <strong>45,000,000원</strong></p>
                <p>청산까지 거리: 1/10 × 100 = <strong>10%</strong></p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">주의사항 및 자주 묻는 질문</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4">
                <p className="font-semibold text-yellow-900 mb-2">
                  Q. 실제 거래소 청산가와 왜 다를 수 있나요?
                </p>
                <p className="text-yellow-800">
                  이 계산기는 슬리피지·거래 수수료를 반영하지 않습니다. 거래소는 강제청산 실행 시 발생하는
                  슬리피지와 수수료를 처리하기 위해 이 계산값보다 진입가에 더 가까운 시점에 청산을 실행합니다.
                  포지션을 열고 나면 거래소 화면에 표시되는 청산가를 기준으로 삼으세요.
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4">
                <p className="font-semibold text-yellow-900 mb-2">Q. 증거금을 추가하면 청산가가 바뀌나요?</p>
                <p className="text-yellow-800">
                  격리마진에서 증거금을 추가(Add Margin)하면 청산가가 더 멀어집니다.
                  이 계산기는 초기 증거금 기준이므로, 증거금 추가 후 청산가는 거래소 UI에서 직접 확인하세요.
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4">
                <p className="font-semibold text-yellow-900 mb-2">Q. 격리마진과 교차마진 중 무엇이 유리한가요?</p>
                <p className="text-yellow-800">
                  격리마진은 해당 포지션에 배정한 증거금만 잃고 나머지 잔고는 보호됩니다. 리스크를 포지션 단위로
                  제한하고 싶을 때 적합합니다. 교차마진은 잔고 전체가 버퍼 역할을 해 청산이 잘 안 되지만,
                  청산되면 전체 잔고를 잃을 수 있습니다.
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
          <li>• 유지증거금율, 펀딩비, 수수료에 따라 실제 청산가는 달라집니다.</li>
          <li>• 이 사이트의 정보 사용으로 인한 모든 손실과 책임은 사용자 본인에게 있습니다.</li>
        </ul>
        <p className="text-red-900 font-semibold">
          레버리지 거래 전 반드시 충분한 학습과 소액 테스트를 권장합니다.
        </p>
      </div>
    </div>
  );
}
