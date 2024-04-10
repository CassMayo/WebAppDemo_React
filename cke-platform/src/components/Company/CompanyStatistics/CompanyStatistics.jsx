import React from 'react';
import './CompanyStatistics.css';

const CompanyStatistics = ({ stats }) => {
  const statistics = stats || [
    { label: 'Tonnes of CO2 offset', value: 1000 },
    { label: 'Tonnes of CO2 offset', value: 2000 },
    { label: 'Tonnes of CO2 offset', value: 3000 }
  ];

  return (
    
    <div className="company-statistics-container">
      {statistics.map((stat, index) => (
        <div key={index} className="statistic">
          <p>{stat.label}</p>
          <h3>{stat.value}</h3>
        </div>
      ))}
    </div>
  );
};

export default CompanyStatistics;
