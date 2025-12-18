import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about KUG Oriental Academy - our mission, vision, and commitment to excellence in alternative medicine education.',
  openGraph: {
    title: 'About Us | KUG Oriental Academy',
    description:
      'Learn about KUG Oriental Academy - our mission, vision, and commitment to excellence in alternative medicine education.',
  },
  twitter: {
    title: 'About Us | KUG Oriental Academy',
    description:
      'Learn about KUG Oriental Academy - our mission, vision, and commitment to excellence in alternative medicine education.',
  },
}

export default function AboutPage() {
  return <AboutClient />
}
