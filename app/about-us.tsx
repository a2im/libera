'use client';

import React from "react"
import Image from "next/legacy/image";
import { LiberaButtonExternal, LiberaButtonInternal } from "./button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function About1 () {
    return (
        <div className="mx-auto mb-8">
          <div className="bg-sky-50 mx-auto pt-5">
            <div className="max-w-6xl flex flex-col md:flex-row mt-10 justify-center content-center mx-auto gap-10 p-5">
              <div className="flex-initial max-w-xl">
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
              <div className="image-cropper flex-initial w-96">
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
      <div className="mx-auto mb-8 p-8">
        <div className="mx-auto max-w-6xl gap-10 p-5">
        <h3 className="text-6xl mb-10">2022 A2IM LIBERA AWARDS</h3>
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
<LiberaButtonExternal href='https://www.facebook.com/independentlabels/photos_albums'>VIEW MORE</LiberaButtonExternal>
        </div>
      </div>
  )
}

export function About3 () {
  return (
      <div className="bg-sky-50 mx-auto p-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-6xl flex flex-col md:flex-row mt-10 justify-center content-center mx-auto gap-10 p-5">
            <div className="flex-initial max-w-xl">
              <h3 className="text-6xl mb-10">SEE YOU JUNE 15, 2023</h3>
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
            <div className="image-cropper flex-initial w-96">
              <Image className="roundedimage" src="/images/awards2.jpg" alt='libera awards in person gala' height={100} width={100} layout='responsive' objectFit='contain' />
            </div>
          </div>
          <LiberaButtonInternal href='/tickets'>GET TICKETS</LiberaButtonInternal>
        </div>
      </div>
  )
}