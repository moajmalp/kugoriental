import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
    title: 'Contact KUG Oriental Academy | Admissions & Enquiries',
    description: 'Contact KUG Oriental Academy for admissions, course details, and career guidance in holistic and alternative medicine education.',
    openGraph: {
        title: 'Contact KUG Oriental Academy | Admissions & Enquiries',
        description: 'Contact KUG Oriental Academy for admissions, course details, and career guidance in holistic and alternative medicine education.',
    },
    twitter: {
        title: 'Contact KUG Oriental Academy | Admissions & Enquiries',
        description: 'Contact KUG Oriental Academy for admissions, course details, and career guidance in holistic and alternative medicine education.',
    },
    alternates: {
        canonical: 'https://kugoriental.com/contact',
    },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Script
                id="local-business-jsonld"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'LocalBusiness',
                        name: 'KUG Oriental Academy',
                        image: 'https://kugoriental.com/logo.png',
                        '@id': 'https://kugoriental.com/contact',
                        url: 'https://kugoriental.com/contact',
                        telephone: '+91 892 172 8267',
                        email: 'info@kugoriental.com',
                        address: {
                            '@type': 'PostalAddress',
                            streetAddress: 'Thoppil square, Malappuram road',
                            addressLocality: 'Kottakkal',
                            addressRegion: 'Kerala',
                            postalCode: '676503',
                            addressCountry: 'IN'
                        },
                        openingHoursSpecification: [
                            {
                                '@type': 'OpeningHoursSpecification',
                                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                                opens: '09:00',
                                closes: '18:00'
                            },
                            {
                                '@type': 'OpeningHoursSpecification',
                                dayOfWeek: 'Saturday',
                                opens: '09:00',
                                closes: '14:00'
                            }
                        ],
                        sameAs: [
                            'https://www.facebook.com/kugoriental',
                            'https://www.instagram.com/oriental.academy.kottakkal/',
                            'http://www.youtube.com/@iahakottakkal'
                        ]
                    })
                }}
            />
            {children}
        </>
    )
}
