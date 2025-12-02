/*
 * RouteIndicator.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */
"use client"

import { usePath } from "@hooks"
import { toCapitalize } from "@utils"
import { BaseText, Content, InternalLink } from "@atoms"

import styles from "./route-indicator.module.css"

/**
 * RouteIndicator - Breadcrumb navigation component
 *
 * USE CASES:
 * - Breadcrumb navigation showing current page path
 * - User location indicator within site hierarchy
 * - Easy navigation back to parent pages
 * - Improving site navigation and UX
 *
 * FEATURES:
 * - Automatically generates breadcrumbs from URL
 * - Converts kebab-case to Title Case
 * - Clickable links to all parent pages
 * - Current page shown in banner variant (active)
 * - Visual arrow separators between segments
 * - Home link always points to root (/)
 *
 * BEHAVIOR:
 * - URL: /about-us → "Home > About Us"
 * - URL: /blog/my-post → "Home > Blog > My Post"
 * - URL: /services/web-development → "Home > Services > Web Development"
 * - Current page text is highlighted (banner variant)
 * - Previous pages are clickable (disabled variant)
 *
 * PATH BUILDING:
 * - Index 0: Always "Home" linking to "/"
 * - Index 1: First segment "/about-us"
 * - Index 2: Second segment "/about-us/team"
 * - Builds cumulative paths for each segment
 *
 * @example
 * // Below page title
 * <Section bgColor="bg-gray-100" padding="lg">
 *   <Container>
 *     <Content direction="column" align="center" gap="md">
 *       <PageTitle />
 *       <RouteIndicator />
 *     </Content>
 *   </Container>
 * </Section>
 *
 * @example
 * // In page header
 * <header className="py-8">
 *   <Container>
 *     <RouteIndicator />
 *     <h1>Page Content</h1>
 *   </Container>
 * </header>
 *
 * VISUAL STRUCTURE:
 * ┌─────────────────────────────────┐
 * │ Home > Services > Web Dev       │
 * │  ↑        ↑           ↑         │
 * │ Link    Link      Current       │
 * └─────────────────────────────────┘
 *
 * DEPENDENCIES:
 * - usePath(): Gets current path segments from URL
 * - toCapitalize(): Converts "web-development" to "Web Development"
 * - InternalLink: Navigable links to parent pages
 * - BaseText: Styled text with variants
 *
 * HELPER FUNCTIONS:
 * - isDisabledLeaf(index): Returns true for clickable links (not current page)
 * - isVisibleArrow(index): Returns true when arrow separator should show
 * - getPath(index): Builds cumulative path up to index
 *
 * STYLING:
 * - Uses CSS modules: route-indicator.module.css
 * - .router_indicator: Container with padding and border radius
 * - .route_path: Individual breadcrumb segment
 * - Arrow SVG: Right-pointing arrow between segments
 * - Banner variant: White text for current page
 * - Disabled variant: Semi-transparent white for links
 *
 * RESPONSIVE:
 * - Wraps naturally on small screens
 * - Text may truncate on very long paths
 * - Consider horizontal scroll for very deep paths
 *
 * ACCESSIBILITY:
 * - Semantic navigation with links
 * - Clear visual hierarchy (current vs parent)
 * - Keyboard navigable
 * - Screen readers announce path structure
 * - Consider aria-label: "Breadcrumb navigation"
 *
 * SEO BENEFITS:
 * - Shows site structure to search engines
 * - Internal links improve crawlability
 * - Proper URL structure in links
 * - Helps users understand site hierarchy
 *
 * BEST PRACTICES:
 * - Use descriptive route names (not /page1)
 * - Keep path depth reasonable (3-4 levels max)
 * - Pair with PageTitle for context
 * - Test with long route names
 * - Ensure clickable areas are large enough
 * - Maintain color contrast for accessibility
 *
 * CUSTOMIZATION:
 * To change styling:
 * 1. Edit route-indicator.module.css
 * 2. Adjust padding, border-radius, colors
 * 3. Modify arrow SVG fill color
 *
 * To change separator:
 * 1. Replace SVG in isVisibleArrow() return
 * 2. Or use text: " / " or " » "
 *
 * COMMON PATTERNS:
 * 1. With PageTitle:
 *    <PageTitle />
 *    <RouteIndicator />
 *
 * 2. In dark section:
 *    <Section bgColor="bg-primary">
 *      <RouteIndicator />
 *    </Section>
 *
 * 3. Sticky breadcrumbs:
 *    <div className="sticky top-0 z-10">
 *      <RouteIndicator />
 *    </div>
 *
 * WHEN NOT TO USE:
 * - Home page (shows only "Home")
 * - Single-level pages (no parent context)
 * - When custom breadcrumbs needed
 * - Mobile apps (limited screen space)
 */
export default function RouteIndicator() {
  const { leafList } = usePath()

  const isDisabledLeaf = (index: number) => index != leafList.length - 1
  const isVisibleArrow = (index: number) =>
    leafList.length > 0 && index < leafList.length - 1

  function getPath(index: number): string {
    // Home always links to root
    if (index === 0) return "/"

    if (index >= leafList.length) index = leafList.length - 1

    // Build path from segments, filtering out empty strings
    // leafList[0] is always "" (root), so we slice from 1
    const parts = leafList.slice(1, index + 1).filter((part) => part !== "")

    // Return clean path without trailing slash (unless it's just "/")
    return parts.length > 0 ? "/" + parts.join("/") : "/"
  }

  return (
    <Content className={styles.router_indicator}>
      <Content>
        {leafList.map((path, index) => (
          <Content
            key={index}
            align="center"
            justify="center"
            gap="sm"
            className={styles.route_path}
          >
            <InternalLink href={getPath(index)}>
              <BaseText variant={isDisabledLeaf(index) ? "disabled" : "banner"}>
                {index == 0 ? "Home" : toCapitalize(path.replace("-", " "))}
              </BaseText>
            </InternalLink>
            {isVisibleArrow(index) && (
              <svg
                width="9"
                height="15"
                viewBox="0 0 7 11"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.02829 0.967324C0.988067 0.92716 0.956157 0.879481 0.934386 0.827006C0.912615 0.774531 0.90141 0.718288 0.90141 0.661489C0.90141 0.60469 0.912615 0.548448 0.934386 0.495973C0.956157 0.443497 0.988067 0.395817 1.02829 0.355654C1.06852 0.315492 1.11628 0.283633 1.16884 0.261897C1.2214 0.240161 1.27773 0.228974 1.33462 0.228974C1.39151 0.228974 1.44785 0.240161 1.50041 0.261897C1.55297 0.283633 1.60072 0.315492 1.64095 0.355654L5.97067 4.6784C6.01093 4.71855 6.04286 4.76623 6.06465 4.8187C6.08644 4.87118 6.09766 4.92743 6.09766 4.98424C6.09766 5.04105 6.08644 5.0973 6.06465 5.14977C6.04286 5.20225 6.01093 5.24993 5.97067 5.29007L1.64095 9.61282C1.55971 9.69393 1.44952 9.7395 1.33462 9.7395C1.21973 9.7395 1.10954 9.69393 1.0283 9.61282C0.947052 9.53171 0.90141 9.4217 0.90141 9.30699C0.90141 9.19228 0.947052 9.08226 1.0283 9.00115L5.05223 4.98424L1.02829 0.967324Z"
                  fill={
                    isDisabledLeaf(index + 1)
                      ? "rgba(255, 255, 255, 0.5)"
                      : "white"
                  }
                />
              </svg>
            )}
          </Content>
        ))}
      </Content>
    </Content>
  )
}
