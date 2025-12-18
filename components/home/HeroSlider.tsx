'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui'

const slides = [
    {
        id: 1,
        title: 'Turn Traditional Wisdom into a Profession',
        subtitle: 'Professional diplomas and certificates designed for modern wellness careers. Learn through expert guidance, hands-on training, and real clinical exposure.',
        image: '/hero-image/hero-1.jpg',
        ctaPrimary: { text: 'View Courses', href: '/courses' },
        ctaSecondary: { text: 'Apply Now', href: '/contact' }
    },
    {
        id: 2,
        title: 'Master Ancient Healing Arts',
        subtitle: 'Government-recognized courses in Acupuncture, Ayurveda, Yoga, and holistic therapies. Begin a meaningful career rooted in natural healing traditions.',
        image: '/hero-image/hero-2.jpg',
        ctaPrimary: { text: 'Explore Courses', href: '/courses' },
        ctaSecondary: { text: 'Download Brochure', href: '/brochures/kug_main_brochure.pdf', target: '_blank' }
    },
    {
        id: 3,
        title: 'Learn, Practice, Heal Naturally',
        subtitle: 'From Panchakarma and Acupuncture to Yoga and Counselling, gain practical skills that empower you to heal, guide, and transform lives naturally.',
        image: '/inhero-3.jpg',
        ctaPrimary: { text: 'Explore Courses', href: '/courses' },
        ctaSecondary: { text: 'Contact Us', href: '/contact' }
    }
]

export default function HeroSlider() {
    const [current, setCurrent] = useState(0)

    // Auto-slide logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="relative min-h-[600px] lg:h-[700px] w-full overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 pt-20 lg:pt-0">
            <div className="container-custom h-full">
                <div className="h-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Content (Text) */}
                    <div className="relative z-10 order-2 lg:order-1 pb-12 lg:pb-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                className="space-y-6 lg:space-y-8"
                            >
                                <span className="inline-block py-1.5 px-4 rounded-full bg-secondary-100 text-secondary-700 font-medium text-sm lg:text-base border border-secondary-200">
                                    {slides[current].id === 1 ? 'Build a Healing Career' : slides[current].id === 2 ? 'Admissions Open 2026' : 'Trusted Holistic Education'}
                                </span>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                                    {slides[current].title}
                                </h1>

                                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                                    {slides[current].subtitle}
                                </p>

                                <div className="flex flex-wrap gap-4 pt-2">
                                    <Button
                                        as="link"
                                        href={slides[current].ctaPrimary.href}
                                        variant="primary"
                                        className="text-lg px-8 py-4 shadow-xl shadow-primary-500/20 hover:scale-105 transition-transform"
                                    >
                                        {slides[current].ctaPrimary.text}
                                    </Button>
                                    {slides[current].ctaSecondary && (
                                        <Button
                                            as="link"
                                            href={slides[current].ctaSecondary.href}
                                            variant="outline"
                                            className="text-lg px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 border-gray-200"
                                        >
                                            {slides[current].ctaSecondary.text}
                                        </Button>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Content (Image) */}
                    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full order-1 lg:order-2 lg:mt-0 mt-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 20, scale: 0.95 }}
                                transition={{ duration: 0.7, ease: 'easeOut' }}
                                className="relative h-full w-full"
                            >
                                {/* Image Container with premium frame */}
                                <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl skew-y-1 transform transition-all duration-500 hover:skew-y-0 group">
                                    <Image
                                        src={slides[current].image}
                                        alt={slides[current].title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        priority
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -z-10 top-10 right-10 h-32 w-32 bg-secondary-200/50 rounded-full blur-3xl animate-pulse" />
                                <div className="absolute -z-10 bottom-10 left-10 h-40 w-40 bg-primary-200/50 rounded-full blur-3xl animate-pulse delay-700" />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-2.5 rounded-full transition-all duration-500 ease-in-out ${idx === current ? 'w-10 bg-primary-600' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}
