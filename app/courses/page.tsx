import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Card, CardContent, CardHeader, CardFooter } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Courses at KUG Oriental Academy | Acupuncture, Ayurveda, Yoga & More',
  description: 'Explore professional and diploma courses in Acupuncture, Ayurveda Panchakarma, Cupping Therapy, Yoga, Acupressure, Counselling Psychology, and Holistic Health at KUG Oriental Academy.',
  openGraph: {
    title: 'Courses at KUG Oriental Academy | Acupuncture, Ayurveda, Yoga & More',
    description: 'Explore professional and diploma courses in Acupuncture, Ayurveda Panchakarma, Cupping Therapy, Yoga, Acupressure, Counselling Psychology, and Holistic Health at KUG Oriental Academy.',
  },
  twitter: {
    title: 'Courses at KUG Oriental Academy | Acupuncture, Ayurveda, Yoga & More',
    description: 'Explore professional and diploma courses in Acupuncture, Ayurveda Panchakarma, Cupping Therapy, Yoga, Acupressure, Counselling Psychology, and Holistic Health at KUG Oriental Academy.',
  },
  alternates: {
    canonical: 'https://kugoriental.com/courses',
  },
}

import { courses } from '@/lib/courses'

/* Remove hardcoded courses array */

const filters = [
  { label: 'Category', options: ['All', 'Diploma', 'Certification', 'Workshop'] },
  { label: 'Duration', options: ['All', '1-3 Months', '4-6 Months', '6-12 Months'] },
  { label: 'Mode', options: ['All', 'Online', 'Offline', 'Hybrid'] },
  { label: 'Start Date', options: ['Any', 'This Month', 'Next Month', 'Within 3 Months'] },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen section-padding pt-24 bg-gradient-to-b from-white via-accent-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container-custom space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-primary-600 font-semibold">Programs</p>
          <h1 className="text-4xl font-bold text-accent-900 dark:text-white">Our Professional Courses</h1>
          <p className="text-accent-700 dark:text-slate-300 max-w-3xl mx-auto">
            Explore evidence-based programs with university-recognized certifications, expert-led mentorship, and immersive clinical internships.
          </p>
        </div>

        {/* Filters */}
        <div className="card-premium bg-white/80 dark:bg-slate-900/80 p-6 grid md:grid-cols-4 gap-4">
          {filters.map((filter) => (
            <div key={filter.label} className="flex flex-col space-y-2">
              <label className="text-sm font-semibold text-accent-700 dark:text-slate-200">{filter.label}</label>
              <select className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-accent-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-accent-900 dark:text-white">
                {filter.options.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* Course cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course, idx) => (
            <Card
              key={course.slug}
              className="h-full overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-premium-lg"
              variant={idx % 2 === 0 ? 'glass' : 'gradient'}
            >
              <div className="relative h-40 w-full">
                <Image
                  src={course.img}
                  alt={course.name}
                  fill
                  className="object-cover"
                  sizes="400px"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl font-semibold text-accent-900 dark:text-white leading-tight">{course.name}</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-accent-700 dark:text-slate-200 line-clamp-2">{course.shortDesc}</p>
                <div className="flex items-center gap-2 text-sm text-accent-500 dark:text-slate-400">
                  <span className="bg-primary-50 dark:bg-slate-800 px-2 py-1 rounded-md text-primary-700 dark:text-primary-300 font-medium text-xs border border-primary-100 dark:border-slate-700">{course.details.duration}</span>
                  <span className="bg-secondary-50 dark:bg-slate-800 px-2 py-1 rounded-md text-secondary-700 dark:text-secondary-300 font-medium text-xs border border-secondary-100 dark:border-slate-700">{course.level}</span>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button as="link" href={`/courses/${course.slug}`} variant="primary" size="sm" className="w-full">
                  Course Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

