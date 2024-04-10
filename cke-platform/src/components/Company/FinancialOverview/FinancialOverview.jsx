import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import StatisticsCard from '../StatisticsCard/StatisticsCard';
import './FinancialOverview.css';

const FinancialOverview = ({ listings }) => {
  const totalCredits = listings.reduce((acc, credit) => acc + Number(credit.numberOfCredits), 0);
  const totalValue = listings.reduce((acc, credit) => acc + credit.remainingValue, 0);

  const creditsPerMonth = listings.reduce((acc, credit) => {
    const date = new Date(credit.date);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const yearMonth = `${date.getFullYear()}-${month}`;
    acc[yearMonth] = (acc[yearMonth] || 0) + credit.numberOfCredits;
    return acc;
  }, {});
  const dataForChart = Object.entries(creditsPerMonth).map(([yearMonth, credits]) => ({
    name: yearMonth,
    Credits: credits,
  })).sort((a, b) => a.name.localeCompare(b.name));  

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
