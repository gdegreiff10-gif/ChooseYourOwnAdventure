import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const bookCover = require("@/assets/images/Baptiste-telephoto.jpg");

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={bookCover} style={styles.image} />
      <Text style={styles.text}>Firewatch</Text>
      <Link href="/beginning" style={styles.button}>
        Start your adventure!
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    boxShadow: "1.8px 3.5px 3.5px hsl(0deg 0% 0% / 0.45)",
    borderRadius: 16,
    width: "65%",
    height: "65%",
    margin: 8,
  },
  container: {
    flex: 1,
    backgroundColor: "#2c2e30",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 32,
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#405a70",
    margin: 20,
  },
});
