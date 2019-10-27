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

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text>Image!</Text>
          <Image style={{width: 100, height: 200}} source={Assets.a} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
