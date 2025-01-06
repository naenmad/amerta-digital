import ServiceExplanation from '../components/servicePage/serviceExplanation.tsx';
import ServiceList from '../components/servicePage/serviceList.tsx';
import OtherDetails from '../components/servicePage/othersDetails.tsx';
import ServiceHero from "../components/servicePage/ServiceHero.tsx";
import Testimonials from "../components/homePage/testimonials.tsx";
import CallToAction from "../components/utils/calltoaction.tsx";
import FAQ from "../components/utils/FAQ.tsx";
import Team from '../components/servicePage/Team.tsx';
import Pricing from '../components/servicePage/Pricing.tsx';

function ServicePage() {
    return (
        <div className="ServicePage">
            <ServiceHero />
            <ServiceExplanation />
            <ServiceList />
            <OtherDetails />
            <Team />
            <Pricing />
            <Testimonials />
            <FAQ />
            <CallToAction />
        </div>
    );
}

export default ServicePage;