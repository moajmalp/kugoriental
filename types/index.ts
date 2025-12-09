// Shared types for the application

export interface NavigationItem {
  name: string
  href: string
  external?: boolean
}

export interface SocialLink {
  name: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export interface Course {
  id: string
  title: string
  slug: string
  description: string
  duration?: string
  level?: string
  image?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author?: string
  publishedAt?: string
  image?: string
}

export interface MetadataProps {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
}

