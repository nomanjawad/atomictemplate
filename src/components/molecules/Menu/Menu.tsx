/*
 * Menu.tsx
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

"use client"

import { usePathname } from "next/navigation"
import clsx from "clsx"
import { BaseText, InternalLink } from "@atoms"
import { MenuProps } from "./Menu.types"

/**
 * Menu - Reusable navigation menu component
 *
 * @param {MenuItem[]} items - Array of menu items with title, url, optional icon/badge
 * @param {MenuOrientation} orientation - Layout direction: "horizontal" | "vertical" (default: "horizontal")
 * @param {MenuVariant} variant - Visual style: "navbar" | "sidebar" | "mobile" | "dropdown" (default: "navbar")
 * @param {string} activeUrl - Currently active URL (uses usePathname if not provided)
 * @param {function} onItemClick - Callback when menu item is clicked
 * @param {string} className - Additional classes for menu wrapper
 * @param {string} itemClassName - Additional classes for menu items
 * @param {string} activeClassName - Additional classes for active item
 *
 * @example
 * // Horizontal navbar menu
 * <Menu
 *   items={[
 *     { title: "Home", url: "/" },
 *     { title: "About", url: "/about" }
 *   ]}
 *   orientation="horizontal"
 *   variant="navbar"
 * />
 *
 * @example
 * // Vertical mobile menu with callback
 * <Menu
 *   items={menuItems}
 *   orientation="vertical"
 *   variant="mobile"
 *   onItemClick={(item) => console.log(item)}
 * />
 */
export default function Menu({
  items,
  orientation = "horizontal",
  variant = "navbar",
  activeUrl,
  onItemClick,
  className,
  itemClassName,
  activeClassName = "text-primary font-semibold",
}: MenuProps) {
  const pathname = usePathname()
  const currentPath = activeUrl || pathname

  const handleClick = (item: (typeof items)[0]) => {
    if (onItemClick) {
      onItemClick(item)
    }
  }

  const isActive = (url: string) => {
    if (url === "/") return currentPath === "/"
    return currentPath.startsWith(url)
  }

  const getTextVariant = () => {
    switch (variant) {
      case "navbar":
        return "primary" // Black text for navbar
      case "sidebar":
      case "mobile":
        return "primary"
      case "dropdown":
        return "secondary"
      default:
        return "primary"
    }
  }

  return (
    <nav
      className={clsx(
        "flex",
        orientation === "horizontal"
          ? "flex-row gap-8 items-center"
          : "flex-col gap-4 items-start",
        className
      )}
    >
      {items.map((item, index) => {
        const active = isActive(item.url)

        return (
          <div
            key={index}
            className={clsx(
              "relative transition-all duration-200",
              variant === "mobile" && "w-full text-center py-2",
              variant === "dropdown" &&
                "w-full hover:bg-gray-light/50 px-4 py-2 rounded",
              itemClassName
            )}
            onClick={() => handleClick(item)}
          >
            <InternalLink href={item.url}>
              <div
                className={clsx(
                  "flex gap-2 items-center",
                  variant === "mobile" ? "justify-center" : "justify-start"
                )}
              >
                {item.icon && <span className="shrink-0">{item.icon}</span>}

                <BaseText
                  variant={getTextVariant()}
                  className={clsx(
                    "transition-colors duration-200",
                    active && activeClassName,
                    !active && "hover:text-primary/80"
                  )}
                >
                  {item.title}
                </BaseText>

                {item.badge && (
                  <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold rounded-full bg-primary text-white">
                    {item.badge}
                  </span>
                )}
              </div>
            </InternalLink>
          </div>
        )
      })}
    </nav>
  )
}
