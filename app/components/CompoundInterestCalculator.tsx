"use client";

import { useState, useMemo } from "react";

const fmtIn = (raw: string) => {
  const d = raw.replace(/[^0-9]/g, "");
  return d ? Number(d).toLocaleString("ko-KR") : "";
};
const parseIn = (v: string) => v.replace(/[^0-9]/g, "");
const fmtWon = (n: number) =>
  Math.round(n).toLocaleString("ko-KR") + "원";
const fmtRate = (n: number) =>
  (n >= 0 ? "+" : "") + n.toFixed(2) + "%";

interface Row {
  round: number;
  investment: number;
  profit: number;
  balance: number;
}

function Tag({ text }: { text: string }) {
  return (
    <span className="inline-block text-[10px] font-mono bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded leading-tight whitespace-nowrap flex-shrink-0">
      {text}
    </span>
  );
}

const inputCls =
  "w-full px-3 py-2.5 bg-gray-50 border border-transparent rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none transition tabular-nums";

export function CompoundInterestCalculator() {
  const [initial, setInitial] = useState("");
  const [rateStr, setRateStr] = useState("");
  const [roundsStr, setRoundsStr] = useState("");
  const [addPerRound, setAddPerRound] = useState("");
  const [showAll, setShowAll] = useState(false);

  const result = useMemo(() => {
    const initVal = Number(parseIn(initial)) || 0;
    const rate = parseFloat(rateStr) / 100;
    const totalRounds = parseInt(roundsStr) || 0;
    const addVal = Number(parseIn(addPerRound)) || 0;

    if (initVal <= 0 || isNaN(rate) || rate <= 0 || totalRounds <= 0) return null;

    const rows: Row[] = [];
    let balance = initVal;
    for (let r = 1; r <= totalRounds; r++) {
      balance = balance * (1 + rate) + addVal;
      const investment = initVal + addVal * r;
      rows.push({ round: r, investment, profit: balance - investment, balance });
    }

    const last = rows[rows.length - 1];
    const totalInvestment = initVal + addVal * totalRounds;
    const totalProfit = last.balance - totalInvestment;
    const totalRate = (totalProfit / totalInvestment) * 100;

    return { rows, totalInvestment, totalProfit, totalRate, finalBalance: last.balance };
  }, [initial, rateStr, roundsStr, addPerRound]);

  const displayRows = useMemo(() => {
    if (!result) return [];
    const { rows } = result;
    if (showAll || rows.length <= 24) return rows;
    const step = rows.length <= 60 ? 3 : 6;
    return rows.filter((r) => r.round % step === 0 || r.round === rows.length);
  }, [result, showAll]);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* 입력 카드 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="text-sm font-bold text-gray-900 tracking-wide">입력값 설정</h2>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">초기 투자금 (원)</label>
              <input
                type="text"
                inputMode="numeric"
                value={fmtIn(initial)}
                placeholder="예: 10,000,000"
                onChange={(e) => setInitial(parseIn(e.target.value))}
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">수익률 (%)</label>
              <input
                type="text"
                inputMode="decimal"
                value={rateStr}
                placeholder="예: 5"
                onChange={(e) => {
                  const v = e.target.value.replace(/[^0-9.]/g, "");
                  const parts = v.split(".");
                  setRateStr(parts.length > 2 ? parts[0] + "." + parts.slice(1).join("") : v);
                }}
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">총 회차</label>
              <input
                type="text"
                inputMode="numeric"
                value={roundsStr}
                placeholder="예: 24"
                onChange={(e) => setRoundsStr(e.target.value.replace(/[^0-9]/g, ""))}
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">
                회차당 추가 투자금 (원)
                <span className="ml-1.5 text-gray-300">선택</span>
              </label>
              <input
                type="text"
                inputMode="numeric"
                value={fmtIn(addPerRound)}
                placeholder="없으면 비워두세요"
                onChange={(e) => setAddPerRound(parseIn(e.target.value))}
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
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
              <p className="text-xs text-gray-400 mb-2">최종 자산</p>
              <p className="text-base font-bold tabular-nums text-blue-600 leading-snug">
                {Math.round(result.finalBalance).toLocaleString("ko-KR")}
              </p>
              <p className="text-xs text-gray-400">원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
              <p className="text-xs text-gray-400 mb-2">총 수익금</p>
              <p className="text-base font-bold tabular-nums text-green-600 leading-snug">
                +{Math.round(result.totalProfit).toLocaleString("ko-KR")}
              </p>
              <p className="text-xs text-gray-400">원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
              <p className="text-xs text-gray-400 mb-2">총 투자 원금</p>
              <p className="text-base font-bold tabular-nums text-gray-700 leading-snug">
                {Math.round(result.totalInvestment).toLocaleString("ko-KR")}
              </p>
              <p className="text-xs text-gray-400">원</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
              <p className="text-xs text-gray-400 mb-2">총 수익률</p>
              <p className={`text-base font-bold tabular-nums leading-snug ${result.totalRate >= 0 ? "text-green-600" : "text-red-500"}`}>
                {fmtRate(result.totalRate)}
              </p>
            </div>
          </div>

          {/* 세부 계산 카드 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100">
              <h3 className="text-sm font-bold text-gray-900 tracking-wide">계산 결과 요약</h3>
            </div>
            <div className="divide-y divide-gray-50">
              {[
                { tag: "A", label: "초기 투자금", val: fmtWon(Number(parseIn(initial))), cls: "text-gray-900" },
                { tag: "B", label: "총 투자 원금 (초기 + 회차별 적립 합계)", val: fmtWon(result.totalInvestment), cls: "text-gray-900" },
                { tag: "C", label: "복리 수익금", val: "+" + fmtWon(result.totalProfit), cls: "text-green-600" },
                { tag: "D = B + C", label: "최종 자산", val: fmtWon(result.finalBalance), cls: "text-blue-600" },
                { tag: "C ÷ B", label: "총 수익률", val: fmtRate(result.totalRate), cls: result.totalRate >= 0 ? "text-green-600" : "text-red-500" },
              ].map(({ tag, label, val, cls }) => (
                <div key={tag} className="px-5 py-3.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <Tag text={tag} />
                    <span className="text-sm text-gray-600 truncate">{label}</span>
                  </div>
                  <span className={`text-sm font-semibold tabular-nums flex-shrink-0 ${cls}`}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 회차별 추이 테이블 */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-900 tracking-wide">회차별 자산 추이</h3>
              {result.rows.length > 24 && (
                <button
                  onClick={() => setShowAll((v) => !v)}
                  className="text-xs text-blue-500 hover:text-blue-700 transition"
                >
                  {showAll ? "요약 보기" : "전체 보기"}
                </button>
              )}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[360px]">
                <thead>
                  <tr className="border-b border-gray-100 text-xs text-gray-400 font-medium">
                    <th className="py-3 pl-5 text-left">회차</th>
                    <th className="py-3 px-3 text-right">투자 원금</th>
                    <th className="py-3 px-3 text-right">수익금</th>
                    <th className="py-3 pr-5 text-right">자산 합계</th>
                  </tr>
                </thead>
                <tbody>
                  {displayRows.map((row) => (
                    <tr
                      key={row.round}
                      className={`border-b border-gray-50 last:border-0 ${row.round === result.rows.length ? "bg-blue-50/50" : ""}`}
                    >
                      <td className="py-2.5 pl-5 text-gray-500 tabular-nums">
                        {row.round}회차
                      </td>
                      <td className="py-2.5 px-3 text-right tabular-nums text-gray-500">
                        {Math.round(row.investment).toLocaleString("ko-KR")}
                      </td>
                      <td className="py-2.5 px-3 text-right tabular-nums text-green-600">
                        +{Math.round(row.profit).toLocaleString("ko-KR")}
                      </td>
                      <td className="py-2.5 pr-5 text-right tabular-nums text-blue-600 font-semibold">
                        {Math.round(row.balance).toLocaleString("ko-KR")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {result.rows.length > 24 && !showAll && (
              <p className="text-center text-xs text-gray-400 py-3">
                {result.rows.length > 60 ? "6회차 간격" : "3회차 간격"}으로 표시 중
              </p>
            )}
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
            { num: "1", title: "초기 투자금", desc: "처음 투자할 금액을 원 단위로 입력하세요." },
            { num: "2", title: "수익률", desc: "회차당 기대 수익률(%)을 입력하세요. 소수점 입력 가능 (예: 3.5)." },
            { num: "3", title: "총 회차", desc: "복리를 적용할 총 횟수를 입력하세요." },
            { num: "4", title: "회차당 추가 투자금", desc: "매 회차마다 추가로 투자하는 금액입니다. 거치식이면 비워두세요." },
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
