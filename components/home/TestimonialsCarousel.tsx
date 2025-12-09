'use client'

import { useEffect, useState } from 'react'

export interface Testimonial {
  name: string
  role: string
  message: string
  image?: string
  rating?: number
}

interface Props {
  items: Testimonial[]
  intervalMs?: number
}

export default function TestimonialsCarousel({ items, intervalMs = 6000 }: Props) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!items.length) return
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [items.length, intervalMs])

  if (!items.length) return null

  const current = items[index]

  return (
    <div className="card-premium card-variant-gradient p-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary-50/70 via-white to-secondary-50/70 dark:from-slate-800/60 dark:via-slate-900/60 dark:to-slate-800/60" />
      <div className="relative flex flex-col md:flex-row gap-6 items-start">
        {current.image && (
          <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-primary-400 shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={current.image} alt={current.name} className="h-full w-full object-cover" loading="lazy" />
          </div>
        )}
        <div className="flex-1 space-y-3">
          <p className="text-lg text-accent-700 dark:text-slate-200 leading-relaxed">“{current.message}”</p>
          <div className="flex items-center gap-2 text-amber-400">
            {Array.from({ length: current.rating ?? 5 }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <div>
            <p className="text-accent-900 dark:text-white font-semibold">{current.name}</p>
            <p className="text-accent-500 dark:text-slate-400 text-sm">{current.role}</p>
          </div>
        </div>
        <div className="flex space-x-2 self-center md:self-end">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? 'bg-primary-600 w-6' : 'bg-accent-200 dark:bg-slate-700 w-2.5'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

