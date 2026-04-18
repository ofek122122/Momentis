'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

export function NavigationProgress() {
  const pathname = usePathname()
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    if (intervalRef.current) clearInterval(intervalRef.current)

    setProgress(0)
    setVisible(true)

    let p = 0
    intervalRef.current = setInterval(() => {
      p = p < 70 ? p + Math.random() * 15 : p < 90 ? p + Math.random() * 3 : p
      setProgress(Math.min(p, 93))
    }, 80)

    timerRef.current = setTimeout(() => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      setProgress(100)
      setTimeout(() => setVisible(false), 200)
    }, 400)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [pathname])

  if (!visible) return null

  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-[2px] pointer-events-none"
      style={{
        width: `${progress}%`,
        background: 'linear-gradient(90deg, #c5a35c, #e8d5a8, #c5a35c)',
        transition: progress === 100 ? 'width 0.1s ease, opacity 0.2s ease' : 'width 0.08s linear',
        opacity: visible ? 1 : 0,
        boxShadow: '0 0 8px rgba(197,163,92,0.6)',
      }}
    />
  )
}
