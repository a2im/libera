'use client';

import Image from "next/legacy/image";
import Link from 'next/link'
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
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
            <div className="social-container items-center content-center grid grid-cols-5 p-8 gap-8 text-white">
            <Link
              href="https://youtu.be/mV5DSttNOPE"
              className="youtube social"
              target="_blank"
              rel="noopener noreferrer"
              legacyBehavior>
              <motion.button 
                whileHover={{scale: 1.04}}
                whileTap={{scale: 0.95}}>
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </motion.button>
            </Link>
      <motion.button 
      whileHover={{scale: 1.04}}
      whileTap={{scale: 0.95}}>
        <Link
          href="https://www.facebook.com/independentlabels/"
          className="facebook social"
          target="_blank"
          rel="noopener noreferrer"
          legacyBehavior>
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </Link>
      </motion.button>
      <motion.button 
      whileHover={{scale: 1.04}}
      whileTap={{scale: 0.95}}>
        <Link
          href="https://twitter.com/LiberaAwards"
          className="twitter social"
          target="_blank"
          rel="noopener noreferrer"
          legacyBehavior>
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </Link>
      </motion.button>
      <motion.button 
      whileHover={{scale: 1.04}}
      whileTap={{scale: 0.95}}>
        <Link
          href="https://www.instagram.com/LiberaAwards/"
          className="instagram social"
          target="_blank"
          rel="noopener noreferrer"
          legacyBehavior>
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Link>
      </motion.button>
      <motion.button 
      whileHover={{scale: 1.04}}
      whileTap={{scale: 0.95}}>
        <Link
          href="https://www.linkedin.com/company/a2im-american-association-of-independent-music"
          className="linkedin social"
          target="_blank"
          rel="noopener noreferrer"
          legacyBehavior>
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </Link>
      </motion.button>
  </div>
        </div>
        </div>
        <div className="sponsorbox max-w-6xl mx-auto">
        <Image src="/images/LiberaAwardslogosoup.png" alt="Sponsor logos" width={1500} height={1031} layout={'responsive'} objectFit={'contain'}/>
        </div>
    </footer>
  );
}
