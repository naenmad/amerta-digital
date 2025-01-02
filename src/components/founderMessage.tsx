import React from 'react';
import founderImage from '../assets/founder.png'; // Make sure to replace this with the actual path to the founder's image
import '../index.css';

const FounderMessage = () => {
    return (
        <section className="bg-white p-8">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-green-500">Founder Message</h2>
                <div className="p-6 bg-gray-100 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-green-100">
                    <img src={founderImage} alt="Founder" className="mb-4 rounded-full h-32 w-32 object-cover mx-auto border-4 border-green-500" />
                    <h3 className="text-xl font-bold mb-2 text-green-500">Ahmad Zulkarnaen</h3>
                    <p className="text-lg mb-6">Founder & CEO of Amarta Digital</p>
                    <p className="text-gray-700">
                        Welcome to Amarta Digital! Our mission is to drive digital transformation and help our clients achieve their goals through cutting-edge solutions and expert guidance.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FounderMessage;