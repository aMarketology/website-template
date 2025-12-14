import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maggie & Sam | Wedding Celebration',
  description: 'Join us as we celebrate our wedding! Save the date for Maggie and Sam\'s special day. Wedding details, RSVP, registry, and more.',
  keywords: 'wedding, Maggie and Sam, wedding celebration, save the date, wedding RSVP, wedding registry',
  openGraph: {
    type: 'website',
    title: 'Maggie & Sam | Wedding Celebration',
    description: 'Join us as we celebrate our wedding! Save the date for Maggie and Sam\'s special day.',
    siteName: 'Maggie & Sam Wedding',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maggie & Sam | Wedding',
    description: 'Join us as we celebrate our wedding day!',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional Meta Tags for Wedding Theme */}
        <meta name="theme-color" content="#e6b5b8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
