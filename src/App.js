/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import Assets from './assets';
import { Provider } from 'react-redux';
import store from 'store';
import Main from './features/main/containers';
import Styles from './styles';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={Styles.MainContainer}>
        <Main />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
