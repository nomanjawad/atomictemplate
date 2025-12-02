/*
 * IconWithText.tsx
 * Created by Abdul Jabbar Gazi
 * Copyright (c) 2025 Skytech Solutions
 * All rights reserved
 */

import React from "react"

import { BaseText, Content, BaseImage, InternalLink } from "@atoms"
import { IconWithLabelProps } from "./IconWithLabel.types"

import styles from "./icon-with-label.module.css"

/**
 * IconWithLabel - Icon and text combination component
 *
 * USE CASES:
 * - Contact information (phone, email, address with icons)
 * - Feature lists (checkmark + feature text)
 * - Social media links (logo + platform name)
 * - Stats display (icon + metric)
 * - Menu items with icons
 * - Button labels with icons
 *
 * FEATURES:
 * - Horizontal layout with centered alignment
 * - Supports Lucide icons (recommended) and image sources
 * - Optional circular background wrapper for icon
 * - Customizable icon size, color, and wrapper styling
 * - Flexible text and layout options
 * - Optional link wrapping for entire component
 *
 * @param {string} label - Text content (required)
 *   - Displayed next to icon
 *   - Can be customized via labelOption
 *
 * @param {LucideIcon} icon - Lucide icon component (recommended)
 *   - Import from lucide-react: Phone, Mail, MapPin, etc.
 *   - Tree-shakeable, ~1KB per icon
 *   - Examples: Phone, Mail, Facebook, Check, Star
 *
 * @param {StaticImageData | string} image - Image/icon source (alternative)
 *   - Use for custom icons not in Lucide
 *   - Import from @icons: icoPhone, icoEmail, etc.
 *   - URL string for external images
 *   - Note: Use 'icon' prop for Lucide icons instead
 *
 * @param {number} width - Icon width in pixels (default: 20)
 *   - Typical sizes: 16 (small), 20 (default), 24 (medium), 32 (large)
 *   - Applies to both Lucide icons and images
 *
 * @param {number} height - Icon height in pixels (default: 20)
 *   - Typical sizes: 16 (small), 20 (default), 24 (medium), 32 (large)
 *   - Applies to images only (Lucide uses size prop)
 *
 * @param {string} iconColor - Icon color (default: "currentColor")
 *   - CSS color value: "#3b82f6", "rgb(59, 130, 246)"
 *   - Tailwind classes work: "text-primary", "text-blue-500"
 *   - Applies to Lucide icons only
 *
 * @param {BaseTextProps} labelOption - Text styling options
 *   - variant: primary/secondary/tertiary/accent
 *   - size: small/regular/large
 *   - weight: regular/semibold/bold
 *
 * @param {ContentProps} flexOption - Flex container options
 *   - gap: Spacing between icon and text
 *   - direction: Rarely changed (default: row)
 *
 * @param {string} href - Optional link URL
 *   - If provided, entire component becomes clickable link
 *   - Use for: Contact links, navigation items, external links
 *
 * @param {string} imgAltText - Alt text for image icons (default: "")
 *   - Important for accessibility
 *   - Only needed for 'image' prop, not Lucide icons
 *   - Describe icon meaning: "Phone icon", "Email icon"
 *
 * @param {boolean} isVisibleIconWrapper - Show background circle (default: false)
 *   - true: Adds circular background behind icon
 *   - false: Icon without background
 *   - Use for: Feature lists, stats, emphasized icons
 *
 * @param {string} iconWrapperBackgroundColor - Wrapper background color
 *   - CSS color value: "#3b82f6", "rgb(59, 130, 246)"
 *   - Tailwind doesn't work here (inline style)
 *   - Only applies if isVisibleIconWrapper=true
 *
 * @example
 * // Contact information with Lucide icon and link
 * import { Phone } from "lucide-react"
 * <IconWithLabel
 *   icon={Phone}
 *   label="+1 (234) 567-8900"
 *   href="tel:+12345678900"
 * />
 *
 * @example
 * // Email link with custom color
 * import { Mail } from "lucide-react"
 * <IconWithLabel
 *   icon={Mail}
 *   label="contact@example.com"
 *   href="mailto:contact@example.com"
 *   iconColor="#3b82f6"
 * />
 *
 * @example
 * // Feature list with styled text
 * import { Check } from "lucide-react"
 * <IconWithLabel
 *   icon={Check}
 *   label="24/7 Customer Support"
 *   labelOption={{ variant: "primary", weight: "semibold" }}
 *   iconColor="#10b981"
 * />
 *
 * @example
 * // With circular background wrapper
 * import { Mail } from "lucide-react"
 * <IconWithLabel
 *   icon={Mail}
 *   label="contact@example.com"
 *   width={24}
 *   isVisibleIconWrapper={true}
 *   iconWrapperBackgroundColor="#3b82f6"
 *   iconColor="white"
 * />
 *
 * @example
 * // Social media link
 * import { Twitter } from "lucide-react"
 * <IconWithLabel
 *   icon={Twitter}
 *   label="Follow us on Twitter"
 *   href="https://twitter.com/yourhandle"
 *   labelOption={{ variant: "accent" }}
 *   flexOption={{ gap: "md" }}
 * />
 *
 * @example
 * // Stats display with larger icon
 * import { Users } from "lucide-react"
 * <IconWithLabel
 *   icon={Users}
 *   label="1000+ Customers"
 *   width={32}
 *   labelOption={{ variant: "primary", size: "large", weight: "bold" }}
 *   isVisibleIconWrapper={true}
 *   iconWrapperBackgroundColor="#10b981"
 *   iconColor="white"
 * />
 *
 * @example
 * // Using custom image (fallback)
 * import { icoCustomLogo } from "@icons"
 * <IconWithLabel
 *   image={icoCustomLogo}
 *   label="Custom Brand"
 *   imgAltText="Custom logo"
 * />
 *
 * STYLING:
 * - Uses CSS modules: icon-with-label.module.css
 * - .icon_with_label: Base styles
 * - .icon_wrapper: Circular background (when visible)
 * - Flex with align="center" for vertical centering
 *
 * RESPONSIVE:
 * - Icon size fixed (doesn't scale)
 * - Text wraps naturally via BaseText
 * - Consider smaller icons on mobile (width={16})
 *
 * ACCESSIBILITY:
 * - Always provide imgAltText for icons
 * - Label text should be descriptive
 * - Works with keyboard navigation
 * - Screen readers announce icon alt + label
 *
 * COMMON PATTERNS:
 * 1. Contact info: <IconWithLabel icon={Phone} label="+1234567890" href="tel:+1234567890" />
 * 2. Features: <IconWithLabel icon={Check} label="Free Shipping" iconColor="#10b981" />
 * 3. Social: <IconWithLabel icon={Facebook} label="Facebook" href="/facebook" />
 * 4. Stats: <IconWithLabel icon={Star} label="5.0 Rating" width={24} />
 *
 * BEST PRACTICES:
 * - Prefer Lucide icons (tree-shakeable, consistent design)
 * - Keep icon size proportional to text (20px for regular text)
 * - Use consistent icon sizes across similar elements
 * - Use iconColor for theming instead of custom icon styles
 * - Use wrapper background sparingly (visual emphasis)
 * - Test color contrast for accessibility
 * - Only use 'image' prop for custom/brand icons not in Lucide
 *
 * AVAILABLE LUCIDE ICONS (1,400+):
 * - Contact: Phone, Mail, MapPin, Globe
 * - Social: Facebook, Twitter, Instagram, Linkedin, Youtube
 * - UI: Check, X, ChevronRight, Menu, Search, Home
 * - Business: Briefcase, Building, Users, TrendingUp, BarChart
 * - Actions: Download, Upload, Share, Heart, Star, Bookmark
 * - View all: https://lucide.dev/icons
 */
export default function IconWithLabel({
  label,
  image,
  icon: Icon,
  width = 20,
  height = 20,
  labelOption,
  flexOption,
  imgAltText = "",
  isVisibleIconWrapper = false,
  iconWrapperBackgroundColor,
  iconColor = "currentColor",
  href,
}: IconWithLabelProps) {
  const content = (
    <Content align="center" className={styles.icon_with_label} {...flexOption}>
      {(Icon || image) && (
        <div
          className={isVisibleIconWrapper ? styles.icon_wrapper : ""}
          style={{ backgroundColor: iconWrapperBackgroundColor }}
        >
          {Icon ? (
            <Icon size={width} color={iconColor} strokeWidth={2} />
          ) : (
            image && (
              <BaseImage
                src={image}
                alt={imgAltText}
                width={width}
                height={height}
              />
            )
          )}
        </div>
      )}
      <BaseText {...labelOption}>{label}</BaseText>
    </Content>
  )

  if (href) {
    return (
      <InternalLink href={href} className="block">
        {content}
      </InternalLink>
    )
  }

  return content
}
