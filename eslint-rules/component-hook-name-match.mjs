/*
 * component-hook-name-match.mjs
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

//  Ensure React component/hook exported name matches file name.

import path from "path"

function toPosix(p) {
  return p.split(path.sep).join("/")
}

function getPrimaryName(fileBase) {
  const dot = fileBase.indexOf(".")
  return dot === -1 ? fileBase : fileBase.slice(0, dot)
}

function isComponentName(name) {
  return /^[A-Z][A-Za-z0-9]*$/.test(name)
}

function isHookName(name) {
  return /^use[A-Z][A-Za-z0-9]*$/.test(name)
}

const rule = {
  meta: {
    type: "problem",
    docs: {
      description: "Enforce component/hook exported name matches file name",
      recommended: false,
    },
    schema: [],
  },

  create(context) {
    const filename = context.getFilename()
    if (!filename || filename === "<text>") return {}

    const relPath = toPosix(filename)
    const dir = path.posix.dirname(relPath)
    const dirs = dir.split("/")
    const baseWithExt = path.posix.basename(relPath)
    const baseNoExt = baseWithExt.replace(/\.[^/.]+$/, "")
    const primary = getPrimaryName(baseNoExt)

    // Ignore index files which are often re-exports
    if (primary === "index") return {}

    const inComponents = dirs.includes("components")
    const inHooks = dirs.includes("hooks")
    if (!inComponents && !inHooks) return {}

    const exportedNames = new Set()

    function addName(name) {
      if (name) exportedNames.add(name)
    }

    return {
      ExportDefaultDeclaration(node) {
        const d = node.declaration
        if (!d) return
        if (d.type === "FunctionDeclaration" || d.type === "ClassDeclaration") {
          addName(d.id && d.id.name)
        } else if (d.type === "Identifier") {
          addName(d.name)
        }
        // ArrowFunctionExpression or others (anonymous) are ignored
      },

      ExportNamedDeclaration(node) {
        const decl = node.declaration
        if (decl) {
          if (
            decl.type === "FunctionDeclaration" ||
            decl.type === "ClassDeclaration"
          ) {
            addName(decl.id && decl.id.name)
          } else if (decl.type === "VariableDeclaration") {
            for (const d of decl.declarations || []) {
              if (d.id && d.id.type === "Identifier") addName(d.id.name)
            }
          }
        }
        for (const s of node.specifiers || []) {
          if (s.local && s.local.name) addName(s.local.name)
        }
      },
      "Program:exit"(node) {
        if (inHooks) {
          // Require a hook export matching primary
          const hasExact = exportedNames.has(primary) && isHookName(primary)
          const anyHook = Array.from(exportedNames).some(isHookName)
          if (anyHook && !hasExact) {
            context.report({
              node,
              message: `Hook name should match file name: expected exported \"${primary}\"`,
            })
          }
        }

        if (inComponents) {
          // Require a component export matching primary
          const hasExact =
            exportedNames.has(primary) && isComponentName(primary)
          const anyComponent = Array.from(exportedNames).some(isComponentName)
          if (anyComponent && !hasExact) {
            context.report({
              node,
              message: `Component name should match file name: expected exported \"${primary}\"`,
            })
          }
        }
      },
    }
  },
}

export default rule
