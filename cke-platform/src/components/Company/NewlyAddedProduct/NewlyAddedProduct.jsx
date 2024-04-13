import React, { useEffect, useState } from 'react';
import ProductCard from '../../Portfolio/CardsContentSection/ProductCard.jsx/ProductCard';

export default function NewlyAddedProductCard() {
    const [newProducts, setNewProducts] = useState([]);

    useEffect(() => {
        const storedListings = localStorage.getItem('listings');
        const companyData = JSON.parse(localStorage.getItem('companyInfo')) || {};

        if (storedListings) {
            const listings = JSON.parse(storedListings);
            const productDataArray = listings.map(listing => ({
                title: companyData.companyName || 'Default Company Name',
                type: listing.typeOfCredits,
                image: listing.image || 'https://picsum.photos/301/475',
                credits: listing.numberOfCredits,
                price: listing.pricePerCredit,
                location: companyData.companyLocation || 'Default Location',
                description: companyData.companyAbout || 'No description available.',
                id: listing.id  // Ensure id is used from listing
            }));
        
            setNewProducts(productDataArray);
        }
    }, []);

    if (!newProducts.length) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {newProducts.map(product => (
                <ProductCard key={product.id} {...product} />
            ))}
        </>
    );
}
