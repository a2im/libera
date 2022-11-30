'use client';

import Head from '../../../head'
import Header from '../../../header'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Awards2017 } from '../../../../lib/awards-data/awards-data';
import YouTube, { YouTubeProps } from 'react-youtube';


export default function Archive17({  }) {

  console.log()

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
    event.target.playVideo();
  }
  
  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  
  return (
    <div>
          <Head />
          <Header>Archive 2017</Header>
          <motion.section exit={{ opacity: 0 }}>
      <div className="max-w-6xl mx-auto">
        <div className='Youtubebox'>
        <YouTube videoId="IZ2dxU5zKHM" className="video-responsive" opts={opts} onReady={onPlayerReady} />
        </div>
        <div className='mt-10 flex flex-wrap flex-row gap-5 p-8 justify-center mb-20'>
        {Awards2017.map(Awards2017 => (
          <div key={Awards2017.id} className='category Borderswap1 p-5 flex flex-col hover:bg-libera-pink hover:text-white'>
          <motion.button 
          whileHover={{scale: 1.04}}
          whileTap={{scale: 0.95}}
          className="">
          <h3 className='text-2xl text-white font-medium mb-2 w-32 tracking-tight'>
              {Awards2017.awardtitle}
          </h3>
          <h4 className='winnerstext w-40 text-xl'>
              {Awards2017.awardwinner}
          </h4>
          </motion.button>
      </div>
        ))}
          </div>
          </div>
          <div className="py-10" />
      </motion.section>
    </div>
  )
}

