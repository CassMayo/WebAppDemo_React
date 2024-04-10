import React, { useState, useEffect } from 'react';
import CompanyStatistics from '../CompanyStatistics/CompanyStatistics';
import useRoleBasedRedirect from '../../Hooks/useRoleBasedRedirect';
import './CompanyOverview.css';

const CompanyOverview = () => {
  const [companyInfo, setCompanyInfo] = useState({
    companyName: '',
    companyLocation: '',
    companyAbout: ''
  });

  useRoleBasedRedirect(['provider']);

  useEffect(() => {
    const storedCompanyInfo = localStorage.getItem('companyInfo');
    if (storedCompanyInfo) {
      setCompanyInfo(JSON.parse(storedCompanyInfo));
    }
  }, []);

  return (
    <div className="company-overview-container">
      <h1>Company Overview</h1>
      <div className="company-overview-header">
        <div className="company-logo-placeholder">
          [Company Logo]
        </div>
        <div className="company-overview-info">
          <h1>{companyInfo.companyName}</h1>
          <p>{companyInfo.companyLocation}</p>
        </div>
        <CompanyStatistics />
      </div>
      <div className="company-about">
        <h2>About</h2>
        <p>{companyInfo.companyAbout}</p>
      </div>
    </div>
  );
};

export default CompanyOverview;
