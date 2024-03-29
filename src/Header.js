import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons
import LogoImage from './assets/DaftYellow.png'; // Import your logo image here


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  return (
    <header className="flex justify-between items-center bg-gray-800 p-4">
      <div className="menu-container w-auto h-auto relative" style={{ width: '40px' }}>
        <Menu left 
              isOpen={menuOpen} 
              onStateChange={handleStateChange} 
              customBurgerIcon={<FaBars />} // Using Font Awesome Bars icon
              customCrossIcon={<FaTimes />} // Using Font Awesome Times icon
        >
          <Link to="/" className="font-retro menu-item text-pink-400 hover:text-green-300 transition duration-300 ease-in-out shadow-lg hover:shadow-pink-500/50" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="font-retro menu-item text-pink-400 hover:text-green-300 transition duration-300 ease-in-out shadow-lg hover:shadow-pink-500/50" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/projects" className="font-retro menu-item text-pink-400 hover:text-green-300 transition duration-300 ease-in-out shadow-lg hover:shadow-pink-500/50" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/music" className="font-retro menu-item text-pink-400 hover:text-green-300 transition duration-300 ease-in-out shadow-lg hover:shadow-pink-500/50" onClick={() => setMenuOpen(false)}>Music</Link>
          <Link to="/contact" className="font-retro menu-item text-pink-400 hover:text-green-300 transition duration-300 ease-in-out shadow-lg hover:shadow-pink-500/50" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/resume" className="font-retro menu-item text-pink-400 hover:text-green-300 transition duration-300 ease-in-out shadow-lg hover:shadow-pink-500/50" onClick={() => setMenuOpen(false)}>Resume</Link>

          {/* ... other links */}
        </Menu>
      </div>
      <div className="logo">
        {/* Replace with your logo image */}
        <img src={LogoImage} alt="Logo" className="h-12 md:h-16 lg:h-20" />
      </div>

      <Link to="/contact" className="contact bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        Contact
      </Link>
    </header>
  );
};

export default Header;

