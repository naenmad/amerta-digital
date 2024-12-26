import '../index.css';

const Testimonials = () => {
  return (
    <section className="bg-white p-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-green-500">What Our Clients Say</h2>
        <div className="flex justify-around">
          <div className="w-1/3 p-4 bg-gray-100 shadow-lg rounded-lg">
            <p>"Great service and support!"</p>
            <p className="mt-2 font-bold">- Client 1</p>
          </div>
          <div className="w-1/3 p-4 bg-gray-100 shadow-lg rounded-lg">
            <p>"Highly recommend their solutions."</p>
            <p className="mt-2 font-bold">- Client 2</p>
          </div>
          <div className="w-1/3 p-4 bg-gray-100 shadow-lg rounded-lg">
            <p>"Excellent experience overall."</p>
            <p className="mt-2 font-bold">- Client 3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;