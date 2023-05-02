import React from 'react';
import Increment from './src/screen/increment';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

function App() {
  return (
    // <SafeAreaView style={Styles.container}>
    //   <Header></Header>
    //   <Section></Section>
    // </SafeAreaView>
    <Provider store={store}>
      <Increment></Increment>
    </Provider>
  );
}

export default App;
