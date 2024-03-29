import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Header } from './componentes/Header'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '500', '900'] })

export const metadata: Metadata = {
  title: 'CoinSynch',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        </body>
    </html>
  )
}
