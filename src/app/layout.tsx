import type { Metadata } from 'next'
import '@/styles/globals.css'
import '@/styles/reset.css'
import { Toaster } from 'react-hot-toast'
import HeaderBar from '@/app/(main)/_components/header-bar'
import font from '@/styles/font'
import style from './layout.module.scss'

export const metadata: Metadata = {
  title: 'ZeroLog',
  description: "Zero's blog",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.nunito.className}>
        <HeaderBar />
        <Toaster />
        <main className={style.layout}>{children}</main>
      </body>
    </html>
  )
}
