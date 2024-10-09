import React from 'react';
import './HomeStatisticSection.css';

const HomeStatisticSection = () => (
  <section className="statistic-section">
    <div className="statistic-content">
      <article className="statistics-container">
        <section className="statistic-card">
          <h3 className="statistic-number">234,806</h3>
          <p className="statistic-label">tonnes of CO2 removed</p>
        </section>
        <section className="statistic-card">
          <h3 className="statistic-number">442,392</h3>
          <p className="statistic-label">tonnes of CO2 retired</p>
        </section>
      </article>
      <article className="statistic-description">
        <h2>The world’s leading sustainable carbon credit trading platform</h2>
        <p>
          In the current market, many companies striving for net zero emissions purchase carbon credits from projects claiming to remove CO2 with no real climate impact, due to the lack of available high-quality credits. Unethical production and double selling contribute to low quality, highlighting the need for transparency in the market.
        </p>
      </article>
    </div>
    <aside className="featured-in">
      <h2>Featured In</h2>
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
