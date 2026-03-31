import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
