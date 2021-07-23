import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeView } from "../views/Home";
import { DetailView } from "../views/Detail";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'; 


export const HOME_VIEW = "HOME_VIEW";
export const DETAIL_VIEW = "DETAIL_VIEW";

const StackNavigator = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name={HOME_VIEW}
        component={HomeView}
        options={{
          title: "Vista principal",
          headerTitleAlign: "center",
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => {
                navigation.toggleDrawer();
              }}>
                <Ionicons name="menu" size={24} color="black" />
              </TouchableOpacity>
            );
          },
        }}
      />
      <StackNavigator.Screen
        name={DETAIL_VIEW}
        component={DetailView}
        options={{
          title: "Detalle",
          headerTitleAlign: "center",
        }}
      />
    </StackNavigator.Navigator>
  );
};
