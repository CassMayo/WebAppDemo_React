import React, { useState, useEffect } from 'react';
import CompanyStatistics from '../CompanyStatistics/CompanyStatistics';
import useRoleBasedRedirect from '../../Hooks/useRoleBasedRedirect';
import './CompanyOverview.css';

const CompanyOverview = (props) => {


  return (
    <div className="company-overview-container">
      <h1>Company Overview</h1>
      <div className="company-overview-header">
        <div className="company-logo-placeholder">
          [Company Logo]
        </div>

        <div className="company-overview-info">
          <h1>{props.userInfo.userName}</h1>
          <p>{props.userInfo.location}</p>
        </div>

        <CompanyStatistics />
      </div>
      <div className="company-about">
        <h2>About</h2>
        <p>{props.userInfo.companyAbout}</p>
      </div>
    </div>
  );
};

export default CompanyOverview;
