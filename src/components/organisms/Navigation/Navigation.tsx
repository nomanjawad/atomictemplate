/*
 * Navigation.tsx
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

"use client"

import clsx from "clsx"
import { Menu } from "@molecules"
import { NavigationProps } from "./Navigation.types"

/**
 * Navigation - Responsive navigation wrapper for Menu component
 *
 * USE CASES: Header nav (desktop/mobile), Footer nav, Sidebar nav
 * FEATURES: Two variants, responsive visibility, click handlers, semantic nav element
 *
 * @param {MenuItem[]} items - Navigation items: [{ name, href }] (required)
 * @param {"desktop" | "mobile"} variant - Layout variant (default: "desktop")
 *   - desktop: Horizontal navbar, hidden on mobile (md:block)
 *   - mobile: Vertical menu, full width
 * @param {Function} onItemClick - Click handler, receives MenuItem
 * @param {string} className - Additional CSS classes
 *
 * @example
 * // Desktop nav
 * <Navigation items={headerData.navigation} variant="desktop" />
 *
 * @example
 * // Mobile menu with close
 * <Navigation
 *   items={headerData.navigation}
 *   variant="mobile"
 *   onItemClick={() => setIsMenuOpen(false)}
 * />
 */
export default function Navigation({
  items,
  variant = "desktop",
  onItemClick,
  className,
}: NavigationProps) {
  const isDesktop = variant === "desktop"

  return (
    <nav
      className={clsx(
        "w-fit",
        !isDesktop && "w-full",
        isDesktop && "hidden md:block",
        className
      )}
      role="navigation"
      aria-label={`${variant} navigation`}
    >
      <Menu
        items={items}
        orientation={isDesktop ? "horizontal" : "vertical"}
        variant={isDesktop ? "navbar" : "mobile"}
        onItemClick={onItemClick}
      />
    </nav>
  )
}
