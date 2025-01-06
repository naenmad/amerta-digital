  import '../../index.css';
  import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

  const Footer = () => {
    return (
      <footer className="bg-green-500 p-8 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy-policy" className="text-gray-300 hover:text-white transition duration-300">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms-of-service" className="text-gray-300 hover:text-white transition duration-300">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="flex justify-center md:justify-start space-x-6 mt-4">
                <a href="https://facebook.com" className="text-gray-300 hover:text-white transition duration-300">
                  <FaFacebook size={24} className="hover:text-blue-500" />
                </a>
                <a href="https://twitter.com" className="text-gray-300 hover:text-white transition duration-300">
                  <FaTwitter size={24} className="hover:text-blue-400" />
                </a>
                <a href="https://instagram.com" className="text-gray-300 hover:text-white transition duration-300">
                  <FaInstagram size={24} className="hover:text-pink-500" />
                </a>
                <a href="https://linkedin.com" className="text-gray-300 hover:text-white transition duration-300">
                  <FaLinkedin size={24} className="hover:text-blue-700" />
                </a>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Our Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019287509374!2d144.9630579153169!3d-37.8141079797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1b6b1b1b1b1!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1633072800000!5m2!1sen!2sau"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg shadow-lg"
                title="Google Maps"
              ></iframe>
              <p className="mt-4">Digital Street, Jakarta, Indonesia</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg font-semibold">&copy; 2025 Amarta Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;