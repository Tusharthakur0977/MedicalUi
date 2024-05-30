import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RootStackParams } from '../../typings/route';
import { styles } from './Styles';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const FirstPage = () => {
  const [userInfo, setUserInfo] = useState(null);

  let _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      console.log('error', error.message);
    }
  };
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();

      const usrInfo = await GoogleSignin.signIn();
      setUserInfo(usrInfo);
      // this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
      }
    }

    // some other error happened
  };
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        'AIzaSyB80Y7QbzAdHI8MDWROKWIHo3Jig7K9EIE.com.Medical.MedicalNews',
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../../assets/Firstpage.png')}
          style={styles.image}
        />
        <Text style={styles.headerText}>Let's you in</Text>
      </View>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
          <Icon name="facebook" size={24} color="#3b5998" />
          <Text style={styles.socialButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
        {/* <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={_signIn}
          // disabled={isInProgress}
        /> */}

        <TouchableOpacity
          style={[styles.socialButton, styles.googleButton]}
          onPress={_signIn}>
          <Image
            source={require('../../assets/download-removebg-preview.png')} // Replace with the path to your multi-colored Google logo image
            resizeMode="contain"
            style={styles.logo}
          />
          <Text style={styles.socialButtonText}>Continue with Google</Text>
          {userInfo != null ? (
            <Text style={{ color: 'black' }}>{userInfo.user.name}</Text>
          ) : (
            <Text style={{ color: 'black' }}>No Data Found</Text>
          )}
          {userInfo != null && (
            <Text style={{ color: 'black' }}>{userInfo.user.email}</Text>
          )}
          {userInfo != null && (
            <Image
              source={userInfo.user.name}
              style={{ height: 100, width: 100 }}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.appleButton]}>
          <Icon name="apple" size={24} color="#000000" />
          <Text style={styles.socialButtonText}>Continue with Apple</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.orText}>or</Text>
      <TouchableOpacity
        style={styles.passwordButton}
        onPress={() =>
          navigation.navigate('TabStack', { screen: 'HomeStack' })
        }>
        <Text style={styles.passwordButtonText}>Sign in with password</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text
            style={styles.signUpButton}
            onPress={() =>
              navigation.navigate('RegisterStack', { screen: 'Register' })
            }>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;
