import {StyleSheet} from 'react-native';
import color from './color';

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: color.White,
  },
  view: {
    backgroundColor: color.inkblue,
    height: '10%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  img: {
    width: '30%',
    height: '20%',
    marginLeft: '20%',
  },
  block: {
    width: '10%',
    height: '45%',
    marginLeft: '26%',
  },
  lang: {
    fontSize: 20,
    marginLeft: '25%',
    color: color.White,
  },
  bell: {
    fontSize: 20,
    marginLeft: '5%',
    color: color.White,
  },

  arrow: {
    fontSize: 35,
    marginLeft: '2%',
    color: color.darkpink,
  },

  equip: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '4%',
  },
  equitext: {
    fontSize: 30,
    color: color.Black,
    fontFamily: 'Avenir Next',
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginLeft: '20%',
  },
  text: {
    marginLeft: '1%',
    marginTop: '3%',
    fontSize: 15,
    color: color.Black,
    fontWeight: 'bold',
  },

  but: {
    marginTop: '3%',
    marginLeft: '30%',
  },

  button: {
    width: '63%',
    height: '22%',
    backgroundColor: color.inkblue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },

  add: {
    fontSize: 16,
    color: color.White,
    fontWeight: 'bold',
  },
  filter: {
    fontSize: 20,
    color: color.White,
  },
  filtertext: {
    fontSize: 14,
    color: color.White,
    marginLeft: '3%',
  },
  bg: {
    backgroundColor: color.Black,
    width: '25%',
    height: '65%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginLeft: '3%',
  },
  filterview: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '-29%',
  },
  search: {
    width: '65%',
    height: '65%',
    borderColor: color.Gray,
    borderWidth: 1,
    borderRadius: 7,
    marginLeft: '3%',
    color: color.Gray,
    fontSize: 9,
    paddingLeft: '3%',
  },
  iconSe: {
    position: 'absolute',
    left: '61%',
    top: '15%',
    fontSize: 19,
  },

  yellow: {
    backgroundColor: color.golden,
    width: '94%',
    height: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '3%',
  },
  yellowtext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.Black,
  },

  blue: {
    backgroundColor: color.Lightblue,
    width: '94%',
    height: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '3%',
    marginTop: '3%',
  },
});

export default Styles;
