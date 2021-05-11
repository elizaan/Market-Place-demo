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
          backgroundColor: "white",
          flex: 1,
          flexDirection: "row", //main
          alignItems: "center", //secondary
          justifyContent: "center", //main
          flexWrap: "wrap",
          alignContent: "center"

      }}>
        < View style={{
          backgroundColor:"dodgerblue",
          // flex : 0.25
          width: "100%",
          height: "20%",
          // alignSelf: "center"

        }}></View>
        < View style={{
          backgroundColor:"gold",
          // flex : 1
          width: "100%",
          height: "20%"

        }}></View>
        < View style={{
          backgroundColor:"grey",
          // flex : 1,
          width: "100%",
          height: "20%"

        }}></View>
        < View style={{
          backgroundColor:"red",
          // flex: 1
          width: "100%",
          height: "20%"

        }}></View>
        < View style={{
          backgroundColor:"pink",
          // flex: 1
          width: "100%",
          height: "20%"

        }}></View>



      </View>
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
