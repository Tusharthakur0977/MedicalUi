import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import CustomIcon from '../../components/Icon/Icon';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../typings/route';
import IMAGES from '../../assets';
import CustomInput from '../../components/CustomInput/CustomInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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
          {isChecked ? <Text style={styles.checkmark}>✔</Text> : null}
        </View>
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};
const NewPassword = () => {
  const [isChecked, setChecked] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const toggleCheck = () => {
    setChecked(!isChecked);
  };
  return (
    <View
      style={{
        backgroundColor: '#FFF',
        paddingTop: 30,
        alignItems: 'center',
        gap: 40,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          width: '95%',
        }}>
        <CustomIcon
          type="AntIcons"
          name="arrowleft"
          size={30}
          color="black"
          style={styles.arrow}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headtext}>Create New Password</Text>
      </View>
      <KeyboardAwareScrollView
        style={{
          width: '100%',
        }}
        contentContainerStyle={{ alignItems: 'center', gap: 50 }}>
        <Image
          source={IMAGES.createPassword}
          style={{ maxHeight: 300, maxWidth: 300 }}
        />
        <View style={{ gap: 30, alignItems: 'center', width: '100%' }}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: '500',
              alignSelf: 'flex-start',
              paddingHorizontal: 20,
            }}>
            Create Your New Password
          </Text>
          <CustomInput
            isLeftIcon={true}
            leftIconName="locked"
            leftIconType="Fontisto"
            leftIconColor="#212121"
            leftIconSize={20}
            isRightIcon={true}
            rightIconName="eye-slash"
            rightIconType="FontAwesome5"
            rightIconColor="#212121"
            rightIconSize={20}
            inputStyle={{ flex: 1, color: '#212121', fontSize: 20 }}
            mainContStyles={{
              borderColor: '#ddd',
              backgroundColor: '#FAFAFA',
              width: '90%',
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 20,
              gap: 10,
            }}
            secureTextEntry={true}
          />
          <CustomInput
            isLeftIcon={true}
            leftIconName="locked"
            leftIconType="Fontisto"
            leftIconColor="#212121"
            leftIconSize={20}
            isRightIcon={true}
            rightIconName="eye-slash"
            rightIconType="FontAwesome5"
            rightIconColor="#212121"
            rightIconSize={20}
            inputStyle={{ flex: 1, color: '#212121' }}
            mainContStyles={{
              borderColor: '#ddd',
              backgroundColor: '#FAFAFA',
              width: '90%',
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 20,
              gap: 10,
            }}
          />
          <View>
            <CustomCheckbox
              label="Remember me"
              isChecked={isChecked}
              onCheck={toggleCheck}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#246BFD',
              paddingVertical: 17,
              width: '90%',
              alignItems: 'center',
              borderRadius: 32,
              shadowColor: '#D8E5FF',
            }}>
            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Continue</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  arrow: {
    paddingRight: 20,
  },
  headtext: {
    color: 'black',
    fontSize: 24,
    fontWeight: '800',
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 8,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#246BFD',
    alignItems: 'center',
  },
  checked: {
    borderWidth: 2,
    backgroundColor: '#246BFD',
    borderColor: '#246BFD',
  },
  checkmark: {
    color: '#fff',
  },
  label: {
    fontSize: 15,
    color: 'black',
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    fontSize: 16,
    color: 'black',
  },
});
