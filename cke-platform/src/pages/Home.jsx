import React from 'react';
import HeroSection from '../components/Home/Herosection/HeroSection';
import WhatWeDoSection from '../components/Home/WhatWeDoSection/WhatWeDoSection';
import HomeStatisticSection from '../components/Home/HomeStatistic/HomeStatisticSection';
import Verificatation from '../components/Home/Trusted/Trusted';


const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhatWeDoSection />
      <HomeStatisticSection />
      <Verificatation />
    </div>
  );
};

export default Home;
