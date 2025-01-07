// src/components/servicePage/Pricing.tsx
const Pricing = () => {
    const pricingPlans = [
        {
            id: 1,
            title: 'Basic Plan',
            price: '$99/month',
            description: 'Ideal for small businesses and startups.',
            features: ['Feature 1', 'Feature 2', 'Feature 3']
        },
        {
            id: 2,
            title: 'Standard Plan',
            price: '$199/month',
            description: 'Perfect for growing businesses.',
            features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
        },
        {
            id: 3,
            title: 'Premium Plan',
            price: '$299/month',
            description: 'Best for large enterprises.',
            features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']
        },
    ];

    return (
        <section className="bg-gray-100 p-8">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-green-500">Pricing Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map(plan => (
                        <div key={plan.id} className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
                            <p className="text-2xl font-bold mb-4">{plan.price}</p>
                            <p className="mb-4">{plan.description}</p>
                            <ul className="space-y-2 mb-4">
                                {plan.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
                                Select Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;