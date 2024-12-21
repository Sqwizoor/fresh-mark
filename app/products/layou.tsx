import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })





export const metadata: Metadata = {
    title: 'Freshmark Foods Products - High-Quality Fruit Solutions',
    description: 'Explore our range of high-quality fruit products, including juices, purees, sauces, and dressings. Discover how Freshmark Foods can meet your ingredient needs.',
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
     
        {children}

      </body>
    </html>
  )
}

