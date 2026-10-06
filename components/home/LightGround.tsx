import type { ReactNode } from 'react'

/**
 * The light ground below the billboard: lavender cream, grain, and four large soft colour lights that drift
 * very slowly (still under reduced motion). `lift` raises it over the foot of a dark first screen as one
 * rounded sheet.
 */
export default function LightGround({
  children,
  lift = false,
}: {
  children: ReactNode
  lift?: boolean
}) {
  return (
    <div className={lift ? 'hm-ground hm-lift' : 'hm-ground'}>
      <div className="hm-orbs" aria-hidden="true">
        <span className="hm-orb hm-o1" />
        <span className="hm-orb hm-o2" />
        <span className="hm-orb hm-o3" />
        <span className="hm-orb hm-o4" />
      </div>
      {children}
    </div>
  )
}
