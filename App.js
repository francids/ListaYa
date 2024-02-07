import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { loadAsync } from "expo-font";

import CardTask from "./components/CardTask";
import Divider from "./components/Divider";

export default function App() {
  loadAsync({
    "DMSans-Black": require("./assets/fonts/DMSans-Black.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
    "DMSans-Medium": require("./assets/fonts/DMSans-Medium.ttf"),
    "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
    "DMSans-Light": require("./assets/fonts/DMSans-Light.ttf"),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ListaYa</Text>
      <Divider width={20} transparent />
      <CardTask
        title="Tarea 1"
        description="Descripción de la tarea 1"
        date="2021-10-10"
      />
      <CardTask
        title="Tarea 2"
        description="Descripción de la tarea 2"
        date="2021-10-11"
        completed
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "start",
    justifyContent: "start",
    marginLeft: 25,
    marginRight: 25,
    marginTop: 60,
  },
  title: {
    fontSize: 36,
    color: "#003566",
    fontFamily: "DMSans-Black",
  },
});
