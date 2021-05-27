import React from 'react';
import {View, Text} from 'react-native';
import MainStack from './routes/MainStack';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import Home from './container/screens/Home';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MainStack />
      </Provider>
    </>
  );
};

export default App;
