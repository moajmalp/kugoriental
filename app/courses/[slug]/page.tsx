import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { courses } from '@/lib/courses'
import { CourseDetailContent } from '@/components/courses/CourseDetailContent'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = courses.find((c) => c.slug === params.slug)
  if (!course) return { title: 'Course Not Found' }

  return {
    title: `${course.name} | KUG Oriental Academy`,
    description: `${course.shortDesc} Advance your career with professional training in Kerala, India at KUG Oriental Academy.`,
    alternates: {
      canonical: `https://kugoriental.com/courses/${course.slug}`,
    },
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
            duration: course.details.duration,
            educationalCredentialAwarded: course.level,
          }),
        }}
      />
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://kugoriental.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Courses',
                item: 'https://kugoriental.com/courses',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: course.name,
                item: `https://kugoriental.com/courses/${course.slug}`,
              },
            ],
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
        <CourseDetailContent course={course} />
      </section>
    </div>
  )
}
