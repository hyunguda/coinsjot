"use client";

import { useState, useEffect, useMemo } from "react";
import * as XLSX from "xlsx";

interface Trade {
  id: number;
  date: string;
  ticker: string;
  direction: "long" | "short" | "";
  profit: number;
  note: string;
}

const STORAGE_KEY = "coinsjot_trade_challenge_v1";
let _nextId = 1;

const inputCls =
  "w-full px-2.5 py-2 bg-gray-50 border border-transparent rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none transition";

const parseProfitInput = (v: string) =>
  v.replace(/[^0-9.-]/g, "").replace(/(?!^)-/g, "").replace(/(\..*)\./g, "$1");

export function TradeChallenge() {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    ticker: "",
    direction: "" as "long" | "short" | "",
    profitInput: "",
    note: "",
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Trade[];
        if (parsed.length > 0) {
          _nextId = Math.max(...parsed.map((t) => t.id)) + 1;
        }
        setTrades(parsed);
      }
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trades));
  }, [trades]);

  const stats = useMemo(() => {
    if (trades.length === 0)
      return { wins: 0, losses: 0, totalProfit: 0, winRate: 0, rr: 0 };
    const profits = trades.map((t) => t.profit);
    const wins = profits.filter((p) => p > 0);
    const losses = profits.filter((p) => p < 0);
    const totalProfit = profits.reduce((s, p) => s + p, 0);
    const winRate = (wins.length / trades.length) * 100;
    const avgWin =
      wins.length > 0 ? wins.reduce((s, p) => s + p, 0) / wins.length : 0;
    const avgLoss =
      losses.length > 0
        ? Math.abs(losses.reduce((s, p) => s + p, 0) / losses.length)
        : 0;
    const rr = avgLoss > 0 ? avgWin / avgLoss : 0;
    return { wins: wins.length, losses: losses.length, totalProfit, winRate, rr };
  }, [trades]);

  const canAdd =
    form.ticker.trim() &&
    form.profitInput.trim() &&
    !isNaN(Number(form.profitInput)) &&
    form.profitInput !== "-";

  const addTrade = () => {
    if (!canAdd) return;
    const trade: Trade = {
      id: _nextId++,
      date: form.date,
      ticker: form.ticker.trim().toUpperCase(),
      direction: form.direction,
      profit: Number(form.profitInput),
      note: form.note,
    };
    setTrades((prev) => [...prev, trade]);
    setForm((f) => ({ ...f, ticker: "", profitInput: "", note: "", direction: "" }));
    setShowForm(false);
  };

  const removeTrade = (id: number) => {
    setTrades((prev) => prev.filter((t) => t.id !== id));
  };

  const exportXLSX = () => {
    const header = ["#", "날짜", "종목", "방향", "수익금 (KRW)", "결과", "메모"];
    const rows = trades.map((t, i) => [
      i + 1,
      t.date,
      t.ticker,
      t.direction === "long" ? "Long" : t.direction === "short" ? "Short" : "",
      t.profit,
      t.profit > 0 ? "승" : t.profit < 0 ? "패" : "-",
      t.note,
    ]);
    const ws = XLSX.utils.aoa_to_sheet([header, ...rows]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "거래기록");
    const buf = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([buf], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "coinsjot_100회챌린지.xlsx";
    a.click();
    URL.revokeObjectURL(url);
  };

  const progress = Math.min(trades.length, 100);

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
          <p className="text-xs text-gray-400 mb-2">거래 횟수</p>
          <p className="text-2xl font-bold text-gray-900 tabular-nums">
            {trades.length}
            <span className="text-sm font-normal text-gray-400 ml-1">/ 100</span>
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
          <p className="text-xs text-gray-400 mb-2">승률</p>
          <p className="text-2xl font-bold text-gray-900 tabular-nums">
            {trades.length > 0 ? stats.winRate.toFixed(1) : "—"}
            {trades.length > 0 && (
              <span className="text-sm font-normal text-gray-400 ml-0.5">%</span>
            )}
          </p>
          {trades.length > 0 && (
            <p className="text-xs text-gray-400 mt-1">
              {stats.wins}승 {stats.losses}패
            </p>
          )}
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
          <p className="text-xs text-gray-400 mb-2">평균 손익비</p>
          <p className="text-2xl font-bold text-gray-900 tabular-nums">
            {stats.rr > 0 ? stats.rr.toFixed(2) : "—"}
            {stats.rr > 0 && (
              <span className="text-sm font-normal text-gray-400 ml-0.5">:1</span>
            )}
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
          <p className="text-xs text-gray-400 mb-2">누적 수익</p>
          <p
            className={`text-2xl font-bold tabular-nums ${
              stats.totalProfit > 0
                ? "text-blue-600"
                : stats.totalProfit < 0
                ? "text-red-500"
                : "text-gray-900"
            }`}
          >
            {trades.length > 0
              ? (stats.totalProfit >= 0 ? "+" : "") +
                Math.round(stats.totalProfit).toLocaleString("ko-KR")
              : "—"}
            {trades.length > 0 && (
              <span className="text-sm font-normal text-gray-400 ml-0.5">원</span>
            )}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-bold text-gray-900">100회 챌린지 진행률</p>
          <p className="text-sm font-bold text-blue-600 tabular-nums">
            {progress} / 100
          </p>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
          <div
            className="h-3 bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        {progress >= 100 && (
          <p className="text-sm text-blue-600 font-semibold text-center mt-3">
            🎉 100회 챌린지 완료!
          </p>
        )}
      </div>

      {/* Add Form */}
      {showForm && (
        <div className="bg-white rounded-2xl border border-blue-100 shadow-sm px-5 py-4 space-y-3">
          <h3 className="text-sm font-bold text-gray-900">거래 추가</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div>
              <label className="text-xs text-gray-400 mb-1 block">날짜</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                className={inputCls}
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">종목</label>
              <input
                type="text"
                value={form.ticker}
                placeholder="BTC"
                onChange={(e) => setForm((f) => ({ ...f, ticker: e.target.value }))}
                className={inputCls}
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">방향</label>
              <select
                value={form.direction}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    direction: e.target.value as "long" | "short" | "",
                  }))
                }
                className="w-full px-2.5 py-2 bg-gray-50 border border-transparent rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none transition appearance-none cursor-pointer"
              >
                <option value="">-</option>
                <option value="long">Long</option>
                <option value="short">Short</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">
                수익금 (KRW, 손실은 음수)
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={form.profitInput}
                placeholder="-100000"
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    profitInput: parseProfitInput(e.target.value),
                  }))
                }
                className={`${inputCls} tabular-nums`}
              />
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-400 mb-1 block">메모 (선택)</label>
            <input
              type="text"
              value={form.note}
              placeholder="손절, 익절, 이유 등"
              onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
              className={inputCls}
            />
          </div>
          <div className="flex gap-2 pt-1">
            <button
              onClick={addTrade}
              disabled={!canAdd}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400 text-white text-sm font-semibold rounded-lg transition"
            >
              추가
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm font-semibold rounded-lg transition"
            >
              취소
            </button>
          </div>
        </div>
      )}

      {/* Trade List */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between gap-3 flex-wrap">
          <h2 className="text-sm font-bold text-gray-900 tracking-wide">
            거래 기록
          </h2>
          <div className="flex gap-2">
            {trades.length > 0 && (
              <button
                onClick={exportXLSX}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-lg transition"
              >
                XLSX 내보내기
              </button>
            )}
            {trades.length < 100 && !showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition"
              >
                + 거래 추가
              </button>
            )}
          </div>
        </div>

        {trades.length === 0 ? (
          <div className="px-5 py-12 text-center">
            <p className="text-gray-400 text-sm">아직 기록된 거래가 없습니다.</p>
            <button
              onClick={() => setShowForm(true)}
              className="mt-4 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition"
            >
              첫 번째 거래 추가하기
            </button>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {[...trades].reverse().map((t, revIdx) => {
              const num = trades.length - revIdx;
              const isWin = t.profit > 0;
              const isLoss = t.profit < 0;
              return (
                <div key={t.id} className="px-5 py-3.5 flex items-center gap-3">
                  <span className="text-xs text-gray-300 tabular-nums w-6 text-right flex-shrink-0">
                    {num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      {t.ticker && (
                        <span className="text-[10px] font-mono bg-blue-50 text-blue-500 px-2 py-0.5 rounded font-bold">
                          {t.ticker}
                        </span>
                      )}
                      {t.direction && (
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                            t.direction === "long"
                              ? "bg-green-50 text-green-600"
                              : "bg-red-50 text-red-500"
                          }`}
                        >
                          {t.direction === "long" ? "Long" : "Short"}
                        </span>
                      )}
                      <span className="text-xs text-gray-400">{t.date}</span>
                      {t.note && (
                        <span className="text-xs text-gray-400 truncate max-w-[120px]">
                          {t.note}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span
                      className={`text-sm font-bold tabular-nums ${
                        isWin
                          ? "text-blue-600"
                          : isLoss
                          ? "text-red-500"
                          : "text-gray-500"
                      }`}
                    >
                      {t.profit >= 0 ? "+" : ""}
                      {Math.round(t.profit).toLocaleString("ko-KR")}원
                    </span>
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        isWin
                          ? "bg-blue-50 text-blue-600"
                          : isLoss
                          ? "bg-red-50 text-red-500"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {isWin ? "승" : isLoss ? "패" : "-"}
                    </span>
                    <button
                      onClick={() => removeTrade(t.id)}
                      className="text-gray-300 hover:text-red-400 transition text-xl leading-none"
                    >
                      ×
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 사용 방법 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100">
          <h3 className="text-sm font-bold text-gray-900 tracking-wide">사용 방법</h3>
        </div>
        <div className="divide-y divide-gray-50">
          {[
            {
              num: "1",
              title: "거래 기록",
              desc: "+ 거래 추가 버튼을 클릭해 날짜, 종목, 방향, 수익금을 입력하세요. 수익이면 양수(예: 50000), 손실이면 음수(예: -30000)로 입력합니다.",
            },
            {
              num: "2",
              title: "통계 자동 계산",
              desc: "거래를 추가할 때마다 승률, 평균 손익비, 누적 수익이 자동으로 업데이트됩니다. 손익비는 평균 이익 / 평균 손실로 계산됩니다.",
            },
            {
              num: "3",
              title: "데이터 자동 저장",
              desc: "기록된 거래는 브라우저에 자동 저장됩니다. 페이지를 새로고침하거나 브라우저를 닫아도 데이터가 유지됩니다.",
            },
            {
              num: "4",
              title: "XLSX 내보내기",
              desc: "XLSX 내보내기 버튼으로 거래 기록 전체를 엑셀 파일로 다운로드할 수 있습니다. 거래 분석이나 세금 신고 시 참고 자료로 활용하세요.",
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
