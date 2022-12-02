'use client';

import Image from "next/legacy/image";
import Link from 'next/link'
import React from "react";
import { SocialFollowWhite } from "./SocialFollow";
import AdBanner from "./ad-banner";
import { useQuery } from '@apollo/client';
import { GET_ALL_SPONSORS } from "../lib/queries";

export default function Footer() {
  const { loading, error, data } = useQuery(GET_ALL_SPONSORS, { 
    variables: {
      Level: "Tier 2", 
      Title: "2023 Libera Awards"
    }});
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>
    console.log(data)
  return (
    <footer className="z-1">
  <div className="pl-[100px] md:pl-[600px] -mb-2">
  <Image height={238} width={800} 
  src="/images/stairs.png" alt="Libera Awards stairs" priority={true} />
  </div>
    <div className="bg-black md:py-10">
      <AdBanner/>
        <div className="liberaFooter py-10 max-w-4xl grid grid-cols-1 md:grid-cols-2 mx-auto justify-center md:gap-9 px-10">
            <Link href="https://liberaawards.com">
              <Image src="/logos/A2IM-logo-white.png" alt='a2im logo' height={458} width={1024} priority={true}/>
            </Link>
            <SocialFollowWhite/>
        </div>
        </div>
        <ul>
        {/* Map through the data */}
        {data.sponsors.data.map(sponsors => (
          <li key={sponsors.id}>
                <div>
                  <Link href={sponsors.attributes?.URL}>
                  <h2>{sponsors.attributes?.Name}</h2>
                  </Link>
                  <Image 
      src={sponsors.attributes.Logo.data.attributes.url}
      height={sponsors.attributes.Logo.data.attributes.height} 
      width={sponsors.attributes.Logo.data.attributes.width} 
      alt={sponsors.attributes.Logo.data.attributes.alternativeText} 
      />
                </div>
                </li>
              )
            )}
            </ul>
    </footer>
  );
}
