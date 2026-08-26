import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "coinsjot | 가상자산 세금·손익 계산기",
  description: "코인 투자자를 위한 양도소득세, 손익통산, 선물 청산가 계산 도구 모음",
  keywords: "가상자산, 양도소득세, 의제취득가액, 손익통산, 코인 세금, 계산기",
  openGraph: {
    title: "coinsjot | 가상자산 세금·손익 계산기",
    description: "코인 투자자를 위한 양도소득세, 손익통산, 선물 청산가 계산 도구 모음",
    type: "website",
  },
  verification: {
    google: "3aXt8q2Kmr_Wre3yGvGHh9K4Js3vUwzd1-6HERwQrCw",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-LN7S1YT02H" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LN7S1YT02H');
        `}</Script>
      </head>
      <body className="flex flex-col min-h-screen bg-white text-gray-900">
        {/* Header/Navigation */}
        <header className="border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur z-40">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              coinsjot
            </Link>
            <div className="flex gap-6 text-sm">
              <Link href="/" className="hover:text-blue-600 transition">
                계산기
              </Link>
              <Link href="/about" className="hover:text-blue-600 transition">
                소개
              </Link>
              <Link href="/contact" className="hover:text-blue-600 transition">
                문의
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-gray-50 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-4">계산기</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <Link href="/calculators/deemed-acquisition-price" className="hover:text-blue-600">
                      가상화폐 세금 계산기
                    </Link>
                  </li>
                  <li>
                    <Link href="/calculators/profit-loss-simulator" className="hover:text-blue-600">
                      코인 포트폴리오 통합 계산기
                    </Link>
                  </li>
                  <li>
                    <Link href="/calculators/compound-interest" className="hover:text-blue-600">
                      코인 복리 수익 계산기
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">정보</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <Link href="/about" className="hover:text-blue-600">
                      소개
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-blue-600">
                      문의
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">약관</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <Link href="/privacy" className="hover:text-blue-600">
                      개인정보처리방침
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-blue-600">
                      이용약관
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
              <p>© 2026 coinsjot. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
