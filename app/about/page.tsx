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
            2027년 1월 1일부터 한국에서 가상자산(코인) 양도소득세가 시행됩니다. 많은 투자자들이
            세금 계산으로 혼란을 겪을 것으로 예상됩니다.
          </p>
          <p className="leading-relaxed mt-4">
            <strong>coinsjot</strong>은 이러한 시점에서 투자자들이 세금 관련 계산을 쉽고 빠르게 할 수
            있도록 돕기 위해 만들어졌습니다. 복잡한 세무 계산을 간단한 도구로 정리하고, 투자자가
            스스로 상황을 파악할 수 있도록 하는 것이 목표입니다.
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
              <span className="text-2xl">🆓</span>
              <div>
                <strong>무료 제공:</strong> 모든 계산기는 무료로 제공됩니다. 부업 차원의 프로젝트로,
                광고 수익으로 유지됩니다.
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">계산기 로드맵</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              <h3 className="font-bold text-blue-900 mb-2">✓ 의제취득가액 계산기</h3>
              <p className="text-blue-800 text-sm">
                2027년 세금 시행을 앞두고 가장 시급한 "의제취득가액 특례" 계산을 제공합니다.
              </p>
            </div>

            <div className="border-l-4 border-gray-400 bg-gray-50 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-2">📋 손익통산 시뮬레이터</h3>
              <p className="text-gray-700 text-sm">
                여러 종목의 손익을 합산해 실제 납부세액을 계산합니다. (준비 중)
              </p>
            </div>

            <div className="border-l-4 border-gray-400 bg-gray-50 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-2">📊 선물 청산가 계산기</h3>
              <p className="text-gray-700 text-sm">
                레버리지, 마진 방식별 청산가와 손익을 계산합니다. (준비 중)
              </p>
            </div>

            <div className="border-l-4 border-gray-400 bg-gray-50 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-2">📈 거래 기록 추적기</h3>
              <p className="text-gray-700 text-sm">
                개인의 거래 기록을 관리하고 성과를 분석합니다. (준비 중)
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">기술 스택</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              <strong>프론트엔드:</strong> Next.js 14 (TypeScript, Tailwind CSS)
            </li>
            <li>
              <strong>호스팅:</strong> Vercel (무료 티어)
            </li>
            <li>
              <strong>도메인:</strong> coinsjot.com (가비아)
            </li>
            <li>
              <strong>분석:</strong> Google Analytics
            </li>
            <li>
              <strong>광고:</strong> Google AdSense
            </li>
          </ul>
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
              <h3 className="font-bold text-lg mb-2">Q. 이 사이트는 언제 만들어졌나요?</h3>
              <p className="text-gray-700">
                coinsjot은 2026년 8월에 시작되었습니다. 2027년 세금 시행을 앞두고 투자자들을 돕기
                위해 만들어진 프로젝트입니다.
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
            복잡한 세금 계산을 간단하게 만들어, 투자자 분들이 정보를 갖춘 결정을 할 수 있도록
            돕는 것이 coinsjot의 목표입니다.
          </p>
        </section>
      </div>
    </div>
  );
}
