import { FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { TrendingArticles, ArticleNews } from '../../seeds/Articles';
import styles from './Styles';
import CustomIcon from '../../components/Icon/Icon';
import IMAGES from '../../assets';
import {
  CategoryFlatlist,
  renderItem,
  ArticleList,
} from './Component/ArticleRender';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabParams } from '../../typings/route';

const Article = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<BottomTabParams>>();

  const [selectedCategory, setSelectedCategory] = useState(null);
  // const dispatch = useDispatch();
  // const bookmarkItem = useSelector((state: RootState) => state.bookmark);

  // const handleAddToBkMark = (item: ArticleNewsTypes) => {
  //   const isAlreadyAdded = bookmarkItem.some(
  //     bookmarkItem => bookmarkItem.key === item.key,
  //   );
  //   if (!isAlreadyAdded) {
  //     dispatch(addToBookmark(item));
  //     Snackbar.show({
  //       text: 'Added to favorites',
  //       textColor: '#fff',
  //     });
  //   } else {
  //     Snackbar.show({
  //       text: 'Item Already Added',
  //       textColor: 'red',
  //     });
  //   }
  // };

  const filteredArticles =
    selectedCategory && selectedCategory !== 'All'
      ? ArticleNews.filter(article => article.label === selectedCategory)
      : ArticleNews;

  const handleSeeAllPress = () => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: 'none' },
      tabBarVisible: false,
    });
    navigation.navigate('ArticleStack', { screen: 'AllArticles' });
  };
  const handleBookmarkPress = () => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: 'none' },
      tabBarVisible: false,
    });
    navigation.navigate('ArticleStack', { screen: 'Bookmarks' });
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.headContainer}>
        <View style={styles.head1}>
          <Image source={IMAGES.signupInLogo} style={styles.logo} />
          <Text style={styles.headtext}>Articles</Text>
        </View>
        <View style={styles.head2}>
          <CustomIcon
            type="Feather"
            name="search"
            color="black"
            size={27}
            style={{ paddingVertical: 10 }}
          />
          <CustomIcon
            type="Feather"
            name="bookmark"
            color="black"
            size={27}
            style={{ paddingVertical: 10 }}
            onPress={handleBookmarkPress}
          />
        </View>
      </View>
      <View style={styles.specialityView}>
        <Text style={styles.sectionTitle}>Trending</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: 10 }}>
        <FlatList
          data={TrendingArticles}
          renderItem={renderItem}
          keyExtractor={index => index.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        />
      </View>
      <View style={styles.specialityView}>
        <Text style={styles.sectionTitle}>Articles</Text>
        <TouchableOpacity onPress={handleSeeAllPress}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <CategoryFlatlist
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ArticleList filteredArticles={filteredArticles} />
    </View>
  );
};

export default Article;
