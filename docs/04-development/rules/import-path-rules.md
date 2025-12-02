# custom-rules/import-path-rules

## Keep import paths clean and predictable using `absolute path system`

### What it checks

- Deep relative imports: warns when you go up too many folders (default: more than `../../`)
- Pages alias: import page components via `@pages`, not by long paths
- No `.page` imports: do not import files that use the old `.page` token

Good

- `import { HomePage } from "@pages"`
- `import { toCapitalize } from "@utils"`

Bad

- `import Home from "../../../../components/pages/Home/HomePage"`
- `import Home from "src/components/pages/Home/HomePage"`
- `import Home from "./Home.page"`

### Config (defaults shown)

```js
"custom-rules/import-path-rules": [
  "error",
  {
    maxRelativeUp: 2,
    pagesAlias: "@pages",
    pagesPath: "src/components/pages/",
    disallowDotPageImport: true,
  },
]
```
