import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import md5 from 'js-md5';

// Define the types for the AuthContext
interface AuthContextType {
  isAuthenticated: boolean;
  loginValidate: (inputToken: string) => Promise<void>;
  logout: () => Promise<void>;
  setOtp: (data: OtpData) => Promise<void>;
  getAuth: () => Promise<{ studentId: string | undefined; authToken: string | null }>;
}

interface OtpData {
  hashed_token: string;
  student_id: string;
}

// Create the context
export const AuthContext = createContext<AuthContextType | null>(null);

// Define the props for AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

// AuthProvider component
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [hashedToken, setHashedToken] = useState<string | undefined>();
  const [studentId, setStudentId] = useState<string | undefined>();

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
  const loginValidate = async (inputToken: string): Promise<void> => {

    console.log(hashedToken);
    console.log(md5(inputToken));
    try {
      if (md5(inputToken) === hashedToken) {
        await AsyncStorage.setItem('authToken', inputToken);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Failed to save the token:', error);
    }
  };

  // Logout function to remove the token
  const logout = async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem('authToken');
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Failed to remove the token:', error);
    }
  };

  // Function to set OTP details
  const setOtp = async (data: OtpData): Promise<void> => {
    try {
      setHashedToken(data.hashed_token);
      setStudentId(data.student_id);
    } catch (error) {
      console.error('Failed to set OTP:', error);
    }
  };

  // Function to get studentId and authToken
  const getAuth = async (): Promise<{ studentId: string | undefined; authToken: string | null }> => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      return {
        studentId,
        authToken: token,
      };
    } catch (error) {
      console.error('Failed to get auth details:', error);
      return { studentId: undefined, authToken: null }; // Return default values in case of an error
    }
  };

  // Loading screen while checking authentication
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loginValidate, logout, setOtp, getAuth }}
    >
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

// Define styles
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
