'use client'

import { useState } from 'react'

interface Item { q: string; a: string }

export default function FaqAccordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx
        return (
          <div
            key={item.q}
            className="rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between px-6 py-5 text-left group"
              aria-expanded={isOpen}
            >
              <span className="text-gray-900 dark:text-white font-semibold pr-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {item.q}
              </span>
              {/* Plus/Minus Icon with animation */}
              <span className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center transition-all duration-300">
                <span className="relative h-4 w-4">
                  {/* Horizontal line (always visible) */}
                  <span className="absolute top-1/2 left-0 w-full h-0.5 bg-primary-600 dark:bg-primary-400 transform -translate-y-1/2 transition-transform duration-300" />
                  {/* Vertical line (rotates to form + or -) */}
                  <span
                    className={`absolute top-0 left-1/2 h-full w-0.5 bg-primary-600 dark:bg-primary-400 transform -translate-x-1/2 transition-transform duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                      }`}
                  />
                </span>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <div className="px-6 pb-6 text-gray-600 dark:text-slate-300 leading-relaxed border-t border-gray-100 dark:border-slate-800 pt-4">
                {item.a}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
