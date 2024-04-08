import React, { useState } from 'react';
import CompanyOverview from '../components/Company/CompanyOverview/CompanyOverview';
import CurrentListing from '../components/Company/CurrentListing/CurrentListing';
import RegisterNewCredits from '../components/Company/RegisterCredit/RegisterCredit';
import FinancialOverview from '../components/Company/FinancialOverview/FinancialOverview';
import TabButton from '../components/Company/Common/TabButton';
import '../components/Company/CompanyPage.css';

const CompanyPage = () => {
    const [activeTab, setActiveTab] = useState('currentListings');
    const [listings, setListings] = useState([]);

    const addCredit = (newCredit) => {
        setListings(prevListings => [...prevListings, newCredit]);
    };

    return (
        <div className='company-page-container'>
            <CompanyOverview />
            <div className="tab-buttons">
                <TabButton isActive={activeTab === 'currentListings'} onClick={() => setActiveTab('currentListings')}>
                    Current Listings
                </TabButton>
                <TabButton isActive={activeTab === 'registerCredits'} onClick={() => setActiveTab('registerCredits')}>
                    Register New Credits
                </TabButton>
                <TabButton isActive={activeTab === 'financialOverview'} onClick={() => setActiveTab('financialOverview')}>
                    Financial Overview
                </TabButton>
            </div>
            <div className="page-content">
                {activeTab === 'currentListings' && <CurrentListing listings={listings} />}
                {activeTab === 'registerCredits' && <RegisterNewCredits onAddCredit={addCredit} />}
                {activeTab === 'financialOverview' && <FinancialOverview />}
            </div>
        </div>
    );
};

export default CompanyPage;
