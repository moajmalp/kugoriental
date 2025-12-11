'use client'

import { useEffect, useState } from 'react'
import Button from '@/components/ui/Button'
import { Select } from '@/components/ui'
import Image from 'next/image'

const STORAGE_KEY = 'kug_lead_popup_shown'

const COURSE_OPTIONS = [
  { value: 'acupuncture', label: 'Acupuncture' },
  { value: 'ayurveda', label: 'Ayurveda Panchakarma' },
  { value: 'naturopathy', label: 'Naturopathy & Yoga' },
  { value: 'holistic', label: 'Holistic Health Care' },
]

interface LeadCaptureProps {
  disableStorage?: boolean
}

export default function LeadCapture({ disableStorage = false }: LeadCaptureProps) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [course, setCourse] = useState('')

  useEffect(() => {
    setMounted(true)
    if (!disableStorage) {
      const shown = typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY)
      if (shown) return
    }

    const timer = setTimeout(() => setOpen(true), 12000)

    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY < 20) setOpen(true)
    }
    document.addEventListener('mouseleave', handleExitIntent)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleExitIntent)
    }
  }, [disableStorage])

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
        className="w-full max-w-3xl bg-white rounded-3xl shadow-premium-lg border border-white/20 overflow-hidden animate-slide-up"
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
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 to-emerald-600/30" />
            <div className="relative p-6 text-white space-y-3">
              <p className="text-sm font-semibold">Reserve Your Seat</p>
              <h3 className="text-2xl font-bold leading-tight">Join our next clinical cohort</h3>
              <p className="text-white/80 text-sm">Limited seats • Fast response</p>
            </div>
          </div>
          <form className="p-6 space-y-4 bg-white">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                aria-label="Full Name"
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-gray-200 bg-white text-gray-900 outline-none"
              />
              <input
                required
                aria-label="Phone Number"
                placeholder="Phone"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-gray-200 bg-white text-gray-900 outline-none"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                aria-label="Email Address"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-gray-200 bg-white text-gray-900 outline-none"
              />
              <Select
                placeholder="Course Interest"
                options={COURSE_OPTIONS}
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="bg-white"
              />
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500">
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
              <Button type="submit" variant="primary" className="w-full btn-lift shadow-premium">
                Book My Seat Now
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
