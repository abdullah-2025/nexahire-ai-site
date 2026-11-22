import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'NexaHire — AI-Powered Job & Interview Platform',
  description:
    "Practice for interviews with an AI voice interviewer, get a scored report after every session, and apply to roles matched to your profile. Built for Pakistan's students and fresh graduates.",
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1c1a17',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
