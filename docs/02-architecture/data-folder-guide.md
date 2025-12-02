# Data Folder Guide

> 📖 **For complete data architecture**: See [data-driven-architecture.md](./data-driven-architecture.md)

## Overview

The `src/data/` folder contains all static data files used throughout the application. This folder follows a **data-driven architecture** pattern where data flows from centralized files → page components → organisms → user interface.

This folder supports a multilingual system with translations in English (default), Russian (`ru/`), and Arabic (`ar/`).

## Directory Structure

```
src/data/
├── index.ts                    # Main export file
├── blog-post/                  # Blog-related data
│   └── new-blog.ts
├── common/                     # Shared/common data
│   ├── index.ts
│   ├── appointment-data.ts
│   ├── cta-data.ts
│   ├── faq-data.ts
│   ├── industries.ts
│   ├── leader-talk.ts
│   ├── our-recruitment-process.ts
│   ├── social-links-data.ts
│   └── why-us.ts
├── full-pages/                 # Full page data
│   ├── index.ts
│   ├── about.ts
│   ├── contact.ts
│   ├── csr-data.ts
│   ├── gallery-page-data.ts
│   ├── industry-page.ts
│   ├── privacy-policy.ts
│   ├── terms-condition.ts
│   └── services/               # Service-specific data
│       ├── index.ts
│       ├── service.ts
│       ├── document-attestation.ts
│       ├── hr-solutions.ts
│       ├── international-manpower-recruitment.ts
│       ├── local-manpower-placement.ts
│       ├── manpower-outsourcing.ts
│       └── visa-processing.ts
├── ru/                         # Russian translations
│   ├── blog-post/
│   ├── common/
│   └── full-pages/
│       └── services/
└── ar/                         # Arabic translations
    ├── blog-post/
    ├── common/
    └── full-pages/
        └── services/
```

## Multilingual System

### Language Structure

The data folder supports three languages:

- **English (default)**: Files in the root directories (`blog-post/`, `common/`, `full-pages/`)
- **Russian (`ru/`)**: Files in `ru/` subdirectories
- **Arabic (`ar/`)**: Files in `ar/` subdirectories

### Translation Rules

When translating data files, follow these rules:

1. **Translate Values Only**: Only translate user-facing string values (titles, descriptions, names, labels)
2. **Keep Keys Intact**: Do NOT translate object keys (e.g., `title:`, `description:`, `id:`)
3. **Keep Imports Intact**: Do NOT change import paths (e.g., `import { img1 } from "@images"`)
4. **Keep Variable Names**: Do NOT change exported variable names (e.g., `export const aboutData`)
5. **Preserve URLs**: Keep all URLs and links unchanged
6. **Maintain Structure**: Keep the exact same file structure and TypeScript interfaces

## Usage

### Basic Import

All data exports are available through the main `@data` alias:

```typescript
import { aboutData, serviceData, industriesData } from "@data"
```

### Using Data in Components

#### Example 1: Using Page Data

```typescript
// src/components/pages/About/AboutPage.tsx
import { aboutData } from "@data"

export default function AboutPage() {
  return (
    <div>
      <h1>{aboutData.title}</h1>
      <p>{aboutData.banner.description}</p>
    </div>
  )
}
```

#### Example 2: Using Common Data

```typescript
// src/components/other/LeaderSpeech/LeaderSpeech.tsx
import { leaderTalkData } from "@data"

export default function LeaderSpeech() {
  return (
    <section>
      <h2>{leaderTalkData.title}</h2>
      <p>{leaderTalkData.message}</p>
      <p>{leaderTalkData.name} - {leaderTalkData.position}</p>
    </section>
  )
}
```

#### Example 3: Using Service Data

```typescript
// src/components/pages/Service/ServiceList.tsx
import { serviceData } from "@data"

export default function ServiceList() {
  return (
    <div>
      <h1>{serviceData.title}</h1>
      {serviceData.services.map((service) => (
        <div key={service.slug}>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  )
}
```

