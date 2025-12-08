# Changelog

All notable changes to AtomicTemplate will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0] - 2025-12-08

### Added

- **@atomictemplate/validations** - New validation package as core dependency
  - Pre-built Zod schemas for common data structures
  - Page schemas (HomePage, BlogPost, ContactPage, Gallery, etc.)
  - Custom validators (URL, email, image, phone)
  - TypeScript types auto-inferred from schemas
  - Works with Zod v3 and v4
- **Example validation files** - Learn how to create custom validators
  - `src/validations/example/product.schema.ts` - Comprehensive schema example
  - `src/data/example/product.data.ts` - Data file with validation
- **Updated README** - Added documentation for all core dependencies
  - @atomictemplate/validations usage guide
  - Zod usage examples
  - Zustand usage examples

### Changed

- CLI now removes `packages/` folder during project creation
- CLI now removes `release-slider.sh` during project creation
- Upgraded `@atomictemplate/slider` to v1.0.2
- Upgraded `zod` to v4.1.11

---

## [1.2.0] - 2025-12-05

### Added

- **@atomictemplate/slider** - Now included as a core dependency
  - Feature-rich carousel/slider component
  - Lazy loading with IntersectionObserver
  - Full keyboard navigation (Arrow keys, Home, End, PageUp, PageDown)
  - ARIA accessibility labels and screen reader support
  - Video/GIF/Lottie media support
  - Responsive breakpoint configuration
  - Marquee mode for infinite scrolling
  - Render props for custom styling (`renderSlide`, `renderImage`, `renderArrow`, `renderDot`)
  - GSAP-powered smooth animations
  - Framework-agnostic (works with Next.js, Vite, CRA, Remix)

### Changed

- **Next.js** upgraded to 16.0.7
- **React** upgraded to 19.2.1
- Slider component moved to standalone npm package `@atomictemplate/slider`
- Documentation reorganized - slider docs now in package

### Removed

- Inline slider component (replaced by `@atomictemplate/slider` package)
- `docs/03-components/slider.md` (moved to package)
- `docs/05-specifications/carousel-component-prd.md` (moved to package)

---

## [1.1.3] - 2025-11-28

### Added

- CLI tool `create-atomictemplate` for scaffolding new projects
- Automated npm publishing via GitHub Actions
- Release workflow with tag-based versioning

### Changed

- Improved documentation structure with 5 main categories
- Enhanced ESLint configuration with custom rules

---

## [1.1.0] - 2025-11-15

### Added

- Data-driven architecture documentation
- Migration guide for backend/CMS integration
- API data validation examples with Zod
- Quick reference card for data patterns

### Changed

- Reorganized documentation into categorized folders
- Updated component documentation with JSDoc

---

## [1.0.0] - 2025-10-01

### Added

- Initial release of AtomicTemplate
- Next.js 15 with App Router
- Atomic Design component structure (atoms, molecules, organisms, pages)
- Tailwind CSS 4 integration
- TypeScript 5.x support
- GSAP animation library
- Zustand state management
- Zod validation schemas
- ESLint + Prettier + Husky + Commitlint
- Jest testing configuration
- Comprehensive documentation (31 guides)

---

## Links

- [GitHub Repository](https://github.com/nomanjawad/atomictemplate)
- [npm Package (CLI)](https://www.npmjs.com/package/create-atomictemplate)
- [@atomictemplate/slider](https://www.npmjs.com/package/@atomictemplate/slider)
- [@atomictemplate/validations](https://www.npmjs.com/package/@atomictemplate/validations)
