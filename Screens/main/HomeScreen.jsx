import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostsScreen from "./PostsScreen";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";

const NestedStack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <NestedStack.Navigator
      initialRouteName={PostsScreen}
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Roboto-Bold",
          fontSize: 17,
          lineHight: 22,
          letterSpacing: -0.4,
        },
      }}
    >
      <NestedStack.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerStyle: { height: 70 },
          headerRight: () => (
            <TouchableOpacity style={{ width: 24, marginRight: 16 }}>
              <MaterialIcons name="logout" size={24} color={"#BDBDBD"} />
            </TouchableOpacity>
          ),
        }}
      />
    </NestedStack.Navigator>
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
