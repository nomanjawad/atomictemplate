# 🏗️ Architecture

**Essential reading** for understanding how the project works!

## Core Documents

### ⭐⭐⭐ Must Read

- **[data-driven-architecture.md](data-driven-architecture.md)** - Complete architecture guide
  - How data flows through the app
  - Creating new pages
  - Schema validation
  - Best practices
  - Migration to API/CMS

### ⭐⭐ Quick Reference

- **[data-pattern-quick-reference.md](data-pattern-quick-reference.md)** - Quick lookup card
  - Create a page in 5 steps
  - Common patterns
  - Import aliases
  - Troubleshooting

### ⭐ Migration Guide

- **[migration-to-backend.md](migration-to-backend.md)** - How to migrate to API/CMS
  - Step-by-step migration
  - Service layer setup
  - Backend requirements
  - Testing & deployment

---

## Supporting Documentation

### Data Management

- **[data-folder-guide.md](data-folder-guide.md)** - Data layer organization
  - Folder structure
  - Multilingual support
  - Usage examples
  - Best practices

- **[api-data-validation-example.md](api-data-validation-example.md)** - Safe API validation
  - Why validation matters
  - Service layer patterns
  - Schema usage

### Changelog

- **[changelog-data-driven.md](changelog-data-driven.md)** - Implementation log
  - What changed
  - Why it changed
  - Before/after examples

---

## 🎯 Reading Path

### For New Developers

```
1. data-pattern-quick-reference.md (5 min) ⚡
2. data-driven-architecture.md (20 min) 📖
3. data-folder-guide.md (10 min) 📁
```

### For Backend Integration

```
1. data-driven-architecture.md → Understand current state
2. migration-to-backend.md → Migration strategy
3. api-data-validation-example.md → Safe patterns
```

---

## 💡 Key Concepts

**Data Flow Pattern**:

```
Data Files (src/data/)
  ↓ import
Page Components
  ↓ props
Organism Components
  ↓ render
User Interface
```

**Golden Rules**:

- ✅ Data flows ONE WAY
- ✅ Never hardcode content
- ✅ Components receive data via props
- ✅ Validate external data only

---

[← Back to Documentation Home](../README.md)
