import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// TODO: swap in the real Vercel project URL once deployed
const siteUrl = 'https://document-consultancy.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'T&J Document Consultants',
  description: 'Expert property document consultancy services in Kerala. Specializing in land agreements, wills, power of attorney, rectification deeds, and property documentation.',
  keywords: 'property documents kerala, land agreement drafting, wills and trusts, power of attorney, rectification deeds, property documentation, kerala document consultancy',
  openGraph: {
    title: 'T&J Document Consultants',
    description: 'Expert property document consultancy services in Mananthavady, Wayanad. Land agreements, wills, power of attorney, and property documentation.',
    url: siteUrl,
    siteName: 'T&J Document Consultants',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'T&J Document Consultants',
    description: 'Expert property document consultancy services in Mananthavady, Wayanad.',
  },
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