import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 50,
  },
  arrow: {
    paddingRight: 20,
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft:25,
    marginTop: -10
  },
  headcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 45,
    marginLeft: 20,
    marginTop: -7
  },
  headtext: {
    color: 'black',
    fontSize: 24,
    marginLeft: -4,
    fontWeight: '600'
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 30,
  },
  profileImage: {
    width: 155,
    height: 155,
    borderRadius: 77.5,
    backgroundColor: '#E0E0E0',
  },
  editIcon: {
    position: 'absolute',
    right: 140,
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
    gap:10
  },
  input: {
    width: '90%',
    height: 65,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: '#DDD',
    borderRadius: 20,
    backgroundColor: '#efeff0',
    gap: 10
  },
  button: {
    backgroundColor: '#5677fc',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
  lefticon: {},
  iconcont: {

  }
});
