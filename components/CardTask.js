import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function CardTask({ title, description, date, completed }) {
  const [isDone, setIsDone] = useState(completed);
  return (
    <View style={styles.card}>
      <BouncyCheckbox
        onPress={setIsDone}
        isChecked={isDone}
        fillColor="#003566"
        size={30}
        text={title}
        textStyle={{
          fontFamily: "DMSans-Regular",
          fontSize: 18,
          color: "#003566",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
});
