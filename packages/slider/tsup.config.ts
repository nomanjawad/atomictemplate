import { defineConfig } from 'tsup'
import { copyFileSync } from 'fs'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'gsap'],
  injectStyle: false,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    }
  },
  onSuccess: async () => {
    // Copy CSS module to dist
    copyFileSync('src/slider.module.css', 'dist/slider.module.css')
    console.log('✓ Copied slider.module.css to dist/')
  },
})
