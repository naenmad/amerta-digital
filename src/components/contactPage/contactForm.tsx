import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });

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
            // Handle form submission logic here
            console.log('Form submitted:', { name, email, message });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
                {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
                {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                </label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows={5}
                    required
                />
                {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
            </div>
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Send
                </button>
            </div>
        </form>
    );
};

export default ContactForm;