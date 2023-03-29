import React from 'react';
import { API_KEY } from '@env';
import { Stacks } from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <Provider store={store}>
      <Stacks />
    </Provider>
  );
};

export default App;
