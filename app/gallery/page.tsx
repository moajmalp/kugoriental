import type { Metadata } from 'next'
import ClientGallery from './sections/ClientGallery'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'View photos and videos from KUG Oriental Academy - campus life, events, and student activities.',
  openGraph: {
    title: 'Gallery | KUG Oriental Academy',
    description: 'View photos and videos from KUG Oriental Academy - campus life, events, and student activities.',
  },
  twitter: {
    title: 'Gallery | KUG Oriental Academy',
    description: 'View photos and videos from KUG Oriental Academy - campus life, events, and student activities.',
  },
}

const items = [
  { src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80', category: 'Campus' },
  { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80', category: 'Labs' },
  { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80&sig=2', category: 'Labs' },
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80', category: 'Students' },
  { src: 'https://images.unsplash.com/photo-1582719478248-9e85fbde9d2b?auto=format&fit=crop&w=900&q=80', category: 'Clinics' },
  { src: 'https://images.unsplash.com/photo-1550831106-0c70570db5c7?auto=format&fit=crop&w=900&q=80', category: 'Events' },
  { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80', category: 'Students' },
  { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80&sig=3', category: 'Labs' },
  { src: 'https://images.unsplash.com/photo-1530023367847-a683933f4177?auto=format&fit=crop&w=900&q=80', category: 'Clinics' },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-accent-50 via-white to-accent-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container-custom section-padding pt-24 space-y-8">
        <div className="text-center space-y-3">
          <p className="text-primary-600 font-semibold">Gallery</p>
          <h1 className="text-4xl font-bold text-accent-900 dark:text-white">Campus, Clinics & Events</h1>
          <p className="text-accent-700 dark:text-slate-300 max-w-3xl mx-auto">
            Explore moments from our campus life, modern labs, clinical training, and community events.
          </p>
        </div>
        <ClientGallery items={items} />
      </div>
    </div>
  )
}

