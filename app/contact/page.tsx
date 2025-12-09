import type { Metadata } from 'next'
import { Button } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with KUG Oriental Academy. Contact us for admissions, inquiries, or more information.',
  openGraph: {
    title: 'Contact Us | KUG Oriental Academy',
    description:
      'Get in touch with KUG Oriental Academy. Contact us for admissions, inquiries, or more information.',
  },
  twitter: {
    title: 'Contact Us | KUG Oriental Academy',
    description:
      'Get in touch with KUG Oriental Academy. Contact us for admissions, inquiries, or more information.',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-accent-50">
      <div className="container-custom section-padding space-y-12">
        <div className="text-center space-y-3">
          <p className="text-primary-600 font-semibold">Contact</p>
          <h1 className="text-4xl font-bold text-accent-900">Connect With Our Admissions Team</h1>
          <p className="text-accent-700 max-w-3xl mx-auto">
            Reach out for program inquiries, campus visits, or personalized counseling.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          {/* Contact details */}
          <div className="card-premium p-8 bg-white space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-accent-900">Contact Info</h3>
              <p className="text-accent-700 mt-2">KUG Oriental Academy</p>
              <p className="text-accent-700">Address placeholder</p>
              <p className="text-accent-700">Phone: +91 99999 99999</p>
              <p className="text-accent-700">Email: admissions@kugoriental.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-accent-900">Working Hours</h3>
              <ul className="mt-3 space-y-2 text-accent-700">
                <li className="flex justify-between"><span>Mon - Fri</span><span>9:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span><span>9:00 AM - 2:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span><span>By Appointment</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-accent-900">Social</h3>
              <div className="flex gap-3 mt-2 text-primary-600 font-medium">
                <a href="#" className="hover:underline">Facebook</a>
                <a href="#" className="hover:underline">Instagram</a>
                <a href="#" className="hover:underline">LinkedIn</a>
                <a href="#" className="hover:underline">YouTube</a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-accent-100">
              <div className="bg-accent-100 h-56 flex items-center justify-center text-accent-600">
                Google Map placeholder
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card-premium p-8 bg-white">
            <h3 className="text-2xl font-semibold text-accent-900 mb-4">Send a Message</h3>
            <form className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-accent-200"
                  placeholder="Name"
                  required
                />
                <input
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-accent-200"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-accent-200"
                  placeholder="Phone"
                  required
                />
                <select className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-accent-200 bg-white">
                  <option>Course Interested</option>
                  <option>Acupuncture</option>
                  <option>Ayurveda Panchakarma</option>
                  <option>Naturopathy & Yoga</option>
                  <option>Holistic Health Care</option>
                </select>
              </div>
              <textarea
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent border-accent-200 resize-none"
                rows={5}
                placeholder="Message"
                required
              />
              <div className="flex justify-end">
                <Button type="submit" variant="primary">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

