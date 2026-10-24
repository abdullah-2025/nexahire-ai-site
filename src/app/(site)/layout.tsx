import type { ReactNode } from 'react'
import Navigation from '@/components/Navigation'

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}
