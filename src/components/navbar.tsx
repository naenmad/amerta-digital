import DesktopNavbar from './desktop/desktopNavbar.tsx';
import MobileNavbar from './mobile/mobileNavbar.tsx';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent p-4 shadow-lg backdrop-filter backdrop-blur-lg z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <DesktopNavbar />
        <MobileNavbar />
      </div>
    </nav>
  );
};

export default Navbar;