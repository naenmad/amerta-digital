import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent p-4 shadow-lg backdrop-filter backdrop-blur-lg z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold text-white">Amerta Digital</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="text-white hover:text-green-500">
            Home
          </a>
          <a href="#about" className="text-white hover:text-green-500">
            About
          </a>
          <a href="#contact" className="text-white hover:text-green-500">
            Contact
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <a href="#home" className="text-white hover:text-green-500">
            Home
          </a>
          <a href="#about" className="text-white hover:text-green-500">
            About
          </a>
          <a href="#contact" className="text-white hover:text-green-500">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;