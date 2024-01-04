import React from 'react';
import'./custom.features.css'
import YouTube from 'react-youtube';

//constant to hold the videoID from YouTube
const videoId = 'T90-B1Ivv9A'; 

  const opts = {
    playerVars: {
      autoplay: 0, // 1 to autoplay, 0 to not autoplay
    },
  };
export default function HowItWorks() {
    return (
        <div className="mainSection">
            <h1 className="heading">How It Works</h1>
            <div className="ytvideo">
            <YouTube
                videoId={videoId}
                opts={opts}
                className="youtube-video"
      />
            </div>
        </div>
    );
}