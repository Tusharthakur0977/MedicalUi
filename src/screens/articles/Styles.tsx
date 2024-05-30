import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  specialityView: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  seeAllText: {
    fontSize: 16,
    color: '#5677fc',
    fontWeight: 'bold',
  },
});

export default styles;
