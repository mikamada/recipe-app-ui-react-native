import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native"
import React from 'react'
import Header from "../components/Header"
import CategoriesFilter from "../components/CategoriesFilter"
import SearchFilter from "../components/SearchFilter"
import RecipeCard from "../components/RecipeCard"

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16, marginVertical: 30 }}>
      {/* Header */}
      <Header headerText={"Hi, John Doe "} headerIcon={"bell-o"} />

      <SearchFilter icon="search" placeholder={"Enter your favorite recipe"} />

      {/* Category filter */}
      <View style={{ marginTop: 22 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
        <CategoriesFilter />
      </View>

      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
        <RecipeCard />
      </View>
    </SafeAreaView>
  )
}

export default RecipeListScreen
