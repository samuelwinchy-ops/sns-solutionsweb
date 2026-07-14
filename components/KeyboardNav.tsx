'use client'

import { useEffect } from 'react'

const shortcuts: Record<string, string> = {
  '1': '#what-we-do',
  '2': '#team',
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
