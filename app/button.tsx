import React from "react";
import Link from "next/link";

export function LiberaButtonExternal ({ children, href }) {
  return <div className="text-center p-8">
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer">
          <div className="p-7 drop-shadow-2xl max-h-21 justify-center leading-tight mx-auto">
              <button 
              className="Borderswap3 hover:scale-105">
                <h3 className="align-middle font-normal px-4 text-white truncate tracking-tighter leading-tight">
                {children}
                </h3>
              </button>
          </div>

        </Link>
    </div>
}

export function LiberaButtonInternal ({ children, href}) {
  return <div className="text-center p-8">
        <Link href={href}>
        <div className="p-7 drop-shadow-2xl max-h-21 justify-center leading-tight mx-auto">
            <button 
            className="Borderswap3 hover:scale-105">
              <h3 className="align-middle font-normal px-4 text-white truncate tracking-tighter leading-tight">
              {children}
              </h3>
            </button>
        </div>
        </Link>
    </div>
}

