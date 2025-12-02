# 💻 Development

Technical guides for development workflow and best practices.

## Documentation

### Styling

- **[tailwind-integration.md](tailwind-integration.md)** - Hybrid styling approach
  - Tailwind CSS usage
  - CSS Modules integration
  - Design tokens
  - Best practices

### Code Organization

- **[imports.md](imports.md)** - Import aliases and barrel exports
  - Absolute path configuration
  - index.ts barrel files
  - Import conventions

- **[naming.md](naming.md)** - Naming conventions
  - File naming rules
  - Component naming
  - Variable naming

### Code Quality

- **[rules.md](rules.md)** - ESLint rules overview
  - Custom rules summary
  - Why these rules exist

- **[rules/](rules/)** - Detailed ESLint rule documentation
  - Individual rule explanations
  - Examples and rationale

---

## 🎯 Quick Reference

### Import Aliases

| Alias          | Path                       | Use For              |
| -------------- | -------------------------- | -------------------- |
| `@data`        | `src/data`                 | Import data files    |
| `@validations` | `src/validations`          | Import types/schemas |
| `@atoms`       | `src/components/atoms`     | Basic components     |
| `@molecules`   | `src/components/molecules` | Composite components |
| `@organisms`   | `src/components/organisms` | Complex sections     |
| `@pages`       | `src/components/pages`     | Page components      |
| `@layouts`     | `src/components/layouts`   | Layout components    |
| `@images`      | `public/images`            | Images               |
| `@icons`       | `public/icons`             | Icons                |
| `@utils`       | `src/utils`                | Utilities            |
| `@constants`   | `src/constants`            | Constants/routes     |
| `@services`    | `src/services`             | Service layer        |

### Naming Conventions

```
Components:     PascalCase     HomePage.tsx, Button.tsx
Hooks:          useCamelCase   useFilter.ts, useModal.ts
Files:          kebab-case     user-profile.ts, api-client.ts
Types:          PascalCase     UserProfile, ApiResponse
```

### Styling Approach

```tsx
// ✅ Tailwind for layout
<div className="flex items-center gap-4 p-6 bg-white rounded-lg">

// ✅ CSS Modules for complex styling
import styles from "./component.module.css"
<div className={styles.complexComponent}>

// ✅ Hybrid for best of both
<div className={clsx(styles.card, "shadow-lg hover:shadow-xl")}>
```

---

## 📚 Related Documentation

- **File Structure** → [file-structure.md](../01-getting-started/file-structure.md)
- **Architecture** → [data-driven-architecture.md](../02-architecture/data-driven-architecture.md)
- **Components** → [component-documentation-guide.md](../03-components/component-documentation-guide.md)

---

## 💡 Development Tips

1. **Use Aliases** - Import with `@atoms`, `@data`, etc.
2. **Follow Conventions** - PascalCase for components, kebab-case for files
3. **Barrel Exports** - Add `index.ts` in folders
4. **Tailwind First** - Use CSS Modules for complex styling only
5. **Lint Often** - Run `pnpm lint` to catch issues early

---

## 🛠️ Useful Commands

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Production build
pnpm lint             # Run ESLint
pnpm type-check       # TypeScript check
pnpm clean-cache      # Clean all caches
```

---

[← Back to Documentation Home](../README.md)
