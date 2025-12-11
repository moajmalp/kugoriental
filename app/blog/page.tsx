import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest articles, news, and insights about alternative medicine from KUG Oriental Academy.',
  openGraph: {
    title: 'Blog | KUG Oriental Academy',
    description: 'Read the latest articles, news, and insights about alternative medicine from KUG Oriental Academy.',
  },
  twitter: {
    title: 'Blog | KUG Oriental Academy',
    description: 'Read the latest articles, news, and insights about alternative medicine from KUG Oriental Academy.',
  },
}

const posts = [
  {
    title: 'Integrative Healing: Blending Tradition & Science',
    date: 'Oct 5, 2024',
    read: '6 min read',
    img: 'https://images.unsplash.com/photo-1556229010-aa3f7ff66b43?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Why Clinical Internships Matter in Alternative Medicine',
    date: 'Sep 18, 2024',
    read: '5 min read',
    img: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Top Skills for Modern Acupuncture Practitioners',
    date: 'Aug 30, 2024',
    read: '7 min read',
    img: 'https://images.unsplash.com/photo-1554295405-9d66f6a1a049?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Holistic Nutrition: Building Evidence-Based Meal Plans',
    date: 'Aug 12, 2024',
    read: '8 min read',
    img: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Mind-Body Medicine: Techniques for Stress Relief',
    date: 'Jul 21, 2024',
    read: '6 min read',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Building a Career in Alternative Medicine',
    date: 'Jun 30, 2024',
    read: '9 min read',
    img: 'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=900&q=80',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-accent-50 to-white">
      <div className="container-custom section-padding pt-24 space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-primary-600 font-semibold">Insights</p>
          <h1 className="text-4xl font-bold text-accent-900">From Our Blog</h1>
          <p className="text-accent-700 max-w-3xl mx-auto">
            Premium perspectives on integrative health, clinical training, and holistic wellness careers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, idx) => (
            <Card
              key={post.title}
              className="h-full overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-premium-lg"
              variant={idx % 2 === 0 ? 'gradient' : 'glass'}
            >
              <div className="relative h-44 w-full">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="400px"
                  loading="lazy"
                />
              </div>
              <CardHeader className="space-y-2 pb-2">
                <p className="text-sm text-accent-500 flex items-center gap-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.read}</span>
                </p>
                <h3 className="text-xl font-semibold text-accent-900 leading-snug">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:underline"
                >
                  Read More
                  <span aria-hidden>→</span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

