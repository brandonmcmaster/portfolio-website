import React from 'react';
import VocalBooth from './assets/vocalbooth.jpg'
import Graduation from './assets/grad.jpg'

const AboutMe = () => {
  return (
    <div className="container mx-auto bg-cover bg-center text-white text-center p-20" style={{ backgroundImage: `url('https://t4.ftcdn.net/jpg/04/20/77/27/240_F_420772734_EUQv6soEJ0dZ2bcug8frDt73Pk4yXUbb.jpg')`, backdropFilter: 'blur(4px)', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
    <div className="border-2 border-gray-200 rounded-lg p-10" style={{ backdropFilter: 'blur(20px)' }}>
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>

        <p className="mb-4">I'm Brandon McMaster, a musician with over 25 years of experience in the industry, known for my role in founding and touring with the band Sleeping With Sirens. We crafted an album that continues to captivate millions of listeners, and my love for music remains as strong as ever.</p>
        <img src={VocalBooth} alt="Brandon McMaster" className="mx-auto mb-4 max-w-md" />
           <a href="/projects" className="bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">My Projects</a>
           <br></br>

        <p className="mb-4">But life has a way of leading us down unexpected paths, and I've discovered a new passion in the world of technology. I recently graduated from a full-stack .NET bootcamp in August 2023, and since then, I've been immersed in the fascinating realm of software development. It's a journey that excites me just as much as creating music does.</p>
        <img src={Graduation} alt="Brandon's Tech Journey" className="mx-auto mb-4 max-w-md" />

        <p className="mb-4">Speaking of which, I'm also releasing new music under the moniker "Former." Our sound is an eclectic blend of nu wave grunge, numetal, progressive metal, and even some hip-hop elements. 2024 promises to be an exciting year as I continue to release fresh tracks while honing my skills in music production and audio engineering, all while coding my way to new horizons.</p>
       
        <p className="mb-4">Join me on this genre-fluid adventure where music and code collide...</p>
       
        <a href="/music" className="bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">My Music</a>
      </section>
    </div>
    </div>
  );
};

export default AboutMe;
