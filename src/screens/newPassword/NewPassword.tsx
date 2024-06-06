import {
  ActivityIndicator,
  Alert,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
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
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const toggleCheck = () => {
    setChecked(!isChecked);
  };
  useEffect(() => {
    if (modalVisible) {
      const timer = setTimeout(() => {
        setModalVisible(false);
        navigation.navigate('TabStack', { screen: 'HomeStack' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [modalVisible, navigation]);
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
          style={{ maxHeight: 300, maxWidth: '100%' }}
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
            rightIconName={isShowPassword ? 'eye-slash' : 'eye'}
            rightIconType="FontAwesome5"
            rightIconColor="#212121"
            rightIconSize={20}
            inputStyle={{ flex: 1, color: '#212121', fontSize: 18 }}
            mainContStyles={{
              borderColor: '#ddd',
              backgroundColor: '#FAFAFA',
              width: '90%',
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 20,
              gap: 10,
            }}
            rightIconOnPress={() => setIsShowPassword(!isShowPassword)}
            secureTextEntry={isShowPassword}
          />
          <CustomInput
            isLeftIcon={true}
            leftIconName="locked"
            leftIconType="Fontisto"
            leftIconColor="#212121"
            leftIconSize={20}
            isRightIcon={true}
            rightIconName={isShowConfirmPassword ? 'eye-slash' : 'eye'}
            rightIconType="FontAwesome5"
            rightIconColor="#212121"
            rightIconSize={20}
            inputStyle={{ flex: 1, color: '#212121', fontSize: 18 }}
            mainContStyles={{
              borderColor: '#ddd',
              backgroundColor: '#FAFAFA',
              width: '90%',
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 20,
              gap: 10,
            }}
            rightIconOnPress={() =>
              setIsShowConfirmPassword(!isShowConfirmPassword)
            }
            secureTextEntry={isShowConfirmPassword}
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
            }}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.overlay}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                style={styles.image}
                source={IMAGES.resetPasswordConsgrats}
              />
              <Text style={styles.modalText}>Conratulations!</Text>
              <Text style={styles.bodytext}>
                Your account is ready to use. You will be redirected to Home
                page in a few seconds.
              </Text>
              <ActivityIndicator
                size={80}
                color={'#5677fc'}
                style={styles.loader}
              />
            </View>
          </View>
        </View>
      </Modal>
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
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    marginHorizontal: 20,
  },
  modalView: {
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 50,
    paddingHorizontal: 35,
    paddingBottom: 20,
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#5677fc',
    fontSize: 25,
    fontWeight: '700',
  },
  bodytext: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
  },
  loader: {
    marginTop: 20,
  },
  image: {
    height: 250,
    width: 200,
  },
});
