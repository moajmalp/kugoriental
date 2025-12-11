'use client'

import Link from 'next/link'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Resources', href: '/resources' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ],
  courses: [
    { name: 'Acupuncture', href: '/courses' },
    { name: 'Ayurveda Panchakarma', href: '/courses' },
    { name: 'Naturopathy & Yoga', href: '/courses' },
    { name: 'Holistic Health Care', href: '/courses' },
    { name: 'Medical Lab Tech', href: '/courses' },
    { name: 'Cupping Therapy', href: '/courses' },
  ],
}

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Gradient Border Top */}
      <div className="h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-emerald-500 animate-gradient" />

      {/* Decorative wave */}
      <div className="h-12 bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-emerald-500/10 dark:from-primary-500/5 dark:via-secondary-500/5 dark:to-emerald-500/5">
        <svg preserveAspectRatio="none" viewBox="0 0 1200 48" className="h-full w-full">
          <defs>
            <linearGradient id="footerWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <path
            d="M0 48h1200V24c-81.6-10-173.2-20-264-20-124.5 0-168.7 18-293.1 18-99.9 0-146.3-12-229-12-82.8 0-135 8-210.2 8C155 18 119.2 12 0 24V48Z"
            fill="url(#footerWaveGradient)"
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 dark:from-slate-950 dark:via-black dark:to-slate-950 pt-12 pb-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

            {/* About Brand Section */}
            <div className="space-y-5 animate-fade-up">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center font-bold text-white shadow-lg shadow-primary-500/25">
                  K
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">KUG Oriental Academy</h3>
                  <p className="text-sm text-white/60">Government Recognized • ISO Certified</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Elevating alternative medicine education with integrative curricula, clinical immersion,
                and global standards. Join us to shape your holistic health career.
              </p>
              <div className="flex gap-3 pt-2">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-gradient-to-br hover:from-primary-500 hover:to-secondary-500 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                    aria-label={item.name}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="animate-fade-up animation-delay-100">
              <h4 className="text-lg font-semibold text-white mb-5 flex items-center">
                <span className="h-1 w-6 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 mr-3" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group flex items-center text-white/70 hover:text-white transition-colors duration-200"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-500/50 group-hover:bg-primary-400 mr-3 transition-colors" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses Section */}
            <div className="animate-fade-up animation-delay-200">
              <h4 className="text-lg font-semibold text-white mb-5 flex items-center">
                <span className="h-1 w-6 rounded-full bg-gradient-to-r from-secondary-500 to-emerald-500 mr-3" />
                Our Courses
              </h4>
              <ul className="space-y-3">
                {navigation.courses.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group flex items-center text-white/70 hover:text-white transition-colors duration-200"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary-500/50 group-hover:bg-secondary-400 mr-3 transition-colors" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="space-y-5 animate-fade-up animation-delay-300">
              <h4 className="text-lg font-semibold text-white mb-5 flex items-center">
                <span className="h-1 w-6 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 mr-3" />
                Contact Us
              </h4>
              <div className="space-y-4 text-white/70 text-sm">
                <div className="flex items-start space-x-3">
                  <svg className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p>KUG Oriental Academy,<br />Kerala, India</p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-secondary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p>+91 99999 99999</p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p>admissions@kugoriental.com</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="pt-4 border-t border-white/10">
                <h5 className="font-semibold text-white text-sm mb-3">Working Hours</h5>
                <div className="space-y-1.5 text-white/60 text-sm">
                  <p className="flex justify-between"><span>Mon - Fri</span><span>9:00 AM - 6:00 PM</span></p>
                  <p className="flex justify-between"><span>Saturday</span><span>9:00 AM - 2:00 PM</span></p>
                  <p className="flex justify-between"><span>Sunday</span><span>By Appointment</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-6 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/50 text-sm text-center md:text-left">
                © {new Date().getFullYear()} KUG Oriental Academy. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-white/50 text-sm">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <span className="hidden md:inline">|</span>
                <p className="hidden md:block">
                  Crafted with <span className="text-red-400">♥</span> by Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
