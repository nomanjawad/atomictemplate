# Component Documentation Guide

## Overview

All components in this template now have comprehensive JSDoc documentation to help developers understand and use them effectively.

## Documentation Standard

Each component includes:

- **Purpose**: What the component does and when to use it
- **Use Cases**: Common scenarios for using the component
- **Features**: Key capabilities and behaviors
- **Props**: Detailed parameter descriptions with types and defaults
- **Examples**: Multiple usage examples (basic, advanced, edge cases)
- **Styling**: How to style and customize the component
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Best Practices**: Recommended patterns and common pitfalls
- **Responsive**: Mobile/desktop behavior notes
- **Performance**: Optimization tips where relevant

## Documented Components

### Atoms (Layout)

#### Section

**Purpose**: Full-width semantic section wrapper with background styling  
**Architecture**: Section → Container → Content → Components (outermost layer)  
**Key Features**: Full viewport width, background colors/gradients/images, semantic HTML, anchor links

#### Container

**Purpose**: Max-width content wrapper with responsive centering  
**Architecture**: Section → Container → Content → Components (middle layer)  
**Key Features**: Constrains width (1280px), centers horizontally, flexbox layout

#### Content

**Purpose**: Flexbox layout container for actual content components  
**Architecture**: Section → Container → Content → Components (inner layer)  
**Key Features**: Handles layout only, visual styling via className

#### Flex (LEGACY)

**Status**: ⚠️ Deprecated - Use Content instead  
**Migration**: Simple prop name changes (gap="medium" → gap="md")

### Atoms (Links)

#### InternalLink

**Purpose**: Next.js Link wrapper for internal navigation  
**Benefits**: Client-side navigation, automatic prefetching, SEO-friendly  
**Usage**: All internal routes, use staticRoutes constants

#### ExternalLink

**Purpose**: Secure external link with proper rel attributes  
**Security**: Prevents tabnabbing, protects referrer, nofollow option  
**Usage**: External sites, email (mailto:), phone (tel:)

### Atoms (Already Documented)

- **BaseImage**: Image component with fill mode, responsive sizing
- **BaseText**: Text component with variants, sizes, weights
- **Button**: Button component with variants, sizes, disabled states

### Molecules

#### BrandLogo

**Purpose**: Company logo with home page link  
**Features**: Fixed size (80x80px), optimized with Next.js Image  
**Usage**: Header, footer, email signatures

#### PrimaryAction

**Purpose**: CTA button/link with arrow indicator  
**Features**: Styled button appearance, optional arrow icon, consistent styling  
**Usage**: Hero CTAs, card actions, "Learn More" links

#### TextBlock

**Purpose**: Structured text with title, subtitle, and description  
**Features**: Vertical layout, optional fields, customizable styling  
**Usage**: Section headers, card content, feature descriptions

#### InputField

**Purpose**: Form input with label and validation support  
**Features**: Input/textarea tags, client-side state management, HTML5 validation  
**Usage**: Contact forms, login forms, any form data collection

#### IconWithLabel

**Purpose**: Icon and text combination  
**Features**: Horizontal layout, optional background wrapper, customizable size  
**Usage**: Contact info, feature lists, social links, stats

#### NumberBadge

**Purpose**: Circular or square badge for numbers  
**Features**: Filled or outlined styles, auto-hides if null  
**Usage**: Step indicators, notification counts, timeline markers

#### PageTitle

**Purpose**: Automatic page title from current route  
**Features**: Extracts from URL, converts kebab-case to Title Case  
**Limitations**: Only last path segment, client component

#### RouteIndicator

**Purpose**: Breadcrumb navigation component  
**Features**: Auto-generates from URL, clickable parent links, current page highlighted  
**Usage**: Below page title, in page header

#### Menu (Already Documented)

**Purpose**: Horizontal or vertical menu with variants  
**Usage**: Navigation bars, mobile menus

### Organisms

#### Navigation

**Purpose**: Responsive navigation wrapper for Menu component  
**Features**: Desktop (horizontal) and mobile (vertical) variants  
**Usage**: Header nav, footer nav, sidebar nav

#### InfoCard

**Purpose**: Flexible card with optional image and text sections  
**Features**: Composable options-based config, no wrapper div  
**Usage**: Feature cards, team cards, blog previews, product cards

#### Gallery (Already Documented)

**Purpose**: Image gallery with uniform or masonry layouts  
**Usage**: Photo galleries, portfolio displays

### Layouts

#### Header

**Purpose**: Global site header with navigation and mobile menu  
**Features**: Sticky with auto-hide, GSAP animations, responsive  
**State**: useNavbarStore integration for scroll behavior

#### Footer

**Purpose**: Site-wide footer with branding and navigation  
**Features**: Dark theme, responsive grid, scroll to top button  
**Data**: footerData from @data

#### TopGlobalNavbar

**Purpose**: Top bar with contact info and language selector  
**Usage**: Above main header (optional)

## Architecture Pattern

All layouts follow this nesting pattern:

