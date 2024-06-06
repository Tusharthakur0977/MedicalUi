import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CustomIcon from '../../components/Icon/Icon';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RootStackParams } from '../../typings/route';

const OtpVerification = () => {
  const [seconds, setSeconds] = useState(120);
  const intervalRef = useRef(null);
  const route = useRoute<RouteProp<RootStackParams>>();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const details = route.params?.details;
  const fontSize = 25;
  const inputHeight = fontSize * 3;

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];
  const [inputFocus, setInputFocus] = useState<boolean[]>(
    new Array(inputRefs.length).fill(false),
  );
  const handleFocus = (index: number) => {
    setInputFocus(inputFocus.map((focus, i) => i === index));
  };
  const handleTextChange = (text: string, nextInputIndex: number) => {
    if (text.length === 1 && nextInputIndex < inputRefs.length) {
      inputRefs[nextInputIndex].current?.focus();
    }
  };

  const formatTime = () => {
    let remainingSeconds = seconds;
    const getSeconds = `${remainingSeconds % 60}`.slice(-2);
    return getSeconds;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headcontainer}>
        <CustomIcon
          type="AntIcons"
          name="arrowleft"
          size={30}
          color="black"
          style={styles.arrow}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headtext}>OTP Code Verification</Text>
      </View>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>
          Code has been send to{' '}
          {details.key === 'via SMS:' ? details.number : details.email}
        </Text>
        <View style={styles.inputContainer}>
          {inputRefs.map((ref, index) => (
            <TextInput
              key={index}
              ref={ref}
              style={{
                flex: 1,
                color: 'black',
                borderRadius: 20,
                backgroundColor: inputFocus[index] ? '#EEF4FF' : '#FAFAFA',
                fontSize: fontSize,
                textAlign: 'center',
                borderWidth: 1,
                borderColor: inputFocus[index] ? '#276DFE' : '#EFEFF0',
                height: inputHeight,
              }}
              placeholderTextColor="#A9A9A9"
              keyboardType="numeric"
              maxLength={1}
              onChangeText={text => handleTextChange(text, index + 1)}
              onFocus={() => handleFocus(index)}
            />
          ))}
        </View>
        <Text style={styles.title2}>
          Resend code in <Text style={styles.title3}>{formatTime()}</Text>s
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('ResetPassWordStack', {
              screen: 'CreatePassword',
            })
          }>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};
export default OtpVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 30,
  },
  arrow: {
    paddingRight: 20,
  },
  headcontainer: {
    flexDirection: 'row',
    paddingBottom: 25,
    marginLeft: 20,
  },
  headtext: {
    color: 'black',
    fontSize: 24,
    fontWeight: '800',
  },
  title: {
    color: 'black',
    textAlign: 'center',
    marginTop: 100,
    fontSize: 18,
    paddingHorizontal: 10,
    fontWeight: '400',
  },
  title2: {
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
    paddingHorizontal: 10,
    fontWeight: '400',
  },
  title3: {
    color: '#276DFE',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
    paddingHorizontal: 10,
    fontWeight: '400',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 2,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 20,
    marginTop: 100,
    gap: 10,
  },
  button: {
    backgroundColor: '#5677fc',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 300,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
