import '../index.css';

const Features = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-green-500">Our Features</h2>
        <div className="flex justify-around">
          <div className="w-1/3 p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-green-500">Feature 1</h3>
            <p>Detail about feature 1.</p>
          </div>
          <div className="w-1/3 p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-green-500">Feature 2</h3>
            <p>Detail about feature 2.</p>
          </div>
          <div className="w-1/3 p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-green-500">Feature 3</h3>
            <p>Detail about feature 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;