#### Example 4: Using FAQ Data

```typescript
// src/components/pages/Home/HomeFaqSection.tsx
import { faqData } from "@data"

export default function HomeFaqSection() {
  return (
    <section>
      <h2>{faqData.title}</h2>
      <p>{faqData.description}</p>
      {faqData.items.map((item, index) => (
        <div key={index}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </section>
  )
}
```

### Language-Specific Imports

To use a specific language version, import directly from the language folder:

```typescript
// Import Russian version
import { aboutData } from "@data/ru/full-pages/about"

// Import Arabic version
import { aboutData } from "@data/ar/full-pages/about"

// Import English version (default)
import { aboutData } from "@data/full-pages/about"
```

### Dynamic Language Selection

For a multilingual application, you can create a helper function:

```typescript
// src/utils/getLocalizedData.ts
import { aboutData as enAboutData } from "@data/full-pages/about"
import { aboutData as ruAboutData } from "@data/ru/full-pages/about"
import { aboutData as arAboutData } from "@data/ar/full-pages/about"

type Language = "en" | "ru" | "ar"

export function getAboutData(locale: Language) {
  switch (locale) {
    case "ru":
      return ruAboutData
    case "ar":
      return arAboutData
    default:
      return enAboutData
  }
}

// Usage in component
import { getAboutData } from "@/utils/getLocalizedData"

export default function AboutPage({ locale = "en" }: { locale?: Language }) {
  const aboutData = getAboutData(locale)
  return <div>{/* Use aboutData */}</div>
}
```

## Available Data Exports

### Common Data

All exports from `src/data/common/`:

- `appointmentForm` - Appointment form configuration
- `ctaData` - Call-to-action data
- `faqData` - Frequently asked questions
- `industriesData` - Industry information
- `leaderTalkData` - Leadership message
- `ourRecruitmentProcessData` - Recruitment process steps
- `socialLinks` - Social media links
- `whyUsData` - Why choose AMCO section

### Full Pages Data

All exports from `src/data/full-pages/`:

- `aboutData` - About page data
- `contactData` - Contact page data
- `csrData` - Corporate Social Responsibility data
- `galleryPageData` - Gallery page data
- `industryPageData` - Industries page data
- `privacyPolicySectionData` - Privacy policy sections
- `termsConditionSectionData` - Terms and conditions sections
- `serviceData` - Services overview data

### Service-Specific Data

All exports from `src/data/full-pages/services/`:

- `documentAttestationData` - Document attestation service
- `hrSolutionsData` - HR solutions service
- `internationalManpowerRecruitmentData` - International recruitment service
- `localManpowerPlacementData` - Local placement service
- `manpowerOutsourcingData` - Manpower outsourcing service
- `visaProcessingData` - Visa processing service

### Blog Data

- `blogSectionData` - Blog section data

## Adding New Data Files

### Step 1: Create the English Version

Create your data file in the appropriate directory:

```typescript
// src/data/common/new-feature.ts
export const newFeatureData = {
  title: "New Feature",
  description: "This is a new feature",
  items: [{ text: "Item 1" }, { text: "Item 2" }],
}
```

### Step 2: Export from Index

Add the export to the appropriate `index.ts`:

```typescript
// src/data/common/index.ts
export * from "./new-feature"
```

### Step 3: Create Translations

Create the same file structure in `ru/` and `ar/` directories:

```typescript
// src/data/ru/common/new-feature.ts
export const newFeatureData = {
  title: "Новая функция",
  description: "Это новая функция",
  items: [{ text: "Элемент 1" }, { text: "Элемент 2" }],
}
```

```typescript
// src/data/ar/common/new-feature.ts
export const newFeatureData = {
  title: "ميزة جديدة",
  description: "هذه ميزة جديدة",
  items: [{ text: "عنصر 1" }, { text: "عنصر 2" }],
}
```

### Step 4: Use in Components

