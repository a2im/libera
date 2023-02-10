'use client';

import Link from 'next/link';
import { useState, useEffect, useRef} from 'react';
import Image from "next/image";
import { GET_ANNOUNCEMENTS } from "../lib/gql/queries";
import { useQuery } from '@apollo/client';

export default function MyNavbar() {
  const ref = useRef();
  const [navbar, setNavbar] = useState(false);
  useOnClickOutside(ref, () => setNavbar(false));
  return (
    <>
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
              <ul ref={ref} className="items-center justify-center space-x-4 space-y-0 md:flex">
                <li 
                  className="text-center text-xl text-white Borderswap2nav uppercase font-bold tracking-tighter">
                  <Link href="/about" onClick={() => setNavbar(false)} >
                    About
                  </Link>
                </li>
                <li
                    className="text-center text-xl text-white Borderswap1nav uppercase font-bold">
                  <Link href="/news" onClick={() => setNavbar(false)} >
                    News
                  </Link>
                </li>
                <li 
                  className="text-center text-xl text-white Borderswap3nav uppercase font-bold">
                  <Link href="/tickets" onClick={() => setNavbar(false)} >
                    Tickets
                  </Link>
                </li>
                <li
                  className="text-center text-xl text-white Borderswap1nav uppercase font-bold">
                  <Link href="/voting" onClick={() => setNavbar(false)} >
                    VOTE
                  </Link>
                </li>
                <li
                  className="text-center text-xl text-white Borderswap4nav uppercase font-bold">
                  <Link href="/archive" onClick={() => setNavbar(false)} >
                    Archive
                  </Link>
                </li>
                <li
                  className="text-center text-xl text-white Borderswap1nav uppercase font-bold">
                  <Link href="/faq" onClick={() => setNavbar(false)} >
                    FAQ
                  </Link>
                </li>
                <li
                  className="text-center text-xl text-white Borderswap4nav uppercase font-bold">
                  <Link href="/contact" onClick={() => setNavbar(false)} >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <NavbarAnnouncements/>
      </>
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

export function NavbarAnnouncements(){
  const { loading, error, data } = useQuery(GET_ANNOUNCEMENTS, { 
    variables: {
      PublicationState: "LIVE",
      Name: "Libera Awards",
    }});
    if (loading) return <div className="animate-pulse h-[300px] w-[300px] bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
    if (error) return <p>Error</p>
    console.log(data)
  return (
    <>
    <div className="w-full bg-a2imred">
    <div className="z-40 mx-auto overflow-x-hidden relative flex max-w-5xl gap-10">
    <div className="animate-marquee top-0 whitespace-nowrap">
    {data?.announcements.data.map(announcements => (
        <h3 key={announcements.id} className="text-white text-2xl px-5 mt-10 uppercase">{announcements.attributes.text}</h3>
        )
        )}
    </div>
    <div className="absolute top-0 animate-marquee2 whitespace-nowrap pt-10">
    {data?.announcements.data.map(announcements => (
        <h3 key={announcements.id} className="text-white text-2xl px-5 uppercase">{announcements.attributes.text}</h3>
        )
        )}
    </div>
    <div className="absolute top-0 animate-marquee3 whitespace-nowrap pt-10">
    {data?.announcements.data.map(announcements => (
        <h3 key={announcements.id} className="text-white text-2xl px-5 uppercase">{announcements.attributes.text}</h3>
        )
        )}
    </div>
    <div className="absolute top-0 animate-marquee4 whitespace-nowrap pt-10">
    {data?.announcements.data.map(announcements => (
        <h3 key={announcements.id} className="text-white text-2xl px-5 uppercase">{announcements.attributes.text}</h3>
        )
        )}
    </div>
    </div>
    </div>
    </>
  )
}