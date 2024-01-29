import React from 'react';
import { FaLinkedin, FaInstagram, FaSpotify, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="flex justify-center space-x-4">
        <a href="https://www.linkedin.com/in/brandonmcmaster" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
          <FaLinkedin className="h-6 w-6" />
        </a>
        <a href="https://www.instagram.com/brandonmcmaster" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300">
          <FaInstagram className="h-6 w-6" />
        </a>
        <a href="https://open.spotify.com/artist/3G28GCoEwspWWJuwJVfGwc?si=WGmn5vt8SY-Np3XLXXbYHA" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
          <FaSpotify className="h-6 w-6" />
        </a>
        <a href="https://github.com/brandonmcmaster" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <FaGithub className="h-6 w-6" />
        </a>
      </div>
      <p className="text-sm mt-4">
        © {new Date().getFullYear()} Brandon Mcmaster. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
