import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParams } from '../../typings/route';

const UserDetails = () => {
  const route = useRoute<RouteProp<RootStackParams, 'UserDetails'>>();

  const data = route.params?.doctorData;

  console.warn(data?.avatarUrl);

  return (
    <View>
      <Text>UserDetails</Text>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({});
