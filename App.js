import React from "react"; 
import { StyleSheet, Text, View } from "react-native"; 
import { createAppContainer } from "react-navigation"; 
import { createBottomTabNavigator } from "react-navigation-tabs"; 

import fb from "./screens/fb"; 
import insta from "./screens/insta";

export default function App() {
  return (
    <View>
    <AppContainer/>
    </View>
  );
}

var AppNavigator = createBottomTabNavigator({
  fb : {Screens:fb},
  insta : {Screens:insta}
})

const AppContainer = createAppContainer(TabNavigator)
