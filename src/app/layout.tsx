/*
 * layout.tsx
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import type { Metadata } from "next"
import { Suspense } from "react"
import { Urbanist, Inter } from "next/font/google"

import { ClientDebugWrapper, Footer, TopGlobalNavbar, Header } from "@layouts"
import { LanguageInitializer, WhatsAppSection } from "@other-component"

import "./globals.css"

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Amco Enterprise",
  description: `From unskilled to skilled workforce we train, certify, and deploy talent around the world`,
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${urbanist.variable}`}>
        <LanguageInitializer />
        <Suspense fallback={null}>
          <TopGlobalNavbar />
        </Suspense>
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <ClientDebugWrapper allowDebugger={true}>{children}</ClientDebugWrapper>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <Suspense fallback={null}>
          <WhatsAppSection />
        </Suspense>
      </body>
    </html>
  )
}
