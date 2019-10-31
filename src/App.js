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
import Main from './features/main/containers';
import Styles from './styles';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView style={Styles.MainContainer}>
        <Main />
      </SafeAreaView>
    </>
  );
};

export default App;
