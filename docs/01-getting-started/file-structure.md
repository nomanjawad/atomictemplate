# File Structure

> 📖 **For data architecture**: See [data-driven-architecture.md](./data-driven-architecture.md)

Top level

- `src/`: all app code
- `public/`: static files (images, icons, etc.)
- `docs/`: project docs
- `eslint-rules/`: local lint rules
- `.husky/`: git hooks
- `eslint.config.mjs`: ESLint setup
- `tsconfig.json`: TypeScript paths and options
- `next.config.ts`: Next.js setup

Inside `src/`

- `app/`: Next.js App Router (layout, page, error, loading, not‑found)
- `components/` (Atomic Design):
  - `atoms/`: smallest UI pieces (buttons, inputs, sections)
  - `molecules/`: small groups of atoms (cards, list items, form fields)
  - `organisms/`: larger sections built from molecules (headers, galleries, forms)
  - `pages/`: page components
    - File names end with `Page.tsx` (e.g., `HomePage.tsx`)
    - Do not use the `.page` token
    - Add `Home/index.ts` to export from the folder
    - **Import data from `@data` and pass to organisms via props**
  - `layouts/`: layout components (Header, Footer)
- `data/`: **centralized data files** (static data, translations)
  - `full-pages/`: page-specific data
  - `common/`: shared data (navbar, footer, FAQ, CTA)
  - `blog-post/`: blog content
  - `ar/`, `ru/`: translations
- `validations/`: Zod schemas and TypeScript types
  - `full-pages/`: page schemas
  - `common/`: shared schemas (banner, button, FAQ)
- `services/`: API/CMS service layer (future)
- `hooks/`: Global react hooks grouped by folder, e.g. `useFilter/`
- `utils/`: small helpers, e.g. `to-sentence-case.ts`
- `lib/`: libraries (validator, fetcher, animator)
- `styles/`: global CSS and design tokens
- `types/`: shared TypeScript types
- `constants/`: app routes, settings, color tokens
- `store/`: Zustand state management

Naming rules (plain English)

- Components use `PascalCase` for files and folders.
- Hooks start with `use` and use camelCase, e.g. `useFilter`.
- Everything else under `src/` uses `kebab-case`.
- Type files can end in `.interface.ts[x]` or `.type.ts[x]`.
- Add an `index.ts` inside component and hook folders to make imports simple.
