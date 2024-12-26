import logo from '../../assets/logo.png';

const DesktopNavbar = () => {
  return (
    <div className="hidden md:flex items-center w-full">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-10 mr-3" />
        <span className="text-primary text-2xl font-bold">BUMD Amarta Digital</span>
      </div>
      <div className="ml-auto flex space-x-6">
        <a href="#" className="text-primary hover:text-primary text-lg">Home</a>
        <a href="#" className="text-primary hover:text-primary text-lg">Profile</a>
        <a href="#" className="text-primary hover:text-primary text-lg">Career</a>
        <a href="#" className="text-primary hover:text-primary text-lg">Contact</a>
      </div>
    </div>
  );
};

export default DesktopNavbar;