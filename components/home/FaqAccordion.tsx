'use client'

import { useState } from 'react'

interface Item { q: string; a: string }

export default function FaqAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = open === idx
        return (
          <div key={item.q} className="card-premium card-variant-glass border border-white/20 dark:border-slate-700 overflow-hidden">
            <button
              onClick={() => setOpen(isOpen ? null : idx)}
              className="w-full flex items-center justify-between px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-accent-900 dark:text-white font-semibold">{item.q}</span>
              <span className="text-primary-500">{isOpen ? '−' : '+'}</span>
            </button>
            <div
              className={`px-5 pb-4 text-accent-700 dark:text-slate-300 transition-[max-height,opacity] duration-300 ease-in-out ${
                isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {item.a}
            </div>
          </div>
        )
      })}
    </div>
  )
}

