import { MetadataRoute } from "next";
import { insights } from "@/lib/insights";

const BASE = "https://coinsjot.com";

// 날짜 문자열(YYYY-MM-DD)을 한국 시간 자정으로 해석합니다.
// new Date("YYYY-MM-DD")는 UTC 자정(한국 시간 오전 9시)이 되어, 오전에 발행하면 lastmod가 미래 시각이 됩니다.
const kst = (date: string) => new Date(`${date}T00:00:00+09:00`);

const CALCULATOR_DATES: Record<string, string> = {
  "deemed-acquisition-price": "2026-10-07",
  "profit-loss-simulator":    "2026-08-25",
  "compound-interest":        "2026-08-26",
  "leverage-pnl":             "2026-08-27",
  "isolated-liquidation":     "2026-08-28",
  "cross-liquidation":        "2026-08-29",
  "dca-average":              "2026-08-30",
  "gift-tax":                 "2026-08-31",
  "year-end-price":           "2026-10-07",
  "trade-challenge":          "2026-09-02",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const calculators = Object.entries(CALCULATOR_DATES).map(([slug, date]) => ({
    url: `${BASE}/calculators/${slug}`,
    lastModified: kst(date),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const insightPages = insights.map((a) => ({
    url: `${BASE}/insights/${a.slug}`,
    lastModified: kst(a.updated ?? a.date),
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  // 홈·목록은 최신 글 날짜를 따라갑니다.
  const latest = insights.reduce((m, a) => (a.date > m ? a.date : m), "2026-08-24");

  return [
    { url: BASE,               lastModified: kst(latest), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/insights`, lastModified: kst(latest), changeFrequency: "weekly", priority: 0.9 },
    ...calculators,
    ...insightPages,
    { url: `${BASE}/about`,   lastModified: kst("2026-10-01"), changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/contact`, lastModified: kst("2026-08-24"), changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/privacy`, lastModified: kst("2026-10-07"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`,   lastModified: kst("2026-08-24"), changeFrequency: "yearly", priority: 0.3 },
  ];
}
