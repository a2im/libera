import { About1, About2, About3 } from './about-us'
import { Suspense } from 'react'
import Loading from '../loading'

export default function About() {
  return (
    <div>
          <title>Libera Awards - About Us</title>
          <Suspense fallback={<Loading start={0} end={10}/>}>
          <div className="grow shrink content-center">
<h1 className="pt-20 grow font-bold align-middle text-center leading-tight">
  About
  </h1>
  </div>
          <About1 />
          <About2 />
          <About3 />
</Suspense>
    </div>
  )
}
