# User Guide

##

### 1. Initial Setup

#### Configure necessary files

- `env` : Initialize your `.env` file accordingly `sample.env` attached.

#### Setup with CLI tool (preferred)

Run the following to Configure everything and initial project run in dev environment.

```bash
npx meadown-frontend-template project-name
```

It requires read access on this repo:
`meadow/mtmp-frontend-nextJs-typescript`

##### This will

- Require `your-github-name` and `github-token` variables set in ~/.bashrc
- Exit if git hub variables are not found or have repository with same name
- Create git repository with your `project-name`
  using template `meadow/mtmp-frontend-nextJs-typescript`
- Clone the repository in your local directory
- Check `pnpm` is available or not for managing package
- Run `sudo npm install -g pnpm` to install pnpm if not found
- Configure package.json `name` variable as per your `project-name`
- Separate packages with dependencies and devDependencies
- Install and update all default packages
- Commit and push all changes to `remote`
- Open code in vs code with `code .` with `main` branch
- Run `pnpm dev` to start the initial project in dev environment

#### Manual setup

Run the following command to configure all necessary settings for the entire project:

```bash
pnpm packages
```

##### This will do

- Install all packages
- Packages will separated with dependencies and devDependencies

### 2. Run the project

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/components/pages/Home/home.page.tsx`. The page auto-updates as you edit the file

#### If you using Windows Operating System update `script dev` in `package.json` if you find any issues while run command

```bash
pnpm dev
```

```json
Replace "dev": "exec next dev --turbopack",`
with "dev": "next dev --turbopack",
```

### 3. Do some good work

#### 📚 Read the Documentation First

Before creating components, understand the architecture:

- **Data Architecture**: See `docs/data-pattern-quick-reference.md` - **Start here!** Essential pattern
- **Complete Guide**: See `docs/data-driven-architecture.md` - Full data flow explanation
- **Component Documentation**: See `docs/component-documentation-guide.md` - All components documented with JSDoc
- **Hover in IDE**: Hover over any component name to see inline documentation
- **Example Page**: Check `docs/example-page-guide.md` for complete page creation examples
- **Data Layer**: See `docs/data-folder-guide.md` for data structure and usage

Key patterns:

- **Data Flow**: Data Files → Page Components → Organisms → UI
- **Layout Pattern**: Section → Container → Content → Components
- All atoms, molecules, organisms have usage examples
- Never hardcode content - use data files

#### Make a page

- Create `src/components/pages/<Name>/`
- Add `<Name>Page.tsx` and export a component named `<Name>Page`
- Add `index.ts` to export from that folder

#### Make a UI part

- Atoms go in `src/components/atoms/`
- Molecules go in `src/components/molecules/`
- Organisms go in `src/components/organisms/`
- Use `PascalCase` names and add `index.ts` when a folder groups files

#### Make a hook

- Create `src/hooks/useThing/`
- Add `useThing.ts` that exports `useThing`
- Optional: `useThing.interface.ts` or `useThing.type.ts`
- Add `index.ts` to export from the folder

#### Imports

- Use absolute imports (e.g., `@/components/pages`, `@utils`, `@types`)
- Import from the folder’s `index.ts` when possible

#### Commits

- Use Conventional Commits (see `docs/commits.md`)
- Examples: `feat(home): add trending list`, `fix(useScroll): SSR guard`

#### Tips

- **Hover over components in IDE** to see full documentation and examples
- Use `Page` suffix for page components; do not use the `.page` token
- ESLint will warn if a component or hook folder is missing `index.ts`
- Use `Content` for flex layouts (flexible, semantic component)
- Use `staticRoutes` constants for internal links (from `@constants`)
- Check existing components before creating new ones - most patterns exist
- Follow the layout architecture: Section → Container → Content → Components
- Use Tailwind for layout, CSS Modules for complex component styles

### 4. Build the project

```bash
pnpm build
```

Build project before `git commit` to check if there ant `typescript` type issues.

### 5. Test the project

```bash
pnpm test
```

Test project before `git commit` to check all the test success.

### 6. Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
