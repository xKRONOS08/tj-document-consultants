import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'T&J Document Consultants',
  description: 'Expert property document consultancy services in Kerala. Specializing in land agreements, wills, power of attorney, rectification deeds, and property documentation.',
  keywords: 'property documents kerala, land agreement drafting, wills and trusts, power of attorney, rectification deeds, property documentation, kerala document consultancy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 