/*
 * ExampleHeroSection.tsx
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

/**
 * ============================================================================
 * EXAMPLE HERO SECTION - COMPONENT CREATION DOCUMENTATION
 * ============================================================================
 *
 * This file demonstrates how to create a section component with:
 * - Proper imports and data handling
 * - Layout structure (Section → Container → Content)
 * - Tailwind CSS styling
 * - TypeScript type safety
 * - Responsive design
 * - Accessibility features
 *
 *
 * SECTION COMPONENT BEST PRACTICES:
 * ----------------------------------
 *
 * 1. LAYOUT STRUCTURE:
 *    Section   → Full-width background wrapper
 *    Container → Max-width content container (1440px default)
 *    Content   → Flex layout for content organization
 *
 * 2. SPACING:
 *    - Use padding prop on Section for vertical spacing
 *    - Use gap prop on Content for internal spacing
 *    - Use margin utilities sparingly (prefer gap and padding)
 *
 * 3. RESPONSIVE DESIGN:
 *    - Mobile-first approach
 *    - Use Tailwind breakpoints: sm:, md:, lg:, xl:
 *    - Test on multiple screen sizes
 *
 * 4. ACCESSIBILITY:
 *    - Use semantic HTML elements
 *    - Include alt text for images
 *    - Ensure keyboard navigation
 *    - Test with screen readers
 *
 * 5. PERFORMANCE:
 *    - Use BaseImage for optimized images
 *    - Lazy load images below the fold
 *    - Minimize component re-renders
 *    - Use React.memo for expensive components
 */

import { Section, Container, Content } from "@atoms"
import { PrimaryAction } from "@molecules"
import { examplePageData } from "@data"

/**
 * ExampleHeroSection Component
 * -----------------------------
 * Main hero/banner section with title, description, CTAs, and badges
 *
 * FEATURES:
 * - Gradient background
 * - Centered text layout
 * - Primary and secondary buttons
 * - Trust badges
 * - Fully responsive
 *
 * DATA SOURCE:
 * - Imports from @data (examplePageData.hero)
 * - Can be modified to accept props for reusability
 *
 * LAYOUT:
 * - Section: Gradient background, extra-large padding
 * - Container: Centers content with max-width
 * - Content: Vertical flex layout with centered alignment
 *
 * @returns Hero section JSX
 */
