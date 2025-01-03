import React from 'react';
import TermsOfServiceHero from "../components/termsOfService/termsOfServiceHero.tsx";
import TermsOfServiceSection from "../components/termsOfService/termsOfServiceSection.tsx";

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="TermsOfService">
            <TermsOfServiceHero />
            <TermsOfServiceSection />
        </div>
    );
};

export default PrivacyPolicyPage;