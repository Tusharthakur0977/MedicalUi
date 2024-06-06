import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  ArticlesStackParams,
  BottomTabParams,
  HomeStackParams,
  RegisterStackParams,
  ResetPasswordStackParams,
  RootStackParams,
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
import Profile from '../screens/profile/Profile';
import UserDetails from '../screens/UserDetails/UserDetails';
import Article from '../screens/articles/Article';
import AllArticles from '../screens/allArticles/AllArticles';
import ArticleDetails from '../screens/articleDetails/ArticleDetails';
import Bookmarks from '../screens/bookmarks/Bookmarks';
import ForgotPassword from '../screens/forgotPassword/ForgotPassword';
import OtpVerification from '../screens/otpVerification/OtpVerification';
import NewPassword from '../screens/newPassword/NewPassword';

const Stack = createNativeStackNavigator<RootStackParams>();
const RegistrationStack = createNativeStackNavigator<RegisterStackParams>();
const HomeStack = createNativeStackNavigator<HomeStackParams>();
const ArticleStack = createNativeStackNavigator<ArticlesStackParams>();
const TabStack = createBottomTabNavigator<BottomTabParams>();
const ResetPassStack = createNativeStackNavigator<ResetPasswordStackParams>();

function RootStackParam() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="OnBoarding" component={FirstPage} />
      <Stack.Screen name="Login" component={SignIn} />
      <Stack.Screen
        name="RegisterStack"
        component={RegistrationStackNavigator}
      />
      <Stack.Screen name="TabStack" component={TabbingStackNavigator} />
    </Stack.Navigator>
  );
}

function RegistrationStackNavigator() {
  return (
    <RegistrationStack.Navigator screenOptions={{ headerShown: false }}>
      <RegistrationStack.Screen name="Register" component={SignUp} />
      <RegistrationStack.Screen name="SetUpProfile" component={SetUpProfile} />
      <RegistrationStack.Screen name="CreatePin" component={CreatePin} />
      <RegistrationStack.Screen
        name="SetFingerPrint"
        component={SetFingerPrint}
      />
    </RegistrationStack.Navigator>
  );
}
function HomeStackNavigators() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="FavouriteDoctor" component={Favourites} />
      <HomeStack.Screen name="Notification" component={Notifications} />
      <HomeStack.Screen name="TopDoctor" component={TopDoctors} />
      <HomeStack.Screen name="UserDetails" component={UserDetails} />
    </HomeStack.Navigator>
  );
}
function ArticleStackNavigators() {
  return (
    <ArticleStack.Navigator screenOptions={{ headerShown: false }}>
      <ArticleStack.Screen name="Article" component={Article} />
      <ArticleStack.Screen name="AllArticles" component={AllArticles} />
      <ArticleStack.Screen name="ArtcleDetails" component={ArticleDetails} />
      <ArticleStack.Screen name="Bookmarks" component={Bookmarks} />
    </ArticleStack.Navigator>
  );
}
function ResetPasswordStackNavigator() {
  return (
    <ResetPassStack.Navigator screenOptions={{ headerShown: false }}>
      <ResetPassStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <ResetPassStack.Screen
        name="OTPVerification"
        component={OtpVerification}
      />
      <ResetPassStack.Screen name="CreatePassword" component={NewPassword} />
    </ResetPassStack.Navigator>
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
          gap: 6,
        },
      }}>
      <TabStack.Screen
        name="HomeStack"
        component={HomeStackNavigators}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="home"
              color={focused ? '#286cfc' : 'grey'}
              size={30}
              type={'Foundation'}
            />
          ),
          tabBarLabel: 'Home',
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
        name="ArticleStack"
        component={ArticleStackNavigators}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="file-document-outline"
              color={focused ? '#286cfc' : 'grey'}
              size={30}
              type={'MaterialCommunityIcons'}
            />
          ),
          tabBarLabel: 'Articles',
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
        name="Splash"
        component={RootStackParam}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterStack"
        component={RegistrationStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPassWordStack"
        component={ResetPasswordStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeStack"
        component={HomeStackNavigators}
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
