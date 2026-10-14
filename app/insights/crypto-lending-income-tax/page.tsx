import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "코인 빌려주고 받은 이자(렌딩)도 세금 낼까? — 가상자산 대여소득 과세 정리 | 코인 인사이트",
  description:
    "2027년부터 과세되는 가상자산소득에는 코인을 양도한 소득뿐 아니라 대여해서 받은 소득도 포함됩니다. 대여소득의 계산 방법, 양도소득과 합산되는 구조, 아직 기준이 정해지지 않은 부분을 정리했습니다.",
  keywords:
    "코인 렌딩 세금, 가상자산 대여소득, 코인 이자 세금, 코인 대여 과세, 가상자산소득 대여, 소득세법 제21조 제27호",
  openGraph: {
    title: "코인 빌려주고 받은 이자(렌딩)도 세금 낼까? — 가상자산 대여소득 과세 정리",
    description:
      "2027년부터 과세되는 가상자산소득에는 코인을 양도한 소득뿐 아니라 대여해서 받은 소득도 포함됩니다. 대여소득의 계산 방법, 양도소득과 합산되는 구조, 아직 기준이 정해지지 않은 부분을 정리했습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/crypto-lending-income-tax",
  },
};

const ARTICLE = {
  title: "코인 빌려주고 받은 이자(렌딩)도 세금 낼까? — 가상자산 대여소득 과세 정리",
  date: "2026-10-13",
  category: "세금",
};

