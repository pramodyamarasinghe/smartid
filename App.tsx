import React from 'react';  
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/screens/HomePage';
import TaskMapPage from './src/screens/TaskMapPage';
import Share5Screen from './src/screens/Share5Screen';
import Sakya3In from './src/screens/Sakya3In';
import TwoAndTwoScreen from './src/screens/TwoAndTwoScreen';
import SapMission from './src/screens/SapMission';
import ThreeDTwoMPage from './src/screens/ThreeDTwoMPage';
import FreeCardPage from './src/screens/FreeCardPage';
import SmartIdPage from './src/screens/SmartIdPage';
import SettingsPage from './src/screens/SettingsPage';
import WelcomePage from './src/screens/WelcomePage';
import LoginPage from './src/screens/LoginPage';
import OtpPage from './src/screens/OtpPage'; 



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="WelcomePage"
        screenOptions={{ 
          headerStyle: { backgroundColor: '#FF8C00' }, // White header background
          headerTintColor: '#FFFFFF', // Black text/icons
          headerShown: true // Ensure the header is shown
        }}
      > 
        {/* Hide headers for specific pages */}
        <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }} />
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="OtpPage" component={OtpPage} options={{ headerShown: false }} />

        {/* Apply white header color to all other pages */}
        <Stack.Screen name="Home" component={HomePage} options={{ title: 'Home' }} />
        <Stack.Screen name="TaskMap" component={TaskMapPage} options={{ title: 'Task Map' }} />
        <Stack.Screen name="SmartID" component={SmartIdPage} options={{ title: 'SmartID' }} />
        <Stack.Screen name="Settings" component={SettingsPage} options={{ title: 'Settings' }} />
        <Stack.Screen name="Share5" component={Share5Screen} options={{ title: 'SHARE 5' }} />
        <Stack.Screen name="Sakya3In" component={Sakya3In} options={{ title: '3 IN SAKYA' }} />
        <Stack.Screen name="TwoAndTwo" component={TwoAndTwoScreen} options={{ title: '2 & 2' }} />
        <Stack.Screen name="SapMission" component={SapMission} options={{ title: 'SAP MISSION' }} />
        <Stack.Screen name="ThreeDTwoMPage" component={ThreeDTwoMPage} options={{ title: '3D 2M' }} />
        <Stack.Screen name="FreeCardPage" component={FreeCardPage} options={{ title: 'Free Card' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
