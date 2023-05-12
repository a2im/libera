import MyHead from './head';
import Intro from '../components/intro';
import './globals.css'
import Footer from './footer';
import MyModal from "../components/modal"
import MyNavbar from "../components/navbar"
import { Providers } from '../components/providers';
import { config } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false
library.add(fas)


export default function RootLayout({
  children
}: {
  children: React.ReactNode,
}) { 

  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <head>
        <MyHead></MyHead>
        </head>
      <body className="min-h-screen z-0">
      <Providers>
        <Intro/>
      <MyNavbar/>
      {children}
      <Footer/>
      <MyModal />
      
      </Providers>
      </body>
    </html>
  )
}
