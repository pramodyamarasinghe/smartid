import React, {createContext, useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create the context
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for the token when the app loads
    const checkAuthStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        if (token) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Failed to fetch the token:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  // Login function to save the token
  const login = async token => {
    try {
      await AsyncStorage.setItem('authToken', token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Failed to save the token:', error);
    }
  };

  // Logout function to remove the token
  const logout = async () => {
    try {
      await AsyncStorage.removeItem('authToken');
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Failed to remove the token:', error);
    }
  };

  // Loading screen while checking authentication
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <AuthContext.Provider value={{isAuthenticated, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

// Placeholder loading screen
const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
