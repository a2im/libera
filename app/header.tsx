'use client';

import Image from "next/legacy/image";
import { motion } from "framer-motion"


export default function Header({ children }) {
  
const imgVariants= {
  initial: {
    y: -50,
    x: -180,
  },
  animate: {
    y: 0,
    x: 0,
    rotate: [-25, -30],
    scale: ["98%", "100%"],
    transition:{ 
      when: "afterChildren",
      ease: "anticipate", 
      duration: 1.8, 
    }
  }
};

  return (
    <>
    <div className="max-w-6xl flex flex-col gap-20 md:flex-row px-8">
              <motion.div 
          initial= "initial"
          animate="animate"
          exit="initial"
          variants={imgVariants}
          className="grow shrink">
          <Image height={537} width={1000} layout={'responsive'} objectFit={'contain'}
            src="/images/hand.png" alt="Libera Awards hand" priority={true}/>
        </motion.div>
        <div className="grow shrink"></div>
        </div>

        <div className="max-w-6xl flex flex-col md:flex-row px-8 py-20 md:py-32 -mt-52 mx-auto justify-center">
            <div className="grow shrink"></div>
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
      exit={{ scale: "100%", }}
      className="grow shrink content-center">
<h1 className="grow font-bold align-middle text-center leading-tight">
  {children}
  </h1>
  </motion.div>
        <div className="grow shrink"></div>
        </div>
        </>
  )
}
