import {
  FlatList,
  Text,
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import list from '../../staticData1';
import cardStyle from '../styles/cardStyle';
import Icon from 'react-native-vector-icons/Ionicons';

function List() {
  return (
    <SafeAreaView style={cardStyle.safeview}>
      <FlatList
        data={list}
        renderItem={({item}) => (
          <View style={cardStyle.flatlist}>
            <Image style={cardStyle.img} source={item.img}></Image>
            <Text style={cardStyle.name}>{item.name}</Text>
            <Text style={cardStyle.price}>{item.price}</Text>
            <View style={cardStyle.viewstar}>
              <Icon name="star" style={cardStyle.star} />
              <Text style={cardStyle.startext}>4.5</Text>
              <TouchableOpacity style={cardStyle.button}>
                <Text style={cardStyle.buttontext}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        numColumns={2}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default List;
