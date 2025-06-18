import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lightning Grants",
  description: "First to Back the First to Build.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        property="twitter:image"
        content="https://lightning-six.vercel.app/opengraph.png"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="Lightning Grants" />
      <meta
        property="twitter:description"
        content="Lightning Grants: First to Back the First to Build."
      />

      <meta
        property="og:image"
        content="https://lightning-six.vercel.app/opengraph.png"
      />
      <meta property="og:site_name" content="Lightning Grants" />
      <meta property="og:title" content="Lightning Grants" />
      <meta
        property="og:description"
        content="First to Back the First to Build."
      />
      <meta property="og:url" content="https://lightning-six.vercel.app"></meta>
      <body className={`${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
