import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full p-4 shadow-lg z-50 transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-8 w-8 mr-2" />
          <span className={`text-xl font-bold transition duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>Amarta Digital</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className={`transition duration-300 ${isScrolled ? 'text-black hover:text-green-500' : 'text-white hover:text-green-500'}`}>Home</Link>
          <Link to="/about" className={`transition duration-300 ${isScrolled ? 'text-black hover:text-green-500' : 'text-white hover:text-green-500'}`}>About</Link>
          <Link to="/contact" className={`transition duration-300 ${isScrolled ? 'text-black hover:text-green-500' : 'text-white hover:text-green-500'}`}>Contact</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className={`focus:outline-none transition duration-300 ${isScrolled ? 'text-black' : 'text-white'}`} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <Link to="/" className={`transition duration-300 ${isScrolled ? 'text-black hover:text-green-500' : 'text-white hover:text-green-500'}`}>Home</Link>
          <Link to="/about" className={`transition duration-300 ${isScrolled ? 'text-black hover:text-green-500' : 'text-white hover:text-green-500'}`}>About</Link>
          <Link to="/contact" className={`transition duration-300 ${isScrolled ? 'text-black hover:text-green-500' : 'text-white hover:text-green-500'}`}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;