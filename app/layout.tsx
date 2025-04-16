import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quiz App',
  description: 'Interactive quiz application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-black">{children}</body>
    </html>
  )
} 