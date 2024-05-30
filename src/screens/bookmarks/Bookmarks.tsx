import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import CustomIcon from '../../components/Icon/Icon';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabParams } from '../../typings/route';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ArticleNewsTypes } from '../../redux/slices/BookmarkSlice';

const Bookmarks = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<BottomTabParams>>();
  const bookmarkItems = useSelector((state: RootState) => state.bookmark);

  const handlePressBack = () => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: 'flex' },
      tabBarVisible: true,
    });
    navigation.goBack();
  };

  const renderItem = ({ item }: { item: ArticleNewsTypes }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemContent}>
        <Text style={styles.itemDate}>{item.date}</Text>
        <Text numberOfLines={3} style={styles.itemDescription}>
          {item.description}
        </Text>
        <View
          style={{
            backgroundColor: '#EEF4FF',
            width: 60,
            alignItems: 'center',
            padding: 3,
            borderRadius: 6,
          }}>
          <Text style={{ color: '#246BFD', fontWeight: 'bold', fontSize: 12 }}>
            {item.label}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <View style={styles.head1}>
          <CustomIcon
            type="AntIcons"
            name="arrowleft"
            color="black"
            size={27}
            onPress={handlePressBack}
          />
          <Text style={styles.headtext}>My Bookmark</Text>
        </View>
        <View style={styles.head2}>
          <CustomIcon type="Feather" name="search" color="black" size={27} />
          <CustomIcon
            type="Ionicons"
            name="ellipsis-horizontal-circle-outline"
            color="black"
            size={27}
          />
        </View>
      </View>
      {bookmarkItems.length ? (
        <FlatList
          data={bookmarkItems}
          renderItem={renderItem}
          keyExtractor={item => item.key}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <Text style={styles.noDataText}>No Data Found</Text>
      )}
    </View>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  headContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  head1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  head2: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headtext: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  listContent: {
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    gap: 10,
  },
  itemImage: {
    width: 120,
    height: 125,
    borderRadius: 30,
  },
  itemContent: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
    gap: 10,
  },
  itemDescription: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDate: {
    color: 'grey',
    marginTop: 5,
  },
  noDataText: {
    color: 'grey',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
