import { Suspense } from 'react'
import Loading from './loading'
import MyNavbar from './navbar'
import MyIntro from './intro'

export default function Home() {
  return (
    <div>
      <title>Libera Awards - Home</title>
      <Suspense fallback={<Loading start={0} end={10}/>}>
      <MyNavbar/>
          <MyIntro/>
          </Suspense>
    </div>
  )
}
