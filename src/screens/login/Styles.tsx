import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingTop: 60,
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    alignSelf: 'flex-start',
    margin: 10,
    marginTop: -40,
  },
  headcontainer: {
    flexDirection: 'row',
    paddingBottom: 25,
    marginLeft: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 8,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#5677fc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    borderWidth: 0,
    backgroundColor: '#5677fc',
  },
  checkmark: {
    color: '#fff',
  },
  label: {
    fontSize: 15,
    color: 'black',
  },
  logo1: {
    width: 130,
    height: 130,
    marginBottom: 24,
    marginRight: 10,
  },
  logo: {
    width: 30,
    height: 30,
  },
  header: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 24,
    color: 'black',
  },
  inputcontainer: {
    gap: 15
  },
  input: {
    color: 'black',
    width: '90%',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: '#DDD',
    borderRadius: 20,
    backgroundColor: '#efeff0',
    gap: 5
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 20,
  },
  checkboxLabel: {
    fontSize: 16,
    color: 'black',
  },
  button: {
    width: '80%',
    backgroundColor: '#5677fc',
    padding: 16,
    borderRadius: 27,
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  orText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 16,
  },
  forgot: {
    fontSize: 16,
    color: '#5677fc',
    marginBottom: 16,
    fontWeight: '600'
    
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    marginBottom: 24,
    justifyContent: 'space-between',
  },
  socialButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'white',
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#000',
    padding: 5,
  },
  signinText: {
    fontSize: 16,
    color: '#5677fc',
    fontWeight: '600',
  },
});
