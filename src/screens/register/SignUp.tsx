/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../typings/route';
import IMAGES from '../../assets';
import { styles } from './Styles';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';
import CustomIcon from '../../components/Icon/Icon';
import CustomInput from '../../components/CustomInput/CustomInput';

type SplashProps = NativeStackScreenProps<RootStackParams>;

type CustomCheckboxProps = {
  label: string;
  onCheck: () => void;
  isChecked: boolean;
};

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  onCheck,
  isChecked,
}) => {
  return (
    <View style={styles.container1}>
      <TouchableOpacity onPress={onCheck}>
        <View style={[styles.checkbox, isChecked && styles.checked]}>
          {isChecked ? <Text style={styles.checkmark}>✓</Text> : null}
        </View>
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const SignUp: React.FC<SplashProps> = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);

  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const handleEmailChange = (text: string) => {
    setemail(text);
    // Clear email error when the user starts typing
    setErrors({ ...errors, email: '' });
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    // Clear password error when the user starts typing
    setErrors({ ...errors, password: '' });
  };

  const handleSignup = () => {
    // Initialize an errors object to capture all validation messages
    let newErrors = {
      email: '',
      password: '',
    };
    if (email.trim() === '') {
      newErrors.email = '*Email is required';
    } else {
      const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = '*Invalid Email';
      }
    }
    if (password === '') {
      newErrors.password = '*Password is required';
    }
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error !== '');
    if (!hasErrors) {
      // If there are no errors, navigate to the next screen
      navigation.navigate('SetUpProfile');
    }
  };

  const toggleCheck = () => {
    setChecked(!isChecked);
  };
  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={Keyboard.dismiss}
      accessible={false}>
        <CustomIcon 
          type='FontAwesome'
          name='arrow-left'
          size={30}
          color='black'
          style={styles.arrow}
          onPress={() => (navigation.goBack())}
        />
      <Image source={IMAGES.signupInLogo} style={styles.logo1} />
      <Text style={styles.header}>Create New Account</Text>
      <View style={styles.inputcontainer}>
        <CustomInput
          mainContStyles={styles.input}
          placeholder='Email'
          placeholderTextColor='grey'
          onTextChange={handleEmailChange}
          inputStyle={{ flex: 1, color: '#333' }}
          isLeftIcon
          leftIconType='FontAwesome'
          leftIconName='envelope-o'
          leftIconSize={20}
        />
        {errors.email ? (
          <Text
            style={{ color: 'red', marginBottom: 10, marginTop: -15 }}>
            {errors.email}
          </Text>
        ) : null}
        <CustomInput
          mainContStyles={styles.input}
          placeholder='Password'
          placeholderTextColor='grey'
          onTextChange={handlePasswordChange}
          inputStyle={{ flex: 1, color: '#333' }}
          isLeftIcon
          leftIconType='FontAwesome'
          leftIconName='lock'
          leftIconSize={20}
          secureTextEntry
        />
        {errors.password ? (
          <Text
            style={{ color: 'red', marginBottom: 10, marginTop: -15 }}>
            {errors.password}
          </Text>
        ) : null}
      </View>
      
      <View style={styles.checkboxContainer}>
        <CustomCheckbox
          label="Remember me"
          isChecked={isChecked}
          onCheck={toggleCheck}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or continue with</Text>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="facebook" size={24} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={IMAGES.googgleLogo}
            resizeMode="contain"
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="apple" size={24} color="#000000" />
        </TouchableOpacity>
      </View>

      <View style={styles.footerTextContainer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signinText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;
