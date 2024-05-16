import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomIcon from '../../components/Icon/Icon';
import { DocotrsData, DoctorsCategoryData } from '../../seeds/Doctors';
import { HomeStackParams } from '../../typings/route';
import DoctorCard from './components/DoctorCard';
import LikeModal from './components/LikeModal';
import { useNavigation } from '@react-navigation/native';

type DoctorCategoryList = {
  key: string;
  label: string;
  backgroundColor: string;
  color: string;
};

export type DoctorCardType = {
  name: string;
  speciality: string;
  hospital: string;
  reviews: number;
  rating: number;
  avatarUrl: any;
};

const TopDoctors = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams, 'topDoctor'>>();

  const [selectedDoctor, setSelectedDoctor] = useState<DoctorCardType>({
    avatarUrl: '',
    hospital: '',
    name: '',
    speciality: '',
    rating: 0,
    reviews: 0,
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const renderDoctorCategory = ({
    item,
    index,
  }: {
    item: DoctorCategoryList;
    index: number;
  }) => {
    return (
      <TouchableOpacity
        key={item.key}
        style={{
          borderWidth: 2,
          borderRadius: 20,
          borderColor: '#286cfc',
          paddingVertical: 7,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: item.color,
          }}>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderDoctorCard = ({
    item,
    index,
  }: {
    item: DoctorCardType;
    index: number;
  }) => {
    const onHeartPress = () => {
      setSelectedDoctor(item);
      setIsModalVisible(true);
    };

    const onPressCard = () => {
      navigation.navigate('UserDetails', { doctorData: item });
    };

    return (
      <DoctorCard
        name={item.name}
        speciality={item.speciality}
        hospital={item.hospital}
        reviews={item.reviews}
        rating={item.rating}
        avatarUrl={item.avatarUrl}
        onHeartPress={onHeartPress}
        onPress={onPressCard}
      />
    );
  };

  return (
    <View style={styles.container1}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 15,
          backgroundColor: '#fff',
          alignItems: 'center',
          gap: 10,
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            gap: 10,
          }}>
          <CustomIcon
            type="AntIcons"
            name="arrowleft"
            color="black"
            style={{ paddingVertical: 10 }}
            onPress={() => navigation.goBack()}
            size={27}
          />
          <Text style={{ color: 'black', fontSize: 23, fontWeight: 'bold' }}>
            Top Doctor
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
          <CustomIcon type="Feather" name="search" color="black" size={27} />
          <CustomIcon
            type="Ionicons"
            name="ellipsis-horizontal-circle"
            color="black"
            size={27}
            style={{ paddingVertical: 10 }}
          />
        </View>
      </View>
      <View>
        <FlatList
          renderItem={renderDoctorCategory}
          horizontal
          data={DoctorsCategoryData}
          keyExtractor={item => item.key}
          contentContainerStyle={{ gap: 10, paddingHorizontal: 10 }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={DocotrsData}
          renderItem={renderDoctorCard}
          keyExtractor={(item, index) => item.name + index}
          style={styles.container}
          contentContainerStyle={{
            gap: 20,
          }}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
        />
      </View>
      <LikeModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        doctorDetails={selectedDoctor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    gap: 20,
  },
  container: {
    backgroundColor: '#f6f6f7',
    paddingVertical: 10,
    paddingHorizontal: 10,
    // backgroundColor: 'red',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
  infoContainer: {
    marginLeft: 16,
    justifyContent: 'center',
    flex: 1,
    gap: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    fontFamily: 'sans-serif',
  },
  hospital: {
    color: 'grey',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  rating: {
    color: 'grey',
  },
  modalInfoContainer: {
    marginLeft: 16,
    justifyContent: 'center',
    flex: 1,
    gap: 10,
  },
});
export default TopDoctors;
