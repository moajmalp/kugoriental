import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/lib/blogData'
import BlogShare from './BlogShare'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: `${post.title} | KUG Oriental Academy`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogDetailPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const latestPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-[#FAF4E8] dark:bg-slate-950 pb-32">
      {/* Back Button & Header Region */}
      <section className="pt-28 md:pt-36 pb-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-accent-200 dark:border-slate-800 text-accent-600 dark:text-slate-400 font-bold text-xs uppercase tracking-widest hover:border-primary-500 hover:text-primary-600 transition-all duration-300 shadow-sm"
            >
              <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section: Title & Meta */}
      <section className="pb-12 md:pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8 text-center md:text-left">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-primary-500/10 dark:bg-primary-500/20 text-primary-700 dark:text-primary-300 text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-primary-500/20">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-accent-950 dark:text-white leading-[1.05] tracking-tight text-balance">
                {post.title}
              </h1>
            </div>

            {/* Author & Meta Row */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 py-8 border-y border-accent-200/50 dark:border-slate-800/50">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-xl ring-4 ring-primary-500/5">
                  <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                </div>
                <div className="text-left">
                  <p className="text-accent-950 dark:text-white font-black text-sm">{post.author.name}</p>
                  <p className="text-accent-500 dark:text-slate-500 text-[11px] font-bold uppercase tracking-wider">{post.author.role}</p>
                </div>
              </div>

              <div className="h-10 w-px bg-accent-200/50 dark:bg-slate-800/50 hidden md:block" />

              <div className="flex items-center gap-6 text-[12px] font-bold text-accent-600 dark:text-slate-400 uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Feature Image */}
      <section className="container-custom relative z-10 pb-16 md:pb-24">
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] dark:shadow-none border-4 border-white dark:border-slate-900">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover scale-105"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16 xl:gap-24">
          {/* Article Body */}
          <div className="lg:col-span-8 flex flex-col">
            <article
              className="prose prose-lg md:prose-xl prose-primary max-w-none dark:prose-invert 
              prose-headings:text-accent-950 dark:prose-headings:text-white prose-headings:font-black prose-headings:tracking-tight 
              prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8
              prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6
              prose-p:text-accent-800 dark:prose-p:text-slate-300 prose-p:leading-[1.8] prose-p:mb-10
              prose-blockquote:border-l-8 prose-blockquote:border-primary-500 prose-blockquote:bg-white dark:prose-blockquote:bg-slate-900/50 prose-blockquote:py-8 prose-blockquote:px-10 prose-blockquote:rounded-2xl prose-blockquote:shadow-sm prose-blockquote:not-italic prose-blockquote:text-accent-950 dark:prose-blockquote:text-white prose-blockquote:font-bold prose-blockquote:text-2xl
              prose-strong:text-accent-950 dark:prose-strong:text-white prose-strong:font-black
              prose-ul:space-y-4 prose-li:text-accent-800 dark:prose-li:text-slate-300"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags Region */}
            <div className="mt-20 pt-12 border-t border-accent-200/50 dark:border-slate-800/60 flex flex-wrap gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-accent-400 mt-2 mr-2">Filed under:</span>
              {post.tags.map(tag => (
                <span key={tag} className="px-5 py-2 bg-white dark:bg-slate-900 border border-accent-200 dark:border-slate-800 rounded-xl text-xs font-black text-accent-700 dark:text-slate-300 hover:border-primary-500 hover:text-primary-600 transition-colors cursor-default shadow-sm">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Share Region */}
            <BlogShare title={post.title} url={post.slug} />
          </div>

          {/* Sidebar Area */}
          <aside className="lg:col-span-4 self-start">
            <div className="sticky top-32 space-y-16">
              {/* Premium Academy CTA */}
              <div className="relative p-10 rounded-[2rem] bg-accent-950 text-white overflow-hidden group shadow-2xl">
                {/* Decorative background circle */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl group-hover:bg-primary-500/30 transition-all duration-700" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl group-hover:bg-secondary-500/20 transition-all duration-700" />

                <div className="relative z-10 space-y-6">
                  <div className="w-16 h-1 bg-primary-500 rounded-full" />
                  <h3 className="text-3xl font-black leading-tight italic">Unlock Your Potential in <span className="text-primary-500">Healing.</span></h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Join KUG Oriental Academy and master the art of transformative healthcare through our expert-led programs.
                  </p>
                  <button className="w-full py-4 bg-primary-500 text-white font-black rounded-2xl shadow-xl hover:bg-primary-600 hover:scale-[1.02] active:scale-95 transition-all duration-300">
                    Apply For Enrollment
                  </button>
                </div>
              </div>

              {/* Latest Posts with better thumbnails */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <h3 className="text-lg font-black text-accent-950 dark:text-white uppercase tracking-tighter">More to Read</h3>
                  <div className="flex-grow h-px bg-accent-200/50 dark:bg-slate-800/50" />
                </div>

                <div className="space-y-10">
                  {latestPosts.map(latest => (
                    <Link key={latest.id} href={`/blog/${latest.slug}`} className="group flex gap-5 items-start">
                      <div className="relative w-28 h-20 shrink-0 rounded-2xl overflow-hidden border border-accent-200 dark:border-slate-800 shadow-sm">
                        <Image src={latest.image} alt={latest.title} fill className="object-cover transition-transform duration-700 group-hover:scale-125" />
                      </div>
                      <div className="space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary-600 italic">
                          {latest.category}
                        </span>
                        <h4 className="text-sm font-black text-accent-900 dark:text-white group-hover:text-primary-600 transition-all duration-300 leading-snug line-clamp-2">
                          {latest.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
