import Footer from './footer'
import './globals.css'
import MyNavbar from './navbar'
import MyModal from "./modal"


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
      <MyNavbar />
      {children}
      <Footer />
      <MyModal />
      </body>
    </html>
  )
}
