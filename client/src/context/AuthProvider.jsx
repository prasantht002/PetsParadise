import React, { createContext, useContext, useState, useEffect } from 'react';

// Create AuthContext
export const AuthContext = createContext();

// AuthProvider component
export default function AuthProvider({ children }) {
  // Get initial auth user from localStorage
  const initialAuthUser = localStorage.getItem("Users");

  // State for auth user
  const [authUser, setAuthUser] = useState(() => {
    try {
      return initialAuthUser ? JSON.parse(initialAuthUser) : undefined;
    } catch (error) {
      console.error("Error parsing stored user data:", error);
      return undefined;
    }
  });

  // Effect to update localStorage when authUser changes
  useEffect(() => {
    if (authUser) {
      localStorage.setItem("Users", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("Users");
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);
