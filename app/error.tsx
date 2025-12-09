'use client'

import { useEffect } from 'react'
import Button from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-accent-50">
      <div className="text-center px-4 max-w-md">
        <h2 className="text-2xl font-semibold text-accent-900 mb-4">
          Something went wrong!
        </h2>
        <p className="text-accent-600 mb-8">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} variant="primary">
            Try again
          </Button>
          <Button as="link" href="/" variant="outline">
            Go Home
          </Button>
        </div>
      </div>
    </div>
  )
}

