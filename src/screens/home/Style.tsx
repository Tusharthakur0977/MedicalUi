import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 10,
  },
  headContainer: {
    width: wp(100),
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    flex: 1,
    padding: 20,
  },
  profileimage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'red',
  },
  greetingText: {
    fontSize: 16,
    color: '#000',
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  headerIconCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 10,
  },
  searchBar: {
    borderColor: '#ddd',
    backgroundColor: '#ededed',
    width: '90%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 10,
  },
  mainBanner: {
    width: '90%',
    height: 200,
  },
  specialityView: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
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
  topDoctors: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  topdocTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  seeAll: {
    fontSize: 16,
    color: '#5677fc',
    fontWeight: 'bold',
  },
});