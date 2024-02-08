import { useState } from "react";
import { StyleSheet, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function CardTask({ title, description, date, completed }) {
  const [isDone, setIsDone] = useState(completed);
  return (
    <View style={styles.card}>
      <BouncyCheckbox
        onPress={setIsDone}
        isChecked={isDone}
        fillColor="#FCEEF1"
        iconStyle={{
          borderColor: "#130C1C",
          borderWidth: 5,
        }}
        iconImageStyle={{
          tintColor: "#130C1C",
        }}
        size={30}
        text={title}
        textStyle={{
          fontFamily: "DMSans-Regular",
          fontSize: 18,
          color: "#FCEEF1",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    paddingVertical: 5,
  },
});
