'use client'

import { useEffect } from 'react'

export default function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return

    const root = document.documentElement
    const previousOverflow = root.style.overflow
    root.style.overflow = 'hidden'

    return () => {
      root.style.overflow = previousOverflow
    }
  }, [locked])
}
