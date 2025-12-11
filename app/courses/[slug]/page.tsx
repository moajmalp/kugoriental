import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { Button } from '@/components/ui'

type Props = {
  params: { slug: string }
}

const courseContent = {
  overview:
    'A comprehensive, evidence-based program blending classical healing with modern clinical practice. Learners gain strong foundations, practical skills, and supervised clinical immersion. This course is designed to provide deep theoretical knowledge combined with extensive hands-on training.',
  whatWillYouLearn: [
    'Master core principles and safety protocols of holistic medicine.',
    'Develop diagnostic acumen and create effective treatment plans.',
    'Gain proficiency through 40+ hours of lab simulations.',
    'Complete supervised clinical internships at partner hospitals.',
    'Understand professional ethics and patient management.',
    'Learn integrative approaches to modern healthcare.',
  ],
  level: 'Intermediate',
  category: 'Holistic Medicine',
  audience: [
    'Medical Graduates (MBBS, BAMS, BHMS)',
    'Physiotherapy Professionals',
    'Nursing Staff',
    'Wellness Coaches',
  ],
  provider: {
    name: 'KUG Oriental Academy',
    email: 'admissions@kugoriental.com',
    logo: 'K', // Placeholder for logo logic
  },
  faq: [
    { q: 'Is this course recognized?', a: 'Yes, the academy is government-recognized and ISO-certified.' },
    { q: 'Do I need prior medical background?', a: 'Beginners are supported with foundational modules.' },
    { q: 'Is there job assistance?', a: 'Career guidance and placement support are provided.' },
  ],
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug
  const title = `${slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')}`

  return {
    title,
    description: `Learn more about ${slug.replace(/-/g, ' ')} course at KUG Oriental Academy.`,
  }
}

export default function CourseDetailPage({ params }: Props) {
  const slug = params.slug
  const title = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')

  return (
    <div className="min-h-screen bg-white">
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

      {/* 1. Premium Header Section */}
      <section className="bg-white pt-28 pb-12 border-b border-gray-100">
        <div className="container-custom text-center space-y-4">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight capitalize mb-4">
            {title}
          </h1>
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center text-sm text-gray-500 space-x-2">
            <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
            <span>&gt;</span>
            <Link href="/courses" className="hover:text-primary-600 transition-colors">Courses</Link>
            <span>&gt;</span>
            <span className="text-gray-900 font-medium capitalize">{title}</span>
          </nav>
        </div>
      </section>

      {/* 2. Main Course Detail Layout */}
      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12">

          {/* LEFT SIDE */}
          <div className="space-y-12">
            {/* A. Course Thumbnail Image */}
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl animate-fade-in group">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80"
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* B. Short About the Course */}
            <div className="space-y-4 animate-fade-up">
              <h2 className="text-2xl font-bold text-gray-900">About Course</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {courseContent.overview}
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our curriculum is meticulously designed to bridge the gap between traditional wisdom and modern healthcare requirements. Students engage in rigorous theoretical study followed by extensive practical application, ensuring they are job-ready upon graduation.
              </p>
            </div>

            {/* C. What Will You Learn? */}
            <div className="space-y-6 animate-fade-up animation-delay-100">
              <h2 className="text-2xl font-bold text-gray-900">What Will You Learn?</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {courseContent.whatWillYouLearn.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                    <span className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE (Sidebar) */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-premium p-8 border border-gray-100 sticky top-28 space-y-8 animate-fade-up animation-delay-200">

              {/* 1. Start Learning Button */}
              <Button
                as="link"
                href="/contact"
                variant="primary"
                className="w-full h-14 text-lg shadow-lg shadow-primary-500/25 btn-lift"
              >
                Start Learning
              </Button>

              {/* 2. Course Level */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <span className="text-gray-500 font-medium">Level</span>
                <div className="flex items-center text-gray-900 font-semibold">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500 mr-2" />
                  {courseContent.level}
                </div>
              </div>

              {/* 3. Course Provided By */}
              <div className="flex items-center space-x-4 border-b border-gray-100 pb-4">
                <div className="h-12 w-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm relative overflow-hidden">
                  <Image src="/favicon.svg" alt="Academy Logo" fill className="object-contain p-2" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">{courseContent.provider.name}</p>
                  <a href={`mailto:${courseContent.provider.email}`} className="text-sm text-primary-600 hover:underline">
                    {courseContent.provider.email}
                  </a>
                </div>
              </div>

              {/* 4. Audience */}
              <div className="space-y-3 border-b border-gray-100 pb-4">
                <span className="text-gray-500 font-medium block">Who is this for?</span>
                <ul className="space-y-2">
                  {courseContent.audience.map((aud, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-300 mr-2" />
                      {aud}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 5. Course Category */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <span className="text-gray-500 font-medium">Category</span>
                <span className="text-gray-900 font-semibold">{courseContent.category}</span>
              </div>

              {/* 6. Course Brochure */}
              <Button variant="outline" className="w-full group btn-lift">
                <span className="mr-2">Download Brochure</span>
                <svg className="h-4 w-4 transform group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
