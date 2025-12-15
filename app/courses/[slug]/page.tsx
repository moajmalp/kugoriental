import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui'
import { courses } from '@/lib/courses'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = courses.find((c) => c.slug === params.slug)
  if (!course) return { title: 'Course Not Found' }

  return {
    title: `${course.name} | KUG Oriental Academy`,
    description: course.shortDesc,
  }
}

export default function CourseDetailPage({ params }: Props) {
  const course = courses.find((c) => c.slug === params.slug)

  if (!course) {
    notFound()
  }

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
            name: course.name,
            description: course.overview,
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
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight capitalize mb-4 leading-tight">
            {course.name}
          </h1>
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center text-sm text-gray-500 space-x-2">
            <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
            <span>&gt;</span>
            <Link href="/courses" className="hover:text-primary-600 transition-colors">Courses</Link>
            <span>&gt;</span>
            <span className="text-gray-900 font-medium truncate max-w-[200px] md:max-w-none">{course.name}</span>
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
                src={course.img}
                alt={course.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* B. Short About the Course */}
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-2xl font-bold text-gray-900">About Course</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {course.overview}
              </p>
            </div>

            {/* C. What Will You Learn? */}
            <div className="space-y-6 animate-fade-up animation-delay-100">
              <h2 className="text-2xl font-bold text-gray-900">What Will You Learn?</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {course.whatWillYouLearn.map((item, idx) => (
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

              {/* Course Info Grid */}
              <div className="space-y-5">
                {/* Level */}
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-500 font-medium">Level</span>
                  <span className="font-semibold text-gray-900">{course.level}</span>
                </div>

                {/* Duration */}
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-500 font-medium">Duration</span>
                  <span className="font-semibold text-gray-900">{course.details.duration}</span>
                </div>

                {/* Fee */}
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-500 font-medium">Fee</span>
                  <span className="font-semibold text-primary-600 text-lg">{course.details.fee}</span>
                </div>

                {/* Eligibility */}
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-500 font-medium">Eligibility</span>
                  <span className="font-semibold text-gray-900 text-right max-w-[60%]">{course.details.eligibility}</span>
                </div>

                {/* Medium */}
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-500 font-medium">Medium</span>
                  <span className="font-semibold text-gray-900">{course.details.medium}</span>
                </div>

                {/* Mode */}
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-500 font-medium">Program Code</span>
                  <span className="font-semibold text-gray-900">{course.details.programCode}</span>
                </div>
              </div>


              {/* 4. Audience */}
              <div className="space-y-3 pt-2">
                <span className="text-gray-500 font-medium block">Who is this for?</span>
                <ul className="space-y-2">
                  {course.audience.map((aud, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-300 mr-2" />
                      {aud}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exam Info */}
              <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600 space-y-2 border border-gray-100">
                <div className="flex justify-between">
                  <span>Exams:</span>
                  <span className="font-medium text-gray-900">{course.details.examination}</span>
                </div>
                <div className="flex justify-between">
                  <span>Practical:</span>
                  <span className="font-medium text-gray-900">{course.details.practicalTraining}</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
