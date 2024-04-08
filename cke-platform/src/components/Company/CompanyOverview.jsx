import React, { useState, useEffect } from 'react';
import useRoleBasedRedirect from '../Hooks/useRoleBasedRedirect';
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
      <div className="company-overview-header">
        <div className="company-logo-placeholder">
          [Company Logo]
        </div>
        <div className="company-overview-info">
          <h1>{companyInfo.companyName}</h1>
          <p>{companyInfo.companyLocation}</p>
          <p>{companyInfo.companyAbout}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
