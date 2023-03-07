import GetFAQ from './faq-categories'
import { Suspense } from 'react'
import Loading from '../loading'
import { JumpTo } from './faq-categories'

export default function FAQ() {
  return (
    <>
          <title>Libera Awards - Frequently Asked Questions</title>
          <Suspense fallback={<Loading start={0} end={10}/>}>
          <div className="grow shrink content-center">
<h1 className="pt-20 grow font-bold align-middle text-center leading-tight">
  FAQ
  </h1>
  </div>
  <JumpTo/>
  <GetFAQ Category='GENERAL'/>
  <GetFAQ Category='TICKETING'/>
  <GetFAQ Category='ACCESSIBILITY'/>
  <GetFAQ Category='ACCOMODATIONS'/>
  <GetFAQ Category='PRESS'/>
  <GetFAQ Category='AWARDS & CATEGORIES'/>
  </Suspense>
    </>
  )
}
