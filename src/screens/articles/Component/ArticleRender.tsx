import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  ArticleNewsParamsTypes,
  TrendingArticleParamTypes,
  Data,
} from '../../../seeds/Articles';

export const renderItem = ({ item }: { item: TrendingArticleParamTypes }) => (
  <View
    style={{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      marginHorizontal: 7,
    }}>
    <Image
      source={item.avatarUrl}
      style={{ height: 150, width: 240, borderRadius: 20 }}
    />
    <Text
      numberOfLines={2}
      style={{
        color: 'black',
        textAlign: 'center',
        marginTop: 5,
        width: 240,
        fontSize: 17,
        fontWeight: 'bold',
        padding: 3,
      }}>
      {item.description}
    </Text>
  </View>
);

export const renderArticleNews = ({
  item,
}: {
  item: ArticleNewsParamsTypes;
}) => (
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
    <View
      style={{
        borderWidth: 0,
        justifyContent: 'center',
        flex: 1,
      }}>
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
    </View>
  </View>
);

export const CategoryFlatlist = ({
  selectedCategory,
  setSelectedCategory,
}: any) => (
  <View
    style={{
      alignItems: 'center',
      marginTop: 10,
      justifyContent: 'center',
      width: '100%',
      alignSelf: 'center',
      paddingBottom: 10,
    }}>
    <FlatList
      renderItem={({ item }) => (
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
      )}
      horizontal
      data={Data}
      keyExtractor={item => item.key}
      contentContainerStyle={{ gap: 10, paddingHorizontal: 10 }}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

export const ArticleList = ({ filteredArticles }: any) => (
  <View style={{ flex: 1 }}>
    <FlatList
      data={filteredArticles}
      keyExtractor={item => item.key}
      renderItem={renderArticleNews}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 15, paddingHorizontal: 10 }}
    />
  </View>
);
