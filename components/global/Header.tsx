'use client'

import Link from 'next/link'
import { useState } from 'react'
import { NAVIGATION } from '@/lib/constants'

const navigation = NAVIGATION.filter((n) => !n.external)
const resultLink = NAVIGATION.find((n) => n.external)

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="mx-auto container-custom">
        <nav
          className="mt-3 flex items-center justify-between px-4 py-3 rounded-2xl bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_20px_70px_rgba(15,23,42,0.15)]"
          aria-label="Global"
        >
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white font-bold flex items-center justify-center shadow-lg">
                K
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-semibold text-gray-900">Oriental Academy</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            {resultLink && (
              <a
                href={resultLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-emerald-500 text-white font-semibold shadow-premium-lg btn-lift"
              >
                Result
              </a>
            )}

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4">
          <div className="mt-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-gray-200 shadow-lg p-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {resultLink && (
              <a
                href={resultLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full justify-center items-center px-4 py-3 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-emerald-500 text-white font-semibold shadow-premium-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Result
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
