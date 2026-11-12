import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Intro" }} />
      <Text style={styles.text}>Fire Watch</Text>
      <Text style={styles.story}>
        You hide behind the closest tree. Something comes running through the
        trail you were just walking on. The deer you just saw makes a cry, then
        stops. You took a bag with you to carry the water. Whatever is in this
        forest is now towards the left of the trail. You have an emergency space
        bivy, this reflects your body heat meaning you could technically sleep
        here until morning. Do you decide to sleep out until morning or run to
        the tower with supplies?
      </Text>
      <Link href="/sleep-morning" style={styles.button}>
        sleep
      </Link>
      <Text style={styles.story}> or </Text>
      <Link href="/run-to-tower" style={styles.button}>
        Run
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
    margin: 20,
  },
});
