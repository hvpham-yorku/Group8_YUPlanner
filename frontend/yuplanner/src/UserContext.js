import React, { createContext, useState, useContext } from 'react';

// Create the Context
const UserContext = createContext();

// Create a Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initial state for user data

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};