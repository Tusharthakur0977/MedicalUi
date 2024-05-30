import {
  Image,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './Profile.style';
import IMAGES from '../../assets';
import CustomIcon from '../../components/Icon/Icon';
import { openImagePicker } from '../../components/ImagePicker';

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <View style={styles.head1}>
          <Image source={IMAGES.signupInLogo} style={styles.logo} />
          <Text style={styles.headtext}>Profile</Text>
        </View>
        <View style={styles.head2}>
          <CustomIcon
            type="Ionicons"
            name="ellipsis-horizontal-circle"
            color="black"
            size={27}
            style={{ paddingVertical: 10 }}
          />
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.profileImageContainer}>
          {selectedImage && (
            <Image
              source={{ uri: selectedImage }}
              style={styles.profileImage}
            />
          )}
        </View>
        <TouchableOpacity
          style={styles.editIcon}
          onPress={() => openImagePicker(setSelectedImage)}>
          <CustomIcon type="FontAwesome" name="pencil" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.name}>Andrew Ainsley</Text>
        <Text style={styles.number}>+1 111 467 378 399</Text>
      </View>

      <View style={styles.functionContainer}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
            <CustomIcon
              name="user"
              color={'black'}
              size={25}
              type={'Feather'}
            />
            <Text style={styles.Text}>Edit Profile</Text>
          </View>
          <CustomIcon
            name="right"
            color={'black'}
            size={20}
            type={'AntIcons'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
            <CustomIcon
              name="bell"
              color={'black'}
              size={25}
              type={'Feather'}
            />
            <Text style={styles.Text}>Notification</Text>
          </View>
          <CustomIcon
            name="right"
            color={'black'}
            size={20}
            type={'AntIcons'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
            <CustomIcon
              name="wallet-outline"
              color={'black'}
              size={25}
              type={'Ionicons'}
            />
            <Text style={styles.Text}>Payment</Text>
          </View>
          <CustomIcon
            name="right"
            color={'black'}
            size={20}
            type={'AntIcons'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
            <CustomIcon
              name="shield-check"
              color={'black'}
              size={25}
              type={'Octicons'}
            />
            <Text style={styles.Text}>Security</Text>
          </View>
          <CustomIcon
            name="right"
            color={'black'}
            size={20}
            type={'AntIcons'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
            <CustomIcon
              name="language"
              color={'black'}
              size={25}
              type={'Ionicons'}
            />
            <Text style={styles.Text}>Language</Text>
          </View>
          <Text style={styles.language}>English (US)</Text>
          <CustomIcon
            name="right"
            color={'black'}
            size={20}
            type={'AntIcons'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
            <CustomIcon
              name="eyeo"
              color={'black'}
              size={25}
              type={'AntIcons'}
            />
            <Text style={styles.Text}>Dark Mode</Text>
          </View>
          <Switch
            trackColor={{ false: '#EEEEEE', true: '#246BFE' }}
            thumbColor={isEnabled ? '#fff' : '#fff'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
            <CustomIcon
              name="exclamationcircleo"
              color={'black'}
              size={25}
              type={'AntIcons'}
            />
            <Text style={styles.Text}>Help Center</Text>
          </View>
          <CustomIcon
            name="right"
            color={'black'}
            size={20}
            type={'AntIcons'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
            <CustomIcon
              name="users"
              color={'black'}
              size={25}
              type={'Feather'}
            />
            <Text style={styles.Text}>Invite Friends</Text>
          </View>
          <CustomIcon
            name="right"
            color={'black'}
            size={20}
            type={'AntIcons'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
            <CustomIcon
              name="logout"
              color={'red'}
              size={25}
              type={'MaterialIcons'}
            />
            <Text style={styles.logOutText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
