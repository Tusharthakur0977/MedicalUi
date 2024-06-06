import { Text, TouchableOpacity, TextInput, View } from 'react-native';
import React, { useState, useRef } from 'react';

const OtpVerification = () => {
  const [seconds, setSeconds] = useState(120);
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');
  const [inputSeconds, setInputSeconds] = useState('0');
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    const totalSeconds =
      parseInt(hours, 10) * 3600 +
      parseInt(minutes, 10) * 60 +
      parseInt(inputSeconds, 10);
    setSeconds(totalSeconds);
    setIsRunning(false);
  };

  const handleSetTime = () => {
    const totalSeconds =
      parseInt(hours, 10) * 3600 +
      parseInt(minutes, 10) * 60 +
      parseInt(inputSeconds, 10);
    if (!isNaN(totalSeconds) && totalSeconds >= 0) {
      setSeconds(totalSeconds);
    }
  };

  const formatTime = () => {
    let remainingSeconds = seconds;
    const getHours = `0${Math.floor(remainingSeconds / 3600)}`.slice(-2);
    remainingSeconds %= 3600;
    const getMinutes = `0${Math.floor(remainingSeconds / 60)}`.slice(-2);
    const getSeconds = `0${remainingSeconds % 60}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <View
      style={{ flex: 1, alignItems: 'center', paddingVertical: 40, gap: 20 }}>
      <Text style={{ color: 'black', fontSize: 30 }}>Countdown Timer</Text>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            width: 70,
            textAlign: 'center',
            marginHorizontal: 5,
            color: 'black',
          }}
          keyboardType="numeric"
          onChangeText={setHours}
          value={hours}
          placeholder="HH"
          placeholderTextColor={'black'}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            width: 70,
            textAlign: 'center',
            marginHorizontal: 5,
            color: 'black',
          }}
          keyboardType="numeric"
          onChangeText={setMinutes}
          value={minutes}
          placeholder="MM"
          placeholderTextColor={'black'}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            width: 70,
            textAlign: 'center',
            marginHorizontal: 5,
            color: 'black',
          }}
          keyboardType="numeric"
          onChangeText={setInputSeconds}
          value={inputSeconds}
          placeholder="SS"
          placeholderTextColor={'black'}
        />
      </View>
      <TouchableOpacity
        onPress={handleSetTime}
        style={{
          padding: 15,
          marginVertical: 10,
          backgroundColor: '#7284C1',
          borderRadius: 10,
        }}>
        <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#FFFFFF' }}>
          Edit Time
        </Text>
      </TouchableOpacity>
      <Text style={{ color: 'black', fontSize: 40 }}>{formatTime()}</Text>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <TouchableOpacity
          style={{
            padding: 20,
            borderRadius: 35,
            backgroundColor: isRunning ? '#F05D5E' : '#17A69D',
          }}
          onPress={toggleTimer}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
            {isRunning ? 'Pause' : 'Start'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 20,
            borderRadius: 35,
            borderWidth: 1,
            borderColor: '#ABABAB',
          }}
          onPress={resetTimer}
          disabled={isRunning ? true : false}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#ABABAB' }}>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default OtpVerification;
