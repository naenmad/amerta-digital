import '../index.css';

const Footer = () => {
  return (
    <footer className="bg-green-500 p-4 text-white">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 BUMD Amarta Digital. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
          <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
          <a href="#" className="text-gray-300 hover:text-white">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;