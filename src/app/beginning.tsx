import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fire Watch</Text>
      <Text style={styles.story}>
        You are at a firewatch station. the radio suddenly turns on and someone
        talks. They say that something is in the forest, don't come out for 2
        weeks. Extraction will come for you. Over the radio you hear a branch
        snap and then suddenly no one is talking, but you think you hear
        screaming in the back. You immediately check how many supplies you have.
        You only have 2 days of water, you were planning to pick some up at the
        supply drop off spot later. You have all the other supplies needed.
        Which will you do:
      </Text>
      <Link href="/Get-Water" style={styles.button}>
        Get water
      </Link>
      <Text style={styles.story}>Or</Text>
      <Link href="/Ration" style={styles.button}>
        Ration Water
      </Link>
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
    margin: 16,
    color: "#fff",
    fontSize: 16,
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#405a70",
    margin: 16,
  },
});
