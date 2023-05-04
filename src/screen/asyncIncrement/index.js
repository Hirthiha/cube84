import {Text, TouchableOpacity, View} from 'react-native';
import instyle from '../styles/increstyle';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function AsyncIncrement() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AsyncStorage.getItem('count').then(value => {
      if (value !== null) {
        setCount(parseInt(value));
      }
    });
  }, []);

  const increment = async () => {
    const newCount = count + 1;
    setCount(newCount);

    await AsyncStorage.setItem('count', newCount.toString());
  };

  const decrement = async () => {
    const newCount = count - 1;
    if (newCount >= 0) {
      setCount(newCount);

      await AsyncStorage.setItem('count', newCount.toString());
    }
  };

  return (
    <View style={instyle.count}>
      <Text style={instyle.countText}>{count}</Text>
      <View style={instyle.display}>
        <TouchableOpacity style={instyle.increment} onPress={decrement}>
          <Text style={instyle.incre}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={instyle.increment} onPress={increment}>
          <Text style={instyle.incre}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AsyncIncrement;
