import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Script from "next/script";
import { PROFILE_IMAGE_URL } from "@/lib/profile";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shujan Shaikh",
  description: "Full‑stack Engineer — Next.js, React, TypeScript",
  openGraph: {
    title: "Shujan Shaikh",
    description: "Full‑stack Engineer — Next.js, React, TypeScript",
    type: "website",
    images: [
      {
        url: PROFILE_IMAGE_URL,
        width: 400,
        height: 400,
        alt: "Shujan Shaikh",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Shujan Shaikh",
    description: "Full‑stack Engineer — Next.js, React, TypeScript",
    images: [PROFILE_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
       {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
            data-enabled="true"
          />
        )}
        {/* rest of your scripts go under */}
      </head>
      <body className="antialiased min-h-screen bg-background text-foreground">
        <ThemeProvider>
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
