import Hero from '../components/hero.tsx';
import Features from '../components/features.tsx';
import Testimonials from '../components/testimonials.tsx';
import Calltoaction from '../components/calltoaction.tsx';

function HomePage() {
    return (
        <div className="Home">
            <Hero />
            <Features />
            <Testimonials />
            <Calltoaction />
        </div>
    );
}

export default HomePage;