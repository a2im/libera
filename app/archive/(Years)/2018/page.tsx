'use client';

import { Awards2018 } from '../../../../lib/awards-data/awards-data';
import YouTube, { YouTubeProps } from 'react-youtube';

export default function Archive18({  }) {

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
          <title>Libera Awards - 2018 Archive</title>
          <div className="grow shrink content-center">
<h1 className="pt-20 grow font-bold align-middle text-center leading-tight">
  2018
  </h1>
  </div>
          <section>
      <div className="max-w-6xl mx-auto">
        <div className='Youtubebox'>
        <YouTube videoId="37CCv4t9ads" className="video-responsive" opts={opts} onReady={onPlayerReady} />
        </div>
        <div className='mt-10 grid grid-cols-2 md:grid-cols-4 gap-5 p-8 mb-20'>
        {Awards2018.map(Awards2018 => (
          <button key={Awards2018.id} className="p-10 drop-shadow-4xl hover:scale-105 max-w-64 Borderswap3 mx-auto my-auto hover:bg-libera-pink hover:text-white">
          <h3 className='p-3 text-2xl text-white font-medium mb-2 tracking-tight'>
              {Awards2018.awardtitle}
          </h3>
          <h4 className='p-2 mx-auto hover:font-bold w-40 text-xl'>
              {Awards2018.awardwinner}
          </h4>
          </button>
        ))}
          </div>
          </div>
          <div className="py-10" />
      </section>
    </div>
  )
}

