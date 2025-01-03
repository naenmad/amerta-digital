import '../../index.css';
import founderImage from "../../assets/founder.png";

const AboutHero = () => {
    return (
        <section className="background min-h-screen flex flex-col justify-center items-center text-white p-8 text-center bg-cover bg-center">
            <div>
                <img src={founderImage} alt="Founder"
                     className="mb-4 rounded-full h-32 w-32 object-cover mx-auto border-4 border-transparent"/>
                <h2 className="text-3xl font-bold mb-2">Ahmad Zulkarnaen</h2>
                <p className="text-primary text-lg mb-6">Founder & CEO of Amarta Digital</p>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                    Welcome to Amarta Digital! Our mission is to drive digital transformation and help our clients
                    achieve their goals through cutting-edge solutions and expert guidance.
                </p>
            </div>
        </section>
    );
};

export default AboutHero;