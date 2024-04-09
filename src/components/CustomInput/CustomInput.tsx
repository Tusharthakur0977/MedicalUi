import React, { FC } from 'react';
import { StyleSheet, TextInput, TextStyle, View, ViewStyle } from 'react-native';
import CustomIcon, { IconTypes } from '../Icon/Icon';

type CustomInputProps = {
mainContStyles?: ViewStyle;
    isLeftIcon?: boolean;
    leftIconName?: string
    leftIconType?: IconTypes;
    leftIconColor?: string;
    leftIconSize?: number;
    leftIconStyle?: ViewStyle;
    leftIconOnPress?: () => void;
    secureTextEntry?: boolean | undefined;
    value?: string;
    placeholder?: string;
    placeholderTextColor?: string;
    onTextChange?: (text: string) => void;
    inputStyle?: ViewStyle | TextStyle;
    isRightIcon?: boolean;    
    rightIconName?: string
    rightIconType?: IconTypes;
    rightIconColor?: string;
    rightIconSize?: number;
    rightIconStyle?: ViewStyle;
    rightIconOnPress?: () => void;
    onKeyDown?: () => void;
    onKeyPress?: () => void;
}

const CustomInput: FC<CustomInputProps> = (props) => {
    const {
        mainContStyles,
        isLeftIcon = false,
        leftIconName,
        leftIconType,
        leftIconColor,
        leftIconSize,
        leftIconStyle,
        // leftIconOnPress,
        value,
        placeholder,
        placeholderTextColor, inputStyle,
        onTextChange,
        isRightIcon = false,
        rightIconName,
        rightIconType,
        rightIconColor,
        rightIconSize,
        rightIconStyle,
        secureTextEntry,
        // rightIconOnPress,
    } = props;
    return (
        <View style={[Styles.maain, mainContStyles]}>
            {isLeftIcon && <CustomIcon
                type={leftIconType!}
                name={leftIconName!}
                color={leftIconColor}
                size={leftIconSize}
                style={leftIconStyle}
            />}
            <TextInput
                placeholder={placeholder}
                style={inputStyle}
                placeholderTextColor={placeholderTextColor}
                onChangeText={onTextChange}
                value={value}
                secureTextEntry={secureTextEntry}
            />
            {isRightIcon && <CustomIcon
                type={rightIconType!}
                name={rightIconName!}
                color={rightIconColor}
                size={rightIconSize}
                style={rightIconStyle}
            />}
        </View>
    );
};

export default CustomInput;

const Styles = StyleSheet.create({
    maain: {
        flexDirection: 'row', alignItems: 'center',
    }
})
