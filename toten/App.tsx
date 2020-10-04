/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';
import Routes from './src/routes/index';
import 'react-native-gesture-handler';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </>
  );
};

export default App;
