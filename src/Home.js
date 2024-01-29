import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto bg-cover bg-center text-white text-center p-20" style={{ backgroundImage: `url('path-to-your-background-image.jpg')`, boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
      <div className="border-2 border-gray-200 rounded-lg p-10" style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)' }}>
        <h1 className="text-5xl font-bold mb-4">Hi there!</h1>
        <p className="text-2xl mb-6">Thanks for taking the time to check out my site. Dive into my world of coding and melodies!</p>
        <img src="https://live.staticflickr.com/4084/5180710939_a17fa35cdb.jpg" alt="Brandon McMaster" className="mx-auto mb-6" style={{ width: '350px', height: '250px', borderRadius: '10px' }} />
        <a href="about" className="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Learn More About Me
        </a>
      </div>
    </div>
  );
};

export default Home;
