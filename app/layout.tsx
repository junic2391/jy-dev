import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "정준영 | Frontend Engineer",
  description:
    "복잡한 문제를 단순한 경험으로 해결하는 4년차 프론트엔드 엔지니어입니다.",
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
