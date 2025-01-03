const TermsOfServiceSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-500">Terms of Service</h2>
          <p className="text-gray-600 mt-4">Understand the terms and conditions of using our services.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-green-100">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Acceptance of Terms</h3>
            <p className="text-gray-700">
              By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </div>
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-green-100">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Modification of Terms</h3>
            <p className="text-gray-700">
              We reserve the right to modify these terms at any time. You should check this page regularly to take notice of any changes.
            </p>
          </div>
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-green-100">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">User Responsibilities</h3>
            <p className="text-gray-700">
              Users are responsible for maintaining the confidentiality of their account and password and for restricting access to their computer.
            </p>
          </div>
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-green-100">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h3>
            <p className="text-gray-700">
              If you have any questions about these Terms of Service, please contact us at:
              <br />
              Amarta Digital<br />
              Digital Street, Jakarta, Indonesia<br />
              Email: info@amartadigital.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfServiceSection;