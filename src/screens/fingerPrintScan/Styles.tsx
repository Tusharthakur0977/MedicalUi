import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
  },
  image: {
    height: 250,
    width: 200,
  },
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
  fingerprint: {
    marginLeft: 90,
    marginTop: 90,
    color: '#407df7',
  },
  title: {
    color: 'black',
    textAlign: 'center',
    marginTop: 80,
    fontSize: 20,
    paddingHorizontal: 10,
  },
  buttoncontainer: {
    flexDirection: 'row',
    marginLeft: -19,
    width: 10,
  },
  button1: {
    backgroundColor: '#becff7',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 70,
    width: 156,
  },
  button2: {
    backgroundColor: '#5677fc',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 20,
    width: 156,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    height: 60,
  },
  buttonText1: {
    color: '#407df7',
    fontSize: 18,
    fontWeight: '900',
  },
  buttonText2: {
    color: '#ddd',
    fontSize: 18,
    fontWeight: '900',
  },
  footer: {
    color: 'black',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 40,
    fontSize: 20,
    paddingHorizontal: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    marginHorizontal: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: '#5677fc',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#5677fc',
    fontSize: 25,
    fontWeight: '700',
  },
  bodytext: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
  },
  loader: {
    marginTop: 20,
  },
});
