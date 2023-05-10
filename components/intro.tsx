'use client';

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const dropIn = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

export default function Intro(){
    const [isVisible, setIsVisible] = useState(false)
    return(
        <>
        <AnimatePresence>
        <motion.div
        key={'intro-image'}
                className="absolute z-60 top-10 w-full h-full bg-white opacity-100"
                variants={dropIn}
                animate={isVisible ? "visible" : "hidden"}
                transition={{ease: "easeOut", delay: 2.5, duration: 2,}}
                exit={{opacity: 0}}
                >
                    <Image src={'/images/libera2023-performers-collage-3.jpg'} alt={'Libera 2023 Performers'} height={2550} width={3300}/>
            </motion.div>
        </AnimatePresence>
        </>
    )
}