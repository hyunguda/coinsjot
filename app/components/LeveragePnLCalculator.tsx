"use client";

import { useState, useMemo } from "react";

const fmtIn = (raw: string) => {
  const d = raw.replace(/[^0-9]/g, "");
  return d ? Number(d).toLocaleString("ko-KR") : "";
};
const parseIn = (v: string) => v.replace(/[^0-9]/g, "");
const fmtWon = (n: number) => Math.round(n).toLocaleString("ko-KR") + "원";
const fmtRate = (n: number) => (n >= 0 ? "+" : "") + n.toFixed(2) + "%";

function Tag({ text }: { text: string }) {
  return (
    <span className="inline-block text-[10px] font-mono bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded leading-tight whitespace-nowrap flex-shrink-0">
      {text}
    </span>
  );
}

const inputCls =
  "w-full px-3 py-2.5 bg-gray-50 border border-transparent rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none transition tabular-nums";

export function LeveragePnLCalculator() {
  const [direction, setDirection] = useState<"long" | "short">("long");
  const [entryRaw, setEntryRaw] = useState("");
  const [leverageStr, setLeverageStr] = useState("");
  const [exitRaw, setExitRaw] = useState("");

  const result = useMemo(() => {
    const entry = Number(parseIn(entryRaw));
    const exit = Number(parseIn(exitRaw));
    const leverage = parseInt(leverageStr);

    if (!entry || !exit || !leverage || leverage < 1) return null;

    const priceChangeRatio = (exit - entry) / entry;
    const pnlRate =
      direction === "long"
        ? priceChangeRatio * leverage * 100
        : -priceChangeRatio * leverage * 100;

    const liquidationPrice =
      direction === "long"
        ? entry * (1 - 1 / leverage)
        : entry * (1 + 1 / leverage);

    const liquidationDistance = (1 / leverage) * 100;

    return { pnlRate, liquidationPrice, liquidationDistance, priceChangeRatio };
  }, [entryRaw, exitRaw, leverageStr, direction]);

  const isLong = direction === "long";

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* 입력 카드 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="text-sm font-bold text-gray-900 tracking-wide">입력값 설정</h2>
        </div>
        <div className="p-5 space-y-4">
          {/* 방향 토글 */}
          <div>
            <label className="block text-xs text-gray-500 mb-1.5">포지션 방향</label>
            <div className="flex rounded-lg overflow-hidden border border-gray-200 w-fit">
              <button
                onClick={() => setDirection("long")}
                className={`px-6 py-2 text-sm font-semibold transition ${
                  isLong
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-400 hover:bg-gray-50"
                }`}
              >
                롱 (Long)
              </button>
              <button
                onClick={() => setDirection("short")}
                className={`px-6 py-2 text-sm font-semibold transition border-l border-gray-200 ${
                  !isLong
                    ? "bg-red-500 text-white"
                    : "bg-white text-gray-400 hover:bg-gray-50"
                }`}
              >
                숏 (Short)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">진입금액 (원)</label>
              <input
                type="text"
                inputMode="numeric"
                value={fmtIn(entryRaw)}
                placeholder="예: 50,000,000"
                onChange={(e) => setEntryRaw(parseIn(e.target.value))}
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">레버리지 (배)</label>
              <input
                type="text"
                inputMode="numeric"
                value={leverageStr}
                placeholder="예: 10"
                onChange={(e) => setLeverageStr(e.target.value.replace(/[^0-9]/g, ""))}
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">엑시트금액 (원)</label>
              <input
                type="text"
                inputMode="numeric"
                value={fmtIn(exitRaw)}
                placeholder="예: 55,000,000"
                onChange={(e) => setExitRaw(parseIn(e.target.value))}
                className={inputCls}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 결과 */}
      {result && (
        <>
          {/* 요약 카드 */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
              <p className="text-xs text-gray-400 mb-2">수익률</p>
              <p
                className={`text-base font-bold tabular-nums leading-snug ${
                  result.pnlRate >= 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {fmtRate(result.pnlRate)}
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
              <p className="text-xs text-gray-400 mb-2">청산가</p>
              <p className="text-base font-bold tabular-nums text-orange-500 leading-snug">
                {Math.round(result.liquidationPrice).toLocaleString("ko-KR")}
              </p>
              <p className="text-xs text-gray-400">원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
              <p className="text-xs text-gray-400 mb-2">청산까지 거리</p>
              <p className="text-base font-bold tabular-nums text-orange-500 leading-snug">
                {result.liquidationDistance.toFixed(2)}%
              </p>
            </div>
          </div>

          {/* 세부 계산 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100">
              <h3 className="text-sm font-bold text-gray-900 tracking-wide">계산 결과 상세</h3>
            </div>
            <div className="divide-y divide-gray-50">
              {[
                {
                  tag: "A",
                  label: "진입금액",
                  val: fmtWon(Number(parseIn(entryRaw))),
                  cls: "text-gray-900",
                },
                {
                  tag: "B",
                  label: "엑시트금액",
                  val: fmtWon(Number(parseIn(exitRaw))),
                  cls: "text-gray-900",
                },
                {
                  tag: "C = (B−A)÷A",
                  label: "가격 변동률",
                  val: fmtRate(result.priceChangeRatio * 100),
                  cls: result.priceChangeRatio >= 0 ? "text-green-600" : "text-red-500",
                },
                {
                  tag: `D = C × ${leverageStr}`,
                  label: `수익률 (${isLong ? "롱" : "숏"}, ${leverageStr}x 적용)`,
                  val: fmtRate(result.pnlRate),
                  cls: result.pnlRate >= 0 ? "text-green-600" : "text-red-500",
                },
                {
                  tag: "E",
                  label: `청산가 (${isLong ? "롱 — 진입가 × (1 − 1÷레버리지)" : "숏 — 진입가 × (1 + 1÷레버리지)"})`,
                  val: fmtWon(result.liquidationPrice),
                  cls: "text-orange-500",
                },
                {
                  tag: "F = 1÷레버리지",
                  label: "청산까지 거리 (진입가 기준)",
                  val: result.liquidationDistance.toFixed(2) + "%",
                  cls: "text-orange-500",
                },
              ].map(({ tag, label, val, cls }) => (
                <div key={tag} className="px-5 py-3.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <Tag text={tag} />
                    <span className="text-sm text-gray-600 truncate">{label}</span>
                  </div>
                  <span className={`text-sm font-semibold tabular-nums flex-shrink-0 ${cls}`}>
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* 사용 방법 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100">
          <h3 className="text-sm font-bold text-gray-900 tracking-wide">사용 방법</h3>
        </div>
        <div className="divide-y divide-gray-50">
          {[
            {
              num: "1",
              title: "포지션 방향",
              desc: "롱(가격 상승 베팅)이면 롱, 숏(가격 하락 베팅)이면 숏을 선택하세요.",
            },
            {
              num: "2",
              title: "진입금액",
              desc: "포지션을 열 때 코인의 가격(원)을 입력하세요. 예: BTC 진입가 5,000만원.",
            },
            {
              num: "3",
              title: "레버리지",
              desc: "사용 중인 레버리지 배수를 숫자로 직접 입력하세요. 예: 10.",
            },
            {
              num: "4",
              title: "엑시트금액",
              desc: "익절·손절 목표 가격(원)을 입력하세요. 입력 즉시 수익률과 청산가가 계산됩니다.",
            },
          ].map(({ num, title, desc }) => (
            <div key={title} className="px-5 py-4 flex gap-4">
              <span className="flex-shrink-0 w-5 h-5 bg-blue-50 text-blue-500 rounded-full text-[10px] font-bold flex items-center justify-center mt-0.5">
                {num}
              </span>
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
