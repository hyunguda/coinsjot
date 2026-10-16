import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "과세 대상 가상자산은 어디까지? — NFT·게임 아이템·스테이블코인·포인트 구분 정리 | 코인 인사이트",
  description:
    "2027년 과세 대상은 가상자산이용자보호법 제2조 제1호의 가상자산입니다. 법이 정한 정의와 제외 대상, NFT가 가상자산이 되는 기준, 스테이블코인·게임 아이템·포인트·토큰증권의 구분을 법령 기준으로 정리했습니다.",
  keywords:
    "가상자산 정의, 과세 대상 가상자산, NFT 세금, NFT 가상자산 기준, 게임 아이템 가상자산, 스테이블코인 세금, 가상자산이용자보호법 제2조",
  openGraph: {
    title: "과세 대상 가상자산은 어디까지? — NFT·게임 아이템·스테이블코인·포인트 구분 정리",
    description:
      "2027년 과세 대상은 가상자산이용자보호법 제2조 제1호의 가상자산입니다. 법이 정한 정의와 제외 대상, NFT가 가상자산이 되는 기준, 스테이블코인·게임 아이템·포인트·토큰증권의 구분을 법령 기준으로 정리했습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/crypto-tax-scope-virtual-asset",
  },
};

const ARTICLE = {
  title: "과세 대상 가상자산은 어디까지? — NFT·게임 아이템·스테이블코인·포인트 구분 정리",
  date: "2026-10-16",
  category: "세금",
};