```typescript
import { newFeatureData } from "@data"

export default function NewFeature() {
  return (
    <div>
      <h1>{newFeatureData.title}</h1>
      <p>{newFeatureData.description}</p>
    </div>
  )
}
```

## Best Practices

### 1. Type Safety

Always use TypeScript types from `@validations` schemas:

```typescript
import { AboutPage } from "@validations"
import { imgAboutBanner } from "@images"

export const aboutData: AboutPage = {
  title: "About Us",
  banner: {
    title: "Welcome to About Page",
    description: "Learn more about us",
    backgroundImageUrl: imgAboutBanner,
  },
}
```

### 2. Consistent Naming

- Use camelCase for variable names: `aboutData`, `serviceData`
- Use descriptive names that indicate the data's purpose
- End data exports with `Data` suffix: `faqData`, `ctaData`

### 3. File Organization

- Group related data in appropriate folders
- Use `index.ts` files for clean exports
- Keep file structure consistent across languages

### 4. Translation Quality

- Ensure translations are contextually appropriate
- Use formal language for business content
- Maintain consistency in terminology across files
- For Arabic: Ensure proper RTL (Right-to-Left) formatting when needed

### 5. Import Paths

- Always use the `@data` alias for imports
- Use barrel exports (`index.ts`) when possible
- Avoid deep nested imports when a barrel export exists

## Common Patterns

### Pattern 1: Conditional Rendering

```typescript
import { faqData } from "@data"

export default function FAQ() {
  if (!faqData.items || faqData.items.length === 0) {
    return null
  }

  return (
    <section>
      {faqData.items.map((item, index) => (
        <div key={index}>{/* ... */}</div>
      ))}
    </section>
  )
}
```

### Pattern 2: Data Transformation

```typescript
import { industriesData } from "@data"

export default function Industries() {
  const transformedData = industriesData.items.map(item => ({
    ...item,
    displayTitle: item.title.toUpperCase()
  }))

  return (
    <div>
      {transformedData.map(item => (
        <div key={item.title}>{/* ... */}</div>
      ))}
    </div>
  )
}
```

### Pattern 3: Combining Multiple Data Sources

```typescript
import { aboutData, leaderTalkData, ctaData } from "@data"

export default function AboutPage() {
  return (
    <div>
      <section>{/* Use aboutData */}</section>
      <section>{/* Use leaderTalkData */}</section>
      <section>{/* Use ctaData */}</section>
    </div>
  )
}
```

## Troubleshooting

### Issue: Import Not Found

**Problem**: `Cannot find module '@data'`

**Solution**:

1. Check that the file exists in `src/data/`
2. Verify the export exists in the appropriate `index.ts`
3. Ensure TypeScript path alias is configured in `tsconfig.json`

### Issue: Type Errors

**Problem**: TypeScript errors about missing properties

**Solution**:

1. Ensure you're using the correct TypeScript interface from `@validations`
2. Check that all required properties are present in your data object
3. Verify the data structure matches the expected interface

### Issue: Translation Missing

**Problem**: Need to add a new translation

**Solution**:

1. Create the file in the appropriate language folder (`ru/` or `ar/`)
2. Maintain the same file structure and variable names
3. Translate only the string values, not keys or imports

## Related Documentation

- **[Data-Driven Architecture](./data-driven-architecture.md)** - **Essential!** Complete guide to data flow
- **[Migration to Backend](./migration-to-backend.md)** - How to migrate to API/CMS
- **[Quick Reference](./data-pattern-quick-reference.md)** - Quick reference card
- [File Structure Guide](./file-structure.md)
- [Import Aliases Guide](./imports.md)

## Support

For questions or issues related to the data folder:

1. Read [data-driven-architecture.md](./data-driven-architecture.md) for complete understanding
2. Check this documentation for folder organization
3. Review existing data files for examples (e.g., `example-page-data.ts`)
4. Consult the TypeScript validation schemas in `src/validations/`
