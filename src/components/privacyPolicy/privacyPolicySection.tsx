const PrivacyPolicySection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-500">Privacy Policy</h2>
          <p className="text-gray-600 mt-4">Learn about the information we collect and how we use it.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-green-100">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Information We Collect</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Personal Data</li>
              <li>Derivative Data</li>
              <li>Financial Data</li>
              <li>Data From Social Networks</li>
              <li>Mobile Device Data</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-green-100">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Use of Your Information</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Create and manage your account</li>
              <li>Process your transactions</li>
              <li>Send you a newsletter</li>
              <li>Request feedback</li>
              <li>Improve our services</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-green-100">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Disclosure of Your Information</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>By Law or to Protect Rights</li>
              <li>Third-Party Service Providers</li>
              <li>Business Transfers</li>
              <li>Affiliates</li>
              <li>Other Third Parties</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-green-100">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h3>
            <p className="text-gray-700">
              If you have questions or comments about this Privacy Policy, please contact us at:
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

export default PrivacyPolicySection;