/*
 * heading-rules.js
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

/**
 * Custom ESLint Rule: Heading Best Practices
 * Based on Google SEO & WCAG accessibility guidelines
 *
 * 1. Only one <h1>
 * 2. No skipping levels
 * 3. Heading must have text
 *
 */
const headingRules = {
  meta: {
    type: "problem",
    docs: {
      description: "Enforce heading best practices (Google + WCAG)",
      category: "Accessibility",
      recommended: false,
    },
    schema: [
      {
        type: "object",
        properties: {
          minLength: { type: "number", minimum: 0 },
          allowExpressions: { type: "boolean" },
          allowMultipleH1: { type: "boolean" },
        },
        additionalProperties: false,
      },
    ],
  },

  create(context) {
    const options = context.options?.[0] || {}
    const minLength =
      typeof options.minLength === "number" ? options.minLength : 2
    const allowExpressions = options.allowExpressions !== false // default true
    const allowMultipleH1 = options.allowMultipleH1 === true // default false
    let lastHeadingLevel = 0
    let h1Count = 0

    function getTextContent(children) {
      return children
        .map((c) => {
          if (c.type === "Literal") return c.value
          if (c.type === "JSXText") return c.value.trim()
          return ""
        })
        .join("")
        .trim()
    }

    function hasMeaningfulExpression(children) {
      return children?.some((c) => {
        if (c.type !== "JSXExpressionContainer") return false
        const expr = c.expression
        if (!expr || expr.type === "JSXEmptyExpression") return false
        // Heuristic: consider any non-empty expression as meaningful content
        // e.g., {title}, {call()}, {`${x}`}
        return true
      })
    }

    return {
      JSXOpeningElement(node) {
        if (!node.name || !node.name.name) return
        const tag = node.name.name

        if (/^h[1-6]$/.test(tag)) {
          const level = Number(tag[1])

          // 1. Only one <h1>
          if (level === 1) {
            h1Count++
            if (!allowMultipleH1 && h1Count > 1) {
              context.report({
                node,
                message:
                  "Multiple <h1> elements found. Only one <h1> is allowed per page.",
              })
            }
          }

          // 2. No skipping levels
          if (lastHeadingLevel && level > lastHeadingLevel + 1) {
            context.report({
              node,
              message: `Heading level skipped: found <${tag}> after <h${lastHeadingLevel}>. Use <h${
                lastHeadingLevel + 1
              }> instead.`,
            })
          }

          // 3. Heading must have text
          const parent = node.parent
          if (parent && parent.children) {
            const text = getTextContent(parent.children)
            const exprOk =
              allowExpressions && hasMeaningfulExpression(parent.children)
            if (!text && !exprOk) {
              context.report({
                node,
                message: `<${tag}> must not be empty. Provide descriptive text.`,
              })
            } else if (!exprOk && text.length < minLength) {
              context.report({
                node,
                message: `<${tag}> text too short ("${text}"). Headings should be descriptive.`,
              })
            }
          }

          lastHeadingLevel = level
        }
      },
    }
  },
}

export default headingRules
