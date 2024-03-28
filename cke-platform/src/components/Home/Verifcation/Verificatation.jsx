import React from 'react';
import './Verification.css';

const HomeStatisticSection = () => (
  <section className="statistic-section">
    <div className="statistic-content">
      <div className="statistics-container">
        <div className="statistic-card">
          <h2 className="statistic-number">234,806</h2>
          <p className="statistic-label">tonnes of CO2 removed</p>
        </div>
        <div className="statistic-card">
          <h2 className="statistic-number">442,392</h2>
          <p className="statistic-label">tonnes of CO2 retired</p>
        </div>
      </div>
      <div className="statistic-description">
        <h1>The world’s leading sustainable carbon credit trading platform</h1>
        <p>- In the current market, many companies striving for net zero emissions purchase carbon credits from projects claiming to remove CO2 with no real climate impact, due to the lack of available high-quality credits. Unethical production and double selling contribute to low quality, highlighting the need for transparency in the market.</p>
      </div>
    </div>
    <aside className="featured-in">
      <h3>Featured In</h3>
        <div className="featured-logos">
        <img src="/assets/Finansavisenlogo.png" alt="Finansavisen" />
        <img src="/assets/2560px-Business_Insider_Logo.svg.png" alt="Business Insider" />
        <img src="/assets/forbes-logo-white.png" alt="Forbes" />
        <img src="/assets/Kapital_hvit_2018.png" alt="Kapital" />
      </div>
    </aside>
  </section>
);

export default HomeStatisticSection;
