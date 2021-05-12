// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Platform, StatusBar} from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen.js';
import WelcomeScreen from './app/screens/WelcomeScreen.js';

// import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';


export default function App() {
  
  // return <WelcomeScreen/>;
  return <ViewImageScreen/>;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingVertical: Platform.OS === "Android" ? StatusBar.CurrentHeight : 0
//     // alignItems: 'center',
//     // justifyContent: 'center',

//   },
// });