```tsx
<Section>
  {" "}
  {/* Full width, backgrounds, padding */}
  <Container>
    {" "}
    {/* Max-width, centered, flexbox */}
    <Content>
      {" "}
      {/* Flex layout, styling via className */}
      <Components /> {/* Atoms/Molecules */}
    </Content>
  </Container>
</Section>
```

## Usage Examples

### Basic Page Section

```tsx
<Section bgColor="bg-gray-50" className="py-20">
  <Container padding="lg">
    <Content direction="column" gap="md">
      <TextBlock title="Our Services" description="What we offer" />
      <div className="grid grid-cols-3 gap-6">
        {services.map((service) => (
          <Content key={service.id} className="p-6 bg-white rounded-lg shadow">
            <InfoCard options={service} />
          </Content>
        ))}
      </div>
    </Content>
  </Container>
</Section>
```

### Hero Section

```tsx
<Section
  id="hero"
  bgColor="bg-linear-to-br from-primary to-accent"
  className="min-h-screen py-20"
  align="center"
>
  <Container>
    <Content direction="column" align="center" gap="lg">
      <TextBlock
        title="Welcome to Our Site"
        description="Building amazing products"
      />
      <PrimaryAction title="Get Started" href={staticRoutes.CONTACT_US} />
    </Content>
  </Container>
</Section>
```

### Contact Info

```tsx
<Content direction="row" gap="lg">
  <IconWithLabel
    image={icoPhone}
    label="+1 (234) 567-8900"
    imgAltText="Phone icon"
  />
  <IconWithLabel
    image={icoEmail}
    label="contact@example.com"
    imgAltText="Email icon"
  />
</Content>
```

### Form Example

```tsx
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [message, setMessage] = useState("")

<form onSubmit={handleSubmit}>
  <InputField
    name="name"
    label="Full Name"
    placeholder="John Doe"
    setValue={setName}
  />
  <InputField
    name="email"
    type="email"
    label="Email"
    placeholder="john@example.com"
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
</form>
```

## Documentation Location

Component documentation is embedded in the source files using JSDoc format. To view:

1. **In IDE**: Hover over component name to see inline docs
2. **In File**: Read the JSDoc comment block above component definition
3. **IntelliSense**: Auto-completion shows parameter descriptions

## Best Practices

1. **Always provide alt text** for images (accessibility)
2. **Use staticRoutes constants** for internal links (consistency)
3. **Wrap Content in layout components** (Section, Container)
4. **Test responsive behavior** on mobile devices
5. **Use standard spacing**: gap-2/4/6/8/12, p-2/4/6/8/12, py-20
6. **Follow architecture pattern**: Section → Container → Content → Components
7. **Read component docs** before using (hover in IDE)
8. **Check examples** in JSDoc for usage patterns
9. **Test accessibility** (keyboard nav, screen readers)
10. **Validate color contrast** for WCAG compliance

## Migration Notes

### Flex → Content

The `Flex` component is deprecated. Use `Content` instead:

```tsx
// Old
<Flex direction="column" gap="medium">
  <div>Item 1</div>
</Flex>

// New
<Content direction="column" gap="md">
  <div>Item 1</div>
</Content>
```

Gap mappings:

- `none` → `none`
- `small` → `sm`
- `medium` → `md`
- `large` → `lg`
- `x-large` → `xl`
- `xx-large` → `2xl`

## Adding New Components

When creating new components, follow the documentation standard:

```tsx
/**
 * ComponentName - Brief one-line description
 *
 * USE CASES:
 * - When to use this component
 * - Common scenarios
 *
 * FEATURES:
 * - Key capabilities
 * - Important behaviors
 *
 * @param {Type} propName - Description with type and default
 *   - Additional details about the prop
 *   - Usage notes
 *
 * @example
 * // Basic usage
 * <ComponentName prop="value" />
 *
 * @example
 * // Advanced usage
 * <ComponentName prop="value" advanced={true} />
 *
 * ACCESSIBILITY:
 * - Important accessibility notes
 *
 * BEST PRACTICES:
 * - Recommended patterns
 * - Common pitfalls to avoid
 */
export default function ComponentName({ prop }: Props) {
  // Implementation
}
```

## Resources

- **Example Page**: `/app/example/page.tsx` - Complete page example with documentation
- **Example Data**: `/src/data/common/example-page-data.ts` - Data structure example
- **Example Schema**: `/src/validations/example-page.schema.ts` - Zod validation example
- **Example Guide**: `/docs/example-page-guide.md` - Comprehensive creation guide
- **File Structure**: `/docs/file-structure.md` - Project organization
- **Naming Conventions**: `/docs/naming.md` - Naming rules
- **Import Rules**: `/docs/imports.md` - Import path guidelines

## Questions?

If you need help understanding a component:

1. **Hover** over the component name in your IDE
2. **Read** the JSDoc in the source file
3. **Check** the examples in the documentation
4. **Look** at existing usage in the codebase
5. **Refer** to the example page for complete patterns

All components are designed to be intuitive and self-documenting. Happy coding!
