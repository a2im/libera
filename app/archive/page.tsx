import Header from '../header'
import Link from 'next/link'



export default function Archive() {
  return (
    <div>
          <title>Libera Awards - Archive</title>
          <Header>Archive</Header>
          <div
          className="bg-sky-50">
            <div className="max-w-4xl p-8 mx-auto">
        <div className="LiberaBorder mx-auto">
        <h3 className='mb-8 text-center p-8'>Click below to view past Libera Awards nominees & winners.</h3>
            <section className='flex flex-col md:flex-row flex-wrap max-w-6xl mb-10 mx-auto gap-10 justify-center content-center'> 
              <Link
                href="/archive/2022"
                legacyBehavior>
                <div 
                className="Borderswap1 hover:content-center justify-center shadow-2xl w-96 p-20 bg-libera-purple hover:bg-libera-pink ">
                  <h3 className="text-center hover:align-middle text-white whitespace-nowrap">2022 WINNERS</h3>
                  </div>
                </Link>
              <Link
                href="/archive/2021"
                legacyBehavior>
              <div className="Borderswap2 shadow-2xl w-96 p-20 bg-libera-purple hover:bg-libera-pink mygrow">
                  <h3 className="text-center text-white mygrow whitespace-nowrap">2021 WINNERS</h3>
                  </div>
                </Link>
              <Link
                href="/archive/2020"
                legacyBehavior>
              <div className="Borderswap3 shadow-2xl w-96 p-20 bg-libera-purple hover:bg-libera-pink mygrow">
                  <h3 className="text-center text-white mygrow whitespace-nowrap">2020 WINNERS</h3>
                  </div>
                </Link>
              <Link
                href="/archive/2019"
                legacyBehavior>
              <div className="Borderswap4 shadow-2xl w-96 p-20 bg-libera-purple hover:bg-libera-pink mygrow">
                  <h3 className="text-center text-white mygrow whitespace-nowrap">2019 WINNERS</h3>
                  </div>
                </Link>
              <Link 
                href="/archive/2018"
                legacyBehavior>
              <div className="Borderswap4 shadow-2xl w-96 p-20 bg-libera-purple hover:bg-libera-pink mygrow">
                  <h3 className="text-center text-white mygrow whitespace-nowrap">2018 WINNERS</h3>
                  </div>
                </Link>
              <Link
                href="/archive/2017"
                legacyBehavior>
              <div className="Borderswap3 shadow-2xl w-96 p-20 bg-libera-purple hover:bg-libera-pink mygrow">
                  <h3 className="text-center text-white mygrow whitespace-nowrap">2017 WINNERS</h3>
                  </div>
                </Link>
              <Link
                href="/archive/2016"
                legacyBehavior>
              <div className="Borderswap2 shadow-2xl w-96 p-20 bg-libera-purple hover:bg-libera-pink mygrow">
                  <h3 className="text-center text-white mygrow whitespace-nowrap">2016 WINNERS</h3>
                  </div>
                </Link>
              <Link
                href="/archive/2015"
                legacyBehavior>
              <div className="Borderswap1 shadow-2xl w-96 p-20 bg-libera-purple hover:bg-libera-pink mygrow">
                  <h3 className="text-center text-white mygrow whitespace-nowrap">2015 WINNERS</h3>
                  </div>
                </Link>
              <Link
                href="/archive/2014"
                legacyBehavior>
              <div className="Borderswap1 shadow-2xl w-96 p-20 bg-libera-purple hover:bg-libera-pink mygrow">
                  <h3 className="text-center text-white mygrow whitespace-nowrap">2014 WINNERS</h3>
                  </div>
                </Link>
              <Link
                href="/archive/2013"
                legacyBehavior>
              <div className="Borderswap2 shadow-2xl w-96 p-20 bg-libera-purple hover:bg-libera-pink mygrow">
                  <h3 className="text-center text-white mygrow whitespace-nowrap">2013 WINNERS</h3>
                  </div>
                </Link>
              <Link
                href="/archive/2012"
                legacyBehavior>
              <div className="Borderswap3 shadow-2xl w-96 p-20 bg-libera-purple hover:bg-libera-pink mygrow">
                  <h3 className="text-center text-white mygrow whitespace-nowrap">2012 WINNERS</h3>
                  </div>
                </Link>
            </section>
            </div>
            </div>
      </div>
    </div>
  )
}
