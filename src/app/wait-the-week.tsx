import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Intro" }} />
      <Text style={styles.text}>Fire Watch</Text>
      <Text style={styles.story}>
        At the end of the week you run to extraction at the time specified.
        There's a helicopter there. You are within 100 feet when all of a sudden
        you hear the wailing of the creature. You run as fast as you can, and
        you get to the helicopter. Just as the creature is about to get you, you
        get on the helicopter. The helicopter takes off and flies away. You look
        down, you see a man waving at you. It can copy people. You are safe
        though, and you go home. You never go back to any firewatch position
        ever.
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
