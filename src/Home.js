import React from 'react';
import MainImage from './assets/DSCF2563.JPG';

const Home = () => {
  return (
    <div className="container mx-auto bg-cover bg-center text-white text-center p-5 sm:p-20" style={{ backgroundImage: `url('https://t4.ftcdn.net/jpg/01/91/31/71/240_F_191317152_fvboKUeaOMMMdmtxsFKuqMWd6allXAS2.jpg')` }}>
      <div className="rounded-lg p-5 sm:p-10 sm:border-2 border-gray-200" style={{ backdropFilter: 'blur(4px)', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
        <h1 className="font-retro text-4xl sm:text-5xl font-bold mb-4" style={{ textShadow: '2px 2px 4px #000000' }}>Welcome to My World!</h1>
        <p className="text-xl sm:text-2xl mb-6" style={{ textShadow: '1px 1px 2px #000000' }}>Explore my journey through code and melodies, where each string strummed is a line of code written.</p>
        <img src={MainImage} alt="Brandon McMaster" className="mx-auto mb-6 rounded-lg shadow-lg w-full h-auto" />

        <div className="flex justify-center gap-4">
          <a href="/about" className="bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">About Me</a>
          <a href="/projects" className="bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">My Projects</a>
          <a href="/music" className="bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">My Music</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
