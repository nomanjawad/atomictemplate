# 🧩 Components

Learn how to use and create components in this template.

## Documentation

### Component Reference

- **[component-documentation-guide.md](component-documentation-guide.md)** - All components with JSDoc
  - Complete component API reference
  - Usage examples
  - Props documentation
  - Best practices

### Practical Guide

- **[example-page-guide.md](example-page-guide.md)** - Complete page creation example
  - Step-by-step page creation
  - Real-world examples
  - Section patterns
  - Data integration

---

## 🎯 Quick Start

### Using Existing Components

All components have **JSDoc documentation** - just hover over them in your IDE!

```tsx
import { Section, Container, Content } from "@atoms"
import { TextBlock, PrimaryAction } from "@molecules"
import { PageHeader, FaqSection } from "@organisms"
```

### Component Hierarchy

```
Atoms → Basic building blocks (Button, BaseText, BaseImage)
  ↓
Molecules → Simple combinations (TextBlock, InputField, IconWithLabel)
  ↓
Organisms → Complex sections (PageHeader, Gallery, Navigation)
  ↓
Pages → Full pages (HomePage, GalleryPage, ContactPage)
```

### Standard Layout Pattern

```tsx
<Section>
  {" "}
  {/* Full width, backgrounds, padding */}
  <Container>
    {" "}
    {/* Max-width (1280px), centered */}
    <Content>
      {" "}
      {/* Flex layout, styling */}
      <Components /> {/* Your content */}
    </Content>
  </Container>
</Section>
```

---

## 📚 Related Documentation

- **Architecture** → [data-driven-architecture.md](../02-architecture/data-driven-architecture.md)
- **Quick Reference** → [data-pattern-quick-reference.md](../02-architecture/data-pattern-quick-reference.md)
- **Getting Started** → [quick-start.md](../01-getting-started/quick-start.md)

---

## 💡 Tips

1. **Hover First** - All components have inline docs
2. **Check Examples** - See `src/components/pages/ExamplePage/`
3. **Follow Patterns** - Use Section → Container → Content
4. **Pass Data** - Components receive data via props
5. **Never Hardcode** - Content comes from data files

---

[← Back to Documentation Home](../README.md)
