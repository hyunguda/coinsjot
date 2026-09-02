import { Metadata } from "next";

export const metadata: Metadata = {
  title: "소개 | coinsjot",
  description: "coinsjot 프로젝트 소개 및 비전",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">coinsjot 소개</h1>

      <div className="prose max-w-none space-y-8 text-gray-700">
        <section>
          <h2 className="text-3xl font-bold mb-4">프로젝트 배경</h2>
          <p className="leading-relaxed">
            코인 거래를 하다 보면 세금 계산, 손익 계산, 선물 포지션 관리 등 다양한 수치를 직접
            계산해야 하는 순간이 생깁니다. 흩어진 공식을 찾고 스프레드시트를 만드는 데 드는 시간을
            줄이기 위해 <strong>coinsjot</strong>을 만들었습니다.
          </p>
          <p className="leading-relaxed mt-4">
            coinsjot은 코인 투자자들이 거래 과정에서 필요한 각종 계산을 한 곳에서 빠르게 처리할 수
            있도록 도구를 모아둔 사이트입니다. 세금 계산부터 선물 청산가, 손익 정산까지 실제 투자에
            필요한 계산기를 순차적으로 제공합니다.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">서비스 철학</h2>
          <ul className="space-y-4 list-none">
            <li className="flex gap-4">
              <span className="text-2xl">🎯</span>
              <div>
                <strong>실용성 중심:</strong> 이론이 아닌 실제 투자자들이 필요한 도구를 만듭니다.
                계산기는 "쓰고 바로 나가는" 방식으로 설계되었습니다.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl">📚</span>
              <div>
                <strong>교육과 함께:</strong> 단순 계산만 제공하지 않고, 왜 이렇게 계산되는지
                이해할 수 있도록 가이드를 포함합니다.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl">🔒</span>
              <div>
                <strong>프라이버시 보호:</strong> 민감한 재무 정보는 서버에 저장되지 않으며, 브라우저
                로컬에서만 계산됩니다.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl">⚡</span>
              <div>
                <strong>빠른 접근:</strong> 회원가입이나 앱 설치 없이 누구나 즉시 사용할 수 있습니다.
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">계산기 로드맵</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              <h3 className="font-bold text-blue-900 mb-2">✓ 가상화폐 세금 계산기</h3>
              <p className="text-blue-800 text-sm">
                2027년 양도소득세 시행에 대비한 의제취득가액 특례 계산 및 예상 세액 산출을 제공합니다.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              <h3 className="font-bold text-blue-900 mb-2">✓ 코인 포트폴리오 통합 계산기</h3>
              <p className="text-blue-800 text-sm">
                보유 중인 여러 코인의 손익을 한 번에 합산해 실제 납부세액과 세후 수익률을 계산합니다.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              <h3 className="font-bold text-blue-900 mb-2">✓ 코인 복리 수익 계산기</h3>
              <p className="text-blue-800 text-sm">
                초기 투자금과 회차당 수익률을 입력하면 복리 효과로 자산이 얼마나 성장하는지 회차별로 계산합니다. 회차당 추가 투자금(적립식)도 지원합니다.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              <h3 className="font-bold text-blue-900 mb-2">✓ 코인 선물 레버리지 손익 계산기</h3>
              <p className="text-blue-800 text-sm">
                진입금액, 레버리지, 엑시트금액을 입력하면 수익률·청산가·청산까지 거리를 즉시 계산합니다. 롱·숏 포지션 모두 지원합니다.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              <h3 className="font-bold text-blue-900 mb-2">✓ 선물 청산가 계산기 (격리마진)</h3>
              <p className="text-blue-800 text-sm">
                내가 넣는 증거금과 레버리지를 입력하면 포지션 크기와 청산가를 즉시 계산합니다. 포지션을 열기 전에 청산 가격을 미리 확인하세요.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              <h3 className="font-bold text-blue-900 mb-2">✓ 선물 청산가 계산기 (교차마진)</h3>
              <p className="text-blue-800 text-sm">
                지갑 전체 잔고가 청산 버퍼가 되는 교차마진의 청산가를 계산합니다. 다른 포지션의 미실현 손익도 반영해 실제 청산가에 가까운 시뮬레이션이 가능합니다.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              <h3 className="font-bold text-blue-900 mb-2">✓ 분할매수 평균단가 계산기</h3>
              <p className="text-blue-800 text-sm">
                차수별 매수가와 금액(또는 수량)을 입력하면 평균 단가, 총 투자금액, 총 수량을 즉시 계산합니다. 금액 입력·수량 입력 두 가지 모드를 지원합니다.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              <h3 className="font-bold text-blue-900 mb-2">✓ 코인 증여 절세 계산기</h3>
              <p className="text-blue-800 text-sm">
                배우자·자녀·부모·형제자매 등 관계별 증여세와 절세 효과를 한눈에 비교합니다. 직접 매도 시 양도세와 증여 후 매도 시 세금을 비교해 최적의 선택을 할 수 있습니다.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              <h3 className="font-bold text-blue-900 mb-2">✓ 코인 보유가격 기록기</h3>
              <p className="text-blue-800 text-sm">
                보유 코인의 날짜별 가격을 기록하고 스크린샷과 함께 엑셀(XLSX)로 저장합니다. 2026년 12월 31일 시가 기록 등 세금 신고 증빙 자료를 한 번에 준비할 수 있습니다.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              <h3 className="font-bold text-blue-900 mb-2">✓ 100회 거래 챌린지</h3>
              <p className="text-blue-800 text-sm">
                거래를 100회 누적 기록하며 승률·손익비·누적 수익을 자동으로 추적합니다. 기록은 브라우저에 자동 저장되며 엑셀(XLSX)로 내보낼 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">자주 묻는 질문</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Q. 계산 결과를 신고할 때 그대로 사용할 수 있나요?</h3>
              <p className="text-gray-700">
                아니요. 이 사이트의 계산은 참고용입니다. 실제 신고 전에 반드시 세무 전문가와 상담하세요.
                개인의 상황에 따라 세액이 달라질 수 있습니다.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Q. 입력한 데이터가 저장되나요?</h3>
              <p className="text-gray-700">
                아니요. 모든 계산은 브라우저에서만 수행되며, 서버에 저장되지 않습니다. 페이지를
                새로고침하면 입력값은 자동으로 삭제됩니다.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Q. 피드백이나 기능 요청은 어디에?</h3>
              <p className="text-gray-700">
                <a href="/contact" className="text-blue-600 hover:underline">
                  문의하기
                </a>
                를 통해 의견을 보내주시면 감사하겠습니다. 모든 의견을 검토하여 개선에 반영합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">중요 안내</h2>
          <p className="leading-relaxed mb-4">
            coinsjot은 투자 조언이나 세무 조언을 제공하는 전문 서비스가 아닙니다. 단순히 계산을 돕는
            도구일 뿐입니다.
          </p>
          <p className="leading-relaxed mb-4">
            <strong>세금 신고와 투자 결정은 반드시 전문가와 상담하시기 바랍니다.</strong> 이 사이트를
            이용함으로써 발생하는 모든 손해에 대해서는 책임을 지지 않습니다.
          </p>
          <p className="leading-relaxed">
            복잡한 계산을 간단하게 만들어, 투자자 분들이 더 빠르고 정확하게 상황을 파악할 수 있도록
            돕는 것이 coinsjot의 목표입니다.
          </p>
        </section>
      </div>
    </div>
  );
}
