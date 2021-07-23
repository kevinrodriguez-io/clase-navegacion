import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { DETAIL_VIEW } from "../navigation/MainStackNavigator";

export const HomeView = ({ navigation, route }) => {
  const [someText, setSomeText] = useState("");
  const handleGoToDetailPress = () => {
    navigation.push(DETAIL_VIEW, {
      textToShow: someText,
    });
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={(texto) => setSomeText(texto)}
        value={someText}
      />
      <TouchableOpacity
        style={styles.roundedButton}
        onPress={handleGoToDetailPress}
      >
        <Text style={styles.roundedButtonText}>Ir al detalle</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  roundedButton: {
    borderRadius: 5,
    height: 50,
    paddingHorizontal: 20,
    backgroundColor: "#024",
    alignItems: "center",
    justifyContent: "center",
  },
  roundedButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  textInputStyle: {
    borderColor: '#000',
    paddingHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    height: 50,
    borderRadius: 5,
    minWidth: 100,
  }
});
