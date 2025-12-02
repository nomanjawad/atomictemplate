# Imports and index.ts files

## Absolute imports

- Set up in `tsconfig.json` with `baseUrl` and `paths`
- Common aliases:
  - `@/*` -> `src/*`
  - `@atoms` -> `src/components/atoms/index.ts`
  - `@molecules` -> `src/components/molecules/index.ts`
  - `@organisms` -> `src/components/organisms/index.ts`
  - `@layouts` -> `src/components/layouts/index.ts`
  - `@pages` -> `src/components/pages/index.ts`
  - `@data` -> `src/data/index.ts`
  - `@hooks` -> `src/hooks/index.ts`
  - `@utils` -> `src/utils/index.ts`
  - `@types` -> `src/types/index.ts`
  - `@constants` -> `src/constants/index.ts`
  - `@validations` -> `src/validations/index.ts`
  - `@store` -> `src/store/index.ts`
  - `@icons` -> `public/icons/index.ts`
  - `@images` -> `public/images/index.ts`
  - See `tsconfig.json` for the full list

### Guidelines

- Prefer absolute imports instead of long `../../` paths
- Import from a folder's `index.ts` to keep paths short and stable
- **All components are documented** - hover over imports to see JSDoc documentation

### Make an index file

- Put an `index.ts` in component and hook folders
- Re‑export what you want others to import

### Example: component

```ts
// src/components/pages/Home/index.ts
export { default as HomePage } from "./HomePage"
```

### Usage Examples

```ts
// Import pages
import { HomePage } from "@pages"

// Import atoms (all documented with JSDoc)
import {
  Button,
  BaseText,
  BaseImage,
  InternalLink,
  Section,
  Container,
  Content,
} from "@atoms"

// Import molecules (all documented with JSDoc)
import {
  BrandLogo,
  PrimaryAction,
  TextBlock,
  InputField,
  IconWithLabel,
  Menu,
} from "@molecules"

// Import organisms (all documented with JSDoc)
import { Navigation, InfoCard, Gallery } from "@organisms"

// Import layouts (all documented with JSDoc)
import { Header, Footer } from "@layouts"

// Import data
import { aboutData, serviceData, footerData } from "@data"

// Import constants
import { staticRoutes } from "@constants"

// Import utilities
import { toCapitalize } from "@utils"

// Import assets
import { logoImage } from "@images"
import { icoPhone, icoEmail } from "@icons"
```

💡 **Tip**: Hover over any imported component in your IDE to see full documentation with usage examples!

### Example: hook

```ts
// src/hooks/useFilter/index.ts
export * from "./useFilter.interface"
export { useFilter } from "./useFilter"
```

### Notes

- Keep `index.ts` small; only export what you need
- ESLint rule `require-index-file` checks that `index.ts` exists in `src/components/**` and `src/hooks/**`
