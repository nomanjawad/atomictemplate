# Template Overview

A simple Next.js + TypeScript starter that helps you ship quickly and keep things tidy.

## What you get

- App Router setup in `src/app/`
- Atomic Design folders: `atoms/`, `molecules/`, `organisms/`, `layouts/`, `pages/`
- **Comprehensive component documentation** with JSDoc (hover in IDE for docs)
- Clear naming rules and folder structure
- Easy imports using path aliases
- `index.ts` files in folders for easy re‑exports
- Hybrid styling: Tailwind CSS + CSS Modules
- Shared styles and design tokens
- Commit checks for good messages
- Example page with full documentation

## How we work

- Keep files small and focused
- Use clear names and simple paths
- Export from `index.ts` so imports stay stable
- **Read component docs before using** (hover over component names)
- Follow architecture pattern: Section → Container → Content → Components

## Basics to remember

- Components use `PascalCase`, hooks use `useCamelCase`, everything else uses `kebab-case`
- Add `index.ts` in component and hook folders
- Pages use the `HomePage.tsx` style; do not use the legacy `.page.tsx` token
- **All components have JSDoc documentation** - hover in your IDE to see usage examples
- **Data flows one way**: Data Files → Page Components → Organisms → UI
- Never hardcode content - use data files from `@data`
- Use `Content` for flex layouts (flexible, semantic component)
- Use staticRoutes constants for internal links

## Documentation

- **Data Architecture**: See `./data-pattern-quick-reference.md` - **Essential!** Quick reference
- **Complete Guide**: See `./data-driven-architecture.md` - Full architecture explanation
- **Component Docs**: See `./component-documentation-guide.md` for all components
- **Example Page**: See `./example-page-guide.md` for complete page creation example
- **Data Layer**: See `./data-folder-guide.md` for data structure and usage
- **Backend Migration**: See `./migration-to-backend.md` for API/CMS setup
