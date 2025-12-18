import { Clock, MapPin, Phone, Calendar } from 'lucide-react'
import { Button } from '@/components/ui'

export default function WorkingHours() {
    return (
        <div className="h-full relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
            <div className="relative h-full p-8 md:p-10 flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-xl">
                            <Clock className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Office Hours</h3>
                    </div>

                    <div className="space-y-6">
                        <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                            <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 mb-2">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm font-medium uppercase tracking-wider">Schedule</span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-bold text-slate-800 dark:text-white">Every Day</span>
                            </div>
                            <div className="mt-2 flex items-center gap-2 text-xl text-slate-600 dark:text-slate-300">
                                <span>09:00 AM</span>
                                <span className="text-slate-400">-</span>
                                <span>06:00 PM</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg shrink-0 mt-1">
                                    <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-slate-800 dark:text-white">Visit Campus</h4>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-1">
                                        Oriental Academy, Near Civil Station,<br />
                                        Kozhikode, Kerala - 673020
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg shrink-0">
                                    <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-slate-800 dark:text-white">Contact Us</h4>
                                    <p className="text-slate-600 dark:text-slate-400 mt-1">+91 89217 28267</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                        Need to visit outside hours? We accept appointments.
                    </p>
                    <Button
                        as="link"
                        href="https://wa.me/918921728267"
                        variant="outline"
                        className="w-full justify-center text-primary-700 dark:text-primary-300 border-primary-200 dark:border-primary-800 hover:bg-primary-50 dark:hover:bg-primary-900/50"
                    >
                        Book Appointment
                    </Button>
                </div>
            </div>
        </div>
    )
}
