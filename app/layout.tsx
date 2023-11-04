import type { Metadata } from 'next'
import {  Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from '@/components/provider/theme-provider'
import './globals.css'
import { ConvexClientProvider } from '@/components/provider/convex-provider'
import { Toaster } from "sonner";
import { ModalProvider } from '@/components/provider/modal-provider'
import { EdgeStoreProvider } from "@/lib/edgestore";
const space_grotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Motion',
  description: 'The Connected workspace where you work better and faster',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo(white).png",
        href: "/logo(white).png"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo(dark).png",
        href: "/logo(dark).png"
      },
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${space_grotesk.className} `}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange storageKey='motion-theme'>
            <Toaster position='bottom-right' />
            <ModalProvider />
            {children}
          </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  )
}
