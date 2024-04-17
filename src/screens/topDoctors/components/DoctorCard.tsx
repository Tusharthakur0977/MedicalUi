import React, { useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ImageSource } from 'react-native-vector-icons/Icon';
import CustomIcon from '../../../components/Icon/Icon';

type DoctorItemProps = {
  name: string;
  hospital: string;
  reviews: number;
  rating: number;
  speciality: string;
  avatarUrl: ImageSource;
  onHeartPress: () => void;
  onPress: () => void;
};

const DoctorCard: React.FC<DoctorItemProps> = ({
  name,
  hospital,
  reviews,
  rating,
  speciality,
  avatarUrl,
  onHeartPress,
  onPress,
}) => {
  const [isHeartPressed, setIsHeartPressed] = useState(false);

  return (
    <Pressable onPress={onPress} style={styles.itemContainer}>
      <Image style={styles.avatar} source={avatarUrl} />
      <View style={styles.infoContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 50,
            backgroundColor: '#fff',
            marginBottom: 10,
            justifyContent: 'space-between',
          }}>
          <Text style={styles.name}>{name}</Text>
          <TouchableOpacity onPress={onHeartPress}>
            <CustomIcon
              type="AntIcons"
              name="hearto"
              size={19}
              color={isHeartPressed ? 'grey' : '#3577FE'}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.hospital}>{speciality}</Text>
          <Text style={styles.hospital}>{hospital}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <CustomIcon
            type="FontAwesome"
            name="star-half-full"
            size={15}
            color="#2A6FFE"
          />
          <Text style={styles.rating}>{rating}</Text>
          <Text style={styles.rating}>({reviews} reviews)</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default DoctorCard;

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
