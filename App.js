import React from 'react';
import {SafeAreaView} from 'react-native';
import Styles from './src/Style/styles';
import Section from './src/Components/Seaction';
import Header from './src/Components/header';

function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <Header></Header>
      <Section></Section>
    </SafeAreaView>
  );
}

export default App;
