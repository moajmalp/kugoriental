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
    'Acupuncture',
    'Ayurveda Panchakarma',
    'Naturopathy & Yoga',
    'Holistic Health Care',
    'Medical Lab Tech',
    'Cupping Therapy',
  ],
}

const socialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative mt-20 text-white">
      <div className="h-16 bg-gradient-to-r from-primary-500 via-secondary-500 to-emerald-500">
        <svg preserveAspectRatio="none" viewBox="0 0 1200 120" className="h-full w-full fill-[url(#footerGradient)]">
          <defs>
            <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <path d="M0 0h1200v27.4c-81.6 24.5-173.2 49-264 49-124.5 0-168.7-48.6-293.1-48.6-99.9 0-146.3 35.8-229 35.8-82.8 0-135-26.1-210.2-26.1-48.7 0-84.5 7.8-203.7 35.1V0Z" />
        </svg>
      </div>

      <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 pt-12 pb-8">
        <div className="container-custom grid lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center font-bold text-white shadow-lg">
                K
              </div>
              <div>
                <h3 className="text-xl font-semibold">KUG Oriental Academy</h3>
                <p className="text-sm text-white/60">Government Recognized • ISO Certified</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Elevating alternative medicine education with integrative curricula, clinical immersion, and global standards.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/15 transition-all"
                  aria-label={item.name}
                >
                  {item.name.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3 text-white/70 text-sm">
              {navigation.main.map((item) => (
                <Link key={item.name} href={item.href} className="hover:text-white transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Courses</h4>
            <div className="grid grid-cols-2 gap-3 text-white/70 text-sm">
              {navigation.courses.map((item) => (
                <span key={item} className="hover:text-white transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3 text-white/80 text-sm">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <p>Address placeholder</p>
            <p>Phone: +91 99999 99999</p>
            <p>Email: admissions@kugoriental.com</p>
            <div className="pt-2">
              <h5 className="font-semibold text-white">Working Hours</h5>
              <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p>Sat: 9:00 AM - 2:00 PM</p>
              <p>Sun: By Appointment</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10">
          <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-3 py-4">
            <p className="text-white/60 text-sm">© {new Date().getFullYear()} KUG Oriental Academy. All rights reserved.</p>
            <p className="text-white/60 text-sm">Developer: Your Name</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

