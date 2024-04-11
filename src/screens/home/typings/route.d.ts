import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParams = {
  FirstPage: undefined;
  SignUp: undefined;
  SignIn: undefined;
  SetUpProfile: undefined;
  CreatePin: undefined;
  SetFingerPrint: undefined;
  Home: undefined;
  Notifications: undefined;
  Favourites: undefined;
  TopDoctors: undefined;
  splash: undefined;
  mainStack: NavigatorScreenParams<UserProcess>;
};
export type UserProcess = {
  SetUpProfile: undefined;
  CreatePin: undefined;
  SetFingerPrint: undefined;
};