export default function ExampleHeroSection() {
  // Import hero data from centralized data file
  const { hero } = examplePageData

  return (
    <Section
      bgColor="bg-linear-to-br from-primary/10 to-secondary/10"
      padding="2xl"
    >
      <Container>
        <Content
          direction="column"
          align="center"
          gap="lg"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Subtitle */}
          {hero.subtitle && (
            <p className="text-sm md:text-base font-semibold text-primary uppercase tracking-wider">
              {hero.subtitle}
            </p>
          )}

          {/* Main Title (H1) */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
            {hero.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed">
            {hero.description}
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            {/* Primary Button */}
            <PrimaryAction
              title={hero.primaryButton.text}
              href={hero.primaryButton.href}
            />

            {/* Secondary Button (Optional) */}
            {hero.secondaryButton && (
              <PrimaryAction
                title={hero.secondaryButton.text}
                href={hero.secondaryButton.href}
              />
            )}
          </div>

          {/* Trust Badges (Optional) */}
          {hero.badges && hero.badges.length > 0 && (
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-gray-200">
              {hero.badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700"
                >
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          )}
        </Content>
      </Container>
    </Section>
  )
}

/**
 * ============================================================================
 * STYLING GUIDE
 * ============================================================================
 *
 * TEXT SIZING (Responsive):
 * --------------------------
 * Subtitle:     text-sm md:text-base
 * Title (H1):   text-4xl md:text-5xl lg:text-6xl xl:text-7xl
 * Description:  text-lg md:text-xl lg:text-2xl
 * Body Text:    text-base md:text-lg
 * Small Text:   text-sm md:text-base
 *
 *
 * COLOR SYSTEM:
 * -------------
 * Primary Text:    text-gray-900 (main headings)
 * Secondary Text:  text-gray-700 (body text)
 * Muted Text:      text-gray-600 (descriptions)
 * Light Text:      text-gray-500 (captions)
 * Accent Text:     text-primary, text-secondary, text-accent
 *
 *
 * SPACING SCALE:
 * --------------
 * gap-2:  8px   (tight spacing)
 * gap-4:  16px  (standard spacing)
 * gap-6:  24px  (comfortable spacing)
 * gap-8:  32px  (loose spacing)
 * gap-12: 48px  (section spacing)
 *
 *
 * LAYOUT PATTERNS:
 * ----------------
 * Centered Content:
 *   className="max-w-4xl mx-auto text-center"
 *
 * Two-Column Layout:
 *   className="grid grid-cols-1 md:grid-cols-2 gap-8"
 *
 * Three-Column Grid:
 *   className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
 *
 * Flex Row with Gap:
 *   className="flex flex-wrap gap-4"
 *
 *
 * RESPONSIVE UTILITIES:
 * ---------------------
 * Hidden on Mobile:   hidden md:block
 * Hidden on Desktop:  block md:hidden
 * Mobile Full Width:  w-full md:w-auto
 * Stack on Mobile:    flex-col md:flex-row
 *
 * ============================================================================
 */

/**
 * ============================================================================
 * ALTERNATIVE IMPLEMENTATIONS
 * ============================================================================
 *
 * 1. WITH PROPS (REUSABLE):
 * -------------------------
 * interface Props {
 *   title: string
 *   description: string
 *   buttonText?: string
 *   buttonHref?: string
 * }
 *
 * export default function ExampleHeroSection({
 *   title,
 *   description,
 *   buttonText,
 *   buttonHref
 * }: Props) {
 *   return (section with props)
 * }
 *
 *
 * 2. WITH BACKGROUND IMAGE:
 * -------------------------
 * import { BaseImage } from "@atoms"
 *
 * <Section className="relative overflow-hidden">
 *   <div className="absolute inset-0 z-0">
 *     <BaseImage
 *       src={hero.backgroundImage}
 *       alt=""
 *       className="object-cover w-full h-full"
 *     />
 *     <div className="absolute inset-0 bg-black/50" />
 *   </div>
 *   <Container className="relative z-10">
 *     Content here
 *   </Container>
 * </Section>
 *
 *
 * 3. WITH ANIMATION:
 * ------------------
 * "use client"
 * import { useEffect, useRef } from "react"
 * import { gsap } from "gsap"
 *
 * export default function ExampleHeroSection() {
 *   const titleRef = useRef(null)
 *
 *   useEffect(() => {
 *     gsap.from(titleRef.current, {
 *       opacity: 0,
 *       y: 30,
 *       duration: 1,
 *       ease: "power3.out"
 *     })
 *   }, [])
 *
 *   return (
 *     section with ref={titleRef} on title
 *   )
 * }
 *
 *
 * 4. WITH VIDEO BACKGROUND:
 * -------------------------
 * <Section className="relative overflow-hidden">
 *   <video
 *     autoPlay
 *     loop
 *     muted
 *     playsInline
 *     className="absolute inset-0 w-full h-full object-cover"
 *   >
 *     <source src="/videos/hero.mp4" type="video/mp4" />
 *   </video>
 *   <div className="absolute inset-0 bg-black/40" />
 *   <Container className="relative z-10">
 *     Content here
 *   </Container>
 * </Section>
 *
 * ============================================================================
 */

/**
 * ============================================================================
 * ACCESSIBILITY CHECKLIST
 * ============================================================================
 *
 * ✅ Semantic HTML (section, h1, p, button, etc.)
 * ✅ Proper heading hierarchy (h1 → h2 → h3)
 * ✅ Alt text for images
 * ✅ Sufficient color contrast (WCAG AA minimum)
 * ✅ Keyboard navigable (all interactive elements)
 * ✅ Focus visible (outline on keyboard focus)
 * ✅ ARIA labels where needed
 * ✅ Responsive text sizing
 * ✅ Touch targets at least 44x44px
 * ✅ No information conveyed by color alone
 *
 * TESTING:
 * - Tab through all interactive elements
 * - Test with screen reader (VoiceOver, NVDA, JAWS)
 * - Check contrast with browser dev tools
 * - Test on mobile devices
 * - Verify with Lighthouse accessibility audit
 *
 * ============================================================================
 */
