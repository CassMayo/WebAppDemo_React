import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import StatisticsCard from '../StatisticsCard/StatisticsCard';
import './FinancialOverview.css';
import { BASE_API_URL } from '../../../config';

const FinancialOverview = ({ userInfo }) => {
    const [totalCredits, setTotalCredits] = useState(0);
    const [totalValue, setTotalValue] = useState(0);
    const [dataForChart, setDataForChart] = useState([]);

    const [listings, setListings] = useState([])


    // Get all listings owned by user. 
    useEffect(() => {
        const fetchData = async (userId) => {

            console.log("Fetching company listings")
            const response = await fetch(`${BASE_API_URL}/portfolio/filter/${userId}`)

            if (!response.ok) {
                const msg = `An error has occured: ${response.statusText}`
                console.error(msg)
                return
            }
            const listings = await response.json()

            if (!listings) {
                console.warn(`User with id: ${userId} not found`)
                return
            }
            setListings(listings)
        }
        fetchData(userInfo._id)


    }, []);

    useEffect(() => {
        const creditsPerMonth = listings.reduce((acc, listing, index) => {
            const monthIdentifier = `Month ${index + 1}`;
            acc[monthIdentifier] = (acc[monthIdentifier] || 0) + Number(listing.credits);
            return acc;
        }, {});
    
        const chartData = Object.entries(creditsPerMonth).map(([monthIdentifier, credits]) => ({
            name: monthIdentifier,
            Credits: credits
        })).sort((a, b) => a.name.localeCompare(b.name));
    
        setDataForChart(chartData);
    
        const totalCreditsCalculated = listings.reduce((acc, listing) => acc + Number(listing.credits), 0);
        const totalValueCalculated = listings.reduce((acc, listing) => acc + (Number(listing.credits) * Number(listing.price)), 0);
    
        setTotalCredits(totalCreditsCalculated);
        setTotalValue(totalValueCalculated);
    
    }, [listings]);
    

       
   
    return (
        <div className="financial-overview-container">
            <div className="statistics-cards-container">
                <StatisticsCard title="Total Credits in Portfolio" value={totalCredits} />
                <StatisticsCard title="Total Value of Portfolio" value={`$${totalValue.toFixed(2)}`} />
            </div>
            <div className="chart-container">
                <BarChart width={600} height={300} data={dataForChart}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Credits" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default FinancialOverview;