import {Image, View, Pressable, SafeAreaView} from 'react-native';
import Styles from '../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Section from './Seaction';

function Header() {
  return (
    <SafeAreaView style={Styles.view}>
      <Pressable>
        <Image style={Styles.img} source={require('../Assets/Vector.png')} />
      </Pressable>
      <Image style={Styles.block} source={require('../Assets/Artboard.png')} />
      <Icon name="language" style={Styles.lang} />
      <Icons name="bell-badge" style={Styles.bell} />
    </SafeAreaView>
  );
}

export default Header;
