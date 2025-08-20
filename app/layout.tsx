import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shujan Shaikh",
  description: "Full‑stack Engineer — Next.js, React, TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-[#0a0a0a]">
      <body className="antialiased min-h-screen bg-[#0a0a0a] text-white">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
