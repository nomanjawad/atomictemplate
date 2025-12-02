/*
 * TextBlock.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { BaseText, Content } from "@atoms"
import { TextBlockProps } from "./text-block.types"

import styles from "./text-block.module.css"

/**
 * TextBlock - Structured text component with title, subtitle, and description
 *
 * USE CASES:
 * - Section headers with description
 * - Card content blocks
 * - Feature descriptions
 * - About/bio sections
 * - Any structured text content
 *
 * STRUCTURE:
 * ┌─────────────────┐
 * │ Title (large)   │  ← Required, main heading
 * │ Subtitle        │  ← Optional, supporting text
 * │ Description     │  ← Optional, body text (muted)
 * └─────────────────┘
 *
 * @param {string} title - Main heading text (required)
 *   - Usually larger, bold text
 *   - Can customize via options.title
 *
 * @param {string} subTitle - Optional supporting text
 *   - Displayed between title and description
 *   - Can customize via options.subTitle
 *
 * @param {string} description - Optional body text
 *   - Displayed in tertiary/muted color
 *   - Can customize via options.description
 *
 * @param {TextBlockOptions} options - Styling options for all text elements
 *   - options.flex: Flex container props (gap, align, etc.)
 *   - options.title: BaseText props for title (variant, size, weight)
 *   - options.subTitle: BaseText props for subtitle
 *   - options.description: BaseText props for description
 *
 * @example
 * // Basic usage
 * <TextBlock
 *   title="Our Mission"
 *   description="We help businesses grow through technology."
 * />
 *
 * @example
 * // With all fields
 * <TextBlock
 *   title="Welcome"
 *   subTitle="Building the Future"
 *   description="Join us on our journey to create amazing products."
 * />
 *
 * @example
 * // With custom styling
 * <TextBlock
 *   title="Get Started"
 *   description="Begin your journey today"
 *   options={{
 *     title: { variant: "accent", size: "large", weight: "bold" },
 *     description: { variant: "secondary" },
 *     flex: { gap: "large", align: "center" }
 *   }}
 * />
 *
 * @example
 * // In a section header
 * <Section>
 *   <Container>
 *     <TextBlock
 *       title="Our Services"
 *       subTitle="What We Offer"
 *       description="Comprehensive solutions for your business needs"
 *     />
 *   </Container>
 * </Section>
 *
 * @example
 * // In a card
 * <Card>
 *   <TextBlock
 *     title="Web Development"
 *     description="Custom websites tailored to your needs"
 *   />
 * </Card>
 *
 * STYLING:
 * - Default: Vertical flex layout (column)
 * - Title: Default BaseText styling (customizable)
 * - Subtitle: Default BaseText styling (customizable)
 * - Description: Tertiary variant (muted gray)
 * - Uses CSS modules for base styling
 *
 * CUSTOMIZATION OPTIONS:
 * - Text variants: primary, secondary, tertiary, accent, banner
 * - Text sizes: small, regular, large
 * - Text weights: regular, semibold, bold
 * - Flex options: direction, gap, align, justify
 *
 * ACCESSIBILITY:
 * - Use semantic headings when appropriate
 * - Ensure color contrast meets WCAG standards
 * - Keep text readable (not too small)
 *
 * RESPONSIVE:
 * - Text sizes can be adjusted via options
 * - Consider using responsive text sizes for mobile
 * - Gap spacing adjusts with flex props
 *
 * BEST PRACTICES:
 * - Keep titles concise (1-7 words)
 * - Subtitles should provide context (optional)
 * - Descriptions should be scannable (2-3 sentences)
 * - Use consistent styling across similar TextBlocks
 * - Don't nest TextBlocks (use separate instances)
 */
export default function TextBlock({
  title,
  options,
  subTitle,
  description,
}: TextBlockProps) {
  return (
    <Content direction="column" {...options?.flex} className={styles.text_block}>
      <BaseText {...options?.title}>{title}</BaseText>
      {subTitle && <BaseText {...options?.subTitle}>{subTitle}</BaseText>}

      {description && (
        <BaseText variant="tertiary" {...options?.description}>
          {description}
        </BaseText>
      )}
    </Content>
  )
}
