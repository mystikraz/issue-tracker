import '@radix-ui/themes/styles.css'
import './theme-config.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './NavBar'
import '@radix-ui/themes/styles.css';
import { Theme, ThemePanel } from '@radix-ui/themes';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme appearance="light" accentColor="jade" grayColor="gray" radius="large">
          <main className='p-5'>
            {/* <ThemePanel /> */}
            <NavBar />
            {children}
          </main>
        </Theme>
      </body>
    </html>
  )
}
