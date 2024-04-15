import React, { useState, useEffect } from 'react';
import EditCreditModal from '../EditCreditModal/EditCreditModal';
import './CurrentListing.css';
import RegisterNewCredits from '../RegisterCredit/RegisterCredit';
import { BASE_API_URL } from '../../../config';


const CurrentListing = ({ setActiveTab, isEditListing, setIsEditingListing }) => {
    const [listings, setListings] = useState([]);
    const [currentEditId, setCurrentEditId] = useState('');


    const startEditing = (id) => {
        setCurrentEditId(id)
        setIsEditingListing(true)
    }

    // Get all listings owned by user. 
    useEffect(() => {
        const fetchData = async (userId) => {

            const response = await fetch(`${BASE_API_URL}/portfolio/filter/${userId}`)

            if (!response.ok) {
                const msg = `An error has occured: ${response.statusText}`
                console.error(msg)
                return
            }
            const listings = await response.json()

            if (!listings) {
                console.warn(`User with id: ${userId} not found`)
                navigate("/")
                return
            }
            setListings(listings)
        }

        const userId = localStorage.getItem('userId')
        if (userId) {
            fetchData(userId)
        }

    }, []);


    async function handleDelete(id) {

        try {
            const response = await fetch(`${BASE_API_URL}/portfolio/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setListings(prevListings => prevListings.filter(listing => listing._id !== id)); // remove locally so component re-renders without the removed listing.
            } else {
                console.error('Failed to delete item.');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="current-listings-div">

            {isEditListing ?

                <div className='current-listings'>
                    <h1>Editing listing</h1>
                    <RegisterNewCredits listingStartState={listings.find(listing => listing._id == currentEditId)} />
                </div>

                :

                <div className='current-listings'>

                    <h1>Your Listings</h1>
                    {
                        (listings.length == 0)

                            ?

                            <div className='no-listings-div'>
                                <p> No listings to show</p>
                            </div>

                            :

                            listings.map(listing => (
                                <div key={listing._id} className="listing-item">
                                    <div className="listing-details">
                                        <p>Type of Credit: <span className="detail-value">{listing.type}</span></p>
                                        <p>Remaining Credits: <span className="detail-value">{listing.credits}</span></p>
                                        <p>Current price: <span className="detail-value">${listing.price}</span></p>
                                    </div>
                                    <div className="listing-actions">

                                        <button onClick={() => startEditing(listing._id)}>Edit</button>
                                        <button onClick={() => handleDelete(listing._id)}>Delete</button>

                                    </div>
                                </div>
                            ))
                    }



                    <button onClick={() => setActiveTab("registerCredits")}>  Add listing <i class="fa-solid fa-plus"></i> </button>
                </div>

            }
        </div>
    );
};
export default CurrentListing;
