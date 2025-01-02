import React from 'react';
import '../index.css';

const Mission = () => {
    return (
        <section className="bg-white p-8">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-green-500">Our Mission</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-gray-100 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-green-100">
                        <h3 className="text-xl font-bold mb-2 text-green-500">Digital Transformation</h3>
                        <p className="text-gray-700">To drive digital transformation and help our clients achieve their goals through cutting-edge solutions and expert guidance.</p>
                    </div>
                    <div className="p-6 bg-gray-100 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-green-100">
                        <h3 className="text-xl font-bold mb-2 text-green-500">Client Success</h3>
                        <p className="text-gray-700">To ensure our clients' success by providing innovative technology and exceptional service.</p>
                    </div>
                    <div className="p-6 bg-gray-100 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-green-100">
                        <h3 className="text-xl font-bold mb-2 text-green-500">Innovation</h3>
                        <p className="text-gray-700">To continuously innovate and stay ahead of industry trends to offer the best solutions to our clients.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;