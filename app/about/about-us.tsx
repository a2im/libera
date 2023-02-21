'use client';

import React from "react"
import Image from "next/legacy/image";
import LiberaButton from "../button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function About1 () {
    return (
      <div className='p-8 mx-auto'>
      <div className='max-w-4xl p-8 mx-auto bg-sky-50 shadow-2xl rounded-2xl'>
      <div className="grid grid-cols-0 md:grid-cols-2 items-center md:justify-around mx-auto gap-10 p-5">
        <div className="relative order-last md:order-first">
                <h4>The A2IM Libera Awards were first held in <span className="font-bold">June 2012</span> to highlight the successes of the
independent music community, and give our
members a chance to directly support A2IM’s
efforts.
<br></br> <br></br>
<span className="font-bold">2021 marked the tenth anniversary of the
Liberas</span>, which has grown into the largest
celebration of independent music in the
United States.</h4>
              </div>
              <div className="image-cropper">
                <Image className="roundedimage" src="/images/awards1.jpg" alt='libera awards in person gala' height={100} width={100} layout='responsive' objectFit='contain' />
              </div>
            </div>
          </div>
          </div>
    )
}

export function About2 () {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };
  return (
    <div className='p-8 mx-auto'>
    <div className='max-w-4xl p-8 mx-auto bg-sky-50 shadow-2xl rounded-2xl'>
      <h3>2022 A2IM LIBERA AWARDS</h3>
      <hr className="mt-3 mb-8 Hrswap"></hr>
      <div className="relative order-last md:order-first">

        <Carousel 
        ssr={true}
        responsive={responsive}
        itemClass="liberaCarousel">
  <div>
  <Image src="/images/madlib-ceremony.jpeg" alt='Madlib accepting Libera Awards' width={2048} height={1365} layout='responsive' objectFit={'contain'} />
    </div>
  <div>
  <Image src="/images/winners.jpeg" alt='libera awards winners' width={799} height={533} layout='responsive' objectFit={'contain'} />
    </div>
  <div>
  <Image src="/images/cocktail-.jpeg" alt='libera awards in person gala' width={2048} height={1365} layout='responsive' objectFit={'contain'} />
    </div>  
    <div>
  <Image src="/images/showfloor.jpg" alt='libera awards in person gala' width={2048} height={1365} layout='responsive' objectFit={'contain'} />
    </div>
</Carousel>
<LiberaButton type="external" href='https://www.facebook.com/independentlabels/photos_albums'>VIEW MORE</LiberaButton>
        </div>
      </div>
      </div>
  )
}

export function About3 () {
  return (
    <div className='p-8 mx-auto'>
    <div className='max-w-4xl p-8 mx-auto bg-sky-50 shadow-2xl rounded-2xl'>
      <h3>SEE YOU JUNE 15, 2023</h3>
      <hr className="mt-3 mb-8 Hrswap"></hr>
    <div className="grid grid-cols-0 md:grid-cols-2 items-center md:justify-around mx-auto gap-10 p-5">
      <div className="relative order-last md:order-first">
              <h4>The 2023 A2IM Libera Awards will return on 
              <span className="font-bold"> June 15, 2023 in New York City</span> and online.
Nomination submissions are open from
September till December 5, 2022.
<br></br> <br></br>
Tickets will go on-sale at the beginning of
2023, and nominees will be announced
mid-March 2023. Follow A2IM below to stay
up to date.</h4>
            </div>
            <div className="image-cropper">
              <Image className="roundedimage" 
              src="/images/dancing.jpg" 
              alt='dancing at libera awards'
              width={500}
              height={500}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
            </div>
          </div>
          <LiberaButton type="external" href='/tickets'>GET TICKETS</LiberaButton>
      </div>
      </div>
  )
}