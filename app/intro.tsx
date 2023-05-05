import Image from "next/image";
import LiberaButton from "./button"
import LiberaAwardsLogo from '../public/logos/libera-dancinglady-left-black-logo.png'
import LiberaHand from '../public/images/hand.png'

export function Intro() {
  return (
    <>
      <div className="max-w-2xl flex flex-col justify-center gap-0 md:mx-auto relative mb-20">
        <div className="mx-auto relative">
          <Image priority={true} 
            src={LiberaAwardsLogo} alt="Libera Awards Logo"/>
        </div>
      </div>
      <LiberaButton href='/tickets' type="internal">Get Tickets</LiberaButton>
    </>
  )
}

export function Intro2() {
  return (
    <div className='p-8 mx-auto'>
    <div className='max-w-4xl p-8 mx-auto bg-sky-50 shadow-2xl rounded-2xl'>
    <div className="grid grid-cols-0 md:grid-cols-2 items-center md:justify-around mx-auto gap-10 p-5">
          <div><Image priority={true}
            src={LiberaHand} alt="Libera Awards Hand"/>
            <LiberaButton href="/about" type="internal">LEARN MORE</LiberaButton>
        </div>
        <div
          className="px-8 md:px-20 mx-auto">
<h2 className="grow align-middle mb-9 max-w-2xl">
Celebrate the Independent Community</h2>
  <h4 className="align-middle max-w-xl">Hosted by the American Association of Independent Music, the Libera Awards is an annual awards ceremony that honours both independent musicians as well as the teams that support them.</h4>
        </div>

  </div>
  <div className="justify-center bg-sky-50 mx-auto">
        
  </div>
  </div>
  </div>
  )
}

export function Intro3() {
  return (
    <div className='p-8 mx-auto'>
    <div className='max-w-4xl p-8 mx-auto bg-sky-50 shadow-2xl rounded-2xl'>
      <h3>Join us in New York City & Online</h3>
      <hr className="mt-3 mb-8 Hrswap"></hr>
      <div className="grid grid-cols-0 md:grid-cols-2 items-center md:justify-around mx-auto gap-10 p-5">
      <div className="relative order-last md:order-first">
  <h4>Historically held in New York City, the Libera Awards went virtual in 2020 in response to the pandemic. Moving forward with a hybrid format, we return to our in-person ceremony in NYC, and virtual ceremony
exclusively on YouTube.</h4><LiberaButton href="/tickets" type="internal">GET TICKETS</LiberaButton>
</div>
<div className="image-cropper">
              <Image className="roundedimage" 
              src="/images/liberaonline.jpg" 
              alt="libera awards on YouTube"
              width={500}
              height={500}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
            </div>
            </div>
            
  </div>
  
  </div>

  )
}

export default function MyIntro () {
  return (
    <div className="pt-20">
          <Intro />
          <div className="py-8 md:hidden" />
          <Intro2 />
          <div className="py-8 md:hidden" />
          <Intro3 />
        </div>
  )
}