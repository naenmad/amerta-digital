import '../index.css';

const Features = () => {
  return (
    <section className="bg-white p-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-green-500">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-green-100">
            <h3 className="text-xl font-bold mb-2 text-green-500">High Performance</h3>
            <p className="text-gray-700">Our platform is optimized for high performance, ensuring fast load times and smooth user experiences.</p>
          </div>
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-green-100">
            <h3 className="text-xl font-bold mb-2 text-green-500">Scalability</h3>
            <p className="text-gray-700">Easily scale your applications to handle increased traffic and growing user bases without compromising performance.</p>
          </div>
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-green-100">
            <h3 className="text-xl font-bold mb-2 text-green-500">Security</h3>
            <p className="text-gray-700">We prioritize security to protect your data and ensure your applications are safe from threats.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;