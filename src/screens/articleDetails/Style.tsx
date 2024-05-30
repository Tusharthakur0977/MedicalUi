import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  text: {
    color: '#333',
    fontSize: 17,
    paddingHorizontal: 14,
    lineHeight: 24,
    marginBottom: 10,
  },
});
