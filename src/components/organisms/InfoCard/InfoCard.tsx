/*
 * InfoCard.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { BaseImage, InternalLink } from "@atoms"
import { TextBlock, PrimaryAction } from "@molecules"
import { InfoCardProps } from "./infoCard.types"

/**
 * InfoCard - Flexible card component with optional image, text, and link sections
 *
 * USE CASES: Feature cards, Team cards, Service cards, Blog previews, Product cards
 * FEATURES: Composable options-based config, link wrapper or button, all sections optional
 *
 * @param {InfoCardOption} options - Configuration object
 *   - options.imageSection: BaseImage props (src, alt, width, height, className, objectFit, priority)
 *   - options.textSection: TextBlock props (title, subTitle, description, className, titleProps, etc.)
 *   - options.link: Link configuration
 *     - link.href: URL to navigate to (required)
 *     - link.type: "wrap" | "button" (required)
 *       - "wrap": Wraps entire card, clickable anywhere
 *       - "button": Adds button with link at bottom
 *     - link.buttonText: Button label (required if type="button")
 *
 * @example
 * // Card with link wrap (entire card clickable)
 * <Content className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
 *   <InfoCard
 *     options={{
 *       imageSection: { src: icon, alt: "Icon", width: 64, height: 64 },
 *       textSection: {
 *         title: "Fast Performance",
 *         description: "Lightning-fast load times"
 *       },
 *       link: {
 *         href: "/features/performance",
 *         type: "wrap"
 *       }
 *     }}
 *   />
 * </Content>
 *
 * @example
 * // Card with button link
 * <Content className="p-6 bg-white rounded-lg shadow-md">
 *   <InfoCard
 *     options={{
 *       imageSection: { src: photo, alt: "John Doe" },
 *       textSection: {
 *         title: "John Doe",
 *         subTitle: "CEO & Founder",
 *         description: "Leading the company since 2020"
 *       },
 *       link: {
 *         href: "/team/john-doe",
 *         type: "button",
 *         buttonText: "View Profile"
 *       }
 *     }}
 *   />
 * </Content>
 *
 * @example
 * // Card without link (static display)
 * <Content className="p-6 bg-white rounded-lg shadow-md">
 *   <InfoCard
 *     options={{
 *       imageSection: { src: icon, alt: "Icon", width: 64, height: 64 },
 *       textSection: {
 *         title: "Feature Title",
 *         description: "Feature description"
 *       }
 *     }}
 *   />
 * </Content>
 */
export default function InfoCard({ options }: InfoCardProps) {
  const { imageSection, textSection, link } = options || {}

  // Card content (image + text)
  const cardContent = (
    <>
      {/* Image Section */}
      {imageSection?.src && (
        <BaseImage
          src={imageSection.src}
          alt={imageSection.alt || ""}
          className={imageSection.className}
          width={imageSection.width}
          height={imageSection.height}
          objectFit={imageSection.objectFit}
          priority={imageSection.priority}
        />
      )}

      {/* Text Section */}
      {textSection && (
        <TextBlock
          title={textSection.title || ""}
          subTitle={textSection.subTitle}
          description={textSection.description}
          options={{
            flex: { className: textSection.className },
            title: textSection.titleProps,
            subTitle: textSection.subTitleProps,
            description: textSection.descriptionProps,
          }}
        />
      )}

      {/* Button Link (only if type is "button") */}
      {link?.type === "button" && link.buttonText && (
        <PrimaryAction
          href={link.href}
          title={link.buttonText}
        />
      )}
    </>
  )

  // If link type is "wrap", wrap entire content with InternalLink
  if (link?.type === "wrap" && link.href) {
    return (
      <InternalLink href={link.href} className="block">
        {cardContent}
      </InternalLink>
    )
  }

  // Otherwise, render content without wrapper
  return <>{cardContent}</>
}
