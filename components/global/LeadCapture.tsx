'use client'

import { useEffect, useState } from 'react'
import Button from '@/components/ui/Button'

const STORAGE_KEY = 'kug_lead_popup_shown'

export default function LeadCapture() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const shown = typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY)
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
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, 'true')
    }
  }

  if (!mounted || !open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Lead capture popup"
      onClick={close}
    >
      <div
        className="w-full max-w-lg bg-white rounded-3xl shadow-premium-lg border border-accent-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 space-y-3 bg-gradient-to-r from-primary-50 to-secondary-50">
          <p className="text-sm font-semibold text-primary-700">Reserve Your Seat</p>
          <h3 className="text-2xl font-bold text-accent-900 leading-tight">Join our next cohort</h3>
          <p className="text-accent-700">Limited seats for clinical tracks. We will contact you shortly.</p>
        </div>
        <form className="p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              required
              aria-label="Full Name"
              placeholder="Full Name"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-accent-200"
            />
            <input
              required
              aria-label="Phone Number"
              placeholder="Phone"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-accent-200"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              required
              aria-label="Email Address"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-accent-200"
            />
            <select
              aria-label="Course Interest"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-accent-200 bg-white"
            >
              <option>Course Interest</option>
              <option>Acupuncture</option>
              <option>Ayurveda Panchakarma</option>
              <option>Naturopathy & Yoga</option>
              <option>Holistic Health Care</option>
            </select>
          </div>
          <div className="flex justify-between items-center text-sm text-accent-500">
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
              Reserve My Seat
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

