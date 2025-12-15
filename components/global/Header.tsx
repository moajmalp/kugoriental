'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { NAVIGATION } from '@/lib/constants'
import { useTheme } from './ThemeProvider'

const navigation = NAVIGATION.filter((n) => !n.external)
const resultLink = NAVIGATION.find((n) => n.external)

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggle } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="mx-auto container-custom">
        <nav
          className="mt-3 flex items-center justify-between px-4 py-3 rounded-2xl bg-white/20 dark:bg-slate-900/30 backdrop-blur-2xl border border-white/40 dark:border-slate-800/60 shadow-[0_20px_70px_rgba(15,23,42,0.25)]"
          aria-label="Global"
        >
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex-shrink-0 relative h-16 w-16">
                <Image
                  src="/logo.png"
                  alt="KUG Logo"
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-semibold text-accent-900 dark:text-white">Oriental Academy</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-accent-700 dark:text-slate-200 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-lg flex items-center justify-center btn-lift"
            >
              {theme === 'dark' ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8-9h1M3 12H2m15.364 6.364l.707.707M6.343 6.343l-.707-.707m12.728 0l.707-.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
                </svg>
              )}
            </button>

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
                className="inline-flex items-center justify-center p-2 text-accent-700 dark:text-slate-200 hover:text-primary-600 hover:bg-accent-50 rounded-lg transition-colors"
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
          <div className="mt-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/30 shadow-lg p-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-accent-700 dark:text-slate-200 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
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

