import React, { useState, useEffect } from 'react';
import CompanyOverview from '../components/Company/CompanyOverview/CompanyOverview';
import CurrentListing from '../components/Company/CurrentListing/CurrentListing';
import RegisterNewCredits from '../components/Company/RegisterCredit/RegisterCredit';
import FinancialOverview from '../components/Company/FinancialOverview/FinancialOverview';
import TabButton from '../components/Company/Common/TabButton';
import '../components/Company/CompanyPage.css';

const CompanyPage = () => {
    const [activeTab, setActiveTab] = useState('currentListings');
    const [listings, setListings] = useState(() => {
        const savedListings = localStorage.getItem('listings');
        return savedListings ? JSON.parse(savedListings) : [];
    });

    useEffect(() => {
        localStorage.setItem('listings', JSON.stringify(listings));
    }, [listings]);

    const addCredit = (newCredit) => {
        const currentCredits = JSON.parse(localStorage.getItem('listings')) || [];
        const lastId = currentCredits.length ? currentCredits[currentCredits.length - 1].id + 1 : 11; // Start IDs from 11
    
        const newListing = {
            ...newCredit,
            id: lastId,
            date: new Date().toISOString()
        };
    
        const updatedListings = [...currentCredits, newListing];
        localStorage.setItem('listings', JSON.stringify(updatedListings));
        setListings(updatedListings);
    };
    
    const handleEditListing = (index, updatedCredit) => {
        const newListings = listings.map((item, i) =>
            i === index ? {
                ...item,
                numberOfCredits: updatedCredit.numberOfCredits,
                pricePerCredit: updatedCredit.pricePerCredit,
                remainingValue: updatedCredit.numberOfCredits * updatedCredit.pricePerCredit
            } : item
        );
        setListings(newListings);
    };
    

    const handleDeleteCredit = (index) => {
        const updatedListings = listings.filter((_, i) => i !== index);
        setListings(updatedListings);
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
                {activeTab === 'currentListings' && <CurrentListing listings={listings} onEdit={handleEditListing} onDelete={handleDeleteCredit} />}
                {activeTab === 'registerCredits' && <RegisterNewCredits onAddCredit={addCredit} setActiveTab={setActiveTab} />}
                {activeTab === 'financialOverview' && <FinancialOverview listings={listings} />}
            </div>
        </div>
    );
};

export default CompanyPage;
