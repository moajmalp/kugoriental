'use client'

import { useState, useMemo } from 'react'

interface CalendarProps {
    value?: Date
    onChange?: (date: Date) => void
    minDate?: Date
    maxDate?: Date
    className?: string
}

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]

export default function CustomCalendar({ value, onChange, minDate, maxDate, className = '' }: CalendarProps) {
    const [currentDate, setCurrentDate] = useState(value || new Date())

    // Use useMemo for calendar calculation to avoid re-renders
    const calendarData = useMemo(() => {
        const year = currentDate.getFullYear()
        const month = currentDate.getMonth()

        const firstDay = new Date(year, month, 1)
        const lastDay = new Date(year, month + 1, 0)

        const startingDayIndex = firstDay.getDay()
        const daysInMonth = lastDay.getDate()

        // Previous month filler days
        const prevMonthDays: number[] = []
        const prevMonthLastDay = new Date(year, month, 0).getDate()
        for (let i = startingDayIndex - 1; i >= 0; i--) {
            prevMonthDays.push(prevMonthLastDay - i)
        }

        // Current month days
        const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1)

        // Next month filler days (to complete 42 day grid - 6 rows)
        const totalDaysShown = prevMonthDays.length + currentMonthDays.length
        const nextMonthDaysCount = 42 - totalDaysShown
        const nextMonthDays = Array.from({ length: nextMonthDaysCount }, (_, i) => i + 1)

        return { prevMonthDays, currentMonthDays, nextMonthDays }
    }, [currentDate])

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
    }

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
    }

    const handleDateClick = (day: number, type: 'current' | 'prev' | 'next') => {
        let newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)

        if (type === 'prev') {
            newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, day)
        } else if (type === 'next') {
            newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, day)
        }

        if (onChange) onChange(newDate)
        setCurrentDate(newDate) // Update view to selected date
    }

    const isSelected = (day: number, type: 'current' | 'prev' | 'next') => {
        if (!value) return false

        let checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
        if (type === 'prev') checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, day)
        if (type === 'next') checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, day)

        return (
            checkDate.getDate() === value.getDate() &&
            checkDate.getMonth() === value.getMonth() &&
            checkDate.getFullYear() === value.getFullYear()
        )
    }

    const isToday = (day: number, type: 'current' | 'prev' | 'next') => {
        const today = new Date()
        let checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
        if (type === 'prev') checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, day)
        if (type === 'next') checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, day)

        return (
            checkDate.getDate() === today.getDate() &&
            checkDate.getMonth() === today.getMonth() &&
            checkDate.getFullYear() === today.getFullYear()
        )
    }

    return (
        <div className={`p-4 bg-white rounded-2xl shadow-xl border border-gray-100 max-w-sm ${className}`}>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">
                    {MONTHS[currentDate.getMonth()]} <span className="text-primary-500">{currentDate.getFullYear()}</span>
                </h3>
                <div className="flex gap-2">
                    <button
                        onClick={prevMonth}
                        className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors"
                        type="button"
                    >
                        ←
                    </button>
                    <button
                        onClick={nextMonth}
                        className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors"
                        type="button"
                    >
                        →
                    </button>
                </div>
            </div>

            {/* Weekdays */}
            <div className="grid grid-cols-7 mb-2">
                {DAYS.map(day => (
                    <div key={day} className="text-center text-xs font-semibold text-gray-400 py-2">
                        {day}
                    </div>
                ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-1">
                {/* Prev Month Days */}
                {calendarData.prevMonthDays.map(day => (
                    <button
                        key={`prev-${day}`}
                        onClick={() => handleDateClick(day, 'prev')}
                        className={`
              h-10 w-10 text-sm flex items-center justify-center rounded-full transition-all duration-200
              text-gray-300 hover:bg-gray-50
              ${isSelected(day, 'prev') ? 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/30' : ''}
            `}
                        type="button"
                    >
                        {day}
                    </button>
                ))}

                {/* Current Month Days */}
                {calendarData.currentMonthDays.map(day => {
                    const selected = isSelected(day, 'current')
                    const today = isToday(day, 'current')

                    return (
                        <button
                            key={`curr-${day}`}
                            onClick={() => handleDateClick(day, 'current')}
                            className={`
                h-10 w-10 text-sm flex items-center justify-center rounded-full transition-all duration-200
                ${selected
                                    ? 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white font-bold shadow-lg shadow-primary-500/30 scale-105'
                                    : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                                }
                ${today && !selected ? 'border-2 border-primary-200 text-primary-600 font-semibold' : ''}
              `}
                            type="button"
                        >
                            {day}
                        </button>
                    )
                })}

                {/* Next Month Days */}
                {calendarData.nextMonthDays.map(day => (
                    <button
                        key={`next-${day}`}
                        onClick={() => handleDateClick(day, 'next')}
                        className={`
              h-10 w-10 text-sm flex items-center justify-center rounded-full transition-all duration-200
              text-gray-300 hover:bg-gray-50
              ${isSelected(day, 'next') ? 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/30' : ''}
            `}
                        type="button"
                    >
                        {day}
                    </button>
                ))}
            </div>
        </div>
    )
}
