'use client'

import { useEffect } from 'react'

// Homepage section anchors. Kept in step with what app/page.tsx actually
// renders — #what-we-do and #team were both removed with their sections, and
// a shortcut pointing at a section that no longer exists is a dead key.
const shortcuts: Record<string, string> = {
  '1': '#focus',
  '2': '#how-we-work',
  '3': '#contact',
}

export default function KeyboardNav() {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const target = e.target as HTMLElement | null
      if (
        target &&
        (target.isContentEditable ||
          ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))
      )
        return

      const id = shortcuts[e.key]
      if (!id) return
      const el = document.querySelector(id)
      if (el) {
        e.preventDefault()
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return null
}
