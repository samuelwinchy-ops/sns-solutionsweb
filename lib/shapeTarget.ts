/**
 * A shape the global NeuralBackground should gather its particles into.
 *
 * The hero registers the logo outline here; the background reads it each frame
 * and captures a subset of its own particles onto the points. That way the mark
 * is formed by the actual background field — not by a second canvas painted to
 * look like it.
 */
export type ShapePoint = {
  /** Normalised 0..1 within the shape's square box. */
  x: number
  y: number
}

export type ShapeTarget = {
  points: ShapePoint[]
  /** Viewport rect of the element the shape should sit in, or null if gone. */
  getRect: () => DOMRect | null
}

let current: ShapeTarget | null = null

export function setShapeTarget(target: ShapeTarget | null) {
  current = target
}

export function getShapeTarget(): ShapeTarget | null {
  return current
}
