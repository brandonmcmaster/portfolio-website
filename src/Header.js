import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gray-800 p-4">
      <div>
        <Menu>
          <Link to="/" className="menu-item">Home</Link>
          <Link to="/about" className="menu-item">About</Link>
          <Link to="/projects" className="menu-item">Projects</Link>
          <Link to="/gallery" className="menu-item">Gallery</Link>
          <Link to="/resume" className="menu-item">Resume/Press Kit</Link>
          <Link to="/contact" className="menu-item">Contact</Link>
        </Menu>
      </div>
      <div className="logo">
        {/* Your Logo Here */}
        <img src="path_to_logo" alt="Logo" />
      </div>
      <Link to="/contact" className="contact-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Contact
      </Link>
    </header>
  );
};

export default Header;
