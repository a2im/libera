'use client';

import Head from '../../../head'
import Header from '../../../header'
import { motion } from 'framer-motion'
import { Awards2012 } from '../../../../lib/awards-data/awards-data';
import YouTube, { YouTubeProps } from 'react-youtube';


export default function Archive12() {

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
          <Head>Libera Awards - 2012 Archive</Head>
          <Header>Archive 2012</Header>
          <motion.section exit={{ opacity: 0 }}>
      <div className="max-w-6xl mx-auto">
        <div className='Youtubebox'>
        <YouTube videoId="7weehasRE48" className="video-responsive" opts={opts} onReady={onPlayerReady} />
        </div>
        <div className='mt-10 flex flex-wrap flex-row gap-5 p-8 justify-center text-center mb-20'>
        {Awards2012.map(Awards2012 => (
          <div key={Awards2012.id} className='category Borderswap1 flex flex-col hover:bg-libera-pink hover:text-white'>
          <motion.button 
          whileHover={{scale: 1.04}}
          whileTap={{scale: 0.95}}
          className="">
          <h3 className='text-2xl text-white font-medium mb-2 tracking-tight'>
              {Awards2012.awardtitle}
          </h3>
          <h4 className='winnerstext w-40 text-xl'>
              {Awards2012.awardwinner}
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

