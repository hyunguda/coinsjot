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
const fmtCoin = (n: number) =>
  parseFloat(n.toFixed(8)).toLocaleString("ko-KR", { maximumFractionDigits: 8 });

const inputCls =
  "w-full px-3 py-2.5 bg-gray-50 border border-transparent rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none transition tabular-nums";

type Mode = "amount" | "quantity";
interface Row {
  id: number;
  priceRaw: string;
  valueRaw: string;
}

let _nextId = 1;
const newRow = (): Row => ({ id: _nextId++, priceRaw: "", valueRaw: "" });

export function DCACalculator() {
  const [mode, setMode] = useState<Mode>("amount");
  const [rows, setRows] = useState<Row[]>(() => [newRow(), newRow()]);

  const switchMode = (m: Mode) => {
    setMode(m);
    setRows((prev) => prev.map((r) => ({ ...r, valueRaw: "" })));
  };

  const update = (id: number, field: "priceRaw" | "valueRaw", val: string) =>
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: val } : r))
    );

  const result = useMemo(() => {
    let totalAmt = 0;
    let totalQty = 0;
    let validCount = 0;
    for (const r of rows) {
      const price = Number(r.priceRaw) || 0;
      const value = parseFloat(r.valueRaw) || 0;
      if (!price || !value) continue;
      validCount++;
      if (mode === "amount") {
        totalAmt += value;
        totalQty += value / price;
      } else {
        totalQty += value;
        totalAmt += price * value;
      }
    }
    if (!validCount || !totalQty) return null;
    return { totalAmt, totalQty, avgPrice: totalAmt / totalQty };
  }, [rows, mode]);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* 입력 카드 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-sm font-bold text-gray-900 tracking-wide">
            매수 차수 입력
          </h2>
          <div className="flex rounded-lg overflow-hidden border border-gray-200">
            <button
              onClick={() => switchMode("amount")}
              className={`px-4 py-1.5 text-xs font-semibold transition ${
                mode === "amount"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-400 hover:bg-gray-50"
              }`}
            >
              금액 입력
            </button>
            <button
              onClick={() => switchMode("quantity")}
              className={`px-4 py-1.5 text-xs font-semibold transition border-l border-gray-200 ${
                mode === "quantity"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-400 hover:bg-gray-50"
              }`}
            >
              수량 입력
            </button>
          </div>
        </div>

        <div className="p-5 space-y-3">
          {/* 컬럼 헤더 */}
          <div className="grid grid-cols-[1.5rem_1fr_1fr_1.5rem] gap-2 px-1">
            <div />
            <p className="text-xs text-gray-400">매수가 (원)</p>
            <p className="text-xs text-gray-400">
              {mode === "amount" ? "투자금액 (원)" : "수량 (코인)"}
            </p>
            <div />
          </div>

          {rows.map((row, idx) => (
            <div
              key={row.id}
              className="grid grid-cols-[1.5rem_1fr_1fr_1.5rem] gap-2 items-center"
            >
              <span className="text-xs text-gray-400 text-center">{idx + 1}</span>
              <input
                type="text"
                inputMode="numeric"
                value={fmtWon(row.priceRaw)}
                placeholder="예: 50,000,000"
                onChange={(e) =>
                  update(row.id, "priceRaw", parseWon(e.target.value))
                }
                className={inputCls}
              />
              {mode === "amount" ? (
                <input
                  type="text"
                  inputMode="numeric"
                  value={fmtWon(row.valueRaw)}
                  placeholder="예: 1,000,000"
                  onChange={(e) =>
                    update(row.id, "valueRaw", parseWon(e.target.value))
                  }
                  className={inputCls}
                />
              ) : (
                <input
                  type="text"
                  inputMode="decimal"
                  value={row.valueRaw}
                  placeholder="예: 0.05"
                  onChange={(e) =>
                    update(row.id, "valueRaw", parseQty(e.target.value))
                  }
                  className={inputCls}
                />
              )}
              <button
                onClick={() =>
                  rows.length > 1 &&
                  setRows((prev) => prev.filter((r) => r.id !== row.id))
                }
                disabled={rows.length <= 1}
                className="text-gray-300 hover:text-red-400 transition disabled:opacity-30 disabled:cursor-not-allowed text-xl leading-none text-center"
              >
                ×
              </button>
            </div>
          ))}

          <button
            onClick={() => setRows((prev) => [...prev, newRow()])}
            className="w-full py-2.5 border border-dashed border-gray-200 rounded-lg text-sm text-gray-400 hover:border-blue-400 hover:text-blue-500 transition"
          >
            + 차수 추가
          </button>
        </div>
      </div>

      {/* 결과 요약 카드 */}
      {result && (
        <>
          <div className="grid grid-cols-3 gap-3">
            {[
              {
                label: "평균 단가",
                val: Math.round(result.avgPrice).toLocaleString("ko-KR"),
                unit: "원",
                cls: "text-blue-600",
              },
              {
                label: "총 투자금액",
                val: Math.round(result.totalAmt).toLocaleString("ko-KR"),
                unit: "원",
                cls: "text-gray-800",
              },
              {
                label: "총 수량",
                val: fmtCoin(result.totalQty),
                unit: "코인",
                cls: "text-gray-800",
              },
            ].map(({ label, val, unit, cls }) => (
              <div
                key={label}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4"
              >
                <p className="text-xs text-gray-400 mb-2">{label}</p>
                <p
                  className={`text-base font-bold tabular-nums leading-snug ${cls}`}
                >
                  {val}
                </p>
                <p className="text-xs text-gray-400">{unit}</p>
              </div>
            ))}
          </div>

          {/* 차수별 내역 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100">
              <h3 className="text-sm font-bold text-gray-900 tracking-wide">
                차수별 내역
              </h3>
            </div>
            <div className="divide-y divide-gray-50">
              {rows
                .map((row, idx) => {
                  const price = Number(row.priceRaw) || 0;
                  const value = parseFloat(row.valueRaw) || 0;
                  if (!price || !value) return null;
                  const qty =
                    mode === "amount" ? value / price : value;
                  const amt =
                    mode === "amount" ? value : price * value;
                  return (
                    <div
                      key={row.id}
                      className="px-5 py-3.5 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="inline-block text-[10px] font-mono bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded leading-tight flex-shrink-0">
                          {idx + 1}차
                        </span>
                        <span className="text-sm text-gray-600 truncate">
                          {Math.round(price).toLocaleString("ko-KR")}원 ×{" "}
                          {fmtCoin(qty)}코인
                        </span>
                      </div>
                      <span className="text-sm font-semibold tabular-nums text-gray-800 flex-shrink-0">
                        {fmtKRW(amt)}
                      </span>
                    </div>
                  );
                })
                .filter(Boolean)}

              {/* 평균 합계 행 */}
              <div className="px-5 py-3.5 flex items-center justify-between gap-3 bg-blue-50">
                <div className="flex items-center gap-2">
                  <span className="inline-block text-[10px] font-mono bg-blue-100 text-blue-500 px-1.5 py-0.5 rounded leading-tight font-bold flex-shrink-0">
                    평균
                  </span>
                  <span className="text-sm font-semibold text-blue-700">
                    평균 단가
                  </span>
                </div>
                <span className="text-sm font-bold tabular-nums text-blue-600 flex-shrink-0">
                  {fmtKRW(result.avgPrice)}
                </span>
              </div>
            </div>
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
              title: "입력 방식 선택",
              desc: "투자금액(원 기준)으로 입력할지, 수량(코인 개수)으로 입력할지 선택하세요. 모드를 바꾸면 두 번째 열 입력값이 초기화됩니다.",
            },
            {
              num: "2",
              title: "차수별 매수가 입력",
              desc: "각 차수에서 코인을 매수한 가격(원)을 입력하세요.",
            },
            {
              num: "3",
              title: "금액 또는 수량 입력",
              desc: "금액 모드라면 해당 차수에 투자한 금액(원)을, 수량 모드라면 매수한 코인 수를 입력하세요. 수량은 소수점 입력이 가능합니다.",
            },
            {
              num: "4",
              title: "차수 추가",
              desc: "분할매수 차수가 많다면 '+ 차수 추가' 버튼으로 행을 추가하세요. × 버튼으로 개별 행을 삭제할 수 있습니다.",
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
