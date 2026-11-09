import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Walk" }} />
      <Text style={styles.text}>Fire Watch</Text>
      <Text style={styles.story}>
        It's day 4. You start walking. The thing in the forest sees you, you see
        it. You try to run but trip and fall. You don't have much energy. You
        accept your fate.
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
