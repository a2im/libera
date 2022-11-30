'use client';

import Image from "next/legacy/image";
import Link from 'next/link'
import React from "react";
import { SocialFollowWhite } from "./SocialFollow";
import { motion } from "framer-motion";


export default function Footer() {
  return (
    <footer className="z-1">
      <div className="flex flex-row">
    <div className="w-32 mx-auto"></div>
  <div className="w-3/4 bottom-0 right-0 max-h-fit overflow-clip">
  <Image height={238} width={800} layout={'responsive'} objectFit={'contain'} 
  src="/images/stairs.png" alt="Libera Awards stairs" priority={true} />
  </div>
  </div>
    <div className="bg-black">
      <div className="mx-auto pt-10 -mb-15 w-[728px]">
      <Link href="https://nettwerk.com/" legacyBehavior>
        <Image className="adbanner" priority={true} unoptimized={true} src="/images/NettA2IM_728x120longRev4.gif" alt="Nettwerk banner ad" width={728} height={120} layout="responsive" objectFit='contain'/>
      </Link>
      </div>
        <div className="liberaFooter max-w-4xl grid grid-cols-1 md:grid-cols-2 mx-auto justify-center md:gap-9 px-10">
            <Link href="https://liberaawards.com" legacyBehavior>
              <Image src="/logos/A2IM-logo-white.png" alt='a2im logo' height={100} width={100} layout={'responsive'} objectFit={'contain'} priority={true}/>
            </Link>
            <SocialFollowWhite/>
        </div>
        </div>
        <div className="sponsorbox max-w-6xl mx-auto">
        <Image src="/images/LiberaAwardslogosoup.png" alt="Sponsor logos" width={1500} height={1031} layout={'responsive'} objectFit={'contain'}/>
        </div>
    </footer>
  );
}
