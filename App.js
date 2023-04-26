import React from 'react';
import {View, Text} from 'react-native';
import Header from './src/header';
import Styles from './src/styles';

function App() {
  return (
    <View style={Styles.container}>
      <Header></Header>
    </View>
  );
}

export default App;
