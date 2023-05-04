import {StyleSheet} from 'react-native';
import color from './color';

const cardStyle = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    backgroundColor: color.yellow,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  view: {
    flex: 1,
    backgroundColor: color.White,
  },

  text: {
    fontSize: 30,
    color: color.Black,
    marginTop: '3%',
    fontFamily: 'sans-serif',
    marginLeft: '5%',
  },

  icon: {
    fontSize: 27,
    marginLeft: '5%',
    color: color.darkGrey,
  },
  menu: {
    fontSize: 35,
    marginLeft: '5%',
    color: color.darkGrey,
  },
  bell: {
    fontSize: 27,
    marginLeft: '65%',
    color: color.darkGrey,
  },

  img: {
    width: '100%',
    height: 130,
  },

  search: {
    width: '90%',
    marginLeft: '5%',
    marginTop: '3%',
    backgroundColor: color.White,
    borderRadius: 16,
    borderColor: color.grey,
    borderWidth: 1,
    paddingLeft: '5%',
  },

  flatlist: {
    width: '45%',
    height: 230,
    marginTop: '5%',
    marginLeft: '3%',
    // borderColor: color.Black,
    // borderWidth: 2,
  },
  star: {
    color: color.yellow,
    fontSize: 17,
  },
  viewstar: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '8%',
    marginTop: '3%',
    alignItems: 'center',
  },
  startext: {
    marginLeft: '3%',
    color: color.Black,
  },
  name: {
    fontSize: 20,
    color: color.Black,
    marginLeft: '10%',
    marginTop: '3%',
  },
  price: {
    color: color.Black,
    marginLeft: '10%',
    marginTop: '4%',
    fontSize: 15,
  },
  button: {
    backgroundColor: color.yellow,
    marginLeft: '25%',
    width: '40%',
    height: 25,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1%',
  },
  buttontext: {
    color: color.Black,
    fontSize: 13,
  },
  safeview: {
    height: 620,
  },
});

export default cardStyle;
