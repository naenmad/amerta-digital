import logo from '../assets/logo.png';
import '../index.css';

const Hero = () => {
    return (
        <section className="hero-section min-h-screen flex flex-col justify-center items-center text-white p-8 text-center">
            <img src={logo} alt="Amerta Digital Logo" className="mb-4 h-20 w-20" />
            <h1 className="text-white text-4xl font-bold mb-4">Welcome to Amarta Digital</h1>
            <p className="text-white text-lg mb-6">We provide the best digital solutions for your business.</p>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary hover:text-white">Get Started</button>
        </section>
    );
};

export default Hero;