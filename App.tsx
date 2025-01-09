import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext, AuthProvider } from './src/context/AuthContext';
import WelcomePage from './src/screens/WelcomePage';
import LoginPage from './src/screens/LoginPage';
import HomePage from './src/screens/HomePage';
import TaskMapPage from './src/screens/taskmapPage'; // Import TaskMapPage

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{ title: 'Home' }}
          />
          <Stack.Screen
            name="TaskMap"
            component={TaskMapPage}
            options={{ title: 'Task Map' }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Welcome"
            component={WelcomePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{ title: 'Login' }}
          />
        </>
      )}
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
