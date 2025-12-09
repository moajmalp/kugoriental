import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-accent-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-accent-900 mb-4">Page Not Found</h2>
        <p className="text-accent-600 mb-8">
          The page you are looking for could not be found.
        </p>
        <Link
          href="/"
          className="btn-primary"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

