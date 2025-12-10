import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { Anonymous_Pro } from "next/font/google";

export const anonymousPro = Anonymous_Pro({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-anonymous-pro"
});

import './globals.css'

export const metadata: Metadata = {
  title: 'dhrubajit bhattacharjee portfolio',
  description: 'a dhrubajit bhattacharjee portfolio'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${anonymousPro.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
