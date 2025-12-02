# Custom-rules/file-naming-rules

## Simple name rules for files and folders.

### Highlights

- Components in `src/components/**` use `PascalCase` (except group folders: `atoms/` ,`molecules/`, `organisms/`, plus `pages/` and `layouts/`)
- Pages in `src/components/pages/**`:
  - File names end with `Page.tsx` (e.g., `HomePage.tsx`)
  - Do not use the `.page` token in file names
  - The component’s exported name should also end with `Page`
- Hooks in `src/hooks/**` use `useCamelCase` (e.g., `useFilter/useFilter.ts`)
- Everything else under `src/**` uses `kebab-case`
- `utility` folder: files end with `.utility.ts` (and only there)
- `.fetch.ts` files must live under a `www` folder
- Type endings:
  - Only `interfaces`: end with `.types.ts[x]`
  - Only `type` : recommended `.types.ts[x]`
  - Contain Both `interface/type` in one file: end with `.types.ts[x]`

### Why

- Consistency, predictable names and imports, easy to scan folders

### Examples

- Good
  - `src/components/pages/Home/HomePage.tsx`
  - `src/hooks/usePath/usePath.types.ts`
  - `src/utils/to-sentence-case.ts`
- Bad
  - `src/components/pages/Home/Home.page.tsx` (disallowed `.page` token)
  - `src/hooks/usepath/usepath.ts` (wrong case)
  - `src/utils/ToSentenceCase.ts` (Pascal in non‑component path)

### Config

- None. Rule key: `custom-rules/file-naming-rules`

### Note about page names

- This template enforces the `HomePage.tsx` style and disallows the legacy `*.page.tsx` token.
