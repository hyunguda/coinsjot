import { MetadataRoute } from "next";
import { insights } from "@/lib/insights";

const BASE = "https://coinsjot.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const calculators = [
    "deemed-acquisition-price",
    "profit-loss-simulator",
    "compound-interest",
    "leverage-pnl",
    "isolated-liquidation",
    "cross-liquidation",
    "dca-average",
    "gift-tax",
    "year-end-price",
    "trade-challenge",
  ].map((slug) => ({
    url: `${BASE}/calculators/${slug}`,
    lastModified: new Date(),
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
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/insights`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...calculators,
    ...insightPages,
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
