import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Button, Card, CardContent, CardHeader, CardFooter } from '@/components/ui'

type Props = {
  params: { slug: string }
}

const courseContent = {
  overview:
    'A comprehensive, evidence-based program blending classical healing with modern clinical practice. Learners gain strong foundations, practical skills, and supervised clinical immersion.',
  objectives: [
    'Master core principles and safety protocols.',
    'Develop diagnostic acumen and treatment planning.',
    'Gain proficiency through labs and simulated practice.',
    'Complete supervised clinical internships.',
  ],
  curriculum: [
    'Module 1: Foundations & Principles',
    'Module 2: Diagnostics & Assessment',
    'Module 3: Treatment Protocols & Safety',
    'Module 4: Lab Simulations & Practical Skills',
    'Module 5: Clinical Internship & Case Logging',
    'Module 6: Professional Practice & Ethics',
  ],
  eligibility: 'Open to graduates and healthcare professionals. Bridge support for beginners.',
  duration: '6-12 months (flexible pathways)',
  fees: 'Fees details to be provided during counseling (placeholder)',
  internship: 'Supervised clinical internships at partner clinics and hospitals.',
  faq: [
    { q: 'Is this course recognized?', a: 'Yes, the academy is government-recognized and ISO-certified.' },
    { q: 'Do I need prior medical background?', a: 'Beginners are supported with foundational modules.' },
    { q: 'Is there job assistance?', a: 'Career guidance and placement support are provided.' },
    { q: 'Can I study online?', a: 'Hybrid and online-friendly modules are available for select batches.' },
  ],
  related: [
    'Naturopathy & Yoga',
    'Holistic Health Care',
    'Ayurveda Panchakarma',
  ],
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug
  const title = `${slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')}`

  return {
    title,
    description: `Learn more about ${slug.replace(/-/g, ' ')} course at KUG Oriental Academy.`,
    openGraph: {
      title: `${title} | KUG Oriental Academy`,
      description: `Learn more about ${slug.replace(/-/g, ' ')} course at KUG Oriental Academy.`,
    },
    twitter: {
      title: `${title} | KUG Oriental Academy`,
      description: `Learn more about ${slug.replace(/-/g, ' ')} course at KUG Oriental Academy.`,
    },
  }
}

export default function CourseDetailPage({ params }: Props) {
  const slug = params.slug
  const title = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')

  return (
    <div className="min-h-screen bg-accent-50">
      <Script
        id="course-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: title,
            description: courseContent.overview,
            provider: {
              '@type': 'Organization',
              name: 'KUG Oriental Academy',
              url: 'https://kugoriental.com',
            },
          }),
        }}
      />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: courseContent.faq.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          }),
        }}
      />
      <div className="container-custom section-padding space-y-10">
        <div className="space-y-3">
          <p className="text-primary-600 font-semibold">Course Details</p>
          <h1 className="text-4xl font-bold text-accent-900">{title}</h1>
          <p className="text-accent-700 max-w-3xl">{courseContent.overview}</p>
          <div className="flex gap-3 flex-wrap">
            <Button as="link" href="/contact" variant="primary">
              Apply Now
            </Button>
            <Button as="link" href="/courses" variant="outline">
              Back to Courses
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-8">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-accent-900">Objectives</h3>
              </CardHeader>
              <CardContent className="space-y-3 text-accent-700">
                {courseContent.objectives.map((item) => (
                  <div key={item} className="flex items-start space-x-3">
                    <span className="mt-1 h-3 w-3 rounded-full bg-primary-500" />
                    <p>{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-accent-900">Curriculum</h3>
              </CardHeader>
              <CardContent className="space-y-3 text-accent-700">
                {courseContent.curriculum.map((module) => (
                  <div key={module} className="flex items-start space-x-3">
                    <span className="mt-1 h-3 w-3 rounded-full bg-secondary-500" />
                    <p>{module}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-accent-900">Clinical Internship</h3>
              </CardHeader>
              <CardContent className="text-accent-700">
                {courseContent.internship}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-accent-900">FAQs</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                {courseContent.faq.map((item) => (
                  <details key={item.q} className="card-premium p-4 bg-white">
                    <summary className="cursor-pointer text-accent-900 font-semibold">{item.q}</summary>
                    <p className="text-accent-700 mt-2">{item.a}</p>
                  </details>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-accent-900">Eligibility</h3>
              </CardHeader>
              <CardContent className="text-accent-700 space-y-3">
                <p>{courseContent.eligibility}</p>
                <p className="text-sm text-accent-500">Bridge modules available for beginners.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="space-y-3 text-accent-700">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-accent-900">Duration</p>
                  <p>{courseContent.duration}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-accent-900">Fees</p>
                  <p>{courseContent.fees}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-accent-900">Download Brochure</h3>
              </CardHeader>
              <CardFooter className="pt-0">
                <Button as="link" href="#" variant="primary" size="sm">
                  Download PDF
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-accent-900">Related Courses</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                {courseContent.related.map((rel) => (
                  <Link
                    key={rel}
                    href={`/courses/${rel.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                    className="text-primary-600 hover:underline font-medium block"
                  >
                    {rel}
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

