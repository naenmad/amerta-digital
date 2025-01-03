import '../../index.css';

const Services = () => {
  return (
    <section className="bg-white p-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-green-500">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-green-100">
            <h3 className="text-xl font-bold mb-2 text-green-500">Consulting</h3>
            <p className="text-gray-700">We provide expert consulting services to help you navigate complex business challenges and achieve your goals.</p>
          </div>
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-green-100">
            <h3 className="text-xl font-bold mb-2 text-green-500">Development</h3>
            <p className="text-gray-700">Our development team delivers high-quality software solutions tailored to your specific needs.</p>
          </div>
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-green-100">
            <h3 className="text-xl font-bold mb-2 text-green-500">Support</h3>
            <p className="text-gray-700">We offer comprehensive support services to ensure your systems run smoothly and efficiently.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;