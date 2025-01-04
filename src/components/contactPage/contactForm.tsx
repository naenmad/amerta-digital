import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let valid = true;
        let errors = { name: '', email: '', message: '' };

        if (name.trim() === '') {
            errors.name = 'Name is required';
            valid = false;
        }

        if (email.trim() === '') {
            errors.email = 'Email is required';
            valid = false;
        } else if (!validateEmail(email)) {
            errors.email = 'Email is not valid';
            valid = false;
        }

        if (message.trim() === '') {
            errors.message = 'Message is required';
            valid = false;
        }

        setErrors(errors);

        if (valid) {
            console.log('Form submitted:', { name, email, message });
            setSubmitted(true);
            setName('');
            setEmail('');
            setMessage('');
        }
    };

    const handleReset = () => {
        setName('');
        setEmail('');
        setMessage('');
        setErrors({ name: '', email: '', message: '' });
        setSubmitted(false);
    };

    return (
        <section className="bg-white p-8">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-green-500">Contact Form</h2>
                {submitted ? (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Success!</strong>
                        <span className="block sm:inline"> Your message has been sent.</span>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="p-6 bg-gray-100 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-green-100">
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                            {errors.name && <p className="text-red-500 text-xs italic mt-2">{errors.name}</p>}
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                            {errors.email && <p className="text-red-500 text-xs italic mt-2">{errors.email}</p>}
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                rows={5}
                                required
                            />
                            {errors.message && <p className="text-red-500 text-xs italic mt-2">{errors.message}</p>}
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
                            >
                                Send
                            </button>
                            <button
                                type="button"
                                onClick={handleReset}
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
};

export default ContactForm;