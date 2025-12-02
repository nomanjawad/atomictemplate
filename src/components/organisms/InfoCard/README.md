# InfoCard Component

A versatile and customizable information card component for displaying content with optional images, text sections, and flexible link behaviors.

## Overview

The `InfoCard` component is a flexible organism-level component that combines multiple atomic and molecular components to create rich, interactive information cards. It supports link wrapping (entire card clickable) or button links, making it perfect for feature cards, team profiles, blog previews, and more.

## Features

- **Flexible Link Options**: Wrap entire card or add button link
- **Optional Image Section**: Display images with full control over sizing and styling
- **Text Content**: Title, subtitle, and description with customizable styling
- **Composable Design**: Options-based configuration for maximum flexibility
- **Responsive**: Works seamlessly across all screen sizes
- **TypeScript Support**: Full type safety with comprehensive interfaces

## Link Types

### 1. Link Wrap (`type: "wrap"`)
Wraps the entire card with a link, making the whole card clickable. Perfect for:
- Feature cards linking to detail pages
- Blog post previews linking to full articles
- Product cards linking to product pages
- Team member cards linking to profiles

### 2. Button Link (`type: "button"`)
Adds a button at the bottom of the card with the link. Perfect for:
- Cards with multiple actions
- Clear call-to-action requirements
- When you want explicit "Learn More" buttons
- Cards that need to be distinguishable from clickable areas

### 3. No Link
Display card without any link for static content display.

## Usage

### Basic Card (No Link)

```tsx
import InfoCard from "@organisms/InfoCard"

<Content className="p-6 bg-white rounded-lg shadow-md">
  <InfoCard
    options={{
      imageSection: { 
        src: featureIcon, 
        alt: "Feature Icon", 
        width: 64, 
        height: 64 
      },
      textSection: {
        title: "Fast Performance",
        description: "Lightning-fast load times and optimized code"
      }
    }}
  />
</Content>
```

### Card with Link Wrap (Entire Card Clickable)

```tsx
<Content className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
  <InfoCard
    options={{
      imageSection: { 
        src: blogImage, 
        alt: "Blog Post" 
      },
      textSection: {
        title: "Getting Started with Next.js",
        subTitle: "Published on Dec 1, 2025",
        description: "Learn the fundamentals of Next.js development..."
      },
      link: {
        href: "/blog/getting-started",
        type: "wrap"
      }
    }}
  />
</Content>
```

### Card with Button Link

```tsx
<Content className="p-6 bg-white rounded-lg shadow-md">
  <InfoCard
    options={{
      imageSection: { 
        src: teamPhoto, 
        alt: "John Doe",
        className: "rounded-full mx-auto mb-4"
      },
      textSection: {
        title: "John Doe",
        subTitle: "CEO & Founder",
        description: "Leading the company since 2020"
      },
      link: {
        href: "/team/john-doe",
        type: "button",
        buttonText: "View Profile"
      }
    }}
  />
</Content>
```

## Props API

### InfoCardProps

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `options` | `InfoCardOption` | - | No | Configuration object containing all card options |
| `children` | `ReactNode` | - | No | Custom content to render (rarely used with options) |

### InfoCardOption

The main configuration object with three sections:

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `imageSection` | `ImageSectionOption` | No | Image configuration |
| `textSection` | `TextSectionOption` | No | Text content configuration |
| `link` | `LinkOption` | No | Link behavior configuration |

### ImageSectionOption

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `src` | `ImageSource` | - | Image source (required to show image) |
| `alt` | `string` | `""` | Image alt text for accessibility |
| `width` | `number \| string` | - | Image width |
| `height` | `number \| string` | - | Image height |
| `className` | `string` | - | CSS classes for image styling |
| `objectFit` | `"contain" \| "cover" \| "fill" \| "none" \| "scale-down"` | - | CSS object-fit property |
| `priority` | `boolean` | `false` | Next.js priority loading |

### TextSectionOption

| Property | Type | Description |
|----------|------|-------------|
| `title` | `string` | Main heading text |
| `subTitle` | `string` | Supporting text (optional) |
| `description` | `string` | Body text (optional) |
| `className` | `string` | CSS classes for text container |
| `titleProps` | `BaseTextProps` | Custom props for title styling |
| `subTitleProps` | `BaseTextProps` | Custom props for subtitle styling |
| `descriptionProps` | `BaseTextProps` | Custom props for description styling |

### LinkOption

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `href` | `string` | Yes | Destination URL |
| `type` | `"wrap" \| "button"` | Yes | Link behavior type |
| `buttonText` | `string` | Only if `type="button"` | Button label text |

## Examples

### Feature Grid with Link Wraps

