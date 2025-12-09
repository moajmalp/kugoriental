import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Card, CardContent, CardHeader, CardFooter } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Courses',
  description: 'Explore our comprehensive range of alternative medicine courses at KUG Oriental Academy.',
  openGraph: {
    title: 'Courses | KUG Oriental Academy',
    description: 'Explore our comprehensive range of alternative medicine courses at KUG Oriental Academy.',
  },
  twitter: {
    title: 'Courses | KUG Oriental Academy',
    description: 'Explore our comprehensive range of alternative medicine courses at KUG Oriental Academy.',
  },
}

const courses = [
  {
    name: 'Professional Diploma in Acupuncture',
    img: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Ayurveda Panchakarma',
    img: 'https://images.unsplash.com/photo-1556229010-aa3f7ff66b43?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Medical Laboratory Technology',
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Cupping Therapy',
    img: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Naturopathy & Yoga',
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Holistic Health Care',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Kalaripayattu',
    img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Acupressure',
    img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Herbal Medicine & Pharmacology',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Clinical Nutrition & Dietetics',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Physiotherapy Basics',
    img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=80&sig=2',
  },
  {
    name: 'Reflexology & Wellness',
    img: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=900&q=80&sig=3',
  },
  {
    name: 'Integrative Wellness Coaching',
    img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80',
  },
].map((course) => ({
  ...course,
  desc: 'Comprehensive curriculum with practical labs and clinical exposure.',
  duration: '6-12 months (placeholder)',
  slug: course.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
}))

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
          <h1 className="text-4xl font-bold text-accent-900 dark:text-white">Courses Built for Holistic Careers</h1>
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
                <h3 className="text-xl font-semibold text-accent-900 dark:text-white">{course.name}</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-accent-700 dark:text-slate-200">{course.desc}</p>
                <p className="text-sm text-accent-500 dark:text-slate-400">{course.duration}</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button as="link" href={`/courses/${course.slug}`} variant="primary" size="sm">
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

