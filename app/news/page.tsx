import { LiberaPostsList } from './posts'
import { Suspense } from 'react'
import Loading from '../loading'
import MyNavbar from '../navbar'


export default function News() {
  return (
    <div>
          <title>Libera Awards - NEWS</title>
          <Suspense fallback={<Loading start={0} end={10}/>}>
  <MyNavbar/>
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
