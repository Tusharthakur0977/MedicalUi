import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    backgroundColor: '#fff',
  },
  notificationItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: 'white',
    padding: 16,
    gap: 10,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  icon: {
    width: 60,
    height: 60,
  },
  textContainer: {
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  description: {
    fontSize: 15,
    color: '#666',
    marginTop: 4,
    paddingHorizontal: 5,
  },
});
