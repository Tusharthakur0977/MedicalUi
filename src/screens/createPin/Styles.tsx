/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const COLORS = {
  white: '#ffffff',
  black: '#000',
  Grey: '#9DA3AF',
  lightGrey: '#EDEDED',
  primaryGreen: '#147b72',
  blue: '#5396FF',
  lightBlue: '#EAF0FC',
  red: '#FF6853',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 50,
  },
  arrow: {
    paddingRight: 20,
  },
  headcontainer: {
    flexDirection: 'row',
    paddingBottom: 25,
    marginLeft: 20,
  },
  headtext: {
    color: 'black',
    fontSize: 24,
    fontWeight: '800',
  },
  title: {
    color: 'black',
    textAlign: 'center',
    marginTop: 100,
    fontSize: 20,
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 2,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 20,
    marginTop: 100,
  },
  input: {
    flex: 1,
    color: 'black',
    padding: 16,
    borderRadius: 20,
    marginBottom: 16,
    backgroundColor: '#efeff0',
    height: 80,
    width: 350,
    margin: 10,
    fontSize: 45,
    textAlign: 'center',
    borderWidth: 2,
    borderColor:'transparent',
  },
  button: {
    backgroundColor: '#5677fc',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});


