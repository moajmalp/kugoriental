'use client'

import { useState } from 'react'
import { Button, Select } from '@/components/ui'

const SERVICES = [
    'Professional Diploma in Acupuncture',
    'Ayurveda Panchakarma',
    'Medical Laboratory Technology',
    'Cupping Therapy',
    'Naturopathy & Yoga',
    'Holistic Health Care',
    'Kalaripayattu',
    'Acupressure',
].map(s => ({ value: s, label: s }))

const PROGRAM_OPTIONS = [
    { value: 'Program of Interest', label: 'Program of Interest' },
    ...SERVICES
]

export default function HomeContactForm() {
    const [program, setProgram] = useState('')

    return (
        <div className="card-premium p-8 bg-white border border-gray-100 shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tell Us Your Interest</h3>
            <form className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                    <input
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-gray-200 bg-white placeholder:text-gray-400 outline-none transition-all"
                        placeholder="Full Name"
                        required
                    />
                    <input
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-gray-200 bg-white placeholder:text-gray-400 outline-none transition-all"
                        type="email"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                    <input
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-gray-200 bg-white placeholder:text-gray-400 outline-none transition-all"
                        placeholder="Phone"
                        required
                    />
                    <Select
                        placeholder="Program of Interest"
                        options={SERVICES}
                        value={program}
                        onChange={(e) => setProgram(e.target.value)}
                        className="bg-white"
                    />
                </div>
                <textarea
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-gray-200 bg-white placeholder:text-gray-400 resize-none outline-none transition-all"
                    rows={4}
                    placeholder="Your message"
                />
                <div className="flex justify-end">
                    <Button type="submit" variant="primary" className="btn-lift shadow-premium">Submit</Button>
                </div>
            </form>
        </div>
    )
}
