import WhatIs from '../components/getStarted/whatIs.tsx';
import CallToAction from "../components/utils/calltoaction.tsx";

function GetStartedPage() {
    return (
        <div className="GetStarted">
            <WhatIs />
            <CallToAction />
        </div>
    );
}

export default GetStartedPage;