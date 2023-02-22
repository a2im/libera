'use client';

import { Awards2019 } from '../../../../lib/awards-data/awards-data';
import YouTube, { YouTubeProps } from 'react-youtube';
import { Suspense } from 'react'
import Loading from '../../../loading'
import MyNavbar from '../../../../components/navbar'

export default function Archive19({  }) {

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
    event.target.playVideo();
  }
  
  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };
  
  return (
    <div>
          <title>Libera Awards - 2019 Archive</title>
          <Suspense fallback={<Loading start={0} end={10}/>}>
      <MyNavbar/>
          <div className="grow shrink content-center">
<h1 className="pt-20 grow font-bold align-middle text-center leading-tight">
  2019
  </h1>
  </div>
          <section>
      <div className="max-w-6xl mx-auto">
        <div className='Youtubebox'>
        <YouTube videoId="Ns13GcnXoqM" className="video-responsive" opts={opts} onReady={onPlayerReady} />
        </div>
        <div className='mt-10 grid grid-cols-2 md:grid-cols-4 gap-5 p-8 mb-20'>
        {Awards2019.map(Awards2019 => (
          <button key={Awards2019.id} className="p-10 drop-shadow-4xl hover:scale-105 max-w-64 Borderswap3 mx-auto my-auto hover:bg-libera-pink hover:text-white">
          <h3 className='p-3 text-2xl text-white font-medium mb-2 tracking-tight'>
              {Awards2019.awardtitle}
          </h3>
          <h4 className='p-2 mx-auto hover:font-bold w-40 text-xl'>
              {Awards2019.awardwinner}
          </h4>
          </button>
        ))}
          </div>
          </div>
          <div className="py-10" />
      </section>
      </Suspense>
    </div>
  )
}

