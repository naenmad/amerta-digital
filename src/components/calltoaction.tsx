import '../index.css';

const CallToAction = () => {
  return (
    <section className="bg-green-500 text-white p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
      <p className="text-lg mb-6">Contact us today to learn more about our services.</p>
      <button className="bg-white text-green-500 px-4 py-2 rounded hover:bg-green-600 hover:text-white">Contact Us</button>
    </section>
  );
};

export default CallToAction;