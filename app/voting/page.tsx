
import React from 'react'
import { LiberaButtonExternal, LiberaButtonInternal } from '../button'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../footer'

export default function Voting() {
  return (
    <div>
          <title>Libera Awards - Voting</title>
          <div className="grow shrink content-center">
<h1 className="pt-20 grow font-bold align-middle text-center leading-tight">
 Voting
  </h1>
  </div>
          <div className="mx-auto">
        <section className="mx-auto">
          <div className="flex flex-col md:flex-row justify-center text-center mx-auto items-center content-center">
        <LiberaButtonExternal href='https://libera.awardsplatform.com/'>CLICK HERE TO VOTE</LiberaButtonExternal>
        </div>
        </section>
        <section className='p-8 mx-auto'>
        <div className='max-w-4xl p-8 mx-auto bg-sky-50 shadow-2xl'>
          <h3>
            LOG IN
          </h3>
          <hr className="mt-3 mb-8 Hrswap"></hr>
          <div className="grid grid-cols-0 md:grid-cols-2 mx-auto justify-center gap-3">
            <div>
              <p>Log in at <a href="https://libera.awardsplatform.com">libera.awardsplatform.com</a>
              </p>
              <p>(If you are an active A2IM member and have not already registered to vote in the first round, please contact membership@a2im.org)</p>
            </div>
            <div className="relative w-[400px] h-[359px]">
              <Image src="/images/login.png" 
              alt='libera awards submission login screen' 
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
              </div>
          </div>
          </div>
        </section>
        <section className='p-8 mx-auto'>
        <div className='max-w-4xl p-8 mx-auto bg-sky-50 shadow-2xl'>
          <h3>
          Click Judge
          </h3>
          <hr className="mt-3 mb-8 Hrswap"></hr>
          <div className="grid grid-cols-0 md:grid-cols-2 max-w-4xl mx-auto content-center justify-center gap-3">
          <div>
              <p>At the top of your screen you&apos;ll find a tab that says Judge</p>
            </div>
            <div className="relative mx-auto w-[400px] h-[250px]">
              <Image src='/images/click-judge.gif' 
              alt='Click Judge at the top of the window' 
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
            </div>
          </div>
          </div>
        </section>
        <section className='p-8 mx-auto'>
        <div className='max-w-4xl p-8 mx-auto bg-sky-50 shadow-2xl'>
          <h3>
          Select a Category to judge
          </h3>
          <hr className="mt-3 mb-8 Hrswap"></hr>
          <div className="grid grid-cols-0 md:grid-cols-2 max-w-4xl mx-auto content-center justify-center gap-3">
            <div>
              <p>Select the categories that you would like to vote in from the list provided.</p>
            </div>
            <div className="relative mx-auto w-[400px] h-[250px]">
              <Image src="/images/select-category.gif" 
              alt='select a category' 
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
            </div>
          </div>
          </div>
        </section>
        <section className='p-8 mx-auto'>
        <div className='max-w-4xl p-8 mx-auto bg-sky-50 shadow-2xl'>
          <h3>
          Choose a Submission
          </h3>
          <hr className="mt-3 mb-8 Hrswap"></hr>
          <div className="grid grid-cols-0 md:grid-cols-2 max-w-4xl mx-auto content-center justify-center gap-3">
            <div>
              <p>You can listen to audio, watch video, and view links for each entry by clicking on the Entry Name.</p>
            </div>
            <div className="relative mx-auto w-[400px] h-[250px]">
              <Image src="/images/choose-submission.gif" 
              alt='Choose a Submission' 
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
            </div>
          </div>
          </div>
        </section>
        <section className='p-8 mx-auto'>
        <div className='max-w-4xl p-8 mx-auto bg-sky-50 shadow-2xl'>
          <h3>
          Cast your Vote
          </h3>
          <hr className="mt-3 mb-8 Hrswap"></hr>
          <div className="grid grid-cols-0 md:grid-cols-2 max-w-4xl mx-auto content-center justify-center gap-3">
            <div>
              <p>To cast a vote for a submission, simply click the heart button for that entry.  
                When you click vote, you should see a &quot;+1&quot; pop up next to the heart. 
                If you made a mistake, you can revoke your vote by clicking the heart again to remove the &quot;+1&quot;.
                </p>
            </div>
            <div className="relative mx-auto w-[400px] h-[250px]">
              <Image src="/images/cast-vote.gif" 
              alt='Cast your vote' 
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
            </div>
          </div>
          </div>
        </section>
        <section className='p-8 mx-auto mb-20'>
        <div className='max-w-4xl p-8 mx-auto bg-sky-50 shadow-2xl'>
          <h3>
          That&apos;s all Folks!
          </h3>
          <hr className="mt-3 mb-8 Hrswap"></hr>
          <div className="grid grid-cols-0 md:grid-cols-2 max-w-4xl mx-auto content-center justify-center gap-3">
            <div>
              <p>Once you have cast your votes for each category that you feel comfortable voting in, you&apos;re all set!  
                There is no &quot;submission&quot; button.  Your votes are automatically tallied when you click the heart.  
                Thank you for your participation this year!
                </p>
            </div>
            <div className="relative mx-auto w-[400px] h-[222px]">
              <Image src="/images/thats-all-folks.gif" 
              alt='Thats all folks' 
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
            </div>
          </div>
          </div>
        </section>
        <section className='bg-sky-50 flex flex-col md:flex-row mb-10 mx-auto py-20 gap-10 p-8'> 
          <div className='flex flex-col mx-auto p-4 max-w-lg shadow-2xl'>
            <h3 className="md:mb-6">
              NEED ADDITIONAL HELP?
            </h3>

            <h4>If you continue to experience issues with submissions after this guide, please contact support.</h4>
              <LiberaButtonInternal href="/contact">Click to email</LiberaButtonInternal>
              </div>
        </section>
      </div>
      <Footer/>
    </div>
  )
}
