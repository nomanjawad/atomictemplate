/*
 * NumberBadge.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import clsx from "clsx"

import { BaseText, Content } from "@atoms"
import { NumberBadgeProps } from "./number-badge.types"

import styles from "./number-badge.module.css"

/**
 * NumberBadge - Circular or square badge for displaying numbers
 *
 * USE CASES:
 * - Step indicators in multi-step forms
 * - Notification counts (unread messages, cart items)
 * - Timeline markers
 * - Numbered lists with styled badges
 * - Progress indicators
 * - Rank/position indicators
 *
 * FEATURES:
 * - Two shapes: circle (default) or square
 * - Filled or outlined styles
 * - Centered text alignment
 * - Returns empty fragment if number is null/undefined
 *
 * @param {number | string} number - Number to display (required)
 *   - Typically 1-99 for readability
 *   - Use 99+ for large numbers
 *   - Returns nothing if null or undefined
 *
 * @param {boolean} isFilled - Filled background style (default: true)
 *   - true: Solid background with light text
 *   - false: Outlined border with dark text
 *   - Adds .active_badge class when true
 *
 * @param {"circle" | "square"} shape - Badge shape (default: "circle")
 *   - "circle": Round badge (most common)
 *   - "square": Square with rounded corners
 *
 * @example
 * // Step indicator (filled circle)
 * <NumberBadge number={1} />
 *
 * @example
 * // Outlined badge
 * <NumberBadge number={2} isFilled={false} />
 *
 * @example
 * // Square badge
 * <NumberBadge number={3} shape="square" />
 *
 * @example
 * // Notification count
 * <NumberBadge number={5} isFilled shape="circle" />
 *
 * @example
 * // In a step indicator sequence
 * <Flex gap="medium">
 *   <NumberBadge number={1} isFilled />
 *   <NumberBadge number={2} isFilled={false} />
 *   <NumberBadge number={3} isFilled={false} />
 * </Flex>
 *
 * @example
 * // Timeline markers
 * <div className="timeline">
 *   <NumberBadge number={1} shape="circle" />
 *   <p>Company Founded</p>
 *   <NumberBadge number={2} shape="circle" />
 *   <p>First Product Launch</p>
 * </div>
 *
 * @example
 * // Conditional rendering
 * const unreadCount = 5
 * {unreadCount > 0 && <NumberBadge number={unreadCount} />}
 *
 * @example
 * // Large number display
 * const notifications = 127
 * <NumberBadge number={notifications > 99 ? "99+" : notifications} />
 *
 * STYLING:
 * - Uses CSS modules: number-badge.module.css
 * - .number_badge: Base styles
 * - .s-circle: Circular shape
 * - .s-square: Square shape
 * - .active_badge: Filled background style
 * - .align_text: Text centering
 *
 * SIZE:
 * - Default: ~40x40px (adjust in CSS)
 * - Text size scales with container
 * - Fixed dimensions for consistency
 *
 * COLORS:
 * - Filled: Primary color background, white text
 * - Outlined: Border color, dark text
 * - Customize in number-badge.module.css
 *
 * ACCESSIBILITY:
 * - Number is readable by screen readers
 * - Sufficient color contrast
 * - Consider aria-label for context:
 *   <div aria-label="Step 1 of 3"><NumberBadge number={1} /></div>
 *
 * RESPONSIVE:
 * - Fixed size (doesn't scale)
 * - Works at all viewport sizes
 * - Consider smaller badges on mobile if needed
 *
 * BEST PRACTICES:
 * - Keep numbers short (1-2 digits ideal)
 * - Use consistent styling across similar badges
 * - Pair with descriptive text for context
 * - Use filled for active/current state
 * - Use outlined for inactive/upcoming state
 * - Test color contrast ratios
 *
 * COMMON PATTERNS:
 * 1. Steps: <NumberBadge number={step} isFilled={currentStep === step} />
 * 2. Notifications: <NumberBadge number={count} shape="circle" />
 * 3. Timeline: <NumberBadge number={index + 1} isFilled />
 */
export default function NumberBadge({
  number,
  isFilled = true,
  shape = "circle",
}: NumberBadgeProps) {
  if (number === undefined || number === null) return <></>

  return (
    <div
      className={clsx(
        styles.number_badge,
        styles[`s-${shape}`],
        isFilled && styles.active_badge
      )}
    >
      <Content justify="center" align="center">
        <BaseText className={styles.align_text}>{number}</BaseText>
      </Content>
    </div>
  )
}
