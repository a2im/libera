import { Suspense } from 'react'
import Loading from '../loading'
import MyNavbar from '../nav'
import Image from 'next/image'
import Link from 'next/link'
import LoginButton from '../login'

export default function Admin() {
  return (
    <div><MyNavbar><LoginButton/></MyNavbar>
          <title>Libera Awards - Admin</title>
          <Suspense fallback={<Loading start={0} end={10}/>}>
          
          <div className="grow shrink content-center">
<h1 className="pt-20 grow font-bold align-middle text-center leading-tight">
Admin
  </h1>
  </div>
          </Suspense>
    </div>
  )
}
