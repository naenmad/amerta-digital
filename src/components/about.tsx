import '../index.css';

const About = () => {
    return (
        <section className="background min-h-screen flex flex-col justify-center items-center text-white p-8 text-center bg-cover bg-center">
            <div className="bg-black bg-opacity-50 p-8 rounded-lg">
                <h2 className="text-5xl font-bold mb-4">About Us</h2>
                <p className="mb-4 text-lg">
                    We are a company dedicated to providing the best services to our customers. Our team is composed of highly skilled professionals who are passionate about their work.
                </p>
                <p className="mb-4 text-lg">
                    Our mission is to deliver high-quality products that meet the needs of our clients. We believe in continuous improvement and strive to exceed expectations in everything we do.
                </p>
                <p className="mb-4 text-lg">
                    Thank you for choosing our company. We look forward to working with you and helping you achieve your goals.
                </p>
            </div>
        </section>
    );
};

export default About;