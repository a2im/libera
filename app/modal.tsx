'use client';

import React from "react"
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import { useQuery } from "@apollo/client";
import { GET_INFO_BUTTON } from "../lib/gql/queries";

export default function MyModal () {
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
                <motion.div
                ref={ref}
                onClick={(e) => e.stopPropagation()}
                className="fixed Borderswap5 p-5 w-96 rounded-xl shadow-2xl"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                >
                <ModalInfo/>
                </motion.div>
                 ) : (
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
      

function ModalInfo(){
    const { loading, error, data } = useQuery(GET_INFO_BUTTON, { 
        variables: {
          PublicationState: "LIVE", 
          Name: "Libera Awards"
        }});
        if (loading) return <div className="animate-pulse h-[150px] w-[100px] bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
        if (error) return <p>Error</p>
    return (
        <div>
            {data?.infoButtons.data.map(info => (
            <div key={info.id} className="p4 justify-evenly rounded-xl">
                <ReactMarkdown className="line-break" remarkPlugins={[remarkGfm]}>{info.attributes.Info}</ReactMarkdown>
                </div>
                              )
            )}
        </div>
    )
}

