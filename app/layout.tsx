import type { Metadata } from 'next'
import { Geist, Geist_Mono, Orbitron } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Preloader from '@/components/Preloader'
import Navbar from '@/components/Navbar'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron", weight: ["700", "900"] });

export const metadata: Metadata = {
  title: '6ystems - Business Systems You Own, Not SaaS You Rent',
  description: 'Modular AI-enabled business systems platform. Own your systems, control your data, no vendor lock-in. Management, Booking, Records, Commercial, Communication, and Intelligence systems.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body className="font-sans antialiased">
        <Preloader />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
