import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Image } from 'react-native';
import CustomIcon from '../../components/Icon/Icon';
import IMAGES from '../../assets';
import { useState } from 'react';
import Modal from 'react-native-modal';
import { RootStackParams } from '../home/typings/route';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type DoctorItemProps = {
  name: string;
  hospital: string;
  reviews: number;
  rating: number;
  speciality: string;
  avatarUrl: any;
};
const DATA = [
  {
    id: '1',
    name: 'Dr. Randy Wigham',
    speciality: 'Cardiologist  |',
    hospital: '  The Valley Hospital',
    reviews: 3576,
    rating: 4.3,
    avatarUrl: IMAGES.randy,
  },
  {
    id: '2',
    name: 'Dr. Jenny Watson  ',
    speciality: 'Immunologist  |',
    hospital: '  Christ Hospital',
    reviews: 3837,
    rating: 4.6,
    avatarUrl: IMAGES.jenny,
  },
  {
    id: '3',
    name: 'Dr. Raul Zirkind     ',
    speciality: 'Neurologist  |',
    hospital: '  Franklin Hospital',
    reviews: 4924,
    rating: 4.4,
    avatarUrl: IMAGES.raul,
  },
  {
    id: '4',
    name: 'Dr. Elijah Baranick ',
    speciality: 'Allergist  |',
    hospital: '  JFK Medical Center',
    reviews: 4924,
    rating: 4.4,
    avatarUrl: IMAGES.elijah,
  },
  {
    id: '5',
    name: 'Dr. Stephan Shute ',
    speciality: 'Cardiologist  |',
    hospital: '  The Valley Hospital',
    reviews: 3279,
    rating: 4.8,
    avatarUrl: IMAGES.travis,
  },
];
const Data = [
  { key: '1', label: 'All', backgroundColor: '#286cfc', color: 'white' },
  { key: '2', label: 'General', backgroundColor: 'white', color: '#286cfc' },
  { key: '3', label: 'Dentist', backgroundColor: 'white', color: '#286cfc' },
  {
    key: '4',
    label: 'Nutritionist',
    backgroundColor: 'white',
    color: '#286cfc',
  },
  {
    key: '5',
    label: 'Neurologist',
    backgroundColor: 'white',
    color: '#286cfc',
  },
  { key: '6', label: 'Pediatric', backgroundColor: 'white', color: '#286cfc' },
  {
    key: '7',
    label: 'Radiologist',
    backgroundColor: 'white',
    color: '#286cfc',
  },
];
const DoctorItem: React.FC<DoctorItemProps> = ({
  name,
  hospital,
  reviews,
  rating,
  speciality,
  avatarUrl,
}) => {
  const [isHeartPressed, setIsHeartPressed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.itemContainer}>
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
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <CustomIcon
              type='AntIcons'
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
      <Modal
        isVisible={modalVisible}
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
                onPress={() => setModalVisible(false)}
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
                  setIsHeartPressed(true);
                  setModalVisible(false);
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
                <Text
                  style={{ color: '#fff', fontSize: 13, fontWeight: 'bold' }}>
                  Yes, Remove
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
type SplashProps = NativeStackScreenProps<RootStackParams>;

const TopDoctors: React.FC<SplashProps> = ({ navigation }) => {
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
          renderItem={({ item }) => (
            <TouchableOpacity
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
          )}
          horizontal
          data={Data}
          keyExtractor={item => item.key}
          contentContainerStyle={{ gap: 10, paddingHorizontal: 10 }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <DoctorItem
              name={item.name}
              speciality={item.speciality}
              hospital={item.hospital}
              reviews={item.reviews}
              rating={item.rating}
              avatarUrl={item.avatarUrl}
            />
          )}
          keyExtractor={item => item.id}
          style={styles.container}
          contentContainerStyle={{
            gap: 20,
          }}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
        />
      </View>
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
    paddingHorizontal: 20,
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