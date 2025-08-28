
import { ReactNode } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
        <ThemeToggle className='absolute border-gray-600 top-3 right-2' />
        {children}
    </div>
  )
}