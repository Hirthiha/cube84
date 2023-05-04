import React from 'react';
import Increment from './src/screen/increment';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import AsyncIncrement from './src/screen/asyncIncrement';
import {SafeAreaView} from 'react-native';
import Section from './src/screen/section';
import Styles from './src/screen/styles/styles';
import Header from './src/components/header';
import Home from './src/screen/shoppingCard';

function App() {
  return (
    //UI
    // <SafeAreaView style={Styles.container}>
    //   <Header></Header>
    //   <Section></Section>
    // </SafeAreaView>

    //redux
    // <Provider store={store}>
    //   <Increment></Increment>
    // </Provider>

    //increment and decrement using Asyncstorage
    // <AsyncIncrement></AsyncIncrement>

    // //Shopping Card
    <Home></Home>
  );
}

export default App;
