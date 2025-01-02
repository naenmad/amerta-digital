import WhatIs from '../components/whatIs.tsx';
import CallToAction from "../components/calltoaction.tsx";

function GetStartedPage() {
    return (
        <div className="Home">
            <WhatIs />
            <CallToAction />
        </div>
    );
}

export default GetStartedPage;