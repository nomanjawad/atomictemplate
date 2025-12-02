# Next.js + TypeScript Production Template

> A production-ready Next.js starter with Atomic Design, comprehensive component documentation, and best practices built-in.

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38bdf8)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19.2.0-61dafb)](https://react.dev/)

```
Created by Noman Jawad
Copyright (c) 2025 noman_jawad
All rights reserved
```

---

## ✨ Features

- 🎨 **Atomic Design Architecture** - Organized components (atoms, molecules, organisms, layouts, pages)
- 📚 **Comprehensive JSDoc Documentation** - All components fully documented with usage examples
- 🎯 **Hybrid Styling** - Tailwind CSS + CSS Modules for maximum flexibility
- 🚀 **Next.js 15 App Router** - Server Components, streaming, and parallel routes
- 📦 **TypeScript** - Full type safety with strict mode
- 🎭 **Design Tokens** - Centralized colors, spacing, typography, shadows
- 🔗 **Absolute Imports** - Clean imports with `@atoms`, `@molecules`, `@data`, etc.
- 🌐 **Multilingual Ready** - Data structure supports EN, RU, AR translations
- ✅ **Validation Layer** - Zod schemas for runtime type checking
- 🎬 **GSAP Animations** - Smooth, performant animations
- 📝 **Git Hooks** - Conventional commits with Commitlint
- 🧪 **Testing Ready** - Jest configuration included
- 🎯 **ESLint + Custom Rules** - Enforce best practices automatically

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd skytech_node_template

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

### Your First Page

```tsx
// src/components/pages/MyPage/MyPagePage.tsx
import { Section, Container, Content } from "@atoms"
import { TextBlock, PrimaryAction } from "@molecules"
import { staticRoutes } from "@constants"

export default function MyPagePage() {
  return (
    <Section bgColor="bg-gray-50" className="py-20">
      <Container padding="lg">
        <Content direction="column" gap="lg" align="center">
          <TextBlock
            title="Welcome to My Page"
            description="This is a simple page using documented components"
          />
          <PrimaryAction title="Get Started" href={staticRoutes.CONTACT_US} />
        </Content>
      </Container>
    </Section>
  )
}
```

## 📖 Documentation

### Essential Guides

| Guide                                                                | Description                          |
| -------------------------------------------------------------------- | ------------------------------------ |
| **[Quick Start](docs/QUICK-START.md)**                               | 5-minute guide to get up and running |
| **[Component Documentation](docs/COMPONENT-DOCUMENTATION-GUIDE.md)** | All components with usage examples   |
| **[Example Page Guide](docs/EXAMPLE-PAGE-GUIDE.md)**                 | Complete page creation walkthrough   |
| **[User Guide](docs/user-guide.md)**                                 | Comprehensive setup and usage        |
| **[Data Layer Guide](docs/data-folder-guide.md)**                    | How to use the data layer            |
| **[Tailwind Integration](docs/tailwind-integration.md)**             | Hybrid styling approach              |

### Reference

- [Template Overview](docs/template-overview.md) - Atomic Design overview
- [File Structure](docs/file-structure.md) - Project organization
- [Imports Guide](docs/imports.md) - Absolute paths and aliases
- [ESLint Rules](docs/rules.md) - Custom linting rules
- [Naming Conventions](docs/naming.md) - Naming standards

> 💡 **Tip**: All components have inline JSDoc documentation. Hover over any component in your IDE to see full documentation!

## 🏗️ Architecture

### Component Structure

```
Section → Container → Content → Components
   ↓          ↓          ↓          ↓
Full     Max-width   Flex      Your
width    centered    layout    content
```

### Atomic Design Layers

```
src/components/
├── atoms/          # Basic building blocks (Button, Text, Link)
├── molecules/      # Simple combinations (Card, InputField, Menu)
├── organisms/      # Complex components (Navigation, Gallery)
├── layouts/        # Page layouts (Header, Footer)
└── pages/          # Page components (HomePage, AboutPage)
```

### File Organization

```
src/
├── app/                  # Next.js App Router
├── components/           # All UI components (Atomic Design)
├── data/                 # Static data (EN, RU, AR translations)
├── hooks/                # Custom React hooks
├── lib/                  # Core libraries (animator, fetcher, validator)
├── services/             # API services
├── store/                # Zustand state management
├── styles/               # Global styles and tokens
├── types/                # TypeScript types
├── utils/                # Utility functions
└── validations/          # Zod schemas
```

## 🎨 Styling

This template uses a **hybrid approach**:

- **Tailwind CSS** - Layout, spacing, responsive utilities
- **CSS Modules** - Complex component-specific styles

```tsx
// Simple layout - use Tailwind
<div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">
  <Button>Click Me</Button>
</div>

// Complex styling - use CSS Modules
<div className={styles.complexCard}>
  <h3 className={styles.title}>Title</h3>
</div>
```

**Design Tokens Available:**

- Colors: `bg-primary`, `text-fg-primary`, `border-border-accent`
- Spacing: `p-lg`, `gap-md`, `py-20`
- Shadows: `shadow-small`, `shadow-medium`, `shadow-large`
- Typography: `text-lg`, `font-urbanist`

See [Tailwind Integration Guide](docs/tailwind-integration.md) for details.

## 📦 Import Aliases

All imports use absolute paths for clean, maintainable code:

```typescript
import { Button, BaseText, Section, Container, Content } from "@atoms"
import { TextBlock, InputField, IconWithLabel } from "@molecules"
import { Navigation, InfoCard, Gallery } from "@organisms"
import { Header, Footer } from "@layouts"
import { staticRoutes } from "@constants"
import { aboutData, serviceData } from "@data"
import { toCapitalize } from "@utils"
import { logoImage } from "@images"
import { icoPhone, icoEmail } from "@icons"
```

## 🧩 Component Examples

### Layout Pattern

```tsx
<Section bgColor="bg-gray-50" className="py-20">
  <Container padding="lg">
    <Content direction="column" gap="md">
      {/* Your content */}
    </Content>
  </Container>
</Section>
```

### Hero Section

```tsx
<Section
  bgColor="bg-linear-to-br from-primary to-accent"
  className="min-h-screen py-20"
  align="center"
>
  <Container>
    <Content direction="column" align="center" gap="lg">
      <TextBlock title="Welcome" description="Your amazing tagline" />
      <PrimaryAction title="Get Started" href="/contact" />
    </Content>
  </Container>
</Section>
```

### Contact Form

```tsx
const [name, setName] = useState("")
const [email, setEmail] = useState("")

<Content direction="column" gap="md">
  <InputField
    name="name"
    label="Name"
    setValue={setName}
  />
  <InputField
    name="email"
    type="email"
    label="Email"
    setValue={setEmail}
  />
  <Button type="submit">Submit</Button>
</Content>
```

## 🛠️ Available Scripts

```bash
# Development
pnpm dev          # Start dev server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm test         # Run tests

# Package Management
pnpm packages     # Install and organize dependencies
```

## 📋 Best Practices

### ✅ DO

- Hover over components in IDE to see documentation
- Use `Content` for layouts (not deprecated `Flex`)
- Use `staticRoutes` constants for internal links
- Follow Section → Container → Content pattern
- Use Tailwind for layout, CSS Modules for complex styles
- Check existing components before creating new ones
- Add JSDoc documentation to new components
- Keep components small and focused

### ❌ DON'T

- Use hardcoded routes (use `staticRoutes`)
- Skip the Container component (breaks max-width)
- Use deprecated `Flex` component (use `Content`)
- Create deep import paths (use barrel exports)
- Mix layout concerns incorrectly

## 🎯 Component Documentation

Every component is documented with:

- **Purpose** - What it does and when to use it
- **Props** - All parameters with types and defaults
- **Examples** - Multiple usage examples (basic to advanced)
- **Features** - Key capabilities and behaviors
- **Best Practices** - Recommended patterns

**To see documentation**: Hover over any component name in your IDE!

### Example: TextBlock

```tsx
/**
 * TextBlock - Structured text with title, subtitle, and description
 *
 * @param {string} title - Main heading text (required)
 * @param {string} subTitle - Optional supporting text
 * @param {string} description - Optional body text
 *
 * @example
 * <TextBlock
 *   title="Our Mission"
 *   description="We help businesses grow"
 * />
 */
```

## 🌐 Multilingual Support

Data structure supports multiple languages:

```typescript
// English (default)
import { aboutData } from "@data"

// Russian
import { aboutData } from "@data/ru/full-pages/about"

// Arabic
import { aboutData } from "@data/ar/full-pages/about"
```

## 📝 Commit Conventions

This template uses Conventional Commits with Commitlint:

```bash
feat(home): add hero section
fix(button): correct hover state
docs(readme): update installation steps
style(header): improve responsive layout
refactor(utils): simplify date formatter
```

## 🔧 Technologies

### Core

- **Next.js 15.5.4** - React framework with App Router
- **React 19.2.0** - UI library with Server Components
- **TypeScript 5.9.3** - Type safety
- **Tailwind CSS 4.1.17** - Utility-first CSS

### Animation & Interaction

- **GSAP 3.12.5** - Professional animation library
- **Framer Motion 11.15.0** - React animation library
- **React Swipeable 7.0.2** - Touch gestures

### State & Data

- **Zustand 5.0.2** - Lightweight state management
- **Zod 3.24.1** - Runtime validation
- **Axios 1.7.9** - HTTP client

### Development Tools

- **ESLint 9+** - Code linting with custom rules
- **Prettier** - Code formatting
- **Commitlint** - Commit message linting
- **Husky** - Git hooks
- **Jest** - Testing framework

## 📚 Example Pages

The template includes complete example pages:

- **Home Page** - Landing page with hero, features, gallery
- **About Page** - Company information
- **Contact Page** - Contact form with validation
- **Example Page** - Comprehensive documentation example
- **Services Pages** - Dynamic service pages
- **Gallery Page** - Image gallery with filters

## 🤝 Contributing

1. Follow the [Naming Conventions](docs/naming.md)
2. Use [Conventional Commits](docs/commits.md)
3. Add JSDoc documentation to components
4. Update relevant documentation
5. Test your changes (`pnpm build` and `pnpm test`)

## 📄 License

All rights reserved - Created by Dewan Meadown (c) 2025

## 🆘 Support

### Getting Help

1. Check the [Quick Start Guide](docs/QUICK-START.md)
2. Read the [Component Documentation](docs/COMPONENT-DOCUMENTATION-GUIDE.md)
3. Review the [Example Page](docs/EXAMPLE-PAGE-GUIDE.md)
4. Hover over components in IDE for inline docs

### Common Issues

**Import errors**: Check [Imports Guide](docs/imports.md) for correct aliases  
**Styling issues**: See [Tailwind Integration](docs/tailwind-integration.md)  
**Component usage**: Hover over component in IDE for full documentation

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
