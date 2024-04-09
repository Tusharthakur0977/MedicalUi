import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routing from './navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUp from './screens/register/SignUp';
import SignIn from './screens/login/SignIn';
import Icon from 'react-native-vector-icons/FontAwesome'


const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
     
      <Routing />
    </NavigationContainer>
  );
};

export default App;
