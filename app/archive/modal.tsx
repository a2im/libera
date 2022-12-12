'use client';

import React from "react"
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";


export default function MyModal (){
    const ref = useRef();
    const [isModalOpen, setModalOpen] = useState(false)
    const close = () => setModalOpen(false);
    useOnClickOutside(ref, () => setModalOpen(false));
    const dropIn = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 40,
                stiffness: 300,
            }
        },
        exit: {
            opacity: 0,
        },
    };

    return (
        <>
            <div className="flex fixed ladymodalbg bottom-5 right-5">
            {isModalOpen ? (
                <AnimatePresence>
                <motion.div
                ref={ref}
                onClick={(e) => e.stopPropagation()}
                className="fixed Borderswap5 p-5 ladymodal w-96"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                >
                   <div className="NomineeCardContainer">

                   </div>
                </motion.div>
                </AnimatePresence> ) : (
                <motion.button 
                whileTap={{scale: 0.95}}
                className="save-button"
                onClick={() => (setModalOpen(true))}>
                <h2 className="text-7xl ml-4 mt-2 hover:text-libera-pink text-white text-center font-black">   ?   </h2>
            </motion.button>
                )}
            </div>
     </>
    );
    }

    function useOnClickOutside(ref, handler) {
        useEffect(
          () => {
            const listener = (event) => {
              if (!ref.current || ref.current.contains(event.target)) {
                return;
              }
              handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
              document.removeEventListener("mousedown", listener);
              document.removeEventListener("touchstart", listener);
            };
          },
          [ref, handler]
        );
      }
      



