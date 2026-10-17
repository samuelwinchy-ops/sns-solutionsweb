'use client'

import { useSyncExternalStore } from 'react'

/*
 * One switch for everything that keeps moving on its own: the home slideshow, the row of integration
 * marks and every Immvela helix. Whichever pause button is pressed, all of it stops, and it stays stopped
 * on the next page of the visit (sessionStorage, so a new visit starts moving again).
 * WCAG 2.2.2 asks for this control on the page itself; honouring reduced motion alone is not enough.
 */

const KEY = 'sns-motion-paused'
const subs = new Set<() => void>()
let paused: boolean | null = null

function read() {
  if (paused === null) {
    try {
      paused = window.sessionStorage.getItem(KEY) === '1'
    } catch {
      paused = false
    }
  }
  return paused
}

function subscribe(fn: () => void) {
  subs.add(fn)
  return () => {
    subs.delete(fn)
  }
}

export function toggleMotion() {
  paused = !read()
  try {
    window.sessionStorage.setItem(KEY, paused ? '1' : '0')
  } catch {}
  subs.forEach((fn) => fn())
}

export function useMotionPaused() {
  return useSyncExternalStore(subscribe, read, () => false)
}
