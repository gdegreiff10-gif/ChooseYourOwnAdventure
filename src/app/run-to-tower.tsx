import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Intro" }} />
      <Text style={styles.text}>Fire Watch</Text>
      <Text style={styles.story}>
        You run as fast as you can. You are now within 400 feet of the tower.
        You hear a loud wail. You run faster, so does it. However, you get to
        the tower in time. You close it and lock the door as fast as you can.
        Then you press as much furniture on it as possible. You run up the
        stairs. Nothing follows you, but you hear banging on the door. After a
        while it subsides. You decide to stay in this tower. You have less
        knowledge of the forest around you but it's safer. For the 14 days you
        stay inside, look at the forest around you and sleep. You never see what
        is hunting you, it's good at hiding. On the last day the radio turns on.
        Some guy you've never heard says that extraction is coming in 2 hours. 1
        minute later, on the same channel it says wait another week, extraction
        will come then. You have the supplies to wait for another week, but you
        aren't sure who's telling the truth. Do you decide to Run/Walk to
        extraction if needed or wait the week?
      </Text>
      <Link href="/run-extraction" style={styles.button}>
        run to extraction
      </Link>
      <Text style={styles.story}> or </Text>
      <Link href="/wait-the-week" style={styles.button}>
        wait
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
