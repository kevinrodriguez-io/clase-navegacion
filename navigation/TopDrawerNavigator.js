import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DETAIL_VIEW } from "./MainStackNavigator";
import { DetailView } from "../views/Detail";
import { MainBottomTabsNavigator } from "./MainBottomTabsNavigator";
import { MainMaterialTopTabsNavigator } from "./MainMaterialTopTabsNavigator";
const DrawerNavigator = createDrawerNavigator();

const MAIN_BOTTOM_TABS_NAVIGATOR = "MAIN_BOTTOM_TABS_NAVIGATOR";
const MAIN_MATERIAL_TOP_TABS_NAVIGATOR = "MAIN_MATERIAL_TOP_TABS_NAVIGATOR";

export const TopDrawerNavigator = () => {
  return (
    <DrawerNavigator.Navigator>
      <DrawerNavigator.Screen
        component={MainBottomTabsNavigator}
        name={MAIN_BOTTOM_TABS_NAVIGATOR}
      />
      <DrawerNavigator.Screen
        component={MainMaterialTopTabsNavigator}
        name={MAIN_MATERIAL_TOP_TABS_NAVIGATOR}
      />
      <DrawerNavigator.Screen
        component={DetailView}
        initialParams={{
          textToShow: "HOLA DESDE DRAWER",
        }}
        name={DETAIL_VIEW}
      />
    </DrawerNavigator.Navigator>
  );
};
