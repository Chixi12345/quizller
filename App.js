import {StyleSheet, View, Text} from 'react-native';
// import React from 'react';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';
import MyStack from './navigation';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import * as React from 'react';

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
