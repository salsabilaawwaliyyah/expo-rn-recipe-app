import React from "react";

import RecipeListScreen from "./RecipeListScreen";
import SavedRecipesScreen from "./SavedRecipesScreen";
import ScanRecipesScreen from "./ScanRecipeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "pink", // Warna saat tab aktif
        tabBarInactiveTintColor: "gray", // Warna saat tab tidak aktif
      }}
    >
      <Tab.Screen
        name="RecipeListScreen"
        component={RecipeListScreen}
        options={{
          title: "Recipes",
          tabBarLabel: "Recipes",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ScanRecipesScreen"
        component={ScanRecipesScreen}
        options={{
          title: "Scan",
          tabBarLabel: "Scan",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "scan-circle-sharp" : "scan-circle-outline"}
              size={45}
              marginTop={-20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SavedRecipesScreen"
        component={SavedRecipesScreen}
        options={{
          title: "Saved",
          tabBarLabel: "Saved",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "save-sharp" : "save-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
