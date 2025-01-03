import HomeHero from '../components/homePage/homeHero.tsx';
import Services from '../components/homePage/services.tsx';
import Testimonials from '../components/homePage/testimonials.tsx';
import Calltoaction from '../components/utils/calltoaction.tsx';

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