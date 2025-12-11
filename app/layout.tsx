import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/global/Header'
import Footer from '@/components/global/Footer'
import LeadCapture from '@/components/global/LeadCapture'
import ScrollToTop from '@/components/global/ScrollToTop'
import WhatsAppButton from '@/components/global/WhatsAppButton'
import Script from 'next/script'
import Providers from './providers'
import FloatingButtons from '@/components/global/FloatingButtons'
import PromoPopup from '@/components/global/PromoPopup'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kugoriental.com'),
  title: {
    default: 'KUG Oriental Academy - Government Recognized & ISO Certified',
    template: '%s | KUG Oriental Academy',
  },
  description: 'KUG Oriental Academy is a government-recognized and ISO-certified institution specializing in alternative medicine education.',
  keywords: ['alternative medicine', 'oriental medicine', 'acupuncture', 'herbal medicine', 'ISO certified', 'government recognized'],
  authors: [{ name: 'KUG Oriental Academy' }],
  creator: 'KUG Oriental Academy',
  publisher: 'KUG Oriental Academy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kugoriental.com',
    siteName: 'KUG Oriental Academy',
    title: 'KUG Oriental Academy - Government Recognized & ISO Certified',
    description: 'KUG Oriental Academy is a government-recognized and ISO-certified institution specializing in alternative medicine education.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KUG Oriental Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KUG Oriental Academy - Government Recognized & ISO Certified',
    description: 'KUG Oriental Academy is a government-recognized and ISO-certified institution specializing in alternative medicine education.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <FloatingButtons />
          <PromoPopup />
          <Footer />
          <ScrollToTop />
        </Providers>
        <Script
          id="org-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'KUG Oriental Academy',
              url: 'https://kugoriental.com',
              logo: 'https://kugoriental.com/logo.png',
              sameAs: [
                'https://facebook.com',
                'https://instagram.com',
                'https://www.linkedin.com',
                'https://youtube.com',
              ],
              description:
                'Government-recognized and ISO-certified institution in alternative medicine.',
            }),
          }}
        />
      </body>
    </html>
  )
}

