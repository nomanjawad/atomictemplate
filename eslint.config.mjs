import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"
import * as customRules from "./eslint-rules/index.mjs"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Register local custom plugin and enable rules
    plugins: {
      "custom-rules": customRules,
    },
    rules: {
      "custom-rules/heading-rules": "error",
      "custom-rules/component-hook-name-match": "error",
      "custom-rules/require-index-file": [
        "error",
        {
          targets: ["src/components", "src/hooks"],
          exts: [".ts", ".tsx"],
        },
      ],
    },
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "packages/**/dist/**",
      "packages/**/node_modules/**",
      "cli/**",
      "scripts/**",
    ],
  },
]

export default eslintConfig
