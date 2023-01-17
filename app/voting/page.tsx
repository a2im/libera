
import React from 'react'
import { LiberaButtonExternal, LiberaButtonInternal } from '../button'
import AdBanner from '../ad-banner'
import LiberaQualifications from '../qualifications'
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
          <div className="grid grid-cols-0 md:grid-cols-2 max-w-4xl mx-auto justify-center gap-3">
            <div>
              <p>Log in at <a href="https://libera.awardsplatform.com">libera.awardsplatform.com</a>
              </p>
              <p>(If you are an active A2IM member and have not already registered to vote in the first round, please contact membership@a2im.org)</p>
            </div>
            <div className="relative">
              <Image src="/images/login-1.png" alt='libera awards submission login screen' height={631} width={400} />
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
            <div className="relative mx-auto">
              <Image src='/images/startanentry.png' alt='Start an entry' height={176} width={300}/>
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
            <div className="relative mx-auto">
              <Image src="/images/addattachments.png" alt='add attachments' height={176} width={300} />
            </div>
          </div>
          </div>
        </section>
        <section className='p-8 mx-auto'>
        <div className='max-w-4xl p-8 mx-auto bg-sky-50 shadow-2xl'>
          <h3>
          Click on a Submission
          </h3>
          <hr className="mt-3 mb-8 Hrswap"></hr>
          <div className="grid grid-cols-0 md:grid-cols-2 max-w-4xl mx-auto content-center justify-center gap-3">
            <div>
              <p>You can listen to audio, watch video, and view links for each entry by clicking on the Entry Name.</p>
            </div>
            <div className="relative mx-auto">
              <Image src="/images/submitentry.png" alt='Submit an entry' height={176} width={300} />
            </div>
          </div>
          </div>
        </section>
        <section className='p-8 mx-auto'>
        <div className='max-w-4xl p-8 mx-auto bg-sky-50 shadow-2xl'>
          <h3>
          Cast your Votes
          </h3>
          <hr className="mt-3 mb-8 Hrswap"></hr>
          <div className="grid grid-cols-0 md:grid-cols-2 max-w-4xl mx-auto content-center justify-center gap-3">
            <div>
              <p>To cast a vote for a submission, simply click the heart button for that entry.  
                When you click vote, you should see a &quot;+1&quot; pop up next to the heart. 
                If you made a mistake, you can revoke your vote by clicking the heart again to remove the &quot;+1&quot;.
                </p>
            </div>
            <div className="relative mx-auto">
              <Image src="/images/submitentry.png" alt='Submit an entry' height={176} width={300} />
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
            <div className="relative mx-auto">
              <Image src="/images/submitentry.png" alt='Submit an entry' height={176} width={300} />
            </div>
          </div>
          </div>
        </section>
        <section className='bg-sky-50 flex flex-col md:flex-row mb-10 mx-auto py-20 gap-10'> 
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
