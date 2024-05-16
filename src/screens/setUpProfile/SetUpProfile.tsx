/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomInput from '../../components/CustomInput/CustomInput';
import { styles } from './Styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SetUpProfileStackParams } from '../../typings/route';
import { launchImageLibrary } from 'react-native-image-picker';

const SetUpProfile = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<SetUpProfileStackParams, 'SetUpProfile'>
    >();

  const [name, setName] = useState<string>('');
  const [nickname, setNickName] = useState<string>('');
  const [dob, setDob] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState(null);

  const [errors, setErrors] = useState({
    name: '',
    nickname: '',
    dob: '',
    email: '',
    gender: '',
  });

  const handleSignup = () => {
    // Initialize an errors object to capture all validation messages
    let newErrors = {
      name: '',
      nickname: '',
      dob: '',
      email: '',
      gender: '',
    };
    if (name === '') {
      newErrors.name = '*Name is required';
    }
    if (nickname === '') {
      newErrors.nickname = '*Nickname is required';
    }
    if (dob === '') {
      newErrors.dob = '*Date of Birth is required';
    }
    if (email === '') {
      newErrors.email = '*Email is required';
    } else {
      const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = '*Invalid Email';
      }
    }
    if (gender === '') {
      newErrors.gender = '*Gender is required';
    }
    setErrors(newErrors);

    // Check if any errors exist before proceeding
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    if (!hasErrors) {
      // If there are no errors, navigate to the next screen
      navigation.navigate('CreatePin');
    }
  };

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, handleResponse);
  };

  const handleResponse = response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('Image picker error: ', response.error);
    } else {
      let imageUri = response.uri || response.assets?.[0]?.uri;
      setSelectedImage(imageUri);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headcontainer}>
        <Icon
          name="arrow-left"
          color="black"
          size={24}
          style={styles.arrow}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headtext}>Fill Your Profile</Text>
      </View>
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          {selectedImage && (
            <Image
              source={{ uri: selectedImage }}
              style={styles.profileImage}
            />
          )}
        </View>
        <TouchableOpacity style={styles.editIcon} onPress={openImagePicker}>
          <Icon name="pencil" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        {/*fullName*/}
        <CustomInput
          mainContStyles={styles.input}
          inputStyle={{ flex: 1, color: '#333' }}
          placeholder="Full Name"
          placeholderTextColor="grey"
          onTextChange={setName}
        />
        {errors.name ? (
          <Text style={styles.errorText}>{errors.name}</Text>
        ) : null}

        {/*Nickname*/}
        <CustomInput
          mainContStyles={styles.input}
          inputStyle={{ flex: 1, color: '#333' }}
          placeholder="Nick Name"
          placeholderTextColor="grey"
          onTextChange={setNickName}
        />
        {errors.nickname ? (
          <Text style={styles.errorText}>{errors.nickname}</Text>
        ) : null}

        {/*DateOfBirth*/}
        <CustomInput
          mainContStyles={styles.input}
          rightIconName="calendar"
          rightIconType="FontAwesome"
          rightIconSize={20}
          isRightIcon
          inputStyle={{ flex: 1, color: '#333' }}
          placeholder="Date of Birth"
          placeholderTextColor="grey"
          onTextChange={setDob}
        />
        {errors.dob ? <Text style={styles.errorText}>{errors.dob}</Text> : null}

        {/*Email*/}
        <CustomInput
          mainContStyles={styles.input}
          rightIconName="envelope-o"
          rightIconType="FontAwesome"
          isRightIcon
          inputStyle={{ flex: 1, color: '#333' }}
          placeholder="Email"
          placeholderTextColor="grey"
          onTextChange={setEmail}
        />
        {errors.email ? (
          <Text style={styles.errorText}>{errors.email}</Text>
        ) : null}

        {/*Gender*/}
        <CustomInput
          mainContStyles={styles.input}
          rightIconName="intersex"
          rightIconType="FontAwesome"
          isRightIcon
          inputStyle={{ flex: 1, color: '#333' }}
          placeholder="Gender"
          placeholderTextColor="grey"
          onTextChange={setGender}
        />
        {errors.gender ? (
          <Text style={styles.errorText}>{errors.gender}</Text>
        ) : null}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default SetUpProfile;
