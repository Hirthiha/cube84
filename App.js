import React from 'react';
import AsyncIncrement from './src/screen/asyncIncrement';

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

    <AsyncIncrement></AsyncIncrement>
  );
}

export default App;
