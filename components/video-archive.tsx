'use client';
import YouTube, { YouTubeProps } from 'react-youtube';

export default function ArchiveVideo({VideoURL}:{VideoURL: string}){
  const YouTubeURL = VideoURL.replace("https://www.youtube.com/watch?v=","");
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.playVideo();
  }
  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      enablejsapi: 1,
      fs: 0,
      modestbranding: 1,
    },
    origin:
      'https://www.youtube.com',
  };
    return(
      <>
        <YouTube videoId={YouTubeURL} className="video-responsive" opts={opts} onReady={onPlayerReady} />
        </>
    )
}


  