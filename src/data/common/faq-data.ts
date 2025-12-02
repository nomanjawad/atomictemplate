/*
 * faq-data.ts
 * Created by Noman Jawad
 * Copyright (c) 2025 skytechSolutions
 * All rights reserved
 */

import { FAQ } from "@validations"

export const faqData: FAQ = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions",
  items: [
    {
      question: "What is this template?",
      answer:
        "This is a Next.js starter template with TypeScript, featuring Atomic Design architecture and modern development practices.",
    },
    {
      question: "How do I get started?",
      answer:
        "Clone the repository, install dependencies with pnpm install, and run pnpm dev to start the development server.",
    },
    {
      question: "What features are included?",
      answer: "The template includes Zustand for state management, Zod for validation, Framer Motion for animations, and ESLint with custom rules.",
    },
    {
      question: "Is this production ready?",
      answer: "Yes! This template follows best practices and includes TypeScript, testing setup, and build optimization.",
    },
  ],
}
