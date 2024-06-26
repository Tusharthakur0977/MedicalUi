import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import IMAGES from '../../assets';
import CustomIcon from '../../components/Icon/Icon';
import { HomeStackParams, RootStackParams } from '../../typings/route';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Styles';

const data = [
  {
    id: '1',
    type: 'Appointment Cancelled!',
    date: 'Today | 15:36 PM',
    description:
      'You have successfully cancelled your appointment with Dr. Alan Watson on December 24, 2024, 13:00 PM. 80% of the funds will be returned to your account.',
    icon: IMAGES.cancelled,
  },
  {
    id: '2',
    type: 'Schedule Changed',
    date: 'Yesterday | 15:36 PM',
    description:
      'You have successfully changed schedule an appointment with Dr. Alan Watson on December 24, 2024, 13:00 PM. 80% of the funds will be returned to your account.',
    icon: IMAGES.scheduleChange,
  },
  {
    id: '3',
    type: 'Appointment Success!',
    date: '19 Dec, 2024 | 15:36 PM',
    description:
      'You have successfully booked an appointment with Dr. Alan Watson on December 24, 2024, 13:00 PM. 80% of the funds will be returned to your account.',
    icon: IMAGES.appointSuccess,
  },
  {
    id: '4',
    type: 'New Service Available!',
    date: '11 Oct, 2024 | 11:36 AM',
    description:
      'You have successfully cancelled your appointment with Dr. Alan Watson on December 24, 2024, 13:00 PM. 80% of the funds will be returned to your account.',
    icon: IMAGES.newServiceAvail,
  },
  {
    id: '5',
    type: 'Credit Card Connected!',
    date: '12 April, 2024 |  5:36 PM',
    description:
      'You have successfully cancelled your appointment with Dr. Alan Watson on December 24, 2024, 13:00 PM. 80% of the funds will be returned to your account.',
    icon: IMAGES.cardConnect,
  },
  {
    id: '6',
    type: 'Credit Card Connected!',
    date: '12 April, 2024 |  5:36 PM',
    description:
      'You have successfully cancelled your appointment with Dr. Alan Watson on December 24, 2024, 13:00 PM. 80% of the funds will be returned to your account.',
    icon: IMAGES.cardConnect,
  },
];

const Notifications = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams, 'notification'>>();

  return (
    <View style={styles.container}>
      <StatusBar animated={false} />
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <CustomIcon
            type="AntIcons"
            name="arrowleft"
            color="black"
            style={{ paddingVertical: 10 }}
            onPress={() => navigation.goBack()}
            size={27}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 23,
              fontWeight: 'bold',
              paddingLeft: 10,
            }}>
            Notification
          </Text>
        </View>
        <CustomIcon
          type="Ionicons"
          name="ellipsis-horizontal-circle"
          color="black"
          size={27}
          style={{ paddingHorizontal: 20, paddingVertical: 10 }}
        />
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <View style={styles.topRow}>
              <Image source={item.icon} style={styles.icon} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.type}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </View>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Notifications;

