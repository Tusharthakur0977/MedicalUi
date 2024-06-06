import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RootStackParams } from '../../typings/route';
import { styles } from './Styles';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const FirstPage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '564824950671-ad3q0repambe1a080sa0bq9n9i418gt4.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const { idToken, user } = await GoogleSignin.signIn();
      console.log(idToken);
      console.error(user);
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  }

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
        <TouchableOpacity
          style={[styles.socialButton, styles.googleButton]}
          onPress={onGoogleButtonPress}>
          <Image
            source={require('../../assets/download-removebg-preview.png')} // Replace with the path to your multi-colored Google logo image
            resizeMode="contain"
            style={styles.logo}
          />
          <Text style={styles.socialButtonText}>Continue with Google</Text>
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
