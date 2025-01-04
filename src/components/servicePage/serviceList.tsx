const ServiceList = () => {
    const services = [
        { id: 1, title: 'Web Development', description: 'Building responsive and high-quality websites.' },
        { id: 2, title: 'Digital Marketing', description: 'Promoting your business through digital channels.' },
        { id: 3, title: 'SEO Optimization', description: 'Improving your website\'s visibility on search engines.' },
        // Add more services as needed
    ];

    return (
        <section className="bg-gray-100 p-8">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-green-500 text-center">Services We Provide</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map(service => (
                        <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceList;