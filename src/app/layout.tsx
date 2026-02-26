import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://grinsel.online'),
  title: 'Grinsel - Digital Projects',
  description: 'Digital projects by Marc Schmelzer - Cosplay gadget apps, tabletop tools and more.',
  keywords: ['grinsel', 'digital projects', 'cosplay apps', 'tabletop tools'],
  authors: [{ name: 'Marc Schmelzer' }],
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Grinsel - Digital Projects',
    description: 'Digital projects by Marc Schmelzer',
    url: 'https://grinsel.online',
    siteName: 'Grinsel',
    type: 'website',
    images: [
      {
        url: 'https://placehold.co/1200x630/0a0a0f/00ff9d?text=Grinsel',
        width: 1200,
        height: 630,
        alt: 'Grinsel - Digital Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grinsel - Digital Projects',
    description: 'Digital projects by Marc Schmelzer',
    images: ['https://placehold.co/1200x630/0a0a0f/00ff9d?text=Grinsel'],
  },
  alternates: {
    canonical: 'https://grinsel.online',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
