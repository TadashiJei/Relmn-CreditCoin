import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// Use environment-driven base URL with a safe production fallback
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://relmn.com"
const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
const BING_SITE_VERIFICATION = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION

// Build verification meta only for values provided via env
const VERIFICATION = {
  ...(GOOGLE_SITE_VERIFICATION ? { google: GOOGLE_SITE_VERIFICATION } : {}),
  ...(BING_SITE_VERIFICATION
    ? { other: { "msvalidate.01": BING_SITE_VERIFICATION } }
    : {}),
} as Metadata["verification"]

export const metadata: Metadata = {
  title: "Relmn: The Super App for Global Financial Relationships, Credit & Networks",
  description:
    "Relmn is the unified Web3 platform for real-world asset tokenization, decentralized finance, and satellite infrastructure. Built on Creditcoin, it connects payment, lending, and connectivity for emerging markets. Founded by Java Jay Bartolome.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: VERIFICATION,
  openGraph: {
    title: "Relmn: The Super App for Global Financial Relationships, Credit & Networks",
    description:
      "Relmn is the unified Web3 platform for real-world asset tokenization, decentralized finance, and satellite infrastructure. Built on Creditcoin, it connects payment, lending, and connectivity for emerging markets. Founded by Java Jay Bartolome.",
    url: SITE_URL,
    siteName: "Relmn",
    type: "website",
    images: [
      {
        url: "/images/622ccae5-13a0-4603-8c96-83e007fe740e.jpeg",
        width: 1200,
        height: 630,
        alt: "Relmn — Web3 Super App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Relmn: The Super App for Global Financial Relationships, Credit & Networks",
    description:
      "Relmn is the unified Web3 platform for real-world asset tokenization, decentralized finance, and satellite infrastructure. Built on Creditcoin, it connects payment, lending, and connectivity for emerging markets. Founded by Java Jay Bartolome.",
    images: ["/images/622ccae5-13a0-4603-8c96-83e007fe740e.jpeg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`} suppressHydrationWarning>
        <Header />
        {children}
      </body>
    </html>
  )
}
