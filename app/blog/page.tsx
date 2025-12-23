import type { Metadata } from 'next'
import { BLOG_POSTS } from '@/lib/blogData'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'Blog | Holistic Health & Alternative Medicine Insights | KUG Oriental Academy',
  description: 'Read articles on holistic healing, acupuncture, Ayurveda, yoga, and wellness education from KUG Oriental Academy experts.',
  openGraph: {
    title: 'Blog | Holistic Health & Alternative Medicine Insights | KUG Oriental Academy',
    description: 'Read articles on holistic healing, acupuncture, Ayurveda, yoga, and wellness education from KUG Oriental Academy experts.',
  },
  alternates: {
    canonical: 'https://kugoriental.com/blog',
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#FAF4E8] dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-secondary-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-bold tracking-wide uppercase animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Our Perspectives
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-accent-900 dark:text-white leading-[1.1] tracking-tight">
              Holistic Health & <span className="text-primary-600 italic">Wellness</span> Blog
            </h1>

            <p className="text-lg md:text-xl text-accent-700 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Deep dives into ancient wisdom, modern medical research, and the future of holistic healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32 container-custom relative z-10">
        <BlogClient initialPosts={BLOG_POSTS} />
      </section>
    </div>
  )
}

