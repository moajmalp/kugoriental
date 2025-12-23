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
    default: 'KUG Oriental Academy - Acupuncture, Ayurveda & Holistic Health Excellence',
    template: '%s | KUG Oriental Academy',
  },
  description: 'KUG Oriental Academy is Kerala\'s leading institution for Acupuncture, Ayurveda, Yoga, and Holistic Health education. Government-recognized and ISO-certified.',
  keywords: [
    'alternative medicine Kerala',
    'acupuncture courses Kerala',
    'ayurveda panchakarma training',
    'yoga teacher training Kerala',
    'cupping therapy course',
    'holistic health education',
    'counselling psychology diploma',
    'ISO certified health academy',
    'government recognized medical courses'
  ],
  authors: [{ name: 'KUG Oriental Academy' }],
  creator: 'KUG Oriental Academy',
  publisher: 'KUG Oriental Academy',
  alternates: {
    canonical: 'https://kugoriental.com',
    languages: {
      'en-US': 'https://kugoriental.com',
      'ml-IN': 'https://kugoriental.com/ml', // Placeholder for future Malayalam version
    },
  },
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
    title: 'KUG Oriental Academy - Alternative Medicine & Holistic Health Excellence',
    description: 'Advance your career in alternative medicine with our government-recognized diplomas in Acupuncture, Ayurveda, and more.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KUG Oriental Academy Campus and Training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KUG Oriental Academy - Alternative Medicine Excellence',
    description: 'Government-recognized and ISO-certified institution specializing in alternative medicine education in Kerala.',
    images: ['/og-image.jpg'],
    creator: '@kugoriental',
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
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_ID',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics Placeholder */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <FloatingButtons />
          <Footer />
          <ScrollToTop />
        </Providers>
        {/* Organization Schema */}
        <Script
          id="org-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'KUG Oriental Academy',
              url: 'https://kugoriental.com',
              logo: 'https://kugoriental.com/logo.png',
              description: 'Government-recognized and ISO-certified institution in alternative medicine offering courses in Acupuncture, Ayurveda, and more.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kottakkal',
                addressRegion: 'Kerala',
                addressCountry: 'India'
              },
              sameAs: [
                'https://facebook.com/kugoriental',
                'https://instagram.com/kugoriental',
                'https://www.linkedin.com/company/kug-oriental-academy',
                'https://youtube.com/@kugoriental',
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}

