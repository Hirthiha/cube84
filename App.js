import React from 'react';
import {SafeAreaView} from 'react-native';
import Styles from './src/style/styles';
import Section from './src/screen/Seaction';
import Header from './src/container/header';

function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <Header></Header>
      <Section></Section>
    </SafeAreaView>
  );
}

export default App;
