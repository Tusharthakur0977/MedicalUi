import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './Styles';
import CustomIcon from '../../components/Icon/Icon';
import { useNavigation } from '@react-navigation/native';
import { BottomTabParams } from '../../typings/route';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  ArticleNews,
  ArticleNewsParamsTypes,
  CategoryDataParamTypes,
  Data,
} from '../../seeds/Articles';

const AllArticles = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<BottomTabParams>>();

  const [selectedCategory, setSelectedCategory] = useState();
  const filteredArticles =
    selectedCategory &&
    selectedCategory !== 'All' &&
    selectedCategory !== 'Newest'
      ? ArticleNews.filter(article => article.label === selectedCategory)
      : ArticleNews;

  const handleCardPress = (article: ArticleNewsParamsTypes) => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: 'none' },
      tabBarVisible: false,
    });
    navigation.navigate('ArticleStack', {
      screen: 'ArtcleDetails',
      params: { article },
    });
  };

  const renderCategory = ({ item }: { item: CategoryDataParamTypes }) => (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{
          borderWidth: 2,
          borderRadius: 20,
          borderColor: '#286cfc',
          paddingVertical: 7,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 15,
        }}
        onPress={() => setSelectedCategory(item.label)}>
        <Text
          style={{
            fontWeight: 'bold',
            color: item.color,
          }}>
          {item.label}
        </Text>
      </TouchableOpacity>
    </View>
  );
  const renderArticleNews = ({ item }: { item: ArticleNewsParamsTypes }) => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 7,
        gap: 10,
      }}>
      <Image
        source={item.image}
        style={{ height: 120, width: 110, borderRadius: 20 }}
      />
      <TouchableOpacity
        style={{
          borderWidth: 0,
          justifyContent: 'center',
          flex: 1,
        }}
        onPress={() => handleCardPress(item)}>
        <Text
          style={{
            color: 'grey',
            marginTop: 5,
            width: 240,
            fontSize: 12,
            fontWeight: 'bold',
          }}>
          {item.date}
        </Text>
        <Text
          numberOfLines={3}
          style={{
            color: 'black',
            marginTop: 5,
            width: 240,
            fontSize: 17,
            fontWeight: 'bold',
            padding: 3,
          }}>
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
          <Text
            style={{
              color: '#246BFD',
              fontWeight: 'bold',
              fontSize: 12,
            }}>
            {item.label}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  const handlePressBack = () => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: 'flex' },
      tabBarVisible: true,
    });
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white', gap: 10 }}>
      <View style={styles.headContainer}>
        <View style={styles.head1}>
          <CustomIcon
            type="AntIcons"
            name="arrowleft"
            color="black"
            size={27}
            onPress={handlePressBack}
          />
          <Text style={styles.headtext}>Articles</Text>
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
      <View
        style={{
          alignItems: 'center',
          marginTop: 10,
          justifyContent: 'center',
          width: '100%',
          alignSelf: 'center',
        }}>
        <FlatList
          data={Data}
          renderItem={renderCategory}
          horizontal
          contentContainerStyle={{ gap: 10, paddingHorizontal: 5 }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={filteredArticles}
          renderItem={renderArticleNews}
          contentContainerStyle={{
            gap: 10,
            paddingHorizontal: 5,
            paddingVertical: 10,
          }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default AllArticles;