export default function ArticleCryptoTaxScope() {
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
          비트코인은 당연히 과세 대상인데, NFT나 게임 아이템, USDT 같은 스테이블코인은 어떨까요? 세법은 과세
          대상을 직접 나열하지 않고 다른 법의 &lsquo;가상자산&rsquo; 정의를 빌려 씁니다. 그 정의와 제외 대상을 정리했습니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        <section>
          <h2 className="text-2xl font-bold mb-4">세법은 &lsquo;가상자산이용자보호법&rsquo;의 정의를 씁니다</h2>
          <p className="leading-relaxed mb-4">
            소득세법 제21조 제1항 제27호는 「가상자산 이용자 보호 등에 관한 법률」 <strong>제2조 제1호에 따른 가상자산</strong>을
            양도하거나 대여해서 생긴 소득을 과세합니다. 그래서 무엇이 과세 대상인지는 이 법의 정의를 보면 됩니다.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-sm text-blue-900 leading-relaxed">
            <strong>가상자산이란</strong> &ldquo;경제적 가치를 지닌 것으로서 전자적으로 거래 또는 이전될 수 있는 전자적
            증표(그에 관한 일체의 권리를 포함한다)&rdquo;를 말합니다. (가상자산이용자보호법 제2조 제1호 본문)
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">법이 명시한 제외 대상</h2>
          <p className="leading-relaxed mb-4">
            정의에 해당하더라도 아래는 가상자산에서 빠집니다. 법률(제2조 제1호 가목~사목)과 시행령(제2조)이 정한 것입니다.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">제외 대상</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">근거</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">예시</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">발행인이 사용처·용도를 제한하고 화폐·재화·용역으로 교환할 수 없는 전자적 증표</td>
                  <td className="px-4 py-3">법 가목</td>
                  <td className="px-4 py-3">특정 서비스 안에서만 쓰는 포인트</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">게임물 이용으로 획득한 유·무형의 결과물</td>
                  <td className="px-4 py-3">법 나목 (게임산업법)</td>
                  <td className="px-4 py-3">게임 머니, 게임 아이템</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">선불전자지급수단, 전자화폐</td>
                  <td className="px-4 py-3">법 다목 (전자금융거래법)</td>
                  <td className="px-4 py-3">충전식 페이 잔액</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">전자등록주식등</td>
                  <td className="px-4 py-3">법 라목</td>
                  <td className="px-4 py-3">전자등록된 주식·사채</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">전자어음, 전자선하증권</td>
                  <td className="px-4 py-3">법 마목·바목</td>
                  <td className="px-4 py-3">기업 간 전자어음</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">한국은행이 발행하는 전자적 형태의 화폐(CBDC)</td>
                  <td className="px-4 py-3">법 사목</td>
                  <td className="px-4 py-3">—</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">전자채권</td>
                  <td className="px-4 py-3">시행령 제2조 제1호</td>
                  <td className="px-4 py-3">—</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">모바일 상품권</td>
                  <td className="px-4 py-3">시행령 제2조 제2호</td>
                  <td className="px-4 py-3">휴대폰에 저장되는 금액·물품형 상품권</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">CBDC 네트워크에서 발행되는 예금 토큰</td>
                  <td className="px-4 py-3">시행령 제2조 제3호</td>
                  <td className="px-4 py-3">—</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">대체할 수 없는 전자적 증표(일정 요건의 NFT)</td>
                  <td className="px-4 py-3">시행령 제2조 제4호</td>
                  <td className="px-4 py-3">수집 목적의 NFT</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            이 밖에 금융위원회가 이용자 권익을 해칠 우려가 없다고 고시하는 것도 제외될 수 있습니다(시행령 제2조 제5호).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">NFT는 &lsquo;실질&rsquo;에 따라 갈립니다</h2>
          <p className="leading-relaxed mb-4">
            시행령이 제외하는 NFT는 &ldquo;수집을 주된 목적으로 하는 전자적 증표, 거래 당사자 간 거래 확인만을 목적으로 하는
            전자적 증표 등 단일하게 존재하여 다른 전자적 증표로 대체할 수 없는 전자적 증표&rdquo;입니다. 다만 특정 재화나
            서비스의 지급수단으로 쓸 수 있는 것 등은 다시 제외 대상에서 빠집니다. 금융위원회의 「NFT의 가상자산 판단
            가이드라인」(2024년 6월)은 이름이 아니라 실질로 판단하라고 하면서 다음 기준을 제시했습니다.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">가상자산에 해당할 가능성이 높은 NFT</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">가상자산이 아닐 가능성이 높은 NFT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">대량·대규모 시리즈로 발행되어 서로 대체 가능성이 큰 경우</td>
                  <td className="px-4 py-3">신원·자격 증명, 영수증 등 경제적 가치가 아닌 목적인 경우</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">소수점 단위로 분할이 가능한 경우</td>
                  <td className="px-4 py-3">공연 티켓처럼 한정 수량으로 관람 목적에만 쓰이는 경우</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">재화·서비스의 지급수단으로 쓸 수 있는 경우</td>
                  <td className="px-4 py-3">2차 거래가 불가능한 경우</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">불특정인 간에 다른 가상자산과 교환이 가능한 경우</td>
                  <td className="px-4 py-3">—</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            따라서 같은 &lsquo;NFT&rsquo;라도 어떤 구조로 발행·유통되는지에 따라 과세 여부가 달라질 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">자주 묻는 자산별 정리</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">자산</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">가상자산 해당 여부</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 border-b border-gray-200">설명</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">비트코인·이더리움 등 일반 코인</td>
                  <td className="px-4 py-3">해당</td>
                  <td className="px-4 py-3">정의에 해당하고 제외 대상이 아님</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">USDT 등 스테이블코인</td>
                  <td className="px-4 py-3">해당</td>
                  <td className="px-4 py-3">법이 열거한 제외 대상에 들어 있지 않음. 국세청도 USDT 마켓의 테더를 기축가상자산의 예로 듦</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">게임 머니·아이템</td>
                  <td className="px-4 py-3">제외</td>
                  <td className="px-4 py-3">게임물 이용으로 획득한 결과물 (법 나목)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">수집용 NFT</td>
                  <td className="px-4 py-3">원칙적 제외</td>
                  <td className="px-4 py-3">단, 대량 발행·분할·지급수단 등 실질이 가상자산이면 해당</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">앱 포인트·적립금</td>
                  <td className="px-4 py-3">대체로 제외</td>
                  <td className="px-4 py-3">발행인이 사용처를 제한하고 교환할 수 없는 경우 (법 가목)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">토큰증권(STO)</td>
                  <td className="px-4 py-3">가상자산 아님</td>
                  <td className="px-4 py-3">자본시장법상 증권으로 증권 규제를 받음</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">CBDC·예금 토큰</td>
                  <td className="px-4 py-3">제외</td>
                  <td className="px-4 py-3">법 사목, 시행령 제2조 제3호</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            표는 법령과 금융위원회 가이드라인의 일반 기준을 정리한 것이며, 개별 자산의 판단은 발행·유통 구조에 따라 달라질 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">가상자산이 아니면 세금이 없나요?</h2>
          <p className="leading-relaxed">
            가상자산에서 제외되면 &lsquo;가상자산소득&rsquo;(22% 분리과세, 연 250만원 공제)으로 과세되지 않는다는 뜻일 뿐,
            무조건 세금이 없다는 뜻은 아닙니다. 토큰증권은 증권 관련 세제가, 사업으로 반복해서 거래하는 경우에는 사업소득
            등 다른 소득 구분이 문제될 수 있습니다. 해당 사항이 있다면 세무사와 상담하는 것이 안전합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">관련 글 더 보기</h2>
          <div className="space-y-2 text-sm">
            {[
              { href: "/insights/crypto-tax-glossary", label: "코인 세금 용어 총정리" },
              { href: "/insights/crypto-swap-tax", label: "코인을 다른 코인으로 바꾸면 세금이 발생할까?" },
              { href: "/insights/staking-airdrop-tax", label: "스테이킹·에어드롭 수익, 세금 내야 할까?" },
              { href: "/insights/nts-crypto-tax-notice-november-2026", label: "국세청 \"가상자산 과세 고시 11월 준비\"" },
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
              "과세 대상 = 가상자산이용자보호법 제2조 제1호의 가상자산 (소득세법 제21조 제1항 제27호)",
              "정의: 경제적 가치가 있고 전자적으로 거래·이전될 수 있는 전자적 증표",
              "게임 아이템, 선불전자지급수단, 전자등록주식, CBDC, 모바일 상품권 등은 제외",
              "NFT는 실질로 판단 — 대량 발행·분할·지급수단·교환 가능하면 가상자산 가능성",
              "스테이블코인은 제외 대상이 아니므로 가상자산에 해당",
              "가상자산이 아니어도 다른 세금이 생길 수 있음",
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
          본 글은 소득세법, 가상자산이용자보호법·같은 법 시행령, 금융위원회 「NFT의 가상자산 판단 가이드라인」(2024.6)을
          바탕으로 한 일반적인 정보이며 법률·세무 조언이 아닙니다. 개별 자산의 해당 여부는 사안별로 판단되므로 실제 신고 시에는
          국세청 안내를 확인하거나 전문가와 상담하시기 바랍니다.
        </div>
      </article>

      {/* 관련 계산기 CTA */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-blue-900 mb-1">관련 계산기</p>
        <p className="text-sm text-blue-700 mb-4">
          과세 대상 코인의 손익을 합산해 예상 세액을 계산해보세요.
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
