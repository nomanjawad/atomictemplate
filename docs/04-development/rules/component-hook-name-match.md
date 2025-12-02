# Custom-rules/component-hook-name-match

##

### Keep the export name the same as the file name.

- Looks at `src/components/**` and `src/hooks/**`
- Ignores `index.ts` and `index.tsx`
- Components use `PascalCase`

```typescript
export default function BaseText() {
  return <></>
}
```

- hooks use `camelCase` start with `use`

```typescript
export default function useFilter() {}
```

- Pages use the `HomePage.tsx` style, so export `HomePage`

### Why

- Makes files easy to find and read

Examples

- Good
  - `src/components/pages/Home/HomePage.tsx` exports `HomePage`
  - `src/hooks/useFilter/useFilter.ts` exports `useFilter`
- Bad
  - `HomePage.tsx` exports `Home`
  - `useFilter.ts` exports `useListFilter`

### Config

- None. Rule key: `custom-rules/component-hook-name-match`
