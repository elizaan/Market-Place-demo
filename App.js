// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Button, Alert, Platform, StatusBar } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';

export default function App() {
  const {landscape} = useDeviceOrientation();
  // let x = 1;
  // const handlePress = (what) =>{
  //   console.log( what + " pressed");
  // }
  return (
    <SafeAreaView style={styles.container}>
      <View 
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "30%"
      }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: Platform.OS === "Android" ? StatusBar.CurrentHeight : 0
    // alignItems: 'center',
    // justifyContent: 'center',

  },
});
