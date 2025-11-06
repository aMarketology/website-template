import type { Metadata } from 'next'
import { organizationSchema, servicesSchema, reviewSchema } from '@/lib/schema'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tampa Bay Concrete Coatings | Epoxy & Polished Concrete Floors',
  description: 'Professional concrete coating services in Tampa Bay. Expert epoxy garage floors, metallic resin, and polished concrete. Serving Clearwater, St. Petersburg & more. Free estimates!',
  keywords: 'concrete coatings, epoxy garage floors, metallic resin floors, polished concrete, Tampa Bay, Clearwater, St. Petersburg',
  metadataBase: new URL('https://tampabayconcretecoatings.com'),
  openGraph: {
    type: 'website',
    url: 'https://tampabayconcretecoatings.com',
    title: 'Tampa Bay Concrete Coatings | Expert Epoxy & Concrete Floors',
    description: 'Professional concrete coating services. Epoxy garage floors, metallic resin, polished concrete.',
    siteName: 'Tampa Bay Concrete Coatings',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tampa Bay Concrete Coatings',
    description: 'Professional concrete coating services in Tampa Bay',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(servicesSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(reviewSchema),
          }}
        />
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="your-google-verification" />
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#ff8c00" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
