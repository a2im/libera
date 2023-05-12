'use client';

import React from "react"
import Image from "next/legacy/image";
import LiberaButton from "../app/button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function ImageGallery ({Gallery}) {
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
      <h3>{Gallery.Title}</h3>
      <hr className="mt-3 mb-8 Hrswap"></hr>
      <div className="relative order-last md:order-first">
        <Carousel 
        ssr={true}
        responsive={responsive}
        itemClass="liberaCarousel">
{Gallery.Images.data.map(Images => (
  <div key={Images.id} >
    <Image src={Images.attributes.url} alt={Images.attributes.alternativeText}  width={Images.attributes.width}  height={Images.attributes.height} />
  </div>
))}
</Carousel>
<GalleryButton URL={Gallery.URL}/>
        </div>
      </div>
      </div>
  )
}

function GalleryButton({URL}){
  if (URL !== null) return(
    <LiberaButton type="External" href={URL}>VIEW MORE</LiberaButton>
);
  else return (
<></>
  )
}