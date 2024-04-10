import React from 'react';
import './StatisticsCard.css'; 

const StatisticsCard = ({ title, value }) => (
  <div className="statistics-card">
    <h3 className="statistics-card-title">{title}</h3>
    <p className="statistics-card-value">{value}</p>
  </div>
);

export default StatisticsCard;
