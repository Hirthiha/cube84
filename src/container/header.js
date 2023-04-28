import {Image, SafeAreaView, TouchableOpacity} from 'react-native';
import Styles from '../styles/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import image from '../asset/image';

function Header() {
  return (
    <SafeAreaView style={Styles.view}>
      <TouchableOpacity>
        <Image style={Styles.img} source={image.vector} />
      </TouchableOpacity>
      <Image style={Styles.block} source={image.artboard} />
      <Icon name="language" style={Styles.lang} />
      <Icons name="bell-badge" style={Styles.bell} />
    </SafeAreaView>
  );
}

export default Header;
