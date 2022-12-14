'use client';

import Link from 'next/link';
import { useState, useEffect, useRef} from 'react';
import Image from "next/image";

export default function MyNavbar() {
  const ref = useRef();
  const [navbar, setNavbar] = useState(false);
  useOnClickOutside(ref, () => setNavbar(false));
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
                  onClick={() => setNavbar(!navbar)}
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
              <ul ref={ref} className="items-center justify-center space-x-6 space-y-0 md:flex">
                <li 
                  className="ml-6 p-1 text-center text-2xl text-white Borderswap2nav">
                  <Link href="/about" onClick={() => setNavbar(false)} >
                    About
                  </Link>
                </li>
                <li
                    className="ml-6 p-1 text-center text-2xl text-white Borderswap1nav">
                  <Link href="/news" onClick={() => setNavbar(false)} >
                    News
                  </Link>
                </li>
                <li 
                  className="ml-6 p-1 text-center text-2xl text-white Borderswap3nav">
                  <Link href="/tickets" onClick={() => setNavbar(false)} >
                    Tickets
                  </Link>
                </li>
                <li
                  className="ml-6 p-1 text-center text-2xl text-white Borderswap4nav">
                  <Link href="/archive" onClick={() => setNavbar(false)} >
                    Archive
                  </Link>
                </li>
                <li
                  className="ml-6 p-1 text-center text-2xl text-white Borderswap1nav">
                  <Link href="/faq" onClick={() => setNavbar(false)} >
                    FAQ
                  </Link>
                </li>
                <li
                  className="ml-6 p-1 text-center text-2xl text-white Borderswap4nav">
                  <Link href="/contact" onClick={() => setNavbar(false)} >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
}
function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
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