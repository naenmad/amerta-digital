import React from 'react';
import PrivacyPolicyHero from '../components/privacyPolicy/privacyPolicyHero.tsx';
import PrivacyPolicySection from '../components/privacyPolicy/privacyPolicySection.tsx';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="PrivacyPolicy">
      <PrivacyPolicyHero />
        <PrivacyPolicySection />
    </div>
  );
};

export default PrivacyPolicyPage;