'use client';
import { useOnClickOutside } from 'usehooks-ts'
import Link from 'next/link';
import Image from "next/image";
import React, { useState, useRef } from "react";

export default function MyNavbar({children}) {
  const Navref = useRef();
  const [navbar, setNavbar] = useState(false);
  const handleClickOutside = () => {
    setNavbar(false)
  }
  const handleClickInside = () => {
    setNavbar(!navbar)
  }
  
  useOnClickOutside(Navref, handleClickOutside)
  return (
      <nav className="liberanav w-full fixed z-50 shadow">
        <div className="justify-between mx-auto md:py-0 lg:max-w-5xl items-center md:flex md:px-4">
          <div>
            <div className="flex items-center justify-between md:block">
            <Link href={"/"} legacyBehavior>
                <a>
              <div className="flex justify-center gap-10 grid-cols-2">
                <div className="mygrow a2imbuttonbox ml-2 w-10">
                <Image src="/logos/A2IM-button-white-sm.png" alt="a2im logo button" height={50} width={50} />
                </div>
                <div className="mt-1">
                <h2 className="text-2xl hover:text-libera-pink text-white font-bold mt-1 truncate text-center align-middle -ml-5 tracking-wider">LIBERA AWARDS</h2>
                </div>
              </div>
              </a>
              </Link>
              <div className="md:hidden">
                <button
                  className="pr-2 mr-2 pl-2 p-2 text-white rounded-md outline-none focus:border-white focus:border"
                  onClick={handleClickInside}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center md:block ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul ref={Navref} className="items-center justify-center space-x-4 space-y-0 md:flex">
                <li 
                  className="text-center text-xl text-white Borderswap2nav uppercase font-bold tracking-tighter">
                  <Link href="/about" onClick={handleClickOutside} >
                    About
                  </Link>
                </li>
                <li
                    className="text-center text-xl text-white Borderswap1nav uppercase font-bold">
                  <Link href="/news" onClick={handleClickOutside} >
                    News
                  </Link>
                </li>
                <li 
                  className="text-center text-xl text-white Borderswap3nav uppercase font-bold">
                  <Link href="/tickets" onClick={handleClickOutside} >
                    Tickets
                  </Link>
                </li>
                <li
                  className="text-center text-xl text-white Borderswap1nav uppercase font-bold">
                  <Link href="/voting" onClick={handleClickOutside} >
                    VOTE
                  </Link>
                </li>
                <li
                  className="text-center text-xl text-white Borderswap4nav uppercase font-bold">
                  <Link href="/archive" onClick={handleClickOutside} >
                    Archive
                  </Link>
                </li>
                <li
                  className="text-center text-xl text-white Borderswap1nav uppercase font-bold">
                  <Link href="/faq" onClick={handleClickOutside} >
                    FAQ
                  </Link>
                </li>
                <li
                  className="text-center text-xl text-white Borderswap4nav uppercase font-bold">
                  <Link href="/contact" onClick={handleClickOutside} >
                    Contact
                  </Link>
                </li>
                <li
              className="text-center font-serif text-zinc-500 whitespace-nowrap hover:scale-105">
          {children}
            </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
}
