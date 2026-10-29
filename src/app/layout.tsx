import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

export const metadata: Metadata = {
  title: "수완 (Soowan) | Backend Software Engineer Resume",
  description:
    "NestJS와 Spring Boot 기반의 백엔드 소프트웨어 엔지니어 이력서 및 아키텍처 포트폴리오 (보안 게이트웨이 설계, 로또 분석 풀스택 웹, iOS 출입증 앱, Angular 유지보수)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-emerald-500/20 selection:text-emerald-900 dark:bg-slate-950 dark:text-slate-100 dark:selection:bg-emerald-400/20 dark:selection:text-emerald-200 transition-colors">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
