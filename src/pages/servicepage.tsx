import ServiceExplanation from '../components/servicePage/serviceExplanation.tsx';
import ServiceList from '../components/servicePage/serviceList.tsx';
import OtherDetails from '../components/servicePage/othersDetails.tsx';
import ServiceHero from "../components/servicePage/ServiceHero.tsx";
import Testimonials from "../components/homePage/testimonials.tsx";
import CallToAction from "../components/utils/calltoaction.tsx";
import FAQ from "../components/utils/FAQ.tsx";

function ServicePage() {
    return (
        <div className="ServicePage">
            <ServiceHero />
            <ServiceExplanation />
            <ServiceList />
            <OtherDetails />
            <Testimonials />
            <FAQ />
            <CallToAction />
        </div>
    );
}

export default ServicePage;