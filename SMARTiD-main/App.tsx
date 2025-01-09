import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext, AuthProvider } from './src/context/AuthContext';
import WelcomePage from './src/screens/WelcomePage';
import LoginPage from './src/screens/LoginPage';
import HomePage from './src/screens/HomePage';
import OtpPage from './src/screens/OtpPage';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Stack.Navigator>

      <>
        <Stack.Screen name="Welcome" component={WelcomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginPage} options={{ title: 'Login', headerLeft: () => null }} />
        <Stack.Screen name="Otp" component={OtpPage} options={{ title: 'Mobile Verification', headerLeft: () => null }} />
        <Stack.Screen name="Home" component={HomePage} options={{ title: 'Home' }} />
      </>
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};
export default App;
