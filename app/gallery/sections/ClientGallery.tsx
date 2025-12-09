'use client'

import Image from 'next/image'
import { useState } from 'react'

const categories = ['All', 'Campus', 'Labs', 'Students', 'Events', 'Clinics']

export interface GalleryItem {
  src: string
  category: string
}

export default function ClientGallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState<string | null>(null)

  const filtered = active === 'All' ? items : items.filter((i) => i.category === active)

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${active === cat
                ? 'bg-primary-600 text-white border-primary-600'
                : 'bg-white dark:bg-slate-800 text-accent-700 dark:text-slate-200 border-accent-200 dark:border-slate-600 hover:border-primary-400 dark:hover:border-primary-500'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((item, idx) => (
          <div
            key={`${item.src}-${idx}`}
            className="break-inside-avoid cursor-pointer overflow-hidden rounded-2xl shadow-premium border border-accent-100 dark:border-slate-700 hover:shadow-premium-lg transition-shadow"
            onClick={() => setLightbox(item.src)}
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={item.src}
                alt={item.category}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-3 text-sm text-accent-600 dark:text-slate-300 bg-white dark:bg-slate-800">{item.category}</div>
          </div>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <div className="relative w-full max-w-5xl aspect-[16/10]">
            <Image src={lightbox} alt="Lightbox" fill className="object-contain" />
          </div>
        </div>
      )}
    </>
  )
}

