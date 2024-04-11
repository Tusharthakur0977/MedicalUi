import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../home/typings/route';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './Styles';

type SplashProps = NativeStackScreenProps<RootStackParams>;

const FirstPage: React.FC<SplashProps> = ({navigation}) => {
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
        <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
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
      <TouchableOpacity style={styles.passwordButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.passwordButtonText}>Sign in with password</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text
            style={styles.signUpButton}
            onPress={() => navigation.navigate('SignUp')}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;
