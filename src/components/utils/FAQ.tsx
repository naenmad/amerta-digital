const FAQ = () => {
    const faqs = [
        { id: 1, question: 'What services do you offer?', answer: 'We offer web development, digital marketing, SEO optimization, and more.' },
        { id: 2, question: 'How can I contact you?', answer: 'You can contact us through our contact form or by calling our office.' },
        { id: 3, question: 'What is your pricing?', answer: 'Our pricing depends on the services you require. Please contact us for a detailed quote.' },
    ];

    return (
        <section className="bg-white p-8">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-green-500 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map(faq => (
                        <div key={faq.id} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;