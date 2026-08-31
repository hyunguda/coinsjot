"use client";

import { useState, useMemo } from "react";

const fmtWon = (raw: string) => {
  const d = raw.replace(/[^0-9]/g, "");
  return d ? Number(d).toLocaleString("ko-KR") : "";
};
const parseWon = (v: string) => v.replace(/[^0-9]/g, "");
const parseQty = (v: string) =>
  v.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");

const fmtKRW = (n: number) => Math.round(n).toLocaleString("ko-KR") + "원";

const inputCls =
  "w-full px-3 py-2.5 bg-gray-50 border border-transparent rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none transition tabular-nums";

function calcGiftTax(taxableBase: number): number {
  if (taxableBase <= 0) return 0;
  if (taxableBase <= 100_000_000) return taxableBase * 0.1;
  if (taxableBase <= 500_000_000) return taxableBase * 0.2 - 10_000_000;
  if (taxableBase <= 1_000_000_000) return taxableBase * 0.3 - 60_000_000;
  if (taxableBase <= 3_000_000_000) return taxableBase * 0.4 - 160_000_000;
  return taxableBase * 0.5 - 460_000_000;
}

function getGiftTaxRate(taxableBase: number): string {
  if (taxableBase <= 0) return "—";
  if (taxableBase <= 100_000_000) return "10%";
  if (taxableBase <= 500_000_000) return "20%";
  if (taxableBase <= 1_000_000_000) return "30%";
  if (taxableBase <= 3_000_000_000) return "40%";
  return "50%";
}

function calcCapitalGainsTax(gain: number): number {
  const taxableBase = Math.max(0, gain - 2_500_000);
  return taxableBase * 0.22;
}

const RELATIONSHIPS = [
  {
    label: "배우자",
    exemption: 600_000_000,
    note: "10년간 6억원 공제",
  },
  {
    label: "직계존속 (부모·조부모)",
    exemption: 50_000_000,
    note: "내가 받을 때 · 10년간 5,000만원 공제",
  },
  {
    label: "성인 자녀·손자녀",
    exemption: 50_000_000,
    note: "내가 줄 때 · 10년간 5,000만원 공제",
  },
  {
    label: "미성년 자녀",
    exemption: 20_000_000,
    note: "내가 줄 때 · 10년간 2,000만원 공제",
  },
  {
    label: "형제자매·기타 친족",
    exemption: 10_000_000,
    note: "6촌 이내 혈족, 4촌 이내 인척 · 10년간 1,000만원 공제",
  },
];

