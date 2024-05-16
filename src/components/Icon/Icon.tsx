import React, { FC } from 'react';
import { GestureResponderEvent, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import AntIcons from 'react-native-vector-icons/AntDesign';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const iconSet = {
  FontAwesome,
  MaterialIcons,
  AntIcons,
  EntypoIcons,
  EvilIcons,
  Feather,
  Foundation,
  FontAwesome5,
  Ionicons,
  Octicons,
  MaterialCommunityIcons,
};

export type IconTypes = keyof typeof iconSet;

type IconProps = {
    name: string;
    type: IconTypes;
    size?: number;
    color?: string;
    style?: ViewStyle | TextStyle;
    onPress?: ((event: GestureResponderEvent) => void) | undefined | string;
};

const CustomIcon: FC<IconProps> = ({ type, name, size = 24, color = 'gray', style, onPress }) => {
    const IconComponent = iconSet[type];
    // Check if the icon component exists to avoid runtime errors
    if (!IconComponent) {
        console.warn(`Icon type '${type}' not supported.`);
        return null;
    }
    return onPress ? (
        <TouchableOpacity onPress={onPress} style={style}>
            <IconComponent name={name} size={size} color={color} />
        </TouchableOpacity>
    ) : (
        <IconComponent name={name} size={size} color={color} style={style} />
    );
};

export default CustomIcon;
