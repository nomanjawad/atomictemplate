/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: { "@tailwindcss/postcss": {} },
  },
}

export default config
