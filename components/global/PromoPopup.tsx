'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui'

export default function PromoPopup() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        // Check localStorage
        const hasSeenPopup = localStorage.getItem('kug_has_seen_promo_v1')
        if (!hasSeenPopup) {
            // Show after 2 seconds
            const timer = setTimeout(() => setIsOpen(true), 2000)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleClose = () => {
        setIsOpen(false)
        localStorage.setItem('kug_has_seen_promo_v1', 'true')
    }

    // Auto generate illustration or use a nice Unsplash one for Ayurveda
    const promoImage = 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&w=800&q=80'

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full"
                    >
                        <div className="relative h-48 w-full bg-primary-100">
                            <Image
                                src={promoImage}
                                alt="Ayurveda Wellness"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <h2 className="text-2xl font-bold text-white">Unlock Traditional Wisdom</h2>
                            </div>
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 bg-white/20 hover:bg-white text-white hover:text-gray-900 rounded-full p-2 transition-all backdrop-blur-md"
                            >
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        <div className="p-8 text-center space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-gray-900">Start Your Holistic Journey Today!</h3>
                                <p className="text-gray-600">
                                    Get certified in Ayurveda, Acupuncture, and Yoga. Join our next batch and transform your career.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <Button as="link" href="/courses" variant="primary" className="w-full justify-center text-lg py-6 bg-gradient-to-r from-primary-600 to-green-600 shadow-lg shadow-green-500/20" onClick={handleClose}>
                                    Explore Courses
                                </Button>
                                <button onClick={handleClose} className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                                    No thanks, maybe later
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
