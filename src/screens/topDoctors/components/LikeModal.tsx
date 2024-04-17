import React, { Dispatch, FC, SetStateAction } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import CustomIcon from '../../../components/Icon/Icon';
import { DoctorCardType } from '../TopDoctors';

type LikeModalProps = {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  doctorDetails: DoctorCardType;
};

const LikeModal: FC<LikeModalProps> = ({
  isModalVisible,
  setIsModalVisible,
  doctorDetails,
}) => {
  const { name, avatarUrl, hospital, rating, reviews, speciality } =
    doctorDetails;
  return (
    <Modal
      isVisible={isModalVisible}
      onBackButtonPress={() => setIsModalVisible(false)}
      style={{ margin: 0, justifyContent: 'flex-end' }}>
      <View
        style={{
          padding: 20,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          alignItems: 'center',
          height: '40%',
          backgroundColor: '#f6f6f7',
          gap: 50,
        }}>
        <Text style={{ color: 'black', fontWeight: '800', fontSize: 23 }}>
          Remove from Favourites?
        </Text>
        <View style={{ gap: 10 }}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
              borderRadius: 30,
              backgroundColor: '#fff',
              elevation: 5,
              height: 130,
              alignItems: 'center',
            }}>
            <Image style={styles.avatar} source={avatarUrl} />
            <View style={styles.modalInfoContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 70,
                  backgroundColor: '#fff',
                  marginBottom: 10,
                }}>
                <Text style={styles.name}>{name}</Text>
                <CustomIcon
                  type="Octicons"
                  name="heart-fill"
                  size={19}
                  color={'#3577FE'}
                />
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
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 20,
              paddingBottom: 20,
              justifyContent: 'space-evenly',
              width: '100%',
            }}>
            <Pressable
              onPress={() => setIsModalVisible(false)}
              style={{
                backgroundColor: '#E7EEFF',
                borderRadius: 30,
                paddingVertical: 20,
                paddingHorizontal: 70,
                shadowColor: '#000',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#246BFD',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                Cancel
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setIsModalVisible(false);
              }}
              style={{
                backgroundColor: '#246BFD',
                borderRadius: 30,
                paddingVertical: 18,
                paddingHorizontal: 50,
                elevation: 5,
                shadowColor: '#246BFD',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                alignItems: 'center',
              }}>
              <Text style={{ color: '#fff', fontSize: 13, fontWeight: 'bold' }}>
                Yes, Remove
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LikeModal;

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
