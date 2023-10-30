import React from 'react'
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { categories, colors } from "../constan"

const CategoriesFilter = () => {
  return (
    <View>
      <ScrollView horizontal showsVerticalScrollIndicator={false}>
        {categories.map((category, idx) => {
          return (
            <View key={idx} style={{ backgroundColor: idx === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT, marginRight: 36, borderRadius: 8, paddingHorizontal: 16, paddingVertical: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 7, marginVertical: 16 }}>
              <Text
                style={{
                  color: idx === 0 && colors.COLOR_LIGHT,
                  fontSize: 18
                }}>
                {category.category}
              </Text>
            </View>
          )
        })}

      </ScrollView>
    </View>
  )
}

export default CategoriesFilter
