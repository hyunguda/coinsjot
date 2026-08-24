"use client";

import { useState, useMemo } from "react";

interface CoinRow {
  id: number;
  name: string;
  buyPrice: string;
  sellPrice: string;
}

const BASIC_DEDUCTION = 2_500_000;
const TAX_RATE = 0.22;
let nextId = 4;

const defaultRows: CoinRow[] = [
  { id: 1, name: "", buyPrice: "", sellPrice: "" },
  { id: 2, name: "", buyPrice: "", sellPrice: "" },
  { id: 3, name: "", buyPrice: "", sellPrice: "" },
];

const fmtIn = (raw: string) => {
  const d = raw.replace(/[^0-9]/g, "");
  return d ? Number(d).toLocaleString("ko-KR") : "";
};
const parseIn = (v: string) => v.replace(/[^0-9]/g, "");
const fmtKRW = (n: number) => n.toLocaleString("ko-KR") + "원";
const fmtSigned = (n: number) => (n >= 0 ? "+" : "") + n.toLocaleString("ko-KR") + "원";
const fmtRate = (n: number) => (n >= 0 ? "+" : "") + n.toFixed(1) + "%";

function Tag({ text }: { text: string }) {
  return (
    <span className="inline-block text-[10px] font-mono bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded leading-tight whitespace-nowrap flex-shrink-0">
      {text}
    </span>
  );
}

