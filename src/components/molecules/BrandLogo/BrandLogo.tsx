/*
 * BrandLogo.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { InternalLink, BaseImage } from "@atoms"
import { staticRoutes } from "@constants"
import { logoImage } from "@images"

/**
 * BrandLogo - Company logo component with home page link
 *
 * USE CASES:
 * - Header/navbar branding
 * - Footer branding
 * - Email signatures
 * - Print materials
 *
 * FEATURES:
 * - Automatically links to homepage
 * - Fixed size: 80x80px (w-20 h-20)
 * - Responsive and optimized with Next.js Image
 * - Consistent branding across application
 *
 * CUSTOMIZATION:
 * To change the logo:
 * 1. Replace image in /public/images/
 * 2. Update import in /public/images/index.ts
 * 3. Update logoImage constant
 *
 * To change size:
 * 1. Update width/height props
 * 2. Update className (w-20 h-20)
 *
 * @example
 * // In header
 * <header>
 *   <BrandLogo />
 *   <Navigation />
 * </header>
 *
 * @example
 * // In footer
 * <footer>
 *   <BrandLogo />
 *   <FooterContent />
 * </footer>
 *
 * ACCESSIBILITY:
 * - Alt text: "amco enterprise" (update for your brand)
 * - Links to home page for easy navigation
 * - Keyboard accessible
 *
 * SEO BENEFITS:
 * - Links to homepage improves site structure
 * - Alt text provides context for search engines
 * - Consistent branding helps brand recognition
 *
 * BEST PRACTICES:
 * - Use SVG format for logo (scales better)
 * - Provide 2x resolution for retina displays
 * - Keep file size under 50KB
 * - Use transparent background (PNG/SVG)
 * - Ensure logo works on light and dark backgrounds
 */
export default function BrandLogo() {
  return (
    <InternalLink href={staticRoutes.HOME}>
      <BaseImage
        alt="amco enterprise"
        src={logoImage}
        width={80}
        height={80}
        className="w-20 h-20"
      />
    </InternalLink>
  )
}
