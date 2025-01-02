import HomeHero from '../components/hero/homeHero.tsx';
import Services from '../components/services.tsx';
import Testimonials from '../components/testimonials.tsx';
import Calltoaction from '../components/calltoaction.tsx';

function HomePage() {
    return (
        <div className="Home">
            <HomeHero />
            <Services />
            <Testimonials />
            <Calltoaction />
        </div>
    );
}

export default HomePage;