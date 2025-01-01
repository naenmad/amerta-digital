import '../index.css';

const Footer = () => {
  return (
    <footer className="bg-green-500 p-8 text-white">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019287509374!2d144.9630579153169!3d-37.8141079797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1b6b1b1b1b1!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1633072800000!5m2!1sen!2sau"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <p className="text-lg font-semibold">&copy; 2023 BUMD Amarta Digital. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">Privacy Policy</a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;