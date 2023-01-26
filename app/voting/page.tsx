import React from 'react'
import { LiberaButtonExternal, LiberaButtonInternal } from '../button'
import Image from 'next/image'
import { Suspense } from 'react'
import Loading from '../loading'
import MyNavbar from '../navbar'
import VoterGuidelines from './guidelines'


export default function Voting() {
  return (
    <>
    <div>
          <title>Libera Awards - Voting</title>
          <Suspense fallback={<Loading start={0} end={10}/>}>
              <MyNavbar/>
          <div className="grow shrink content-center">
<h1 className="pt-20 grow font-bold align-middle text-center leading-tight">
 Voting
  </h1>
  </div>
        
      <VoterGuidelines/>
      <div className='bg-sky-50 flex flex-col md:flex-row mb-10 mx-auto py-20 gap-10 p-8'> 
          <div className='flex flex-col mx-auto p-4 max-w-lg shadow-2xl rounded-2xl'>
            <h3 className="">
              NEED ADDITIONAL HELP?
            </h3>
            <hr className="mt-3 mb-4 Hrswap"></hr>
            <h4>If you continue to experience issues with submissions after this guide, please contact support.</h4>
              <LiberaButtonInternal href="/contact">Click to email</LiberaButtonInternal>
              </div>
        </div>
      </Suspense>
    </div>
    </>
  )
}
