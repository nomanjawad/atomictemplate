/*
 * to-kebab-case.ts
 * Created by Noman Jawad
 */

export default function toKebabCase(str: string): string {
  if (!str) return str
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2") // camelCase to kebab-case
    .replace(/[\s_]+/g, "-") // spaces and underscores to hyphens
    .toLowerCase()
}