export default function ArticleCryptoLendingIncomeTax() {
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
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">
            {ARTICLE.category}
          </span>
          <span className="text-sm text-gray-400">{formatDate(ARTICLE.date)}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
          {ARTICLE.title}
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          코인 세금이라고 하면 보통 &lsquo;팔아서 남긴 차익&rsquo;만 떠올립니다. 그런데 법에 적힌 과세 대상은
          가상자산을 &lsquo;양도하거나 대여함으로써&rsquo; 생긴 소득입니다. 코인을 빌려주고 받은 이자도 과세
          대상이라는 뜻입니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">법에는 &lsquo;양도·대여&rsquo;로 적혀 있습니다</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-sm text-blue-900 leading-relaxed mb-4">
            소득세법 제21조 제1항 제27호는 「가상자산 이용자 보호 등에 관한 법률」에 따른 가상자산을
            <strong> 양도하거나 대여함으로써 발생하는 소득</strong>을 기타소득(가상자산소득)으로 정하고 있습니다.
          </div>
          <p className="leading-relaxed">
            국세청 안내도 2027년 1월 1일 이후 <strong>양도·대여분부터</strong> 기타소득으로 분리과세된다고
            설명합니다. 즉 코인을 다른 사람이나 서비스에 빌려주고 그 대가로 받는 이자·수수료는 매도 차익과 같은
            가상자산소득으로 묶여 과세됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">대여소득은 어떻게 계산하나요?</h2>
          <p className="leading-relaxed mb-4">
            가상자산소득의 필요경비는 소득세법 제37조 제1항 제3호에 정해져 있습니다. 양도되는 가상자산의 실제
            취득가액과, 취득·양도 또는 <strong>대여를 위하여 소요된 부대비용</strong>입니다.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">구분</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">총수입금액</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">필요경비</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">양도소득</td>
                  <td className="px-4 py-3">양도(매매·교환)의 대가</td>
                  <td className="px-4 py-3">양도한 코인의 취득가액 + 부대비용</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">대여소득</td>
                  <td className="px-4 py-3">대여의 대가(받은 이자·수수료)</td>
                  <td className="px-4 py-3">대여를 위해 든 부대비용</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="leading-relaxed">
            대여는 코인을 파는 것이 아니므로, 빌려준 코인 자체의 취득가액은 대여소득에서 빼지 않습니다.
            빌려준 코인은 나중에 실제로 팔 때 그 취득가액이 양도소득 계산에 쓰입니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">양도소득과 합쳐서 250만원 공제</h2>
          <p className="leading-relaxed mb-4">
            대여소득은 따로 공제를 받지 않고, 같은 해의 양도 손익과 합산한 뒤 연 250만원 기본공제를 한 번
            적용합니다. 세율은 지방소득세를 포함해 22%이고, 다음 해 5월에 함께 신고·납부합니다.
          </p>
          <p className="leading-relaxed mb-4">
            아래는 이해를 돕기 위한 단순 예시입니다. 2027년에 이자로 받은 코인의 가액 합계를 360만원으로
            가정했습니다(받은 시점의 원화 가치로 평가한다고 가정).
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">항목</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">이자만 있는 경우</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">매도 차익 500만원도 있는 경우</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">양도소득</td>
                  <td className="px-4 py-3">0원</td>
                  <td className="px-4 py-3">500만원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">대여소득</td>
                  <td className="px-4 py-3">360만원</td>
                  <td className="px-4 py-3">360만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">합계 소득금액</td>
                  <td className="px-4 py-3">360만원</td>
                  <td className="px-4 py-3">860만원</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">과세표준 (기본공제 250만원 차감)</td>
                  <td className="px-4 py-3">110만원</td>
                  <td className="px-4 py-3">610만원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">예상 세액 (22%)</td>
                  <td className="px-4 py-3">24만 2,000원</td>
                  <td className="px-4 py-3">134만 2,000원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            이자만으로는 세금이 크지 않아도, 매도 차익이 함께 있으면 기본공제를 나눠 쓰는 구조라 세액이 늘어납니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">아직 정해지지 않은 부분</h2>
          <p className="leading-relaxed mb-4">
            과세 대상에 대여가 들어간다는 점은 법에 분명하지만, 세부 기준은 아직 충분히 마련되지 않았다는 지적이
            많습니다. 자본시장연구원 보고서 등에서 꼽는 쟁점은 다음과 같습니다.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">쟁점</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">현재 상황</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">&lsquo;대여&rsquo;의 범위</td>
                  <td className="px-4 py-3">어떤 서비스가 대여에 해당하는지 유형별 안내가 없음</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">스테이킹·유동성 공급</td>
                  <td className="px-4 py-3">대여에 포함되는지, 다른 소득으로 볼지 과세당국 입장이 불명확</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">이자로 받은 코인의 가액</td>
                  <td className="px-4 py-3">받은 시점을 언제로 보고 원화로 어떻게 평가할지 세부 기준 미비</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">받은 코인을 나중에 팔 때</td>
                  <td className="px-4 py-3">그 코인의 취득가액을 얼마로 볼지 명확한 규정이 없어 보완 입법 필요성이 제기됨</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="leading-relaxed">
            국세청장은 2026년 10월 13일 국정감사에서 가상자산 과세 기준을 담은 고시를 11월쯤 발표할 수 있도록 준비하고 있다고 밝혔습니다. 고시나 후속 안내가 나오면 이 글도
            갱신하겠습니다. 그 전까지는 아래 기록을 남겨두는 것이 가장 안전합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">지금부터 남겨둘 기록</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "이자를 받은 날짜·수량", desc: "서비스 화면이나 내역 다운로드로 이자(보상) 지급 일시와 코인 수량을 기록합니다." },
              { step: "2", title: "받은 시점의 시세", desc: "이자를 받은 시점의 원화 시세를 함께 기록해 두면 나중에 기준이 정해져도 대응하기 쉽습니다." },
              { step: "3", title: "대여에 든 비용", desc: "대여·예치에 들어간 수수료 등 부대비용 내역은 필요경비 증빙이 될 수 있습니다." },
              { step: "4", title: "어떤 서비스였는지", desc: "국내외 어떤 사업자의 어떤 상품(대여, 예치, 스테이킹 등)이었는지 약관과 상품명을 보관합니다." },
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
          <p className="text-sm text-gray-500 mt-4">
            참고로 거래소에서 코인을 빌리는 서비스는 이용자가 빌리는 쪽이므로, 이용자에게 대여소득이 생기는
            구조와는 방향이 다릅니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">관련 글 더 보기</h2>
          <div className="space-y-2 text-sm">
            {[
              { href: "/insights/staking-airdrop-tax", label: "스테이킹·에어드롭 수익, 세금 내야 할까?" },
              { href: "/insights/crypto-basic-deduction", label: "250만원 기본공제 완벽 정리" },
              { href: "/insights/crypto-tax-glossary", label: "코인 세금 용어 총정리" },
              { href: "/insights/crypto-exchange-tax-reporting", label: "거래소는 국세청에 내 코인 거래를 어떻게 보고할까" },
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
              "과세 대상은 가상자산의 양도소득과 대여소득 (소득세법 제21조 제1항 제27호)",
              "대여소득의 필요경비는 대여를 위해 든 부대비용 (빌려준 코인의 취득가액은 빼지 않음)",
              "대여소득은 양도 손익과 합산해 연 250만원 기본공제를 한 번 적용",
              "세율 22%(지방소득세 포함), 다음 해 5월 신고·납부",
              "대여 범위·스테이킹 구분·이자 코인 평가 기준은 아직 미비 → 11월 예정인 국세청 고시 확인",
              "이자 받은 날짜·수량·시세·비용·상품 정보를 기록",
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
          본 글은 소득세법과 국세청 안내 자료를 바탕으로 한 일반적인 정보이며 세무 조언이 아닙니다. 대여소득의
          세부 기준은 국세청 고시에 따라 달라질 수 있으므로 실제 신고 시에는 국세청 안내를 확인하거나 세무사와
          상담하시기 바랍니다.
        </div>
      </article>

      {/* 관련 계산기 CTA */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-blue-900 mb-1">관련 계산기</p>
        <p className="text-sm text-blue-700 mb-4">
          매도 차익과 이자를 합친 예상 세액을 미리 계산해보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/calculators/profit-loss-simulator"
            className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition text-center"
          >
            코인 포트폴리오 통합 계산기 →
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
