import { defineConfig } from "tsup"

export default defineConfig({
  entry: {
    index: "src/index.ts",
    common: "src/common/index.ts",
    pages: "src/pages/index.ts",
    blogs: "src/blogs/index.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: false,
  splitting: false,
  treeshake: true,
  external: ["zod"],
})

