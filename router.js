import React from "react";
import { TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";

import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import PostsScreen from "./Screens/main/PostsScreen";
import CreatePostsScreen from "./Screens/main/CreatePostsScreen";
import ProfileScreen from "./Screens/main/ProfileScreen";

import GoBackBtn from "./components/GoBackBtn";

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      screenOptions={{
        // headerShown: false,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Roboto-Medium",
          //   fontWeight: "500",
          fontSize: 17,
          lineHeight: 22,
          letterSpacing: -0.4,
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingHorizontal: 58,
          paddingTop: 9,
          paddingBottom: 22,
          height: 71,
        },
        tabBarItemStyle: {
          borderRadius: 20,
          height: 40,
          marginHorizontal: 8,
        },
        tabBarActiveTintColor: "#212121cc",
        tabBarInactiveTintColor: "#212121cc",
        // tabBarActiveBackgroundColor: "#FF6C00",
      }}
    >
      <MainTab.Screen
        options={{
          headerStyle: { height: 70 },
          headerRight: () => (
            <TouchableOpacity style={{ width: 24, marginRight: 16 }}>
              <MaterialIcons name="logout" size={24} color={"#BDBDBD"} />
            </TouchableOpacity>
          ),
          headerShown: true,

          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="appstore-o" size={24} color={color} />
          ),
        }}
        name="Публикации"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          headerLeft: () => <GoBackBtn />,
          tabBarStyle: { display: "none" },
          tabBarItemStyle: {
            backgroundColor: "#FF6C00",
            borderRadius: 20,
          },
          tabBarIcon: ({ focused, size }) => (
            <Ionicons name="add-outline" size={24} color={"#ffffff"} />
          ),
        }}
        name="Создать публикацию"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="ios-person-outline" size={24} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
