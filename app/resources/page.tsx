import type { Metadata } from 'next'
import ResourcesClient from './ResourcesClient'

export const metadata: Metadata = {
  title: 'Resources & Brochures | KUG Oriental Academy',
  description: 'Download brochures and resources for courses in Acupuncture, Ayurveda, Yoga, and Holistic Health at KUG Oriental Academy.',
  openGraph: {
    title: 'Resources & Brochures | KUG Oriental Academy',
    description: 'Download brochures and resources for courses in Acupuncture, Ayurveda, Yoga, and Holistic Health at KUG Oriental Academy.',
  },
  twitter: {
    title: 'Resources & Brochures | KUG Oriental Academy',
    description: 'Download brochures and resources for courses in Acupuncture, Ayurveda, Yoga, and Holistic Health at KUG Oriental Academy.',
  },
  alternates: {
    canonical: 'https://kugoriental.com/resources',
  },
}

export default function ResourcesPage() {
  return <ResourcesClient />
}
