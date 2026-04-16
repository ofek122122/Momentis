'use client'

import { useEffect, useRef, useState } from 'react'

export function StatCounter({
  value,
  suffix = '',
  prefix = '',
  label,
  duration = 1800,
}: {
  value: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          const start = performance.now()
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration)
            const eased = 1 - Math.pow(1 - p, 3)
            setCount(Math.floor(value * eased))
            if (p < 1) requestAnimationFrame(tick)
            else setCount(value)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value, duration, started])

  return (
    <div ref={ref} className="space-y-2 text-center">
      <div className="font-display text-4xl md:text-5xl font-bold shimmer-text tracking-tight">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </div>
    </div>
  )
}
