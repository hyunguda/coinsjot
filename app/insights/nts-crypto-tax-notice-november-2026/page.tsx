import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "국세청 \"가상자산 과세 고시 11월 준비\" — 국정감사에서 나온 과세 기준 발언 정리 | 코인 인사이트",
  description:
    "2026년 10월 13일 국세청 국정감사에서 국세청장은 가상자산 과세 기준을 담은 고시를 11월쯤 발표할 수 있도록 준비 중이라고 밝혔습니다. 스테이킹·에어드롭에 대한 입장과 투자자가 확인할 일정을 정리했습니다.",
  keywords:
    "가상자산 과세 고시, 국세청 가상자산 고시 11월, 코인 과세 국정감사, 스테이킹 과세 기준, 에어드롭 과세, 2027 코인 세금",
  openGraph: {
    title: "국세청 \"가상자산 과세 고시 11월 준비\" — 국정감사에서 나온 과세 기준 발언 정리",
    description:
      "2026년 10월 13일 국세청 국정감사에서 국세청장은 가상자산 과세 기준을 담은 고시를 11월쯤 발표할 수 있도록 준비 중이라고 밝혔습니다. 스테이킹·에어드롭에 대한 입장과 투자자가 확인할 일정을 정리했습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/nts-crypto-tax-notice-november-2026",
  },
};

const ARTICLE = {
  title: "국세청 \"가상자산 과세 고시 11월 준비\" — 국정감사에서 나온 과세 기준 발언 정리",
  date: "2026-10-15",
  category: "이슈",
};

