import { useEffect, useState, useCallback } from "react";
import StatisticCard from "./StatisticCard/StatisticCard";
import "./StatisticCardSection.css"

export default function StatisticCardSection(){

    const [tons, setTons] = useState(423861)

    const incrementCounter = useCallback((amount) => {
        setTons((prevTons) => prevTons + amount);
      }, []);
    
      useEffect(() => {
        incrementCounter(1);
    
        const intervalId = setInterval(() => {
          incrementCounter(1);
        }, 4000);
        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
      }, [incrementCounter]);
  


    return(
        <div className="statisticCardContainer">
        <StatisticCard title="Available projects" number="247"/>
        <StatisticCard title="Countries represented" number="133"/>
        <StatisticCard title="Tons of CO2 removed" number={tons}/>
        </div>
    )
}