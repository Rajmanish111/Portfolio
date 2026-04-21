import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  title: 'Manish Raj Bhatra | Java Full Stack Developer',
  description: 'Building scalable web experiences with Java, Spring Boot & React. Portfolio of a passionate full stack developer.',
  keywords: ['Java Developer', 'Full Stack Developer', 'Spring Boot', 'React', 'Web Developer', 'Manish Raj Bhatra'],
  authors: [{ name: 'Manish Raj Bhatra' }],
  openGraph: {
    title: 'Manish Raj Bhatra | Java Full Stack Developer',
    description: 'Building scalable web experiences with Java, Spring Boot & React',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
