import { NavigatorScreenParams } from '@react-navigation/native';
import { DoctorCardType } from '../screens/topDoctors/TopDoctors';

type RootStackParams = {
  TabStack: NavigatorScreenParams<HomeStackParams>;
  RegistrationStack: NavigatorScreenParams<RegistrationStackParams>;
  SetUpProfileStack: NavigatorScreenParams<SetUpProfileStackParams>;
  HomeStack: NavigatorScreenParams<HomeStackParams>;
};

type RegistrationStackParams = {
  splash: undefined;
  FirstPage: undefined;
  signUp: undefined;
  signIn: undefined;
};

type SetUpProfileStackParams = {
  SetUpProfile: undefined;
  CreatePin: undefined;
  SetFingerPrint: undefined;
};

type HomeStackParams = {
  TabStack: NavigatorScreenParams<BottomTabParams>;
  notification: undefined;
  favouriteDoctor: undefined;
  topDoctor: undefined;
  search: undefined;
  UserDetails?: { doctorData: DoctorCardType };
};

export type BottomTabParams = {
  Home: undefined;
  Appointment: undefined;
  History: undefined;
  Articles: undefined;
  Profile: undefined;
};



