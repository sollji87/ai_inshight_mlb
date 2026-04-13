import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MLB 브랜드 월간 경영 보고서 (2026.01 / 2026.02 / 2026.03)",
  description: "경영관리팀 FP&A | MLB Brand Monthly Reports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
