import React from 'react';
import MainImage from './assets/DSCF2563.JPG';

const Home = () => {
  return (
    <div className="container mx-auto bg-cover bg-center text-white text-center p-5" style={{ backgroundImage: `url('https://t4.ftcdn.net/jpg/01/91/31/71/240_F_191317152_fvboKUeaOMMMdmtxsFKuqMWd6allXAS2.jpg` }}>
      <div className="border-2 border-gray-200 rounded-lg p-10" style={{ backdropFilter: 'blur(4px)', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
        <h1 className="text-5xl font-bold mb-4" style={{ textShadow: '2px 2px 4px #000000' }}>Welcome to My World!</h1>
        <p className="text-2xl mb-6" style={{ textShadow: '1px 1px 2px #000000' }}>Explore my journey through code and melodies, where each string strummed is a line of code written.</p>
        <img src={MainImage} alt="Brandon McMaster" className="mx-auto mb-6 rounded-lg shadow-lg" style={{ width: 'auto', height: '400px' }} />
        <div className="flex justify-center gap-4">
          <a href="/about" className="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">About Me</a>
          <a href="/projects" className="bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">My Projects</a>
          <a href="/music" className="bg-green-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">My Music</a>
        </div>
      </div>
    </div>
  );
};

export default Home;

