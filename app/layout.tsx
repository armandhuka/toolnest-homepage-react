import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { HelmetProvider } from 'react-helmet-async'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ToolNest - Your Smart Tool Directory',
  description: 'Access 150+ handy tools for development, productivity, calculations, and more - all free and accessible.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HelmetProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </HelmetProvider>
      </body>
    </html>
  )
}