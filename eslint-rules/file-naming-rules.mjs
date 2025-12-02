/*
 * file-naming-rules.mjs
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

//Enforce repository naming conventions for files and folders.

import path from "path"

const PASCAL = /^[A-Z][A-Za-z0-9]*$/
const CAMEL_HOOK = /^use[A-Z][A-Za-z0-9]*$/ // camelCase starting with "use"
const KEBAB = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

function toPosix(p) {
  return p.split(path.sep).join("/")
}

function getPrimaryName(fileBase) {
  // For names like Home.page.tsx -> primary = Home
  const dot = fileBase.indexOf(".")
  return dot === -1 ? fileBase : fileBase.slice(0, dot)
}

function endsWithToken(fileBase, token) {
  // color-token.types -> token = 'types' => true
  return fileBase.endsWith(`.${token}`)
}

const rule = {
  meta: {
    type: "problem",
    docs: {
      description: "Enforce custom file and folder naming conventions",
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
    const ext = path.posix.extname(baseWithExt) // .ts, .tsx, .js, etc
    const baseNoExt = baseWithExt.replace(/\.[^/.]+$/, "") // strip only last extension
    const primary = getPrimaryName(baseNoExt)

    // Track TS declarations found in the file
    let sawInterface = false
    let sawTypeAlias = false
    // let sawValueLike = false

    function report(node, message) {
      context.report({ node, message })
    }

    function checkComponents(node) {
      const idx = dirs.lastIndexOf("components")
      if (idx === -1) return

      // Enforce PascalCase for component filename (primary token)
      if (
        primary !== "index" &&
        !CAMEL_HOOK.test(primary) &&
        primary &&
        !PASCAL.test(primary)
      ) {
        report(
          node,
          `Component file name should be PascalCase (got "${primary}")`
        )
      }

      // Enforce PascalCase for component folders under components/*
      // except known group folders (Atomic Design and routing/layout buckets)
      const skip = new Set([
        "pages",
        "layouts",
        "atoms",
        "molecules",
        "organisms",
        "animations",
        "layouts",
        "framer",
        "gsap",
        "three",
        "others",
      ])
      for (let i = idx + 1; i < dirs.length; i++) {
        const seg = dirs[i]
        if (skip.has(seg)) continue
        if (!PASCAL.test(seg)) {
          report(node, `Component folder "${seg}" should be PascalCase`)
        }
      }

      // Disallow "Page" token in primary for *.page.ts(x)
      const isPageFile = /\.page\.(ts|tsx)$/.test(baseWithExt)
      if (isPageFile && /Page$/.test(primary)) {
        report(
          node,
          `Do not include the token "Page" in the main name for *.page.* files (got "${primary}")`
        )
      }

      // Enforce naming inside components/pages: prefer HomePage.tsx and disallow *.page.tsx
      const isPagesFolder = idx + 1 < dirs.length && dirs[idx + 1] === "pages"

      if (isPagesFolder) {
        // 1) Disallow legacy suffix token in filenames
        if (/\.page\.(ts|tsx)$/.test(baseWithExt)) {
          report(
            node,
            `Use "<Name>Page.tsx" for page components. Do not use the ".page" token (found "${baseWithExt}")`
          )
        }

        // 2) Require PascalCase primary ending with "Page" for TSX components
        const isTsx = /\.tsx$/.test(baseWithExt)
        if (isTsx && primary !== "index") {
          if (!PASCAL.test(primary) || !/Page$/.test(primary)) {
            report(
              node,
              `Page component name should end with "Page" and be PascalCase (e.g., HomePage). Got "${primary}"`
            )
          }
        }
      }
    }

    function checkHooks(node) {
      const idx = dirs.lastIndexOf("hooks")
      if (idx === -1) return

      // Folder immediately after hooks must be camelCase starting with use*
      if (idx + 1 < dirs.length) {
        const hookFolder = dirs[idx + 1]
        if (!CAMEL_HOOK.test(hookFolder)) {
          report(
            node,
            `Hook folder should be camelCase and start with "use" (got "${hookFolder}")`
          )
        }
      }

      // File primary name must be camelCase starting with use*
      if (primary !== "index" && !CAMEL_HOOK.test(primary)) {
        report(
          node,
          `Hook file name should be camelCase starting with "use" (got "${primary}")`
        )
      }
    }

    function isInDir(name) {
      return dirs.includes(name)
    }

    function checkUtilityPlacement(node) {
      const inUtility = isInDir("utility")
      const hasUtilitySuffix = endsWithToken(baseNoExt, "utility")
      if (inUtility && ext === ".ts" && !hasUtilitySuffix) {
        report(node, `Files in \"utility\" folder must end with .utility.ts`)
      }
      if (hasUtilitySuffix && !inUtility) {
        report(
          node,
          `*.utility.ts files must reside inside a \"utility\" folder`
        )
      }
    }

    function checkFetchPlacement(node) {
      const hasFetchSuffix = endsWithToken(baseNoExt, "fetch")
      if (hasFetchSuffix && !isInDir("www")) {
        report(node, `*.fetch.ts files must be inside a \"www\" folder`)
      }
    }

    function checkGeneralKebabCase(node) {
      // Apply only to files under src and outside components/hooks
      const idxSrc = dirs.indexOf("src")
      const isComponents = dirs.includes("components")
      const isHooks = dirs.includes("hooks")

      if (idxSrc !== -1 && !isComponents && !isHooks) {
        if (!KEBAB.test(primary)) {
          report(node, `File name should be kebab-case (got "${primary}")`)
        }

        // Enforce kebab-case for folder segments after src
        for (let i = idxSrc + 1; i < dirs.length; i++) {
          const seg = dirs[i]
          if (!seg) continue
          if (!KEBAB.test(seg)) {
            if (/[A-Z]/.test(seg)) {
              report(node, `Folder name should be kebab-case (got "${seg}")`)
            }
          }
        }
      }
    }

    /**
     * TODO: Either file contain interface or type always use `.types` token.
     * ALso always use plural `types` not singular `type` even if file contain
     * one type/interface for consistency.
     * */
    function checkTypeInterfaceSuffix(node) {
      // Only for TS files (skip .d.ts and .d.tsx)
      if (ext !== ".ts" && ext !== ".tsx") return
      if (/\.d\.(ts|tsx)$/i.test(baseWithExt)) return

      if (sawInterface && sawTypeAlias) {
        if (!endsWithToken(baseNoExt, "types")) {
          report(
            node,
            `Files containing interface or type must end with .types${ext}`
          )
        }
        return
      }

      // if (sawInterface && !sawTypeAlias && !sawValueLike) {
      //   const ok =
      //     // endsWithToken(baseNoExt, "interface") ||
      //     endsWithToken(baseNoExt, "types")
      //   if (!ok) {
      //     report(
      //       node,
      //       `Files with only interfaces should end with .interface${ext} (or .types${ext})`
      //     )
      //   }
      // }
    }

    return {
      TSInterfaceDeclaration() {
        sawInterface = true
      },
      TSTypeAliasDeclaration() {
        sawTypeAlias = true
      },
      // VariableDeclaration() {
      //   sawValueLike = true
      // },
      // FunctionDeclaration() {
      //   sawValueLike = true
      // },
      // ClassDeclaration() {
      //   sawValueLike = true
      // },
      // TSEnumDeclaration() {
      //   sawValueLike = true
      // },
      // ExpressionStatement() {
      //   sawValueLike = true
      // },

      "Program:exit"(node) {
        checkComponents(node)
        checkHooks(node)
        checkUtilityPlacement(node)
        checkFetchPlacement(node)
        checkGeneralKebabCase(node)
        checkTypeInterfaceSuffix(node)
      },
    }
  },
}

export default rule
