import './globals.css'
import MyNavbar from './navbar'
import MyModal from "./modal"
import { Providers } from './providers';
import Footer from './footer';

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
      <body className="min-h-screen z-0">
      <Providers>
      <MyNavbar />
      {children}
      <MyModal />
      <Footer />
      </Providers>
      </body>
    </html>
  )
}
