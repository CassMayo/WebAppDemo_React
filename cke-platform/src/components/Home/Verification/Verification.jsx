import React from 'react';
import './Verification.css'; 

const VerificationSection = () => (
  <section className="verification-section">
    <div className="verification-content">
      <h1>Carbon removal verification</h1>
      <p>All of Clear Karbon Exchange's carbon credits are thoroughly and independently verified by our third parties</p>
      <div className="verification-logos">
        <img src="/assets/Verified_Carbon_Standard.png" alt="Verified Carbon Standard" className="verified_carbon_logo" />
        <img src="/assets/Gold_Standard.png" alt="Gold Standard" className="gold_standard_logo" />
      </div>
    </div>
  </section>
);

export default VerificationSection;