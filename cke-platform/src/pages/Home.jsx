import React from 'react';
import HeroSection from '../components/Home/Herosection/HeroSection';
import WhatWeDoSection from '../components/Home/WhatWeDoSection/WhatWeDoSection';
import HomeStatisticSection from '../components/Home/HomeStatistic/HomeStatisticSection';
import Trusted from '../components/Home/Trusted/Trusted';
import Verification from '../components/Home/Verification/Verification';


const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhatWeDoSection />
      <HomeStatisticSection />
      <Trusted />
      <Verification />
    </div>
  );
};

export default Home;
