# Documentation Overview

Welcome to the Next.js + TypeScript starter template documentation!

All documentation is organized into **5 main categories** for easy navigation.

---

## 📂 Documentation Structure

### 01. 🚀 Getting Started

**Location**: `01-getting-started/`

Start here if you're new to the project!

- **[quick-start.md](01-getting-started/quick-start.md)** - Get running in 5 minutes ⭐
- **[user-guide.md](01-getting-started/user-guide.md)** - Complete setup and usage guide
- **[template-overview.md](01-getting-started/template-overview.md)** - Atomic Design overview
- **[file-structure.md](01-getting-started/file-structure.md)** - Project organization

---

### 02. 🏗️ Architecture

**Location**: `02-architecture/`

**Essential reading** for understanding how the project works!

- **[data-pattern-quick-reference.md](02-architecture/data-pattern-quick-reference.md)** - Quick reference card ⭐
- **[data-driven-architecture.md](02-architecture/data-driven-architecture.md)** - Complete architecture guide ⭐⭐⭐
- **[migration-to-backend.md](02-architecture/migration-to-backend.md)** - How to migrate to API/CMS
- **[data-folder-guide.md](02-architecture/data-folder-guide.md)** - Data layer organization
- **[api-data-validation-example.md](02-architecture/api-data-validation-example.md)** - Safe API validation patterns
- **[changelog-data-driven.md](02-architecture/changelog-data-driven.md)** - Architecture implementation log

---

### 03. 🧩 Components

**Location**: `03-components/`

Learn how to use and create components.

- **[component-documentation-guide.md](03-components/component-documentation-guide.md)** - All components with JSDoc
- **[example-page-guide.md](03-components/example-page-guide.md)** - Complete page creation example

---

### 04. 💻 Development

**Location**: `04-development/`

Technical guides for development workflow.

- **[tailwind-integration.md](04-development/tailwind-integration.md)** - Hybrid styling approach
- **[imports.md](04-development/imports.md)** - Absolute paths + index.ts files
- **[naming.md](04-development/naming.md)** - Naming conventions
- **[rules.md](04-development/rules.md)** - ESLint rules overview
- **[rules/](04-development/rules/)** - Detailed ESLint rule documentation

---

### 05. 📋 Specifications

**Location**: `05-specifications/`

Product requirements and feature specifications.

- **[prd.md](05-specifications/prd.md)** - Product requirements document
- **[carousel-component-prd.md](05-specifications/carousel-component-prd.md)** - Carousel component spec
- **[ip-language-detection.md](05-specifications/ip-language-detection.md)** - IP-based language detection spec

---

## 🎯 Quick Navigation by Task

### "I'm New Here"

1. Start with [quick-start.md](01-getting-started/quick-start.md)
2. Read [data-pattern-quick-reference.md](02-architecture/data-pattern-quick-reference.md) ⭐
3. Explore [data-driven-architecture.md](02-architecture/data-driven-architecture.md) ⭐⭐⭐
4. Check [user-guide.md](01-getting-started/user-guide.md)

### "I Want to Create a Page"

1. Read [data-pattern-quick-reference.md](02-architecture/data-pattern-quick-reference.md)
2. Follow [example-page-guide.md](03-components/example-page-guide.md)
3. Review [data-driven-architecture.md](02-architecture/data-driven-architecture.md)

### "I Need to Use Components"

1. Hover over components in IDE (JSDoc documentation)
2. Check [component-documentation-guide.md](03-components/component-documentation-guide.md)
3. See examples in [example-page-guide.md](03-components/example-page-guide.md)

### "I'm Migrating to Backend/CMS"

1. Read [migration-to-backend.md](02-architecture/migration-to-backend.md) ⭐
2. Review [data-driven-architecture.md](02-architecture/data-driven-architecture.md#migration-to-apicms)
3. Check [api-data-validation-example.md](02-architecture/api-data-validation-example.md)

### "I Need Styling Help"

1. Read [tailwind-integration.md](04-development/tailwind-integration.md)
2. Check existing components for patterns

### "I Have Questions About Structure"

1. Review [file-structure.md](01-getting-started/file-structure.md)
2. Check [template-overview.md](01-getting-started/template-overview.md)

---

## ⭐ Most Important Documents

| Priority | Document                                                                           | Why It's Important                       |
| -------- | ---------------------------------------------------------------------------------- | ---------------------------------------- |
| 🔥🔥🔥   | [data-driven-architecture.md](02-architecture/data-driven-architecture.md)         | **Essential!** Understand how data flows |
| 🔥🔥     | [data-pattern-quick-reference.md](02-architecture/data-pattern-quick-reference.md) | Quick lookup for data patterns           |
| 🔥🔥     | [quick-start.md](01-getting-started/quick-start.md)                                | Get running in 5 minutes                 |
| 🔥       | [component-documentation-guide.md](03-components/component-documentation-guide.md) | All component APIs                       |
| 🔥       | [migration-to-backend.md](02-architecture/migration-to-backend.md)                 | Future-proof for API/CMS                 |

---

## 🎓 Recommended Reading Order

### For Developers (First Week)

```
Day 1: quick-start.md → Set up project
Day 1: data-pattern-quick-reference.md → Learn core pattern
Day 2: data-driven-architecture.md → Deep understanding
Day 3: component-documentation-guide.md → Learn components
Day 4: example-page-guide.md → Create first page
Day 5: Build something!
```

### For Backend Integration

```
1. data-driven-architecture.md → Understand current state
2. migration-to-backend.md → Migration strategy
3. api-data-validation-example.md → Safe patterns
4. Start implementation
```

---

## 📖 Documentation Principles

This documentation follows these principles:

1. **Task-Oriented** - Organized by what you want to accomplish
2. **Progressive** - From beginner to advanced
3. **Cross-Referenced** - Easy to jump between related topics
4. **Example-Heavy** - Real code examples everywhere
5. **Future-Proof** - Covers migration to API/CMS

---

## 🤝 Contributing to Documentation

When adding new documentation:

1. **Choose the right folder**:
   - Getting started → Basic setup/orientation
   - Architecture → Data flow, patterns, structure
   - Components → Component usage and creation
   - Development → Technical development topics
   - Specifications → Product/feature specs

2. **Cross-reference related docs** - Help readers discover connected information

3. **Include examples** - Show, don't just tell

4. **Update this README** - Add your new doc to the relevant section

---

## 💡 Tips

- **Hover in IDE** - All components have JSDoc documentation
- **Check Examples** - See `src/components/pages/ExamplePage/` for complete patterns
- **Follow the Pattern** - Data Files → Page Components → Organisms → UI
- **Never Hardcode** - Content belongs in data files, not components

---

**Need help?** Start with [quick-start.md](01-getting-started/quick-start.md) and [data-pattern-quick-reference.md](02-architecture/data-pattern-quick-reference.md)!

Happy coding! 🎉
