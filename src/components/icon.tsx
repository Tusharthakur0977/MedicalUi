/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Fullname = () => {
  return (
    <>
      {
        <View
          style={{
            width: 100,
            padding: 16,
            borderRadius: 20,
            marginBottom: 10,
            backgroundColor: '#efeff0',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            height: 60,
          }}>
          <Icon
            name="user"
            color={'grey'}
            size={15}
            style={{marginTop: 6, marginLeft: -2}}
          />
        </View>
      }
    </>
  );
};

export const Nickname = () => {
  return (
    <>
      {
        <View
          style={{
            width: 100,
            padding: 16,
            borderRadius: 20,
            marginBottom: 10,
            backgroundColor: '#efeff0',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            height: 60,
          }}>
          <Icon
            name="user"
            color={'grey'}
            size={15}
            style={{
              marginTop: 6,
              marginLeft: -2,
            }}
          />
        </View>
      }
    </>
  );
};

export const DOB = () => {
  return (
    <>
      {
        <View
          style={{
            width: 100,
            padding: 16,
            borderRadius: 20,
            marginBottom: 10,
            backgroundColor: '#efeff0',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            height: 60,
          }}>
          <Icon
            name="calendar"
            color={'grey'}
            size={15}
            style={{
              marginTop: 6,
              marginLeft: -5,
            }}
          />
        </View>
      }
    </>
  );
};

export const Email = () => {
  return (
    <>
      {
        <View
          style={{
            width: 100,
            padding: 16,
            borderRadius: 20,
            marginBottom: 10,
            backgroundColor: '#efeff0',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            height: 60,
          }}>
          <Icon
            name="envelope-o"
            color={'grey'}
            size={15}
            style={{
              marginTop: 6,
              marginLeft: -6,
            }}
          />
        </View>
      }
    </>
  );
};

export const Gender = () => {
  return (
    <>
      {
        <View
          style={{
            width: 100,
            padding: 16,
            borderRadius: 20,
            marginBottom: 10,
            backgroundColor: '#efeff0',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            height: 60,
          }}>
          <Icon
            name="intersex"
            color={'grey'}
            size={16}
            style={{
              marginTop: 6,
              marginLeft: -3,
            }}
          />
        </View>
      }
    </>
  );
};