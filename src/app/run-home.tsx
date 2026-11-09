import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Intro" }} />
      <Text style={styles.text}>Fire Watch</Text>
      <Text style={styles.story}>
        The creature is smart, it was stalking you and was climbing through the
        trees. Right when you get out you hear a thud somewhere off trail to
        your left. You start running as fast as you can. Bad decision. You
        somehow make it home but you only have two days of water and after
        running you need more. You are too scared to go out again and you take
        your chances with the water. You die of dehydration.
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
