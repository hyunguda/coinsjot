"use client";

import { useState, useMemo } from "react";
import JSZip from "jszip";

const fmtPrice = (raw: string) => {
  const d = raw.replace(/[^0-9]/g, "");
  return d ? Number(d).toLocaleString("ko-KR") : "";
};
const parsePrice = (v: string) => v.replace(/[^0-9]/g, "");
const parseQty = (v: string) =>
  v.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");

const inputCls =
  "w-full px-2.5 py-2 bg-gray-50 border border-transparent rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none transition";
const selectCls =
  "w-full px-2.5 py-2 bg-gray-50 border border-transparent rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none transition appearance-none cursor-pointer";

interface Row {
  id: number;
  name: string;
  ticker: string;
  exchange: string;
  exchangeCustom: boolean;
  date: string;
  priceRaw: string;
  qtyRaw: string;
  note: string;
  screenshot: File | null;
}

let _nextId = 1;
const newRow = (): Row => ({
  id: _nextId++,
  name: "",
  ticker: "",
  exchange: "",
  exchangeCustom: false,
  date: "2026-12-31",
  priceRaw: "",
  qtyRaw: "",
  note: "",
  screenshot: null,
});

const EXCHANGES = ["업비트", "빗썸", "코빗", "코인원", "바이낸스", "바이비트", "OKX"];

