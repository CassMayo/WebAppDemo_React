import React from 'react';
import HeroSection from '../components/Home/Herosection/HeroSection';
import WhatWeDoSection from '../components/Home/WhatWeDoSection/WhatWeDoSection';
import HomeStatisticSection from '../components/Home/HomeStatistic/HomeStatisticSection';


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
