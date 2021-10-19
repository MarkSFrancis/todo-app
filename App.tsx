import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Todo } from "./src/Todo";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Todo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
