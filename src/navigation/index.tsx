import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  BottomTabParams,
  HomeStackParams,
  RegistrationStackParams,
  RootStackParams,
  SetUpProfileStackParams,
} from '../typings/route';
import Splash from '../screens/splash/Splash';
import FirstPage from '../screens/firstPage/FirstPage';
import SignIn from '../screens/login/SignIn';
import SignUp from '../screens/register/SignUp';
import SetUpProfile from '../screens/setUpProfile/SetUpProfile';
import CreatePin from '../screens/createPin/CreatePin';
import SetFingerPrint from '../screens/fingerPrintScan/SetFingerPrint';
import Home from '../screens/home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomIcon from '../components/Icon/Icon';
import Notifications from '../screens/notifications/Notifications';
import Favourites from '../screens/favourites/Favourites';
import TopDoctors from '../screens/topDoctors/TopDoctors';
import profile from '../screens/profile/profile';
import Profile from '../screens/profile/profile';

const Stack = createNativeStackNavigator<RootStackParams>();
const RegistrationStack = createNativeStackNavigator<RegistrationStackParams>();
const SetUpProfileStack = createNativeStackNavigator<SetUpProfileStackParams>();
const HomeStack = createNativeStackNavigator<HomeStackParams>();
const TabStack = createBottomTabNavigator<BottomTabParams>();

function RegistrationStackNavigator() {
  return (
    <RegistrationStack.Navigator screenOptions={{ headerShown: false }}>
      <RegistrationStack.Screen name="splash" component={Splash} />
      <RegistrationStack.Screen name="FirstPage" component={FirstPage} />
      <RegistrationStack.Screen name="signIn" component={SignIn} />
      <RegistrationStack.Screen name="signUp" component={SignUp} />
    </RegistrationStack.Navigator>
  );
}

function SetUpProfileStackNavigator() {
  return (
    <SetUpProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <SetUpProfileStack.Screen name="SetUpProfile" component={SetUpProfile} />
      <SetUpProfileStack.Screen name="CreatePin" component={CreatePin} />
      <SetUpProfileStack.Screen
        name="SetFingerPrint"
        component={SetFingerPrint}
      />
    </SetUpProfileStack.Navigator>
  );
}

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="TabStack" component={TabbingStackNavigator} />
      <HomeStack.Screen name="notification" component={Notifications} />
      <HomeStack.Screen name="favouriteDoctor" component={Favourites} />
      <HomeStack.Screen name="topDoctor" component={TopDoctors} />
    </HomeStack.Navigator>
  );
}

function TabbingStackNavigator() {
  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          paddingHorizontal: 30,
          paddingBottom: 10,
        },
      }}>
      <TabStack.Screen
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
      <TabStack.Screen
        name="Appointment"
        component={Favourites}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="calendar-month"
              color={focused ? '#286cfc' : 'grey'}
              size={30}
              type={'MaterialIcons'}
            />
          ),
        }}
      />
      <TabStack.Screen
        name="History"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="history"
              color={focused ? '#286cfc' : 'grey'}
              size={30}
              type={'MaterialIcons'}
            />
          ),
        }}
      />
      <TabStack.Screen
        name="Articles"
        component={TopDoctors}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="file-document-outline"
              color={focused ? '#286cfc' : 'grey'}
              size={30}
              type={'MaterialCommunityIcons'}
            />
          ),
        }}
      />
      <TabStack.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="user"
              color={focused ? '#286cfc' : 'grey'}
              size={30}
              type={'Feather'}
            />
          ),
        }}
      />
    </TabStack.Navigator>
  );
}

function Routing() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="RegistrationStack"
        component={RegistrationStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SetUpProfileStack"
        component={SetUpProfileStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabStack"
        component={TabbingStackNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
export default Routing;
