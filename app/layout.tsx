import Sidebar from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import UserProvider from '@/Providers/UserProvider'
import { Figtree } from 'next/font/google'
import SupabaseProvider from "@/Providers/SupabaseProvider"
import ModalProvider from '@/Providers/ModalProvider'
import ToasterProvider from '@/Providers/ToasterProvider'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Music is Life',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`font.className`}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>

            <ModalProvider />
            <Sidebar >
              {children}
            </Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
