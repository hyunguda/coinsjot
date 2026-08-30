import { Metadata } from "next";
import { DCACalculator } from "@/app/components/DCACalculator";

export const metadata: Metadata = {
  title: "분할매수 평균단가 계산기 | coinsjot",
  description:
    "코인 분할매수 시 차수별 매수가와 금액(또는 수량)을 입력하면 평균 단가, 총 투자금액, 총 수량을 즉시 계산합니다. 금액 입력·수량 입력 두 가지 모드 지원.",
  keywords:
    "분할매수 계산기, DCA 계산기, 평균단가 계산기, 코인 평균매수가, 물타기 계산기, 비트코인 평균단가",
};

export default function DCAPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 헤더 */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          분할매수 평균단가 계산기
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          <strong className="text-gray-800">차수별 매수가와 금액(또는 수량)</strong>을 입력하면 평균 단가를 즉시 계산합니다.
          <br />
          "3번에 나눠 샀는데 평균 단가가 얼마지?" 를 바로 확인하세요.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h3 className="font-bold text-blue-900 mb-2">이 계산기가 필요한 이유</h3>
          <p className="text-blue-800 text-sm mb-2">
            분할매수(DCA)를 할 때 평균 단가는 단순 산술 평균이 아닌
            <strong> 투자금액 가중 평균</strong>으로 계산됩니다.
            같은 가격에 다른 금액을 샀다면 결과가 달라집니다.
          </p>
          <p className="text-blue-800 text-sm">
            정확한 평균 단가를 알아야 현재가 대비 수익/손실 여부를 판단하고,
            세금 계산 시 취득가액 산정에도 활용할 수 있습니다.
          </p>
        </div>
      </div>

      {/* 계산기 */}
      <div className="mb-16">
        <DCACalculator />
      </div>

      {/* 가이드 */}
      <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
        <h2 className="text-3xl font-bold mb-8">자세한 설명</h2>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-bold mb-4">평균단가 계산 원리</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              평균단가는 총 투자금액을 총 수량으로 나눈 값입니다.
              가격이 다른 여러 번의 매수를 합산할 때, 투자금액이 많은 차수가
              평균에 더 큰 영향을 미칩니다.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-sm font-mono text-gray-700 space-y-1">
              <p>총 수량 = Σ(각 차수 수량)</p>
              <p>총 투자금액 = Σ(매수가 × 수량)</p>
              <p>평균 단가 = 총 투자금액 ÷ 총 수량</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">계산 예시</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-sm text-gray-600 mb-4 font-medium">
                조건: 1차 50,000,000원에 1,000,000원 / 2차 40,000,000원에 1,000,000원 / 3차 45,000,000원에 2,000,000원
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <p>1차 수량: 1,000,000 ÷ 50,000,000 = <strong>0.02코인</strong></p>
                <p>2차 수량: 1,000,000 ÷ 40,000,000 = <strong>0.025코인</strong></p>
                <p>3차 수량: 2,000,000 ÷ 45,000,000 ≈ <strong>0.04444코인</strong></p>
                <p>총 수량: 0.02 + 0.025 + 0.04444 ≈ <strong>0.08944코인</strong></p>
                <p>총 투자금액: 1,000,000 + 1,000,000 + 2,000,000 = <strong>4,000,000원</strong></p>
                <p>평균 단가: 4,000,000 ÷ 0.08944 ≈ <strong>44,720,000원</strong></p>
                <p className="text-gray-500 mt-2">
                  ※ 단순 산술 평균 (50M + 40M + 45M) / 3 ≈ 45,000,000원과 다릅니다.
                  3차에 2배 금액을 투자했기 때문입니다.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">세금 신고와의 관계</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 bg-blue-50 p-4">
                <p className="font-semibold text-blue-900 mb-2">
                  취득가액 계산에 활용하세요
                </p>
                <p className="text-blue-800 text-sm">
                  2027년부터 시행되는 가상자산 양도소득세에서 취득가액은
                  총평균법 또는 이동평균법으로 산정합니다.
                  분할매수 내역을 이 계산기로 정리하면 취득가액 산정 근거 자료로
                  활용할 수 있습니다.
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
          이 계산 결과는 <strong>참고용</strong>입니다. 실제 세금 신고 시 취득가액 계산 방식은
          세법에 따라 다를 수 있으며, 정확한 신고는 세무사와 상담하세요.
          이 사이트 이용으로 발생하는 모든 손해에 대해 책임을 지지 않습니다.
        </p>
      </div>
    </div>
  );
}
