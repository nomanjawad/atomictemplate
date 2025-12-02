# Conventional Commits

## We use Conventional Commits. This makes commit history easy to read

### Format

`<type>(optional scope): <short message>`

### Common types

- `feat`: new feature
- `fix`: bug fix
- `docs`: docs only
- `style`: formatting only
- `refactor`: code move/change, no bug fix or feature
- `perf`: performance
- `test`: tests
- `build`: build or deps
- `chore`: housekeeping (tooling, config)
- `revert`: revert a commit

### Examples

- `feat(home): add trending section`
- `fix(useScroll): add SSR guard`
- `docs(rules): add heading examples`
- `refactor(components): rename page folders`

### Message tips

- Use present tense: “add” not “added”
- No period at the end
- Keep it short

### Tools

- `commitlint.config.mjs` checks messages
- `Husky` runs commitlint on commit, see `.husky/` folder
