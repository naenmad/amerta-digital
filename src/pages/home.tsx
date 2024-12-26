import Navbar from '../components/navbar.tsx';
import Footer from '../components/footer.tsx';
import Hero from '../components/hero.tsx';
import Features from '../components/features.tsx';
import Testimonials from '../components/testimonials.tsx';
import Calltoaction from '../components/calltoaction.tsx';

function Home() {
    return (
        <div className="Home">
            <Navbar />
            <Hero />
            <Features />
            <Testimonials />
            <Calltoaction />
            <Footer />
        </div>
    );
}

export default Home;