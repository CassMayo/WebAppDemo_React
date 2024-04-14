import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {

    // Initialize the user state from localStorage
    const [userId, setUserId] = useState(() => {
      const persistedUser = localStorage.getItem('userId');
      return persistedUser ? persistedUser : null;
    });
  
    // Helper function to log the user in and persist to localStorage
    const logIn = (userId) => {
      setUserId(userId);
      localStorage.setItem('userId', userId);
    };
  
    // Helper function to log the user out and clear localStorage
    const logOut = () => {
      setUserId(null);
      localStorage.removeItem('userId');
    };
  
    return (
      <LoginContext.Provider value={{ userId, logIn, logOut }}>
        {children}
      </LoginContext.Provider>
    );
  };

export default LoginProvider;