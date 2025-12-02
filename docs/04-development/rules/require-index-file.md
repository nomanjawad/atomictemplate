# custom-rules/require-index-file

Require an `index.ts` (or `index.tsx`) in certain folders.

- Default folders: `src/components/**`, `src/hooks/**`
- Skips the `index.*` file itself

Why

- Short, stable import paths

Examples

- Good
  - `src/components/pages/Home/index.ts` re‑exports `HomePage.tsx`
  - `src/hooks/useFilter/index.ts` re‑exports the hook and types
- Bad
  - `HomePage.tsx` lives in a folder without `index.ts`

Config
In `eslint.config.mjs`:

```js
rules: {
  "custom-rules/require-index-file": [
    "error",
    { targets: ["src/components", "src/hooks"], exts: [".ts", ".tsx"] },
  ],
}
```
