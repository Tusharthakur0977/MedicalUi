/* eslint-disable react-native/no-inline-styles */
import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams } from '../home/typings/route';
import IMAGES from '../../assets';
import {styles} from './Styles';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomIcon from '../../components/Icon/Icon';
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

const SignIn: React.FC<SplashProps> = ({navigation}) => {
  const [isChecked, setChecked] = useState(false);

  const toggleCheck = () => {
    setChecked(!isChecked);
  };

const [email, setemail] = useState('');
const [password, setpassword] = useState('');

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleLogin = ()=>{
    let newErrors = {
      email: '',
      password: '',
    };
  if (email === ''){
    newErrors.email = '*Email is required';
  }
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = '*Invalid Email';
    }
  if (password === ''){
    newErrors.password = '*Password is required';
  }
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    if (!hasErrors) {
      // If there are no errors, navigate to the next screen
      navigation.navigate('SetUpProfile');
    }
  setErrors(newErrors);
  };

  return (
    <View style={styles.container}>
        <CustomIcon
          type='FontAwesome'
          name='arrow-left'
          size={30}
          color='black'
          style={styles.arrow}
          onPress={()=> (navigation.goBack())}
        />
      <Image source={IMAGES.signupInLogo} style={styles.logo1} />
      <Text style={styles.header}>Login To Your Account</Text>

      <View style={styles.inputcontainer}>
        <CustomInput
          mainContStyles={styles.input}
          placeholder='Email'
          onTextChange={setemail}
          placeholderTextColor='grey'
          inputStyle={{ flex: 1, color: 'black' }}
          isLeftIcon
          leftIconType='FontAwesome'
          leftIconName='envelope-o'
          leftIconSize={20}
        />
        {errors.email ? (
          <Text
            style={{ color: 'red', marginTop: -15, }}>
            {errors.email}
          </Text>
        ) : null}
        <CustomInput
          mainContStyles={styles.input}
          placeholder='Password'
          placeholderTextColor='grey'
          onTextChange={setpassword}
          inputStyle={{ flex: 1, color:'black' }}
          isLeftIcon
          leftIconType='FontAwesome'
          leftIconName='lock'
          leftIconSize={20}
          secureTextEntry
        />
        {errors.password ? (
          <Text
            style={{ color: 'red', marginBottom: 10, marginTop: -15, }}>
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

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.forgot}>Forgot the password ?</Text>
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
        <Text style={styles.footerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signinText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
