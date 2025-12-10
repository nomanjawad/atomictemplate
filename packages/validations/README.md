# @atomictemplate/validations

Shared Zod validation schemas for AtomicTemplate frontend and backend.

## Installation

```bash
npm install @atomictemplate/validations
# or
pnpm add @atomictemplate/validations
```

## Usage

### Import Everything

```typescript
import {
  HomePageSchema,
  BlogPostSchema,
  ButtonSchema,
  validator,
} from "@atomictemplate/validations"
```

### Import Specific Modules (Recommended)

For better tree-shaking and clearer imports, use subpath imports:

```typescript
// Common schemas (buttons, forms, sliders, etc.)
import { ButtonSchema, BannerSchema } from "@atomictemplate/validations/common"

// Page schemas (home, contact, gallery, etc.)
import { HomePageSchema, ContactPageSchema } from "@atomictemplate/validations/pages"

// Blog schemas
import { BlogPostSchema, BlogPostPreviewSchema } from "@atomictemplate/validations/blogs"
```

### Validation Examples

```typescript
// Validate data
const validData = HomePageSchema.parse(data)

// Safe parse with error handling
const result = BlogPostSchema.safeParse(data)
if (result.success) {
  console.log(result.data)
} else {
  console.log(result.error.issues)
}
```

## Available Schemas

### Common Schemas (`@atomictemplate/validations/common`)

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

### Page Schemas (`@atomictemplate/validations/pages`)

| Schema                     | Description                         |
| -------------------------- | ----------------------------------- |
| `HomePageSchema`           | Home page structure                 |
| `ContactPageSchema`        | Contact page with form fields       |
| `GalleryPageSchema`        | Gallery page structure              |
| `PrivacyPolicyPageSchema`  | Privacy policy page                 |
| `TermsConditionPageSchema` | Terms & conditions page             |
| `examplePageSchema`        | Full example page with all sections |

### Blog Schemas (`@atomictemplate/validations/blogs`)

| Schema                  | Description                              |
| ----------------------- | ---------------------------------------- |
| `BlogPostSchema`        | Blog post with author, metadata, content |
| `BlogPostPreviewSchema` | Partial blog post for previews           |

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
} from "@atomictemplate/validations"
```

## License

MIT © Noman Jawad

