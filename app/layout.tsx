import Footer from './footer'
import './globals.css'
import MyNavbar from './navbar'
import MyModal from "./modal"
import { Providers } from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>
      <MyNavbar />
      {children}
      <Footer />
      <MyModal />
      </Providers>
      </body>
    </html>
  )
}
