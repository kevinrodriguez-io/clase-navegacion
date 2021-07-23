import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DETAIL_VIEW, MainStackNavigator } from "./MainStackNavigator";
import { DetailView } from "../views/Detail";

export const MAIN_STACK_NAVIGATOR = "MAIN_STACK_NAVIGATOR";

const BottomTabNavigator = createBottomTabNavigator();

export const MainBottomTabsNavigator = () => {
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen
        component={MainStackNavigator}
        name={MAIN_STACK_NAVIGATOR}
        options={{
          tabBarLabel: "Vista Principal",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        component={DetailView}
        name={DETAIL_VIEW}
        initialParams={{
          textToShow: "HOLA DESDE BOTTOM TABS"
        }}
        options={{
          tabBarLabel: "Detalle",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="star" color={color} size={size} />
          ),
        }}
      />
    </BottomTabNavigator.Navigator>
  );
};
