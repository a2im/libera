import { LiberaPostsList } from './posts'
import { Suspense } from 'react'
import Loading from '../loading'
import MyNavbar from '../nav'
import LoginButton from '../login'


export default function News() {
  return (
    <div>
          <title>Libera Awards - NEWS</title>
          <Suspense fallback={<Loading start={0} end={10}/>}>
          <MyNavbar><LoginButton/></MyNavbar>
          <div className="relative grow shrink content-center">
<h1 className="pt-20 grow font-bold align-middle text-center leading-tight">
  NEWS
  </h1>
  </div>
          <LiberaPostsList/>
        </Suspense>
    </div>
  )
}
