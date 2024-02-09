import { useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { loadAsync } from "expo-font";

import CardTask from "./components/CardTask";
import Divider from "./components/Divider";
import AddIconButton from "./components/AddIconButton";

const tasks = [
  {
    id: 1,
    title: "Tarea 1",
    description: "Descripción de la tarea 1",
    date: "2021-10-10",
  },
  {
    id: 2,
    title: "Tarea 2",
    description: "Descripción de la tarea 2",
    date: "2021-10-11",
    completed: true,
  },
  {
    id: 3,
    title: "Tarea 3",
    description: "Descripción de la tarea 3",
    date: "2021-10-12",
    completed: true,
  },
  {
    id: 4,
    title: "Tarea 4",
    description: "Descripción de la tarea 4",
    date: "2021-10-13",
  },
  {
    id: 5,
    title: "Tarea 5",
    description: "Descripción de la tarea 5",
    date: "2021-10-14",
  },
];

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    loadAsync({
      "DMSans-Black": require("./assets/fonts/DMSans-Black.ttf"),
      "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
      "DMSans-Medium": require("./assets/fonts/DMSans-Medium.ttf"),
      "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
      "DMSans-Light": require("./assets/fonts/DMSans-Light.ttf"),
    }).then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.title}>ListaYa</Text>
        <AddIconButton
          icon={"plus"}
          onPress={() => console.log("Add-task")}
          iconColor={"#130C1C"}
          iconBackground={"#FCEEF1"}
        />
      </View>
      <Divider height={10} />
      {tasks.map((task) => (
        <CardTask
          key={task.id}
          title={task.title}
          description={task.description}
          date={task.date}
          completed={task.completed}
        />
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130C1C",
    alignItems: "start",
    justifyContent: "start",
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    color: "#FCEEF1",
    fontFamily: "DMSans-Black",
  },
});
