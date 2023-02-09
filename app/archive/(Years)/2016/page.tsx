'use client';

import { Awards2016 } from '../../../../lib/awards-data/awards-data';
import YouTube, { YouTubeProps } from 'react-youtube';
import { Suspense } from 'react'
import Loading from '../../../loading'
import MyNavbar from '../../../nav'
import LoginButton from '../../../login';

export default function Archive16({  }) {

  console.log()

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
          <title>Libera Awards - 2016 Archive</title>
          <Suspense fallback={<Loading start={0} end={10}/>}>
          <MyNavbar><LoginButton/></MyNavbar>
          <div className="grow shrink content-center">
<h1 className="pt-20 grow font-bold align-middle text-center leading-tight">
2016
  </h1>
  </div>
          <section>
      <div className="max-w-6xl mx-auto">
        <div className='Youtubebox'>
        <YouTube videoId="V_L2Zsnjb6o" className="video-responsive" opts={opts} onReady={onPlayerReady} />
        </div>
        <div className='mt-10 grid grid-cols-2 md:grid-cols-4 gap-5 p-8 mb-20'>
        {Awards2016.map(Awards2016 => (
          <button key={Awards2016.id} className="p-10 drop-shadow-4xl hover:scale-105 max-w-64 Borderswap3 mx-auto my-auto hover:bg-libera-pink hover:text-white">
          <h3 className='p-3 text-2xl text-white font-medium mb-2 tracking-tight'>
              {Awards2016.awardtitle}
          </h3>
          <h4 className='p-2 mx-auto hover:font-bold w-40 text-xl'>
              {Awards2016.awardwinner}
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

