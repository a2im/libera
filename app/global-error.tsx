'use client';
import MyHead from './head';
import Footer from './footer';
import MyModal from "../components/modal"
import { Providers } from '../components/providers';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
        <html lang="en">
        <head>
          <MyHead></MyHead>
          </head>
        <body className="min-h-screen z-0">
        <Providers>
        <h2 className="text-center">Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
        {children}
        <Footer/>
        <MyModal />
        </Providers>
        </body>
      </html>
  );
}
