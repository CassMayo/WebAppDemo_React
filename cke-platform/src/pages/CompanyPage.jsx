import React, { useState, useEffect } from 'react';
import CompanyOverview from '../components/Company/CompanyOverview/CompanyOverview';
import CurrentListing from '../components/Company/CurrentListing/CurrentListing';
import RegisterNewCredits from '../components/Company/RegisterCredit/RegisterCredit';
import FinancialOverview from '../components/Company/FinancialOverview/FinancialOverview';
import TabButton from '../components/Company/Common/TabButton';
import '../components/Company/CompanyPage.css';
import { BASE_API_URL } from '../config';

const CompanyPage = () => {


    const [isEditingListing, setIsEditingListing] = useState(true)
    const [activeTab, setActiveTab] = useState('currentListings');
    const [userInfo, setUserInfo] = useState({
        userName: '',
        isSeller: true, // Seller OR Buyer
        logo: '',
        about: '',
        location: ''
    });

    // get user info from DB using userId stored in browser.
    useEffect(() => {
        const fetchUserInfo = async () => {


            const userInfoResponse = await fetch(`${BASE_API_URL}/users/${localStorage.getItem('userId')}`)

            if (!userInfoResponse.ok) {
                const msg = `An error has occured: ${userInfoResponse.statusText}`
                console.error(msg)
                return
            }
            const userInfo = await userInfoResponse.json()
            if (!userInfo) {
                console.warn(`User with id: ${id} not found`)
                navigate("/")
                return
            }
            setUserInfo(userInfo)
        }
        fetchUserInfo()
    }, []);

    const defaultListing = {
        title: '',
        price: '',
        credits: '',
        type: '',
        imageUrl: 'https://cataas.com/cat',
        imageAlt: '',
        location: '',
        description: '',
        ownerId: userInfo._id, // same id as logged in user so we can link up who owns what..
        ownerName: userInfo.userName
    }


    return (
        <div className='company-page-container'>

            <CompanyOverview userInfo={userInfo} />

            <div className="tab-buttons">
                <TabButton isActive={activeTab === 'currentListings'} onClick={() => setActiveTab('currentListings')}>
                    Your Listings
                </TabButton>
                <TabButton isActive={activeTab === 'registerCredits'} onClick={() => setActiveTab('registerCredits')}>
                    Register New Listing
                </TabButton>
                <TabButton isActive={activeTab === 'financialOverview'} onClick={() => setActiveTab('financialOverview')}>
                    Financial Overview
                </TabButton>
            </div>
            <div className="page-content">

                {activeTab === 'currentListings' && <CurrentListing setActiveTab={setActiveTab} setIsEditingListing={setIsEditingListing} isEditListing={isEditingListing} />}
                {activeTab === 'registerCredits' && <RegisterNewCredits listingStartState={defaultListing} setActiveTab={setActiveTab} isEditingListing={isEditingListing}/>}
                {activeTab === 'financialOverview' && <FinancialOverview userInfo={userInfo} />}
            </div>
        </div>
    );
};

export default CompanyPage;
