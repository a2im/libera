'use client';

import Head from '../head'
import Header from '../header'
import Link from 'next/link'
import { motion } from 'framer-motion'


export default function Archive(ref) {
  return (
    <div>
          <Head />
          <Header>Archive</Header>
          <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          className="bg-sky-50">
            <div className="max-w-4xl p-8 mx-auto">
        <div className="LiberaBorder mx-auto">
        <h3 className='mb-8 text-center p-8'>Click below to view past Libera Awards nominees & winners.</h3>
            <motion.section className='flex flex-col md:flex-row flex-wrap max-w-6xl mb-10 mx-auto gap-10 justify-center content-center'> 
              <Link
                ref={ref}
                id="archive22"
                href="/archive/2022"
                legacyBehavior>
                <motion.div 
                whileTap={{scale: 0.95}}
                className="Borderswap1 hover:content-center justify-center shadow-2xl w-96 p-20 bg-libera-purple hover:bg-libera-pink ">
                  <h3 className="text-center hover:align-middle text-white whitespace-nowrap">2022 WINNERS</h3>
                  </motion.div>
                </Link>
              <Link
              ref={ref}
                id="archive21"
                href="/archive/2021"
                legacyBehavior>
              <motion.div 
                whileTap={{scale: 0.95}} className="Borderswap2 shadow-2xl w-96 p-20 bg-libera-purple hover:bg-libera-pink mygrow">
                  <h3 className="text-center text-white mygrow whitespace-nowrap">2021 WINNERS</h3>
                  </motion.div>
                </Link>
              <Link
              ref={ref}
                id="archive20"
                href="/archive/2020"
                legacyBehavior>
              <motion.div 
                whileTap={{scale: 0.95}} className="Borderswap3 shadow-2xl w-96 p-20 bg-libera-purple hover:bg-libera-pink mygrow">
                  <h3 className="text-center text-white mygrow whitespace-nowrap">2020 WINNERS</h3>
                  </motion.div>
                </Link>
              <Link
              ref={ref}
                id="archive19"
                className=""
                href="/archive/2019"
                legacyBehavior>
              <motion.div 
                whileTap={{scale: 0.95}} className="Borderswap4 shadow-2xl w-96 p-20 bg-libera-purple hover:bg-libera-pink mygrow">
                  <h3 className="text-center text-white mygrow whitespace-nowrap">2019 WINNERS</h3>
                  </motion.div>
                </Link>
              <Link
              ref={ref}
                id="archive18"
                className=""
                href="/archive/2018"
                legacyBehavior>
              <motion.div 
                whileTap={{scale: 0.95}} className="Borderswap4 shadow-2xl w-96 p-20 bg-libera-purple hover:bg-libera-pink mygrow">
                  <h3 className="text-center text-white mygrow whitespace-nowrap">2018 WINNERS</h3>
                  </motion.div>
                </Link>
              <Link
              ref={ref}
                id="archive17"
                className=""
                href="/archive/2017"
                legacyBehavior>
              <motion.div 
                whileTap={{scale: 0.95}} className="Borderswap3 shadow-2xl w-96 p-20 bg-libera-purple hover:bg-libera-pink mygrow">
                  <h3 className="text-center text-white mygrow whitespace-nowrap">2017 WINNERS</h3>
                  </motion.div>
                </Link>
              <Link
              ref={ref}
                id="archive16"
                className=""
                href="/archive/2016"
                legacyBehavior>
              <motion.div 
                whileTap={{scale: 0.95}} className="Borderswap2 shadow-2xl w-96 p-20 bg-libera-purple hover:bg-libera-pink mygrow">
                  <h3 className="text-center text-white mygrow whitespace-nowrap">2016 WINNERS</h3>
                  </motion.div>
                </Link>
              <Link
              ref={ref}
                id="archive15"
                className=""
                href="/archive/2015"
                legacyBehavior>
              <motion.div 
                whileTap={{scale: 0.95}} className="Borderswap1 shadow-2xl w-96 p-20 bg-libera-purple hover:bg-libera-pink mygrow">
                  <h3 className="text-center text-white mygrow whitespace-nowrap">2015 WINNERS</h3>
                  </motion.div>
                </Link>
              <Link
              ref={ref}
                id="archive14"
                className=""
                href="/archive/2014"
                legacyBehavior>
              <motion.div 
                whileTap={{scale: 0.95}} className="Borderswap1 shadow-2xl w-96 p-20 bg-libera-purple hover:bg-libera-pink mygrow">
                  <h3 className="text-center text-white mygrow whitespace-nowrap">2014 WINNERS</h3>
                  </motion.div>
                </Link>
              <Link
              ref={ref}
                id="archive13"
                className=""
                href="/archive/2013"
                legacyBehavior>
              <motion.div 
                whileTap={{scale: 0.95}} className="Borderswap2 shadow-2xl w-96 p-20 bg-libera-purple hover:bg-libera-pink mygrow">
                  <h3 className="text-center text-white mygrow whitespace-nowrap">2013 WINNERS</h3>
                  </motion.div>
                </Link>
              <Link
              ref={ref}
                id="archive12"
                className=""
                href="/archive/2012"
                legacyBehavior>
              <motion.div 
                whileTap={{scale: 0.95}} className="Borderswap3 shadow-2xl w-96 p-20 bg-libera-purple hover:bg-libera-pink mygrow">
                  <h3 className="text-center text-white mygrow whitespace-nowrap">2012 WINNERS</h3>
                  </motion.div>
                </Link>
            </motion.section>
            </div>
            </div>
      </motion.div>
    </div>
  )
}