```tsx
<Content direction="row" gap="lg" wrap>
  {features.map((feature) => (
    <Content key={feature.id} className="w-full md:w-1/3 p-6 bg-white rounded-lg shadow hover:shadow-xl transition">
      <InfoCard
        options={{
          imageSection: { 
            src: feature.icon, 
            alt: feature.title,
            width: 80,
            height: 80,
            className: "mb-4"
          },
          textSection: {
            title: feature.title,
            description: feature.description
          },
          link: {
            href: `/features/${feature.slug}`,
            type: "wrap"
          }
        }}
      />
    </Content>
  ))}
</Content>
```

### Team Grid with Button Links

```tsx
<Content direction="row" gap="xl" wrap>
  {teamMembers.map((member) => (
    <Content key={member.id} className="w-full md:w-1/4 p-8 bg-gray-50 rounded-xl text-center">
      <InfoCard
        options={{
          imageSection: { 
            src: member.photo, 
            alt: member.name,
            className: "rounded-full mx-auto w-32 h-32 object-cover mb-4"
          },
          textSection: {
            title: member.name,
            subTitle: member.role,
            description: member.bio,
            className: "text-center"
          },
          link: {
            href: `/team/${member.slug}`,
            type: "button",
            buttonText: "View Profile"
          }
        }}
      />
    </Content>
  ))}
</Content>
```

### Blog Cards with Mixed Links

```tsx
{/* Featured post with wrap */}
<Content className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
  <InfoCard
    options={{
      imageSection: { src: featuredImage, alt: "Featured Post", className: "rounded-lg mb-6" },
      textSection: {
        title: "Featured Article",
        subTitle: "Editor's Pick",
        description: "This week's most popular article..."
      },
      link: { href: "/blog/featured", type: "wrap" }
    }}
  />
</Content>

{/* Regular posts with buttons */}
{posts.map((post) => (
  <Content key={post.id} className="p-6 bg-white rounded-lg shadow">
    <InfoCard
      options={{
        imageSection: { src: post.image, alt: post.title },
        textSection: {
          title: post.title,
          description: post.excerpt
        },
        link: {
          href: `/blog/${post.slug}`,
          type: "button",
          buttonText: "Read More"
        }
      }}
    />
  </Content>
))}
```

## Best Practices

1. **Link Type Selection**:
   - Use `"wrap"` for cards where the entire card represents a single action
   - Use `"button"` when you need explicit call-to-action or multiple possible actions
   - Use no link for display-only cards

2. **Accessibility**:
   - Always provide meaningful `alt` text for images
   - Use descriptive `buttonText` for button links
   - Ensure sufficient color contrast for text

3. **Hover States**:
   - Add hover styles (shadow, scale) to wrapped cards for better UX
   - Example: `className="hover:shadow-xl transition cursor-pointer"`

4. **Responsive Design**:
   - Use responsive classes for card widths: `w-full md:w-1/3`
   - Consider stacking on mobile, grid on desktop

5. **Content Length**:
   - Keep titles concise (1-7 words)
   - Descriptions should be 2-3 sentences max
   - Button text should be action-oriented (2-3 words)

## TypeScript Support

The component is fully typed with comprehensive interfaces:

```typescript
interface LinkOption {
  href: string
  type: "wrap" | "button"
  buttonText?: string // Required if type is "button"
}

interface InfoCardOption {
  imageSection?: ImageSectionOption
  textSection?: TextSectionOption
  link?: LinkOption
}
```

## Styling

The component uses:
- `info-card.module.css` for component-specific styles
- Tailwind utilities for responsive layouts
- Parent container classes for card appearance

Wrap cards in styled containers:
```tsx
<Content className="p-6 bg-white rounded-lg shadow-md">
  <InfoCard options={...} />
</Content>

```typescript
interface InfoCardOption {
  // Image customization
  image?: {
    width?: number | string
    height?: number | string
  }

  // Layout alignment
  verticalAlign?: FlexProps["align"]

  // Flex container customization
  innerFlex?: Omit<FlexProps, "children">
  outerFlex?: Omit<FlexProps, "children">

  // Link type for inline variant
  inLineLinkType?: "primary" | "normal"

  // Text styling
  title?: Omit<BaseTextProps, "children">
  description?: Omit<BaseTextProps, "children">

  // Container styling
  container?: Omit<ContentProps, "children">
}
```

## Link Variants

The `linkVariant` prop controls how the card handles links:

### 1. Wrapped (`linkVariant="wrapped"`)
The entire card becomes a clickable link. Best for cards that navigate to a detail page.

```tsx
<InfoCard
  title="Product Features"
  description="Discover what we offer"
  href="/features"
  linkVariant="wrapped"
