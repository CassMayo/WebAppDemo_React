import React, { useState } from 'react';
import './UserPage.css';

const UserPage = () => {
  const initialPurchases = [
    {
      id: 1,
      creditIssuer: 'GreenCredits Co.',
      purchaseDate: '2022-04-22',
      creditAmount: 50,
      price: 10000,
      verifier: 'RAH',
    },
    {
      id: 2,
      creditIssuer: 'EcoSaver',
      purchaseDate: '2022-05-18',
      creditAmount: 500,
      price: 5000,
      verifier: 'RAH',
    },
    {
      id: 3,
      creditIssuer: 'GreenCredits Co.',
      purchaseDate: '2022-06-10',
      creditAmount: 100,
      price: 15000,
      verifier: 'RAH',
    },
    {
      id: 4,
      creditIssuer: 'GreenCredits Co.',
      purchaseDate: '2022-06-15',
      creditAmount: 200,
      price: 15000,
      verifier: 'RAH',
    },
    {
      id: 5,
      creditIssuer: 'EcoSaver',
      purchaseDate: '2022-06-20',
      creditAmount: 501,
      price: 5000,
      verifier: 'RAH',
    },
    {
      id: 6,
      creditIssuer: 'GreenCredits Co.',
      purchaseDate: '2022-07-01',
      creditAmount: 100,
      price: 1,
      verifier: 'RAH',
    },
  ];

  const [purchases, setPurchases] = useState(initialPurchases);
  const [filterBy, setFilterBy] = useState('purchaseDate');
  const [sortBy, setSortBy] = useState('asc');

  const handleFilterChange = (e) => {
    setFilterBy(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortPurchases = (a, b) => {
    const isAscending = sortBy === 'asc';
    if (a[filterBy] < b[filterBy]) {
      return isAscending ? -1 : 1;
    }
    if (a[filterBy] > b[filterBy]) {
      return isAscending ? 1 : -1;
    }
    return 0;
  };

  const filteredAndSortedPurchases = purchases.sort(sortPurchases);

  return (
    <div className="purchase-history">
      <h1>Purchase history</h1>
      <p>Here you have an overall view of your purchase history, details to each one, total tonnes offset and your costs.</p>
      <div className="totals">
        <div className="total-content">
          <span className='desc'>Total tonnes CO2 offset</span>
          <p  className='num'>342</p>
        </div>
        <div className="total-content">
          <span className='desc'>Total price</span>
          <p className='num'>$68.400</p>
        </div>
      </div>
      <div className="filter-sort">
        <select name="filter" id="filter" value={filterBy} onChange={handleFilterChange}>
          <option value="purchaseDate">Date</option>
          <option value="price">Total Price</option>
          <option value="creditAmount">Total Credit</option>
        </select>
        <select name="sort" id="sort" value={sortBy} onChange={handleSortChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className="purchase-list">
      {filteredAndSortedPurchases.map((purchase) => (
  <div className="purchase-card" key={purchase.id}>
    <div className="card-content">
      <div className="card-header">
        <span>{purchase.creditIssuer}, {purchase.purchaseDate}</span>
      </div>
      <div className="card-body">
        <div>Credit amount: {purchase.creditAmount}</div>
        <div>Price: {purchase.price}</div>
        <div>Verified by: {purchase.verifier}</div>
      </div>
    </div>
    <button className="more-btn">More </button>
  </div>
))}
      </div>
    </div>
  );
};

export default UserPage;
