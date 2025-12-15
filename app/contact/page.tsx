'use client'

import { useState } from 'react'
import { Button, Select } from '@/components/ui'

const COURSE_OPTIONS = [
  { value: 'acupuncture', label: 'Acupuncture' },
  { value: 'ayurveda', label: 'Ayurveda Panchakarma' },
  { value: 'naturopathy', label: 'Naturopathy & Yoga' },
  { value: 'holistic', label: 'Holistic Health Care' },
]

export default function ContactPage() {
  const [course, setCourse] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-secondary-50">
      <div className="container-custom section-padding pt-24 space-y-12">
        <div className="text-center space-y-3 animate-fade-up">
          <p className="text-primary-600 font-semibold">Contact</p>
          <h1 className="text-4xl font-bold text-gray-900">Connect With Our Admissions Team</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Reach out for program inquiries, campus visits, or personalized counseling.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          {/* Contact details */}
          <div className="space-y-6 animate-fade-up animation-delay-100">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900">Contact Info</h3>
              <div className="mt-6 space-y-5">
                {/* Address */}
                <a
                  href="https://maps.app.goo.gl/kmFJkaiSNDWyCYuR8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 text-gray-600 group hover:text-primary-600 transition-colors"
                >
                  <div className="h-10 w-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                    <svg className="h-5 w-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Visit Us</p>
                    <p className="text-sm mt-0.5">Thoppil square, Malappuram road, Kottakkal, Kerala 676503, India</p>
                    <span className="text-xs text-primary-500 font-medium mt-1 inline-block border-b border-primary-200 group-hover:border-primary-500 transition-all">Open in Maps</span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+918921728267"
                  className="flex items-start space-x-4 text-gray-600 group hover:text-secondary-600 transition-colors"
                >
                  <div className="h-10 w-10 rounded-full bg-secondary-50 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-100 transition-colors">
                    <svg className="h-5 w-5 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Call Us</p>
                    <p className="text-sm mt-0.5">+91 892 172 8267</p>
                    <span className="text-xs text-secondary-500 font-medium mt-1 inline-block border-b border-secondary-200 group-hover:border-secondary-500 transition-all">Click to Dial</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@kugoriental.com"
                  className="flex items-start space-x-4 text-gray-600 group hover:text-emerald-600 transition-colors"
                >
                  <div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                    <svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email Us</p>
                    <p className="text-sm mt-0.5">info@kugoriental.com</p>
                    <span className="text-xs text-emerald-500 font-medium mt-1 inline-block border-b border-emerald-200 group-hover:border-emerald-500 transition-all">Send Email</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918921728267"
                  className="flex items-start space-x-4 text-gray-600 group hover:text-green-600 transition-colors"
                >
                  <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">WhatsApp</p>
                    <p className="text-sm mt-0.5">Chat with us</p>
                    <span className="text-xs text-green-500 font-medium mt-1 inline-block border-b border-green-200 group-hover:border-green-500 transition-all">Open Chat</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900">Working Hours</h3>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Mon - Fri</span><span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Saturday</span><span className="font-medium text-gray-900">9:00 AM - 2:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span><span className="text-primary-500">By Appointment</span></li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 animate-fade-up animation-delay-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Send a Message</h3>
            <p className="text-gray-500 mb-6">We'll get back to you within 24 hours.</p>
            <form className="grid gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 transition-all outline-none"
                  placeholder="Name"
                  required
                />
                <input
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 transition-all outline-none"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 transition-all outline-none"
                  placeholder="Phone"
                  required
                />
                <Select
                  placeholder="Course Interested"
                  options={COURSE_OPTIONS}
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="bg-white"
                />
              </div>
              <textarea
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 resize-none transition-all outline-none"
                rows={5}
                placeholder="Message"
                required
              />
              <div className="flex justify-end">
                <Button type="submit" variant="primary" className="btn-lift shadow-premium">Submit Message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
