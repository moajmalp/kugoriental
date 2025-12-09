'use client'

import { useEffect, useState } from 'react'

export interface Testimonial {
  name: string
  role: string
  message: string
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
    <div className="card-premium p-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary-50 via-white to-secondary-50 opacity-70" />
      <div className="relative">
        <p className="text-lg text-accent-700 leading-relaxed">“{current.message}”</p>
        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-accent-900 font-semibold">{current.name}</p>
            <p className="text-accent-500 text-sm">{current.role}</p>
          </div>
          <div className="flex space-x-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  i === index ? 'bg-primary-600 w-6' : 'bg-accent-200'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

