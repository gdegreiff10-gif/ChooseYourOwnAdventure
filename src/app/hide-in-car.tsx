import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Intro" }} />
      <Text style={styles.text}>Fire Watch</Text>
      <Text style={styles.story}>
        For a while nothing happens, you decide to go to the backseat and lay on
        the floor in case anything looks through the windows. You lay there for
        an hour, two hours, three hours. Nothing happens, though you did hear
        the forest near you shaking, but that was two hours ago. You decide to
        sleep there until morning so you don't have to go back in the dark. In
        the morning you get the water and start walking back, nothing comes for
        you. On the 14th day the radio turns on again. Someone is coming to get
        you out of the forest. You have 2 hours until extraction. Extraction is
        5 miles away. You have extra gasoline at the station. Do you decide to
        fill a jerry can with gas and take the car, this will add a mile to the
        trip, the car is in the opposite direction. The second option is to
        run/Walk to extraction if needed
      </Text>
      <Link href="/fill-car-drive" style={styles.button}>
        fill the car and drive
      </Link>
      <Text style={styles.story}> or </Text>
      <Link href="/run-extraction" style={styles.button}>
        run to extraction
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
