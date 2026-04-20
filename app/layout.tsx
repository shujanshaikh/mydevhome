import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { PROFILE_IMAGE_URL } from "@/lib/profile";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: PROFILE_IMAGE_URL,
    apple: PROFILE_IMAGE_URL,
  },
  title: "Shujan Shaikh",
  description: "tldr; just a curious mind learning and building software for the fun of it.",
  openGraph: {
    title: "Shujan Shaikh",
    description: "tldr; just a curious mind learning and building software for the fun of it.",
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
    description: "tldr; just a curious mind learning and building software for the fun of it.",
    images: [PROFILE_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
            data-enabled="true"
          />
        )}
      </head>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
