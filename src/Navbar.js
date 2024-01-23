import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center border-b border-gray-600">
          <Link to="/" className="px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors">Home</Link>
      <Link to="/about" className="px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors">About</Link>
      <Link to="/projects" className="px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors">Projects</Link>
      <Link to="/gallery" className="px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors">Gallery</Link>
      <Link to="/resume" className="px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors">Resume/Press Kit</Link>
      <Link to="/contact" className="px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors">Contact</Link>
    </nav>
  );
};

export default Navbar;
