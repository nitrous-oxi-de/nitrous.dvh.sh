/**
 * @file        src/app/layout.tsx
 * @author      David @dvhsh (https://dvh.sh)
 * @description Primary layout
 */

import './globals.css'

import { NextUIProvider } from "@nextui-org/react";

import type { Metadata }  from 'next'
import      { Inter    }  from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NITROUS - Open-source OSINT Tool',
  description: 'NITROUS is an open-source OSINT investigation suite with an exposed RESTful API written for research purposes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="subject" content="Open-source OSINT Investigation Suite" />
        <meta name="keywords" content="OSINT, free, open-source, lookup, search, NITROUS, nitrousoxide, nitrous-oxide, email, username, phone, domain, IP" />
        <meta name="author" content="David @dvhsh" />
        <meta name="copyright" content="David @dvhsh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="revised" content="Thursday, Aug 1st, 2024, 10:50 am" />
        <meta property="og:title" content="OSINT - NITROUS" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nitrous.dvh.sh/" />
        <meta property="og:site_name" content="NITROUS" />
        <meta property="og:description" content="NITROUS is an open-source OSINT investigation suite with an exposed RESTful API written for research purposes." />
        <meta name="twitter:title" content="OSINT - NITROUS" />
        <meta name="twitter:description" content="NITROUS is an open-source OSINT investigation suite with an exposed RESTful API written for research purposes." />
        <meta name="twitter:image" content="/path/to/your-image.jpg" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={inter.className}>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  )
}

// path: src/app/layout.tsx