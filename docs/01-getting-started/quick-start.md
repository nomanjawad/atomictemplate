# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### 1. Setup & Run

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

### 2. Essential Documentation

- **🎯 Data Architecture**: [data-pattern-quick-reference.md](./data-pattern-quick-reference.md) - **Start here!** Quick reference
- **📖 Data Flow**: [data-driven-architecture.md](./data-driven-architecture.md) - **Essential!** Complete architecture guide
- **📚 Component Docs**: [component-documentation-guide.md](./component-documentation-guide.md) - All components with JSDoc
- **📖 Example Page**: [example-page-guide.md](./example-page-guide.md) - Complete page creation example
- **🎨 Styling**: [tailwind-integration.md](./tailwind-integration.md) - Tailwind + CSS Modules hybrid

### 3. Component Architecture

All pages follow this pattern:

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

### 4. Importing Components

```tsx
// All components are documented - hover to see docs!
import {
  Button,
  BaseText,
  InternalLink,
  Section,
  Container,
  Content,
} from "@atoms"
import { BrandLogo, TextBlock, InputField, IconWithLabel } from "@molecules"
import { Navigation, InfoCard, Gallery } from "@organisms"
import { Header, Footer } from "@layouts"
import { staticRoutes } from "@constants"
import { aboutData, serviceData } from "@data"
```

### 5. Create a Simple Page

```tsx
// src/components/pages/About/AboutPage.tsx
import { PageHeader } from "@organisms"
import { aboutData } from "@data"

export default function AboutPage() {
  return (
    <>
      {/* Page header with banner data */}
      <PageHeader
        banner={aboutData.banner}
        isVisibleBackground
        height="large"
      />
      {/* Other sections */}
    </>
  )
}
```

> 💡 **Pattern**: Data from `@data` → Page component → Organism props → Rendered UI

### 6. Common Patterns

#### Hero Section

```tsx
<Section
  id="hero"
  bgColor="bg-linear-to-br from-primary to-accent"
  className="min-h-screen py-20"
  align="center"
>
  <Container>
    <Content direction="column" align="center" gap="lg">
      <TextBlock title="Welcome" description="Your amazing tagline" />
      <PrimaryAction title="Get Started" href={staticRoutes.CONTACT_US} />
    </Content>
  </Container>
</Section>
```

#### Feature Grid

```tsx
<Section bgColor="bg-white" className="py-20">
  <Container>
    <Content direction="column" gap="xl">
      <TextBlock title="Our Features" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Content key={feature.id} className="p-6 bg-gray-50 rounded-lg">
            <InfoCard options={feature} />
          </Content>
        ))}
      </div>
    </Content>
  </Container>
</Section>
```

#### Contact Form

```tsx
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [message, setMessage] = useState("")

<form onSubmit={handleSubmit}>
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
    <InputField
      tag="textarea"
      name="message"
      label="Message"
      rows={5}
      setValue={setMessage}
    />
    <Button type="submit">Submit</Button>
  </Content>
</form>
```

### 7. Key Tips

✅ **DO:**

- Hover over components to see documentation
- Use `Content` for layouts (not `Flex` - deprecated)
- Use `staticRoutes` constants for links
- Follow Section → Container → Content pattern
- Use Tailwind for layout, CSS Modules for complex styles
- Check existing components before creating new ones

❌ **DON'T:**

- Use `Flex` component (use `Content` instead)
- Hardcode routes (use `staticRoutes`)
- Skip the Container component (breaks max-width)
- Mix layout concerns (Section for backgrounds, Content for layout)

### 8. Standard Spacing

Use Tailwind's standard spacing scale:

```tsx
// Gap between items
gap-2  // 8px
gap-4  // 16px
gap-6  // 24px
gap-8  // 32px
gap-12 // 48px

// Padding
p-2  p-4  p-6  p-8  p-12
py-20 // Common for sections (80px)

// Common patterns
className="p-6 bg-white rounded-lg shadow-md" // Card
className="py-20 bg-gray-50" // Section
className="flex items-center gap-4" // Horizontal layout
```

### 9. Quick Reference

| Component     | Purpose                    | Import       |
| ------------- | -------------------------- | ------------ |
| Section       | Full-width wrapper         | `@atoms`     |
| Container     | Max-width centered         | `@atoms`     |
| Content       | Flex layout                | `@atoms`     |
| Button        | Action button              | `@atoms`     |
| BaseText      | Styled text                | `@atoms`     |
| InternalLink  | Internal navigation        | `@atoms`     |
| TextBlock     | Title/subtitle/description | `@molecules` |
| InputField    | Form input                 | `@molecules` |
| PrimaryAction | CTA button with arrow      | `@molecules` |
| InfoCard      | Feature/team card          | `@organisms` |
| Navigation    | Nav menu                   | `@organisms` |
| Header        | Site header                | `@layouts`   |
| Footer        | Site footer                | `@layouts`   |

### 10. Build & Deploy

```bash
# Build for production
pnpm build

# Run tests
pnpm test

# Check for errors
pnpm lint
```

## 🔍 Need More Details?

- **Data Architecture**: [data-driven-architecture.md](./data-driven-architecture.md) - Complete data flow guide
- **Quick Reference**: [data-pattern-quick-reference.md](./data-pattern-quick-reference.md) - Quick lookup
- **Backend Migration**: [migration-to-backend.md](./migration-to-backend.md) - API/CMS setup
- **Full User Guide**: [user-guide.md](./user-guide.md)
- **Component Documentation**: [component-documentation-guide.md](./component-documentation-guide.md)
- **Example Page**: [example-page-guide.md](./example-page-guide.md)
- **File Structure**: [file-structure.md](./file-structure.md)
- **Styling Guide**: [tailwind-integration.md](./tailwind-integration.md)

## 💡 Pro Tips

1. **Read Data Architecture First**: [data-pattern-quick-reference.md](./data-pattern-quick-reference.md) - Essential pattern!
2. **Hover in IDE**: All components have inline JSDoc docs - just hover!
3. **Check Examples**: See `src/components/pages/ExamplePage/` for complete patterns
4. **Follow Data Flow**: Data Files → Page Components → Organisms → UI
5. **Use Data Layer**: Import from `@data` for static content
6. **Never Hardcode**: Keep content in data files, not components
7. **Follow Conventions**: PascalCase for components, kebab-case for files

Happy coding! 🎉
