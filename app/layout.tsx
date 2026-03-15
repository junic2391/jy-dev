import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "정준영 | Frontend Developer",
  description:
    "신문사 클라이언트 대상 10곳 이상의 CMS 서비스를 구축·유지해온 4년 차 프론트엔드 개발자입니다.",
  openGraph: {
    title: "정준영 | Frontend Developer",
    description:
      "신문사 클라이언트 대상 10곳 이상의 CMS 서비스를 구축·유지해온 4년 차 프론트엔드 개발자입니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Noto+Sans+KR:wght@300;400;500;700&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
