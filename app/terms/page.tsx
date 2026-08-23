import { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 | coinsjot",
  description: "coinsjot의 이용약관 및 면책조항",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">이용약관 및 면책조항</h1>
      <p className="text-sm text-gray-600 mb-8">최종 수정: 2026년 8월</p>

      <div className="prose max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8">1. 서비스 개요</h2>
          <p>
            coinsjot은 가상자산(암호화폐) 투자자를 위한 세금 및 손익 계산 도구를 무료로 제공하는 웹
            사이트입니다. 모든 계산은 참고용이며, 실제 세액이나 거래 결과를 보장하지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8">2. 면책 조항</h2>
          <p className="font-semibold text-red-700 mb-4">
            ⚠️ 이 사이트의 계산 결과는 참고용이며, 정확성을 보장하지 않습니다.
          </p>
          <p>coinsjot은 다음 사항에 대해 책임을 지지 않습니다:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>계산 결과의 정확성 또는 오류로 인한 손해</li>
            <li>세법 개정으로 인한 계산 결과의 변경</li>
            <li>사용자가 입력한 데이터의 정확성</li>
            <li>계산 결과에 기반한 투자 또는 세금 신고로 인한 손해</li>
            <li>서비스 중단, 오류 또는 접근 불가로 인한 손해</li>
            <li>제3자 광고 또는 제휴로 인한 손해</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8">3. 세무 조언 거부</h2>
          <p>
            coinsjot은 세무 조언을 제공하지 않습니다. 실제 세액 계산, 신고 및 의사결정은
            <strong> 세무 전문가(세무사, 회계사)와 반드시 상담</strong>하여 진행하시기 바랍니다.
          </p>
          <p className="mt-4">
            본 사이트의 정보는 일반적인 교육 목적으로만 제공되며, 개인의 세무 상황을 대체할 수
            없습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8">4. 투자 조언 거부</h2>
          <p>
            coinsjot은 투자 조언을 제공하지 않습니다. 계산기는 손익 시뮬레이션 목적으로만 제공되며,
            특정 가상자산의 매매를 권유하거나 조언하지 않습니다.
          </p>
          <p className="mt-4">
            가상자산 투자는 높은 위험성을 가지고 있으며, 원금 손실이 발생할 수 있습니다. 투자 결정은
            본인의 책임 하에 진행하십시오.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8">5. 서비스 변경 및 중단</h2>
          <p>
            coinsjot은 사전 공지 없이 서비스 또는 계산기 기능을 변경, 수정 또는 중단할 수 있습니다.
            이로 인한 손해에 대해 책임을 지지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8">6. 데이터 정확성</h2>
          <p>
            coinsjot의 계산 로직은 세법을 기반으로 작성되었으나, 다음의 이유로 오류가 있을 수
            있습니다:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>세법의 정기적 개정</li>
            <li>개인의 구체적 상황에 따른 예외 규정</li>
            <li>프로그래밍 오류</li>
            <li>사용자의 입력 오류</li>
          </ul>
          <p className="mt-4">
            항상 공식 자료와 전문가의 조언으로 검증하시기 바랍니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8">7. 외부 링크 및 광고</h2>
          <p>
            coinsjot은 외부 웹사이트 및 제휴사에 대한 책임을 지지 않습니다. 외부 링크 클릭 시 그
            사이트의 약관 및 개인정보처리방침이 적용됩니다.
          </p>
          <p className="mt-4">
            광고 클릭으로 인한 손해, 광고주의 거래로 인한 분쟁에 대해서도 책임을 지지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8">8. 이용 약관 변경</h2>
          <p>
            coinsjot은 사전 공지 없이 이 약관을 변경할 수 있습니다. 변경된 약관은 웹사이트에 게시된
            시점부터 효력이 발생합니다. 계속 사용함으로써 변경 약관에 동의한 것으로 간주됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8">9. 분쟁 해결</h2>
          <p>
            coinsjot 이용과 관련한 분쟁은 관련 법령에 따라 해결됩니다. 문의사항이나 분쟁이 있을 경우{" "}
            <a href="/contact" className="text-blue-600 hover:underline">
              문의하기
            </a>
            를 통해 연락주시기 바랍니다.
          </p>
        </section>

        <section className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-8 rounded">
          <h3 className="font-bold text-yellow-900 mb-2">📋 요약</h3>
          <p className="text-yellow-800 text-sm">
            <strong>coinsjot은 계산 결과의 정확성을 보장하지 않으며, 손해에 대해 책임을 지지 않습니다.
            </strong> 실제 세금 신고 및 투자 결정은 전문가와 상담하여 진행하시기 바랍니다.
          </p>
        </section>
      </div>
    </div>
  );
}
