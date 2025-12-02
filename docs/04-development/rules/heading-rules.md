# Custom-rules/heading-rules

## Helps use headings in JSX in a clear, accessible way.

### Checks

- Only one `<h1>` per page
- Don’t skip levels (no `<h4>` right after `<h2>`)
- Headings should have text or a real expression
- Optional minimum text length (default: 2)

### Examples

- Good
  - `<h1>Home</h1>` then `<h2>Latest</h2>`
  - `<h2>{title}</h2>` where `title` is not empty
- Bad
  - Many `<h1>` tags
  - `<h4>` right after `<h2>`
  - `<h2>{/* empty */}</h2>`

### Config

In `eslint.config.mjs`:

```js
rules: {
  "custom-rules/heading-rules": [
    "error",
    { minLength: 2, allowExpressions: true, allowMultipleH1: false },
  ],
}
```