export function GiftTaxCalculator() {
  const [acquisitionRaw, setAcquisitionRaw] = useState("");
  const [currentRaw, setCurrentRaw] = useState("");
  const [qtyRaw, setQtyRaw] = useState("");

  const result = useMemo(() => {
    const acquisition = Number(acquisitionRaw) || 0;
    const current = Number(currentRaw) || 0;
    const qty = parseFloat(qtyRaw) || 0;
    if (!acquisition || !current || !qty) return null;

    const totalAcquisition = acquisition * qty;
    const totalCurrent = current * qty;
    const gain = totalCurrent - totalAcquisition;
    const directTax = calcCapitalGainsTax(Math.max(0, gain));

    const rows = RELATIONSHIPS.map((rel) => {
      const taxableBase = Math.max(0, totalCurrent - rel.exemption);
      const giftTax = calcGiftTax(taxableBase);
      const rate = getGiftTaxRate(taxableBase);
      const savings = directTax - giftTax;
      return { ...rel, taxableBase, rate, giftTax, savings };
    });

    return { totalAcquisition, totalCurrent, gain, directTax, rows };
  }, [acquisitionRaw, currentRaw, qtyRaw]);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* 입력 카드 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="text-sm font-bold text-gray-900 tracking-wide">
            코인 정보 입력
          </h2>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">
                취득가액 (원/코인)
              </label>
              <input
                type="text"
                inputMode="numeric"
                value={fmtWon(acquisitionRaw)}
                placeholder="예: 30,000,000"
                onChange={(e) => setAcquisitionRaw(parseWon(e.target.value))}
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">
                현재 시가 (원/코인)
              </label>
              <input
                type="text"
                inputMode="numeric"
                value={fmtWon(currentRaw)}
                placeholder="예: 100,000,000"
                onChange={(e) => setCurrentRaw(parseWon(e.target.value))}
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">
                보유 수량 (코인)
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={qtyRaw}
                placeholder="예: 1.5"
                onChange={(e) => setQtyRaw(parseQty(e.target.value))}
                className={inputCls}
              />
            </div>
          </div>
        </div>
      </div>

      {result && (
        <>
          {/* 기준 요약 */}
          <div className="grid grid-cols-3 gap-3">
            {[
              {
                label: "총 취득가액",
                val: fmtKRW(result.totalAcquisition),
                cls: "text-gray-800",
              },
              {
                label: "현재 평가금액",
                val: fmtKRW(result.totalCurrent),
                cls: "text-gray-800",
              },
              {
                label: "직접 매도 시 양도세",
                val: fmtKRW(result.directTax),
                cls: result.directTax > 0 ? "text-red-600" : "text-gray-800",
              },
            ].map(({ label, val, cls }) => (
              <div
                key={label}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4"
              >
                <p className="text-xs text-gray-400 mb-2">{label}</p>
                <p className={`text-base font-bold tabular-nums leading-snug ${cls}`}>
                  {val}
                </p>
              </div>
            ))}
          </div>

          {/* 관계별 비교 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100">
              <h3 className="text-sm font-bold text-gray-900 tracking-wide">
                관계별 증여 시 세금 비교
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                증여 후 즉시 매도 시 수증자의 양도세 = 0원 (취득가액이 시가로 리셋됨)
              </p>
            </div>
            <div className="divide-y divide-gray-50">
              {result.rows.map((row) => {
                const isBetter = row.savings > 0;
                const isEqual = Math.abs(row.savings) < 1;
                return (
                  <div key={row.label} className="px-5 py-4">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-gray-800">
                          {row.label}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">{row.note}</p>
                      </div>
                      <span
                        className={`flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full ${
                          isBetter
                            ? "bg-green-100 text-green-700"
                            : isEqual
                            ? "bg-gray-100 text-gray-500"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {isBetter
                          ? `${fmtKRW(row.savings)} 절세`
                          : isEqual
                          ? "동일"
                          : `${fmtKRW(-row.savings)} 불리`}
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-x-3 text-xs">
                      <div className="text-gray-400">
                        공제 한도
                        <p className="mt-0.5 font-semibold text-gray-700 tabular-nums">
                          {fmtKRW(row.exemption)}
                        </p>
                      </div>
                      <div className="text-gray-400">
                        과세표준
                        <p className="mt-0.5 font-semibold text-gray-700 tabular-nums">
                          {fmtKRW(row.taxableBase)}
                        </p>
                      </div>
                      <div className="text-gray-400">
                        적용 세율
                        <p className="mt-0.5 font-semibold text-gray-700">
                          {row.rate}
                        </p>
                      </div>
                      <div className="text-gray-400">
                        증여세
                        <p
                          className={`mt-0.5 font-bold tabular-nums ${
                            row.giftTax === 0 ? "text-green-600" : "text-gray-800"
                          }`}
                        >
                          {fmtKRW(row.giftTax)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 안내 */}
          <div className="bg-blue-50 rounded-2xl border border-blue-100 px-5 py-4">
            <p className="text-xs text-blue-800 leading-relaxed">
              <strong>비교 기준:</strong> 직접 매도 시 양도세{" "}
              <strong>{fmtKRW(result.directTax)}</strong> 대비 증여세를 비교합니다.
              공제 한도는 <strong>10년 누적</strong> 기준이므로, 과거 증여 내역이
              있다면 실제 공제액은 줄어듭니다. 정확한 절세 전략은 세무사와
              상담하세요.
            </p>
          </div>
        </>
      )}

      {/* 사용 방법 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100">
          <h3 className="text-sm font-bold text-gray-900 tracking-wide">
            사용 방법
          </h3>
        </div>
        <div className="divide-y divide-gray-50">
          {[
            {
              num: "1",
              title: "취득가액 입력",
              desc: "내가 코인을 처음 매수한 가격(원/코인)을 입력하세요.",
            },
            {
              num: "2",
              title: "현재 시가 입력",
              desc: "증여 시점의 현재 시장 가격(원/코인)을 입력하세요.",
            },
            {
              num: "3",
              title: "수량 입력",
              desc: "증여하려는 코인 수량을 입력하세요. 소수점 입력이 가능합니다.",
            },
            {
              num: "4",
              title: "관계별 비교 확인",
              desc: "배우자, 부모, 자녀, 형제자매 등 모든 관계별 증여세와 절세 효과를 한눈에 비교하세요. 초록색은 증여가 유리, 빨간색은 그냥 매도가 유리합니다.",
            },
          ].map(({ num, title, desc }) => (
            <div key={title} className="px-5 py-4 flex gap-4">
              <span className="flex-shrink-0 w-5 h-5 bg-blue-50 text-blue-500 rounded-full text-[10px] font-bold flex items-center justify-center mt-0.5">
                {num}
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-0.5">
                  {title}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
