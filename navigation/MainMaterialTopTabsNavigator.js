import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { DETAIL_VIEW, MainStackNavigator } from "./MainStackNavigator";
import { DetailView } from "../views/Detail";

export const MAIN_STACK_NAVIGATOR = "MAIN_STACK_NAVIGATOR";

const MaterialTopTabsNavigator = createMaterialTopTabNavigator();

export const MainMaterialTopTabsNavigator = () => {
  return (
    <MaterialTopTabsNavigator.Navigator style={{
        marginTop: 60
    }}>
      <MaterialTopTabsNavigator.Screen
        component={MainStackNavigator}
        name={MAIN_STACK_NAVIGATOR}
        options={{
          tabBarLabel: "Vista Principal",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <MaterialTopTabsNavigator.Screen
        component={DetailView}
        name={DETAIL_VIEW}
        initialParams={{
          textToShow: "HOLA DESDE TOP TABS"
        }}
        options={{
          tabBarLabel: "Detalle",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="star" color={color} size={size} />
          ),
        }}
      />
    </MaterialTopTabsNavigator.Navigator>
  );
};
