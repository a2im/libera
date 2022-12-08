import './globals.css'
import MyNavbar from './navbar'
import MyModal from "./modal"
import { Providers } from './providers';
import MyHead from './head';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 

  return (
    <html lang="en">
      <head>
        <MyHead/>
        </head>
      <body className="min-h-screen z-0">
      <Providers>
      <MyNavbar />
      {children}
      <MyModal />
      </Providers>
      </body>
    </html>
  )
}
