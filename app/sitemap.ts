import { MetadataRoute } from 'next'

const baseUrl = 'https://kugoriental.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, changefreq: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, changefreq: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/courses`, changefreq: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/resources`, changefreq: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/gallery`, changefreq: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, changefreq: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, changefreq: 'weekly', priority: 0.6 },
  ]
}

