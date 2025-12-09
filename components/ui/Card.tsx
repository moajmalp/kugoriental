import { ReactNode } from 'react'

type Variant = 'default' | 'gradient' | 'glass' | 'white' | 'icon'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  variant?: Variant
}

const variantClass: Record<Variant, string> = {
  default: 'card-premium',
  gradient: 'card-premium card-variant-gradient',
  glass: 'card-premium card-variant-glass',
  white: 'card-premium card-variant-white',
  icon: 'card-premium card-variant-icon',
}

export default function Card({ children, className = '', hover = true, variant = 'default' }: CardProps) {
  return (
    <div className={`${variantClass[variant]} ${hover ? 'hover:shadow-premium-lg hover:-translate-y-1' : ''} ${className}`}>
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: ReactNode
  className?: string
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`p-6 pb-4 ${className}`}>
      {children}
    </div>
  )
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={`p-6 pt-4 ${className}`}>
      {children}
    </div>
  )
}

interface CardFooterProps {
  children: ReactNode
  className?: string
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`p-6 pt-4 border-t border-accent-100 ${className}`}>
      {children}
    </div>
  )
}

