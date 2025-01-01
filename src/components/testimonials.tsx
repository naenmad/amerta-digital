import '../index.css';
import Person1 from '../assets/person1.jpg';
import Person2 from '../assets/person2.jpg';
import Person3 from '../assets/person3.jpg';

const Testimonials = () => {
  return (
    <section className="bg-white p-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-green-500">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-green-100">
            <img src={Person1} alt="Ahmad" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-500" />
            <p className="italic text-gray-700">"Great service and support!"</p>
            <p className="mt-2 font-bold text-green-500">- Ahmad</p>
          </div>
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-green-100">
            <img src={Person2} alt="Zulkarnaen" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-500" />
            <p className="italic text-gray-700">"Highly recommend their solutions."</p>
            <p className="mt-2 font-bold text-green-500">- Zulkarnaen</p>
          </div>
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-green-100">
            <img src={Person3} alt="Madnaen" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-500" />
            <p className="italic text-gray-700">"Excellent experience overall."</p>
            <p className="mt-2 font-bold text-green-500">- Madnaen</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;