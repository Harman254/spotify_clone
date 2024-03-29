import Sidebar from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import UserProvider from '@/Providers/UserProvider'
import { Figtree } from 'next/font/google'
import SupabaseProvider from "@/Providers/SupabaseProvider"
import ModalProvider from '@/Providers/ModalProvider'
import ToasterProvider from '@/Providers/ToasterProvider'
import getSongsByUserId from '@/actions/getSongsByUserid'
import Player from '@/components/Player'
import getActiveProductsWithPrices from '@/actions/getActiveProductswithPrices'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Music is Life',
}
export const revalidate = 0

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userSongs = await getSongsByUserId()
  const products = await getActiveProductsWithPrices();
  console.log(products)

  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>

            <ModalProvider products={products} />
            <Sidebar songs={userSongs}
            >
              {children}
            </Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
