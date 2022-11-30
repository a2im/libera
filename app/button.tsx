'use client';

import React, { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode
  href: string
  variant: string
  [name: string]: any;
}

export const LiberaButtonExternal: React.FC<ButtonProps>= ({ children, href, variant }: ButtonProps) => {
  return <div className="text-center p-8">
        <Link
          href={href}
          passHref
          target="_blank"
          rel="noopener noreferrer">
          <div className="p-7 drop-shadow-2xl max-h-21 justify-center leading-tight mx-auto">
              <motion.button 
              whileTap={{scale: 0.95}}
              className={variant}>
                <h3 className="align-middle text-white p-3 truncate font-bold tracking-tighter leading-tight">
                {children}
                </h3>
              </motion.button>
          </div>

        </Link>
    </div>
}

export const LiberaButtonInternal: React.FC<ButtonProps>= ({ children, href, variant }: ButtonProps) => {
  return <div className="text-center p-8">
        <Link href={href} passHref>
        <div className="p-7 drop-shadow-2xl max-h-21 justify-center leading-tight mx-auto">
            <motion.button 
            whileTap={{scale: 0.95}}
            className={variant}>
              <h3 className="align-middle text-white p-3 truncate font-bold tracking-tighter leading-tight">
              {children}
              </h3>
            </motion.button>
        </div>
        </Link>
    </div>
}

