import React from "react";
import { Text, View, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={StyleSheet.container}>
      <Text> HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
