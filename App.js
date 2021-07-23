import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { TopDrawerNavigator } from './navigation/TopDrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <TopDrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
