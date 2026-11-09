import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Intro" }} />
      <Text style={styles.text}>Fire Watch</Text>
      <Text style={styles.story}>
        You are at a firewatch station. the radio suddenly turns on and someone
        talks. They say that something is in the forest, don't come out for 2
        weeks. Extraction will come for you. Over the radio you hear a branch
        snap and then suddenly no one is talking, but you think you hear
        screaming in the back. You immediately check how many supplies you have.
        You only have 2 days of water, you were planning to pick some up at the
        supply drop off spot later. You have all the other supplies needed.
        Which will you do: [[Option 1: Get water]] or [[Option 2: Ration water
        and don't leave]]
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
