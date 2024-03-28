import React from 'react';
import HeroSection from '../components/Herosection/HeroSection';
import WhatWeDoSection from '../components/WhatWeDoSection/WhatWeDoSection';
import HomeStatisticSection from '../components/HomeStatistic/HomeStatisticSection';


const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhatWeDoSection />
      <HomeStatisticSection />
    </div>
  );
};

export default Home;
