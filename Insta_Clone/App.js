import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNav from './src/Navigation/TabNav';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Status from './src/Screens/StatusScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  Ionicons.loadFont();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Bottom" component={TabNav} />
        <Stack.Screen name="Status" component={Status} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
