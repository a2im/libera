import React from "react";
import Link from "next/link";

export default function LiberaButton ({ children, href, type}) {
  if (type === "Internal")
  return (
  <div className="shrink text-center">
        <Link href={href}>
        <div className="p-7 drop-shadow-2xl max-h-21 max-w-md justify-center leading-tight mx-auto">
            <button 
            className="Borderswap3 hover:scale-105 active:animate-ping relative shrink">
              <h3 className="align-middle font-button px-4 text-white tracking-tighter leading-tight animate-pulse">
              {children}
              </h3>
            </button>
        </div>
        </Link>
    </div>
  )
  else if (type === "External")
  return (
  <div className="shrink text-center">
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer">
          <div className="p-7 drop-shadow-2xl max-h-21 max-w-sm justify-center leading-tight mx-auto">
              <button 
              className="Borderswap3 hover:scale-105 active:animate-ping relative shrink">
                <h3 className="align-middle font-button px-4 text-white tracking-tighter leading-tight">
                {children}
                </h3>
              </button>
          </div>

        </Link>
    </div>
  );
};

