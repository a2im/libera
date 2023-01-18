import AwardCategories from '../award-categories'
import LiberaQualifications from '../qualifications'
import { Suspense } from 'react'
import Loading from '../loading'
import MyNavbar from '../navbar'

export default function FAQ() {
  return (
    <>
          <title>Libera Awards - Frequently Asked Questions</title>
          <Suspense fallback={<Loading start={0} end={10}/>}>
      <MyNavbar/>
          <div className="grow shrink content-center">
<h1 className="pt-20 grow font-bold align-middle text-center leading-tight">
  FAQ
  </h1>
  </div>
          <AwardCategories/>
          <LiberaQualifications/>
</Suspense>
    </>
  )
}
