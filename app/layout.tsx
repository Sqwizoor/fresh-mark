import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Freshmark Foods - Expert Ingredient Solutions',
  description: 'Freshmark Foods provides expert ingredient solutions for diverse industries in South Africa. We are your ideal partner in developing the future of food.',
  keywords: 'wholesale food distribution, food processing companies, food ingredient suppliers, food manufacturing, raw materials',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
     
      </body>
    </html>
  )
}

