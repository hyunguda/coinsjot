import { Metadata } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/insights";

export const metadata: Metadata = {
  title: "내 지갑 간 코인 이전, 세금이 발생할까? | 코인 인사이트",
  description:
    "거래소에서 개인 지갑으로 코인을 옮기거나, 내 지갑 두 개 사이에 전송해도 세금이 발생하지 않습니다. 세금이 생기는 시점은 '양도'뿐입니다. 지갑 이전과 양도의 차이, 주의사항을 정리했습니다.",
  keywords:
    "코인 지갑 이전 세금, 거래소 개인지갑 전송 세금, 코인 전송 과세, 비트코인 지갑 이동 세금, 가상자산 지갑 전송 양도세",
  openGraph: {
    title: "내 지갑 간 코인 이전, 세금이 발생할까?",
    description:
      "거래소 → 개인 지갑 전송, 내 지갑 간 이동은 세금이 없습니다. 세금이 생기는 건 '팔거나 교환'할 때뿐입니다. 지갑 이전과 양도의 차이를 정리했습니다.",
    type: "article",
  },
  alternates: {
    canonical: "https://coinsjot.com/insights/crypto-wallet-transfer-tax",
  },
};

const ARTICLE = {
  title: "내 지갑 간 코인 이전, 세금이 발생할까?",
  date: "2026-09-27",
  category: "세금",
};

