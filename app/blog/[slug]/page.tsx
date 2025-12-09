import type { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug

  return {
    title: `${slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')}`,
    description: `Read ${slug.replace(/-/g, ' ')} - Latest article from KUG Oriental Academy blog.`,
    openGraph: {
      title: `${slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')} | KUG Oriental Academy`,
      description: `Read ${slug.replace(/-/g, ' ')} - Latest article from KUG Oriental Academy blog.`,
    },
    twitter: {
      title: `${slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')} | KUG Oriental Academy`,
      description: `Read ${slug.replace(/-/g, ' ')} - Latest article from KUG Oriental Academy blog.`,
    },
  }
}

export default function BlogDetailPage({ params }: Props) {
  const slug = params.slug
  const blogTitle = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')

  return (
    <div className="min-h-screen">
      <div className="container-custom section-padding">
        <h1>{blogTitle}</h1>
        <p className="mt-4 text-lg text-accent-600">
          {/* Content will be added later */}
        </p>
      </div>
    </div>
  )
}

