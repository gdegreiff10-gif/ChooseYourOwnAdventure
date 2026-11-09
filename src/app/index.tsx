import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

const bookCover = require("@/assets/images/Baptiste-telephoto.jpg");

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={bookCover} style={styles.image} />
      <Text style={styles.text}>Fire Watch</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "80%",
    height: "80%",
  },
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
});
