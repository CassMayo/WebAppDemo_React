import React, { createContext, useState } from 'react';

export const PurchaseContext = createContext();

export const PurchaseProvider = ({ children }) => {
  const [purchasedItem, setPurchasedItem] = useState([]);

  const addPurchasedItem = (item) => {
    setPurchasedItem([item]);
  };

  const clearPurchasedItem = () => {
    setPurchasedItem([]);
  };

  return (
    <PurchaseContext.Provider value={{ purchasedItem, addPurchasedItem, clearPurchasedItem }}>
      {children}
    </PurchaseContext.Provider>
  );
};