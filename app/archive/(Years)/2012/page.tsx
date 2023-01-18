'use client';

import { Awards2012 } from '../../../../lib/awards-data/awards-data';
import YouTube, { YouTubeProps } from 'react-youtube';
import { Suspense } from 'react'
import Loading from '../../../loading'
import MyNavbar from '../../../navbar'

export default function Archive12() {

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
          <title>Libera Awards - 2012 Archive</title>
          <Suspense fallback={<Loading start={0} end={10}/>}>
      <MyNavbar/>
          <div className="grow shrink content-center">
<h1 className="pt-20 grow font-bold align-middle text-center leading-tight">
  2012
  </h1>
  </div>
          <section>
      <div className="max-w-6xl mx-auto">
        <div className='Youtubebox'>
        <YouTube videoId="7weehasRE48" className="video-responsive" opts={opts} onReady={onPlayerReady} />
        </div>
        
          </div>
          <div className="py-10" />
      </section>
      </Suspense>
    </div>
  )
}

