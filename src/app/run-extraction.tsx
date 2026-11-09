import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Intro" }} />
      <Text style={styles.text}>Fire Watch</Text>
      <Text style={styles.story}>
        You head towards extraction. You don't hear any forest animals, strange
        but you continue. You get to the extraction and nothing is there, even
        more strange. Behind you, you hear the guy who told you that extraction
        is now. You turn around, it's not him. It's not even human. The thing
        can copy voices. You accept your fate.
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
