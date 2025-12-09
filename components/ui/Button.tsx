import Link from 'next/link'
import { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface CommonProps {
  children: ReactNode
  className?: string
  variant?: Variant
  size?: Size
}

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    as?: 'button'
  }

interface LinkButtonProps extends CommonProps {
  as: 'link'
  href: string
  target?: string
  rel?: string
}

type Props = ButtonProps | LinkButtonProps

export default function Button(props: Props) {
  const { children, className = '', variant = 'primary', size = 'md' } = props

  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 btn-lift btn-ripple'

  const variantClasses: Record<Variant, string> = {
    primary:
      'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg focus:ring-primary-500 active:scale-95',
    secondary:
      'bg-secondary-600 text-white hover:bg-secondary-700 hover:shadow-lg focus:ring-secondary-500 active:scale-95',
    outline:
      'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500 active:scale-95',
  }

  const sizeClasses: Record<Size, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (props.as === 'link') {
    const { href, target, rel } = props as LinkButtonProps
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    )
  }

  const { as, ...buttonProps } = props as ButtonProps
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  )
}

