/*
 * tailwind.config.ts
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Base colors
        white: "#ffffff",
        black: "#1a1a1a",

        // Brand colors - Triadic color scheme
        primary: "#00aeef", // Cyan
        secondary: "#ef0056", // Magenta (120° on color wheel)
        accent: "#efae00", // Yellow (240° on color wheel)

        // Semantic colors
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",

        // Neutral grays - Minimal palette
        gray: {
          light: "#f5f5f5",
          DEFAULT: "#9ca3af",
          dark: "#374151",
        },

        // Simplified semantic variants
        text: "#1a1a1a",
        muted: "#6b7280",
        border: "#e5e7eb",
        background: "#ffffff",
      },
      spacing: {
        "2xs": "4px",
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
        "4xl": "80px",
        "5xl": "96px",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
        base: ["1rem", { lineHeight: "1.5rem" }], // 16px
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px
        "5xl": ["3rem", { lineHeight: "1" }], // 48px
        "6xl": ["3.75rem", { lineHeight: "1" }], // 60px
        "7xl": ["4.5rem", { lineHeight: "1" }], // 72px
      },
      borderRadius: {
        none: "0",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        full: "9999px",
      },
      boxShadow: {
        // Google Material Design elevation shadows
        sm: "0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15)",
        DEFAULT:
          "0 1px 3px 0 rgba(60, 64, 67, 0.3), 0 4px 8px 3px rgba(60, 64, 67, 0.15)",
        md: "0 2px 6px 2px rgba(60, 64, 67, 0.15), 0 1px 2px 0 rgba(60, 64, 67, 0.3)",
        lg: "0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px 0 rgba(60, 64, 67, 0.3)",
        xl: "0 8px 12px 6px rgba(60, 64, 67, 0.15), 0 4px 4px 0 rgba(60, 64, 67, 0.3)",
        "2xl":
          "0 12px 24px 16px rgba(60, 64, 67, 0.15), 0 4px 8px 0 rgba(60, 64, 67, 0.3)",
        inner: "inset 0 2px 4px 0 rgba(60, 64, 67, 0.3)",
        none: "none",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #00aeef 0%, #0088bd 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #fbbc04 0%, #f59e0b 100%)",
        "gradient-success": "linear-gradient(135deg, #34a853 0%, #16a34a 100%)",
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "monospace"],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.05em",
      },
    },
  },
  plugins: [],
}

export default config
