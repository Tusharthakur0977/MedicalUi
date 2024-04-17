import { NavigatorScreenParams } from '@react-navigation/native';
import { DoctorCardType } from '../screens/topDoctors/TopDoctors';

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
  UserDetails?: { doctorData: DoctorCardType };
};
export type UserProcess = {
  SetUpProfile: undefined;
  CreatePin: undefined;
  SetFingerPrint: undefined;
};
