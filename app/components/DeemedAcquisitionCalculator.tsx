"use client";

import { useState, useMemo } from "react";

interface Result {
  acquisitionPrice: number;
  basis: "actual" | "end-of-year";
  capitalGain: number;
  taxableIncome: number;
  estimatedTax: number;
  taxSavings: number;
  byActualPrice: {
    capitalGain: number;
    taxableIncome: number;
    estimatedTax: number;
  };
  bySellPrice: {
    capitalGain: number;
    taxableIncome: number;
    estimatedTax: number;
  };
}

const formatInput = (raw: string) => {
  const digits = raw.replace(/[^0-9]/g, "");
  if (!digits) return "";
  return Number(digits).toLocaleString("ko-KR");
};

const parseInput = (formatted: string) => formatted.replace(/[^0-9]/g, "");

export function DeemedAcquisitionCalculator() {
  const [actualPrice, setActualPrice] = useState<string>("");
  const [yearEndPrice, setYearEndPrice] = useState<string>("");
  const [sellPrice, setSellPrice] = useState<string>("");

  const BASIC_DEDUCTION = 2_500_000;
  const TAX_RATE = 0.22;

  const result: Result | null = useMemo(() => {
    const actual = parseFloat(actualPrice) || 0;
    const yearEnd = parseFloat(yearEndPrice) || 0;
    const sell = parseFloat(sellPrice) || 0;

    if (actual === 0 || yearEnd === 0) return null;

    const acquisitionPrice = Math.max(actual, yearEnd);
    const basis = acquisitionPrice === actual ? "actual" : "end-of-year";

    if (sell === 0) return null;

    const capitalGain = sell - acquisitionPrice;
    const taxableIncome = Math.max(0, capitalGain - BASIC_DEDUCTION);
    const estimatedTax = taxableIncome * TAX_RATE;

    const capitalGainByActual = sell - actual;
    const taxableIncomeByActual = Math.max(0, capitalGainByActual - BASIC_DEDUCTION);
    const estimatedTaxByActual = taxableIncomeByActual * TAX_RATE;

    const capitalGainByYearEnd = sell - yearEnd;
    const taxableIncomeByYearEnd = Math.max(0, capitalGainByYearEnd - BASIC_DEDUCTION);
    const estimatedTaxByYearEnd = taxableIncomeByYearEnd * TAX_RATE;

    const taxSavings = Math.abs(estimatedTaxByActual - estimatedTaxByYearEnd);

    return {
      acquisitionPrice,
      basis,
      capitalGain,
      taxableIncome,
      estimatedTax,
      taxSavings,
      byActualPrice: {
        capitalGain: capitalGainByActual,
        taxableIncome: taxableIncomeByActual,
        estimatedTax: estimatedTaxByActual,
      },
      bySellPrice: {
        capitalGain: capitalGainByYearEnd,
        taxableIncome: taxableIncomeByYearEnd,
        estimatedTax: estimatedTaxByYearEnd,
      },
    };
  }, [actualPrice, yearEndPrice, sellPrice]);

  const formatNumber = (num: number) => num.toLocaleString("ko-KR");

  const handleReset = () => {
    setActualPrice("");
    setYearEndPrice("");
    setSellPrice("");
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Input Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">입력값</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              실제 취득가액 (원)
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              inputMode="numeric"
              value={formatInput(actualPrice)}
              onChange={(e) => setActualPrice(parseInput(e.target.value))}
              placeholder="예: 50,000,000"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">코인을 구매한 당시의 가격 (수수료 제외)</p>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              2026년 12월 31일 기준 시가 (원)
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              inputMode="numeric"
              value={formatInput(yearEndPrice)}
              onChange={(e) => setYearEndPrice(parseInput(e.target.value))}
              placeholder="예: 80,000,000"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">2026년 12월 31일 거래소 시세 스크린샷 등으로 확인</p>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              매도 예정가 또는 실제 매도가 (원)
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              inputMode="numeric"
              value={formatInput(sellPrice)}
              onChange={(e) => setSellPrice(parseInput(e.target.value))}
              placeholder="예: 100,000,000"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">판매 또는 예정 가격</p>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button
            onClick={handleReset}
            className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition"
          >
            초기화
          </button>
        </div>
      </div>

      {/* Results Section */}
      {result && (
        <div className="space-y-8">
          {/* Main Result */}
          <div className="bg-blue-50 rounded-lg border border-blue-200 p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-900">계산 결과</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <p className="text-gray-600 mb-2">적용되는 취득가액</p>
                <p className="text-3xl font-bold text-blue-600">
                  {formatNumber(result.acquisitionPrice)}원
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  {result.basis === "actual"
                    ? "✓ 실제 취득가액이 더 유리합니다"
                    : "✓ 2026.12.31 시가가 더 유리합니다"}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-6">
                  <p className="text-gray-600 text-sm mb-1">양도차익</p>
                  <p className="text-2xl font-bold">{formatNumber(result.capitalGain)}원</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <p className="text-gray-600 text-sm mb-1">과세표준</p>
                  <p className="text-2xl font-bold">{formatNumber(result.taxableIncome)}원</p>
                  <p className="text-xs text-gray-500 mt-1">(기본공제 250만원 적용)</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <p className="text-gray-600 text-sm mb-1">예상 납부세액</p>
                  <p className="text-2xl font-bold text-red-600">
                    {formatNumber(result.estimatedTax)}원
                  </p>
                </div>
              </div>

              {result.taxSavings > 0 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <p className="text-green-900 font-semibold mb-2">절세 효과</p>
                  <p className="text-3xl font-bold text-green-600">
                    {formatNumber(result.taxSavings)}원
                  </p>
                  <p className="text-sm text-green-800 mt-2">
                    의제취득가액 특례를 적용했을 때의 절세 효과입니다.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Comparison Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h3 className="text-xl font-bold mb-6">두 기준 비교</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-3 px-4 font-semibold">항목</th>
                    <th className="text-right py-3 px-4 font-semibold">실제 취득가액 기준</th>
                    <th className="text-right py-3 px-4 font-semibold">2026.12.31 시가 기준</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-3 px-4">취득가액</td>
                    <td className="text-right py-3 px-4 font-semibold">{formatNumber(parseFloat(actualPrice) || 0)}원</td>
                    <td className="text-right py-3 px-4 font-semibold">{formatNumber(parseFloat(yearEndPrice) || 0)}원</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">양도차익</td>
                    <td className="text-right py-3 px-4">{formatNumber(result.byActualPrice.capitalGain)}원</td>
                    <td className="text-right py-3 px-4">{formatNumber(result.bySellPrice.capitalGain)}원</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-3 px-4">과세표준</td>
                    <td className="text-right py-3 px-4">{formatNumber(result.byActualPrice.taxableIncome)}원</td>
                    <td className="text-right py-3 px-4">{formatNumber(result.bySellPrice.taxableIncome)}원</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="py-3 px-4 font-semibold">예상 납부세액</td>
                    <td className="text-right py-3 px-4 font-bold text-blue-600">
                      {formatNumber(result.byActualPrice.estimatedTax)}원
                    </td>
                    <td className="text-right py-3 px-4 font-bold text-blue-600">
                      {formatNumber(result.bySellPrice.estimatedTax)}원
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Help Text */}
      <div className="bg-gray-50 rounded-lg border border-gray-200 p-8 mt-8">
        <h3 className="font-bold mb-4">사용 방법</h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li>
            <strong>1. 실제 취득가액:</strong> 코인을 구매한 당시의 구입 가격을 원(KRW) 단위로 입력합니다.
          </li>
          <li>
            <strong>2. 2026년 12월 31일 시가:</strong> 거래소에서 확인할 수 있는 해당 날짜의 코인 가격을
            입력합니다. 여러 거래소 가격 중 가장 높은 가격을 적용하는 것이 유리할 수 있습니다.
          </li>
          <li>
            <strong>3. 매도가:</strong> 실제 판매 가격이나 예정 판매 가격을 입력합니다.
          </li>
          <li>
            <strong>결과:</strong> 두 취득가액 기준 중 어느 것이 더 유리한지, 그리고 절세 효과를 확인할 수
            있습니다.
          </li>
        </ul>
      </div>
    </div>
  );
}
