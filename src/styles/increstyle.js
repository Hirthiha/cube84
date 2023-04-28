import {StyleSheet} from 'react-native';
import color from './color';

const instyle = StyleSheet.create({
  count: {
    flex: 1,
    backgroundColor: color.White,
    alignItems: 'center',
    justifyContent: 'center',
  },
  increment: {
    width: '16%',
    backgroundColor: color.blue,
    alignItems: 'center',
    borderColor: color.Black,
    borderWidth: 2,
    borderRadius: 7,
  },
  incre: {
    fontSize: 30,
    color: color.White,
    textAlign: 'center',
  },
  countText: {
    fontSize: 60,
    color: color.blue,
    fontFamily: 'times new roman',
  },
  display: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 50,
    marginTop: '10%',
  },
});

export default instyle;
