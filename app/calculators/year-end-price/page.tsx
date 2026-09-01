import { Metadata } from "next";
import { YearEndPriceRecorder } from "@/app/components/YearEndPriceRecorder";

export const metadata: Metadata = {
  title: "코인 보유가격 기록기 | coinsjot",
  description:
    "보유 중인 가상자산의 날짜별 가격을 종목별로 기록하고 엑셀(CSV)로 내보냅니다. 스크린샷 첨부 기능으로 의제취득가액 특례 등 세금 신고에 필요한 증빙 자료를 한 번에 준비하세요.",
  keywords:
    "코인 보유가격 기록, 가상자산 시가 기록, 2026년 12월 31일 시가, 의제취득가액 기준일, 코인 종가 기록, 가상자산 세금 자료",
};

export default function YearEndPricePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 헤더 */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          코인 보유가격 기록기
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          보유 중인 코인의 <strong className="text-gray-800">날짜별 가격과 수량</strong>을 기록하고 스크린샷과 함께 내보냅니다.
          <br />
          2026년 12월 31일 시가 기록 등 세금 신고 증빙 자료 준비에 활용하세요.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h3 className="font-bold text-blue-900 mb-2">왜 12월 31일 시가가 중요한가요?</h3>
          <p className="text-blue-800 text-sm mb-3">
            2027년 1월 1일부터 시행되는 가상자산 양도소득세에서, 2026년 12월 31일 이전에 보유하던 코인은
            <strong> 의제취득가액 특례</strong>를 적용받을 수 있습니다.
          </p>
          <p className="text-blue-800 text-sm mb-3">
            특례 적용 시 취득가액은 <strong>실제 매수가격</strong>과 <strong>2026.12.31 시가</strong> 중
            더 높은 금액으로 산정됩니다. 즉, 시가가 더 높다면 세금을 크게 줄일 수 있습니다.
          </p>
          <p className="text-blue-800 text-sm font-semibold">
            → 2026년 12월 31일 당일 각 거래소의 종가를 꼭 캡처하거나 기록해 두세요.
          </p>
        </div>
      </div>

      {/* 계산기 */}
      <div className="mb-16">
        <YearEndPriceRecorder />
      </div>

      {/* 가이드 */}
      <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
        <h2 className="text-3xl font-bold mb-8">자세한 설명</h2>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-bold mb-4">의제취득가액 특례란?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              2027년 양도소득세 시행 이전 보유 자산에 대해, 취득 당시 가격이 아닌 2026년 12월 31일 시가를
              취득가액으로 선택할 수 있는 특례 제도입니다. 오래 보유하거나 저가에 매수한 코인일수록
              절세 효과가 큽니다.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-sm font-mono text-gray-700 space-y-1">
              <p>취득가액 = MAX(실제 매수가, 2026.12.31 시가)</p>
              <p>양도차익 = 매도가 − 취득가액</p>
              <p>과세표준 = MAX(0, 양도차익 − 250만원 기본공제)</p>
              <p>예상 세액 = 과세표준 × 22%</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">어떤 가격을 기록해야 하나요?</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 bg-blue-50 p-4">
                <p className="font-semibold text-blue-900 mb-2">거래소별 종가 기준</p>
                <p className="text-blue-800 text-sm">
                  국내 거래소(업비트, 빗썸 등)는 2026년 12월 31일 오후 11시 59분 기준 또는
                  당일 24시간 가중평균가를 사용합니다. 세무 신고 시 거래소에서 제공하는
                  공식 시세 자료를 활용하세요.
                </p>
              </div>
              <div className="border-l-4 border-gray-400 bg-gray-50 p-4">
                <p className="font-semibold text-gray-800 mb-2">해외 거래소 보유 자산</p>
                <p className="text-gray-700 text-sm">
                  해외 거래소에 보유한 자산도 세금 신고 대상입니다. 해당 거래소의
                  2026.12.31 종가(원화 환산)를 별도로 기록해 두세요.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">절세 효과 계산 예시</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-sm text-gray-600 mb-4 font-medium">
                조건: 비트코인 1개를 2020년 5,000,000원에 매수 / 2027년 200,000,000원에 매도
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">특례 미적용</p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>취득가액: 5,000,000원</p>
                    <p>양도차익: 195,000,000원</p>
                    <p>과세표준: 192,500,000원</p>
                    <p className="font-bold text-red-600">세금: 약 42,350,000원</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-700 mb-2">
                    특례 적용 (12/31 시가 150,000,000원)
                  </p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>취득가액: 150,000,000원 (시가 적용)</p>
                    <p>양도차익: 50,000,000원</p>
                    <p>과세표준: 47,500,000원</p>
                    <p className="font-bold text-blue-600">세금: 약 10,450,000원</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                ※ 특례 적용 시 약 31,900,000원 절세 효과. 단순 예시이며 실제 세액과 다를 수 있습니다.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* 면책 조항 */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
        <h3 className="font-bold text-lg text-yellow-900 mb-3">⚠️ 중요 안내</h3>
        <p className="text-yellow-800 text-sm leading-relaxed">
          이 도구에서 기록한 내용은 <strong>참고용</strong>입니다. 실제 세금 신고 시에는 세무사 또는 회계사와
          반드시 상담하시기 바랍니다. 세법은 개정될 수 있으며 개인 상황에 따라 달라집니다.
          이 사이트 이용으로 발생하는 모든 손해에 대해 책임을 지지 않습니다.
        </p>
      </div>
    </div>
  );
}
