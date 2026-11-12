import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Intro" }} />
      <Text style={styles.text}>Fire Watch</Text>
      <Text style={styles.story}>
        You get in the car. It has low gas but you think you can make it. You
        start driving as fast as you can to not flip it. You get to the other
        station, it's quiet, there's usually someone here. You flip on the light
        and see blood on the floor, the trail leads up the stairs. You decide
        quickly to start loading the truck with water. You get all 7 days worth,
        but then you hear creaking on the stairs. You load the truck as fast as
        you can, the creaking is getting louder. You get into the car, you can't
        see behind you, it's too dark. You start driving as fast as you can. You
        can hear something wailing behind you and then the footsteps start. They
        are loud, deliberate and coming towards you. You have half a mile left
        to go when the car starts to slow down. The gas is gone. However, the
        footsteps seem to have subsided. Do you decide to hide in the car until
        you are sure the coast is clear or run home as fast as you can?
      </Text>
      <Link href="/hide-in-car" style={styles.button}>
        Hide
      </Link>
      <Text style={styles.story}> or </Text>
      <Link href="/run-home" style={styles.button}>
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