/>
```

### 2. Inline (`linkVariant="inline"`)
Displays a "Learn more" link at the bottom of the card. The card itself is not clickable.

```tsx
<InfoCard
  title="Documentation"
  description="Read our comprehensive guides"
  href="/docs"
  linkVariant="inline"
  linkTitle="Read docs"
  options={{ inLineLinkType: "primary" }}
/>
```

### 3. None (`linkVariant="none"`)
No link behavior. The card is purely informational.

```tsx
<InfoCard
  title="Static Information"
  description="This card has no link"
  linkVariant="none"
/>
```

## Examples

### Basic Card with Image

```tsx
<InfoCard
  title="Getting Started"
  description="Learn how to use our platform in minutes"
  image="/images/getting-started.jpg"
  href="/docs/intro"
  linkVariant="inline"
/>
```

### Card with Number Badge

```tsx
<InfoCard
  cardNumber={1}
  title="Step One"
  description="Create your account"
  href="/signup"
  linkVariant="wrapped"
/>
```

### Centered Content Card

```tsx
<InfoCard
  title="Feature Highlight"
  description="Advanced analytics dashboard"
  image="/images/analytics.png"
  options={{
    verticalAlign: "center",
    image: { width: 200, height: 150 }
  }}
  linkVariant="inline"
  linkTitle="Explore features"
/>
```

### Card with Custom Children

```tsx
<InfoCard
  title="Custom Content"
  description="This card includes custom components"
  href="/custom"
  linkVariant="inline"
>
  <CustomChart data={chartData} />
  <CustomStats values={stats} />
</InfoCard>
```

### Advanced Customization

```tsx
<InfoCard
  title="Premium Feature"
  description="Unlock advanced capabilities"
  image="/images/premium.jpg"
  cardNumber={3}
  linkVariant="inline"
  linkTitle="Learn more"
  options={{
    verticalAlign: "center",
    image: { width: "100%", height: "auto" },
    inLineLinkType: "primary",
    title: { variant: "primary", weight: "bold" },
    description: { variant: "secondary" },
    container: { padding: "large" },
    outerFlex: { gap: "large" },
    innerFlex: { gap: "medium" }
  }}
/>
```

## Component Structure

The InfoCard is composed of several sub-components:

### Internal Components

1. **CardImage** (`src/components/organisms/InfoCard/components/CardImage.tsx:14`)
   - Handles conditional image rendering
   - Supports custom width and height via options

2. **CardLinkWrapper** (`src/components/organisms/InfoCard/components/LinkWrapper.tsx:12`)
   - Wraps content in link when `linkVariant="wrapped"`
   - Uses InternalLink component from atoms

3. **CardInlineLink** (`src/components/organisms/InfoCard/components/InlineLink.tsx:12`)
   - Displays inline link when `linkVariant="inline"`
   - Supports primary and normal link types

4. **InfoCardTextBlock** (`src/components/organisms/InfoCard/components/InfoCardTextBlock.tsx:12`)
   - Renders title and description using TextBlock molecule
   - Handles text alignment based on verticalAlign option

5. **InfoCardFreeHandComponent** (`src/components/organisms/InfoCard/components/InfoCardFreeHandComponent.tsx:10`)
   - Renders custom children content
   - Allows for flexible content insertion

## Styling

The component uses CSS modules for styling (`info-card.module.css`). The following CSS classes are applied:

- `.info_card` - Main container class
- `.info_card_outer_flex` - Outer flex container
- `.info_image` - Image styling class

## Best Practices

1. **Use appropriate link variants**: Choose `wrapped` for navigation cards, `inline` for informational cards with optional CTAs, and `none` for static content.

2. **Provide meaningful titles**: Keep titles concise and descriptive (2-5 words).

3. **Optimize images**: Use appropriately sized images to maintain performance. Consider using the `options.image` settings to control dimensions.

4. **Number badges**: Use `cardNumber` for sequential steps or ordered lists.

5. **Accessibility**: Always ensure images have appropriate alt text (uses title prop as fallback).

6. **Vertical alignment**: Use `options.verticalAlign="center"` when you want centered text, especially for feature cards.

## Accessibility

- Images automatically use the `title` prop as alt text for screen readers
- Link elements use semantic HTML with proper anchor tags
- The component structure maintains logical heading hierarchy when used properly

## Dependencies

This component depends on the following design system components:

- `@atoms`: Content, Flex, BaseText, InternalLink
- `@molecules`: NumberBadge, PrimaryAction, TextBlock

## TypeScript Support

Full TypeScript support with comprehensive type definitions available in `infoCard.types.ts`.

## Author

Created by Dewan Meadown
Copyright (c) 2025 dewan_meadown
All rights reserved
