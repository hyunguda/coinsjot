import { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의 | coinsjot",
  description: "coinsjot에 문의하기",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-4">문의하기</h1>
      <p className="text-lg text-gray-600 mb-12">
        coinsjot에 대한 피드백, 기능 요청, 오류 보고 등은 아래 이메일로 보내주시면 감사하겠습니다.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Email Contact */}
        <div className="border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">이메일</h2>
          <p className="text-gray-600 mb-6">
            문의사항, 피드백, 버그 보고 등은 아래 이메일로 보내주세요.
          </p>
          <a
            href="mailto:contact@coinsjot.com"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            contact@coinsjot.com
          </a>
          <p className="text-xs text-gray-500 mt-4">
            (2~3 영업일 내에 회신하겠습니다)
          </p>
        </div>

        {/* FAQ */}
        <div className="border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">자주 묻는 문의 주제</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>계산 결과가 맞는지 확인하고 싶습니다</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>새로운 계산기 기능을 요청합니다</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>오류를 발견했습니다 (스크린샷 포함)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>제휴 문의</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Form Info */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded mb-12">
        <h3 className="font-bold text-blue-900 mb-4">📝 이메일 작성 팁</h3>
        <ul className="space-y-3 text-blue-900 text-sm">
          <li>
            <strong>계산 오류 보고:</strong> 입력값과 결과값을 구체적으로 기재해주세요.
            스크린샷이 있으면 더 좋습니다.
          </li>
          <li>
            <strong>기능 요청:</strong> 어떤 계산이 필요한지, 왜 필요한지 간단히 설명해주세요.
          </li>
          <li>
            <strong>제휴 문의:</strong> 회사명, 연락처, 제안 내용을 포함해주세요.
          </li>
          <li>
            <strong>개인정보:</strong> 이메일에 민감한 거래 내용이나 개인정보를 포함하지 않도록
            주의해주세요.
          </li>
        </ul>
      </div>

      {/* Important Notes */}
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">⚠️ 알아두세요</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-4">
            <h3 className="font-semibold text-yellow-900 mb-2">세무 조언은 제공하지 않습니다</h3>
            <p className="text-yellow-800 text-sm">
              "제 경우에는 세액이 얼마나 될까요?" 같은 개인별 세무 상담 질문은 답변해드릴 수 없습니다.
              이런 질문은 <strong>세무 전문가(세무사, 회계사)에게 직접 상담</strong>받으시기 바랍니다.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-semibold text-yellow-900 mb-2">투자 조언은 제공하지 않습니다</h3>
            <p className="text-yellow-800 text-sm">
              "어떤 코인을 사야 할까요?" "지금 매도하는 게 나을까요?" 같은 투자 판단 관련 질문도
              답변해드릴 수 없습니다. 투자 결정은 본인의 판단과 전문 자문을 통해 진행하세요.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">기타 문의 방식</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">버그 보고</h3>
              <p className="text-gray-700">
                계산 오류나 웹사이트 오류를 발견하셨다면, 가능하면 다음 정보를 함께 보내주세요:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                <li>발생 시간</li>
                <li>입력한 값</li>
                <li>예상 결과 vs 실제 결과</li>
                <li>사용 기기 및 브라우저</li>
                <li>스크린샷 (가능시)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">기능 요청</h3>
              <p className="text-gray-700">
                새로운 계산기나 기능을 요청하실 때는 다음을 고려해주세요:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                <li>어떤 계산이 필요한가?</li>
                <li>왜 필요한가?</li>
                <li>누가 사용할 것인가?</li>
                <li>예상 사용 빈도</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">제휴/광고 문의</h3>
              <p className="text-gray-700">
                광고, 제휴, 리소스 공유 등의 제안이 있으시다면 이메일로 자세히 설명해주세요.
                모든 제안을 검토한 후 회신하겠습니다.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Response Time */}
      <div className="bg-gray-50 rounded-lg p-8 mt-12">
        <h3 className="font-bold mb-3">📅 응답 시간</h3>
        <p className="text-gray-700">
          모든 이메일은 가능한 한 빠르게 처리하려고 합니다. 일반적으로 <strong>2~3 영업일</strong> 내에
          회신하겠습니다.
        </p>
        <p className="text-gray-600 text-sm mt-3">
          (부업 프로젝트인 관계상 늦어질 수 있습니다. 양해 부탁드립니다.)
        </p>
      </div>
    </div>
  );
}
