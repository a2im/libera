'use client';

import Image from "next/image";
import { motion } from "framer-motion"
import { LiberaButtonInternal } from "./button"

export function Intro() {
  return (
    <>
  <div className="max-w-2xl grid grid-cols-4 justify-center gap-0 md:mx-auto relative">
        <div className="col-span-1"></div>
        <motion.div 
          initial= {{
            scale: "100%",
              }}
          animate={{
            scale: ["100%", "96%", "92%", "94%", "100%"],
            transition:{ 
              type: 'tween',
              ease: "anticipate", 
              duration: 20, 
              repeat: Infinity,
              repeatType: "reverse", 
            }}}
          className="col-span-2 z-3">
          <Image height={926} width={814} priority={true} 
            src="/images/dancing-lady.png" alt="Libera Awards Dancing Lady"/>
        </motion.div>
        <motion.div
        initial= {{
            x: -100,
            y: -100,
            scale: "0%",
              }}
          animate={{
            x: 0,
            y: 0,
            scale: "100%",
            transition:{ 
              type: 'tween', 
              duration: .4, 
            }}}
          className="w-32 col-span-1">
          <Image height={50} width={50} priority={true}
            src="/images/sparkles-2.png" alt="Libera sparkles"/>
        </motion.div>
            </div>
            <div className="max-w-2xl grid grid-cols-4 justify-center pb-8 gap-0 md:mx-auto">
        <motion.div
        initial= {{
            x: 100,
            y: 100,
            scale: "0%",
              }}
          animate={{
            x: -10,
            y: 0,
            scale: "100%",
            transition:{ 
              type: 'tween',
              delay: .3,
              duration: .4,
            }}}
          className="w-32 col-span-1">
          <Image height={50} width={50}
            src="/images/sparkles-1.png" priority={true} alt="Libera sparkles"/>
        </motion.div>
        <motion.div 
        initial= {{
          scale: "100%",
            }}
        animate={{
          scale: ["100%", "96%", "92%", "94%", "100%"],
          transition:{ 
            type: 'tween',
            ease: "anticipate", 
            duration: 20, 
            repeat: Infinity,
            repeatType: "reverse", 
          }}}
          className="col-span-2">
        <Image className="" height={225} width={500} priority={true} 
            src="/logos/black-logos/libera-title-logo.png" alt="Libera Awards Logo"/>
        </motion.div>
        <div className="col-span-1"></div>
  </div>
  <div className="justify-center  mx-auto">
        <LiberaButtonInternal href="/submissions">SUBMIT NOW</LiberaButtonInternal>
        </div>
        </>
  )
}

export function Intro2() {
  return (
<div className="bg-sky-50">      
  <div className=" max-w-6xl grid gap-10 md:grid-cols-2 justify-center content-evenly md:mx-auto p-8 py-15">
        <motion.div 
          initial= {{
            y: -50,
            x: -90,
            scale: "100%",
              }}
          whileInView={{ 
            y: 0,
            x: 0,
            rotate: [-25, -30],
            scale: ["98%", "100%"],
            transition:{ 
              when: "afterChildren",
              ease: "anticipate", 
              duration: 1.8, 
            }}}
          viewport={{ once: false, amount: 0.6 }}
          className="w-[400px] md:ml-32">
          <Image height={215} width={400} priority={true}
            src="/images/hand.png" alt="Libera Awards Dancing Lady"/>
        </motion.div>
        <motion.div
        initial= {{
            opacity: 0,
            scale: "0%",
              }}
          whileInView={{
            opacity: 1,
            scale: ["100%", "96%", "92%", "94%", "100%"],
            transition:{ 
              type: 'linear',
              ease: "anticipate", 
              duration: 0.7, 
            }}}
          viewport={{ once: true, amount: 0.9 }}
          className="px-8 md:px-20 mx-auto">
<h2 className="grow align-middle mb-9 max-w-2xl">
Celebrate the Independent Community</h2>
  <h4 className="align-middle max-w-xl">Hosted by the American Association of Independent Music, the Libera Awards is an annual awards ceremony that honours both independent musicians as well as the teams that support them.</h4>
        </motion.div>

  </div>
  <div className="justify-center bg-sky-50 mx-auto">
        <LiberaButtonInternal href="/about" variant="Borderswap3">LEARN MORE</LiberaButtonInternal>
        </div>
  </div>
  )
}

export function Intro3() {
  return (
    <div className="pb-20 max-w-6xl mx-auto">
<div className="pt-10 gap-10 p-8 md:mt-20">
      <motion.div
        initial= {{
            opacity: 0,
            x: -1000,
            scale: "0%",
              }}
          animate={{
            opacity: 1,
            x: 0,
            scale: ["0%", "110%", "100%"],
            transition:{ 
              type: 'linear',
              delay:3, 
              duration: 1,
            }}}
          className="px-8 md:px-20 justify-center mx-auto center-content">
<h2 className="mb-9 md:mt-10 font-bold leading-tight">
Join us in New York City & Online</h2>
  <h4 className="max-w-xl">Historically held in New York City, the Libera Awards went virtual in 2020 in response to the pandemic. Moving forward with a hybrid format, we return to our in-person ceremony in NYC, and virtual ceremony
exclusively on YouTube.</h4>
        </motion.div>
  </div>
  <LiberaButtonInternal href="/tickets" variant="Borderswap1">GET TICKETS</LiberaButtonInternal>
  </div>
  )
}