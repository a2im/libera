'use client';

import React, { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode
  href: string
  [name: string]: any;
}

export const LiberaButtonExternal: React.FC<ButtonProps>= ({ children, href }: ButtonProps) => {
  return <div className="text-center p-8">
        <Link
          href={href}
          passHref
          target="_blank"
          rel="noopener noreferrer">
          <div className="p-7 drop-shadow-2xl max-h-21 justify-center leading-tight mx-auto">
              <motion.button 
              whileTap={{scale: 0.95}}
              className="Borderswap3">
                <h3 className="align-middle font-normal px-4 text-white truncate tracking-tighter leading-tight">
                {children}
                </h3>
              </motion.button>
          </div>

        </Link>
    </div>
}

export const LiberaButtonInternal: React.FC<ButtonProps>= ({ children, href}: ButtonProps) => {
  return <div className="text-center p-8">
        <Link href={href} passHref>
        <div className="p-7 drop-shadow-2xl max-h-21 justify-center leading-tight mx-auto">
            <motion.button 
            whileTap={{scale: 0.95}}
            className="Borderswap3">
              <h3 className="align-middle font-normal px-4 text-white truncate tracking-tighter leading-tight">
              {children}
              </h3>
            </motion.button>
        </div>
        </Link>
    </div>
}

