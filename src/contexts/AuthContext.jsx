import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';  // Ensure this is the correct path to your Firebase config
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Add the logout function
  const logout = () => {
    return signOut(auth);
  };

  const value = {
    currentUser,
    logout, // Make sure to include logout in the context value
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
