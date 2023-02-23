'use client';
import YouTube, { YouTubeProps } from 'react-youtube';

export default function ArchiveVideo({VideoURL}:{VideoURL: string}){
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo();
        event.target.playVideo();
      }
      
      const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
          origin: 'http://localhost:3000'
        },
      };
    return(
        <div className='Youtubebox'>
        <YouTube videoId={VideoURL} className="video-responsive" opts={opts} onReady={onPlayerReady} />
        </div>
    )
}


  