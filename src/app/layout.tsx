import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://grinsel.online'),
  title: 'Grinsel - Digital Projects',
  description: 'Digital projects by Marc Schmelzer - Cosplay gadget apps, tabletop tools and more.',
  keywords: ['grinsel', 'digital projects', 'cosplay apps', 'tabletop tools'],
  authors: [{ name: 'Marc Schmelzer' }],
  openGraph: {
    title: 'Grinsel - Digital Projects',
    description: 'Digital projects by Marc Schmelzer',
    url: 'https://grinsel.online',
    siteName: 'Grinsel',
    type: 'website',
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