export function ProfitLossCalculator() {
  const [rows, setRows] = useState<CoinRow[]>(defaultRows);

  const parsed = useMemo(
    () =>
      rows.map((r) => {
        const buy = Number(r.buyPrice) || 0;
        const sell = Number(r.sellPrice) || 0;
        const complete = buy > 0 && sell > 0;
        const pnl = complete ? sell - buy : null;
        const rate = complete ? ((sell - buy) / buy) * 100 : null;
        return { ...r, buy, sell, complete, pnl, rate };
      }),
    [rows]
  );

  const s = useMemo(() => {
    const done = parsed.filter((r) => r.complete);
    const totalBuy = done.reduce((a, r) => a + r.buy, 0);
    const totalGain = done.filter((r) => (r.pnl as number) > 0).reduce((a, r) => a + (r.pnl as number), 0);
    const totalLoss = done.filter((r) => (r.pnl as number) < 0).reduce((a, r) => a + (r.pnl as number), 0);
    const netPnl = totalGain + totalLoss;
    const deduction = Math.min(BASIC_DEDUCTION, Math.max(0, netPnl));
    const taxable = Math.max(0, netPnl - BASIC_DEDUCTION);
    const tax = taxable * TAX_RATE;
    const netAfter = netPnl - tax;
    const rateB = totalBuy > 0 ? (netPnl / totalBuy) * 100 : null;
    const rateF = totalBuy > 0 ? (netAfter / totalBuy) * 100 : null;
    return { totalBuy, totalGain, totalLoss, netPnl, deduction, taxable, tax, netAfter, rateB, rateF, count: done.length };
  }, [parsed]);

  const update = (id: number, field: keyof CoinRow, val: string) =>
    setRows((p) => p.map((r) => (r.id === id ? { ...r, [field]: val } : r)));

  const addRow = () =>
    setRows((p) => [...p, { id: nextId++, name: "", buyPrice: "", sellPrice: "" }]);

  const removeRow = (id: number) => {
    if (rows.length <= 1) return;
    setRows((p) => p.filter((r) => r.id !== id));
  };

  const reset = () => { nextId = 4; setRows(defaultRows); };

  const inputCls = "w-full px-2.5 py-2 bg-gray-50 border border-transparent rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none transition tabular-nums";

  return (
    <div className="max-w-4xl mx-auto space-y-4">

      {/* ── 입력 테이블 ── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-sm font-bold text-gray-900 tracking-wide">종목별 손익 입력</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-fixed text-sm min-w-[620px]">
            <colgroup>
              <col style={{ width: 32 }} />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col style={{ width: 32 }} />
            </colgroup>
            <thead>
              <tr className="border-b border-gray-100 text-xs text-gray-400 font-medium">
                <th className="py-3 pl-4"></th>
                <th className="py-3 px-2 text-left">코인구분</th>
                <th className="py-3 px-2 text-right">매수가 (원)</th>
                <th className="py-3 px-2 text-right">매도가 (원)</th>
                <th className="py-3 px-2 text-right">손익</th>
                <th className="py-3 px-2 text-right">수익률</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {parsed.map((row, i) => (
                <tr key={row.id} className="border-b border-gray-50 last:border-0">
                  <td className="py-2.5 pl-4 text-xs text-gray-300">{i + 1}</td>
                  <td className="py-1.5 px-2">
                    <input type="text" value={row.name} placeholder="BTC"
                      onChange={(e) => update(row.id, "name", e.target.value)}
                      className={inputCls + " text-left"} />
                  </td>
                  <td className="py-1.5 px-2">
                    <input type="text" inputMode="numeric" value={fmtIn(row.buyPrice)} placeholder="0"
                      onChange={(e) => update(row.id, "buyPrice", parseIn(e.target.value))}
                      className={inputCls + " text-right"} />
                  </td>
                  <td className="py-1.5 px-2">
                    <input type="text" inputMode="numeric" value={fmtIn(row.sellPrice)} placeholder="0"
                      onChange={(e) => update(row.id, "sellPrice", parseIn(e.target.value))}
                      className={inputCls + " text-right"} />
                  </td>
                  <td className="py-1.5 px-2 text-right tabular-nums font-semibold whitespace-nowrap">
                    {row.pnl !== null
                      ? <span className={row.pnl >= 0 ? "text-blue-600" : "text-red-500"}>{fmtSigned(row.pnl)}</span>
                      : <span className="text-gray-200">—</span>}
                  </td>
                  <td className="py-1.5 px-2 text-right tabular-nums font-semibold whitespace-nowrap">
                    {row.rate !== null
                      ? <span className={row.rate >= 0 ? "text-blue-600" : "text-red-500"}>{fmtRate(row.rate)}</span>
                      : <span className="text-gray-200">—</span>}
                  </td>
                  <td className="py-1.5 pr-3 text-center">
                    <button onClick={() => removeRow(row.id)} disabled={rows.length <= 1}
                      className="text-gray-200 hover:text-red-400 disabled:cursor-not-allowed text-lg leading-none">×</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 flex gap-2 border-t border-gray-50">
          <button onClick={addRow} className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition">+ 종목 추가</button>
          <button onClick={reset} className="px-4 py-2 bg-gray-50 text-gray-500 rounded-lg text-sm font-medium hover:bg-gray-100 transition">초기화</button>
        </div>
      </div>

      {/* ── 결과 ── */}
      {s.count > 0 && (
        <>
          {/* 요약 카드 3개 */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "총 익절 합계", value: "+" + s.totalGain.toLocaleString("ko-KR"), cls: "text-blue-600" },
              { label: "총 손절 합계", value: s.totalLoss.toLocaleString("ko-KR"), cls: "text-red-500" },
              { label: "손익통산 합계", value: fmtSigned(s.netPnl), sub: s.rateB !== null ? fmtRate(s.rateB) : null, cls: s.netPnl >= 0 ? "text-green-600" : "text-orange-500", subCls: s.rateB !== null && s.rateB >= 0 ? "text-green-400" : "text-orange-400" },
            ].map((card) => (
              <div key={card.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
                <p className="text-xs text-gray-400 mb-2">{card.label}</p>
                <p className={`text-lg font-bold tabular-nums leading-snug ${card.cls}`}>{card.value}</p>
                <p className="text-xs text-gray-400">원{card.sub && <span className={`ml-1.5 font-semibold tabular-nums ${card.subCls}`}>{card.sub}</span>}</p>
              </div>
            ))}
          </div>

          {/* 세액 계산 카드 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h3 className="text-sm font-bold text-gray-900 tracking-wide">세액 계산</h3>
            </div>

            {/* 계산 항목 */}
            <div className="divide-y divide-gray-50">
              {[
                { tag: "A", label: "총 매수가", val: fmtKRW(s.totalBuy), cls: "text-gray-900" },
                { tag: "B", label: "손익통산 합계", val: fmtSigned(s.netPnl), cls: s.netPnl >= 0 ? "text-blue-600" : "text-red-500" },
                { tag: "C", label: "기본공제", val: "−" + fmtKRW(s.deduction), cls: "text-green-600" },
                { tag: "D = B − C", label: "과세표준", val: fmtKRW(s.taxable), cls: "text-gray-900" },
                { tag: "E = D × 22%", label: "예상 납부세액", val: "−" + fmtKRW(s.tax), cls: "text-red-500" },
              ].map(({ tag, label, val, cls }) => (
                <div key={tag} className="px-6 py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Tag text={tag} />
                    <span className="text-sm text-gray-600">{label}</span>
                  </div>
                  <span className={`text-sm font-semibold tabular-nums ${cls}`}>{val}</span>
                </div>
              ))}
            </div>

            {/* 최종 결과 박스 */}
            <div className="p-5">
              <div className="rounded-xl border border-gray-100 divide-y divide-gray-100 overflow-hidden">
                <div className="px-5 py-4 flex items-center justify-between bg-gray-50">
                  <div className="flex items-center gap-2.5">
                    <Tag text="F = B − E" />
                    <span className="text-sm text-gray-600">세후 최종 손익</span>
                  </div>
                  <span className={`text-base font-bold tabular-nums ${s.netAfter >= 0 ? "text-blue-600" : "text-red-500"}`}>
                    {fmtSigned(s.netAfter)}
                  </span>
                </div>
                <div className="px-5 py-4 flex items-center justify-between bg-gray-50">
                  <div className="flex items-center gap-2.5">
                    <Tag text="B ÷ A" />
                    <span className="text-sm text-gray-500">세전 수익률</span>
                  </div>
                  <span className={`text-sm font-semibold tabular-nums ${s.rateB !== null && s.rateB >= 0 ? "text-blue-600" : "text-red-500"}`}>
                    {s.rateB !== null ? fmtRate(s.rateB) : "—"}
                  </span>
                </div>
                <div className="px-5 py-5 flex items-center justify-between bg-white">
                  <div className="flex items-center gap-2.5">
                    <Tag text="F ÷ A" />
                    <span className="text-sm font-semibold text-gray-800">세후 수익률</span>
                  </div>
                  <span className={`text-2xl font-bold tabular-nums ${s.rateF !== null && s.rateF >= 0 ? "text-green-600" : "text-red-500"}`}>
                    {s.rateF !== null ? fmtRate(s.rateF) : "—"}
                  </span>
                </div>
              </div>

              {s.netPnl > 0 && s.netPnl <= BASIC_DEDUCTION && (
                <p className="mt-3 text-xs text-green-600 bg-green-50 rounded-lg px-4 py-3">
                  손익통산 합계가 기본공제(250만원) 이하 — 납부할 세금이 없습니다.
                </p>
              )}
              {s.netPnl <= 0 && (
                <p className="mt-3 text-xs text-blue-600 bg-blue-50 rounded-lg px-4 py-3">
                  손익통산 결과가 0원 이하 — 납부할 세금이 없습니다.
                </p>
              )}
            </div>
          </div>
        </>
      )}

      {/* ── 사용 방법 ── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-sm font-bold text-gray-900 tracking-wide">사용 방법</h3>
        </div>
        <div className="divide-y divide-gray-50">
          {[
            { num: "1", title: "코인구분", desc: "구분용 이름입니다. 비워도 계산됩니다." },
            { num: "2", title: "매수가", desc: "해당 종목을 매수한 총 금액(원)입니다. 여러 번 나눠 산 경우 합산해서 입력하세요." },
            { num: "3", title: "매도가", desc: "실제 매도한 총 금액(원)입니다." },
            { num: "!", title: "손익통산이란?", desc: "종목 간 이익과 손실을 상계합니다. BTC에서 500만원 이익, ETH에서 200만원 손실이면 과세 기준은 300만원입니다." },
          ].map(({ num, title, desc }) => (
            <div key={title} className="px-6 py-4 flex gap-4">
              <span className="flex-shrink-0 w-5 h-5 bg-blue-50 text-blue-500 rounded-full text-[10px] font-bold flex items-center justify-center mt-0.5">{num}</span>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-0.5">{title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
