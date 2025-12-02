/*
 * Header.tsx
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import clsx from "clsx"
import { BrandLogo, Menu, PrimaryAction } from "@molecules"
import { Navigation } from "@organisms"
import { Container, Content, Section, BaseImage } from "@atoms"
import { headerData } from "@data"
import { useNavbarStore } from "@store"
import { HeaderProps } from "./Header.types"
import { X } from "lucide-react"

/**
 * Header - Global site header with navigation and mobile menu
 *
 * FEATURES:
 * - Sticky positioning with auto-hide on scroll down
 * - Desktop horizontal nav (hidden on mobile)
 * - Animated mobile menu (GSAP slide animation)
 * - Shadow when scrolled, CTA button, navbar store integration
 *
 * STATE:
 * - isMenuOpen: Mobile menu toggle
 * - isStuck: Scroll shadow effect
 * - isVisible: From useNavbarStore (auto-hide)
 *
 * @param {MenuItem[]} menuItems - Navigation items (default: headerData.navigation)
 * @param {string} buttonText - CTA text (default: headerData.button.text)
 * @param {string} buttonHref - CTA link (default: headerData.button.href)
 * @param {string} className - Additional CSS classes
 *
 * @example
 * // In root layout
 * <body>
 *   <Header />
 *   <main>{children}</main>
 * </body>
 *
 * SCROLL BEHAVIOR:
 * - Scroll down: Header slides up (hidden)
 * - Scroll up: Header slides down (visible)
 * - Controlled by useNavbarStore
 */
export default function Header({
  menuItems = headerData.navigation,
  buttonText = headerData.button.text,
  buttonHref = headerData.button.href,
  className,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isStuck, setIsStuck] = useState(false)
  const isVisible = useNavbarStore((state) => state.isVisible)
  const menuRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    if (!menuRef.current) return

    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut",
      })
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      })
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsStuck(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      ref={headerRef}
      className={clsx(
        "sticky top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out bg-white",
        isStuck && "shadow-lg",
        !isVisible && "-translate-y-full opacity-0 pointer-events-none",
        className,
      )}
      style={{
        boxShadow: isStuck
          ? "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
          : "none",
      }}
      role="banner"
    >
      {/* Main Header Bar */}
      <Section padding="sm" className="bg-white">
        <Container>
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <div className="shrink-0">
              <BrandLogo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex grow justify-center">
              <Navigation items={menuItems} variant="desktop" />
            </div>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex gap-md items-center shrink-0">
              {/* Desktop CTA Button */}
              <div className="hidden md:block">
                <PrimaryAction title={buttonText} href={buttonHref} />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="block md:hidden p-xs hover:bg-gray-light/50 rounded transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" items={[]} />
                )}
              </button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mobile Menu Panel */}
      <div
        ref={menuRef}
        className="md:hidden absolute top-full left-0 w-full bg-linear-to-br from-primary to-secondary shadow-lg overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="py-lg px-md">
          <Content direction="column" align="center" gap="lg">
            <Navigation
              items={menuItems}
              variant="mobile"
              onItemClick={closeMenu}
            />
            <div onClick={closeMenu}>
              <PrimaryAction title={buttonText} href={buttonHref} />
            </div>
          </Content>
        </div>
      </div>
    </header>
  )
}
