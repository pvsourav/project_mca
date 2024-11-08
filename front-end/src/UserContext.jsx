// UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);  // Add loading state

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/profile', {
          withCredentials: true,
        });
        setUserData(response.data[0]);
        setLoading(false);  // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setLoading(false);  // Set loading to false even in case of error
      }
    };

    fetchProfileData();
  }, []);

  return (
    <UserContext.Provider value={{ userData, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const userInstance = () => useContext(UserContext);
