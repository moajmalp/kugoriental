'use client'

import { useState } from 'react'
import { Button } from '@/components/ui'
import EnquiryModal from '@/components/global/EnquiryModal'

export default function CtaBanner() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <section className="section-padding relative">
            <div className="container-custom">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 text-white p-10 md:p-12 shadow-premium-lg">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_#fff,_transparent_35%)]" />
                    <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold">Advance Your Career in Alternative Medicine</h2>
                            <p className="text-white/90 max-w-2xl">
                                Join a premium learning pathway with immersive clinical training and mentorship
                                from renowned practitioners.
                            </p>
                        </div>
                        <Button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-white text-primary-700 hover:bg-white/90 border-none rounded-full px-8 py-6 text-lg font-bold shadow-2xl hover:shadow-white/20 transition-all transform hover:scale-105 flex items-center gap-2 group"
                        >
                            Enquire Now
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>

            <EnquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    )
}
