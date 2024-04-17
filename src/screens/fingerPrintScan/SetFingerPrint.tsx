import {
  ActivityIndicator,
  Alert,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParams } from '../../typings/route';
import IMAGES from '../../assets';
import {styles} from './Styles';


type SplashProps = NativeStackScreenProps<RootStackParams>;

const SetFingerPrint: React.FC<SplashProps> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    if (modalVisible) {
      const timer = setTimeout(() => {
        setModalVisible(false);
        navigation.navigate('Home')
      }, 5000);
      return () => clearTimeout(timer); 
    }
  }, [modalVisible, navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.headcontainer}>
        <Icons
          name="arrow-left"
          size={30}
          color="black"
          style={styles.arrow}
          onPress={() => navigation.navigate('CreatePin')}
        />
        <Text style={styles.headtext}>Set Your Fingerprint</Text>
      </View>
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
              <Image style={styles.image} source={IMAGES.congrats} />
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

      <Text style={styles.title}>
        Add a PIN number to make your account more secure
      </Text>
      <Icon
        name="fingerprint"
        size={250}
        color="black"
        style={styles.fingerprint}
      />
      <Text style={styles.footer}>
        Please put your finger on the fingerprint scanner to get started
      </Text>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText1}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText2}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SetFingerPrint;
