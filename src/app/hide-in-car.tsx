import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Intro" }} />
      <Text style={styles.text}>Fire Watch</Text>
      <Text style={styles.story}>
        At the 1.5 mile point, you hear branches snapping behind you. You look
        around but can't see anything. Suddenly a deer crosses your path, it
        scares you. The deer turns its head around, towards your right, then
        runs. The forest goes quiet. Do you [[hide]] or [[run to the tower with
        supplies]]?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 32,
  },
  story: {
    margin: 128,
    color: "#fff",
    fontSize: 16,
  },
});
