'use client'

import { ForkMe } from 'fork-me-corner'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ForkMe repo="https://github.com/ViniBGoulart/world-cup-2022" flagDirection="vertical" />
      {children}
    </>
  )
}
