import type { Metadata } from 'next'
import ResourcesClient from './ResourcesClient'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Access educational resources, study materials, and learning tools at KUG Oriental Academy.',
}

export default function ResourcesPage() {
  return <ResourcesClient />
}
