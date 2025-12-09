'use client'

import { usePathname } from 'next/navigation'
import LeadCapture from './LeadCapture'

export default function LeadCaptureHome() {
  const pathname = usePathname()
  if (pathname !== '/') return null
  return <LeadCapture disableStorage />
}

