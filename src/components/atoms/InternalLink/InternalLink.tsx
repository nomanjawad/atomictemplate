/*
 * InternalLink.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import React from "react"
import Link from "next/link"

import { InternalLinkProps } from "./InternalLink.types"

/**
 * InternalLink - Wrapper for Next.js Link component for internal navigation
 *
 * USE CASES:
 * - Navigation between pages within the application
 * - Menu items, navbar links, footer links
 * - Any internal route navigation
 * - Prefetches linked pages for faster navigation
 *
 * BENEFITS:
 * - Client-side navigation (no full page reload)
 * - Automatic prefetching on hover/viewport
 * - SEO-friendly with proper href attributes
 * - Works with Next.js routing system
 *
 * @param {string} href - Internal route path (e.g., "/about", "/blog/post-1")
 *   - Use staticRoutes from @constants for route consistency
 *   - Must start with "/" for root-relative paths
 *   - Supports dynamic routes: `/blog/${slug}`
 *
 * @param {string | number} fontSize - Font size (CSS value or number in px)
 * @param {string} className - Additional CSS classes for styling
 * @param {React.ReactNode} children - Link content (text, elements, etc.)
 *
 * @example
 * // Basic internal link
 * <InternalLink href="/about">About Us</InternalLink>
 *
 * @example
 * // With route constant
 * import { staticRoutes } from "@constants"
 * <InternalLink href={staticRoutes.CONTACT_US}>Contact</InternalLink>
 *
 * @example
 * // With custom styling
 * <InternalLink
 *   href="/blog"
 *   className="text-primary hover:underline"
 *   fontSize={18}
 * >
 *   Read Blog
 * </InternalLink>
 *
 * @example
 * // Dynamic route
 * <InternalLink href={`/blog/${post.slug}`}>
 *   {post.title}
 * </InternalLink>
 *
 * IMPORTANT:
 * - For external links (https://, mailto:, tel:), use ExternalLink component
 * - For anchor links on same page (#section), use regular <a> tag
 * - Always provide meaningful link text for accessibility
 *
 * SEO BENEFITS:
 * - Proper <a> tags with href for search engines
 * - No JavaScript required for initial render
 * - Follows standard HTML link structure
 */
export default function InternalLink({
  href,
  fontSize,
  className,
  children,
}: InternalLinkProps) {
  return (
    <Link href={href} className={className} style={{ fontSize: fontSize }}>
      {children}
    </Link>
  )
}
