import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import instyle from '../../styles/increstyle';

function Increment() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };
  return (
    <View style={instyle.count}>
      {/* //count */}

      <Text style={instyle.countText}>{count}</Text>

      <View style={instyle.display}>
        {/* //decrement */}
        <TouchableOpacity style={instyle.increment} onPress={decrement}>
          <Text style={instyle.incre}>-</Text>
        </TouchableOpacity>
        {/* increment */}
        <TouchableOpacity style={instyle.increment} onPress={increment}>
          <Text style={instyle.incre}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Increment;
