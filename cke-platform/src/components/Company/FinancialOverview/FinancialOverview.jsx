import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './FinancialOverview.css';

const FinancialOverview = () => {
  // Sample data for the graph
  const data = [
    { name: 'May', revenue: 4000, credits: 2400 },
    { name: 'June', revenue: 3000, credits: 1398 },
    // ...other months
  ];

  // You would get these stats from your state or props instead
  const stats = {
    totalCredits: 1000,
    totalValue: 50000,
    totalRevenueYear: 10000,
    totalRevenueMonth: 2000,
    averageRevenue: 1500,
  };

  return (
    <div className="financial-overview-container">
      <div className="stats-container">
        <div className="stat-item">Total Credits in Portfolio: {stats.totalCredits}</div>
        <div className="stat-item">Total Value of Portfolio: ${stats.totalValue}</div>
        <div className="stat-item">Total Revenue this Year: ${stats.totalRevenueYear}</div>
        <div className="stat-item">Total Revenue this Month: ${stats.totalRevenueMonth}</div>
        <div className="stat-item">Average per Month: ${stats.averageRevenue}</div>
      </div>
      <div className="chart-container">
        <h2>Finans - Graf</h2>
        <BarChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#8884d8" />
          <Bar dataKey="credits" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default FinancialOverview;
