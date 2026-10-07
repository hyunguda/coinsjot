import { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | coinsjot",
  description: "coinsjot의 개인정보처리방침",
  alternates: {
    canonical: "https://coinsjot.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">개인정보처리방침</h1>
      <p className="text-sm text-gray-600 mb-8">최종 수정: 2026년 8월</p>

      <div className="prose max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8">1. 개인정보 수집 및 이용</h2>
          <p>
            coinsjot은 계산기 서비스 제공을 위해 개인정보를 최소한으로만 수집합니다.
          </p>
          <p className="mt-4">
            <strong>수집 항목:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>사용자가 계산기에 입력한 숫자 데이터 (서버에 저장되지 않으며, 이용자의 브라우저에서만 처리)</li>
            <li>
              Google Analytics를 통한 방문 통계 (성별, 연령대, 관심사 등 집계 데이터만 수집)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8">2. 데이터 저장 및 보안</h2>
          <p>
            계산기에 입력하신 숫자는 <strong>서버에 저장되지 않습니다.</strong> 모든 계산은 귀하의
            브라우저에서만 수행되며, 대부분의 계산기는 페이지를 새로고침하거나 닫으면 입력값이 삭제됩니다.
            기록형 도구(100회 거래 챌린지)는 이용 편의를 위해 입력한 기록을 이용자 본인의
            브라우저 저장소(localStorage)에만 보관하며, 브라우저 설정에서 사이트 데이터를 삭제하면 함께 지워집니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8">3. 제3자 공개</h2>
          <p>
            coinsjot은 사용자의 개인정보를 제3자에게 공개하지 않습니다. 단, 다음의 경우는 예외입니다:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>법령에 따른 의무적 공개</li>
            <li>사용자의 동의가 있는 경우</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8">4. Google 애드센스 및 쿠키</h2>
          <p>
            coinsjot은 Google 애드센스를 통해 광고를 게시합니다. Google은 쿠키를 사용하여 광고를
            제공하고, 사용자의 방문 기록 및 관심사에 기반한 맞춤 광고를 표시할 수 있습니다.
          </p>
          <p className="mt-4">
            Google의 개인정보 처리 방침:
            <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline ml-1">
              https://policies.google.com/privacy
            </a>
          </p>
          <p className="mt-4">
            Google을 비롯한 제3자 광고 사업자는 쿠키를 사용해 이용자의 이전 방문 기록을 바탕으로 광고를 게재할 수
            있습니다. 맞춤 광고를 원하지 않으시면{" "}
            <a href="https://adssettings.google.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Google 광고 설정
            </a>
            에서 맞춤 광고를 사용 중지할 수 있으며, 제3자 광고 사업자의 맞춤 광고는{" "}
            <a href="https://www.aboutads.info/choices" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              www.aboutads.info
            </a>
            에서 사용 중지할 수 있습니다. Google이 광고에 데이터를 사용하는 방식은{" "}
            <a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Google 광고 정책
            </a>
            에서 확인할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8">5. 사용자 권리</h2>
          <p>
            귀하는 언제든지 개인정보 제공을 거부할 수 있으며, 쿠키 설정을 변경하거나 비활성화할 수
            있습니다. 이 경우 서비스의 일부 기능이 정상 작동하지 않을 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8">6. 문의</h2>
          <p>
            개인정보 처리에 관한 문의사항이 있으시면{" "}
            <a href="/contact" className="text-blue-600 hover:underline">
              문의하기
            </a>
            를 통해 연락주시기 바랍니다.
          </p>
        </section>
      </div>
    </div>
  );
}