export default function ArticleNtsCryptoTaxNotice() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 브레드크럼 */}
      <nav className="text-sm text-gray-400 mb-8">
        <Link href="/insights" className="hover:text-blue-600 transition">
          코인 인사이트
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{ARTICLE.category}</span>
      </nav>

      {/* 헤더 */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-100 text-orange-700">
            {ARTICLE.category}
          </span>
          <span className="text-sm text-gray-400">{formatDate(ARTICLE.date)}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
          {ARTICLE.title}
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          스테이킹·에어드롭·디파이 수익은 세금을 어떻게 낼까? 이 질문에 대한 국세청의 답이 11월 고시로 나올
          예정입니다. 10월 13일 국정감사에서 나온 발언을 사실 위주로 정리했습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">핵심 요약</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-sm text-blue-900 leading-relaxed space-y-2">
            <p><strong>언제·어디서:</strong> 2026년 10월 13일, 국회 재정경제기획위원회의 국세청 국정감사</p>
            <p><strong>고시 시점:</strong> 임광현 국세청장 &ldquo;11월쯤에 할 수 있도록 준비는 해놓고 있다&rdquo;</p>
            <p><strong>판단 기준:</strong> &ldquo;거래 유형이나 명칭보다는 경제적 실질이 중요&rdquo;, 양도인지 대여인지의 문제</p>
            <p><strong>남은 과제:</strong> 스테이킹 등 일부 모호한 거래는 재정경제부와 협의 필요</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">거래 유형별로 나온 발언</h2>
          <p className="leading-relaxed mb-4">
            현행 소득세법은 가상자산을 <strong>양도하거나 대여해서</strong> 생긴 소득을 과세합니다(제21조 제1항 제27호).
            국세청은 새로운 거래 유형도 이 두 가지 중 어디에 해당하는지로 판단하겠다는 입장입니다.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">거래 유형</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">국정감사 발언 (요지)</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">현재 상태</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">매매·교환</td>
                  <td className="px-4 py-3">양도에 해당</td>
                  <td className="px-4 py-3">과세 기준 명확</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">렌딩(대여)</td>
                  <td className="px-4 py-3">대여에 해당</td>
                  <td className="px-4 py-3">과세 대상, 세부 기준은 고시 예정</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">에어드롭·하드포크</td>
                  <td className="px-4 py-3">양도·대여 성격이 있다면 과세 대상으로 봐야 함</td>
                  <td className="px-4 py-3">고시에서 구체화 예정</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">스테이킹</td>
                  <td className="px-4 py-3">약간 모호한 분야, 재경부와 협의 필요</td>
                  <td className="px-4 py-3">미정</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">디파이</td>
                  <td className="px-4 py-3">명칭보다 경제적 실질로 판단</td>
                  <td className="px-4 py-3">미정</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            같은 날 고영일 국세청 개인납세국장도 &ldquo;양도인지 대여인지 판단하면 된다&rdquo;면서, 시행 초기 납세자 혼란이
            생길 수 있어 안내에 역량을 집중하겠다고 밝혔습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">국세청이 밝힌 준비 상황</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "조직·시스템", desc: "세원 관리를 위해 '가상자산관리과'를 신설하고, 해외 전문 추적 프로그램 도입을 추진 중이라고 밝혔습니다. 11월에는 통합 시스템 시범운영이 준비되고 있습니다." },
              { step: "2", title: "거래소 자료", desc: "과세가 시행되면 국내 거래소로부터 거래 자료를 분기별로 받도록 제도가 마련되어 있고, 거래소들과 실무 협의를 계속하고 있다고 했습니다." },
              { step: "3", title: "신고·검증 시점", desc: "법이 시행돼도 바로 신고하는 것이 아니라, 2027년 거래분을 2028년 5월에 신고하고 그 신고분부터 검증한다고 설명했습니다." },
              { step: "4", title: "해외·개인 지갑", desc: "국가 간 정보 자동교환체계(CARF)로 자료 교환은 진전되겠지만, 개인 간 지갑 거래 등은 포착에 한계가 있다고 인정했습니다." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 border border-gray-200 rounded-xl p-5">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">국회 논의 상황</h2>
          <p className="leading-relaxed mb-4">
            과세 시행을 두고는 국회 안에서 의견이 갈립니다. 국정감사에서는 준비 부족을 이유로 유예를 주장하는 의견과,
            세 차례 유예된 만큼 준비 상황을 철저히 점검하며 시행해야 한다는 의견이 함께 나왔습니다. 국회에는 과세를
            유예하거나 폐지하는 소득세법 개정안들이 발의되어 있습니다.
          </p>
          <p className="leading-relaxed">
            현행법상 시행일은 2027년 1월 1일이며, 국회가 법을 바꾸지 않는 한 예정대로 시행됩니다. 이 글은 시행 여부를
            예측하지 않으며, 확정된 사항이 나오면 관련 글을 갱신하겠습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">앞으로 확인할 일정</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">시기</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">내용</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">10월 22일</td>
                  <td className="px-4 py-3">국회 재경위 종합감사 — 재정경제부와 협의한 고시 계획 보고 요청됨</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">11월 (예정)</td>
                  <td className="px-4 py-3">국세청 가상자산 과세 고시 발표 목표, 통합 시스템 시범운영 준비</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">11월~</td>
                  <td className="px-4 py-3">국회 조세소위에서 세법 개정안 논의</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">2027년 1월 1일</td>
                  <td className="px-4 py-3">현행법상 과세 시행일</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">2028년 5월</td>
                  <td className="px-4 py-3">2027년 귀속분 첫 신고·납부</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">투자자가 지금 할 일</h2>
          <p className="leading-relaxed mb-4">
            고시가 어떻게 나오든 공통으로 필요한 것은 <strong>기록</strong>입니다. 스테이킹 보상이나 에어드롭을 받았다면
            받은 날짜, 수량, 그 시점의 시세를 지금부터 남겨두면 어떤 기준이 정해져도 대응할 수 있습니다. 2026년 이전부터
            보유한 코인은 연말 보유 현황과 매수 기록도 함께 정리해 두세요.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">관련 글 더 보기</h2>
          <div className="space-y-2 text-sm">
            {[
              { href: "/insights/crypto-lending-income-tax", label: "코인 빌려주고 받은 이자(렌딩)도 세금 낼까?" },
              { href: "/insights/staking-airdrop-tax", label: "스테이킹·에어드롭 수익, 세금 내야 할까?" },
              { href: "/insights/crypto-exchange-tax-reporting", label: "거래소는 국세청에 내 코인 거래를 어떻게 보고할까" },
              { href: "/insights/crypto-year-end-market-price", label: "2026년 12월 31일 '시가'는 어떻게 정해질까" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 border-b border-gray-100 last:border-0 text-blue-700 hover:text-blue-900 transition"
              >
                {item.label} →
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">정리: 핵심 체크리스트</h2>
          <div className="space-y-2">
            {[
              "국세청 가상자산 과세 고시는 11월 발표를 목표로 준비 중 (2026.10.13 국정감사)",
              "판단 기준은 명칭이 아니라 경제적 실질 — 양도인지 대여인지",
              "에어드롭·하드포크는 양도·대여 성격이 있으면 과세 대상이라는 입장",
              "스테이킹 등 일부는 재경부와 협의 필요 — 아직 미정",
              "10월 22일 종합감사, 11월 고시·조세소위 논의를 확인",
              "보상·에어드롭 받은 날짜·수량·시세 기록은 지금부터",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-0">
                <span className="text-blue-500 mt-0.5 flex-shrink-0">✓</span>
                <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 면책 고지 */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-500 leading-relaxed">
          본 글은 2026년 10월 13일 국정감사 관련 보도(연합뉴스·이투데이·한국금융신문·머니투데이·블록미디어 등)를
          바탕으로 한 일반적인 정보이며 세무 조언이 아닙니다. 고시 내용과 시점, 국회 논의 결과에 따라 달라질 수 있으므로
          국세청의 공식 발표를 확인하시기 바랍니다.
        </div>
      </article>

      {/* 관련 계산기 CTA */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-blue-900 mb-1">관련 도구</p>
        <p className="text-sm text-blue-700 mb-4">
          보유 코인 가격을 기록해 두고, 2027년 예상 세액을 미리 계산해보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/calculators/year-end-price"
            className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition text-center"
          >
            코인 보유가격 기록기 →
          </Link>
          <Link
            href="/calculators/deemed-acquisition-price"
            className="inline-block bg-white border border-blue-300 text-blue-700 text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition text-center"
          >
            가상화폐 세금 계산기 →
          </Link>
        </div>
      </div>

      {/* 목록으로 */}
      <div className="mt-8">
        <Link
          href="/insights"
          className="text-sm text-gray-500 hover:text-blue-600 transition"
        >
          ← 코인 인사이트 목록으로
        </Link>
      </div>
    </div>
  );
}
