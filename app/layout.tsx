import MyHead from './head';
import './globals.css'
import Footer from './footer';
import MyModal from "./modal"
import { Providers } from './providers';
import { config } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import AuthContext from './next-auth-provider';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
library.add(fas)

export const runtime = 'nodejs'

export default function RootLayout({
  children
}: {
  children: React.ReactNode,
}) { 

 

  return (
    <html lang="en">
      <head>
        <MyHead></MyHead>
        </head>
      <body className="min-h-screen z-0">
        <AuthContext>
      <Providers>
      {children}
      <Footer/>
      <MyModal />
      </Providers>
      </AuthContext>
      </body>
    </html>
  )
}
