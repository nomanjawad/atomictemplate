# AtomicTemplate

> Production-ready Next.js template powered by atomic design methodology and data-driven architecture.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38bdf8)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19.2.1-61dafb)](https://react.dev/)

AtomicTemplate is an enterprise-grade Next.js 16 starter built on atomic design principles, enabling teams to build consistent, scalable web applications with speed and confidence.

---

## 📦 Core Dependencies

This template is built with these key technologies that you should be familiar with:

| Package                                                                                      | Version | Purpose                                                                         |
| -------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------- |
| **[@atomictemplate/slider](https://www.npmjs.com/package/@atomictemplate/slider)**           | 1.0.2   | Feature-rich carousel/slider with lazy loading, accessibility, and marquee mode |
| **[@atomictemplate/validations](https://www.npmjs.com/package/@atomictemplate/validations)** | 1.0.2   | Zod-based validation schemas for type-safe data validation                      |
| **[Tailwind CSS](https://tailwindcss.com/)**                                                 | 4.1.17  | Utility-first CSS framework for rapid UI development                            |
| **[GSAP](https://gsap.com/)**                                                                | 3.13.0  | Professional-grade animation library with ScrollTrigger                         |
| **[Zod](https://zod.dev/)**                                                                  | 4.1.11  | TypeScript-first schema validation with static type inference                   |
| **[Zustand](https://zustand.docs.pmnd.rs/)**                                                 | 5.0.8   | Lightweight state management for React                                          |

### @atomictemplate/slider

Our custom slider package provides:

- 🖼️ Lazy loading with IntersectionObserver
- ⌨️ Full keyboard navigation (Arrow keys, Home, End)
- ♿ ARIA accessibility labels
- 🎬 Video/GIF/Lottie support
- 📱 Responsive breakpoints
- 🔄 Marquee/infinite scroll mode
- 🎨 Render props for custom styling (`renderSlide`, `renderImage`, `renderArrow`, `renderDot`)

### @atomictemplate/validations

Our validation package provides:

- 🔒 Pre-built Zod schemas for common data structures (forms, metadata, FAQ, etc.)
- 📄 Page schemas for HomePage, BlogPost, ContactPage, and more
- 🛠️ Custom validators for URLs, emails, images, and phone numbers
- 📦 TypeScript types auto-inferred from schemas
- 🔄 Works with Zod v3 and v4

```typescript
// Import validators and schemas
import {
  validator,
  HomePageSchema,
  FormSchema,
} from "@atomictemplate/validations"

// Use pre-built schemas
const result = HomePageSchema.safeParse(data)

// Create custom schemas
const MySchema = validator.object({
  name: validator.string().min(2),
  email: validator.string().email(),
})
```

### Tailwind CSS

Used for:

- Layout utilities (`flex`, `grid`, `gap`)
- Spacing (`p-4`, `m-2`, `py-20`)
- Responsive design (`md:`, `lg:`, `xl:`)
- Design tokens (colors, shadows, typography)

### GSAP

Used for:

- Smooth scroll animations
- Page transitions
- Slider/carousel animations
- ScrollTrigger effects

### Zod

Used for:

- Runtime data validation
- Form validation with type-safe errors
- API response validation
- Schema-first development

```typescript
import { validator } from "@validations"

const UserSchema = validator.object({
  name: validator.string().min(2, "Name too short"),
  email: validator.string().email("Invalid email"),
  age: validator.number().min(18, "Must be 18+"),
})

type User = validator.infer<typeof UserSchema>
```

### Zustand

Used for:

- Global state management
- Language/theme preferences
- UI state (modals, navigation)
- Lightweight alternative to Redux

```typescript
import { useLanguageStore } from "@store"

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguageStore()
  return <button onClick={() => setLanguage("ar")}>Switch to Arabic</button>
}
```

---

## ✨ Features

### 🏗️ Architecture

- 🧬 **Atomic Design System** - Complete component hierarchy (atoms → molecules → organisms → pages)
- 📊 **Data-Driven Architecture** - Centralized data management with easy API/CMS migration
- 🔄 **One-Way Data Flow** - Predictable state management pattern

### 💻 Development Experience

- 📚 **Comprehensive Documentation** - 31 guides with 3,400+ lines covering all aspects
- 🔗 **Custom Import Aliases** - Clean imports with `@atoms`, `@molecules`, `@data`, `@validations`, etc.
- 🎯 **Type-Safe Development** - Full TypeScript with Zod runtime validation
- 🚀 **Production-Ready** - ESLint, Prettier, Husky, Commitlint pre-configured

### 🎨 Styling & Animation

- 🎭 **Hybrid Styling** - Tailwind CSS 4 + CSS Modules for maximum flexibility
- 🎬 **GSAP Animations** - Professional animations with ScrollTrigger
- � **Slider Component** - Full-featured carousel with marquee mode
- �🎨 **Design Tokens** - Centralized colors, spacing, typography, shadows

### 🛠️ Modern Stack

- ⚡ **Next.js 15.5.4** - App Router with Server Components
- ⚛️ **React 19.2.0** - Latest React features
- 🎯 **TypeScript 5.9.3** - Full type safety
- 🌐 **Internationalization Ready** - Multi-language data structure
- 🧪 **Testing Ready** - Jest configuration included
- 📦 **State Management** - Zustand for lightweight state

## 🚀 Quick Start

### Prerequisites

- Node.js ≥18.17.0
- pnpm ≥8.0.0 (recommended)

### Installation

#### Using npx (Recommended)

```bash
# Create new project
npx create-atomictemplate

# Or with custom name
npx create-atomictemplate my-project

# Navigate to project
cd my-project

# Start development server
pnpm dev
```

#### Manual Clone

```bash
# Clone the repository
git clone https://github.com/nomanjawad/atomictemplate.git my-project

# Navigate to project
cd my-project

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

### First Steps

1. **Read the Quick Start** - [docs/01-getting-started/quick-start.md](docs/01-getting-started/quick-start.md)
2. **Understand Data Pattern** - [docs/02-architecture/data-pattern-quick-reference.md](docs/02-architecture/data-pattern-quick-reference.md)
3. **Create Your First Page** - Follow the [example page guide](docs/03-components/example-page-guide.md)

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

AtomicTemplate includes **31 comprehensive guides** organized into 5 categories:

### Essential Reading

| Document                                                                             | Priority | Description                      |
| ------------------------------------------------------------------------------------ | -------- | -------------------------------- |
| [Quick Start](docs/01-getting-started/quick-start.md)                                | 🔥🔥🔥   | Get productive in 15 minutes     |
| [Data Pattern Quick Reference](docs/02-architecture/data-pattern-quick-reference.md) | 🔥🔥🔥   | Essential for creating any page  |
| [Data-Driven Architecture](docs/02-architecture/data-driven-architecture.md)         | 🔥🔥     | Deep understanding of the system |
| [Component Documentation](docs/03-components/component-documentation-guide.md)       | 🔥🔥     | Learn the component system       |
| [Backend Migration Guide](docs/02-architecture/migration-to-backend.md)              | 🔥       | When ready to connect APIs       |

### Documentation Categories

📂 **[01-getting-started/](docs/01-getting-started/)** - New user onboarding  
📂 **[02-architecture/](docs/02-architecture/)** - Data patterns and architecture  
📂 **[03-components/](docs/03-components/)** - Component system guides  
📂 **[04-development/](docs/04-development/)** - Development rules and guidelines  
📂 **[05-specifications/](docs/05-specifications/)** - Project specifications

### Quick Navigation

- **"I'm new here"** → [Quick Start](docs/01-getting-started/quick-start.md)
- **"I need to create a page"** → [Data Pattern Quick Reference](docs/02-architecture/data-pattern-quick-reference.md)
- **"How do components work?"** → [Component Guide](docs/03-components/component-documentation-guide.md)
- **"I need to connect to API"** → [Backend Migration](docs/02-architecture/migration-to-backend.md)
- **"Project structure?"** → [File Structure](docs/01-getting-started/file-structure.md)

See [Documentation Structure](docs/documentation-structure.md) for complete navigation guide.

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

## � Project Stats

- **31** documentation files
- **3,400+** lines of documentation
- **50+** reusable components
- **100%** TypeScript coverage
- **Zero** runtime errors in production build

## 🗺️ Roadmap

- [ ] Storybook integration
- [ ] More pre-built page templates
- [ ] Dark mode support
- [ ] Accessibility improvements (WCAG 2.1 AA)
- [ ] Performance monitoring integration
- [ ] E2E testing examples

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](docs/01-getting-started/user-guide.md) first.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes using [Conventional Commits](docs/04-development/rules/commits.md)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

Copyright (c) 2025 Noman Jawad

## 🆘 Support & Community

### Getting Help

1. 📚 [Documentation](docs/README.md) - Start here for all guides
2. 🐛 [Issue Tracker](https://github.com/nomanjawad/atomictemplate/issues) - Report bugs or request features
3. 💬 [Discussions](https://github.com/nomanjawad/atomictemplate/discussions) - Ask questions and share ideas

### Common Issues

**Import errors?** → Check [Imports Guide](docs/04-development/imports.md)  
**Styling issues?** → See [Tailwind Integration](docs/04-development/tailwind-integration.md)  
**Component usage?** → Hover over component in IDE for full documentation  
**Data patterns?** → Read [Data Pattern Quick Reference](docs/02-architecture/data-pattern-quick-reference.md)

## 🌟 Show Your Support

If this template helped you, please give it a ⭐️ on [GitHub](https://github.com/nomanjawad/atomictemplate)!

## 📢 Changelog

See [CHANGELOG](docs/02-architecture/changelog-data-driven.md) for recent updates.

---

**Built with ❤️ using Next.js, TypeScript, and Atomic Design**

[Website](https://github.com/nomanjawad/atomictemplate) · [Documentation](docs/README.md) · [Report Bug](https://github.com/nomanjawad/atomictemplate/issues) · [Request Feature](https://github.com/nomanjawad/atomictemplate/issues)
