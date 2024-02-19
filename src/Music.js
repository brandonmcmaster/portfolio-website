import React from 'react';
import { FaSpotify } from 'react-icons/fa';

const Music = () => {
  return (
    <div className="container mx-auto bg-cover bg-center text-white text-center p-20" style={{ backgroundImage: `url('https://t3.ftcdn.net/jpg/02/97/31/76/240_F_297317658_xSuhvArgAS0g8AugQSvi0OJCQEv2WxjK.jpg')`, backdropFilter: 'blur(4px)', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <div className="border-2 border-gray-200 rounded-lg p-10" style={{ backdropFilter: 'blur(6px)' }}>
        <h2 className="text-4xl font-bold inline-flex items-center justify-center w-full">
          <FaSpotify className="mr-2" /> My Music <FaSpotify className="ml-2" />
        </h2>
        <p className="mb-4">These are songs that I have written, produced, and performed on.</p>
        {/* Spotify Playlist - Centered */}
        <div className="flex justify-center my-4">
          <iframe 
            style={{ borderRadius: "12px" }} 
            src="https://open.spotify.com/embed/playlist/0nSPK6FtcqF2dWxrCkxNoi?utm_source=generator&theme=0" 
            width="50%" 
            height="380" 
            frameBorder="0" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
          </iframe>
        </div>

        <p className="text-center p-5 mt-8">These are some of the music videos that I have been a part of:</p>
        {/* Music Videos - Cohesive Design */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {/* YouTube Videos - Each video is wrapped in a div for additional styling */}
          <div className="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qHeh6RofFdU?si=J7YV3xOMAq7WSs14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Eg8-JMSV9aY?si=Vdbkm_NhJBAy4KTA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/poZLiypLJzQ?si=i14X0ybNrhMkeDPH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
