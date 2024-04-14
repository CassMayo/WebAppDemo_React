import React from 'react';
import './CompanyStatistics.css';

const CompanyStatistics = ({ stats }) => {
  const statistics = stats || [
    { label: 'Tons of CO2 offset', value: 1000 },
    { label: 'Tons of CO2 offset', value: 2000 },
  ];

  return (
    
    <div className="company-statistics-container">
      {statistics.map((stat, index) => (
        <div key={index} className="statistic">
          <p className='label'>{stat.label}</p>
          <h3 className='value'>{stat.value}</h3>
        </div>
      ))}
    </div>
  );
};

export default CompanyStatistics;
