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
    height: 80,
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
    fontFamily: 'serif',
    fontWeight: 'bold',
    marginLeft: '17%',
  },
  text: {
    marginLeft: '1%',
    marginTop: '3%',
    fontSize: 15,
    color: color.Black,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },

  but: {
    marginTop: '3%',
    marginLeft: '30%',
  },

  button: {
    width: '63%',
    padding: '3%',
    backgroundColor: color.inkblue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },

  add: {
    fontSize: 16,
    color: color.White,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  filter: {
    fontSize: 20,
    color: color.White,
  },
  filtertext: {
    fontSize: 14,
    color: color.White,
    marginLeft: '3%',
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  bg: {
    backgroundColor: color.Black,
    width: '25%',
    height: '68%',
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
    marginTop: '4%',
  },
  search: {
    width: '65%',
    height: '70%',
    borderColor: color.Gray,
    borderWidth: 1,
    borderRadius: 7,
    marginLeft: '3%',
    color: color.Gray,
    fontSize: 9,
    paddingLeft: '3%',
    fontFamily: 'serif',
  },
  iconSe: {
    position: 'absolute',
    left: '60%',
    top: '15%',
    fontSize: 19,
  },

  yellow: {
    backgroundColor: color.golden,
    width: '94%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '3%',
    borderRadius: 7,
  },
  yellowtext: {
    fontSize: 22,
    fontWeight: 'bold',
    color: color.Black,
    fontFamily: 'serif',
  },

  blue: {
    backgroundColor: color.Lightblue,
    width: '94%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '3%',
    marginTop: '3%',
    borderRadius: 7,
  },

  id: {
    width: '35%',
    height: '35%',
    backgroundColor: color.golden,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 15,
  },

  idtext: {
    fontFamily: 'serif',
    fontSize: 12,
    color: color.Black,
  },

  flatlist: {
    backgroundColor: color.peach,
    height: 100,
  },
  flatview: {
    marginTop: '3%',
    height: '55%',
  },
  flat: {
    marginLeft: '3%',
    width: '94%',
    borderColor: color.grey,
    borderWidth: 1,
    borderRadius: 7,
    marginTop: '2%',
  },
  vehicleV: {
    marginLeft: '6%',
  },
  vehicleT: {
    fontSize: 9,
    fontFamily: 'serif',
    color: color.Black,
  },

  vtext: {
    fontSize: 15,
    fontFamily: 'serif',
    marginTop: '4%',
    color: color.darkblue,
    fontWeight: 'bold',
  },
  makeV: {
    marginLeft: '23%',
  },

  modelV: {
    marginLeft: '18%',
  },

  subview: {
    marginTop: '3%',
  },

  subviewT: {
    marginLeft: '5%',
    fontFamily: 'serif',
    fontSize: 12,
    color: color.Black,
    fontWeight: 'bold',
  },
  subviewL: {
    marginLeft: '5%',
    fontFamily: 'serif',
    fontSize: 12,
    color: color.Black,
    fontWeight: 'bold',
  },
  miles: {
    marginLeft: '5%',
    fontFamily: 'serif',
    fontSize: 12,
    color: color.Black,
    fontWeight: 'bold',
    marginTop: '1%',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },

  sync: {
    width: '25%',
    marginLeft: '30%',
    marginTop: '1%',
    backgroundColor: color.green,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  synctext: {
    color: color.White,
    padding: '3%',
    fontFamily: 'serif',
  },
  tick: {
    fontSize: 17,
  },

  buttonPI: {
    width: '25%',
    borderTopEndRadius: 11,
    borderBottomLeftRadius: 11,
    padding: '2%',
    justifyContent: 'center',
    backgroundColor: color.rose,
  },
  buttontext: {
    fontFamily: 'serif',
    color: color.White,
    fontSize: 13,
  },

  recordbtn: {
    width: '30%',
    borderTopEndRadius: 11,
    borderTopLeftRadius: 11,
    padding: '2%',
    backgroundColor: color.rose,
    alignItems: 'center',
    marginLeft: '2%',
  },
  checkin: {
    width: '19%',
    borderTopEndRadius: 11,
    borderTopLeftRadius: 11,
    padding: '2%',
    backgroundColor: color.rose,
    alignItems: 'center',
    marginLeft: '2%',
  },
  checkout: {
    width: '20%',
    borderTopLeftRadius: 11,
    borderBottomRightRadius: 11,
    padding: '2%',
    backgroundColor: color.rose,
    alignItems: 'center',
    marginLeft: '2%',
  },
});

export default Styles;
