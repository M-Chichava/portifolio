import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollUp from '@/components/ScrollUp'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Marcos Chichava | FullStack Developer',
  description: 'Portfolio of Marcos Chichava, FullStack developer from Mozambique specializing in web and mobile development.',
  keywords: ['developer', 'mozambique', 'fullstack', 'react native', 'next.js', 'mobile'],
  authors: [{ name: 'Marcos Chichava' }],
  openGraph: {
    title: 'Marcos Chichava | FullStack Developer',
    description: 'FullStack & Mobile Developer from Maputo, Mozambique',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          <ScrollUp />
        </ThemeProvider>
      </body>
    </html>
  )
}
