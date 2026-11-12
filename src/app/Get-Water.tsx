import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Get Water" }} />
      <Text style={styles.text}>Fire Watch</Text>
      <Text style={styles.story}>
        You immediately run out towards the other station. Maybe whatever is out
        there is not near you now and you don't want to waste any time. It's
        getting dark, 5:00 pm. You only have 2 miles to go, and you have enough
        stamina to run there and back even with the water if you have to.
        However, you can also drive your car off-road. The only issue is that
        it's loud.
      </Text>
      <Link href="/Take-The-Car" style={styles.button}>
        Take the car
      </Link>
      <Text style={styles.story}> or </Text>
      <Link href="/Run" style={styles.button}>
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
