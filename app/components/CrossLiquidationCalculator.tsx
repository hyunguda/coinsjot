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

export function CrossLiquidationCalculator() {
  const [direction, setDirection] = useState<"long" | "short">("long");
  const [entryRaw, setEntryRaw] = useState("");
  const [leverageStr, setLeverageStr] = useState("");
  const [marginRaw, setMarginRaw] = useState("");
  const [walletRaw, setWalletRaw] = useState("");
  const [showOtherPnl, setShowOtherPnl] = useState(false);
  const [otherPnlSign, setOtherPnlSign] = useState<"profit" | "loss">("profit");
  const [otherPnlRaw, setOtherPnlRaw] = useState("");

  const result = useMemo(() => {
    const entry = Number(parseIn(entryRaw));
    const leverage = parseInt(leverageStr);
    const margin = Number(parseIn(marginRaw));
    const wallet = Number(parseIn(walletRaw));

    if (!entry || !leverage || leverage < 1 || !margin || !wallet) return null;

    const otherPnlAmount =
      showOtherPnl && otherPnlRaw ? Number(parseIn(otherPnlRaw)) : 0;
    const otherPnl =
      otherPnlSign === "profit" ? otherPnlAmount : -otherPnlAmount;

    const positionSizeKRW = margin * leverage;
    const effectiveEquity = wallet + otherPnl;

    if (effectiveEquity <= 0) return { bankrupt: true } as const;

    const equityRatio = effectiveEquity / positionSizeKRW;
    const liquidationPrice =
      direction === "long"
        ? entry * (1 - equityRatio)
        : entry * (1 + equityRatio);

    const cannotLiquidate = liquidationPrice <= 0;
    const distancePct = equityRatio * 100;
    const distanceWon = Math.abs(liquidationPrice - entry);

    return {
      bankrupt: false,
      positionSizeKRW,
      effectiveEquity,
      equityRatio,
      liquidationPrice,
      distancePct,
      distanceWon,
      cannotLiquidate,
      otherPnl,
    };
  }, [
    entryRaw,
    leverageStr,
    marginRaw,
    walletRaw,
    direction,
    showOtherPnl,
    otherPnlSign,
    otherPnlRaw,
  ]);

  const isLong = direction === "long";
  const leverage = parseInt(leverageStr) || 0;
  const margin = Number(parseIn(marginRaw)) || 0;
  const wallet = Number(parseIn(walletRaw)) || 0;
  const entry = Number(parseIn(entryRaw)) || 0;
  const hasOtherPnl = showOtherPnl && !!otherPnlRaw;

  const otherPnlVal =
    result && !result.bankrupt ? result.otherPnl : 0;

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* 입력 카드 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="text-sm font-bold text-gray-900 tracking-wide">
            입력값 설정
          </h2>
        </div>
        <div className="p-5 space-y-4">
          {/* 방향 토글 */}
          <div>
            <label className="block text-xs text-gray-500 mb-1.5">
              포지션 방향
            </label>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">
                진입가 (원)
              </label>
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
              <label className="block text-xs text-gray-500 mb-1.5">
                레버리지 (배)
              </label>
              <input
                type="text"
                inputMode="numeric"
                value={leverageStr}
                placeholder="예: 10"
                onChange={(e) =>
                  setLeverageStr(e.target.value.replace(/[^0-9]/g, ""))
                }
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">
                초기증거금 — 이 포지션에 배정한 금액 (원)
              </label>
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
                총 지갑 잔고 (원)
              </label>
              <input
                type="text"
                inputMode="numeric"
                value={fmtIn(walletRaw)}
                placeholder="예: 5,000,000"
                onChange={(e) => setWalletRaw(parseIn(e.target.value))}
                className={inputCls}
              />
              <p className="text-[11px] text-gray-400 mt-1">
                교차마진 지갑의 전체 잔고. 청산 버퍼로 사용됩니다.
              </p>
            </div>
          </div>

          {/* 다른 포지션 미실현 손익 (선택) */}
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <button
              onClick={() => setShowOtherPnl((v) => !v)}
              className="w-full px-4 py-3 flex items-center justify-between text-sm text-gray-600 hover:bg-gray-50 transition"
            >
              <span className="font-medium">
                다른 포지션 미실현 손익 반영{" "}
                <span className="text-gray-400 font-normal">(선택)</span>
              </span>
              <span className="text-gray-400 text-xs">
                {showOtherPnl ? "▲ 닫기" : "▼ 펼치기"}
              </span>
            </button>

            {showOtherPnl && (
              <div className="px-4 pb-4 pt-2 space-y-3 border-t border-gray-100">
                <p className="text-xs text-gray-400 leading-relaxed">
                  같은 교차마진 지갑에서 운용 중인 다른 포지션의 미실현
                  손익을 입력하세요. 수익이면 청산가가 멀어지고, 손실이면
                  가까워집니다.
                </p>
                <div className="flex gap-3 items-end">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5">
                      손익 방향
                    </label>
                    <div className="flex rounded-lg overflow-hidden border border-gray-200">
                      <button
                        onClick={() => setOtherPnlSign("profit")}
                        className={`px-4 py-2.5 text-xs font-semibold transition ${
                          otherPnlSign === "profit"
                            ? "bg-green-500 text-white"
                            : "bg-white text-gray-400 hover:bg-gray-50"
                        }`}
                      >
                        수익 (+)
                      </button>
                      <button
                        onClick={() => setOtherPnlSign("loss")}
                        className={`px-4 py-2.5 text-xs font-semibold transition border-l border-gray-200 ${
                          otherPnlSign === "loss"
                            ? "bg-red-500 text-white"
                            : "bg-white text-gray-400 hover:bg-gray-50"
                        }`}
                      >
                        손실 (−)
                      </button>
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs text-gray-500 mb-1.5">
                      미실현 금액 (원)
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={fmtIn(otherPnlRaw)}
                      placeholder="예: 500,000"
                      onChange={(e) => setOtherPnlRaw(parseIn(e.target.value))}
                      className={inputCls}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 잔고 부족 경고 */}
      {result?.bankrupt && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5 text-sm text-red-800">
          <p className="font-semibold mb-1">⚠️ 유효 자본 부족</p>
          <p>
            다른 포지션의 미실현 손실이 총 지갑 잔고를 초과합니다. 입력값을
            확인하세요.
          </p>
        </div>
      )}

      {/* 결과 */}
      {result && !result.bankrupt && (
        <>
          {/* 요약 카드 */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
              <p className="text-xs text-gray-400 mb-2">청산가</p>
              {result.cannotLiquidate ? (
                <p className="text-sm font-bold text-green-500 leading-snug">
                  청산 불가
                  <br />
                  <span className="text-xs font-normal">(이론상)</span>
                </p>
              ) : (
                <>
                  <p className="text-base font-bold tabular-nums text-orange-500 leading-snug">
                    {Math.round(result.liquidationPrice).toLocaleString("ko-KR")}
                  </p>
                  <p className="text-xs text-gray-400">원</p>
                </>
              )}
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
              <p className="text-xs text-gray-400 mb-2">청산까지 거리</p>
              <p className="text-base font-bold tabular-nums text-orange-500 leading-snug">
                {result.cannotLiquidate
                  ? "100%+"
                  : fmtRate(result.distancePct)}
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
              <p className="text-xs text-gray-400 mb-2">포지션 크기</p>
              <p className="text-base font-bold tabular-nums text-gray-800 leading-snug">
                {Math.round(result.positionSizeKRW).toLocaleString("ko-KR")}
              </p>
              <p className="text-xs text-gray-400">원</p>
            </div>
          </div>

          {/* 세부 계산 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100">
              <h3 className="text-sm font-bold text-gray-900 tracking-wide">
                계산 결과 상세
              </h3>
            </div>
            <div className="divide-y divide-gray-50">
              {[
                {
                  tag: "A",
                  label: "진입가",
                  val: fmtWon(entry),
                  cls: "text-gray-900",
                },
                {
                  tag: "B",
                  label: "초기증거금 (이 포지션에 배정한 금액)",
                  val: fmtWon(margin),
                  cls: "text-gray-900",
                },
                {
                  tag: `C = B × ${leverage}`,
                  label: "포지션 크기 (증거금 × 레버리지)",
                  val: fmtWon(result.positionSizeKRW),
                  cls: "text-gray-900",
                },
                {
                  tag: "D",
                  label: "총 지갑 잔고",
                  val: fmtWon(wallet),
                  cls: "text-gray-900",
                },
                ...(hasOtherPnl
                  ? [
                      {
                        tag: "E",
                        label: `다른 포지션 미실현 손익 (${otherPnlSign === "profit" ? "수익" : "손실"})`,
                        val:
                          (otherPnlVal >= 0 ? "+" : "−") +
                          fmtWon(Math.abs(otherPnlVal)),
                        cls:
                          otherPnlVal >= 0
                            ? "text-green-600"
                            : "text-red-500",
                      },
                    ]
                  : []),
                {
                  tag: hasOtherPnl ? "F = D + E" : "E = D",
                  label: "유효 자본 (실제 청산 버퍼)",
                  val: fmtWon(result.effectiveEquity),
                  cls: "text-gray-900",
                },
                {
                  tag: hasOtherPnl ? "G = F ÷ C" : "F = E ÷ C",
                  label: "유효증거금율 (청산까지 거리 비율)",
                  val: fmtRate(result.equityRatio * 100),
                  cls: "text-gray-600",
                },
                {
                  tag: hasOtherPnl
                    ? `H = A × (1 ${isLong ? "−" : "+"} G)`
                    : `G = A × (1 ${isLong ? "−" : "+"} F)`,
                  label: `청산가 (${isLong ? "롱" : "숏"}) — 유효 자본 전액 소멸 가격`,
                  val: result.cannotLiquidate
                    ? "청산 불가 (이론상)"
                    : fmtWon(result.liquidationPrice),
                  cls: "text-orange-500",
                },
                {
                  tag: hasOtherPnl ? "I = G × 100" : "H = F × 100",
                  label: "청산까지 거리 (진입가 대비 %)",
                  val: result.cannotLiquidate
                    ? "100%+"
                    : fmtRate(result.distancePct),
                  cls: "text-orange-500",
                },
                ...(!result.cannotLiquidate
                  ? [
                      {
                        tag: hasOtherPnl ? "J = |H − A|" : "I = |G − A|",
                        label: "청산까지 거리 (가격 차이)",
                        val: fmtWon(result.distanceWon),
                        cls: "text-orange-500",
                      },
                    ]
                  : []),
              ].map(({ tag, label, val, cls }) => (
                <div
                  key={tag}
                  className="px-5 py-3.5 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <Tag text={tag} />
                    <span className="text-sm text-gray-600 truncate">
                      {label}
                    </span>
                  </div>
                  <span
                    className={`text-sm font-semibold tabular-nums flex-shrink-0 ${cls}`}
                  >
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 슬리피지·수수료 미반영 안내 */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 text-sm text-yellow-800">
            <p className="font-semibold mb-1">⚠️ 실제 거래소 청산가와 다를 수 있습니다</p>
            <p className="leading-relaxed">
              이 계산기의 청산가는{" "}
              <strong>슬리피지·거래 수수료가 반영되지 않은 이론값</strong>
              입니다. 실제 거래소는 이 가격보다 약간 앞에서 강제청산을
              실행합니다. 정확한 청산가는 포지션을 열고 거래소 화면에서 직접
              확인하세요.
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
              title: "포지션 방향",
              desc: "가격 상승에 베팅하면 롱(Long), 하락에 베팅하면 숏(Short)을 선택하세요.",
            },
            {
              num: "2",
              title: "진입가",
              desc: "포지션을 열 때 코인의 가격(원)을 입력하세요.",
            },
            {
              num: "3",
              title: "레버리지",
              desc: "사용 중인 레버리지 배수를 숫자로 입력하세요.",
            },
            {
              num: "4",
              title: "초기증거금",
              desc: "이 포지션에 배정한 금액(원)을 입력하세요. 포지션 크기(증거금 × 레버리지)의 기준이 됩니다.",
            },
            {
              num: "5",
              title: "총 지갑 잔고",
              desc: "교차마진 지갑의 전체 잔고를 입력하세요. 초기증거금보다 클수록 청산가가 더 멀어집니다.",
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
