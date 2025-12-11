import type { Metadata } from 'next'
import Image from 'next/image'
import { Button, Card, CardContent, CardHeader } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Access educational resources, study materials, and learning tools at KUG Oriental Academy.',
  openGraph: {
    title: 'Resources | KUG Oriental Academy',
    description: 'Access educational resources, study materials, and learning tools at KUG Oriental Academy.',
  },
  twitter: {
    title: 'Resources | KUG Oriental Academy',
    description: 'Access educational resources, study materials, and learning tools at KUG Oriental Academy.',
  },
}

const brochures = [
  'Acupuncture Program Overview',
  'Ayurveda Panchakarma Guide',
  'Naturopathy & Yoga Prospectus',
  'Clinical Internship Handbook',
  'Holistic Health Care Pathway',
  'Admissions & Fees Brochure',
].map((title, idx) => ({
  title,
  img: `https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80&sig=${idx}`,
  link: '#',
}))

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-accent-50 via-white to-accent-50">
      <div className="container-custom section-padding pt-24 space-y-10">
        <div className="text-center space-y-3">
          <p className="text-primary-600 font-semibold">Resources</p>
          <h1 className="text-4xl font-bold text-accent-900">Downloadable Brochures</h1>
          <p className="text-accent-700 max-w-3xl mx-auto">
            Access program details, internship guides, and admissions information in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {brochures.map((item) => (
            <Card key={item.title} className="overflow-hidden h-full">
              <div className="relative h-40 w-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <h3 className="text-lg font-semibold text-accent-900">{item.title}</h3>
              </CardHeader>
              <CardContent className="pt-0">
                <Button as="link" href={item.link} variant="primary" size="sm">
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

