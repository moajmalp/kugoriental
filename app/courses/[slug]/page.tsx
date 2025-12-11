import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { Button } from '@/components/ui'

type Props = {
  params: { slug: string }
}

// Extended Mock Data to match the new Premium Layout requirements
const courseContent = {
  title: 'Professional Diploma in Acupuncture', // Default title for demo
  overview:
    'A comprehensive, evidence-based program blending classical healing with modern clinical practice. Learners gain strong foundations, practical skills, and supervised clinical immersion.',
  description: [
    'Our curriculum is meticulously designed to bridge the gap between traditional wisdom and modern healthcare requirements. Students engage in rigorous theoretical study followed by extensive practical application, ensuring they are job-ready upon graduation.',
    'This course is perfect for those seeking a deep understanding of energy channels, meridian points, and holistic diagnostics. You will learn from seasoned practitioners and gain confidence through real-world case studies.',
  ],
  whatWillYouLearn: [
    'Master core principles of TCM & Acupuncture',
    'Develop diagnostic acumen (Pulse & Tongue)',
    'Needling techniques & safety protocols',
    'Treatment planning for common ailments',
    'Anatomy & Physiology relevant to Acupuncture',
    'Patient management & ethical practice',
  ],
  level: 'Intermediate', // Beginner, Intermediate, Advanced
  provider: {
    name: 'KUG Oriental Academy',
    email: 'admissions@kugoriental.com',
    logo: '/favicon.svg', // Assuming a placeholder logo exists or use a generic one
  },
  audience: [
    'Healthcare Professionals',
    'Yoga Instructors',
    'Wellness Therapists',
    'Medical Students',
  ],
  category: 'Acupuncture',
  brochureUrl: '#',
  thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug || 'course'
  // improved title formatting
  const title = slug.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return {
    title: `${title} | KUG Oriental Academy`,
    description: `Join the ${title} at KUG Oriental Academy. Master holistic health skills with our premium curriculum.`,
  }
}

export default function CourseDetailPage({ params }: Props) {
  const slug = params.slug || 'course'
  const title = slug.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return (
    <div className="min-h-screen bg-white text-gray-900">
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
              name: courseContent.provider.name,
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
      <section className="container-custom py-16">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12">

          {/* LEFT SIDE */}
          <div className="space-y-12">
            {/* A. Course Thumbnail Image */}
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl animate-fade-in group border border-gray-100">
              <Image
                src={courseContent.thumbnail}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* B. Short About the Course */}
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-2xl font-bold text-gray-900">About Course</h2>
              {courseContent.description.map((para, idx) => (
                <p key={idx} className="text-gray-600 leading-relaxed text-lg">
                  {para}
                </p>
              ))}
            </div>

            {/* C. What Will You Learn? */}
            <div className="space-y-6 animate-fade-up animation-delay-100">
              <h2 className="text-2xl font-bold text-gray-900">What Will You Learn?</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {courseContent.whatWillYouLearn.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                    <span className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
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
                className="w-full h-14 text-lg shadow-lg shadow-primary-500/25 btn-lift bg-gradient-to-r from-primary-600 to-primary-500"
              >
                Start Learning
              </Button>

              {/* 2. Course Level */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <span className="text-gray-500 font-medium">Level</span>
                <div className="flex items-center text-gray-900 font-semibold">
                  <span className="h-2.5 w-2.5 rounded-full bg-secondary-500 mr-2" />
                  {courseContent.level}
                </div>
              </div>

              {/* 3. Course Provided By */}
              <div className="flex items-center space-x-4 border-b border-gray-100 pb-4">
                <div className="h-12 w-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm relative overflow-hidden">
                  <Image src={courseContent.provider.logo} alt="Academy Logo" fill className="object-contain p-2" />
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
              <Button
                as="link"
                href={courseContent.brochureUrl}
                variant="outline"
                className="w-full justify-center group border-2 hover:bg-primary-50"
              >
                <span className="mr-2">Download Brochure</span>
                <svg className="h-4 w-4 transform group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
