import { Suspense } from 'react'
import Loading from './loading'
import MyNavbar from './nav'
import MyIntro from './intro'
import LoginButton from './login'

export default function Home() {
  
  return (
    <div>
      <MyNavbar><LoginButton/></MyNavbar>
      <title>Libera Awards - Home</title>
      <Suspense fallback={<Loading start={0} end={10}/>}>
          <MyIntro/>
          </Suspense>
    </div>
  )
}
