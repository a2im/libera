
import React from 'react'
import { LiberaButtonExternal, LiberaButtonInternal } from '../button'
import AdBanner from '../ad-banner'
import LiberaQualifications from '../qualifications'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../footer'

export default function Submissions() {
  return (
    <div>
          <title>Libera Awards - Submissions</title>
          <div className="grow shrink content-center">
<h1 className="pt-20 grow font-bold align-middle text-center leading-tight">
 Submissions
  </h1>
  </div>
          <div className="mx-auto">
        <section className="mx-auto">
          <div className="flex flex-col md:flex-row justify-center text-center mx-auto items-center content-center">
        <LiberaButtonExternal href='https://libera.awardsplatform.com/'>CLICK HERE TO SUBMIT</LiberaButtonExternal>
        <LiberaButtonInternal href='/faq'>View all categories</LiberaButtonInternal>
        </div>
        <div className="max-w-3xl mx-auto">
            <h4 className="p-8">Submit your music to be considered at the 2023 A2IM Libera Awards, the largest celebration of independent music globally. For discounts on bulk submissions (10 or more), email <span><Link href="mailto:sales@a2im.org">sales@a2im.org</Link></span></h4>
            </div>
        <AdBanner/>
        <br></br>
        <LiberaQualifications />
        </section>
        <div className='max-w-4xl mx-auto'>
          <h2 className="grow mb-9 mt-10 font-bold text-center leading-tight pb-8">
          How to Submit
          </h2>
        </div>
        <section className='LiberaBorder bg-sky-50 max-w-4xl p-8 mx-auto mb-20'>
          <h3 className="md:mb-7">
            LOG IN
          </h3>
          <div className="flex flex-col md:flex-row max-w-4xl mx-auto justify-center">
            <div>
              <h4>If you used this platform last year, just log in with previous credentials at <a href="https://libera.awardsplatform.com">libera.awardsplatform.com</a>
              </h4>
              <h4>(If you did not use the platform in the previous years, you can register at this time.)</h4>
            </div>
            <div className="flex-initial w-96">
              <Image src="/images/login-1.png" alt='libera awards submission login screen' height={631} width={400} />
              </div>
          </div>
        </section>
        <section className='bg-sky-50 py-20'>
          <div className='LiberaBorder bg-white max-w-4xl p-8 mx-auto'>
          <h3 className="md:mb-9">
          START AN ENTRY
          </h3>
          <div className="grid grid-cols-1 max-w-4xl mx-auto content-center justify-center">
          <div>
              <h4>Select a category and please fill out all required information.</h4>
            </div>
            <div className="my-10 content-center max-w-xl">
              <Image src='/images/startanentry.png' alt='Start an entry' height={176} width={300}/>
            </div>
          </div>
          </div>
        </section>
        <section>
        <div className='LiberaBorder bg-sky-50 max-w-4xl p-8 my-20 mx-auto'>
          <h3 className="md:mb-9">
          ADD ATTACHMENTS
          </h3>
          <div className="grid grid-cols-1 max-w-4xl mx-auto content-center justify-center">
            <div>
              <h4>In order to submit, (1) attachment/link is required for all entries. If this is a genre category submission, you must upload at least (1) audio file <strong>in addition</strong> to your attachment/link.</h4>
            </div>
            <div className="my-10 content-center max-w-xl">
              <Image src="/images/addattachments.png" alt='add attachments' height={176} width={300} />
            </div>
          </div>
          </div>
        </section>
        <section className='bg-sky-50 py-20' >
          <div className='LiberaBorder bg-white max-w-4xl p-8 mx-auto'>
          <h3 className="md:mb-9">
          SUBMIT ENTRY
          </h3>
          <div className="flex flex-col max-w-4xl mx-auto content-center justify-center">
            <div>
              <h4>You can submit multiple entries at once. 
                <br></br><br></br>(A2IM Members receive a <span className="font-bold">discounted submission rate. </span>Check the special offers in the infohub for your discount code)</h4>
            </div>
            <div className="my-10 content-center max-w-xl">
              <Image src="/images/submitentry.png" alt='Submit an entry' height={176} width={300} />
            </div>
          </div>
          </div>
        </section>
        <section className='flex flex-col md:flex-row max-w-4xl mb-10 mx-auto py-20 gap-10'> 
          <div className='LiberaBorder bg-sky-50 flex flex-col mx-auto p-4 '>
            <h3 className="md:mb-6">
              HAD A LOT OF RELEASES THIS YEAR?
            </h3>
            <h4>We&apos;ve got a discount for you!</h4>
            <LiberaButtonExternal href='mailto:sales@a2im.org'> Click to email</LiberaButtonExternal>
          </div>
          <div className='LiberaBorder bg-sky-50 flex flex-col mx-auto p-4'>
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
