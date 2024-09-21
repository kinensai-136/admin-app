import { UserProvider } from "@auth0/nextjs-auth0/client"
import type { Metadata } from "next"
import { Noto_Sans_JP } from "next/font/google"

import "@/app/globals.css"

const notoSansJpFont = Noto_Sans_JP({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "管理アプリ | 136周年記念祭",
  description: "136th記念祭の運営者向け管理アプリです",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJpFont.className} antialiased`}>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  )
}
