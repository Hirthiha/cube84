import {Image, View, Pressable, Text, TextInput} from 'react-native';
import Styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

function Header() {
  return (
    <View style={Styles.container}>
      <View style={Styles.view}>
        <Pressable>
          <Image style={Styles.img} source={require('./Assets/Vector.png')} />
        </Pressable>
        <Image style={Styles.block} source={require('./Assets/Artboard.png')} />
        <Icon name="language" style={Styles.lang} />
        <Icons name="bell-badge" style={Styles.bell} />
      </View>

      <View style={Styles.equip}>
        <Icons name="chevron-left" style={Styles.arrow} />
        <Text style={Styles.equitext}>EQUIPMENT</Text>
        <Text style={Styles.text}>(234)</Text>
      </View>

      <View style={Styles.but}>
        <Pressable style={Styles.button}>
          <Text style={Styles.add}>+ ADD EQUIPMENT</Text>
        </Pressable>
      </View>

      <View style={Styles.filterview}>
        <TextInput
          style={Styles.search}
          placeholder="Search for Equipment #/Name/Type/Category"
        />
        <Icon name="search-outline" style={Styles.iconSe}></Icon>
        <Pressable style={Styles.bg}>
          <Icons name="filter" style={Styles.filter} />
          <Text style={Styles.filtertext}>FILTERS</Text>
        </Pressable>
      </View>

      <Pressable style={Styles.yellow}>
        <Text style={Styles.yellowtext}>CHECK-IN EQUIPMENT</Text>
      </Pressable>

      <Pressable style={Styles.blue}>
        <Text style={Styles.yellowtext}>CHECK-OUT EQUIPMENT</Text>
      </Pressable>
    </View>
  );
}

export default Header;
