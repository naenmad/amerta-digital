import AboutHero from "../components/aboutPage/aboutHero.tsx";
import Vision from "../components/aboutPage/vision.tsx";
import Mission from "../components/aboutPage/mission.tsx";

function AboutPage() {
    return (
        <div className="About">
            <AboutHero />
            <Vision />
            <Mission />
        </div>
    );
}

export default AboutPage;