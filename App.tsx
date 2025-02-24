import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskMapPage from './src/screens/TaskMapPage'; 
import Share5Screen from './src/screens/Share5Screen';
import Sakya3In from './src/screens/Sakya3In';
import TwoAndTwoScreen from './src/screens/TwoAndTwoScreen';
import SapMission from './src/screens/SapMission';
import ThreeDTwoMPage from './src/screens/ThreeDTwoMPage';
import FreeCardPage from './src/screens/FreeCardPage'; // Import FreeCardPage

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TaskMap">
        <Stack.Screen name="TaskMap" component={TaskMapPage} options={{ title: 'Task Map' }} />
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
