const ContactHero = () => {
    return (
        <section className="background min-h-screen flex flex-col justify-center items-center text-white p-8 text-center bg-cover bg-center">
            <div className="bg-black bg-opacity-50 p-8 rounded-lg w-full max-w-lg">
                <h2 className="text-5xl font-bold mb-4">Contact Us</h2>
                <form className="w-full">
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="w-full px-3 py-2 text-black leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 text-black leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="w-full px-3 py-2 text-black leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            placeholder="Your Message"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactHero;