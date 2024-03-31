import CardsContentSection from "../components/Portfolio/CardsContentSection/CardsContentSection";
import StatisticCardSection from "../components/Portfolio/StatisticCardSection/StatisticCardSection";
import "../components/Portfolio/Portfolio.css";

export default function Portfolio() {
    
    return (
        <div className="portfolio-body">
            <div className="portfolio-content">
                <StatisticCardSection />
                <CardsContentSection />
            </div>
        </div>
    )
}