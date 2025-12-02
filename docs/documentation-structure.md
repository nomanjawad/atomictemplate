<!--
  documentation-structure.md
  Visual guide to documentation organization
  Created by GitHub Copilot
  Copyright (c) 2025 skytechSolutions
  All rights reserved
-->

# 📂 Documentation Structure

Visual guide to the organized documentation folders.

---

## 📊 Folder Structure

```
docs/
│
├── README.md                          ← Start here! Main documentation index
├── docs-update-summary.md            ← Documentation update log
│
├── 01-getting-started/               🚀 NEW TO THE PROJECT? START HERE
│   ├── README.md                     ← Getting started index
│   ├── quick-start.md                ⭐ Get running in 5 minutes
│   ├── user-guide.md                 📚 Complete setup guide
│   ├── template-overview.md          📖 Atomic Design overview
│   └── file-structure.md             📁 Project organization
│
├── 02-architecture/                  🏗️ ESSENTIAL READING
│   ├── README.md                     ← Architecture index
│   ├── data-pattern-quick-reference.md  ⭐⭐ Quick reference card
│   ├── data-driven-architecture.md   ⭐⭐⭐ MUST READ - Complete guide
│   ├── migration-to-backend.md       ⭐ API/CMS migration guide
│   ├── data-folder-guide.md          📁 Data layer organization
│   ├── api-data-validation-example.md 🔒 Safe validation patterns
│   └── changelog-data-driven.md      📝 Implementation changelog
│
├── 03-components/                    🧩 COMPONENT USAGE
│   ├── README.md                     ← Components index
│   ├── component-documentation-guide.md  📚 All component APIs
│   └── example-page-guide.md         💡 Page creation example
│
├── 04-development/                   💻 DEVELOPMENT WORKFLOW
│   ├── README.md                     ← Development index
│   ├── tailwind-integration.md       🎨 Styling approach
│   ├── imports.md                    📦 Import aliases
│   ├── naming.md                     📝 Naming conventions
│   ├── rules.md                      ✅ ESLint overview
│   └── rules/                        📋 Detailed ESLint rules
│       ├── code-structure.md
│       ├── commits.md
│       ├── component-hook-name-match.md
│       ├── file-naming-rules.md
│       ├── heading-rules.md
│       ├── import-modules-rules.md
│       ├── import-path-rules.md
│       └── require-index-file.md
│
└── 05-specifications/                📋 PRODUCT SPECS
    ├── README.md                     ← Specifications index
    ├── prd.md                        📄 Product requirements
    ├── carousel-component-prd.md     🎠 Carousel spec
    └── ip-language-detection.md      🌍 Language detection spec
```

---

## 🎯 Quick Navigation by Category

### 01. 🚀 Getting Started

**Who**: New developers joining the project  
**When**: First day, onboarding  
**Goal**: Get up and running quickly

**Files**: 5 documents

- Quick start guide (5 min)
- Complete user guide (30 min)
- Template overview (10 min)
- File structure (10 min)

---

### 02. 🏗️ Architecture

**Who**: All developers (essential reading!)  
**When**: First week, before creating features  
**Goal**: Understand how the project works

**Files**: 7 documents

- Quick reference (5 min) ⚡
- Complete architecture (20 min) 📖
- Backend migration (15 min)
- Data organization (10 min)
- API validation (10 min)
- Implementation log

**⭐ Priority**: This is the **most important** category!

---

### 03. 🧩 Components

**Who**: Developers creating UI  
**When**: When building pages/features  
**Goal**: Learn component usage and creation

**Files**: 3 documents

- Component API reference
- Page creation example
- Usage patterns

---

### 04. 💻 Development

**Who**: All developers  
**When**: Daily development  
**Goal**: Follow best practices and conventions

**Files**: 12 documents (4 main + 8 rule details)

- Styling guide
- Import conventions
- Naming rules
- ESLint configuration

---

### 05. 📋 Specifications

**Who**: Product managers, developers planning features  
**When**: Before implementing new features  
**Goal**: Understand requirements and scope

**Files**: 4 documents

- Product requirements
- Component specifications
- Feature specifications

---

## 🗺️ Documentation Map

### By Developer Experience Level

#### 👶 Beginner (First Week)

```
Day 1: 01-getting-started/quick-start.md
Day 1: 02-architecture/data-pattern-quick-reference.md
Day 2: 02-architecture/data-driven-architecture.md ⭐⭐⭐
Day 3: 03-components/component-documentation-guide.md
Day 4: 03-components/example-page-guide.md
Day 5: Build your first page!
```

#### 🧑‍💻 Intermediate (First Month)

```
Week 1: All getting started + architecture docs
Week 2: Component patterns and development workflow
Week 3: Advanced patterns and optimization
Week 4: Backend integration planning
```

#### 🚀 Advanced (Backend Integration)

