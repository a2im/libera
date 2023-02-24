'use client';
import YouTube, { YouTubeProps } from 'react-youtube';

export default function ArchiveVideo({VideoURL}:{VideoURL: string}){
  const YouTubeURL = VideoURL.replace("https://www.youtube.com/watch?v=","");
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
    return(
      <>
        <YouTube videoId={YouTubeURL} className="video-responsive" opts={opts} onReady={onPlayerReady} />
        </>
    )
}


  