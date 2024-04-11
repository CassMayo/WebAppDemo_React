import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import StatisticsCard from '../StatisticsCard/StatisticsCard';
import './FinancialOverview.css';

const FinancialOverview = ({ listings }) => {
    const [totalCredits, setTotalCredits] = useState(0);
    const [totalValue, setTotalValue] = useState(0);
    const [dataForChart, setDataForChart] = useState([]);

    useEffect(() => {
        const totalCreditsCalculated = listings.reduce((acc, credit) => acc + Number(credit.numberOfCredits), 0);
        const totalValueCalculated = listings.reduce((acc, credit) => acc + (credit.numberOfCredits * credit.pricePerCredit), 0);

        setTotalCredits(totalCreditsCalculated);
        setTotalValue(totalValueCalculated);

        const creditsPerMonth = listings.reduce((acc, credit) => {
            const date = new Date(credit.date);
            if (!isNaN(date.getTime())) {
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const yearMonth = `${date.getFullYear()}-${month}`;
                acc[yearMonth] = (acc[yearMonth] || 0) + Number(credit.numberOfCredits);
            }
            return acc;
        }, {});

        const chartData = Object.entries(creditsPerMonth).map(([yearMonth, credits]) => ({
            name: yearMonth,
            Credits: credits,
        })).sort((a, b) => a.name.localeCompare(b.name));

        setDataForChart(chartData);
    }, [listings]);

    return (
        <div className="financial-overview-container">
            <div className="statistics-cards-container">
                <StatisticsCard title="Total Credits in Portfolio" value={totalCredits} />
                <StatisticsCard title="Total Value of Portfolio" value={`$${totalValue.toFixed(2)}`} />
            </div>
            <div className="chart-container">
                <BarChart width={600} height={300} data={dataForChart}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Credits" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default FinancialOverview;
