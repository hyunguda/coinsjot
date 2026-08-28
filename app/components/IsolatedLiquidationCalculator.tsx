"use client";

import { useState, useMemo } from "react";

const fmtIn = (raw: string) => {
  const d = raw.replace(/[^0-9]/g, "");
  return d ? Number(d).toLocaleString("ko-KR") : "";
};
const parseIn = (v: string) => v.replace(/[^0-9]/g, "");
const fmtWon = (n: number) => Math.round(n).toLocaleString("ko-KR") + "원";
const fmtRate = (n: number) => n.toFixed(2) + "%";

function Tag({ text }: { text: string }) {
  return (
    <span className="inline-block text-[10px] font-mono bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded leading-tight whitespace-nowrap flex-shrink-0">
      {text}
    </span>
  );
}

const inputCls =
  "w-full px-3 py-2.5 bg-gray-50 border border-transparent rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none transition tabular-nums";

export function IsolatedLiquidationCalculator() {
  const [direction, setDirection] = useState<"long" | "short">("long");
  const [entryRaw, setEntryRaw] = useState("");
  const [leverageStr, setLeverageStr] = useState("");
  const [marginRaw, setMarginRaw] = useState("");
  const [mmrStr, setMmrStr] = useState("0.5");

  const result = useMemo(() => {
    const entry = Number(parseIn(entryRaw));
    const leverage = parseInt(leverageStr);
    const margin = Number(parseIn(marginRaw));
    const mmr = parseFloat(mmrStr) / 100;

    if (!entry || !leverage || leverage < 1 || !margin || isNaN(mmr) || mmr < 0) return null;

    const positionSize = margin * leverage;
    const imr = 1 / leverage;

    const bankruptcyPrice =
      direction === "long" ? entry * (1 - imr) : entry * (1 + imr);

    const liquidationPrice =
      direction === "long"
        ? entry * (1 - imr + mmr)
        : entry * (1 + imr - mmr);

    const distancePct = (Math.abs(liquidationPrice - entry) / entry) * 100;
    const distanceWon = Math.abs(liquidationPrice - entry);

    return { positionSize, bankruptcyPrice, liquidationPrice, distancePct, distanceWon, imr, mmr };
  }, [entryRaw, leverageStr, marginRaw, mmrStr, direction]);

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
                  isLong ? "bg-blue-600 text-white" : "bg-white text-gray-400 hover:bg-gray-50"
                }`}
              >
                롱 (Long)
              </button>
              <button
                onClick={() => setDirection("short")}
                className={`px-6 py-2 text-sm font-semibold transition border-l border-gray-200 ${
                  !isLong ? "bg-red-500 text-white" : "bg-white text-gray-400 hover:bg-gray-50"
                }`}
              >
                숏 (Short)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">진입가 (원)</label>
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
              <label className="block text-xs text-gray-500 mb-1.5">증거금 — 내가 투자한 금액 (원)</label>
              <input
                type="text"
                inputMode="numeric"
                value={fmtIn(marginRaw)}
                placeholder="예: 1,000,000"
                onChange={(e) => setMarginRaw(parseIn(e.target.value))}
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">
                유지증거금율 (%) <span className="text-gray-400">— 거래소 기본값 0.5%</span>
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={mmrStr}
                placeholder="0.5"
                onChange={(e) => setMmrStr(e.target.value.replace(/[^0-9.]/g, ""))}
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
              <p className="text-xs text-gray-400 mb-2">청산가</p>
              <p className="text-base font-bold tabular-nums text-orange-500 leading-snug">
                {Math.round(result.liquidationPrice).toLocaleString("ko-KR")}
              </p>
              <p className="text-xs text-gray-400">원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
              <p className="text-xs text-gray-400 mb-2">청산까지 거리</p>
              <p className="text-base font-bold tabular-nums text-orange-500 leading-snug">
                {fmtRate(result.distancePct)}
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
              <p className="text-xs text-gray-400 mb-2">포지션 크기</p>
              <p className="text-base font-bold tabular-nums text-gray-800 leading-snug">
                {Math.round(result.positionSize).toLocaleString("ko-KR")}
              </p>
              <p className="text-xs text-gray-400">원</p>
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
                  label: "진입가",
                  val: fmtWon(Number(parseIn(entryRaw))),
                  cls: "text-gray-900",
                },
                {
                  tag: "B",
                  label: "증거금 (내 투자금)",
                  val: fmtWon(Number(parseIn(marginRaw))),
                  cls: "text-gray-900",
                },
                {
                  tag: `C = B × ${leverageStr}`,
                  label: "포지션 크기 (증거금 × 레버리지)",
                  val: fmtWon(result.positionSize),
                  cls: "text-gray-900",
                },
                {
                  tag: "D = 1 ÷ 레버리지",
                  label: "초기증거금율 (IMR)",
                  val: fmtRate(result.imr * 100),
                  cls: "text-gray-600",
                },
                {
                  tag: "E = A × (1 − D)",
                  label: `파산가 (${isLong ? "롱" : "숏"}) — 증거금 전액 소멸 가격`,
                  val: fmtWon(result.bankruptcyPrice),
                  cls: "text-red-500",
                },
                {
                  tag: `F = A × (1 ${isLong ? "−" : "+"} D ${isLong ? "+" : "−"} MMR)`,
                  label: `청산가 (격리마진, 유지증거금율 ${mmrStr}% 적용)`,
                  val: fmtWon(result.liquidationPrice),
                  cls: "text-orange-500",
                },
                {
                  tag: "G = |F − A| ÷ A",
                  label: "청산까지 거리 (진입가 대비 %)",
                  val: fmtRate(result.distancePct),
                  cls: "text-orange-500",
                },
                {
                  tag: "H = |F − A|",
                  label: "청산까지 거리 (가격 차이)",
                  val: fmtWon(result.distanceWon),
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

          {/* 파산가 vs 청산가 안내 */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-sm text-amber-800">
            <p className="font-semibold mb-1">파산가 vs 청산가 차이</p>
            <p className="leading-relaxed">
              <strong>파산가</strong>는 증거금이 0원이 되는 이론적 가격이고,{" "}
              <strong>청산가</strong>는 거래소가 유지증거금율을 보장하기 위해 실제로 강제청산을 실행하는
              가격입니다. 청산가가 파산가보다 진입가에 더 가깝습니다.
            </p>
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
              desc: "가격 상승에 베팅하면 롱(Long), 하락에 베팅하면 숏(Short)을 선택하세요.",
            },
            {
              num: "2",
              title: "진입가",
              desc: "포지션을 열 때 코인의 가격(원)을 입력하세요. 예: BTC 진입가 5,000만원.",
            },
            {
              num: "3",
              title: "레버리지",
              desc: "사용 중인 레버리지 배수를 숫자로 입력하세요. 예: 10배.",
            },
            {
              num: "4",
              title: "증거금",
              desc: "내가 실제 투자한 금액(원)을 입력하세요. 포지션 크기는 자동으로 계산됩니다.",
            },
            {
              num: "5",
              title: "유지증거금율",
              desc: "거래소별로 다르며 바이낸스·바이비트 기본값은 0.5%입니다. 포지션 크기에 따라 달라질 수 있습니다.",
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
