import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Header from './src/Screen/header';
import Styles from './src/styles';
import Section from './src/Screen/Seaction';

function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <Header></Header>
      <Section></Section>
    </SafeAreaView>
  );
}

export default App;
