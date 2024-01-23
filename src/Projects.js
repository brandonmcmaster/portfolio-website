import React from 'react';

const Projects = () => {
  return (
    <div className="my-10">
      <div className="text-center p-5">
        <h2 className="text-4xl font-bold">My Music</h2>
        <br></br>
        <h3>This playlist contains songs that I have either, written, produced, or performed on.</h3>
      </div>

      <div className="flex flex-wrap justify-center">
        {/* Spotify Playlists */}
        <iframe 
  style={{ borderRadius: "12px" }} 
  src="https://open.spotify.com/embed/playlist/0nSPK6FtcqF2dWxrCkxNoi?utm_source=generator&theme=0" 
  width="40%" 
  height="380" 
  frameBorder="0" 
  allowFullScreen="" 
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
  loading="lazy">
</iframe>
{/* Add more Spotify players */}
      </div>
<br></br>
      <p className="text-center p-5">These are some of music videos that I have been a part of!</p>
<br></br>
      <div className="flex flex-wrap justify-center">
        {/* YouTube Videos */}
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/qHeh6RofFdU?si=J7YV3xOMAq7WSs14" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
        {/* Add more YouTube iframes */}
      </div>

      <div className="flex flex-wrap justify-center">
        {/* YouTube Videos */}
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/Eg8-JMSV9aY?si=Vdbkm_NhJBAy4KTA" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
        {/* Add more YouTube iframes */}
      </div>

      <div className="flex flex-wrap justify-center">
        {/* YouTube Videos */}
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/poZLiypLJzQ?si=i14X0ybNrhMkeDPH" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
        {/* Add more YouTube iframes */}
      </div>

      

      <div className="p-5">
        {/* GitHub Projects */}
        <h3 className="text-2xl font-semibold mb-4">GitHub Projects</h3>
        <ul className="list-disc list-inside">
          <li><a href="https://github.com/your_github_profile/your_project" target="_blank" className="text-blue-600 hover:text-blue-800">Project 1</a></li>
          {/* Add more list items */}
        </ul>
      </div>

      <div className="flex justify-center p-5">
        {/* Technology Icons */}
        <img src="path_to_your_technology_icon.png" alt="Technology Icon" className="h-10 w-10 m-2" />
        {/* Add more images for technologies */}
      </div>
    </div>
  );
};

export default Projects;
