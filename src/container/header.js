import {Image, SafeAreaView, TouchableOpacity} from 'react-native';
import Styles from '../style/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

function Header() {
  return (
    <SafeAreaView style={Styles.view}>
      <TouchableOpacity>
        <Image style={Styles.img} source={require('../assets/Vector.png')} />
      </TouchableOpacity>
      <Image style={Styles.block} source={require('../assets/Artboard.png')} />
      <Icon name="language" style={Styles.lang} />
      <Icons name="bell-badge" style={Styles.bell} />
    </SafeAreaView>
  );
}

export default Header;
