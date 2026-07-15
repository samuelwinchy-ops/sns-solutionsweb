'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale } from '@/i18n/config'

const EASE = [0.16, 1, 0.3, 1] as const
const BARS = 22

// Pauses between turns so the call breathes like a real conversation instead of
// firing line after line. A little longer when the speaker changes (turn-taking)
// than when the same person keeps talking.
const GAP_SAME = 450
const GAP_TURN = 900

// A phone-call presentation of the same qualifying conversation the chat demo
// shows — proving the voice-agent capability. Animated waveform reacts to who
// is speaking; the transcript builds line by line. Reused script from i18n.
//
// Two modes:
//  - Silent preview: auto-plays on scroll (browsers block autoplaying sound),
//    timing estimated from text length.
//  - With sound: real Higgsfield TTS clips per line, played back on a user
//    gesture. Playback events (not estimates) drive the transcript + waveform.
export default function VoiceDemo({
  locale = defaultLocale,
  audience = 'hvac',
}: {
  locale?: Locale
  audience?: 'hvac' | 'realEstate'
}) {
  const demo = getDict(locale).solutionsPage.demo
  const v = getDict(locale).demoPage.voice
  const d = demo[audience]
  const script = d.script
  const audioBase = `/voice-demo/${locale}/${audience}`

  const [shown, setShown] = useState(0)
  const [speaking, setSpeaking] = useState(false) // agent voice active
  const [done, setDone] = useState(false)
  const [secs, setSecs] = useState(0)
  const [soundOn, setSoundOn] = useState(false)
  const startedRef = useRef(false)
  const reduceRef = useRef(false)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const clock = useRef<ReturnType<typeof setInterval> | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const clearAll = useCallback(() => {
    timers.current.forEach(clearTimeout)
    timers.current = []
    if (clock.current) clearInterval(clock.current)
    clock.current = null
    const a = audioRef.current
    if (a) {
      a.onended = null
      a.pause()
    }
  }, [])

  const startClock = () => {
    clock.current = setInterval(() => setSecs((s) => s + 1), 1000)
  }

  const finish = useCallback(() => {
    setSpeaking(false)
    setDone(true)
    if (clock.current) {
      clearInterval(clock.current)
      clock.current = null
    }
  }, [])

  // Silent preview — estimated timing, no audio.
  const play = useCallback(() => {
    clearAll()
    setShown(0)
    setSpeaking(false)
    setDone(false)
    setSecs(0)

    if (reduceRef.current) {
      setShown(script.length)
      setDone(true)
      return
    }

    startClock()

    let delay = 500
    script.forEach((msg, i) => {
      const isAgent = msg.from === 'agent'
      const dur = Math.min(3000, 1000 + msg.text.length * 24)
      timers.current.push(
        setTimeout(() => {
          setSpeaking(isAgent)
          setShown(i + 1)
        }, delay)
      )
      delay += dur
      timers.current.push(setTimeout(() => setSpeaking(false), delay - 150))
      const changesNext = i < script.length - 1 && script[i + 1].from !== msg.from
      delay += changesNext ? GAP_TURN : GAP_SAME
    })
    timers.current.push(setTimeout(finish, delay))
  }, [script, clearAll, finish])

  // Real audio — playback drives the transcript and waveform.
  const playWithAudio = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    clearAll()
    setShown(0)
    setSpeaking(false)
    setDone(false)
    setSecs(0)
    startClock()

    let i = 0

    const startLine = (idx: number) => {
      setShown(idx + 1)
      setSpeaking(script[idx].from === 'agent')
      audio.src = `${audioBase}/${idx}.mp3`
      audio.currentTime = 0
      void audio.play().catch(() => {
        // Autoplay blocked or clip missing — fall back to the silent preview.
        setSoundOn(false)
        play()
      })
    }

    const handleEnded = () => {
      setSpeaking(false)
      const next = i + 1
      if (next >= script.length) {
        timers.current.push(setTimeout(finish, 500))
        return
      }
      const changed = script[next].from !== script[i].from
      timers.current.push(
        setTimeout(() => {
          i = next
          startLine(i)
        }, changed ? GAP_TURN : GAP_SAME)
      )
    }

    audio.onended = handleEnded
    startLine(0)
  }, [script, audioBase, clearAll, finish, play])

  const toggleSound = useCallback(() => {
    if (soundOn) {
      setSoundOn(false)
      clearAll()
      setSpeaking(false)
    } else {
      setSoundOn(true)
      playWithAudio() // called from a click, so playback is allowed
    }
  }, [soundOn, clearAll, playWithAudio])

  const replay = useCallback(() => {
    if (soundOn) playWithAudio()
    else play()
  }, [soundOn, playWithAudio, play])

  useEffect(() => {
    reduceRef.current = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    const el = rootRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          play()
          io.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      clearAll()
    }
  }, [play, clearAll])

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: reduceRef.current ? 'auto' : 'smooth' })
  }, [shown])

  const mmss = `${String(Math.floor(secs / 60)).padStart(2, '0')}:${String(secs % 60).padStart(2, '0')}`

  return (
    <div ref={rootRef} className="glass-strong edge-light overflow-hidden rounded-sns-lg">
      {/* hidden audio element reused across lines */}
      <audio ref={audioRef} preload="none" aria-hidden="true" />

      {/* call header */}
      <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-sns-muted">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sns-green/15 text-sns-green">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4.5 5.5c0 8 6 14 14 14l2-3.5-4.5-2-2 2c-2.5-1.2-4.8-3.5-6-6l2-2-2-4.5L4.5 5.5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            </svg>
          </span>
          {v.callHeader} · {mmss}
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleSound}
            aria-pressed={soundOn}
            className={`flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-widest transition-colors duration-300 ${
              soundOn
                ? 'border-sns-indigo/50 bg-sns-indigo/10 text-sns-accent'
                : 'border-white/10 bg-white/[0.03] text-sns-muted hover:border-sns-indigo/50 hover:text-sns-accent'
            }`}
          >
            {soundOn ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 9v6h4l5 4V5L8 9H4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M17 8.5a4 4 0 0 1 0 7M19.5 6a7 7 0 0 1 0 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 9v6h4l5 4V5L8 9H4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M17 9.5l5 5M22 9.5l-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
            {soundOn ? v.mute : v.listen}
          </button>
          <button
            type="button"
            onClick={replay}
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-sns-muted transition-colors duration-300 hover:border-sns-indigo/50 hover:text-sns-accent"
          >
            <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M12 7a5 5 0 1 1-1.5-3.6M12 2v2.5H9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {demo.replay}
          </button>
        </div>
      </div>

      {/* waveform + status */}
      <div className="flex flex-col items-center gap-3 border-b border-white/[0.06] px-4 py-6">
        <div className="flex h-12 items-center gap-[3px]" aria-hidden="true">
          {Array.from({ length: BARS }).map((_, i) => {
            const dist = Math.abs(i - (BARS - 1) / 2)
            const base = 1 - dist / BARS // taller in the middle
            return (
              <span
                key={i}
                className="voice-bar w-1 rounded-full bg-gradient-to-t from-sns-indigo to-sns-cyan"
                style={{
                  height: `${20 + base * 28}px`,
                  transformOrigin: 'center',
                  transform: speaking ? undefined : 'scaleY(0.22)',
                  animation: speaking ? `sns-wave ${0.7 + (i % 5) * 0.09}s ease-in-out ${i * 0.03}s infinite` : 'none',
                  opacity: speaking ? 1 : 0.4,
                  transition: 'opacity 0.3s ease',
                }}
              />
            )
          })}
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sns-faint">
          <span className={speaking ? 'text-sns-cyan' : undefined}>{v.agentLabel}</span> · {speaking ? v.speaking : v.listening}
        </p>
      </div>

      {/* transcript */}
      <div ref={scrollRef} className="flex h-[16rem] flex-col gap-3 overflow-y-auto p-4 md:p-5">
        {script.slice(0, shown).map((msg, i) => {
          const isAgent = msg.from === 'agent'
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: EASE }}>
              <p className={`mb-0.5 font-mono text-[10px] uppercase tracking-[0.16em] ${isAgent ? 'text-sns-accent' : 'text-sns-faint'}`}>
                {isAgent ? v.agentLabel : v.callerLabel}
              </p>
              <p className="text-sm leading-relaxed text-sns-text">{msg.text}</p>
            </motion.div>
          )
        })}

        <AnimatePresence>
          {done && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mt-1 flex items-center gap-2.5 rounded-sns border border-sns-green/25 bg-sns-green/[0.07] px-4 py-3"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sns-green/15 text-sns-green">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.5 8.5 6.5 11.5 12.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <span className="font-mono text-xs leading-snug text-sns-green">{d.qualified}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="border-t border-white/[0.06] px-4 py-2.5 font-mono text-[10px] leading-snug text-sns-faint">{v.note}</p>
    </div>
  )
}
