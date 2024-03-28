import StatisticCard from "./StatisticCard/StatisticCard";
import "./StatisticCardSection.css"

export default function StatisticCardSection(){
    return(
        <div className="statisticCardContainer">
        <StatisticCard title="Available projects" number="247"/>
        <StatisticCard title="Countries represented" number="133"/>
        <StatisticCard title="Tonnes of CO2 removed" number="423 861"/>
        </div>
    )
}