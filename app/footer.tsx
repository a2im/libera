'use client';

import Image from "next/legacy/image";
import Link from 'next/link'
import React from "react";
import { SocialFollowWhite } from "./SocialFollow";
import AdBanner from "./ad-banner";


export default function Footer() {
  return (
    <footer className="z-1">
      <div className="flex flex-row">
    <div className="w-32 mx-auto"></div>
  <div className="w-3/4 bottom-0 right-0 max-h-fit overflow-clip">
  <Image height={238} width={800}
  src="/images/stairs.png" alt="Libera Awards stairs" priority={true} />
  </div>
  </div>
    <div className="bg-black pt-10">
      <AdBanner/>
        <div className="liberaFooter max-w-4xl grid grid-cols-1 md:grid-cols-2 mx-auto justify-center md:gap-9 px-10">
            <Link href="https://liberaawards.com">
              <Image src="/logos/A2IM-logo-white.png" alt='a2im logo' height={458} width={1024} priority={true}/>
            </Link>
            <SocialFollowWhite/>
        </div>
        </div>
        <div className="sponsorbox max-w-6xl mx-auto">
        <Image src="/images/LiberaAwardslogosoup.png" alt="Sponsor logos" width={1500} height={1031} />
        </div>
    </footer>
  );
}