export default function ArticleCryptoWalletTransferTax() {
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
          거래소에서 개인 하드웨어 지갑으로 코인을 옮기거나, 내 지갑 두 개 사이에 전송할 때
          세금이 생길까 걱정하는 분들이 많습니다. 결론부터 말하면 <strong>지갑 간 이전에는 세금이 발생하지 않습니다.</strong>{" "}
          세금이 생기는 시점은 코인을 '양도'하는 순간뿐입니다.
        </p>
      </header>

      {/* 본문 */}
      <article className="space-y-10 text-gray-800">

        {/* 한눈에 */}
        <section>
          <h2 className="text-2xl font-bold mb-4">한눈에 — 지갑 이전 vs 과세 이벤트</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">행위</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">세금 발생</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">이유</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 text-gray-600">거래소 → 내 개인 지갑</td>
                  <td className="px-4 py-3 text-center text-green-700 font-bold">없음</td>
                  <td className="px-4 py-3 text-gray-600">소유권 변동 없음, 양도 아님</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">내 지갑 A → 내 지갑 B</td>
                  <td className="px-4 py-3 text-center text-green-700 font-bold">없음</td>
                  <td className="px-4 py-3 text-gray-600">동일인 보유, 양도 아님</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">내 지갑 → 타인 지갑 (증여)</td>
                  <td className="px-4 py-3 text-center text-amber-600 font-bold">증여세</td>
                  <td className="px-4 py-3 text-gray-600">수증자에게 소유권 이전</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">코인 매도 (원화로 출금)</td>
                  <td className="px-4 py-3 text-center text-red-600 font-bold">양도소득세</td>
                  <td className="px-4 py-3 text-gray-600">재산 양도, 차익 실현</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">코인 A → 코인 B 교환</td>
                  <td className="px-4 py-3 text-center text-red-600 font-bold">양도소득세</td>
                  <td className="px-4 py-3 text-gray-600">코인 교환도 양도로 간주</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">① 세금이 발생하는 조건 — '양도'란 무엇인가?</h2>
          <p className="leading-relaxed mb-4">
            가상자산 양도소득세는 말 그대로 <strong>양도</strong> 시에만 발생합니다.
            양도란 코인의 <strong>소유권이 다른 사람에게 이전되는 것</strong>을 말합니다.
            내 거래소 계정에서 내 개인 지갑으로 옮기는 것은 소유권 자체는 변하지 않습니다.
            지갑 주소가 바뀔 뿐, 코인의 주인은 여전히 본인입니다.
          </p>
          <div className="rounded-xl border border-blue-100 overflow-hidden">
            <div className="bg-blue-50 px-5 py-3 border-b border-blue-200">
              <p className="font-bold text-blue-800">세법상 '양도'에 해당하는 경우</p>
            </div>
            <ul className="px-5 py-4 text-sm text-gray-700 space-y-2 list-disc list-inside">
              <li>코인을 원화(KRW)나 스테이블코인으로 매도</li>
              <li>코인을 다른 코인으로 교환(스왑)</li>
              <li>코인으로 재화·서비스를 결제</li>
              <li>코인을 타인에게 유상 양도</li>
            </ul>
          </div>
          <div className="rounded-xl border border-green-100 overflow-hidden mt-4">
            <div className="bg-green-50 px-5 py-3 border-b border-green-200">
              <p className="font-bold text-green-800">세법상 '양도'에 해당하지 않는 경우</p>
            </div>
            <ul className="px-5 py-4 text-sm text-gray-700 space-y-2 list-disc list-inside">
              <li>내 거래소 계정 → 내 개인 지갑 전송</li>
              <li>내 개인 지갑 A → 내 개인 지갑 B 전송</li>
              <li>거래소 간 내 계정 이동 (업비트 → 빗썸, 동일 본인)</li>
              <li>코인 보유 중 가격 상승 (미실현 수익)</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">② 지갑 이전이 세금을 유발하지 않는 이유</h2>
          <p className="leading-relaxed mb-4">
            코인 세금의 핵심은 <strong>차익 실현</strong>입니다.
            지갑 이전은 코인의 물리적 위치(주소)만 바뀔 뿐,
            취득가액도 보유 수량도 변하지 않습니다.
            양도차익이 발생하지 않으므로 과세할 수 없습니다.
          </p>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <p className="font-bold text-gray-800">예시: 거래소 → 하드웨어 지갑 이전</p>
            </div>
            <div className="px-5 py-4 text-sm text-gray-700 space-y-2">
              <p>• 업비트에 비트코인 0.1 BTC 보유 (취득가 500만원)</p>
              <p>• 하드웨어 지갑으로 전송 → 비트코인 0.1 BTC 동일 보유</p>
              <p>• 이전 후에도 취득가: <strong>500만원</strong>, 수량: <strong>0.1 BTC</strong> 그대로 유지</p>
              <p className="mt-2 text-green-700 font-semibold">✓ 양도차익 없음 → 세금 없음</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">③ 전송 수수료(가스비)는 취득가액에 포함되나?</h2>
          <p className="leading-relaxed mb-4">
            지갑 이전 자체는 과세 이벤트가 아니지만, 전송 과정에서 발생하는 <strong>네트워크 수수료(가스비)</strong>는
            세금 처리에서 따로 고려해야 합니다.
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                <p className="font-semibold text-gray-800">원화 수수료 (국내 거래소)</p>
              </div>
              <div className="px-5 py-4 text-sm text-gray-700">
                <p>
                  업비트·빗썸 등에서 출금 시 원화로 청구되는 수수료는
                  해당 코인의 <strong>취득·보유 비용</strong>으로 볼 수 있습니다.
                  다만 현행법상 출금 수수료를 취득가에 직접 합산하기는 어렵습니다.
                  매수·매도 수수료는 취득가에 포함 가능하지만, 단순 출금 수수료는 별도로 공제되지 않습니다.
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-amber-100 overflow-hidden">
              <div className="bg-amber-50 px-5 py-3 border-b border-amber-200">
                <p className="font-semibold text-amber-800">코인으로 납부하는 가스비 (이더리움 등)</p>
              </div>
              <div className="px-5 py-4 text-sm text-gray-700">
                <p>
                  이더리움 네트워크에서 ETH로 가스비를 납부하면,
                  가스비로 사용된 ETH 일부가 <strong>소비·이전</strong>됩니다.
                  이 부분이 양도로 간주될 수 있는지는 아직 명확한 예규가 없습니다.
                  가스비 규모가 크다면 세무 전문가에게 확인하는 것이 안전합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">④ 주의: 타인 지갑으로 보내면 세금이 달라진다</h2>
          <p className="leading-relaxed mb-4">
            지갑 이전이 세금과 무관한 것은 <strong>본인 소유의 지갑 사이</strong>에서만 해당됩니다.
            타인의 지갑으로 전송하는 경우에는 상황에 따라 세금이 발생합니다.
          </p>
          <ul className="space-y-4 text-sm text-gray-700">
            <li className="flex gap-3">
              <span className="text-amber-500 font-bold mt-0.5 shrink-0">①</span>
              <span>
                <strong>증여 목적 전송:</strong> 가족이나 지인의 지갑으로 코인을 보내면
                증여로 간주됩니다. 증여세 면제 한도(배우자 6억, 직계존비속 5천만원 등)를
                초과하면 수증자에게 증여세가 부과됩니다.
                관련 내용은{" "}
                <Link href="/insights/crypto-gift-tax-strategy" className="text-blue-600 hover:underline">
                  코인 증여 절세 전략
                </Link>을 참고하세요.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-500 font-bold mt-0.5 shrink-0">②</span>
              <span>
                <strong>대가 수취 전송:</strong> 물건·서비스 대금으로 코인을 보내면
                해당 코인의 시가와 취득가의 차이만큼 양도차익이 발생합니다.
                코인으로 결제하는 것도 양도로 간주되기 때문입니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-500 font-bold mt-0.5 shrink-0">③</span>
              <span>
                <strong>명의 혼용 지갑:</strong> 부부 공동 지갑 등 복수 명의가 섞인 경우
                어느 비율로 소유했는지가 불명확해질 수 있습니다.
                개인 지갑은 본인 명의로만 사용하는 것이 세무 리스크를 줄이는 방법입니다.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">⑤ 취득가액 관리 — 지갑 이전 후에도 기록이 중요하다</h2>
          <p className="leading-relaxed mb-4">
            지갑 이전 자체는 세금을 만들지 않지만, 이전 이후 코인을 매도할 때는
            <strong> 최초 취득가액</strong>을 기준으로 세금을 계산합니다.
            지갑을 옮겼다고 해서 취득가액이 리셋되지 않습니다.
          </p>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <p className="font-bold text-gray-800">예시: 지갑 이전 후 매도 시 세금 계산</p>
            </div>
            <div className="px-5 py-4 text-sm text-gray-700 space-y-2">
              <p>① 업비트에서 이더리움 1 ETH를 <strong>300만원</strong>에 매수</p>
              <p>② 메타마스크 개인 지갑으로 전송 → 세금 없음</p>
              <p>③ 6개월 후 개인 지갑에서 빗썸으로 이전 → 세금 없음</p>
              <p>④ 빗썸에서 <strong>500만원</strong>에 매도</p>
              <p className="mt-2">양도차익: 500만 − 300만 = <strong>200만원</strong></p>
              <p className="text-gray-500 text-xs mt-1">
                지갑 이전 횟수에 관계없이, 취득가는 최초 매수 시점 300만원이 기준입니다.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-amber-100 bg-amber-50 px-5 py-4 text-sm text-amber-800 mt-4">
            <strong>중요:</strong> 여러 거래소와 지갑을 오가다 보면 취득가 추적이 어려워집니다.
            거래 내역(날짜·수량·단가)을 별도로 기록하거나 세금 계산 도구를 활용해
            취득가를 누락 없이 관리하세요.
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">핵심 요약</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5">①</span>
              <span>
                <strong>지갑 이전 자체는 세금 없음:</strong> 거래소 → 개인 지갑, 내 지갑 간 이전은
                소유권이 바뀌지 않아 양도소득세가 발생하지 않습니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5">②</span>
              <span>
                <strong>세금은 '양도' 시점에만:</strong> 매도, 코인 교환, 코인으로 결제할 때만
                양도차익이 생겨 세금이 발생합니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5">③</span>
              <span>
                <strong>타인 지갑 전송은 다르다:</strong> 가족·지인에게 보내면 증여,
                대가 수취 목적이면 양도로 간주되어 세금이 붙을 수 있습니다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold mt-0.5">④</span>
              <span>
                <strong>취득가는 최초 매수 기준:</strong> 지갑을 여러 번 옮겨도 취득가액은
                처음 매수한 가격 그대로입니다. 기록 관리를 꾸준히 해야 나중에 세금 신고가 수월합니다.
              </span>
            </li>
          </ul>
        </section>

        {/* 면책 고지 */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-500 leading-relaxed">
          본 글은 일반적인 정보 제공을 목적으로 작성되었으며 세무 조언이 아닙니다.
          가상자산 양도소득세는 2027년 시행 예정이며, 세부 규정은 시행 전까지 변경될 수 있습니다.
          개인 상황에 따라 세금 처리 방법이 달라질 수 있으므로 세무 전문가에게 확인하시기 바랍니다.
        </div>
      </article>

      {/* 관련 계산기 CTA */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-blue-900 mb-1">관련 계산기</p>
        <p className="text-sm text-blue-700 mb-4">
          여러 코인의 손익을 합산해 실제 납부 세액을 미리 계산해보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/calculators/profit-loss-simulator"
            className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition text-center"
          >
            손익통산 시뮬레이터 →
          </Link>
          <Link
            href="/calculators/deemed-acquisition-price"
            className="inline-block bg-white border border-blue-300 text-blue-700 text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition text-center"
          >
            의제취득가액 계산기 →
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
