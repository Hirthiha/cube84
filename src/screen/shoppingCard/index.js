import {Text, View, TextInput} from 'react-native';
import cardStyle from '../styles/cardStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Feather';
import List from './list';
import color from '../styles/color';

function Home() {
  return (
    <View style={cardStyle.view}>
      <View style={cardStyle.container}>
        <Icon name="menu" style={cardStyle.menu} />
        <Icons name="bell" style={cardStyle.bell} />
        <Icons name="shopping-bag" style={cardStyle.icon} />
      </View>
      <Text style={cardStyle.text}>Welcome</Text>
      <TextInput
        style={cardStyle.search}
        placeholder="Search"
        placeholderTextColor={color.Black}
      />
      <List></List>
    </View>
  );
}

export default Home;
