import { MetadataRoute } from "next";
import { insights } from "@/lib/insights";

const BASE = "https://coinsjot.com";

const CALCULATOR_DATES: Record<string, string> = {
  "deemed-acquisition-price": "2026-08-24",
  "profit-loss-simulator":    "2026-08-25",
  "compound-interest":        "2026-08-26",
  "leverage-pnl":             "2026-08-27",
  "isolated-liquidation":     "2026-08-28",
  "cross-liquidation":        "2026-08-29",
  "dca-average":              "2026-08-30",
  "gift-tax":                 "2026-08-31",
  "year-end-price":           "2026-09-01",
  "trade-challenge":          "2026-09-02",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const calculators = Object.entries(CALCULATOR_DATES).map(([slug, date]) => ({
    url: `${BASE}/calculators/${slug}`,
    lastModified: new Date(date),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const insightPages = insights.map((a) => ({
    url: `${BASE}/insights/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  return [
    { url: BASE,               lastModified: new Date("2026-09-23"), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/insights`, lastModified: new Date("2026-09-23"), changeFrequency: "weekly", priority: 0.9 },
    ...calculators,
    ...insightPages,
    { url: `${BASE}/about`,   lastModified: new Date("2026-08-24"), changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/contact`, lastModified: new Date("2026-08-24"), changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/privacy`, lastModified: new Date("2026-08-24"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`,   lastModified: new Date("2026-08-24"), changeFrequency: "yearly", priority: 0.3 },
  ];
}
