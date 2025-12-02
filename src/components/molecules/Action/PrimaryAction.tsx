/*
 * PrimaryAction.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { Content, InternalLink } from "@atoms"
import { ArrowRight } from "lucide-react"

import styles from "./primary-action.module.css"

/**
 * PrimaryAction - Call-to-action button/link with arrow indicator
 *
 * USE CASES:
 * - Hero section CTA buttons
 * - Card action links
 * - "Learn More" or "Read More" links
 * - Any primary action in a section
 *
 * FEATURES:
 * - Styled button appearance with link functionality
 * - Optional arrow icon indicator
 * - Consistent styling across application
 * - Hover effects and transitions
 *
 * @param {string} title - Button/link text (e.g., "Get Started", "Learn More")
 * @param {string} href - Internal route path
 *   - Use staticRoutes from @constants
 *   - Example: staticRoutes.CONTACT_US
 *
 * @param {boolean} isArrowVisible - Show arrow icon (default: true)
 *   - true: Shows right arrow indicator
 *   - false: Text only, no arrow
 *
 * @param {"internal" | "external"} linkType - Type of link (currently only internal supported)
 *   - Future: Will support external links
 *
 * @example
 * // Basic CTA with arrow
 * <PrimaryAction
 *   title="Get Started"
 *   href={staticRoutes.CONTACT_US}
 * />
 *
 * @example
 * // Without arrow icon
 * <PrimaryAction
 *   title="Learn More"
 *   href="/about"
 *   isArrowVisible={false}
 * />
 *
 * @example
 * // In a hero section
 * <Section>
 *   <h1>Welcome</h1>
 *   <p>Description</p>
 *   <PrimaryAction title="Get Started" href="/signup" />
 * </Section>
 *
 * @example
 * // In a card
 * <Card>
 *   <h3>Feature Title</h3>
 *   <p>Feature description</p>
 *   <PrimaryAction title="Learn More" href="/features" />
 * </Card>
 *
 * STYLING:
 * - Uses CSS modules (primary-action.module.css)
 * - Default: Primary color background, white text
 * - Hover: Slightly darker shade with scale effect
 * - Arrow: Right-pointing arrow icon (10x20px)
 *
 * ACCESSIBILITY:
 * - Semantic link element
 * - Keyboard accessible
 * - Clear action text
 * - Proper focus states
 *
 * CUSTOMIZATION:
 * To change styling:
 * 1. Edit primary-action.module.css
 * 2. Or add className prop (would need to add to interface)
 *
 * To change arrow icon:
 * 1. Update icoArrowRight import from @icons
 * 2. Or pass custom icon prop (would need to add to interface)
 */
interface PrimaryActionProps {
  title: string
  href: string
  isArrowVisible?: boolean
  linkType?: "internal" | "external"
}

export default function PrimaryAction({
  href,
  title,
  isArrowVisible = true,
}: PrimaryActionProps) {
  return (
    <Content className={styles.primary_action}>
      <InternalLink href={href}>{title}</InternalLink>
      {isArrowVisible && <ArrowRight className="w-4 h-5" />}
    </Content>
  )
}
