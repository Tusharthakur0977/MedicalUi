import { getPathFromState } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingVertical: 20,
    gap: 20,
  },

  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginTop: -10,
  },
  headcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 20,
  },
  headtext: {
    color: 'black',
    fontSize: 24,
    marginLeft: -4,
    fontWeight: '600',
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  profileImageContainer: {
    width: 155,
    height: 155,
    borderRadius: 77.5,
    backgroundColor: '#E0E0E0',
  },
  profileImage: {
    width: 155,
    height: 155,
    borderRadius: 77.5,
  },
  editIcon: {
    position: 'absolute',
    right: 125,
    bottom: 11,
    width: 40,
    height: 40,
    borderRadius: 15,
    backgroundColor: '#5677fc',
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 10,
  },
  input: {
    width: '90%',
    height: 60,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: '#DDD',
    borderRadius: 20,
    backgroundColor: '#efeff0',
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
    position: 'relative',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});
