import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          가상자산 투자 계산기 모음
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          코인 투자자를 위한 실용적인 계산 도구들. 양도소득세, 손익통산, 선물 청산가까지
          <br />한 번에 계산하고 비교하세요.
        </p>
      </section>

      {/* Calculators Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Calculator 1 */}
        <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            가상화폐 세금 계산기
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            2027년 1월부터 시행되는 양도소득세를 대비하세요. 보유 중인 가상화폐의 예상 세액을
            즉시 계산하고, 절세 방법을 확인할 수 있습니다. 2026년 12월 31일 이전에 매수한
            코인이라면 특별한 절세 혜택이 있는지 확인해보세요.
          </p>
          <Link
            href="/calculators/deemed-acquisition-price"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            계산기 이용하기 →
          </Link>
        </div>

        {/* Calculator 2 - Placeholder */}
        <div className="border border-gray-200 rounded-lg p-8 bg-gray-50 opacity-50">
          <h2 className="text-2xl font-bold mb-4 text-gray-400">
            손익통산 시뮬레이터
          </h2>
          <p className="text-gray-500 mb-6">
            준비 중입니다. 여러 종목의 손익을 합산해 실제 납부세액을 계산하는 기능이
            곧 추가됩니다.
          </p>
          <button
            disabled
            className="inline-block bg-gray-400 text-white px-6 py-3 rounded-lg cursor-not-allowed font-medium"
          >
            준비 중
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-blue-50 rounded-lg p-12 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">
          왜 coinsjot인가?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">정확한 계산</h3>
            <p className="text-gray-600">
              세법 기준에 맞춘 최신 계산 로직. 결과는 참고용이며 실제 신고 전 세무 전문가와 상담하세요.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">빠른 비교</h3>
            <p className="text-gray-600">
              여러 시나리오를 즉시 계산해 비교. 의사결정을 빠르고 명확하게 할 수 있습니다.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">즉시 사용</h3>
            <p className="text-gray-600">
              회원가입 없이 바로 사용할 수 있습니다. 입력한 데이터는 서버에 저장되지 않습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 mb-16">
        <h3 className="font-bold text-lg mb-3 text-yellow-900">⚠️ 중요 안내</h3>
        <p className="text-yellow-800 text-sm leading-relaxed">
          이 사이트의 계산 결과는 참고용입니다. 정확한 세액 계산과 신고는 세무 전문가(세무사, 회계사)와 반드시 상담하신 후
          진행하시기 바랍니다. 세법은 개정될 수 있으며, 개인 상황에 따라 달라질 수 있습니다. 이 사이트를 이용함으로써 발생하는
          모든 손해에 대해 책임을 지지 않습니다.
        </p>
      </section>
    </div>
  );
}
