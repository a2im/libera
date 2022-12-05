import Image from "next/legacy/image";
import Link from 'next/link'
import React from "react";
import { SocialFollowWhite } from "./SocialFollow";
import AdBanner from "./ad-banner";
import { SponsorTier1, SponsorTier2, SponsorTier3 } from "./sponsors";

export default function Footer() {
  return (
    <footer className="w-full z-1 absolute">
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
        <div className="sponsorbox max-w-6xl mx-auto text-center">
          <h3>Thank you to our Sponsors</h3>
          <SponsorTier1/>
          <SponsorTier2/>
          <SponsorTier3/>
</div>
    </footer>
  );
}
