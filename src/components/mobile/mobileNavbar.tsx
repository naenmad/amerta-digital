import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import logo from '../../assets/logo.png';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden w-full">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10 mr-3" />
          <span className="text-primary text-2xl font-bold">BUMD Amarta Digital</span>
        </div>
        <button onClick={toggleMenu} className="text-primary focus:outline-none">
          {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col items-center space-y-4 mt-4">
          <a href="#" className="text-primary hover:text-primary text-lg">Home</a>
          <a href="#" className="text-primary hover:text-primary text-lg">Profile</a>
          <a href="#" className="text-primary hover:text-primary text-lg">Career</a>
          <a href="#" className="text-primary hover:text-primary text-lg">Contact</a>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;