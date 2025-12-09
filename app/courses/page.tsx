import type { Metadata } from 'next'
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
  'Professional Diploma in Acupuncture',
  'Ayurveda Panchakarma',
  'Medical Laboratory Technology',
  'Cupping Therapy',
  'Naturopathy & Yoga',
  'Holistic Health Care',
  'Kalaripayattu',
  'Acupressure',
  'Herbal Medicine & Pharmacology',
  'Clinical Nutrition & Dietetics',
  'Physiotherapy Basics',
  'Reflexology & Wellness',
  'Integrative Wellness Coaching',
].map((name) => ({
  name,
  desc: 'Comprehensive curriculum with practical labs and clinical exposure.',
  duration: 'Duration: 6-12 months (placeholder)',
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
}))

const filters = [
  { label: 'Category', options: ['All', 'Diploma', 'Certification', 'Workshop'] },
  { label: 'Duration', options: ['All', '1-3 Months', '4-6 Months', '6-12 Months'] },
  { label: 'Mode', options: ['All', 'Online', 'Offline', 'Hybrid'] },
  { label: 'Start Date', options: ['Any', 'This Month', 'Next Month', 'Within 3 Months'] },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen section-padding bg-accent-50">
      <div className="container-custom space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-primary-600 font-semibold">Programs</p>
          <h1 className="text-4xl font-bold text-accent-900">Courses Built for Holistic Careers</h1>
          <p className="text-accent-700 max-w-3xl mx-auto">
            Explore evidence-based programs with university-recognized certifications, expert-led mentorship, and immersive clinical internships.
          </p>
        </div>

        {/* Filters */}
        <div className="card-premium bg-white p-6 grid md:grid-cols-4 gap-4">
          {filters.map((filter) => (
            <div key={filter.label} className="flex flex-col space-y-2">
              <label className="text-sm font-semibold text-accent-700">{filter.label}</label>
              <select className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-accent-200 bg-white">
                {filter.options.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* Course cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.slug} className="h-full">
              <CardHeader>
                <h3 className="text-xl font-semibold text-accent-900">{course.name}</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-accent-700">{course.desc}</p>
                <p className="text-sm text-accent-500">{course.duration}</p>
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

