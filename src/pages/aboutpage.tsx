import AboutHero from "../components/hero/aboutHero.tsx";
import FounderMessage from "../components/founderMessage.tsx";
import Vision from "../components/vision.tsx";
import Mission from "../components/mission.tsx";

function AboutPage() {
    return (
        <div className="Home">
            <AboutHero />
            <Vision />
            <Mission />
        </div>
    );
}

export default AboutPage;