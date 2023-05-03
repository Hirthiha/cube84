import {Text, TouchableOpacity, View} from 'react-native';
import instyle from '../styles/increstyle';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../../redux/action';

function Increment() {
  const count = useSelector(state => state.count);
  console.log(count, 'local');
  const dispatch = useDispatch();

  const incre = () => {
    dispatch(increment());
  };

  const decre = () => {
    dispatch(decrement());
  };
  return (
    <View style={instyle.count}>
      {/* //count */}

      <Text style={instyle.countText}>{count}</Text>

      <View style={instyle.display}>
        {/* //decrement */}
        <TouchableOpacity style={instyle.increment} onPress={decre}>
          <Text style={instyle.incre}>-</Text>
        </TouchableOpacity>

        {/* increment */}
        <TouchableOpacity style={instyle.increment} onPress={incre}>
          <Text style={instyle.incre}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Increment;
