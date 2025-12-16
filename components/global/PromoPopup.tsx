'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Button, Input, Select } from '@/components/ui'

const COURSE_OPTIONS = [
    { value: 'acupuncture', label: 'Acupuncture' },
    { value: 'ayurveda', label: 'Ayurveda Panchakarma' },
    { value: 'naturopathy', label: 'Naturopathy & Yoga' },
    { value: 'holistic', label: 'Holistic Health Care' },
]

export default function PromoPopup() {
    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        email: '',
        course: ''
    })

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem('kug_has_seen_promo_v2')
        if (!hasSeenPopup) {
            const timer = setTimeout(() => setIsOpen(true), 2000)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleClose = () => {
        setIsOpen(false)
        localStorage.setItem('kug_has_seen_promo_v2', 'true')
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle submission logic here
        console.log('Form submitted:', formData)
        handleClose()
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-[850px] grid md:grid-cols-[2.5fr_4fr] max-h-[90vh] overflow-y-auto"
                    >
                        {/* Close Button - Visible on Mobile */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 z-20 md:hidden bg-white/20 hover:bg-black/10 text-gray-500 rounded-full p-2 transition-all"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        {/* Left Side - Dark Info Section */}
                        <div className="hidden md:flex flex-col justify-between bg-accent-900 p-6 relative overflow-hidden text-white">
                            {/* Background decoration */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-900/50 to-transparent pointer-events-none" />
                            <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl pointer-events-none" />

                            <div className="relative z-10 space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold leading-tight">
                                        Discover a <span className="text-primary-400 italic">smarter</span> approach to learning
                                    </h2>
                                </div>

                                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                                    <span className="text-primary-300">✨</span>
                                    <span className="text-xs font-medium">Admissions Open for 2025</span>
                                </div>

                                <div className="space-y-3 pt-2">
                                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="flex items-center space-x-2 mb-1">
                                            <div className="h-6 w-6 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-300">
                                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                            </div>
                                            <h3 className="font-semibold text-sm">Expert-Led Courses</h3>
                                        </div>
                                        <p className="text-xs text-white/70">Master Acupuncture, Ayurveda & more with clinical training.</p>
                                    </div>

                                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="flex items-center space-x-2 mb-1">
                                            <div className="h-6 w-6 rounded-lg bg-secondary-500/20 flex items-center justify-center text-secondary-300">
                                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            </div>
                                            <h3 className="font-semibold text-sm">Government Recognized</h3>
                                        </div>
                                        <p className="text-xs text-white/70">ISO certified institution with valid certifications.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10 pt-6">
                                <p className="text-[10px] text-white/50">
                                    Insights by <span className="text-white hover:text-primary-300 transition-colors">Dr. A. K. Pillai (Director)</span>
                                </p>
                            </div>
                        </div>

                        {/* Right Side - Form Section */}
                        <div className="p-6 md:p-8 bg-white relative">
                            {/* Close Button - Desktop */}
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 hidden md:block text-gray-400 hover:text-gray-900 transition-colors"
                            >
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>

                            <div className="flex items-center space-x-4 mb-6">
                                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-primary-100 shadow-sm relative shrink-0">
                                    <Image
                                        src="/team/dr-khadeeja.jpg"
                                        alt="Counselor"
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 leading-tight">Speak to an Expert!</h3>
                                    <p className="text-xs text-gray-500">Academic Counselor & Mentor</p>
                                </div>
                            </div>

                            <div className="mb-5">
                                <p className="text-gray-600 text-sm">
                                    Enter your details to access a quick guide on our course structures and fee details.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-3">
                                <Input
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="bg-gray-50 border-gray-200 focus:bg-white transition-all h-10 text-sm"
                                />

                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium z-10 flex items-center gap-1">
                                        +91 <span className="text-green-500 opacity-80"><svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg></span>
                                    </span>
                                    <Input
                                        placeholder="WhatsApp Number"
                                        value={formData.whatsapp}
                                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                        className="pl-24 bg-gray-50 border-gray-200 focus:bg-white transition-all h-10 text-sm"
                                        required
                                        type="tel"
                                    />
                                </div>

                                <Input
                                    placeholder="Email Address"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="bg-gray-50 border-gray-200 focus:bg-white transition-all h-10 text-sm"
                                />

                                <Select
                                    placeholder="Which course interests you?"
                                    options={COURSE_OPTIONS}
                                    value={formData.course}
                                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                                    className="bg-gray-50 border-gray-200 focus:bg-white transition-all h-10 text-sm"
                                />

                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="w-full h-10 text-sm font-semibold shadow-premium hover:shadow-premium-lg transition-all"
                                >
                                    Access Quick Guide
                                </Button>

                                <p className="text-[10px] text-center text-gray-400 leading-tight px-4 pb-2">
                                    By signing up, you agree to our Terms & Conditions and consent to receive WhatsApp updates.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