export function YearEndPriceRecorder() {
  const [rows, setRows] = useState<Row[]>([newRow(), newRow()]);

  const update = (id: number, patch: Partial<Omit<Row, "id">>) =>
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, ...patch } : r))
    );

  const remove = (id: number) =>
    setRows((prev) => prev.filter((r) => r.id !== id));

  const filledRows = useMemo(
    () => rows.filter((r) => r.name.trim() || r.ticker.trim() || r.priceRaw),
    [rows]
  );

  const totalValue = useMemo(
    () =>
      rows.reduce((sum, r) => {
        const price = Number(r.priceRaw) || 0;
        const qty = parseFloat(r.qtyRaw) || 0;
        return sum + price * qty;
      }, 0),
    [rows]
  );

  const hasScreenshots = filledRows.some((r) => r.screenshot);

  const buildCSV = () => {
    const header = [
      "Name",
      "Ticker",
      "Exchange",
      "Date",
      "Price (KRW)",
      "Qty",
      "Total Value (KRW)",
      "Note",
      "Screenshot File",
    ];
    const dataRows = filledRows.map((r) => {
      const price = Number(r.priceRaw) || 0;
      const qty = parseFloat(r.qtyRaw) || 0;
      const evalAmt = price && qty ? Math.round(price * qty) : "";
      const screenshotName = r.screenshot
        ? `screenshots/${r.ticker || r.name || r.id}_${r.date}.${r.screenshot.name.split(".").pop()}`
        : "";
      return [r.name, r.ticker, r.exchange, r.date, price || "", qty || "", evalAmt, r.note, screenshotName]
        .map((v) => `"${String(v).replace(/"/g, '""')}"`)
        .join(",");
    });
    return "﻿" + [header.join(","), ...dataRows].join("\r\n");
  };

  const exportData = async () => {
    const csv = buildCSV();

    if (!hasScreenshots) {
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "coinsjot_시가기록.csv";
      a.click();
      URL.revokeObjectURL(url);
      return;
    }

    const zip = new JSZip();
    zip.file("coinsjot_시가기록.csv", csv);
    const folder = zip.folder("screenshots")!;
    for (const r of filledRows) {
      if (r.screenshot) {
        const ext = r.screenshot.name.split(".").pop() || "png";
        const label = r.ticker || r.name || String(r.id);
        folder.file(`${label}_${r.date}.${ext}`, r.screenshot);
      }
    }
    const zipBlob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(zipBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "coinsjot_시가기록.zip";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-4">
      {/* 입력 테이블 카드 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-sm font-bold text-gray-900 tracking-wide">
            종목별 시가 입력
          </h2>
          <span className="text-xs text-gray-400">{filledRows.length}개 종목</span>
        </div>

        <div className="overflow-x-auto">
          {/* 컬럼 헤더 */}
          <div className="px-5 pt-4 pb-2 min-w-[800px]">
            <div className="grid grid-cols-[1.5rem_1.4fr_0.7fr_1fr_0.9fr_1.4fr_0.7fr_1.3fr_1.5rem] gap-2">
              <div />
              <p className="text-xs text-gray-400">Name</p>
              <p className="text-xs text-gray-400">Ticker</p>
              <p className="text-xs text-gray-400">Exchange</p>
              <p className="text-xs text-gray-400">Date</p>
              <p className="text-xs text-gray-400">Price (KRW)</p>
              <p className="text-xs text-gray-400">Qty</p>
              <p className="text-xs text-gray-400">Note / Screenshot</p>
              <div />
            </div>
          </div>

          <div className="px-5 pb-3 space-y-2 min-w-[800px]">
            {rows.map((row, idx) => (
              <div
                key={row.id}
                className="grid grid-cols-[1.5rem_1.4fr_0.7fr_1fr_0.9fr_1.4fr_0.7fr_1.3fr_1.5rem] gap-2 items-start"
              >
                <span className="text-xs text-gray-400 text-center pt-2.5">{idx + 1}</span>

                <input
                  type="text"
                  value={row.name}
                  placeholder="비트코인"
                  onChange={(e) => update(row.id, { name: e.target.value })}
                  className={inputCls}
                />

                <input
                  type="text"
                  value={row.ticker}
                  placeholder="BTC"
                  onChange={(e) =>
                    update(row.id, { ticker: e.target.value.toUpperCase() })
                  }
                  className={inputCls}
                />

                {/* Exchange: 드롭다운 or 직접입력 */}
                {row.exchangeCustom ? (
                  <div className="flex gap-1 items-center">
                    <input
                      type="text"
                      value={row.exchange}
                      placeholder="거래소명 입력"
                      autoFocus
                      onChange={(e) => update(row.id, { exchange: e.target.value })}
                      className={inputCls}
                    />
                    <button
                      onClick={() => update(row.id, { exchange: "", exchangeCustom: false })}
                      className="flex-shrink-0 text-gray-300 hover:text-blue-400 transition text-base leading-none"
                      title="목록으로 돌아가기"
                    >
                      ↩
                    </button>
                  </div>
                ) : (
                  <select
                    value={row.exchange}
                    onChange={(e) => {
                      if (e.target.value === "__custom__") {
                        update(row.id, { exchange: "", exchangeCustom: true });
                      } else {
                        update(row.id, { exchange: e.target.value });
                      }
                    }}
                    className={selectCls}
                  >
                    <option value="">선택</option>
                    {EXCHANGES.map((ex) => (
                      <option key={ex} value={ex}>{ex}</option>
                    ))}
                    <option value="__custom__">기타 (직접입력)</option>
                  </select>
                )}

                <input
                  type="date"
                  value={row.date}
                  onChange={(e) => update(row.id, { date: e.target.value })}
                  className={inputCls}
                />

                <input
                  type="text"
                  inputMode="numeric"
                  value={fmtPrice(row.priceRaw)}
                  placeholder="150,000,000"
                  onChange={(e) =>
                    update(row.id, { priceRaw: parsePrice(e.target.value) })
                  }
                  className={`${inputCls} tabular-nums`}
                />

                <input
                  type="text"
                  inputMode="decimal"
                  value={row.qtyRaw}
                  placeholder="0.5"
                  onChange={(e) =>
                    update(row.id, { qtyRaw: parseQty(e.target.value) })
                  }
                  className={`${inputCls} tabular-nums`}
                />

                {/* Note + Screenshot */}
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    value={row.note}
                    placeholder="Note"
                    onChange={(e) => update(row.id, { note: e.target.value })}
                    className={inputCls}
                  />
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <label className="cursor-pointer flex items-center gap-1 text-[11px] text-gray-400 hover:text-blue-500 transition">
                      <span>📎</span>
                      <span>{row.screenshot ? "변경" : "스크린샷"}</span>
                      <input
                        type="file"
                        accept="image/*,.png,.jpg,.jpeg,.webp,.gif"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0] ?? null;
                          update(row.id, { screenshot: file });
                          e.target.value = "";
                        }}
                      />
                    </label>
                    {row.screenshot && (
                      <div className="flex items-center gap-1 text-[11px] text-blue-600 min-w-0">
                        <span className="truncate max-w-[90px]" title={row.screenshot.name}>
                          {row.screenshot.name}
                        </span>
                        <button
                          onClick={() => update(row.id, { screenshot: null })}
                          className="text-gray-400 hover:text-red-400 flex-shrink-0 leading-none"
                        >
                          ×
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => rows.length > 1 && remove(row.id)}
                  disabled={rows.length <= 1}
                  className="text-gray-300 hover:text-red-400 transition disabled:opacity-30 disabled:cursor-not-allowed text-xl leading-none text-center pt-2"
                >
                  ×
                </button>
              </div>
            ))}

            <button
              onClick={() => setRows((prev) => [...prev, newRow()])}
              className="w-full py-2.5 border border-dashed border-gray-200 rounded-lg text-sm text-gray-400 hover:border-blue-400 hover:text-blue-500 transition"
            >
              + 종목 추가
            </button>
          </div>
        </div>
      </div>

      {/* 요약 + 내보내기 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
          <p className="text-xs text-gray-400 mb-2">Coins recorded</p>
          <p className="text-2xl font-bold text-gray-900">
            {filledRows.length}
            <span className="text-sm font-normal text-gray-400 ml-1">종목</span>
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
          <p className="text-xs text-gray-400 mb-2">Total Value (KRW)</p>
          <p className="text-2xl font-bold text-blue-600 tabular-nums">
            {totalValue > 0
              ? Math.round(totalValue).toLocaleString("ko-KR")
              : "—"}
            <span className="text-sm font-normal text-gray-400 ml-1">원</span>
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4 flex flex-col justify-center">
          <button
            onClick={exportData}
            disabled={filledRows.length === 0}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition text-sm"
          >
            {hasScreenshots ? "내보내기 (ZIP)" : "내보내기 (CSV)"}
          </button>
          <p className="text-[11px] text-gray-400 text-center mt-2">
            {hasScreenshots
              ? "CSV + 스크린샷을 ZIP으로 묶어 다운로드"
              : "Excel에서 바로 열 수 있는 CSV 형식"}
          </p>
        </div>
      </div>

      {/* 미리보기 */}
      {filledRows.length > 0 && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100">
            <h3 className="text-sm font-bold text-gray-900 tracking-wide">
              입력 내역 미리보기
            </h3>
          </div>
          <div className="divide-y divide-gray-50">
            {filledRows.map((r) => {
              const price = Number(r.priceRaw) || 0;
              const qty = parseFloat(r.qtyRaw) || 0;
              const evalAmt = price && qty ? Math.round(price * qty) : null;
              return (
                <div
                  key={r.id}
                  className="px-5 py-3.5 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {r.ticker && (
                      <span className="inline-block text-[10px] font-mono bg-blue-50 text-blue-500 px-2 py-0.5 rounded font-bold flex-shrink-0">
                        {r.ticker}
                      </span>
                    )}
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-800 truncate">
                        {r.name || r.ticker}
                        {r.exchange && (
                          <span className="ml-2 text-xs font-normal text-gray-400">
                            {r.exchange}
                          </span>
                        )}
                        {r.date && (
                          <span className="ml-2 text-xs font-normal text-gray-400">
                            {r.date}
                          </span>
                        )}
                      </p>
                      <p className="text-xs text-gray-400">
                        {qty > 0 && `Qty ${qty.toLocaleString("ko-KR")}`}
                        {r.screenshot && (
                          <span className="ml-2 text-blue-400">📎 {r.screenshot.name}</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    {price > 0 && (
                      <p className="text-sm font-bold tabular-nums text-gray-800">
                        {price.toLocaleString("ko-KR")} KRW
                      </p>
                    )}
                    {evalAmt && (
                      <p className="text-xs text-blue-600 tabular-nums font-semibold">
                        ≈ {evalAmt.toLocaleString("ko-KR")} KRW
                      </p>
                    )}
                  </div>
                </div>
              );
            })}

            {totalValue > 0 && (
              <div className="px-5 py-3.5 flex items-center justify-between bg-blue-50">
                <span className="text-sm font-bold text-blue-700">Total Value</span>
                <span className="text-sm font-bold tabular-nums text-blue-600">
                  {Math.round(totalValue).toLocaleString("ko-KR")} KRW
                </span>
              </div>
            )}
          </div>
        </div>
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
              title: "종목 정보 입력",
              desc: "종목명(비트코인), Ticker(BTC), Exchange를 입력하세요. Exchange는 자주 쓰는 거래소를 드롭다운에서 선택하거나 '기타(직접입력)'로 입력할 수 있습니다.",
            },
            {
              num: "2",
              title: "날짜와 가격 입력",
              desc: "Date 칸에 해당 가격을 확인한 날짜를 선택하세요. Price (KRW)는 해당 날짜의 종가(원화)를 입력합니다. Qty는 선택 사항이며 입력 시 총 평가금액이 자동 계산됩니다.",
            },
            {
              num: "3",
              title: "스크린샷 첨부 (선택)",
              desc: "Note / Screenshot 칸의 📎 스크린샷 버튼으로 가격 증빙 이미지를 첨부할 수 있습니다. 스크린샷이 있으면 내보내기 시 ZIP 파일로 묶어 CSV와 함께 다운로드됩니다.",
            },
            {
              num: "4",
              title: "내보내기",
              desc: "스크린샷이 없으면 CSV 파일만 다운로드됩니다. 스크린샷이 있으면 ZIP 파일(CSV + screenshots 폴더)이 다운로드됩니다. ZIP 압축 해제 후 Excel에서 CSV를 열고, screenshots 폴더의 이미지를 참고 자료로 보관하세요.",
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
