import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 1,
  },
  head1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'flex-start',
    padding: 20,
  },
  logo: {
    height: 40,
    width: 40,
  },
  head2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'flex-end',
    padding: 15,
  },

  headtext: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
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
    width: 40,
    height: 43,
    borderRadius: 15,
    backgroundColor: '#246BFE',
    justifyContent: 'center',
    alignItems: 'center',
    left: 55,
    bottom: 45,
  },
  name: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    bottom: 30,
  },
  number: {
    color: 'black',
    fontWeight: 'bold',
    bottom: 35,
  },
  functionContainer: {
    flex: 1,
    paddingHorizontal: 15,
    gap: 22,
  },
  Text: {
    color: 'black',
    fontSize: 19,
    fontWeight: '700',
    fontFamily: 'Inter, sans-serif',
  },
  logOutText: {
    color: 'red',
    fontSize: 19,
    fontWeight: '700',
    fontFamily: 'Inter, sans-serif',
  },
  language: {
    color: 'black',
    fontSize: 19,
    fontWeight: 'bold',
    paddingLeft: 80,
  },
});
