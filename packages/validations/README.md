# @atomictemplate/validations

Shared Zod validation schemas for AtomicTemplate frontend and backend.

## Installation

```bash
npm install @atomictemplate/validations
# or
pnpm add @atomictemplate/validations
```

## Usage

```typescript
import {
  HomePageSchema,
  BlogPostSchema,
  validator,
  type HomePage,
  type BlogPost,
} from "@atomictemplate/validations"

// Validate data
const validData = HomePageSchema.parse(data)

// Safe parse with error handling
const result = BlogPostSchema.safeParse(data)
if (result.success) {
  console.log(result.data)
} else {
  console.log(result.error.issues)
}

// Use types
const homePage: HomePage = {
  title: "Home",
  banner: {
    title: "Welcome",
    description: "Hello world",
  },
}
```

## Available Schemas

### Common Schemas

| Schema           | Description                                   |
| ---------------- | --------------------------------------------- |
| `AuthorSchema`   | Author information (name, email, bio, avatar) |
| `MetadataSchema` | SEO metadata (title, description)             |
| `ButtonSchema`   | Button with text and URL                      |
| `BannerSchema`   | Hero banner with title, description, images   |
| `CtaSchema`      | Call-to-action section                        |
| `FAQSchema`      | FAQ section with questions/answers            |
| `FormSchema`     | Form configuration                            |
| `GallerySchema`  | Image gallery                                 |
| `ListSchema`     | List items with icons                         |
| `SliderSchema`   | Slider/carousel configuration                 |

### Page Schemas

| Schema                     | Description                              |
| -------------------------- | ---------------------------------------- |
| `HomePageSchema`           | Home page structure                      |
| `BlogPostSchema`           | Blog post with author, metadata, content |
| `ContactPageSchema`        | Contact page with form fields            |
| `GalleryPageSchema`        | Gallery page structure                   |
| `PrivacyPolicyPageSchema`  | Privacy policy page                      |
| `TermsConditionPageSchema` | Terms & conditions page                  |
| `examplePageSchema`        | Full example page with all sections      |

## Validators

```typescript
import {
  validator, // Zod instance
  imageValidator, // String validator for images
  urlValidator, // URL validator
  emailValidator, // Email validator
  uuidValidator, // UUID validator
  slugValidator, // Kebab-case slug validator
  phoneValidator, // Phone number validator
} from "@atomictemplate/validations"
```

## TypeScript Types

All schemas export their inferred types:

```typescript
import type {
  HomePage,
  BlogPost,
  Author,
  Banner,
  FAQ,
  SliderData,
  // ... etc
} from "@atomictemplate/validations"
```

## License

MIT © Noman Jawad
