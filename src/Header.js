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
          <Link to="/" className="menu-item" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="menu-item" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/projects" className="menu-item" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/music" className="menu-item" onClick={() => setMenuOpen(false)}>Music</Link>
          <Link to="/contact" className="menu-item" onClick={() => setMenuOpen(false)}>Contact</Link>
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

