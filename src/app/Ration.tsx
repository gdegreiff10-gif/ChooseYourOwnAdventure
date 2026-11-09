import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Ration Water" }} />
      <Text style={styles.text}>Fire Watch</Text>
      <Text style={styles.story}>
        You don't have enough water to last the time. You are now very
        dehydrated and only have enough strength to [[walk]] to the other
        station. You have to do it, there's no other way of survival.
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
