import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About KUG Oriental Academy | Government Recognized Holistic Education Institute',
  description:
    'Learn about KUG Oriental Academy’s mission, vision, expert faculty, and commitment to blending ancient healing traditions with modern science.',
  openGraph: {
    title: 'About KUG Oriental Academy | Government Recognized Holistic Education Institute',
    description:
      'Learn about KUG Oriental Academy’s mission, vision, expert faculty, and commitment to blending ancient healing traditions with modern science.',
  },
  twitter: {
    title: 'About KUG Oriental Academy | Government Recognized Holistic Education Institute',
    description:
      'Learn about KUG Oriental Academy’s mission, vision, expert faculty, and commitment to blending ancient healing traditions with modern science.',
  },
  alternates: {
    canonical: 'https://kugoriental.com/about',
  },
}

export default function AboutPage() {
  return <AboutClient />
}
