/* eslint-disable prettier/prettier */
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useRef } from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../home/typings/route';
import {styles} from './Styles';

type SplashProps = NativeStackScreenProps<RootStackParams>;

const CreatePin: React.FC<SplashProps> = ({navigation}) => {

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  const maxLength = 1; // Example maximum length

  const handleTextChange = (text, inputRef) => {
    if (text.length === maxLength && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headcontainer}>
        <Icon
          name="arrow-left"
          size={30}
          color="black"
          style={styles.arrow}
          onPress={() => navigation.navigate('SetUpProfile')}
        />
        <Text style={styles.headtext}>Create New PIN</Text>
      </View>
      <Text style={styles.title}>
        Add a PIN number to make your account more secure
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          ref={inputRef1}
          style={styles.input}
          placeholderTextColor="#A9A9A9"
          keyboardType="numeric"
          maxLength={maxLength}
          secureTextEntry={true}
          onChangeText={(text) => handleTextChange(text, inputRef2)}
        />
        <TextInput
        ref={inputRef2}
          style={styles.input}
          placeholderTextColor="#A9A9A9"
          keyboardType="numeric"
          maxLength={maxLength}
          secureTextEntry={true}
          onChangeText={(text) => handleTextChange(text, inputRef3)}
        />
        <TextInput
          ref={inputRef3}
          style={styles.input}
          placeholderTextColor="#A9A9A9"
          keyboardType="numeric"
          maxLength={maxLength}
          secureTextEntry={true}
          onChangeText={(text) => handleTextChange(text, inputRef4)}
        />
        <TextInput
          ref={inputRef4}
          style={styles.input}
          placeholderTextColor="#A9A9A9"
          keyboardType="numeric"
          maxLength={maxLength}
          secureTextEntry={true}
          onChangeText={(text) => handleTextChange(text, inputRef4)}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SetFingerPrint')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreatePin;
