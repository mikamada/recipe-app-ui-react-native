import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'

const WellcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={require("../../assets/images/welcome1.png")}
        style={{ marginTop: 30 }}
      />

      <Text
        style={{
          fontSize: 42,
          fontWeight: "bold",
          color: "#3c444c",
          marginTop: 44,
          marginBottom: 40
        }}
      >
        Cook Like A Chef
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("RecipeList")}
        style={{
          backgroundColor: "#f96163",
          borderRadius: 18,
          paddingVertical: 18,
          width: "80%",
          alignItems: "center"
        }}
      >
        <Text style={{
          fontSize: 18, color: "#fff", fontWeight: "700"
        }}>
          Let's GO
        </Text>
      </TouchableOpacity>

    </View>
  )
}

export default WellcomeScreen

const styles = StyleSheet.create({})
