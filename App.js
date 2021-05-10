// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Button, Alert, Platform, StatusBar } from 'react-native';

export default function App() {
  // let x = 1;
  const handlePress = (what) =>{
    console.log( what + " pressed");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress("Text")}>Hello!!</Text>

      <TouchableOpacity>
        <Image onPress={handlePress("Image")}
        blurRadius={1}
        fadeDuration={500}
        source ={require('./assets/favicon.png')}></Image>
      </TouchableOpacity>

      <TouchableOpacity>
        {/* <Button 
        color="blue"
        title = "Add" onPress={() => Alert.alert("Hello", "Button Pressed",[
          {text: "Yes", onPress: () => Alert.alert("Congratulation!")},
          {text: "No", onPress: () => Alert.alert("Ops, bad luck!")}])}
        /> */}
         <Button 
        color="blue"
        title = "Add" onPress={() => 
          Alert.alert("Done", "Button successfull",[
            {text: "Yes", onPress: () => Alert.alert("Congratulation!")},
            {text: "No", onPress: () => Alert.alert("Ops, bad luck!")}])}
        />
      </TouchableOpacity>

      
     
      {/* <StatusBar style="auto" /> */}
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
