import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  image: {
    marginBottom: 30,
  },
  logo: {
    width: 30,
    height: 30,
  },
  headerText: {
    color: 'black',
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 30,
    fontFamily: 'Sans-Serif',
  },
  socialLoginContainer: {
    width: '80%',
  },
  socialButton: {
    borderColor: 'black',
    borderWidth: 0.1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    flexDirection: 'row',
  },
  facebookButton: {
    backgroundColor: 'white',
  },
  googleButton: {
    backgroundColor: 'white',
  },
  appleButton: {
    backgroundColor: 'white',
  },
  socialButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 15,
  },
  orText: {
    marginVertical: 10,
    fontSize: 14,
    color: '#000',
  },
  passwordButton: {
    width: '80%',
    backgroundColor: '#5677fc',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    height: 50,
    shadowOffset: {
      height: 100,
      width: 10,
    },
    shadowColor: 'black+',
  },

  passwordButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  signUpText: {
    fontSize: 14,
    color: '#000',
    marginRight: 5,
  },
  signUpButton: {
    fontSize: 14,
    color: '#5677fc',
    fontWeight: 'bold',
  },
});
