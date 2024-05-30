import { Text, View, Image, ScrollView, Share } from 'react-native';
import React from 'react';
import { styles } from './Style';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ArticleNewsParamsTypes } from '../../seeds/Articles';
import CustomIcon from '../../components/Icon/Icon';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabParams } from '../../typings/route';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import {
  addToBookmark,
  ArticleNewsTypes,
} from '../../redux/slices/BookmarkSlice';
import Snackbar from 'react-native-snackbar';

const ArticleDetails = () => {
  const navigation = useNavigation<NativeStackNavigationProp<BottomTabParams>>();
  const dispatch = useDispatch();
  const bookmarkItems = useSelector((state: RootState) => state.bookmark);

  const handleAddToBkMark = (item: ArticleNewsTypes) => {
    const isAlreadyAdded = bookmarkItems.some(bookmarkItem => bookmarkItem.key === item.key);
    if (!isAlreadyAdded) {
      dispatch(addToBookmark(item));
      Snackbar.show({
        text: 'Added to favorites',
        textColor: '#fff',
      });
    } else {
      Snackbar.show({
        text: 'Item Already Added',
        textColor: 'red',
      });
    }
  };

  const route = useRoute();
  const { article } = route.params as { article: ArticleNewsParamsTypes };

  const handlePressBack = () => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: 'flex' },
      tabBarVisible: true,
    });
    navigation.goBack();
  };

  const shareData = async () => {
    try {
      const message = `Check out this article: ${article.description}\n\nDate: ${article.date}\nLabel: ${article.label}\n\nRead more...`;
      await Share.share({ message });
    } catch (error) {
      console.log('Error sharing article:', error);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white', gap: 10, alignItems: 'center' }}>
      <View style={styles.headContainer}>
        <View style={styles.head1}>
          <CustomIcon
            type="AntIcons"
            name="arrowleft"
            color="black"
            size={27}
            onPress={handlePressBack}
          />
        </View>
        <View style={styles.head2}>
          <CustomIcon
            type="Feather"
            name="bookmark"
            color="black"
            size={27}
            style={{ paddingVertical: 10 }}
            onPress={() => handleAddToBkMark(article)}
          />
          <CustomIcon
            type="Ionicons"
            name="paper-plane-outline"
            color="black"
            size={27}
            onPress={shareData}
          />
          <CustomIcon
            type="Ionicons"
            name="ellipsis-horizontal-circle-outline"
            color="black"
            size={27}
          />
        </View>
      </View>
      <View style={{ width: '90%', alignItems: 'center', gap: 15 }}>
        <Image
          source={article.image}
          style={{ height: 250, width: '100%', borderRadius: 30 }}
        />
        <Text numberOfLines={3} style={{ color: 'black', fontSize: 23, fontWeight: 'bold' }}>
          {article.description}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', gap: 10, marginBottom: 10 }}>
          <Text style={{ color: 'grey' }}>{article.date}</Text>
          <View style={{ backgroundColor: '#EEF4FF', width: 60, alignItems: 'center', padding: 3, borderRadius: 6 }}>
            <Text style={{ color: '#246BFD', fontWeight: 'bold', fontSize: 12 }}>
              {article.label}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ height: 1, backgroundColor: '#EEEEEF', width: '90%' }} />
      <ScrollView style={styles.container}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non beatae nulla totam? Ipsum rem animi corrupti assumenda a officia porro earum iure officiis soluta, sit quae minus alias, libero odio.
        </Text>
        <Text style={styles.text}>
          Curabitur vel eros nec magna suscipit cursus. Vivamus efficitur velit eu justo tristique, a convallis ligula vulputate. Nunc tincidunt, nisi sit amet venenatis tristique, arcu mauris sollicitudin odio, non gravida libero metus et nisi. Nulla facilisi. Suspendisse potenti. Proin ut orci id mauris
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non beatae iure officiis soluta, sit quae minus alias, libero odio.
        </Text>
      </ScrollView>
    </View>
  );
};

export default ArticleDetails;
