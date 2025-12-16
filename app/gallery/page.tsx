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
  // Events
  { src: '/events/30-768x512.jpg', category: 'Events' },
  { src: '/events/4-copy-2.psd4_.jpg', category: 'Events' },
  { src: '/events/6.jpg', category: 'Events' },
  { src: '/events/69-768x512.jpg', category: 'Events' },
  { src: '/events/71-768x512.jpg', category: 'Events' },
  { src: '/events/DSP06416-1-768x512.jpg', category: 'Events' },
  { src: '/events/DSP06498-1-768x512.jpg', category: 'Events' },
  { src: '/events/DSP06524-2-768x512.jpg', category: 'Events' },
  { src: '/events/DSP06731-1-768x512.jpg', category: 'Events' },
  { src: '/events/DSP06732-1-768x512.jpg', category: 'Events' },
  { src: '/events/DSP07035-1-768x512.jpg', category: 'Events' },
  { src: '/events/DSP07070-1-768x512.jpg', category: 'Events' },
  { src: '/events/WhatsApp-Image-2024-07-23-at-13.41.26_ddff412d-819x1024-1-1-768x960.jpg', category: 'Events' },
  { src: '/events/WhatsApp-Image-2024-07-23-at-13.41.30_6cb71ec3-819x1024-1-1-768x960.jpg', category: 'Events' },
  { src: '/events/WhatsApp-Image-2024-07-23-at-13.41.30_7212a263-819x1024-1-1.jpg', category: 'Events' },
  { src: '/events/qq14-768x512.jpg', category: 'Events' },
  { src: '/events/qq20-768x512.jpg', category: 'Events' },
  { src: '/events/qq6-768x512.jpg', category: 'Events' },
  { src: '/events/qq9-768x512.jpg', category: 'Events' },
  { src: '/events/w5-768x512.jpg', category: 'Events' },

  // Batch 12
  { src: '/batch 12/ABDUSALAM-CK.jpg', category: 'Batch 12' },
  { src: '/batch 12/AFSANA-HABEEB-768x1024.jpg', category: 'Batch 12' },
  { src: '/batch 12/AJHAD-PA.jpg', category: 'Batch 12' },
  { src: '/batch 12/AL-FAIROOZ-SULTHAN-B-A.jpg', category: 'Batch 12' },
  { src: '/batch 12/ANSALNA-KB-768x1020.jpg', category: 'Batch 12' },
  { src: '/batch 12/Ameera-P-768x925.jpg', category: 'Batch 12' },
  { src: '/batch 12/Ansar-Karim.jpg', category: 'Batch 12' },
  { src: '/batch 12/Bismi-Nazar.jpg', category: 'Batch 12' },
  { src: '/batch 12/Daleela-Sharin-KP-768x925.jpg', category: 'Batch 12' },
  { src: '/batch 12/FOUSIYA-JABBAR-D-768x1024.jpg', category: 'Batch 12' },
  { src: '/batch 12/FOUSIYA-KH.jpg', category: 'Batch 12' },
  { src: '/batch 12/Fathimath-sefvana-768x1024.jpg', category: 'Batch 12' },
  { src: '/batch 12/HASEENA-CV-768x1024.jpg', category: 'Batch 12' },
  { src: '/batch 12/HASEENA-KP-695x1024.jpg', category: 'Batch 12' },
  { src: '/batch 12/Habeeba-VK-683x1024.jpg', category: 'Batch 12' },
  { src: '/batch 12/Haseena-AH.jpg', category: 'Batch 12' },
  { src: '/batch 12/Haseena-PP-768x1024.jpg', category: 'Batch 12' },
  { src: '/batch 12/Hashim-SU.jpg', category: 'Batch 12' },
  { src: '/batch 12/Hiba-R-768x962.jpg', category: 'Batch 12' },
  { src: '/batch 12/Jaseela.jpg', category: 'Batch 12' },

  // Batch 15
  { src: '/batch 15/ANEENA-CM.jpg', category: 'Batch 15' },
  { src: '/batch 15/ANSHAD-BI-768x994.jpeg', category: 'Batch 15' },
  { src: '/batch 15/ASNA-KP-766x1024.jpeg', category: 'Batch 15' },
  { src: '/batch 15/BUSHARA-C.jpg', category: 'Batch 15' },
  { src: '/batch 15/HAIRUNNESA.jpg', category: 'Batch 15' },
  { src: '/batch 15/HENNA-C-768x1005.jpeg', category: 'Batch 15' },
  { src: '/batch 15/JUBAIRIYA-M.P.jpg', category: 'Batch 15' },
  { src: '/batch 15/NISHAR-V-740x1024.jpeg', category: 'Batch 15' },
  { src: '/batch 15/NOORUL-HISANA-VY-764x1024.jpeg', category: 'Batch 15' },
  { src: '/batch 15/RAFEEDA-768x997.jpeg', category: 'Batch 15' },
  { src: '/batch 15/RUBEENA-CHEERANGAN-768x999.jpeg', category: 'Batch 15' },
  { src: '/batch 15/SALHA-BEEGUM-768x990.jpeg', category: 'Batch 15' },
  { src: '/batch 15/SANA-FATHIMA-768x993.jpeg', category: 'Batch 15' },
  { src: '/batch 15/SAYYID-HASHIM-AHMAD-768x949.jpg', category: 'Batch 15' },
  { src: '/batch 15/SUMEN-ZAINAB-768x937.jpeg', category: 'Batch 15' },
  { src: '/batch 15/THASLEEMA-IQBAL-768x967.jpg', category: 'Batch 15' },
  { src: '/batch 15/UMAIR-CK-751x1024.jpg', category: 'Batch 15' },
  { src: '/batch 15/ZAKKIYA-FAHEEMA-768x990.jpeg', category: 'Batch 15' },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-accent-50 via-white to-accent-50">
      <div className="container-custom section-padding pt-24 space-y-8">
        <div className="text-center space-y-3">
          <p className="text-primary-600 font-semibold">Gallery</p>
          <h1 className="text-4xl font-bold text-accent-900">Campus, Clinics & Events</h1>
          <p className="text-accent-700 max-w-3xl mx-auto">
            Explore moments from our campus life, modern labs, clinical training, and community events.
          </p>
        </div>
        <ClientGallery items={items} />
      </div>
    </div>
  )
}

