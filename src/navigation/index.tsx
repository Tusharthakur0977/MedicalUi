import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../typings/route';
import Splash from '../screens/splash/Splash';
import FirstPage from '../screens/firstPage/FirstPage';
import SignIn from '../screens/login/SignIn';
import SignUp from '../screens/register/SignUp';
import SetUpProfile from '../screens/profile/SetUpProfile';
import CreatePin from '../screens/createPin/CreatePin';
import SetFingerPrint from '../screens/fingerPrintScan/SetFingerPrint';
import Home from '../screens/home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomIcon from '../components/Icon/Icon';
import Notifications from '../screens/notifications/Notifications';
import Favourites from '../screens/favourites/Favourites';
import TopDoctors from '../screens/topDoctors/TopDoctors';

const Tab = createBottomTabNavigator();
export const Tabbing = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          paddingHorizontal: 30,
          paddingBottom: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="home"
              color={focused ? '#286cfc' : 'grey'}
              size={30}
              type={'Foundation'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Appointeme.."
        component={SignIn}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="calendar"
              color={focused ? '#286cfc' : 'grey'}
              size={30}
              type={'AntIcons'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={SignUp}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="file-text"
              color={focused ? '#286cfc' : 'grey'}
              size={30}
              type={'Feather'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Articles"
        component={FirstPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="file-text"
              color={focused ? '#286cfc' : 'grey'}
              size={30}
              type={'Feather'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Splash}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              style={{ fontFamily: '' }}
              name="user-o"
              color={focused ? '#286cfc' : 'grey'}
              size={25}
              type={'FontAwesome'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
type SplashProps = NativeStackScreenProps<RootStackParams>;

const Routing: React.FC<SplashProps> = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SetUpProfile"
        component={SetUpProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreatePin"
        component={CreatePin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SetFingerPrint"
        component={SetFingerPrint}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Tabbing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Favourites"
        component={Favourites}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TopDoctors"
        component={TopDoctors}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserDetails"
        component={TopDoctors}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default Routing;
