/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IMAGES from '../../assets';
import { RegistrationStackParams } from '../../typings/route';
import { styles } from './Styles';

const Splash = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RegistrationStackParams, 'splash'>
    >();

  const rotateValue = useRef(new Animated.Value(0)).current;

  const startRotating = () => {
    rotateValue.setValue(0);
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  useEffect(() => {
    startRotating();
    setTimeout(() => {
      navigation.replace('FirstPage');
    }, 2000);
  }, []);

  const spin = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <Image source={IMAGES.splashLogo} />
        <Text style={styles.text}>Medica</Text>
      </View>
      <View style={styles.container2}>
        <Animated.View
          style={[styles.loader, { transform: [{ rotate: spin }] }]}>
          {Array.from({ length: 6 }).map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  top: 10,
                  left: 40 + 30 * Math.cos(2 * Math.PI * (index / 6)),
                  top: 40 + 30 * Math.sin(2 * Math.PI * (index / 6)),
                },
              ]}
            />
          ))}
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
