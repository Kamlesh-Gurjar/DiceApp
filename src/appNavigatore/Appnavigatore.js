 import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splaesh from '../Screens/Spalesh';
import Spalesh from '../Screens/Spalesh';
import Login from './Login';
const Stake = createNativeStackNavigator();
const Appnavigatore = () => {
  return (
    <NavigationContainer>
      <Stake.Navigator>
        <Stake.Screen name="Spalesh" component={Spalesh} />
        <Stake.Screen name="Login" component={Login} />
 
      </Stake.Navigator>
    </NavigationContainer>
  );
};

export default Appnavigatore;
