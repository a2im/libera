import { Suspense } from 'react'
import Loading from '../loading'
import MyNavbar from '../../components/navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function Tickets() {
  return (
    <div>
          <title>Libera Awards - Tickets</title>
          <Suspense fallback={<Loading start={0} end={10}/>}>
              <MyNavbar/>
          <div className="grow shrink content-center">
<h1 className="pt-20 grow font-bold align-middle text-center leading-tight">
Tickets
  </h1>
  </div>
  <div className="max-w-4xl relative py-5 flex flex-col mx-auto justify-evenly gap-10 ">
                <div className='p-8 mx-auto'>
                <div className='max-w-4xl p-8 mx-auto bg-sky-50 shadow-2xl rounded-2xl'>
                  <h3>
                  Purchase Now to Save More
                  </h3>
                  <hr className="mt-3 mb-8 Hrswap"></hr>
                  <div className="grid grid-cols-0 md:grid-cols-2 mx-auto justify-center gap-3">
                    <div className="flex flex-col justify-between max-w-sm">
                      <p>Each ticket purchase includes a seat at the A2IM Libera Awards ceremony at Town Hall, as well as admittance to our exclusive afterparty featuring an open bar and dinner.</p>
                      <div className="drop-shadow-2xl max-h-21 justify-center leading-tight mx-auto">
                        <Link
                          href='https://www.ticketmaster.com/a2im-libera-awards-2023-new-york-new-york-06-15-2023/event/03005E44984F3F1A'
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-center">
                            <button className="Borderswap3 hover:scale-105">
                              <h3 className="align-middle text-xl font-normal px-4 text-white truncate tracking-tighter leading-tight">
                              Get Tickets via Ticketmaster
                              </h3>
                            </button>
                        </Link>
                      </div>
                    </div>
                    <div className="relative mx-auto rounded-lg overflow-hidden">
                      <Image src='/images/TH_Rentalsimg1.jpg'
                        alt="town hall"
                        width={1000}
                        height={708}
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw" />
                      </div>
                  </div>
                  </div>
                </div>
            </div>
          </Suspense>
    </div>
  )
}
