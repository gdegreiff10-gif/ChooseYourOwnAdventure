import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Intro" }} />
      <Text style={styles.text}>Fire Watch</Text>
      <Text style={styles.story}>
        You get to the car without trouble. You fill it up and it now has gas
        for days. You head towards extraction, when you see the guy who told you
        to come to extraction. Strange, he doesn't work in the forest. You see
        him start to contort. He becomes a horror beyond your imagination. It
        starts chasing you. You head towards extraction at full speed when you
        see nothing there. The monster can copy voices you realize now. The
        trail keeps going though, and you've heard rumours of a military base
        somewhere in this direction. 10 miles until there. The trail only has 1
        path. You are half a mile away from the military base when suddenly you
        crash the car, you hurt your head but your determination to live gets
        you out of the car. It's still chasing you, you can't see it but you
        hear its wails still. You run as fast as you can to the military base.
        You see it, you are almost at the door when you feel a dart hit you. You
        wake up later in a concrete room. You try to stand up but are caught in
        handcuffs. A guy comes in, black suit, cold expression. He explains to
        you that the monster which haunted you was a creation of a U.S military
        experiment. He also explains that it was never meant to be released, but
        was because of an empathetic scientist studying it who became personally
        attached to it. He died. However, he, and you, know that you can't be
        released to society because you'll tell everyone about it. A guy in a
        lab coat comes in, he's holding a needle. You wake up later at home. You
        knock on your mom's apartment room door like you always do. She opened
        the door and was shocked to see you, she hadn't seen you in a year, she
        thought that you were still at the firewatch tower. You respond with
        "what fire watch tower?"
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
    margin: 16,
    color: "#fff",
    fontSize: 16,
  },
});
