/*
 * toCapitalize.ts
 * Created by Noman Jawad
 */

export default function toCapitalize(str: string): string {
  if (!str) return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}
