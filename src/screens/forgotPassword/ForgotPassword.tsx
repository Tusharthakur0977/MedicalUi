import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import CustomIcon from '../../components/Icon/Icon';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../typings/route';
import IMAGES from '../../assets';
export type data =
  | { key: string; number: string; email?: never }
  | { key: string; email: string; number?: never };
const ForgotPassword = () => {
  const [isSelected, setIsSelected] = useState('');

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  let data1 = {
    key: 'via SMS:',
    number: '+1 111 ******99',
  };
  let data2 = {
    key: 'via Email:',
    email: 'ex***e11**@email.com',
  };
  const selectedData =
    isSelected === 'sms' ? data1 : isSelected === 'email' ? data2 : null;

  return (
    <View
      style={{
        padding: 10,
        flex: 1,
        alignItems: 'center',
        gap: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '95%',
          paddingVertical: 10,
          gap: 10,
        }}>
        <CustomIcon
          type="AntIcons"
          name="arrowleft"
          size={30}
          color="black"
          style={{}}
          onPress={() => navigation.goBack()}
        />
        <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>
          Forgot Password
        </Text>
      </View>
      <Image
        source={IMAGES.resetPassworlImg}
        style={{ maxHeight: 300, maxWidth: 300 }}
      />
      <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>
        Select which contact we should use to reset you password
      </Text>
      <View style={{ borderWidth: 0, padding: 10, width: '95%', gap: 20 }}>
        <TouchableOpacity
          style={{
            borderWidth: isSelected == 'sms' ? 3 : 0.2,
            paddingVertical: 20,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
            borderRadius: isSelected == 'sms' ? 30 : 15,
            borderColor: isSelected == 'sms' ? '#4B86FF' : 'grey',
          }}
          onPress={() => setIsSelected('sms')}>
          <CustomIcon
            type="MaterialCommunityIcons"
            name="message-processing"
            size={20}
            style={{
              backgroundColor: '#EEF4FF',
              color: '#3073FE',
              borderRadius: 29,
              padding: 18,
            }}
          />
          <View>
            <Text style={{ color: 'grey' }}>{data1.key}</Text>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>
              {data1.number}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: isSelected == 'email' ? 3 : 0.2,
            padding: 20,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            borderRadius: isSelected == 'email' ? 30 : 15,
            borderColor: isSelected == 'email' ? '#4B86FF' : 'grey',
          }}
          onPress={() => setIsSelected('email')}>
          <CustomIcon
            type="MaterialCommunityIcons"
            name="email"
            size={20}
            style={{
              backgroundColor: '#EEF4FF',
              color: '#3073FE',
              borderRadius: 29,
              padding: 18,
            }}
          />
          <View>
            <Text style={{ color: 'grey' }}>{data2.key}</Text>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>
              {data2.email}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#246BFD',
          paddingVertical: 20,
          width: '90%',
          alignItems: 'center',
          borderRadius: 32,
          marginTop: 10,
          shadowColor: '#D8E5FF',
          elevation: 10,
        }}
        onPress={() => {
          if (isSelected === 'sms') {
            navigation.navigate('ResetPassWordStack', {
              screen: 'OTPVerification',
              params: {
                details: {
                  key: 'via SMS:',
                  number: '+1 111 ******99',
                },
              },
            });
          } else if (isSelected === 'email') {
            navigation.navigate('ResetPassWordStack', {
              screen: 'OTPVerification',
              params: {
                details: {
                  key: 'via Email:',
                  email: 'ex***e11**@email.com',
                },
              },
            });
          } else {
            Alert.alert('Please select a method to reset your password.');
          }
        }}>
        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;
