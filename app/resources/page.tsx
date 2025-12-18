import type { Metadata } from 'next'
import { Button, Card, CardContent, CardHeader } from '@/components/ui'
import dynamic from 'next/dynamic'

// Dynamically import PdfThumbnail to avoid SSR issues with canvas
const PdfThumbnail = dynamic(() => import('@/components/resources/PdfThumbnail'), {
  ssr: false,
  loading: () => <div className="w-full h-40 bg-slate-100 animate-pulse" />
})

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Access educational resources, study materials, and learning tools at KUG Oriental Academy.',
}

const brochures = [
  {
    title: 'KUG Main Brochure',
    file: '/brochures/kug-main-brochure.pdf',
  },
  {
    title: 'Acupuncture Course',
    file: '/brochures/acupuncture-course.pdf',
  },
  {
    title: 'Ayurveda Panchakarma',
    file: '/brochures/ayurveda-panchakarma.pdf',
  },
  {
    title: 'Naturopathy & Yoga',
    file: '/brochures/naturopathy-and-yoga.pdf',
  },
  {
    title: 'Cupping Therapy',
    file: '/brochures/cupping-therapy-course.pdf',
  },
  {
    title: 'Medical Lab Technology',
    file: '/brochures/medical-laboratory-technology.pdf',
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-accent-50 via-white to-accent-50">
      <div className="container-custom section-padding pt-24 space-y-10">
        <div className="text-center space-y-3">
          <p className="text-primary-600 font-semibold">Resources</p>
          <h1 className="text-4xl font-bold text-accent-900">Downloadable Brochures</h1>
          <p className="text-accent-700 max-w-3xl mx-auto">
            Access detailed course information, curriculum guides, and admission prospectuses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brochures.map((item) => (
            <Card key={item.title} className="overflow-hidden h-full flex flex-col hover:shadow-premium-xl transition-shadow duration-300">
              <div className="relative h-60 w-full bg-slate-100 border-b border-slate-100 dark:border-slate-800">
                <PdfThumbnail file={item.file} />
              </div>
              <div className="p-6 flex flex-col flex-1 gap-4">
                <h3 className="text-xl font-bold text-accent-900 line-clamp-2 leading-tight">
                  {item.title}
                </h3>
                <Button
                  as="a"
                  href={item.file}
                  download
                  variant="primary"
                  className="w-full mt-auto"
                >
                  Download Brochure
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
