'use client'

import { useState, useRef, useEffect, KeyboardEvent } from 'react'

interface Option {
  value: string
  label: string
}

interface SelectProps {
  label?: string
  error?: string
  helperText?: string
  options: Option[]
  value?: string
  onChange?: (e: { target: { value: string } }) => void // Mimic event for compatibility
  placeholder?: string
  className?: string
  required?: boolean
  id?: string
  name?: string
}

export default function Select({
  label,
  error,
  helperText,
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  className = '',
  required,
  id,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const containerRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find((opt) => opt.value === value)

  const handleSelect = (option: Option) => {
    if (onChange) {
      onChange({ target: { value: option.value } })
    }
    setIsOpen(false)
    setFocusedIndex(-1)
  }

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Keyboard navigation
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault()
        setIsOpen(true)
        setFocusedIndex(options.findIndex(o => o.value === value) || 0)
      }
      return
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setFocusedIndex((prev) => (prev < options.length - 1 ? prev + 1 : prev))
        break
      case 'ArrowUp':
        e.preventDefault()
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : prev))
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        if (focusedIndex >= 0 && focusedIndex < options.length) {
          handleSelect(options[focusedIndex])
        }
        break
      case 'Escape':
        setIsOpen(false)
        break
      case 'Tab':
        setIsOpen(false)
        break
    }
  }

  return (
    <div className={`w-full relative ${className}`} ref={containerRef}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={label ? id : undefined}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className={`w-full px-4 py-3 bg-white border rounded-xl text-left flex items-center justify-between transition-all duration-200 outline-none
          ${error
            ? 'border-red-300 focus:ring-2 focus:ring-red-500/50'
            : 'border-gray-200 hover:border-primary-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10'
          }
          ${isOpen ? 'ring-4 ring-primary-500/10 border-primary-500' : ''}
        `}
      >
        <span className={`block truncate ${!selectedOption ? 'text-gray-400' : 'text-gray-900'}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
          <svg className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute z-50 w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 origin-top
          ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
        `}
      >
        <ul
          className="max-h-60 overflow-auto py-1 custom-scrollbar focus:outline-none"
          role="listbox"
          tabIndex={-1}
        >
          {options.map((option, idx) => {
            const isSelected = option.value === value
            const isFocused = focusedIndex === idx
            return (
              <li
                key={option.value}
                id={`option-${idx}`}
                role="option"
                aria-selected={isSelected}
                className={`cursor-pointer select-none relative py-3 pl-4 pr-9 transition-colors duration-150
                  ${isSelected ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-900'}
                  ${isFocused ? 'bg-gray-50' : ''}
                  hover:bg-gray-50
                `}
                onClick={() => handleSelect(option)}
                onMouseEnter={() => setFocusedIndex(idx)}
              >
                <span className={`block truncate ${isSelected ? 'font-semibold' : 'font-normal'}`}>
                  {option.label}
                </span>

                {isSelected && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-primary-600">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </li>
            )
          })}
        </ul>
      </div>

      {/* Error / Helper Text */}
      {error && <p className="mt-1 text-sm text-red-600 animate-slide-up">{error}</p>}
      {helperText && !error && <p className="mt-1 text-sm text-gray-500">{helperText}</p>}
    </div>
  )
}
