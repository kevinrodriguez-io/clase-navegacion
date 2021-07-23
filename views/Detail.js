import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export const DetailView = ({
  navigation,
  route
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.roundedButton}
        onPress={() => {
          navigation.pop();
        }}
      >
        <Text style={styles.roundedButtonText}>Regresar</Text>
      </TouchableOpacity>
      <Text>{route.params.textToShow}</Text>
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
});
