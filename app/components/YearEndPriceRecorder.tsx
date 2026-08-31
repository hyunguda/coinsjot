"use client";

import { useState, useMemo } from "react";

const REF_DATE = "2026-12-31";

const fmtPrice = (raw: string) => {
  const d = raw.replace(/[^0-9]/g, "");
  return d ? Number(d).toLocaleString("ko-KR") : "";
};
const parsePrice = (v: string) => v.replace(/[^0-9]/g, "");
const parseQty = (v: string) =>
  v.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");

const inputCls =
  "w-full px-2.5 py-2 bg-gray-50 border border-transparent rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none transition";

interface Row {
  id: number;
  name: string;
  ticker: string;
  exchange: string;
  priceRaw: string;
  qtyRaw: string;
  note: string;
}

let _nextId = 1;
const newRow = (): Row => ({
  id: _nextId++,
  name: "",
  ticker: "",
  exchange: "",
  priceRaw: "",
  qtyRaw: "",
  note: "",
});

const EXCHANGES = ["업비트", "빗썸", "코빗", "코인원", "바이낸스", "바이비트", "OKX"];

export function YearEndPriceRecorder() {
  const [rows, setRows] = useState<Row[]>([newRow(), newRow()]);

  const update = (id: number, field: keyof Omit<Row, "id">, val: string) =>
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: val } : r))
    );

  const remove = (id: number) =>
    setRows((prev) => prev.filter((r) => r.id !== id));

  const filledRows = useMemo(
    () =>
      rows.filter(
        (r) => r.name.trim() || r.ticker.trim() || r.priceRaw
      ),
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

  const downloadCSV = () => {
    const header = [
      "종목명",
      "티커",
      "거래소",
      "기준일",
      "종가(원)",
      "보유수량",
      "평가금액(원)",
      "메모",
    ];
    const dataRows = filledRows.map((r) => {
      const price = Number(r.priceRaw) || 0;
      const qty = parseFloat(r.qtyRaw) || 0;
      const evalAmt = price && qty ? Math.round(price * qty) : "";
      return [
        r.name,
        r.ticker,
        r.exchange,
        REF_DATE,
        price || "",
        qty || "",
        evalAmt,
        r.note,
      ]
        .map((v) => `"${String(v).replace(/"/g, '""')}"`)
        .join(",");
    });

    const csv = "﻿" + [header.join(","), ...dataRows].join("\r\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "coinsjot_2026년12월31일_시가기록.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-4">
      {/* 기준일 배너 */}
      <div className="bg-blue-600 text-white rounded-2xl px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold opacity-80 mb-0.5">기준일</p>
          <p className="text-2xl font-bold tracking-wide">2026년 12월 31일</p>
        </div>
        <div className="text-right">
          <p className="text-xs opacity-80 mb-0.5">의제취득가액 특례 기준일</p>
          <p className="text-sm font-semibold">세금 신고 핵심 데이터</p>
        </div>
      </div>

      {/* 입력 테이블 카드 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-sm font-bold text-gray-900 tracking-wide">
            종목별 시가 입력
          </h2>
          <span className="text-xs text-gray-400">
            {filledRows.length}개 종목
          </span>
        </div>

        {/* 컬럼 헤더 */}
        <div className="px-5 pt-4 pb-2">
          <div className="grid grid-cols-[1.5rem_1.8fr_0.9fr_1.1fr_1.6fr_1.2fr_1.4fr_1.5rem] gap-2">
            <div />
            <p className="text-xs text-gray-400">종목명</p>
            <p className="text-xs text-gray-400">티커</p>
            <p className="text-xs text-gray-400">거래소</p>
            <p className="text-xs text-gray-400">종가 (원)</p>
            <p className="text-xs text-gray-400">보유수량</p>
            <p className="text-xs text-gray-400">메모</p>
            <div />
          </div>
        </div>

        <div className="px-5 pb-3 space-y-2">
          {rows.map((row, idx) => (
            <div
              key={row.id}
              className="grid grid-cols-[1.5rem_1.8fr_0.9fr_1.1fr_1.6fr_1.2fr_1.4fr_1.5rem] gap-2 items-center"
            >
              <span className="text-xs text-gray-400 text-center">{idx + 1}</span>

              <input
                type="text"
                value={row.name}
                placeholder="비트코인"
                onChange={(e) => update(row.id, "name", e.target.value)}
                className={inputCls}
              />
              <input
                type="text"
                value={row.ticker}
                placeholder="BTC"
                onChange={(e) =>
                  update(row.id, "ticker", e.target.value.toUpperCase())
                }
                className={inputCls}
              />
              <input
                type="text"
                list="exchanges"
                value={row.exchange}
                placeholder="업비트"
                onChange={(e) => update(row.id, "exchange", e.target.value)}
                className={inputCls}
              />
              <input
                type="text"
                inputMode="numeric"
                value={fmtPrice(row.priceRaw)}
                placeholder="150,000,000"
                onChange={(e) =>
                  update(row.id, "priceRaw", parsePrice(e.target.value))
                }
                className={`${inputCls} tabular-nums`}
              />
              <input
                type="text"
                inputMode="decimal"
                value={row.qtyRaw}
                placeholder="0.5"
                onChange={(e) =>
                  update(row.id, "qtyRaw", parseQty(e.target.value))
                }
                className={`${inputCls} tabular-nums`}
              />
              <input
                type="text"
                value={row.note}
                placeholder="메모"
                onChange={(e) => update(row.id, "note", e.target.value)}
                className={inputCls}
              />
              <button
                onClick={() => rows.length > 1 && remove(row.id)}
                disabled={rows.length <= 1}
                className="text-gray-300 hover:text-red-400 transition disabled:opacity-30 disabled:cursor-not-allowed text-xl leading-none text-center"
              >
                ×
              </button>
            </div>
          ))}

          <datalist id="exchanges">
            {EXCHANGES.map((ex) => (
              <option key={ex} value={ex} />
            ))}
          </datalist>

          <button
            onClick={() => setRows((prev) => [...prev, newRow()])}
            className="w-full py-2.5 border border-dashed border-gray-200 rounded-lg text-sm text-gray-400 hover:border-blue-400 hover:text-blue-500 transition"
          >
            + 종목 추가
          </button>
        </div>
      </div>

      {/* 요약 + 다운로드 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
          <p className="text-xs text-gray-400 mb-2">기록 종목 수</p>
          <p className="text-2xl font-bold text-gray-900">
            {filledRows.length}
            <span className="text-sm font-normal text-gray-400 ml-1">종목</span>
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
          <p className="text-xs text-gray-400 mb-2">총 평가금액</p>
          <p className="text-2xl font-bold text-blue-600 tabular-nums">
            {totalValue > 0
              ? Math.round(totalValue).toLocaleString("ko-KR")
              : "—"}
            <span className="text-sm font-normal text-gray-400 ml-1">원</span>
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4 flex flex-col justify-center">
          <button
            onClick={downloadCSV}
            disabled={filledRows.length === 0}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition text-sm"
          >
            엑셀로 내보내기 (CSV)
          </button>
          <p className="text-[11px] text-gray-400 text-center mt-2">
            Excel에서 바로 열 수 있는 CSV 형식
          </p>
        </div>
      </div>

      {/* 저장된 데이터 미리보기 */}
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
                      </p>
                      {qty > 0 && (
                        <p className="text-xs text-gray-400">
                          보유 {qty.toLocaleString("ko-KR")}개
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    {price > 0 && (
                      <p className="text-sm font-bold tabular-nums text-gray-800">
                        {price.toLocaleString("ko-KR")}원
                      </p>
                    )}
                    {evalAmt && (
                      <p className="text-xs text-blue-600 tabular-nums font-semibold">
                        평가 {evalAmt.toLocaleString("ko-KR")}원
                      </p>
                    )}
                  </div>
                </div>
              );
            })}

            {totalValue > 0 && (
              <div className="px-5 py-3.5 flex items-center justify-between bg-blue-50">
                <span className="text-sm font-bold text-blue-700">
                  총 평가금액
                </span>
                <span className="text-sm font-bold tabular-nums text-blue-600">
                  {Math.round(totalValue).toLocaleString("ko-KR")}원
                </span>
              </div>
            )}
          </div>
        </div>
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
              title: "종목 정보 입력",
              desc: "종목명(비트코인), 티커(BTC), 거래소를 입력하세요. 거래소는 업비트·빗썸 등 자주 쓰는 거래소가 자동완성됩니다.",
            },
            {
              num: "2",
              title: "2026년 12월 31일 종가 입력",
              desc: "각 거래소에서 확인한 2026년 12월 31일 기준 종가(원화)를 입력하세요. 24시간 가중평균가 또는 자정 기준가를 기록하는 것이 좋습니다.",
            },
            {
              num: "3",
              title: "보유수량 입력 (선택)",
              desc: "보유 중인 코인 수량을 입력하면 총 평가금액을 자동 계산합니다. 소수점 입력 가능합니다.",
            },
            {
              num: "4",
              title: "엑셀로 내보내기",
              desc: "'엑셀로 내보내기' 버튼을 클릭하면 CSV 파일이 다운로드됩니다. 파일을 열면 Excel에서 바로 확인할 수 있습니다. 이 파일을 잘 보관해 두세요.",
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
