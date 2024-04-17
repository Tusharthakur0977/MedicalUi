import React from 'react'
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import IMAGES from '../../assets'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomIcon from '../../components/Icon/Icon'
import { styles } from './Style'
import Slick from 'react-native-slick'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../typings/route';
import { NavigationContainer } from '@react-navigation/native';

type SplashProps = NativeStackScreenProps<RootStackParams>;

const data = [
  { key: '1', name: 'General', icon: IMAGES.general },
  { key: '2', name: 'Dentist', icon: IMAGES.dentist },
  { key: '3', name: 'Ophthal..', icon: IMAGES.ophithal },
  { key: '4', name: 'Nutrition..', icon: IMAGES.nutrition },
  { key: '5', name: 'Neurolo..', icon: IMAGES.neurologist },
  { key: '6', name: 'Pediatric', icon: IMAGES.pediatric },
  { key: '7', name: 'Radiolo..', icon: IMAGES.radiologic },
  { key: '8', name: 'More', icon: IMAGES.more },
];
const Data = [
  { key: '1', label: 'All', backgroundColor: '#286cfc', color: 'white' },
  { key: '2', label: 'General', backgroundColor: 'white', color: '#286cfc' },
  { key: '3', label: 'Dentist', backgroundColor: 'white', color: '#286cfc' },
  { key: '4', label: 'Nutritionist', backgroundColor: 'white', color: '#286cfc' },
  { key: '5', label: 'Neurologist', backgroundColor: 'white', color: '#286cfc' },
  { key: '6', label: 'Pediatric', backgroundColor: 'white', color: '#286cfc' },
  { key: '7', label: 'Radiologist', backgroundColor: 'white', color: '#286cfc' },
];

const Home: React.FC<SplashProps> = ({ navigation }) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View style={styles.headContainer}>
        <View style={styles.profileimage}>
          <Image source={IMAGES.profile} style={styles.profileimage} />
        </View>
        <View style={styles.header}>
          <Text style={styles.greetingText}>Good Morning 👋</Text>
          <Text style={styles.userName}>Andrew Ainsley</Text>
        </View>
        <View style={styles.headerIconCont}>
          <CustomIcon
            type="Feather"
            name="bell"
            onPress={() => navigation.navigate('Notifications')}
          />
          <CustomIcon
            type="Feather"
            name="heart"
            onPress={() => navigation.navigate('Favourites')}
          />
        </View>
      </View>
      <CustomInput
        mainContStyles={styles.searchBar}
        placeholder="Search"
        placeholderTextColor="grey"
        inputStyle={{ flex: 1, color: 'black' }}
        isLeftIcon
        leftIconType="Feather"
        leftIconName="search"
        isRightIcon
        rightIconType="MaterialIcons"
        rightIconName="filter-list"
        rightIconColor="#286cfc"
      />
      <Slick
        style={{
          height: 200,
          marginHorizontal: 20,
        }}
        showsButtons={false}
        loop={true}
        autoplay
        activeDotStyle={{ backgroundColor: 'blue' }}
        dotColor="wheat"
        autoplayTimeout={2.5}>
        <Image
          source={IMAGES.home}
          style={styles.mainBanner}
          resizeMode="stretch"
        />
        <Image
          source={IMAGES.home}
          style={styles.mainBanner}
          resizeMode="stretch"
        />
        <Image
          source={IMAGES.home}
          style={styles.mainBanner}
          resizeMode="stretch"
        />
        <Image
          source={IMAGES.home}
          style={styles.mainBanner}
          resizeMode="stretch"
        />
        <Image
          source={IMAGES.home}
          style={styles.mainBanner}
          resizeMode="stretch"
        />
      </Slick>
      <View style={{ flex: 1 }}>
        <View style={styles.specialityView}>
          <Text style={styles.sectionTitle}>Doctor Speciality</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 8,
                width: '20%',
              }}>
              <Image
                source={item.icon}
                style={{
                  width: 60,
                  height: 60,
                }}
              />
              <Text
                style={{
                  fontSize: 14,
                  textAlign: 'center',
                  color: 'black',
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          numColumns={4}
          keyExtractor={item => item.key}
          contentContainerStyle={{
            alignItems: 'center',
            gap: 10,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'column',
          borderWidth: 0,
          width: '100%',
          alignItems: 'center',
          gap: 15,
        }}>
        <View style={styles.topDoctors}>
          <Text style={styles.topdocTitle}>Top Doctors</Text>
          <TouchableOpacity onPress={() => navigation.navigate('TopDoctors')}>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 10,
            justifyContent: 'center',
            width: '100%',
            alignSelf: 'center',
          }}>
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
      </View>
    </ScrollView>
  );
}
export default Home