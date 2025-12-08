# create-atomictemplate

CLI tool to quickly scaffold [AtomicTemplate](https://github.com/nomanjawad/atomictemplate) - a production-ready Next.js starter with Atomic Design methodology.

## Usage

Create a new project with npx (no installation required):

```bash
npx create-atomictemplate
```

Or with specific project name:

```bash
npx create-atomictemplate my-app
```

### Interactive Setup

The CLI will:

1. Ask for your project name
2. Clone the latest AtomicTemplate
3. Initialize a fresh git repository
4. Update package.json with your project name
5. Optionally install dependencies with your preferred package manager (pnpm/npm/yarn)

## What You Get

- ⚛️ **Next.js 16.0.7** with App Router
- 🎨 **Atomic Design** component architecture
- 📊 **Data-Driven** development pattern
- 🎭 **TypeScript 5.9.3** for type safety
- 💨 **Tailwind CSS 4.1.17** for styling
- ✨ **GSAP 3.13.0** for animations
- ✅ **Zod 4.1.11** for validation
- 🔄 **Zustand 5.0.8** for state management
- 📝 **30+ documentation guides**

## Template Dependencies

The scaffolded project includes these core packages:

| Package                                                                                  | Version  | Description                            |
| ---------------------------------------------------------------------------------------- | -------- | -------------------------------------- |
| [@atomictemplate/slider](https://www.npmjs.com/package/@atomictemplate/slider)           | ^1.0.2   | Feature-rich carousel/slider component |
| [@atomictemplate/validations](https://www.npmjs.com/package/@atomictemplate/validations) | ^1.0.3   | Zod validation schemas                 |
| [next](https://nextjs.org/)                                                              | ^16.0.7  | React framework with App Router        |
| [react](https://react.dev/)                                                              | ^19.2.1  | UI library                             |
| [tailwindcss](https://tailwindcss.com/)                                                  | ^4.1.17  | Utility-first CSS                      |
| [gsap](https://gsap.com/)                                                                | ^3.13.0  | Animation library                      |
| [zod](https://zod.dev/)                                                                  | ^4.1.11  | Schema validation                      |
| [zustand](https://zustand.docs.pmnd.rs/)                                                 | ^5.0.8   | State management                       |
| [lucide-react](https://lucide.dev/)                                                      | ^0.555.0 | Icon library                           |
| [clsx](https://github.com/lukeed/clsx)                                                   | ^2.1.1   | Class name utility                     |

## Requirements

- Node.js 18.17.0 or higher
- Git

## Template Repository

https://github.com/nomanjawad/atomictemplate

## License

MIT © Noman Jawad
