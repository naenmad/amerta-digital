import '../../index.css';

const Vision = () => {
    return (
        <section className="bg-white p-8">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-green-500">Our Vision</h2>
                <div className="p-6 bg-gray-100 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-green-100">
                    <p className="text-gray-700">
                        To be the leading digital solutions provider, empowering businesses with innovative technology and exceptional service.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Vision;