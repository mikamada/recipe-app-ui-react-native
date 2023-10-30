import { StyleSheet, Text, View } from "react-native"
import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import WellcomeScreen from "../screens/WellcomeScreen"

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WellcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