```
1. 02-architecture/migration-to-backend.md
2. 02-architecture/api-data-validation-example.md
3. 02-architecture/data-driven-architecture.md (review)
4. Implement service layer
```

---

## 📊 Documentation Statistics

| Category        | Files  | Total Lines | Priority     |
| --------------- | ------ | ----------- | ------------ |
| Getting Started | 5      | ~500        | High         |
| Architecture    | 7      | ~1500+      | **Critical** |
| Components      | 3      | ~700        | High         |
| Development     | 12     | ~400        | Medium       |
| Specifications  | 4      | ~300        | Low          |
| **Total**       | **31** | **~3400+**  | -            |

---

## 🎓 Reading Paths

### Path 1: "Just Get Me Started"

```
📖 5 minutes total
└── 01-getting-started/quick-start.md
```

### Path 2: "I Want to Understand Everything"

```
📖 60 minutes total
├── 01-getting-started/quick-start.md (5 min)
├── 01-getting-started/user-guide.md (15 min)
├── 02-architecture/data-pattern-quick-reference.md (5 min)
├── 02-architecture/data-driven-architecture.md (20 min) ⭐⭐⭐
└── 03-components/component-documentation-guide.md (15 min)
```

### Path 3: "I Need to Create a Page"

```
📖 30 minutes total
├── 02-architecture/data-pattern-quick-reference.md (5 min)
├── 02-architecture/data-driven-architecture.md (15 min)
└── 03-components/example-page-guide.md (10 min)
```

### Path 4: "I'm Migrating to Backend/CMS"

```
📖 45 minutes total
├── 02-architecture/data-driven-architecture.md (20 min)
├── 02-architecture/migration-to-backend.md (15 min)
└── 02-architecture/api-data-validation-example.md (10 min)
```

---

## 💡 Organization Principles

### Why Numbered Folders?

1. **Clear Order** - Obvious reading sequence
2. **Priority Visible** - More important = lower number
3. **Easy Sorting** - Consistent across all systems
4. **Beginner Friendly** - Clear path for new developers

### Why Categories?

1. **Task-Oriented** - Organized by what you want to do
2. **Reduced Overwhelm** - Small, focused groups
3. **Easy Discovery** - Related docs grouped together
4. **Clear Purpose** - Each folder has a specific goal

### Why README in Each Folder?

1. **Local Navigation** - Don't need to go back to root
2. **Context-Aware** - Explains what's in that folder
3. **Quick Reference** - Key info at a glance
4. **Better UX** - Smooth browsing experience

---

## 🔍 Finding What You Need

### By Question

| Question                    | Document                                                                                          |
| --------------------------- | ------------------------------------------------------------------------------------------------- |
| "How do I start?"           | [01-getting-started/quick-start.md](01-getting-started/quick-start.md)                            |
| "How does data flow?"       | [02-architecture/data-driven-architecture.md](02-architecture/data-driven-architecture.md) ⭐⭐⭐ |
| "How do I create a page?"   | [03-components/example-page-guide.md](03-components/example-page-guide.md)                        |
| "How do I use a component?" | [03-components/component-documentation-guide.md](03-components/component-documentation-guide.md)  |
| "How do I style?"           | [04-development/tailwind-integration.md](04-development/tailwind-integration.md)                  |
| "How do I migrate to API?"  | [02-architecture/migration-to-backend.md](02-architecture/migration-to-backend.md)                |
| "What are the rules?"       | [04-development/rules.md](04-development/rules.md)                                                |
| "What should we build?"     | [05-specifications/prd.md](05-specifications/prd.md)                                              |

### By Task

| Task                | Documents                                      |
| ------------------- | ---------------------------------------------- |
| Onboarding          | Getting Started (all) + Architecture Quick Ref |
| Building Features   | Architecture + Components                      |
| Code Review         | Development (all)                              |
| Planning            | Specifications (all)                           |
| Backend Integration | Architecture (migration docs)                  |

---

## 🎯 Success Metrics

A developer should be able to:

✅ **Find the right doc** in < 30 seconds  
✅ **Get started** in < 5 minutes  
✅ **Understand architecture** in < 30 minutes  
✅ **Create their first page** in < 1 hour  
✅ **Follow best practices** without asking

---

## 📝 Maintenance

### Adding New Documentation

1. **Choose the right folder** based on content type
2. **Create the document** following existing patterns
3. **Update folder README.md** with new doc link
4. **Update main README.md** if major addition
5. **Cross-reference** from related docs

### Updating Existing Documentation

1. **Edit the document** directly
2. **Update changelog** if major change
3. **Check cross-references** still work
4. **Update main README** if navigation changes

---

## 🤝 Contributing

When contributing to documentation:

1. Follow the **folder organization** principles
2. Use **consistent formatting** with existing docs
3. Include **code examples** where helpful
4. Add **cross-references** to related docs
5. Update **README files** when adding new docs

---

**Questions?** Start with [README.md](README.md) at the root!
