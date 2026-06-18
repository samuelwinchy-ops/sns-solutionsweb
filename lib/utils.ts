/**
 * Lightweight class-name joiner (clsx-style) without external deps.
 * Filters out falsy values and joins the rest with a space.
 */
export type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | ClassValue[]

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = []
  for (const input of inputs) {
    if (!input) continue
    if (Array.isArray(input)) {
      const nested = cn(...input)
      if (nested) out.push(nested)
    } else {
      out.push(String(input))
    }
  }
  return out.join(' ')
}
