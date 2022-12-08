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
            x: -320,
            y: 100,
            opacity: 0,
        },
        visible: {
            x: -360,
            y: -410,
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 40,
                stiffness: 300,
            }
        },
        exit: {
            y:"-100vh",
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
                    <div className="grid grid-cols-0">
                    <h2 className="text-white text-3xl">LIBERA AWARDS 2023 TIMELINE</h2>
                    <h4 className="text-white font-medium text-xl">
                    SEP 27, 2022 - SUBMISSIONS OPEN<br></br>
                    DEC 05, 2022 - SUBMISSIONS CLOSE<br></br>
                    JAN 18, 2023 - 1ST ROUND VOTING BEGINS<br></br>
                    JAN 31, 2023 - 1ST ROUND VOTING ENDS<br></br>
                    MAR 23, 2023 - NOMINEES ANNOUNCEMENT & FINAL ROUND VOTING BEGINS<br></br>
                    APR 05, 2023 - FINAL ROUND VOTING ENDS<br></br>
                    JUN 15, 2023 - 2022 LIBERA AWARDS CEREMONY<br></br><br></br>
        
                    If you need help or are stuck somewhere, click below to view our submissions guide
                    </h4>
                        <Link href="/submissions" legacyBehavior>
                            <motion.button
                            onClick={close}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.95}}
                            className="bg-black mx-auto px-5 rounded">
                                click here!
                            </motion.button>
                        </Link> 
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
      



