import { NavigatorScreenParams } from '@react-navigation/native';
import { DoctorCardType } from '../screens/topDoctors/TopDoctors';
import { ArticleNewsParamsTypes } from '../seeds/Articles';
import { data } from '../screens/forgotPassword/ForgotPassword';

export type RootStackParams = {
  Splash: undefined;
  OnBoarding: undefined;
  Login: undefined;
  RegisterStack: NavigatorScreenParams<RegisterStackParams>;
  HomeStack: NavigatorScreenParams<HomeStackParams>;
  TabStack: NavigatorScreenParams<BottomTabParams>;
  ResetPassWordStack: NavigatorScreenParams<ResetPasswordStackParams>;
};

type RegisterStackParams = {
  Register: undefined;
  SetUpProfile: undefined;
  CreatePin: undefined;
  SetFingerPrint: undefined;
};
type ResetPasswordStackParams = {
  ForgotPassword: undefined;
  OTPVerification?: { details: data };
  CreatePassword: undefined;
};

type HomeStackParams = {
  Home: undefined;
  Notification: undefined;
  FavouriteDoctor: undefined;
  TopDoctor: undefined;
  Search: undefined;
  UserDetails?: { doctorData: DoctorCardType };
};

export type BottomTabParams = {
  HomeStack: NavigatorScreenParams<HomeStackParams>;
  Appointment: undefined;
  History: undefined;
  ArticleStack: NavigatorScreenParams<ArticlesStackParams>;
  Profile: NavigatorScreenParams<ProfileStackParams>;
};

export type ArticlesStackParams = {
  Article: undefined;
  AllArticles: undefined;
  ArtcleDetails?: { article: ArticleNewsParamsTypes };
  Bookmarks: undefined;
};

export type ProfileStackParams = {
  DashBoard: undefined;
};