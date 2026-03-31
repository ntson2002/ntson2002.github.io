import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TS. Nguyễn Trường Sơn — Lý Lịch Khoa Học",
  description: "Lý lịch khoa học của TS. Nguyễn Trường Sơn, Giảng viên Bộ môn Hệ Thống Thông Tin, Khoa CNTT, Trường ĐH Khoa học Tự nhiên ĐHQG-HCM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
