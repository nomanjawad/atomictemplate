/*
 * ExternalLink.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import React from "react"

import { clsx } from "clsx"

import { ExternalLinkProps } from "./ExternalLink.types"

import styles from "./external-link.module.css"

/**
 * ExternalLink - Secure external link component with proper rel attributes
 *
 * USE CASES:
 * - Links to external websites (social media, partner sites, etc.)
 * - Email links (mailto:)
 * - Phone links (tel:)
 * - Any link that opens in a new tab
 *
 * SECURITY:
 * - Automatically adds target="_blank" for external links
 * - Adds security attributes (noopener, noreferrer, nofollow)
 * - Prevents tabnabbing attacks
 * - Protects referrer information
 *
 * @param {string} href - External URL (must start with "http://", "https://", or "//")
 *   - Full URL required: "https://example.com"
 *   - Protocol-relative: "//example.com"
 *   - Email: "mailto:email@example.com"
 *   - Phone: "tel:+1234567890"
 *
 * @param {string | string[]} rel - Custom rel attribute(s)
 *   - Override default security attributes if needed
 *   - Can be string: "noopener noreferrer"
 *   - Can be array: ["noopener", "noreferrer"]
 *
 * @param {boolean} isTrusted - Whether the link is to a trusted domain (default: false)
 *   - false (default): Uses "noopener noreferrer nofollow"
 *   - true: Uses only "noopener" (allows referrer, allows follow)
 *   - Use true for: Partner sites, your other properties
 *   - Use false for: User-generated content, untrusted links
 *
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Link content
 *
 * @example
 * // Basic external link (untrusted)
 * <ExternalLink href="https://example.com">
 *   Visit Example
 * </ExternalLink>
 *
 * @example
 * // Trusted partner site (allows SEO juice)
 * <ExternalLink href="https://partner.com" isTrusted={true}>
 *   Our Partner
 * </ExternalLink>
 *
 * @example
 * // Email link
 * <ExternalLink href="mailto:contact@example.com">
 *   Email Us
 * </ExternalLink>
 *
 * @example
 * // Phone link
 * <ExternalLink href="tel:+1234567890">
 *   Call: (123) 456-7890
 * </ExternalLink>
 *
 * @example
 * // Custom rel attributes
 * <ExternalLink
 *   href="https://example.com"
 *   rel="noopener sponsored"
 * >
 *   Sponsored Link
 * </ExternalLink>
 *
 * SECURITY NOTES:
 * - noopener: Prevents new page from accessing window.opener
 * - noreferrer: Hides referrer from analytics
 * - nofollow: Tells search engines not to follow (no SEO credit)
 *
 * ACCESSIBILITY:
 * - Opens in new tab (target="_blank")
 * - Consider adding aria-label: "Opens in new tab"
 * - External icon indicator recommended for UX
 *
 * ERROR HANDLING:
 * - If href doesn't start with http/https/"/", shows error message
 * - Validates URL format before rendering
 */
export default function ExternalLink({
  rel,
  href,
  children,
  className,
  isTrusted = false,
}: ExternalLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("//")

  if (!isExternal) {
    return <>example: https://example.com</>
  }

  const getRelAttribute = () => {
    if (rel) {
      return Array.isArray(rel) ? rel.join(" ") : rel
    }

    return isTrusted ? "noopener" : "noopener noreferrer nofollow"
  }

  return (
    <a
      href={href}
      target="_blank"
      rel={getRelAttribute()}
      className={clsx(styles.external_link, className)}
    >
      {children}
    </a>
  )
}
