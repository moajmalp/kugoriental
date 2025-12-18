'use client'

import { useState } from 'react'
import { Button } from '@/components/ui'
import { courses } from '@/lib/courses'

export default function InterestForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        program: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const phoneNumber = '918921728267'
        const message = `*New Interest Enquiry*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Program:* ${formData.program || 'Not Specified'}

*Message:*
${formData.message}

---------------------------
Submitted via Website Home Page`

        const encodedMessage = encodeURIComponent(message)
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')

        // Optional: Reset form
        setFormData({ name: '', email: '', phone: '', program: '', message: '' })
    }

    return (
        <div className="card-premium p-8 bg-white dark:bg-slate-900 h-full flex flex-col">
            <h3 className="text-2xl font-semibold text-accent-900 dark:text-white mb-6">Tell Us Your Interest</h3>
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-accent-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                        placeholder="Full Name"
                        required
                    />
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-accent-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                    <input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-accent-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                        placeholder="Phone"
                        required
                    />
                    <select
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-accent-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                    >
                        <option value="">Program of Interest</option>
                        {courses.map((course) => (
                            <option key={course.id} value={course.name}>{course.name}</option>
                        ))}
                        <option value="Other">Other</option>
                    </select>
                </div>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-accent-200 dark:border-slate-700 bg-white dark:bg-slate-800 resize-none h-32"
                    placeholder="Your message"
                />
                <div className="flex justify-end pt-2 mt-auto">
                    <Button
                        type="submit"
                        variant="outline"
                        className="w-full justify-center text-primary-700 dark:text-primary-300 border-primary-200 dark:border-primary-800 hover:bg-primary-50 dark:hover:bg-primary-900/50"
                    >
                        Submit Application
                    </Button>
                </div>
            </form>
        </div>
    )
}
