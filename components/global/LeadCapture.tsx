'use client'

import { useEffect, useState } from 'react'
import Button from '@/components/ui/Button'
import Image from 'next/image'

const STORAGE_KEY = 'kug_lead_popup_shown'

export default function LeadCapture({ disableStorage = false }: { disableStorage?: boolean }) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const shown = !disableStorage && typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY)
    if (shown) return

    const timer = setTimeout(() => setOpen(true), 12000)

    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY < 20) setOpen(true)
    }
    document.addEventListener('mouseleave', handleExitIntent)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleExitIntent)
    }
  }, [])

  const close = () => {
    setOpen(false)
    if (!disableStorage && typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, 'true')
    }
  }

  if (!mounted || !open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-fade-in px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Lead capture popup"
      onClick={close}
    >
      <div
        className="w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl shadow-premium-lg border border-white/20 overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[260px] bg-gradient-to-br from-primary-500 via-secondary-500 to-emerald-500">
            <Image
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
              alt="Healthcare professional"
              fill
              className="object-cover mix-blend-overlay"
              sizes="400px"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 to-emerald-600/50" />
            <div className="relative p-6 text-white space-y-3">
              <p className="text-sm font-semibold">Reserve Your Seat</p>
              <h3 className="text-2xl font-bold leading-tight">Join our next clinical cohort</h3>
              <p className="text-white/80 text-sm">Limited seats • Fast response</p>
            </div>
          </div>
          <form className="p-6 space-y-4 bg-white dark:bg-slate-900">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                aria-label="Full Name"
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-accent-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-accent-900 dark:text-white"
              />
              <input
                required
                aria-label="Phone Number"
                placeholder="Phone"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-accent-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-accent-900 dark:text-white"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                aria-label="Email Address"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-accent-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-accent-900 dark:text-white"
              />
              <select
                aria-label="Course Interest"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-accent-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-accent-900 dark:text-white"
              >
                <option>Course Interest</option>
                <option>Acupuncture</option>
                <option>Ayurveda Panchakarma</option>
                <option>Naturopathy & Yoga</option>
                <option>Holistic Health Care</option>
              </select>
            </div>
            <div className="flex justify-between items-center text-sm text-accent-500 dark:text-slate-400">
              <span>We respect your privacy.</span>
              <button
                type="button"
                onClick={close}
                className="text-primary-600 hover:underline focus:outline-none"
                aria-label="Close popup"
              >
                Close
              </button>
            </div>
            <div className="pt-2">
              <Button type="submit" variant="primary" className="w-full btn-lift">
                Book My Seat Now
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

