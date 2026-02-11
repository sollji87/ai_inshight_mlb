import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MLB 브랜드 2026년 1월 경영 보고서",
  description: "경영관리팀 FP&A | MLB Brand Monthly Report",
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
