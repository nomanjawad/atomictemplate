/*
 * Footer.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

"use client"

import { Container, Section, BaseText, InternalLink } from "@atoms"
import { Branding } from "@molecules"
import { footerData } from "@data"

/**
 * Footer - Site-wide footer with branding, navigation, and contact
 *
 * FEATURES:
 * - Dark theme (bg-gray-700, white text)
 * - Responsive grid: 1 col (mobile) to 4 cols (desktop)
 * - Branding section from Branding molecule
 * - Multiple navigation groups from footerData
 * - Scroll to top button with smooth scroll
 * - Copyright notice
 *
 * DATA STRUCTURE (footerData):
 * - branding: { description }
 * - contact: { email, phone }
 * - navigation: [{ title, routes: [{ name, href }] }]
 * - copyright: string
 *
 * @example
 * // In root layout
 * <body>
 *   <Header />
 *   <main>{children}</main>
 *   <Footer />
 * </body>
 *
 * CLIENT COMPONENT: Uses window.scrollTo for scroll button
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#374151] text-white">
      <Section padding="none" className="py-20">
        <Container>
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-white/20">
            {/* Branding Column */}
            <div className="lg:col-span-2">
              <Branding branding={footerData.branding} />
              {footerData.contact && (
                <div className="mt-6 space-y-2">
                  <BaseText className="text-white/90 text-sm">
                    📧 {footerData.contact.email}
                  </BaseText>
                  <BaseText className="text-white/90 text-sm">
                    📞 {footerData.contact.phone}
                  </BaseText>
                </div>
              )}
            </div>

            {/* Navigation Columns */}
            {footerData.navigation.map((group) => (
              <div key={group.title}>
                <BaseText className="text-white font-semibold mb-4">
                  {group.title}
                </BaseText>
                <nav className="flex flex-col gap-3">
                  {group.routes.map((route) => (
                    <InternalLink
                      key={route.name}
                      href={route.href}
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {route.name}
                    </InternalLink>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-8 flex justify-between items-center">
            <BaseText className="text-white/80 text-sm">
              {footerData.copyright}
            </BaseText>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="bg-primary text-white w-10 h-10 rounded-full hover:bg-primary/80 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
              aria-label="Scroll to top"
            >
              ↑
            </button>
          </div>
        </Container>
      </Section>
    </footer>
  )
}
