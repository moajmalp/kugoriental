import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest articles, news, and insights about alternative medicine from KUG Oriental Academy.',
  openGraph: {
    title: 'Blog | KUG Oriental Academy',
    description: 'Read the latest articles, news, and insights about alternative medicine from KUG Oriental Academy.',
  },
  twitter: {
    title: 'Blog | KUG Oriental Academy',
    description: 'Read the latest articles, news, and insights about alternative medicine from KUG Oriental Academy.',
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <div className="container-custom section-padding">
        <h1>Blog</h1>
        <p className="mt-4 text-lg text-accent-600">
          {/* Content will be added later */}
        </p>
      </div>
    </div>
  )
}

