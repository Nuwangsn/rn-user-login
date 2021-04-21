import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';

import UserNavigator from './navigation/UserNavigator';
import userReducer from './store/reducer/user';

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <UserNavigator />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
